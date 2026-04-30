import { Star, Quote } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const reviews = [
  {
    name: "Aman Kumar",
    role: "Wedding Client",
    avatar: a1,
    text: "Roshan Cemara captured our wedding so beautifully. Every photo feels cinematic. Highly recommended in Darbhanga!",
  },
  {
    name: "Priya Singh",
    role: "Pre-wedding Shoot",
    avatar: a2,
    text: "The team is incredibly professional. They helped us pick the perfect package and the final album is stunning.",
  },
  {
    name: "Rahul Verma",
    role: "Camera Buyer",
    avatar: a3,
    text: "Bought my first DSLR here. Honest pricing, genuine product and great after-sale support. Will return for sure.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative section-pad">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow justify-center mb-4">Loved by Darbhanga</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Stories from <em className="text-gradient-gold not-italic">our customers</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="relative rounded-3xl glass p-8 hover:border-gold/40 transition-all"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/20" />
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-gold/30"
                />
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};