import { Phone, MessageCircle } from "lucide-react";

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/917543994305"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform animate-float"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+917543994305"
        aria-label="Call"
        className="flex h-14 w-14 items-center justify-center rounded-full gradient-gold text-primary-foreground shadow-gold hover:scale-110 transition-transform animate-pulse-gold"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};