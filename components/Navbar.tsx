"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white shadow-sm"}`}>
      {/* Top bar */}
      <div className="bg-[#1a4a7a] text-white py-2 px-6 hidden md:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-xs text-white/85">Serving Forsyth & Guilford County, NC — Care available 24/7</p>
          <a href="tel:+13369183198" className="flex items-center gap-2 text-sm font-bold hover:text-[#29ABE2] transition-colors">
            <Phone size={14} /> (336) 918-3198
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Real logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.webp" alt="Imani Home Care Service" width={160} height={60} className="h-14 w-auto object-contain" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={`text-sm font-semibold transition-colors ${pathname === l.href ? "text-[#29ABE2]" : "text-[#1a4a7a] hover:text-[#29ABE2]"}`}>
              {l.label}
            </Link>
          ))}
          <a href="tel:+13369183198"
            className="hidden lg:flex items-center gap-2 border-2 border-[#29ABE2] text-[#29ABE2] hover:bg-[#29ABE2] hover:text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
            <Phone size={14} /> Call Us
          </a>
          <Link href="/contact"
            className="bg-[#E84518] hover:bg-[#c73a14] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm">
            Book Consultation
          </Link>
        </nav>

        <button className="md:hidden p-2 text-[#1a4a7a]" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }} className="md:hidden overflow-hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className={`text-sm font-semibold py-1 ${pathname === l.href ? "text-[#29ABE2]" : "text-[#1a4a7a]"}`}>
                  {l.label}
                </Link>
              ))}
              <a href="tel:+13369183198" className="flex items-center gap-2 text-[#1a4a7a] font-bold text-sm">
                <Phone size={14} /> (336) 918-3198
              </a>
              <Link href="/contact" className="bg-[#E84518] text-white text-sm font-bold px-5 py-3 rounded-full text-center">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
