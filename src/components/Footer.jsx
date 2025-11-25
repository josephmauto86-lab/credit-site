import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import logoPng200 from "../../images/creditore-logo-200.png";
import logoPng400 from "../../images/creditore-logo-400.png";
import logoPng800 from "../../images/creditore-logo-800.png";
import logoPng1536 from "../../images/creditore-logo-1536.png";
import logoWebp200 from "../../images/creditore-logo-200.webp";
import logoWebp400 from "../../images/creditore-logo-400.webp";
import logoWebp800 from "../../images/creditore-logo-800.webp";
import logoWebp1536 from "../../images/creditore-logo-1536.webp";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/creditore",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/creditore",
      label: "LinkedIn",
    },
  ];

  const columns = [
    {
      title: "SERVICES",
      links: [
        { label: "Debt Review", href: "/how-it-works" },
        { label: "Financial Assessment", href: "/contact" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "Help Center", href: "/faq" },
        { label: "Contact Us", href: "/contact" },
        { label: "Blog", href: "https://creditore.co.za" },
        { label: "NCR Registration", href: "https://creditore.co.za" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About Us", href: "https://creditore.co.za" },
        { label: "Our Team", href: "https://creditore.co.za" },
        { label: "Careers", href: "https://creditore.co.za" },
        { label: "Press", href: "https://creditore.co.za" },
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
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-white via-brand-light to-[#f9fafb] border-t border-brand-primary/10">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Logo + Description + Social */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2" aria-label="Creditoré home">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${logoWebp200} 200w, ${logoWebp400} 400w, ${logoWebp800} 800w, ${logoWebp1536} 1536w`}
                  sizes="(max-width: 768px) 160px, 200px"
                />
                <img
                  src={logoPng1536}
                  srcSet={`${logoPng200} 200w, ${logoPng400} 400w, ${logoPng800} 800w, ${logoPng1536} 1536w`}
                  sizes="(max-width: 768px) 160px, 200px"
                  alt="Creditoré"
                  width={200}
                  height={134}
                  className="h-auto"
                />
              </picture>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed font-medium">
              Professional debt counselling helping South Africans regain financial independence with dignity and support.
            </p>
            <div className="flex gap-4 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-brand-muted hover:text-brand-primary transition-colors duration-300 p-2 hover:bg-brand-light rounded-lg"
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
                <h4 className="text-brand-primary font-bold text-sm uppercase tracking-wider">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        to={href}
                        className="text-brand-muted hover:text-brand-accent text-sm transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-brand-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-brand-muted/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-xs text-brand-muted font-medium">PHONE</p>
                <a
                  href="tel:0215696571"
                  className="text-brand-primary font-semibold hover:text-brand-accent transition-colors"
                >
                  021 569 6571
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-xs text-brand-muted font-medium">EMAIL</p>
                <a
                  href="mailto:info@creditore.co.za"
                  className="text-brand-primary font-semibold hover:text-brand-accent transition-colors"
                >
                  info@creditore.co.za
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-xs text-brand-muted font-medium">LOCATION</p>
                <p className="text-brand-primary font-semibold">Cape Town, South Africa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-muted/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-muted">
          <p>© {new Date().getFullYear()} Creditoré. All Rights Reserved. NCR Registered Debt Counsellor.</p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="hover:text-brand-primary transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-brand-primary transition-colors duration-300 font-medium"
            >
              Terms of Service
            </Link>
            <a
              href="https://creditore.co.za"
              className="hover:text-brand-primary transition-colors duration-300 font-medium"
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
