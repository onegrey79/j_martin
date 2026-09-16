import React from 'react';

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-sm">About Our Agency</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-6">
            We are a client-focused React engineering team
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            ApexTech Studio delivers performant web applications designed according to strict modern standards. We focus heavily on component modularity, fluid responsiveness across devices, and full accessibility.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our technology stack is centered around ReactJS, Vite, Tailwind CSS, and custom hooks to maintain clean state separation across complex client applications.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Team Working"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};