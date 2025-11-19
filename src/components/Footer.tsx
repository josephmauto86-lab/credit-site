import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
  description?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  copyright?: string;
}

export const Footer: FC<FooterProps> = ({
  description = "Professional debt counselling and financial guidance to help you regain control and rebuild your future.",
  columns = [
    {
      title: "SERVICES",
      links: [
        { label: "Debt Review", href: "/how-it-works" },
        { label: "Financial Assessment", href: "/contact" },
        { label: "Debt Consolidation", href: "/how-it-works" },
        { label: "Credit Rehabilitation", href: "/how-it-works" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Blog", href: "https://creditore.co.za" },
        { label: "Contact Support", href: "/contact" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About Creditoré", href: "https://creditore.co.za" },
        { label: "NCR Registration", href: "https://creditore.co.za" },
        { label: "Our Team", href: "https://creditore.co.za" },
        { label: "Careers", href: "https://creditore.co.za" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "POPIA Compliance", href: "/privacy" },
        { label: "Security", href: "/privacy" },
      ],
    },
  ],
  socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/creditore",
      label: "Instagram",
    },
    { icon: Twitter, href: "https://twitter.com/creditore", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/creditore",
      label: "LinkedIn",
    },
  ],
  copyright = `© ${new Date().getFullYear()} Creditoré. All Rights Reserved. NCR Registered Debt Counsellor.`,
}) => {
  return (
    <footer className="w-full bg-gradient-to-b from-white via-[#f3f4f6] to-[#f9fafb] border-t-2 border-[#0080ff]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Logo + Description + Social */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2" aria-label="Creditoré home">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/creditore-logo-200.webp 200w, /images/creditore-logo-400.webp 400w, /images/creditore-logo-800.webp 800w, /images/creditore-logo-1536.webp 1536w"
                  sizes="(max-width: 768px) 160px, 200px"
                />
                <img
                  src="/images/creditore-logo-1536.png"
                  srcSet="/images/creditore-logo-200.png 200w, /images/creditore-logo-400.png 400w, /images/creditore-logo-800.png 800w, /images/creditore-logo-1536.png 1536w"
                  sizes="(max-width: 768px) 160px, 200px"
                  alt="Creditoré"
                  width={200}
                  height={134}
                  className="h-auto"
                />
              </picture>
            </Link>
            <p className="text-[#6b7280] text-sm leading-relaxed font-medium">
              {description}
            </p>
            <div className="flex gap-4 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#6b7280] hover:text-[#0080ff] transition-colors duration-300 p-2 hover:bg-[#e0eeff] rounded-lg"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h4 className="text-[#0066cc] font-bold text-sm uppercase tracking-wider">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map(({ label, href, badge }) => (
                    <li key={label}>
                      <Link
                        to={href}
                        className="text-[#6b7280] hover:text-[#0080ff] text-sm transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-[#0080ff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {label}
                        {badge && (
                          <span className="bg-[#0080ff] text-[#ffffff] text-xs px-2 py-0.5 rounded-full font-semibold">
                            {badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t-2 border-[#e5e7eb] pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e0eeff] rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#0080ff]" />
              </div>
              <div>
                <p className="text-xs text-[#6b7280] font-medium">PHONE</p>
                <a
                  href="tel:0215696571"
                  className="text-[#0066cc] font-semibold hover:text-[#0080ff] transition-colors"
                >
                  021 569 6571
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e0eeff] rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#0080ff]" />
              </div>
              <div>
                <p className="text-xs text-[#6b7280] font-medium">EMAIL</p>
                <a
                  href="mailto:info@creditore.co.za"
                  className="text-[#0066cc] font-semibold hover:text-[#0080ff] transition-colors"
                >
                  info@creditore.co.za
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e0eeff] rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#0080ff]" />
              </div>
              <div>
                <p className="text-xs text-[#6b7280] font-medium">LOCATION</p>
                <p className="text-[#0066cc] font-semibold">Cape Town, South Africa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#e5e7eb] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6b7280]">
          <p>{copyright}</p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="hover:text-[#0080ff] transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#0080ff] transition-colors duration-300 font-medium"
            >
              Terms of Service
            </Link>
            <a
              href="https://creditore.co.za"
              className="hover:text-[#0080ff] transition-colors duration-300 font-medium"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
