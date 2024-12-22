import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  discount?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Apple Watch",
    price: 599,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "iPad Pro",
    price: 899,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80",
    discount: 15,
  },
  // Add more products as needed
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {products.map((product) => (
        <Card key={product.id} className="border-0 shadow-sm">
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
            {product.discount && (
              <Badge className="absolute top-2 right-2 bg-red-500">
                -{product.discount}%
              </Badge>
            )}
          </div>
          <div className="p-3">
            <h3 className="text-sm font-medium">{product.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-semibold">
                ${product.discount
                  ? (product.price * (1 - product.discount / 100)).toFixed(2)
                  : product.price.toFixed(2)}
              </span>
              {product.discount && (
                <span className="text-xs text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}