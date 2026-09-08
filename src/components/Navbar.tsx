import React, { useState } from 'react';
import { TabType } from '../types';
import { Coffee, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenCoffee: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenCoffee,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string }[] = [
    { id: 'home', label: '首页' },
    { id: 'about', label: '关于我' },
    { id: 'articles', label: '我的文章' },
    { id: 'works', label: '我的作品' },
  ];

  const handleSelectTab = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-100/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleSelectTab('home')}
          className="group flex items-center gap-1.5 text-2xl font-bold tracking-tight text-[#1b1e36] transition-transform hover:scale-105"
        >
          <span className="font-display font-extrabold text-[26px] tracking-tight text-[#171b34]">
            陈楠
          </span>
          <span className="text-[#3b82f6] text-lg font-black tracking-tight">.小站</span>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleSelectTab(item.id)}
                className={`relative py-2 text-base font-semibold transition-all ${
                  isActive
                    ? 'text-[#0f172a]'
                    : 'text-[#475569] hover:text-[#0f172a]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-400 rounded-full animate-in fade-in zoom-in-50 duration-200" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Buy Me A Coffee + Contact */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-coffee-btn"
            onClick={onOpenCoffee}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold text-sm shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Coffee className="w-4 h-4 text-amber-100 fill-amber-100/30" />
            <span>请我喝杯咖啡</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-coffee-btn"
            onClick={onOpenCoffee}
            className="p-2.5 rounded-xl bg-amber-50 text-amber-600 hover:bg-amber-100"
            title="请我喝杯咖啡"
          >
            <Coffee className="w-5 h-5" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="切换导航菜单"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => handleSelectTab(item.id)}
                  className={`flex flex-col items-start px-4 py-3 rounded-2xl text-left transition-all ${
                    isActive
                      ? 'bg-amber-50 text-amber-900 font-bold border border-amber-200'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-base">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl border-2 border-slate-700 font-semibold text-slate-800 text-sm hover:bg-slate-50 text-center"
            >
              与我联系
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCoffee();
              }}
              className="w-full py-3 rounded-xl bg-amber-500 font-semibold text-white text-sm shadow hover:bg-amber-600 flex items-center justify-center gap-2"
            >
              <Coffee className="w-4 h-4" />
              <span>请我喝杯咖啡</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
