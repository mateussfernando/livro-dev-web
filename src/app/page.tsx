import AboutSection from "@/components/layout/mobile/AboutSection";
import ProductCarousel from "@/components/card/ProductCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <AboutSection></AboutSection>
      <ProductCarousel></ProductCarousel>
    </div>
  );
}
