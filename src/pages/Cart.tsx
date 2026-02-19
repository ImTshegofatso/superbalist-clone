import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 p-8 rounded-full">
            <ShoppingBag className="w-12 h-12 text-gray-300" />
          </div>
        </div>
        <h2 className="text-2xl font-black mb-4 uppercase">Your shopping bag is empty</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Seems like you haven't added anything to your bag yet. 
          Start shopping to find the latest trends!
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-black text-white px-8 py-4 text-sm font-black hover:bg-gray-800 transition-colors uppercase tracking-widest"
        >
          START SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <h1 className="text-2xl font-black mb-8 uppercase tracking-tight">Your Shopping Bag ({cart.length})</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={`${item.id}-${item.selectedSize}`} className="flex border-b border-gray-100 pb-6 group">
              <div className="w-24 h-32 md:w-32 md:h-44 bg-gray-100 flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="ml-4 md:ml-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.brand}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="text-gray-400 hover:text-black transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <Link to={`/product/${item.id}`} className="hover:underline">
                    <h2 className="text-sm md:text-base font-bold text-gray-900 mt-1">{item.name}</h2>
                  </Link>
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-gray-500">COLOR: <span className="font-bold text-black uppercase">{item.selectedColor}</span></p>
                    <p className="text-xs text-gray-500">SIZE: <span className="font-bold text-black uppercase">{item.selectedSize}</span></p>
                  </div>
                </div>
                
                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center border border-gray-200">
                    <button 
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center text-sm font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm font-black">R {item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}

          <Link to="/shop" className="inline-flex items-center text-xs font-bold hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> CONTINUE SHOPPING
          </Link>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 md:p-8 sticky top-24">
            <h2 className="text-lg font-black mb-6 uppercase tracking-tight border-b border-gray-200 pb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 font-bold uppercase tracking-wide">Subtotal</span>
                <span className="font-black text-black">R {cartTotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 font-bold uppercase tracking-wide">Delivery</span>
                <span className="text-green-600 font-bold">FREE</span>
              </div>
              <div className="pt-4 border-t border-gray-200 flex justify-between">
                <span className="text-base font-black uppercase tracking-tight">Total</span>
                <span className="text-base font-black">R {cartTotal}</span>
              </div>
            </div>
            
            <button className="w-full bg-black text-white py-4 mt-8 text-sm font-black hover:bg-gray-800 transition-colors uppercase tracking-widest">
              PROCEED TO CHECKOUT
            </button>
            
            <p className="text-[10px] text-gray-500 mt-4 text-center leading-relaxed">
              BY CLICKING PROCEED TO CHECKOUT, YOU AGREE TO OUR TERMS AND CONDITIONS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
