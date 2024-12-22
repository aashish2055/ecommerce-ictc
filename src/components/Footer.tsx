import { Facebook, Instagram, Twitter } from 'lucide-react';

const footerLinks = {
  quickLinks: ['Products', 'Categories', 'Deals', 'About'],
  customerService: ['Contact Us', 'Shipping Policy', 'Returns & Exchanges', 'FAQs'],
  social: [
    { id: 'facebook', icon: Facebook, href: '#facebook' },
    { id: 'instagram', icon: Instagram, href: '#instagram' },
    { id: 'twitter', icon: Twitter, href: '#twitter' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">About Us</h3>
            <p className="text-sm">
              ShopSmart is your one-stop destination for all things tech. We offer the latest gadgets and accessories at competitive prices.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.customerService.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {footerLinks.social.map(({ id, icon: Icon, href }) => (
                <a
                  key={id}
                  href={href}
                  className="hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ShopSmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}