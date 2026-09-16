import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const services = [
    { title: 'Custom React Apps', icon: '⚡', desc: 'High-speed, scalable web applications structured with standard React component logic.' },
    { title: 'UI/UX Design Systems', icon: '🎨', desc: 'Beautiful dark-mode ready interfaces engineered for maximum user engagement.' },
    { title: 'Cloud Integration', icon: '🚀', desc: 'Automated CI/CD deployment workflows tailored for moderne web platforms.' }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Building Digital Products for Next-Gen Businesses
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          We leverage modern JavaScript, React ecosystem tools, and responsive layout design to scale your digital agency presence.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/products"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            Browse Products
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Contact Team
          </Link>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Core Capabilities</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">What we build for client organizations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};