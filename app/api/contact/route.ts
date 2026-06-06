import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, message, type, date, time } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    // Save to database
    const booking = await prisma.booking.create({
      data: { firstName, lastName, email, phone, service, message, type: type || "contact", date, time },
    });

    // Send email if Resend key is configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && resendKey !== "re_your_api_key_here") {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendKey);
        const isBooking = type === "booking";

        await resend.emails.send({
          from: "Imani Website <onboarding@resend.dev>",
          to: "info@imanihomecares.com",
          replyTo: email,
          subject: isBooking ? `New Booking Request — ${firstName} ${lastName}` : `New Enquiry — ${firstName} ${lastName}`,
          html: isBooking
            ? `<h2>New Consultation Booking</h2><p><b>Name:</b> ${firstName} ${lastName}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone || "—"}</p><p><b>Date:</b> ${date || "—"}</p><p><b>Time:</b> ${time || "—"}</p><p><b>Service:</b> ${service || "—"}</p><p><b>Message:</b> ${message || "—"}</p>`
            : `<h2>New Contact Enquiry</h2><p><b>Name:</b> ${firstName} ${lastName}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone || "—"}</p><p><b>Service:</b> ${service || "—"}</p><p><b>Message:</b> ${message || "—"}</p>`,
        });
      } catch (emailErr) {
        console.error("Email error:", emailErr);
        // Don't fail the request if email fails — booking is already saved
      }
    }

    return NextResponse.json({ success: true, id: booking.id });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ success: false, error: "Failed to save booking" }, { status: 500 });
  }
}
