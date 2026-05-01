import { Phone, Sparkles } from "lucide-react";

export const Urgency = () => {
  return (
    <section className="relative section-pad">
      <div className="container-luxe">
<<<<<<< HEAD
        <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/30 p-10 md:p-16">
          <div className="absolute inset-0 gradient-gold opacity-[0.08]" />
          <div
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(var(--gold)/0.4), transparent 70%)" }}
=======
        <div
          className="group relative overflow-hidden rounded-[30px] border border-gold/30 p-12 md:p-20 animate-fade-up transition-shadow duration-500 hover:shadow-[0_0_80px_-10px_hsl(var(--gold)/0.5)]"
          style={{ background: "linear-gradient(135deg, #000000, #1a1a1a, #2a1f0f)" }}
        >
          <div
            className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: "radial-gradient(circle, hsl(var(--gold)/0.45), transparent 70%)" }}
          />
          <div
            className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle, hsl(var(--gold)/0.25), transparent 70%)" }}
>>>>>>> b1836df (first commit)
          />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <div className="eyebrow mb-4">
                <Sparkles className="h-3 w-3" /> Limited Time Offer
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-tight mb-4">
                Book today, get <em className="text-gradient-gold not-italic">10% off</em> your first shoot.
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
<<<<<<< HEAD
                Walk in this week or call us — exclusive monsoon offers on photography packages and camera accessories.
=======
                Walk in this week or call us — exclusive offers on photography packages and camera accessories.
>>>>>>> b1836df (first commit)
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="tel:+917543994305"
<<<<<<< HEAD
                className="group inline-flex items-center gap-3 rounded-full gradient-gold px-8 py-5 font-medium text-primary-foreground shadow-gold hover:scale-105 transition-transform"
              >
                <Phone className="h-5 w-5" />
                Book Now — +91 75439 94305
=======
                className="relative inline-flex items-center gap-3 overflow-hidden rounded-full gradient-gold px-8 py-5 font-medium text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-105"
              >
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out hover:translate-x-full group-hover:translate-x-full"
                  aria-hidden
                />
                <Phone className="h-5 w-5 relative" />
                <span className="relative">Book Now </span>
>>>>>>> b1836df (first commit)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};