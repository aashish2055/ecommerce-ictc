import { MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const stores = [
  {
    id: 1,
    name: "Downtown Store",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    address: "123 Main St, New York, NY",
  },
  {
    id: 2,
    name: "Mall Location",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80",
    address: "456 Shopping Ave, Los Angeles, CA",
  },
  {
    id: 3,
    name: "Tech Hub",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&q=80",
    address: "789 Innovation Blvd, San Francisco, CA",
  },
];

export function StoreLocations() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Our Stores</h2>
          <button className="text-sm text-gray-500 hover:text-gray-700">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <Card key={store.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{store.name}</h3>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{store.address}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}