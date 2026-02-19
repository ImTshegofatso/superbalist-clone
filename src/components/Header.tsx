import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../utils/cn';

export const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`);
    }
  };

  const navLinks = [
    { 
      name: 'WOMEN', 
      path: '/shop/women',
      sublinks: [
        { name: 'Dresses', path: '/shop/women/dresses' },
        { name: 'Sneakers', path: '/shop/women/sneakers' },
        { name: 'Jeans', path: '/shop/women/jeans' },
      ]
    },
    { 
      name: 'MEN', 
      path: '/shop/men',
      sublinks: [
        { name: 'Sneakers', path: '/shop/men/sneakers' },
        { name: 'Jeans', path: '/shop/men/jeans' },
        { name: 'T-Shirts', path: '/shop/men/t-shirts' },
      ]
    },
    { name: 'KIDS', path: '/shop/kids' },
    { name: 'HOME', path: '/shop/home' },
    { name: 'SPORT', path: '/shop/sport' },
    { name: 'BEAUTY', path: '/shop/beauty' },
    { name: 'OFFERS', path: '/shop/offers', className: 'text-red-600 font-bold' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-black text-white text-[10px] md:text-xs py-2 text-center font-medium">
        FREE DELIVERY ON ORDERS OVER R500 | DOWNLOAD THE APP FOR R250 OFF
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl md:text-3xl font-black tracking-tighter">SUPERBALIST</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 mx-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-4">
                <Link
                  to={link.path}
                  className={cn(
                    "text-sm font-bold tracking-wide hover:text-gray-600 transition-colors",
                    link.className
                  )}
                >
                  {link.name}
                </Link>
                {link.sublinks && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-xl border border-gray-100 hidden group-hover:block z-50 p-4 space-y-2">
                    {link.sublinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block text-xs font-bold text-gray-600 hover:text-black hover:underline"
                      >
                        {sub.name.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search brands, styles and more..."
                className="w-full bg-gray-100 border-none rounded py-2 px-4 pl-10 text-sm focus:ring-1 focus:ring-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            <Link to="/profile" className="hidden sm:block text-gray-700 hover:text-black">
              <User className="w-6 h-6" />
            </Link>
            <Link to="/wishlist" className="hidden sm:block text-gray-700 hover:text-black">
              <Heart className="w-6 h-6" />
            </Link>
            <Link to="/cart" className="relative text-gray-700 hover:text-black">
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-100 border-none rounded py-2 px-4 pl-10 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </form>
          <div className="grid grid-cols-1 gap-4">
            {navLinks.map((link) => (
              <div key={link.name} className="space-y-2">
                <Link
                  to={link.path}
                  className={cn("text-base font-bold", link.className)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.sublinks && (
                  <div className="pl-4 space-y-1">
                    {link.sublinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block text-sm text-gray-500 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
