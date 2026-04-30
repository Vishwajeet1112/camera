import { Phone, Sparkles } from "lucide-react";

export const Urgency = () => {
  return (
    <section className="relative section-pad">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/30 p-10 md:p-16">
          <div className="absolute inset-0 gradient-gold opacity-[0.08]" />
          <div
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(var(--gold)/0.4), transparent 70%)" }}
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
                Walk in this week or call us — exclusive monsoon offers on photography packages and camera accessories.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="tel:+917543994305"
                className="group inline-flex items-center gap-3 rounded-full gradient-gold px-8 py-5 font-medium text-primary-foreground shadow-gold hover:scale-105 transition-transform"
              >
                <Phone className="h-5 w-5" />
                Book Now — +91 75439 94305
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};