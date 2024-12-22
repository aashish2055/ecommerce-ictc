import { Search, ShoppingBag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold">Your Logo Here</a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm hover:text-primary">Product</a>
          <a href="#" className="text-sm hover:text-primary">Offer</a>
          <a href="#" className="text-sm hover:text-primary">Store</a>
          <a href="#" className="text-sm hover:text-primary">Event</a>
          <a href="#" className="text-sm hover:text-primary">Job</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="relative w-64">
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 h-9 bg-gray-100 border-0"
            />
            <Search className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
          </div>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}