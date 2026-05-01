import { Zap, BadgeIndianRupee, Users, Award, Clock, Camera, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

<<<<<<< HEAD
/* 🔥 Features */
=======
>>>>>>> b1836df (first commit)
const items = [
  { icon: Zap, title: "Fast Service", desc: "Same-day repairs & quick consults" },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Transparent, honest quotes" },
  { icon: Users, title: "Expert Team", desc: "Certified camera technicians" },
  { icon: Award, title: "10+ Years", desc: "Trusted name in Darbhanga" },
];

<<<<<<< HEAD
/* 🔥 JSON → Stats */
const stats = [
  { icon: Users, number: 1000, suffix: "+", label: "HAPPY CUSTOMERS", decimals: 0 },
  { icon: Clock, number: 15, suffix: "+", label: "YEARS EXPERIENCE", decimals: 0 },
  { icon: Camera, number: 3000, suffix: "+", label: "EVENTS CAPTURED", decimals: 0 },
  { icon: Star, number: 4.9, suffix: "★", label: "GOOGLE RATING", decimals: 1 },
];

/* 🔥 easing */
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/* 🔥 CountUp */
const CountUp = ({
  end,
  decimals,
  duration = 2000,
  start,
}: {
  end: number;
  decimals: number;
  duration?: number;
  start: boolean;
}) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const t0 = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      setVal(end * easeOut(progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);

=======
const stats = [
  { icon: Users, number: 1000, suffix: "+", label: "Happy Customers", decimals: 0 },
  { icon: Clock, number: 15, suffix: "+", label: "Years Experience", decimals: 0 },
  { icon: Camera, number: 3000, suffix: "+", label: "Events Captured", decimals: 0 },
  { icon: Star, number: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
];

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const CountUp = ({ end, decimals, duration = 2000, start }: { end: number; decimals: number; duration?: number; start: boolean }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setVal(end * easeOut(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);
>>>>>>> b1836df (first commit)
  return <>{val.toFixed(decimals)}</>;
};

export const TrustBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

<<<<<<< HEAD
  /* 🔥 scroll trigger */
  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
=======
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
>>>>>>> b1836df (first commit)
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
<<<<<<< HEAD

=======
>>>>>>> b1836df (first commit)
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
<<<<<<< HEAD
    <section className="relative section-pad border-y border-border/60 bg-black">
      <div className="container-luxe">

        {/* 🔥 Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {items.map((it) => (
            <div key={it.title} className="group flex flex-col items-start gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl glass group-hover:shadow-[0_0_15px_gold] transition-all">
                <it.icon className="h-5 w-5 text-gold" />
              </span>

=======
    <section className="relative section-pad border-y border-border/60">
      <div className="container-luxe">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {items.map((it) => (
            <div key={it.title} className="group flex flex-col items-start gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl glass group-hover:shadow-gold transition-all">
                <it.icon className="h-5 w-5 text-gold" />
              </span>
>>>>>>> b1836df (first commit)
              <div>
                <div className="font-display text-2xl">{it.title}</div>
                <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* 🔥 Stats Section */}
=======
>>>>>>> b1836df (first commit)
        <div ref={ref} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{ animationDelay: `${i * 120}ms` }}
<<<<<<< HEAD
              className={`group relative rounded-[20px] bg-[#111] border border-border/60 p-6 md:p-8 text-center overflow-hidden transition-all duration-500 
              hover:scale-[1.06] hover:border-gold/60 hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,215,0,0.15), transparent 70%)",
                }}
              />

              {/* Icon */}
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold shadow-gold mb-4">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </span>

              {/* Number */}
              <div className="relative font-display font-bold text-4xl md:text-6xl text-gradient-gold tabular-nums animate-pulse">
                <CountUp
                  end={s.number}
                  decimals={s.decimals}
                  duration={2000}
                  start={inView}
                />
                <span className="ml-1">{s.suffix}</span>
              </div>

              {/* Label */}
=======
              className={`group relative rounded-[20px] bg-[hsl(0_0%_6.5%)] border border-border/60 p-6 md:p-8 text-center overflow-hidden transition-all duration-500 hover:scale-[1.04] hover:border-gold/60 hover:shadow-gold ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 0%, hsl(var(--gold) / 0.18), transparent 70%)" }}
              />
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold shadow-gold mb-4">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </span>
              <div className="relative font-display font-bold text-4xl md:text-6xl text-gradient-gold tabular-nums">
                <CountUp end={s.number} decimals={s.decimals} start={inView} />
                <span className="ml-1">{s.suffix}</span>
              </div>
>>>>>>> b1836df (first commit)
              <div className="relative text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mt-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD

=======
>>>>>>> b1836df (first commit)
      </div>
    </section>
  );
};