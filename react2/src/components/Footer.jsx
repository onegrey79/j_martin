import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">JM Technologies</h3>
          <p className="text-sm leading-relaxed">
            Crafting tailored web solutions, web applications, and digital experiences using state-of-the-art frontend technologies.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Quick Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link></li>
            <li><Link to="/products" className="hover:text-blue-600 dark:hover:text-blue-400">Products & Catalog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Get in Touch</h4>
          <p className="text-sm">jmgrey7990@gmail.com</p>
          <p className="text-sm">+63 (0917) 636-6564</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs">
        &copy; {new Date().getFullYear()} JM Technologies. All rights reserved.
      </div>
    </footer>
  );
};