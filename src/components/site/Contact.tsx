import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name} (${form.phone}). ${form.message}`;
    window.open(`https://wa.me/917543994305?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Opening WhatsApp to send your message…");
  };

  const contacts = [
    { icon: MapPin, label: "Address", value: "Bela Mod Bypass Rd, Sundarpur, Darbhanga, Bihar 846004" },
    { icon: Phone, label: "Call", value: "+91 75439 94305", href: "tel:+917543994305" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/917543994305" },
    { icon: Clock, label: "Hours", value: "Mon – Sun · 9:00 AM – 9:00 PM" },
  ];

  return (
    <section id="contact" className="relative section-pad">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="eyebrow mb-4">Visit / Call / Message</div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8">
              Let's create something <em className="text-gradient-gold not-italic">unforgettable</em>.
            </h2>

            <div className="space-y-4 mb-10">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href ?? "#"}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-2xl glass p-4 hover:border-gold/40 transition-colors"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl gradient-gold shadow-gold shrink-0">
                    <c.icon className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="text-foreground">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <form onSubmit={onSubmit} className="rounded-3xl glass p-6 md:p-8 space-y-4">
              <h3 className="font-display text-2xl mb-2">Quick Enquiry</h3>
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-gold transition-colors"
              />
              <input
                required
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-gold transition-colors"
              />
              <textarea
                required
                rows={4}
                placeholder="What can we help you with?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-gold transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full rounded-full gradient-gold py-4 font-medium text-primary-foreground shadow-gold hover:scale-[1.02] transition-transform"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

          <div className="relative rounded-3xl overflow-hidden glass min-h-[420px] lg:min-h-full">
            <iframe
              title="Roshan Cemara location"
              src="https://www.google.com/maps?q=Bela+Mod+Bypass+Rd,+Sundarpur,+Darbhanga,+Bihar+846004&output=embed"
              className="absolute inset-0 h-full w-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4 flex items-center justify-between">
              <div>
                <div className="font-medium">Roshan Cemara</div>
                <div className="text-xs text-muted-foreground">Sundarpur, Darbhanga</div>
              </div>
              <a
                href="https://maps.app.goo.gl/zfiTCWrKVtmew38P9"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest text-gold hover:text-gold-bright"
              >
                Open in Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};