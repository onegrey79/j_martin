import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';

const PRODUCTS_DATA = [
  {
    id: 1,
    title: 'SaaS Dashboard Template',
    category: 'Templates',
    price: '$49',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    description: 'Fully responsive admin layout built with React and Tailwind CSS.'
  },
  {
    id: 2,
    title: 'E-Commerce React UI Kit',
    category: 'Templates',
    price: '$79',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    description: 'Complete UI component library for online store applications.'
  },
  {
    id: 3,
    title: 'Modern React Masterclass',
    category: 'Courses',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    description: 'Comprehensive course covering hooks, custom context, and routing.'
  }
];

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Products Catalog</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Filter and explore our modern software offerings</p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex justify-center space-x-3 mb-10">
        {['All', 'Templates', 'Courses'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};