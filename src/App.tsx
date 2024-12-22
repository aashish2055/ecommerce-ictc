import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProfileSection } from '@/components/ProfileSection';
import { Categories } from '@/components/Categories';
import { ProductSection } from '@/components/ProductSection';
import { PromotionalBanner } from '@/components/PromotionalBanner';
import { StoreLocations } from '@/components/StoreLocations';
import { Brands } from '@/components/Brands';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ProfileSection />
        <Categories />
        <ProductSection />
        <PromotionalBanner />
        <StoreLocations />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}

export default App;