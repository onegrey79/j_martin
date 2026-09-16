import React from 'react';

export const Services = () => {
  const serviceList = [
    { title: 'Frontend Web Engineering', price: 'From $2,500', desc: 'Custom single-page React applications with routing, context state, and Tailwind CSS.' },
    { title: 'UI/UX Design Systems', price: 'From $1,800', desc: 'Design system setup with dark mode capability, accessibility compliance, and design tokens.' },
    { title: 'Performance Optimization', price: 'From $950', desc: 'Auditing codebases for bundle sizes, load speeds, and dynamic code splitting.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Our Web Services</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Comprehensive tech solutions designed to scale with your project.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceList.map((s, i) => (
          <div key={i} className="p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">{s.desc}</p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700 text-blue-600 dark:text-blue-400 font-bold">
              {s.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};