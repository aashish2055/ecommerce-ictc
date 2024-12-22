import { Button } from '@/components/ui/button';

export function PromotionalBanner() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-[#4D79FF] text-white p-8">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Smart Wearable.</h3>
              <p className="mb-6 opacity-90">20% off on smart watches</p>
              <Button variant="secondary">Shop Now</Button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80"
              alt="Smart Watch"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-48 w-48 object-cover rounded-xl"
            />
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-[#FFB84D] text-white p-8">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">New Arrival</h3>
              <p className="mb-6 opacity-90">Latest smart phones</p>
              <Button variant="secondary">Shop Now</Button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80"
              alt="Smartphone"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-48 w-48 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}