import HeroSection from "../components/home/HeroSection";
import CategoryBanner from "../components/home/CategoryBanner";
import ProductGrid from "../components/home/ProductGrid";
// import PromoBanner from "../components/home/PromoBanner";
import FeatureCards from "../components/home/FeatureCards";

export default function HomePage() {
  return (
    <div className="animate-[fadeUp_0.5s_ease_both]">
      <HeroSection />
      <CategoryBanner />
      <ProductGrid />
      {/* <PromoBanner /> */}
      <FeatureCards />
    </div>
  );
}
