import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Heart, ShieldCheck, Star, Users, Clock, Globe, ClipboardList, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us — Imani Home Care Service",
  description: "Learn about Imani Home Care Service — our mission, values, and the compassionate team behind our senior care services in Winston-Salem, NC.",
};

const values = [
  { icon: <Heart size={24} className="text-[#1B7A3E]" />, title: "Compassion", desc: "We treat every client as we would our own family — with warmth, patience, and genuine kindness in every single interaction." },
  { icon: <ShieldCheck size={24} className="text-[#1B7A3E]" />, title: "Integrity", desc: "We are transparent, honest, and accountable in everything we do — building trust with families one day at a time." },
  { icon: <Users size={24} className="text-[#1B7A3E]" />, title: "Respect", desc: "We honour each person's individuality, independence, and choices — ensuring care always feels empowering, never diminishing." },
  { icon: <Star size={24} className="text-[#1B7A3E]" />, title: "Excellence", desc: "We hold ourselves to the highest standards — continuously training our team and refining our approach to deliver the very best." },
];

export default function AboutPage() {
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
            <span className="mx-2">›</span>About Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Imani Home Care</h1>
          <p className="text-white/80 text-lg">A decade of compassionate, community-driven care — getting to know the people and values behind our service.</p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <AnimateIn direction="left">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
                alt="Caregiver with elderly client at home"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>
          <AnimateIn direction="right">
            <span className="section-label">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4a7a] mb-4">Dedicated to Dignity, Comfort &amp; Independence</h2>
            <p className="text-[#4a5568] mb-4">Our mission is simple: to deliver compassionate and reliable home care services that enhance seniors' quality of life — every single day.</p>
            <p className="text-[#4a5568] mb-4">We believe that every older person deserves to live with dignity in the place they call home. That belief drives everything we do — from how we recruit our caregivers to how we design each individual care plan.</p>
            <ul className="space-y-3 mb-7">
              {["Over 10 years serving Forsyth & Guilford County", "Trained in dementia, stroke & rehabilitation care", "Culturally sensitive — celebrating every background", "Flexible plans from a few hours to full-time live-in"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#2d3748]">
                  <CheckCircle2 size={18} className="text-[#1B7A3E] shrink-0 mt-0.5" /><span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1B7A3E] hover:bg-[#166b34] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm">
              Start a Conversation <ChevronRight size={15} />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-[#e6f4ec]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn className="text-center mb-12">
            <span className="section-label">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4a7a] mb-3">Our Core Values</h2>
            <p className="text-[#4a5568] max-w-lg mx-auto">Every decision we make is guided by four principles that shape the kind of care we deliver.</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#e6f4ec] flex items-center justify-center mx-auto mb-4">{v.icon}</div>
                  <h3 className="font-bold text-[#1a4a7a] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#4a5568]">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* VISION + IMAGE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <AnimateIn direction="left">
            <span className="section-label">Our Vision</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4a7a] mb-4">Becoming the Most Trusted Name in Senior Home Care</h2>
            <p className="text-[#4a5568] text-lg leading-relaxed">We aspire to become the most trusted provider of personalised in-home elderly care for senior citizens — starting here in North Carolina and growing nationwide. Our goal is not just to provide care, but to set the standard for what compassionate, community-based senior care looks like.</p>
          </AnimateIn>
          <AnimateIn direction="right">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
                alt="Elderly woman smiling with caregiver"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-[#1a4a7a]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn className="text-center mb-12">
            <span className="section-label" style={{ color: "#7dd3fc" }}>Why Families Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What Sets Imani Apart</h2>
            <p className="text-white/65 max-w-lg mx-auto">From our first call to ongoing daily care, we make the experience as seamless and reassuring as possible.</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <ShieldCheck size={24} />, title: "Trained Professionals", desc: "Every caregiver is vetted, trained, and supported by our management team." },
              { icon: <Clock size={24} />, title: "24/7 Availability", desc: "Care needs don't follow a schedule — we're reachable every day of the year." },
              { icon: <Globe size={24} />, title: "Culturally Sensitive", desc: "We celebrate and respect diverse backgrounds, ensuring care feels personal." },
              { icon: <ClipboardList size={24} />, title: "Personalised Plans", desc: "No two clients are the same. Every plan is tailored from scratch." },
            ].map((w, i) => (
              <AnimateIn key={w.title} delay={i * 0.1}>
                <div className="bg-white/[0.08] border border-white/[0.12] rounded-2xl p-6 hover:bg-white/[0.14] transition-colors text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#7dd3fc] mx-auto mb-4">{w.icon}</div>
                  <h3 className="font-bold text-white mb-2">{w.title}</h3>
                  <p className="text-sm text-white/60">{w.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Learn More?</h2>
            <p className="text-white/85 mb-8">We'd love to talk with you about your loved one's needs. Reach out today for a free, no-obligation consultation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-[#1a4a7a] font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors">
                Book a Free Consultation
              </Link>
              <Link href="/services" className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors">
                Explore Our Services
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
