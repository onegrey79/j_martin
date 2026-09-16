import React from 'react';

export const ProductCard = ({ title, category, price, description, image }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-1">
          {category}
        </span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm flex-grow mb-4">{description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
          <span className="text-xl font-extrabold text-slate-900 dark:text-white">{price}</span>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};