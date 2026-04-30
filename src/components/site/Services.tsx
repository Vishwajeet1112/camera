import { Camera, Aperture, Wrench, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Camera Sales",
    desc: "DSLR, mirrorless & compact cameras from leading brands at the best Darbhanga prices.",
  },
  {
    icon: Sparkles,
    title: "Photography Services",
    desc: "Weddings, pre-weddings, newborns, events & portraits — captured cinematically.",
  },
  {
    icon: Aperture,
    title: "Accessories",
    desc: "Lenses, tripods, lighting, memory cards, bags & every essential you need.",
  },
  {
    icon: Wrench,
    title: "Camera Repair",
    desc: "Sensor cleaning, firmware updates and expert repairs with quick turnaround.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative section-pad">
      <div className="container-luxe">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">What We Do</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Everything a <em className="text-gradient-gold not-italic">photographer</em> needs, under one roof.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40"
            >
              <div
                className="absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                style={{ background: "radial-gradient(circle, hsl(var(--gold)/0.4), transparent 70%)" }}
              />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold shadow-gold mb-6">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold/80 group-hover:text-gold">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};