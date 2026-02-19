import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../services/api";
import { Product } from "../types";
import { useCart } from "../context/CartContext";
import {
  Heart,
  Share2,
  Ruler,
  Truck,
  RotateCcw,
  ShieldCheck,
  Loader2,
} from "lucide-react";

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [error, setError] = useState("");

  // Fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        setLoading(true);
        const data = await api.getProductById(id);
        setProduct(data || null);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 animate-spin text-gray-400" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20 font-bold">Product not found.</div>
    );
  }

  // ⭐ FIXED Add to Cart handler
  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size");
      return;
    }

    const cartItem = {
      ...product,
      selectedSize,
      selectedColor: selectedColor || product.colors[0],
      cartId:
        product.id +
        "-" +
        selectedSize +
        "-" +
        (selectedColor || product.colors[0]),
    };

    addToCart(cartItem);
    setError("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="flex text-xs text-gray-400 mb-8 uppercase tracking-widest font-bold">
        <Link to="/" className="hover:text-black">
          HOME
        </Link>
        <span className="mx-2">/</span>
        <Link
          to={`/shop/${product.category}`}
          className="hover:text-black"
        >
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-black">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer opacity-70 hover:opacity-100"
              >
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
            {product.brand}
          </h2>

          <h1 className="text-2xl md:text-3xl font-black mt-1 mb-4">
            {product.name}
          </h1>

          <div className="flex items-center space-x-4 mb-6">
            <span className="text-2xl font-black">R {product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                R {product.originalPrice}
              </span>
            )}
          </div>

          <div className="border-t border-b border-gray-100 py-6 space-y-6">
            {/* Color Selection */}
            <div>
              <h3 className="text-xs font-bold mb-3 uppercase tracking-wider">
                Color: {selectedColor || "Select"}
              </h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-black"
                        : "border-transparent"
                    } flex items-center justify-center`}
                  >
                    <span
                      className="w-6 h-6 rounded-full border border-gray-200"
                      style={{
                        backgroundColor:
                          color.toLowerCase().includes("black")
                            ? "black"
                            : color.toLowerCase().includes("white")
                            ? "white"
                            : "#ddd",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider">
                  Size: {selectedSize || "Select"}
                </h3>
                <button className="flex items-center text-[10px] font-bold text-gray-500 hover:text-black">
                  <Ruler className="w-3 h-3 mr-1" /> SIZE GUIDE
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] h-10 px-3 flex items-center justify-center text-xs font-bold border ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-200 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {error && (
                <p className="text-red-600 text-[10px] font-bold mt-2 uppercase">
                  {error}
                </p>
              )}
            </div>

            {/* Add to Cart */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-4 text-sm font-black hover:bg-gray-800 transition-colors"
              >
                ADD TO BAG
              </button>

              <button className="p-4 border border-gray-200 hover:border-black transition-colors">
                <Heart className="w-6 h-6" />
              </button>

              <button className="p-4 border border-gray-200 hover:border-black transition-colors">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Info Rows */}
          <div className="py-6 space-y-4">
            <div className="flex items-center space-x-4 text-xs font-bold">
              <Truck className="w-5 h-5 text-gray-400" />
              <span>FREE DELIVERY FOR ORDERS OVER R500</span>
            </div>

            <div className="flex items-center space-x-4 text-xs font-bold">
              <RotateCcw className="w-5 h-5 text-gray-400" />
              <span>FREE 30 DAY RETURNS</span>
            </div>

            <div className="flex items-center space-x-4 text-xs font-bold">
              <ShieldCheck className="w-5 h-5 text-gray-400" />
              <span>100% SECURE CHECKOUT</span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-4 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-bold mb-4">PRODUCT DESCRIPTION</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
