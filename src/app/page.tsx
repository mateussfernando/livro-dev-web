import AboutSection from "@/components/mobile/aboutSection";
import ProductCarousel from "@/components/mobile/productCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <AboutSection></AboutSection>
      <ProductCarousel></ProductCarousel>
    </div>
  );
}
