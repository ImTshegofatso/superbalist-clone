import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Layout } from './components/Layout';

// Existing core pages
import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';

// About
import OurStory from './pages/About/OurStory';
import Careers from './pages/About/Careers';
import SustainableStyle from './pages/About/SustainableStyle';
import Brands from './pages/About/Brands';

// Customer Service
import HelpCenter from './pages/CustomerService/HelpCenter';
import ReturnsRefunds from './pages/CustomerService/ReturnsRefunds';
import DeliveryInfo from './pages/CustomerService/DeliveryInfo';
import SizeGuide from './pages/CustomerService/SizeGuide';

// Account
import SignInRegister from './pages/Account/SignInRegister';
import OrderHistory from './pages/Account/OrderHistory';
import TrackOrder from './pages/Account/TrackOrder';
import Wishlist from './pages/Account/Wishlist';

// Optional: a simple 404 component
const NotFound = () => (
  <div className="p-20 text-center">
    <h1 className="text-2xl font-bold mb-2">404</h1>
    <p className="text-gray-600">Page not found.</p>
  </div>
);

export function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Home */}
            <Route index element={<Home />} />

            {/* Shop */}
            <Route path="shop" element={<ProductList />} />
            <Route path="shop/:category" element={<ProductList />} />
            <Route path="shop/:category/:subcategory" element={<ProductList />} />

            {/* Product */}
            <Route path="product/:id" element={<ProductDetail />} />

            {/* Cart */}
            <Route path="cart" element={<Cart />} />

            {/* Account */}
            <Route path="sign-in" element={<SignInRegister />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="track-order" element={<TrackOrder />} />
            <Route path="wishlist" element={<Wishlist />} />

            {/* About Superbalist */}
            <Route path="our-story" element={<OurStory />} />
            <Route path="careers" element={<Careers />} />
            <Route path="sustainable-style" element={<SustainableStyle />} />
            <Route path="brands" element={<Brands />} />

            {/* Customer Service */}
            <Route path="help-center" element={<HelpCenter />} />
            <Route path="returns-refunds" element={<ReturnsRefunds />} />
            <Route path="delivery-info" element={<DeliveryInfo />} />
            <Route path="size-guide" element={<SizeGuide />} />

            {/* 404 fallback for nested routes */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
