import { useMemo, useState } from "react";
import { CalendarCheck, Sparkles } from "lucide-react";
import { toast } from "sonner";

const services = [
  {
    label: "Photography",
    value: "photography",
    subLabel: "Photography Type",
    subOptions: [
      "Wedding",
      "Pre-Wedding",
      "Birthday",
      "Engagement",
      "Event Shoot",
      "Baby Shoot",
      "Maternity Shoot",
      "Portfolio Shoot",
      "Fashion Shoot",
      "Corporate Shoot",
      "All Types",
    ],
  },
  {
    label: "Camera Purchase",
    value: "camera",
    subLabel: "Product Type",
    subOptions: [
      "DSLR Camera",
      "Mirrorless Camera",
      "Video Camera",
      "Second-Hand Camera",
      "Lens Purchase",
      "Tripod",
      "Lighting Equipment",
      "Full Camera Kit",
      "All Products",
    ],
  },
  {
    label: "Accessories",
    value: "accessories",
    subLabel: "Accessory Type",
    subOptions: [
      "Camera Lens",
      "Tripod Stand",
      "Camera Bag",
      "Memory Card",
      "Battery & Charger",
      "Lighting Kit",
      "Microphone",
      "Gimbal Stabilizer",
      "Filters",
      "All Accessories",
    ],
  },
  {
    label: "Camera Repair",
    value: "repair",
    subLabel: "Repair Type",
    subOptions: [
      "Lens Repair",
      "Camera Body Repair",
      "Sensor Cleaning",
      "Software Issue",
      "Water Damage Repair",
      "Battery Issue",
      "Screen Replacement",
      "Full Service",
      "All Repairs",
    ],
  },
];

export const Booking = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("photography");
  const [subService, setSubService] = useState("Wedding");

  const current = useMemo(() => services.find((s) => s.value === service), [service]);
  const subs = current?.subOptions ?? [];
  const subLabel = current?.subLabel ?? "Type";
  const showSub = subs.length > 0;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error("Please enter your name and phone number");
      return;
    }
    const serviceLabel = services.find((s) => s.value === service)?.label ?? service;
    const lines = [
      "Hello Roshan Cemara,",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${serviceLabel}${showSub ? ` - ${subService}` : ""}`,
      date ? `Date: ${date}` : null,
      "",
      "I'd like to book a slot. Please confirm.",
    ].filter(Boolean);
    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/917543994305?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp…");
  };

  const fieldCls =
    "w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-gold transition-colors";

  return (
    <section id="booking" className="relative section-pad">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-[2.5rem] glass p-8 md:p-14">
          <div
            className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(var(--gold)/0.25), transparent 70%)" }}
          />
          <div className="relative grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <div>
              <div className="eyebrow mb-4">
                <Sparkles className="h-3 w-3" /> Reserve Your Slot
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-tight mb-4">
                Book your <em className="text-gradient-gold not-italic">shoot</em> today.
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Tell us what you need and we'll confirm your booking on WhatsApp within minutes.
              </p>
            </div>

            <form onSubmit={onSubmit} className="rounded-3xl bg-[hsl(0_0%_6.5%)] border border-border/60 p-6 md:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={fieldCls}
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={fieldCls}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                    Select Service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      const next = services.find((s) => s.value === e.target.value)?.subOptions?.[0] ?? "";
                      setSubService(next);
                    }}
                    className={fieldCls}
                  >
                    {services.map((s) => (
                      <option key={s.value} value={s.value} className="bg-background">
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                {showSub && (
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                      {subLabel}
                    </label>
                    <select
                      value={subService}
                      onChange={(e) => setSubService(e.target.value)}
                      className={fieldCls}
                    >
                      {subs.map((o) => (
                        <option key={o} value={o} className="bg-background">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={fieldCls}
                />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-3 rounded-full gradient-gold py-4 font-medium text-primary-foreground shadow-gold hover:scale-[1.02] transition-transform"
              >
                <CalendarCheck className="h-5 w-5" />
                Book via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};