import { Camera, Phone, MapPin } from "lucide-react";
<<<<<<< HEAD

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border/60">
      <div className="container-luxe">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full gradient-gold shadow-gold">
                <Camera className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="font-display text-xl">
                Roshan <span className="text-gradient-gold">Cemara</span>
              </span>
            </div>
=======
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border/60 bg-black">
      <div className="container-luxe">

        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* 🔥 Logo Section */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-4 group">
              <img
                src={logo}
                alt="Roshan Cemara"
                className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition duration-300"
              />

              <span className="font-display text-xl">
                Roshan <span className="text-gradient-gold">Cemara</span>
              </span>
            </a>

>>>>>>> b1836df (first commit)
            <p className="text-sm text-muted-foreground max-w-xs">
              Premium cameras and professional photography services in Darbhanga since 2014.
            </p>
          </div>
<<<<<<< HEAD
          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4">Visit</div>
=======

          {/* 📍 Address */}
          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4">
              Visit
            </div>

>>>>>>> b1836df (first commit)
            <p className="text-sm text-muted-foreground flex gap-2">
              <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              Bela Mod Bypass Rd, Sundarpur, Darbhanga, Bihar 846004
            </p>
          </div>
<<<<<<< HEAD
          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4">Contact</div>
            <a href="tel:+917543994305" className="text-sm text-muted-foreground hover:text-gold flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" /> +91 75439 94305
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          {/* <div>© {new Date().getFullYear()} Roshan Cemara. All rights reserved.</div> */}
          <div>Crafted with care in Darbhanga.</div>
        </div>
=======

          {/* 📞 Contact */}
          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4">
              Contact
            </div>

            <a
              href="tel:+917543994305"
              className="text-sm text-muted-foreground hover:text-gold flex items-center gap-2 transition"
            >
              <Phone className="h-4 w-4 text-gold" />
              +91 75439 94305
            </a>
          </div>

        </div>

        {/* 🔥 Bottom Line */}
        <div className="pt-8 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Roshan Cemara. All rights reserved.</div>
          <div className="text-gold">Made with ❤️ in Darbhanga</div>
        </div>

>>>>>>> b1836df (first commit)
      </div>
    </footer>
  );
};