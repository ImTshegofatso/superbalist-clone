import { products } from '../data/products';

export const api = {
  getProducts: async (filters: { category?: string, subcategory?: string, search?: string }) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const mainCategories = ['men', 'women', 'kids', 'home', 'sport', 'beauty'];
    
    return products.filter((p) => {
      const { category, subcategory, search } = filters;
      const categoryIsSubcategory = category && !mainCategories.includes(category);
      
      let matches = true;

      if (category && mainCategories.includes(category)) {
        matches = matches && p.category === category;
      } else if (categoryIsSubcategory) {
        matches = matches && p.subcategory === category;
      }

      if (subcategory) {
        matches = matches && p.subcategory === subcategory;
      }

      if (search) {
        const s = search.toLowerCase();
        matches = matches && (
          p.name.toLowerCase().includes(s) || 
          p.brand.toLowerCase().includes(s) ||
          p.category.toLowerCase().includes(s) ||
          p.subcategory.toLowerCase().includes(s)
        );
      }
        
      return matches;
    });
  },

  getProductById: async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return products.find(p => p.id === id);
  }
};
