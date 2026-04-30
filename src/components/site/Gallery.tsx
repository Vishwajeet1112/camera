import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import i1 from "@/assets/1.jpg";
import i2 from "@/assets/2.jpg";
import i3 from "@/assets/3.jpg";
import i4 from "@/assets/4.jpg";
// import i5 from "@/assets/IMG_1103.JPG";


const images = [
  { src: g2, alt: "Bridal portrait", span: "row-span-2" },
  { src: g3, alt: "Camera lens collection", span: "" },
  { src: g1, alt: "Studio photographer", span: "" },
  { src: g5, alt: "Camera shop interior", span: "row-span-2" },
  { src: g4, alt: "Newborn photography", span: "" },
  { src: g6, alt: "Pre-wedding silhouette", span: "" },
  
   { src: i1, alt: "Wedding shoot", span: "" },
  { src: i2, alt: "Event photography", span: "" },
  { src: i3, alt: "Camera showcase", span: "" },
  { src: i4, alt: "Professional shoot", span: "" },
  // { src: i5, alt: "Client project", span: "" },

];

export const Gallery = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative section-pad">
      <div className="container-luxe">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="eyebrow mb-4">Frames We're Proud Of</div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              A glimpse into our <em className="text-gradient-gold not-italic">work</em>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Every photograph is a story preserved. Tap any frame to view it full size.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[260px] gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(img.src)}
              className={`group relative overflow-hidden rounded-3xl ${img.span} focus:outline-none focus:ring-2 focus:ring-gold`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <div className="font-display text-lg text-foreground">{img.alt}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-6 animate-fade-in"
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 h-11 w-11 rounded-full glass flex items-center justify-center hover:border-gold/50"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={active}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-elegant object-contain"
          />
        </div>
      )}
    </section>
  );
};