import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {product.originalPrice && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </div>
          )}
          <button className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="w-5 h-5 text-gray-900" />
          </button>
        </div>
      </Link>
      <div className="mt-4 flex flex-col items-center text-center">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">{product.brand}</h3>
        <Link to={`/product/${product.id}`} className="mt-1">
          <p className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</p>
        </Link>
        <div className="mt-1 flex items-center space-x-2">
          <span className="text-sm font-black text-black">R {product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">R {product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};
