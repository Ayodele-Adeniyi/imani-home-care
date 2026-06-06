"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import { Heart, Clock, Users, Star, ShieldCheck, Phone, ChevronRight, CheckCircle2, Sparkles } from "lucide-react";

const services = [
  { img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80", title: "Personal Care", desc: "Dignified help with bathing, dressing, and daily hygiene - always respectful, always compassionate." },
  { img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80", title: "Companionship", desc: "Meaningful company, conversation, and activities to keep your loved one engaged and joyful." },
  { img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80", title: "Dementia & Memory Care", desc: "Specialist cognitive support - memory games, reminiscence therapy, and calm, structured routines." },
  { img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80", title: "24-Hour & Live-In Care", desc: "Round-the-clock support at home - a warmer, more affordable alternative to a nursing facility." },
  { img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=600&q=80", title: "Stroke & Rehab Care", desc: "Expert recovery support - mobility, speech, and emotional rehabilitation coordinated with your medical team." },
  { img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=600&q=80", title: "Meal Prep & Errands", desc: "Nutritious home-cooked meals and reliable transport to appointments, shopping, and social events." },
];

const whyUs = [
  { icon: <ShieldCheck size={22} />, title: "Trained & Background-Checked", desc: "Every caregiver is professionally trained, fully vetted, and continuously developed." },
  { icon: <Clock size={22} />, title: "Available 24/7", desc: "Care needs don't keep office hours - we're here around the clock, every day of the year." },
  { icon: <Users size={22} />, title: "Culturally Sensitive", desc: "Diverse, community-rooted care that always feels personal, familiar, and affirming." },
  { icon: <Heart size={22} />, title: "Personalised Care Plans", desc: "Every plan is built from scratch - tailored precisely to your loved one's needs and goals." },
];

const testimonials = [
  { name: "Janet M.", role: "Daughter of a client", initials: "JM", text: "Imani Home Care has been a blessing for our family. The caregiver assigned to my mother is kind, punctual, and genuinely caring. We finally have peace of mind." },
  { name: "Robert D.", role: "Son of a client", initials: "RD", text: "After my father's stroke, we didn't know what to do. Imani stepped in with a specialised care plan and made the transition so much easier. Their stroke care team is exceptional." },
  { name: "Tracy W.", role: "Daughter of a client", initials: "TW", text: "The companionship care has transformed my mom's outlook. She looks forward to her caregiver's visits every day. I can't recommend Imani Home Care highly enough." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a4a7a] via-[#5C35A0] to-[#29ABE2] text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-sm mb-6">
              ✦ Serving Forsyth &amp; Guilford County, NC
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-tight mb-5 text-white !text-white">
              Care that feels like<br /><span className="text-[#7dd3fc]">family.</span><br />Because it should.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-xl leading-relaxed mb-8 max-w-md font-normal">
              Professional in-home care that gives seniors the dignity, comfort, and independence they deserve - right where they feel most at home.
            </motion.p>

            {/* Checkmarks */}
            <motion.ul initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-2 mb-8">
              {["No obligation - free consultation", "Personalised care plan from day one", "Available 24 hours, 7 days a week"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90 text-sm">
                  <CheckCircle2 size={16} className="text-[#7dd3fc] shrink-0" /> {item}
                </li>
              ))}
            </motion.ul>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact" className="bg-white text-[#1a4a7a] font-bold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors flex items-center gap-2 shadow-lg">
                Get Started Today <ChevronRight size={16} />
              </Link>
              <a href="tel:+13369183198" className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full transition-colors flex items-center gap-2">
                <Phone size={16} /> Call (336) 918-3198
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8">
              {[["10+", "Years Experience"], ["24/7", "Care Available"], ["100%", "Personalised"]].map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl font-extrabold text-white">{num}</div>
                  <div className="text-xs text-white/70 mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:block relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] relative">
              <Image src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80"
                alt="Professional caregiver with elderly client" fill className="object-cover" sizes="400px" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a4a7a]/50 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl p-4 shadow-xl w-56">
              <p className="text-xs text-[#4a5568] mb-2 font-semibold">Trusted by families across NC</p>
              <ul className="space-y-1.5">
                {["Personal & Dementia Care", "24/7 Live-In Support", "Stroke Rehabilitation"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#1a4a7a] font-medium">
                    <CheckCircle2 size={13} className="text-[#1B7A3E] shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-5 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          {[
            { icon: <ShieldCheck size={16} />, text: "Over a Decade of Expertise" },
            { icon: <Clock size={16} />, text: "Round-the-Clock Availability" },
            { icon: <Users size={16} />, text: "Culturally Sensitive Care" },
            { icon: <Heart size={16} />, text: "Community-Focused Approach" },
            { icon: <Star size={16} />, text: "Personalised Care Plans" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm font-semibold text-[#1a4a7a]">
              <span className="text-[#1B7A3E]">{icon}</span>{text}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP - white background */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <AnimateIn direction="left">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] relative">
              <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
                alt="Caregiver with elderly patient at home" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </AnimateIn>
          <AnimateIn direction="right">
            <span className="section-label">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4a7a] mb-4">Compassionate care built on trust &amp; dignity</h2>
            <p className="text-[#2d3748] mb-6 leading-relaxed">For over a decade, Imani Home Care Service has been helping families across Winston-Salem find peace of mind. We believe every senior deserves to live with dignity and independence - at home, not in a facility.</p>
            <ul className="space-y-3 mb-7">
              {[
                "Over 10 years serving Forsyth & Guilford County",
                "Caregivers trained in dementia, stroke, and rehabilitation",
                "Culturally sensitive - we celebrate every background",
                "Flexible plans from a few hours to full-time live-in care",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#2d3748]">
                  <CheckCircle2 size={18} className="text-[#1B7A3E] shrink-0 mt-0.5" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#1a4a7a] hover:bg-[#1e5fa0] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm">
              Learn More About Us <ChevronRight size={15} />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* SERVICES - light sage background */}
      <section className="py-20 bg-[#e6f4ec]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn className="text-center mb-12">
            <span className="section-label">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4a7a] mb-3">Comprehensive Care Services</h2>
            <p className="text-[#2d3748] max-w-lg mx-auto">From daily personal care to specialist dementia support - every service built around your loved one.</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a4a7a]/40 to-transparent" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-bold text-[#1a4a7a] mb-2 text-lg">{s.title}</h3>
                    <p className="text-[#2d3748] text-sm flex-1">{s.desc}</p>
                    <Link href="/services" className="mt-4 text-[#1B7A3E] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Learn more <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 bg-[#1a4a7a] hover:bg-[#1e5fa0] text-white font-semibold px-7 py-3.5 rounded-full transition-colors">
              View All Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US - navy */}
      <section className="py-20 bg-[#1a4a7a]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn className="text-center mb-12">
            <span className="section-label" style={{ color: "#7dd3fc" }}>Why Families Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Care you can truly rely on</h2>
            <p className="text-white/85 max-w-lg mx-auto">We go beyond standard home care - delivering an experience built on professionalism, heart, and consistency.</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w, i) => (
              <AnimateIn key={w.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 h-full" style={{color: '#1a202c'}}>
                  <div className="w-12 h-12 rounded-xl bg-[#e6f4ec] flex items-center justify-center text-[#1B7A3E] mb-4">{w.icon}</div>
                  <h3 className="font-bold mb-2" style={{color: '#1a4a7a'}}>{w.title}</h3>
                  <p className="text-sm" style={{color: '#2d3748'}}>{w.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BREAK */}
      <section className="relative h-64 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80"
          alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#1a4a7a]/65" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-6">
          <p className="text-2xl md:text-3xl font-bold max-w-2xl leading-snug text-white">
            "Our goal is simple - to make every senior feel safe, valued, and truly cared for."
          </p>
        </div>
      </section>

      {/* TESTIMONIALS - white */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn className="text-center mb-12">
            <span className="section-label">What Families Say</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4a7a] mb-3">Stories from the people we serve</h2>
            <p className="text-[#2d3748]">Hearing from the families we support means everything to us.</p>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 0.1}>
                <div className="bg-[#fdf9f4] rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col">
                  <div className="text-amber-400 text-lg mb-3">★★★★★</div>
                  <p className="text-[#2d3748] italic flex-1 mb-5 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e6f4ec] flex items-center justify-center font-bold text-[#1B7A3E] text-sm shrink-0">{t.initials}</div>
                    <div>
                      <div className="font-bold text-sm text-[#1a4a7a]">{t.name}</div>
                      <div className="text-xs text-[#4a5568]">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#E84518] to-[#1a4a7a] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get the right care?</h2>
            <p className="text-white/90 mb-8 text-lg">Contact us today for a free, no-obligation consultation. We'll create a personalised plan that fits your loved one's needs and your budget.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-[#1a4a7a] font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors shadow-lg">
                Book a Free Consultation
              </Link>
              <a href="tel:+13369183198" className="border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors flex items-center gap-2">
                <Phone size={16} /> (336) 918-3198
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
