import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Menu, X, Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', path: '/' }, // Anchored to home for MVP
    { name: 'Resources', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Book a demo', path: '/book-demo' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileOpen ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform">
            <Zap size={18} fill="currentColor" />
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">FinFlow</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                isActive(link.path) ? 'text-brand-600' : 'text-slate-800 hover:text-slate-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsMobileOpen(false)}
              className="text-base font-medium text-slate-700 py-2 border-b border-slate-50"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="ghost" className="w-full justify-start">Sign In</Button>
            <Button variant="primary" className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};