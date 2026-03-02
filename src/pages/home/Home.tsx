import { 
  ShoppingBagIcon, 
  CakeIcon,
  ChevronRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import heroImage from "../../assets/Gemini_Generated_Image_8wbn758wbn758wbn.png";

function Home() {

  const categories = [
    { name: 'Cake Molds', icon: CakeIcon, description: 'Premium silicone and metal molds' },
    { name: 'Pillars', icon: CakeIcon, description: 'Sturdy cake pillars for multi-tier cakes' },
    { name: 'Cookie Cutters', icon: CakeIcon, description: 'Hundreds of shapes and sizes' },
    { name: 'Baking Tools', icon: ShoppingBagIcon, description: 'Professional-grade equipment' },
  ];

  const featuredProducts = [
    { id: 1, name: '3-Tier Pillar Set', price: '$24.99', image: 'https://via.placeholder.com/300x200' },
    { id: 2, name: 'Silicone Rose Mold', price: '$12.99', image: 'https://via.placeholder.com/300x200' },
    { id: 3, name: 'Cookie Cutter Set (20pc)', price: '$18.99', image: 'https://via.placeholder.com/300x200' },
    { id: 4, name: 'Professional Icing Kit', price: '$34.99', image: 'https://via.placeholder.com/300x200' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <section className="from-rose-100 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Your One-Stop Shop for 
                <span className="text-rose-600"> Baking Excellence</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Premium cake molds, pillars, cookie cutters, and professional tools for bakers of all levels.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition flex items-center">
                  Shop Now <ChevronRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-rose-600 text-rose-600 px-8 py-3 rounded-lg hover:bg-rose-50 transition">
                  View Categories
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src={heroImage}
                alt="Baking supplies" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div 
                key={category.name} 
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer group"
              >
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition">
                  <category.icon className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
          <p className="text-gray-600 text-center mb-12">Our most popular baking essentials</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-rose-600 font-bold">{product.price}</span>
                    <button className="text-sm bg-rose-600 text-white px-3 py-1 rounded hover:bg-rose-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rose-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-rose-100 mb-8">Get the latest products and exclusive offers</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-rose-50 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;