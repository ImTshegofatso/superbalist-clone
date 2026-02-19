export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'men' | 'women' | 'kids' | 'home' | 'sport' | 'beauty';
  subcategory: string; // e.g., 'sneakers', 'dresses', 'jeans', 't-shirts'
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviewsCount: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
