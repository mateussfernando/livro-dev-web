import AboutSection from "@/components/aboutSection";
import ProductCarousel from "@/components/productCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <AboutSection></AboutSection>
      <ProductCarousel></ProductCarousel>
    </div>
  );
}
