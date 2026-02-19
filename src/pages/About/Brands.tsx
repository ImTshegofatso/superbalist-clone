import React from 'react';

const Brands: React.FC = () => {
  const brands = ['Nike', 'Adidas', 'Puma', 'The North Face', 'Levi’s'];
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Brands</h1>
      <p className="text-gray-600 mb-6">Discover our curated collection of top brands.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {brands.map((b) => (
          <div key={b} className="border rounded-lg p-4 text-center hover:shadow-sm">
            <span className="font-medium">{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
