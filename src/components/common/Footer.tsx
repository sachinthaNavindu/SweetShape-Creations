function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SweetShape Creations</h3>
            <p className="text-sm">Professional baking supplies for every baker's needs.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-rose-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400">
                  Shipping
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-rose-400">
                  Cake Molds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400">
                  Pillars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400">
                  Cookie Cutters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400">
                  Tools
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-rose-400">
                Instagram
              </a>
              <a href="#" className="hover:text-rose-400">
                Facebook
              </a>
              <a href="#" className="hover:text-rose-400">
                Pinterest
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2026 SweetShape Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;