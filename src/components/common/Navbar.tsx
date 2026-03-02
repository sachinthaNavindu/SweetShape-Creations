import { useState } from 'react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-rose-600">SweetShape Creations</h1>
            <span className="ml-2 text-sm text-gray-500 hidden sm:inline">
              Professional Baking Supplies
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-rose-600 transition">
              Shop
            </a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition">
              New Arrivals
            </a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition">
              Contact
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:bg-rose-50 rounded"
            >
              Shop
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:bg-rose-50 rounded"
            >
              Categories
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:bg-rose-50 rounded"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:bg-rose-50 rounded"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;