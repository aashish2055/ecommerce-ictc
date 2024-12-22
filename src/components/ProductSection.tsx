import { ProductGrid } from './ProductGrid';

export function ProductSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Top Product</h2>
          <button className="text-sm text-gray-500 hover:text-gray-700">View All</button>
        </div>
        <ProductGrid />
      </div>
    </section>
  );
}