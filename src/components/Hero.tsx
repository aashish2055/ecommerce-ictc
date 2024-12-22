import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="bg-[#FF4D4D] rounded-b-[2rem] overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center">
            <div className="w-1/2 text-white">
              <h1 className="text-5xl font-bold leading-tight mb-4">
                Lorem Ipsum is<br />simply dummy
              </h1>
              <p className="text-lg mb-8 opacity-90">
                Lorem ipsum has been the<br />industry's standard dummy text
              </p>
              <Button className="bg-white text-[#FF4D4D] hover:bg-gray-100">
                Shop Now
              </Button>
            </div>
            <div className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?auto=format&fit=crop&q=80"
                alt="Shopping"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <nav className="bg-white rounded-full shadow-lg px-8 py-4">
          <ul className="flex space-x-8">
            {['Showcase', 'Product', 'Offer', 'Event', 'Job'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-[#FF4D4D] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}