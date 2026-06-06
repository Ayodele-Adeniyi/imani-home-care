import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f2440] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.webp" alt="Imani Home Care Service" width={180} height={70} className="h-16 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-base leading-relaxed max-w-sm text-white/90">
              Providing compassionate, reliable in-home care for seniors across Forsyth and Guilford County, NC, for over a decade.
            </p>
            <div className="flex gap-3 mt-4">
              {[["f", "Facebook"], ["ig", "Instagram"], ["in", "LinkedIn"]].map(([label, title], i) => (
                <div key={i} title={title} className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center hover:bg-[#1B7A3E] cursor-pointer transition-colors text-xs font-bold text-white">
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/90 hover:text-[#1B7A3E] transition-colors text-base">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-1 shrink-0 text-[#1B7A3E]" />
                <a href="tel:+13369183198" className="text-white/90 hover:text-white transition-colors text-base">(336) 918-3198</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={15} className="mt-1 shrink-0 text-[#1B7A3E]" />
                <a href="mailto:info@imanihomecares.com" className="text-white/90 hover:text-white transition-colors text-base break-all">info@imanihomecares.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-1 shrink-0 text-[#1B7A3E]" />
                <span className="text-white/90 text-base">615 St. George Square Ct #354, Winston Salem, NC 27103</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/80 text-sm">&copy; {new Date().getFullYear()} Imani Home Care Service. All rights reserved.</p>
          <p className="text-white/80 text-sm">Serving Forsyth County &amp; Guilford County, NC</p>
        </div>
      </div>
    </footer>
  );
}
