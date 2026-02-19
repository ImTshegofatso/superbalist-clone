import React from 'react';

const Wishlist: React.FC = () => {
  // Replace with context/store later
  const items: { id: string; name: string; price: string }[] = [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty. Start adding your favorite items!</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.id} className="border rounded-lg p-4">
              <div className="aspect-square bg-gray-100 rounded mb-3" />
              <h3 className="font-medium">{it.name}</h3>
              <p className="text-gray-600">{it.price}</p>
              <button className="mt-2 text-sm underline">Move to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;