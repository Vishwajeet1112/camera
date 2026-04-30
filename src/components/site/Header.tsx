import { useEffect, useState } from "react";
import { Phone, Camera } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container-luxe">
        <div
          className={`flex items-center justify-between rounded-full px-5 md:px-8 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-elegant" : ""
          }`}
        >

          {/* ✅ Logo Section */}
          <a href="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="Roshan Cemara"
              className="flex items-center justify-center w-12 h-12 rounded-full"
            />

            {/* <span className="relative flex h-9 w-9 items-center justify-center rounded-full gradient-gold shadow-gold">
              <Camera className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
            </span> */}

            <span className="font-display text-xl tracking-wide">
              Roshan <span className="text-gradient-gold">Cemara</span>
            </span>
          </a>

          {/* ✅ Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-gold transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* ✅ Call Button */}
          <a
            href="tel:+917543994305"
            className="inline-flex items-center gap-2 rounded-full gradient-gold px-4 md:px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-gold hover:scale-105 transition-transform"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>

        </div>
      </div>
    </header>
  );
};