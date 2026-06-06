import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronRight, UserCheck, Users, Sparkles, Activity, UtensilsCrossed, Pill, Clock, Car, Home, RefreshCw, Dumbbell, Building2 } from "lucide-react";

export const metadata = {
  title: "Our Services - Imani Home Care Service",
  description: "Explore the full range of in-home care services - personal care, dementia support, 24-hour care, meal prep, and more in Winston-Salem, NC.",
};

const services = [
  { icon: <UserCheck size={22} />, title: "Personal Care", desc: "Respectful, dignified assistance with bathing, dressing, grooming, toileting, and mobility. Our caregivers support physical needs while preserving each client's sense of independence and self-worth." },
  { icon: <Users size={22} />, title: "Companionship Care", desc: "Meaningful social interaction is essential for mental and emotional wellbeing. Our companions engage clients in conversation, hobbies, games, walks, and activities that bring joy and reduce isolation." },
  { icon: <Sparkles size={22} />, title: "Dementia & Memory Care", desc: "Specialist care programmes designed by cognitive therapy experts. Includes memory games, puzzles, reminiscence therapy, and structured routines that help clients with Alzheimer's feel safe and stimulated." },
  { icon: <Activity size={22} />, title: "Stroke Care", desc: "Expert support for stroke survivors addressing physical, cognitive, and emotional rehabilitation. Caregivers trained in stroke-specific techniques including mobility assistance and speech support." },
  { icon: <UtensilsCrossed size={22} />, title: "Meal Preparation", desc: "Personalised meal plans developed with nutritional needs and food preferences in mind, using high-quality locally sourced ingredients. Available daily, weekly, or on an occasional basis." },
  { icon: <Pill size={22} />, title: "Medication Reminders", desc: "Gentle, consistent reminders to help clients take the right medication at the right time - reducing the risk of missed doses and supporting overall health management safely." },
  { icon: <Clock size={22} />, title: "24-Hour & Live-In Care", desc: "Continuous, around-the-clock support for seniors who need a higher level of care. A compassionate, cost-effective alternative to nursing home placement - at home, where it matters most." },
  { icon: <Car size={22} />, title: "Non-Medical Transportation", desc: "Safe, reliable transport to medical appointments, social events, grocery shopping, errands, and more - helping seniors stay active, connected, and independent in their community." },
  { icon: <Home size={22} />, title: "Light Housekeeping", desc: "Support maintaining a clean, safe, and comfortable home environment - including laundry, tidying, vacuuming, and dishes. A clean space supports both physical safety and mental wellbeing." },
  { icon: <RefreshCw size={22} />, title: "Respite Care", desc: "Temporary relief for family caregivers who need a break. We step in for a few hours, days, or longer - ensuring consistent, quality care while you recharge." },
  { icon: <Dumbbell size={22} />, title: "Rehabilitation Support", desc: "Skilled support for clients recovering from surgery, illness, or injury. Our team works alongside therapists to assist with physical, occupational, and speech therapy goals at home." },
  { icon: <Building2 size={22} />, title: "Nursing Home Alternative", desc: "For families weighing residential care, in-home care with Imani offers personalised 24/7 support at a fraction of the cost - with the added benefit of staying in familiar surroundings." },
];

const steps = [
  { icon: <Phone size={22} />, step: "Step 1", title: "Free Consultation", desc: "Call or contact us online. We'll discuss your loved one's needs with no obligation." },
  { icon: <UserCheck size={22} />, step: "Step 2", title: "Care Assessment", desc: "We visit to assess your loved one's health, lifestyle, and preferences in detail." },
  { icon: <Sparkles size={22} />, step: "Step 3", title: "Personalised Plan", desc: "We create a bespoke care plan and match your loved one with the right caregiver." },
  { icon: <Activity size={22} />, step: "Step 4", title: "Care Begins", desc: "Care starts on a schedule that works for you, with regular check-ins along the way." },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative bg-gradient-to-br from-[#1a4a7a] to-[#1e5fa0] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=60"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="text-sm text-white/60 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Care Services</h1>
          <p className="text-white/80 text-lg">Comprehensive, personalised in-home support designed around each individual's needs, preferences, and goals.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 bg-[#e6f4ec]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="section-label">How We Work</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a4a7a] mb-3">Care Tailored to Your Loved One</h2>
          <p className="text-[#4a5568]">Every client begins with a thorough assessment. We build a custom care plan that can flex and grow as needs change - whether that's a few hours of weekly support or around-the-clock live-in care.</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start h-full group">
                  <div className="w-12 h-12 rounded-xl bg-[#e6f4ec] flex items-center justify-center text-[#1B7A3E] shrink-0 group-hover:bg-[#1B7A3E] group-hover:text-white transition-colors">{s.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#1a4a7a] mb-2">{s.title}</h3>
                    <p className="text-sm text-[#4a5568] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1600&q=80"
          alt="Professional caregiver with senior client"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1a4a7a]/55" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-6">
          <p className="text-xl md:text-2xl font-semibold max-w-2xl text-white">"Every care plan starts with listening - because no two people, and no two needs, are ever the same."</p>
        </div>
      </section>

      {/* HOW TO BEGIN */}
      <section className="py-20 bg-[#e6f4ec]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn className="text-center mb-12">
            <span className="section-label">Getting Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4a7a] mb-3">How to Begin Care</h2>
            <p className="text-[#4a5568]">Starting care with Imani is straightforward. Here's what to expect.</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#e6f4ec] flex items-center justify-center text-[#1B7A3E] mx-auto mb-3">{s.icon}</div>
                  <div className="text-xs font-bold text-[#1B7A3E] uppercase tracking-widest mb-1">{s.step}</div>
                  <h3 className="font-bold text-[#1a4a7a] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#4a5568]">{s.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1B7A3E] to-[#1a4a7a] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Service You Need?</h2>
            <p className="text-white/85 mb-8">Our team will help you figure out the right level of support. Get in touch for a free, friendly conversation - no pressure, no commitment.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-[#1a4a7a] font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors flex items-center gap-2">
                Talk to Our Team <ChevronRight size={16} />
              </Link>
              <a href="tel:+13369183198" className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors flex items-center gap-2">
                <Phone size={16} /> (336) 918-3198
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
