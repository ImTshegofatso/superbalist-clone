import { Product } from '../types';

const generateProducts = () => {
  const brands = ['Nike', 'Adidas', 'Mango', 'Superbalist', 'Levi\'s', 'Puma', 'Converse', 'ALDO', 'Cotton On', 'Sixth Floor', 'Guess', 'Calvin Klein'];
  const colors = ['Black', 'White', 'Blue', 'Red', 'Beige', 'Grey', 'Navy'];
  
  const items: Product[] = [];

  // Generate 25 Sneakers
  for (let i = 1; i <= 25; i++) {
    items.push({
      id: `sneaker-${i}`,
      name: `${brands[i % brands.length]} Sneaker Model ${i}`,
      brand: brands[i % brands.length],
      price: 800 + (i * 50),
      originalPrice: 1200 + (i * 50),
      image: `https://images.unsplash.com/photo-${[
        '1542291026-7eec264c27ff', '1549298916-b41d501d3772', '1606107557195-0e29a4b5b4aa', 
        '1595950653106-6c9ebd614d3a', '1525966222134-fcfa99b8ae77', '1584735175315-9d5df23860e6'
      ][i % 6]}?auto=format&fit=crop&q=80&w=800`,
      category: i % 2 === 0 ? 'men' : 'women',
      subcategory: 'sneakers',
      description: `Premium quality sneakers for style and comfort. Perfect for everyday wear.`,
      sizes: ['6', '7', '8', '9', '10', '11', '12'],
      colors: [colors[i % colors.length], 'White'],
      rating: 4 + (i % 10) / 10,
      reviewsCount: 10 + i * 2
    });
  }

  // Generate 25 Dresses
  for (let i = 1; i <= 25; i++) {
    items.push({
      id: `dress-${i}`,
      name: `${brands[i % brands.length]} Elegant Dress ${i}`,
      brand: brands[i % brands.length],
      price: 499 + (i * 30),
      image: `https://images.unsplash.com/photo-${[
        '1572804013309-59a88b7e92f1', '1496747611176-843222e1e57c', '1585487000160-6ebcfceb0d03', 
        '1618932260643-eee4a2f652a6', '1595777457583-95e059d581b8'
      ][i % 5]}?auto=format&fit=crop&q=80&w=800`,
      category: 'women',
      subcategory: 'dresses',
      description: `A beautiful dress suitable for any occasion. Made with high quality fabric.`,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [colors[i % colors.length], 'Floral'],
      rating: 4.2 + (i % 8) / 10,
      reviewsCount: 5 + i * 3
    });
  }

  // Generate 25 Jeans
  for (let i = 1; i <= 25; i++) {
    items.push({
      id: `jeans-${i}`,
      name: `${brands[i % brands.length]} Classic Jeans ${i}`,
      brand: brands[i % brands.length],
      price: 699 + (i * 20),
      originalPrice: 999 + (i * 20),
      image: `https://images.unsplash.com/photo-${[
        '1542272604-787c3835535d', '1541099649105-f69ad21f3246', '1604176354204-926873ff3da9',
        '1582552938357-32b906df40cb', '1511193311914-0346f16efe50'
      ][i % 5]}?auto=format&fit=crop&q=80&w=800`,
      category: i % 2 === 0 ? 'men' : 'women',
      subcategory: 'jeans',
      description: `Durable and stylish denim jeans with a comfortable fit.`,
      sizes: ['28', '30', '32', '34', '36', '38'],
      colors: ['Blue', 'Black', 'Light Blue'],
      rating: 4.5 + (i % 5) / 10,
      reviewsCount: 20 + i * 5
    });
  }

  // Generate some Home items
  for (let i = 1; i <= 15; i++) {
    items.push({
      id: `home-${i}`,
      name: `${brands[i % brands.length]} Home Decor ${i}`,
      brand: 'Sixth Floor',
      price: 250 + (i * 40),
      image: `https://images.unsplash.com/photo-${[
        '1507473885765-e6ed057f782c', '1513584684374-8bdb74838a0f', '1534349762230-e09637c3a905',
        '1583847268964-b1892c479a05'
      ][i % 4]}?auto=format&fit=crop&q=80&w=800`,
      category: 'home',
      subcategory: 'decor',
      description: `Beautifully crafted home decor piece to enhance your living space.`,
      sizes: ['One Size'],
      colors: ['Neutral', 'Natural'],
      rating: 4.6 + (i % 4) / 10,
      reviewsCount: 15 + i
    });
  }

  return items;
};

export const products: Product[] = generateProducts();
