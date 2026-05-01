import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Urgency } from "@/components/site/Urgency";
import { Booking } from "@/components/site/Booking"; // ✅ KEEP THIS
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Roshan Cemara",
    image: "https://roshancemara.com/og.jpg",
    telephone: "+917543994305",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bela Mod Bypass Rd, Sundarpur",
      addressLocality: "Darbhanga",
      addressRegion: "Bihar",
      postalCode: "846004",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "500",
    },
    priceRange: "₹₹",
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Gallery />
        <Testimonials />
        <Urgency />
        <Booking /> {/* ✅ SHOW BOOKING */}
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;