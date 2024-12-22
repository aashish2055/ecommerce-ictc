import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="bg-[#FF4D4D] rounded-b-[2rem] overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="w-full md:w-1/2 text-white text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Lorem Ipsum is<br className="hidden md:block" />simply dummy
              </h1>
              <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90">
                Lorem ipsum has been the<br className="hidden md:block" />industry's standard dummy text
              </p>
              <Button className="bg-white text-[#FF4D4D] hover:bg-gray-100">
                Shop Now
              </Button>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?auto=format&fit=crop&q=80"
                alt="Shopping"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full px-4 md:px-0 md:w-auto">
        <nav className="bg-white rounded-full shadow-lg px-4 md:px-8 py-3 md:py-4 overflow-x-auto max-w-full">
          <ul className="flex whitespace-nowrap md:space-x-8 min-w-max">
            {['Showcase', 'Product', 'Offer', 'Event', 'Job'].map((item) => (
              <li key={item} className="px-3 md:px-0">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm md:text-base text-gray-600 hover:text-[#FF4D4D] transition-colors"
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

