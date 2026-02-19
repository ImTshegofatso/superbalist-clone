import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { api } from '../services/api';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal, ChevronDown, Loader2 } from 'lucide-react';

export const ProductList: React.FC = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory?: string }>();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || undefined;
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await api.getProducts({ category, subcategory, search });
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, [category, subcategory, search]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  const pageTitle = subcategory 
    ? `${category} ${subcategory}` 
    : category 
    ? category 
    : search 
    ? `Search: ${search}` 
    : 'All Products';

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight">
            {pageTitle.replace('-', ' ')}
          </h1>
          <p className="text-gray-500 text-sm mt-1">{sortedProducts.length} items</p>
        </div>

        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="flex items-center text-sm font-bold border-b-2 border-black pb-1 cursor-pointer">
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            FILTER
          </div>
          <div className="relative group flex items-center text-sm font-bold border-b-2 border-black pb-1 cursor-pointer">
            SORT BY: {sortBy.toUpperCase().replace('-', ' ')}
            <ChevronDown className="w-4 h-4 ml-2" />
            <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl border border-gray-100 hidden group-hover:block z-20">
              <button onClick={() => setSortBy('newest')} className="w-full text-left px-4 py-2 hover:bg-gray-50 text-xs font-bold">NEWEST</button>
              <button onClick={() => setSortBy('price-low')} className="w-full text-left px-4 py-2 hover:bg-gray-50 text-xs font-bold">PRICE LOW TO HIGH</button>
              <button onClick={() => setSortBy('price-high')} className="w-full text-left px-4 py-2 hover:bg-gray-50 text-xs font-bold">PRICE HIGH TO LOW</button>
            </div>
          </div>
        </div>
      </div>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-lg font-bold">NO PRODUCTS FOUND</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};
