"use client";
import { useState } from "react";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Loader2, ChevronRight, ChevronLeft } from "lucide-react";

const services = [
  "Personal Care", "Companionship Care", "Dementia & Memory Care", "Stroke Care",
  "Meal Preparation", "Medication Reminders", "24-Hour / Live-In Care",
  "Non-Medical Transportation", "Light Housekeeping", "Respite Care",
  "Rehabilitation Support", "Not Sure - Need Guidance",
];

const times = ["8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"];

type Status = "idle" | "loading" | "success" | "error";
type Tab = "contact" | "booking";

const inputCls = "w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-[#1a202c] text-base focus:outline-none focus:border-[#1B7A3E] transition-colors";
const labelCls = "block text-sm font-semibold text-[#1a4a7a] mb-1.5";

export default function ContactPage() {
  const [tab, setTab] = useState<Tab>("contact");
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<Status>("idle");

  const [form, setForm] = useState({
    forWhom: "", patientName: "",
    service: "", date: "", time: "",
    firstName: "", lastName: "", email: "", phone: "", message: "",
  });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const reset = () => { setForm({ forWhom: "", patientName: "", service: "", date: "", time: "", firstName: "", lastName: "", email: "", phone: "", message: "" }); setStep(1); setStatus("idle"); };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: tab }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  const totalSteps = tab === "booking" ? 3 : 1;
  const progress = (step / totalSteps) * 100;

  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-gradient-to-br from-[#1a4a7a] to-[#1e5fa0] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-sm text-white/70 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get in Touch</h1>
          <p className="text-white/90 text-lg">Free consultation. No obligation. We'll help you find the right care.</p>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-10">

          {/* LEFT info card */}
          <AnimateIn direction="left" className="lg:col-span-2">
            <div className="bg-[#1a4a7a] text-white rounded-3xl p-8 h-full">
              <h3 className="text-xl font-bold mb-2" style={{color:'#ffffff'}}>Contact Information</h3>
              <p className="text-base mb-8" style={{color:'#ffffff'}}>We're here to answer questions and guide you through your options.</p>

              {[
                { icon: <Phone size={18} />, label: "Phone", value: "(336) 918-3198", href: "tel:+13369183198", sub: "Available 24/7 for urgent enquiries" },
                { icon: <Mail size={18} />, label: "Email", value: "info@imanihomecares.com", href: "mailto:info@imanihomecares.com", sub: "We respond within 1 business day" },
                { icon: <MapPin size={18} />, label: "Address", value: "615 St. George Square Ct #354, Winston Salem, NC 27103" },
                { icon: <Clock size={18} />, label: "Office Hours", value: "Mon - Fri: 8:00 am - 6:00 pm", sub: "Care available 24/7" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0" style={{color:'#ffffff'}}>{item.icon}</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{color:'#ffffff'}}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-base hover:text-[#7dd3fc] transition-colors break-all" style={{color:'#ffffff'}}>{item.value}</a>
                    ) : (
                      <p className="text-base" style={{color:'#ffffff'}}>{item.value}</p>
                    )}
                    {"sub" in item && item.sub && <p className="text-xs mt-0.5" style={{color:'rgba(255,255,255,0.85)'}}>{item.sub}</p>}
                  </div>
                </div>
              ))}

              <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wide" style={{color:'#ffffff'}}>Why families choose us</p>
                {["Free, no-obligation consultation", "Care starts as quickly as 24 hours", "Personalised plan - nothing generic"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm" style={{color:'#ffffff'}}>
                    <CheckCircle2 size={14} className="text-[#7dd3fc] shrink-0" />{item}
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* RIGHT form */}
          <AnimateIn direction="right" className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

              {/* Tabs */}
              <div className="flex gap-2 mb-7 bg-gray-100 p-1 rounded-xl">
                {(["contact", "booking"] as Tab[]).map((t) => (
                  <button key={t} onClick={() => { setTab(t); reset(); }}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${tab === t ? "bg-white text-[#1a4a7a] shadow-sm" : "text-[#4a5568] hover:text-[#1a4a7a]"}`}>
                    {t === "contact" ? "Send a Message" : "Book a Consultation"}
                  </button>
                ))}
              </div>

              {/* Success */}
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#e6f4ec] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-[#1B7A3E]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a4a7a] mb-2">{tab === "booking" ? "Booking Request Sent!" : "Message Sent!"}</h3>
                  <p className="text-[#4a5568] mb-6">We'll be in touch within 1 business day.</p>
                  <button onClick={reset} className="bg-[#1B7A3E] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#166b34] transition-colors">
                    Send Another
                  </button>
                </div>
              ) : tab === "contact" ? (
                /* Simple contact form */
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className={labelCls}>First Name *</label><input required className={inputCls} placeholder="Jane" value={form.firstName} onChange={set("firstName")} /></div>
                    <div><label className={labelCls}>Last Name *</label><input required className={inputCls} placeholder="Smith" value={form.lastName} onChange={set("lastName")} /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className={labelCls}>Email *</label><input required type="email" className={inputCls} placeholder="jane@example.com" value={form.email} onChange={set("email")} /></div>
                    <div><label className={labelCls}>Phone</label><input type="tel" className={inputCls} placeholder="(336) 000-0000" value={form.phone} onChange={set("phone")} /></div>
                  </div>
                  <div>
                    <label className={labelCls}>Service Interested In</label>
                    <select className={inputCls} value={form.service} onChange={set("service")}>
                      <option value="">— Select a service —</option>
                      {services.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Message</label>
                    <textarea rows={4} className={inputCls + " resize-none"} placeholder="Tell us about your situation and how we can help..." value={form.message} onChange={set("message")} />
                  </div>
                  {status === "error" && <p className="text-red-500 text-sm text-center">Something went wrong. Please try calling us directly.</p>}
                  <button type="submit" disabled={status === "loading"}
                    className="w-full bg-[#1B7A3E] hover:bg-[#166b34] disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base">
                    {status === "loading" ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : "Send Message"}
                  </button>
                </form>
              ) : (
                /* Multi-step booking form */
                <form onSubmit={step < 3 ? (e) => { e.preventDefault(); setStep(s => s + 1); } : submit}>
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      {["Who needs care", "Service & time", "Your details"].map((label, i) => (
                        <div key={label} className="flex items-center gap-1.5">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step > i ? "bg-[#1B7A3E] text-white" : step === i + 1 ? "bg-[#1a4a7a] text-white" : "bg-gray-200 text-gray-500"}`}>
                            {step > i ? "✓" : i + 1}
                          </div>
                          <span className={`text-xs font-medium hidden sm:block ${step === i + 1 ? "text-[#1a4a7a]" : "text-[#4a5568]"}`}>{label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#1B7A3E] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                    </div>
                  </div>

                  {/* Step 1 */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <div>
                        <label className={labelCls}>Who needs care?</label>
                        <div className="grid grid-cols-2 gap-3 mt-1">
                          {["For a family member", "For myself"].map((opt) => (
                            <button type="button" key={opt} onClick={() => setForm(f => ({ ...f, forWhom: opt }))}
                              className={`py-4 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${form.forWhom === opt ? "border-[#1B7A3E] bg-[#e6f4ec] text-[#1a4a7a]" : "border-gray-200 text-[#4a5568] hover:border-[#1B7A3E]"}`}>
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Patient's name</label>
                        <input className={inputCls} placeholder="e.g. Mary Smith" value={form.patientName} onChange={set("patientName")} />
                      </div>
                      <div>
                        <label className={labelCls}>Any additional details</label>
                        <textarea rows={3} className={inputCls + " resize-none"} placeholder="e.g. My mother has dementia and needs daily support..." value={form.message} onChange={set("message")} />
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <div>
                        <label className={labelCls}>Service needed</label>
                        <select required className={inputCls} value={form.service} onChange={set("service")}>
                          <option value="">— Select a service —</option>
                          {services.map((s) => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Preferred date</label>
                          <input type="date" className={inputCls} value={form.date} onChange={set("date")} min={new Date().toISOString().split("T")[0]} />
                        </div>
                        <div>
                          <label className={labelCls}>Preferred time</label>
                          <select className={inputCls} value={form.time} onChange={set("time")}>
                            <option value="">— Select time —</option>
                            {times.map((t) => <option key={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div><label className={labelCls}>First Name *</label><input required className={inputCls} placeholder="Jane" value={form.firstName} onChange={set("firstName")} /></div>
                        <div><label className={labelCls}>Last Name *</label><input required className={inputCls} placeholder="Smith" value={form.lastName} onChange={set("lastName")} /></div>
                      </div>
                      <div><label className={labelCls}>Email *</label><input required type="email" className={inputCls} placeholder="jane@example.com" value={form.email} onChange={set("email")} /></div>
                      <div><label className={labelCls}>Phone</label><input type="tel" className={inputCls} placeholder="(336) 000-0000" value={form.phone} onChange={set("phone")} /></div>
                      {status === "error" && <p className="text-red-500 text-sm text-center">Something went wrong. Please try calling us directly.</p>}
                    </div>
                  )}

                  {/* Navigation buttons */}
                  <div className={`flex gap-3 mt-8 ${step > 1 ? "justify-between" : "justify-end"}`}>
                    {step > 1 && (
                      <button type="button" onClick={() => setStep(s => s - 1)}
                        className="flex items-center gap-2 border-2 border-gray-200 text-[#4a5568] font-semibold px-6 py-3 rounded-xl hover:border-[#1a4a7a] transition-colors">
                        <ChevronLeft size={16} /> Back
                      </button>
                    )}
                    <button type="submit" disabled={status === "loading"}
                      className="flex-1 bg-[#1B7A3E] hover:bg-[#166b34] disabled:opacity-70 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                      {status === "loading" ? <><Loader2 size={18} className="animate-spin" /> Sending...</>
                        : step < 3 ? <>Next <ChevronRight size={16} /></>
                        : "Request Consultation"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-sm h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.909825811105!2d-80.33611262437896!3d36.071303472463825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853b0ed94a4a9e1%3A0x8dd6413a7fd33871!2s615%20St%20George%20Sq%20Ct%2C%20Winston-Salem%2C%20NC%2027103!5e0!3m2!1sen!2sus!4v1780785841909!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
