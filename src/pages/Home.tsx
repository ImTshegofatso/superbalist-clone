import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ChevronRight } from 'lucide-react';

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000"
          alt="New Season Arrival"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4">New Season</h2>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">THE EDIT</h1>
          <div className="flex space-x-4">
            <Link to="/shop/women" className="bg-white text-black px-8 py-3 text-sm font-bold hover:bg-black hover:text-white transition-colors">SHOP WOMEN</Link>
            <Link to="/shop/men" className="bg-white text-black px-8 py-3 text-sm font-bold hover:bg-black hover:text-white transition-colors">SHOP MEN</Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'SNEAKERS', img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800', path: '/shop/sneakers' },
            { name: 'DRESSES', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800', path: '/shop/women/dresses' },
            { name: 'JEANS', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800', path: '/shop/jeans' },
            { name: 'HOME', img: 'https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?auto=format&fit=crop&q=80&w=800', path: '/shop/home' }
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="group relative h-80 overflow-hidden">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/50">
                <span className="text-white text-xl font-black tracking-widest">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-black tracking-tight">TRENDING NOW</h2>
            <p className="text-gray-500 text-sm mt-1">Shop the most popular styles this week</p>
          </div>
          <Link to="/shop" className="flex items-center text-sm font-bold hover:underline">
            VIEW ALL <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brands Banner */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gray-500 mb-8">OVER 450 OF THE WORLD'S BEST BRANDS</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-60">
            <span className="text-2xl font-black tracking-tighter">NIKE</span>
            <span className="text-2xl font-black tracking-tighter">ADIDAS</span>
            <span className="text-2xl font-black tracking-tighter">MANGO</span>
            <span className="text-2xl font-black tracking-tighter">LEVIS</span>
            <span className="text-2xl font-black tracking-tighter">CONVERSE</span>
            <span className="text-2xl font-black tracking-tighter">VANS</span>
          </div>
        </div>
      </section>
    </div>
  );
};
