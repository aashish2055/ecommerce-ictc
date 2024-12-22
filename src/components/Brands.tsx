import { Card } from '@/components/ui/card';

const brands = [
  { name: "Nike", logo: "/nike.svg" },
  { name: "Adidas", logo: "/adidas.svg" },
  { name: "Louis Vuitton", logo: "/lv.svg" },
  { name: "Puma", logo: "/puma.svg" },
  { name: "Samsung", logo: "/samsung.svg" },
  { name: "Dell", logo: "/dell.svg" },
];

export function Brands() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <Card
              key={brand.name}
              className="p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 object-contain"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}