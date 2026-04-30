import { Phone, Star, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-camera.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium DSLR camera with golden lens"
          width={1920}
          height={1080}
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div
          className="absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.35), transparent 70%)" }}
        />
      </div>

      <div className="container-luxe relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6 animate-fade-in">Darbhanga • Since 2014</div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.95] mb-6 animate-fade-up">
            Capture Every <br />
            Moment <em className="text-gradient-gold not-italic">Like a Pro</em>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-up [animation-delay:120ms]">
            Premium cameras & professional photography services in Darbhanga. Curated gear, master craftsmanship, unforgettable frames.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12 animate-fade-up [animation-delay:240ms]">
            <a
              href="tel:+917543994305"
              className="group inline-flex items-center gap-3 rounded-full gradient-gold px-7 py-4 font-medium text-primary-foreground shadow-gold animate-pulse-gold"
            >
              <Phone className="h-5 w-5" />
              Call Now
              <span className="opacity-80">+91 75439 94305</span>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full glass px-7 py-4 font-medium text-foreground hover:border-gold/50 transition-all"
            >
              View Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust badge */}
          <div className="flex flex-wrap items-center gap-6 animate-fade-up [animation-delay:360ms]">
            <div className="flex items-center gap-3 glass rounded-full px-5 py-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">4.8</span>{" "}
                <span className="text-muted-foreground">on Google</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Trusted by <span className="text-gold font-semibold">500+</span> happy customers
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground animate-float">
        Scroll
        <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};