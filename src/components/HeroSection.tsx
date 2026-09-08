import React from 'react';
import { ArrowRight, Bell, Palette, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onGoToAbout: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onGoToAbout,
  onOpenContact,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background subtle warm glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* "👋 大家好" pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#fde5c8] text-[#9a3412] font-semibold text-sm sm:text-base mb-6 shadow-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
              <span className="text-lg">👋</span>
              <span>大家好</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#191c34] leading-[1.15] tracking-tight mb-6">
              我是陈楠，<br />
              <span className="text-[#191c34]">一个正在学习的人</span>
            </h1>

            {/* Subtitle / Philosophy */}
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-xl mb-10">
              {PERSONAL_INFO.subHeadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-about-me-btn"
                onClick={onGoToAbout}
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer w-full sm:w-auto"
              >
                <span>了解我</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>

              <button
                id="hero-contact-me-btn"
                onClick={onOpenContact}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-[#1e293b] text-[#1e293b] font-bold text-lg hover:bg-slate-900 hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer w-full sm:w-auto"
              >
                <span>与我联系</span>
              </button>
            </div>

            {/* Quick social highlights */}
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-slate-700">可接受项目合作与自由咨询</span>
              </div>
              <span className="text-slate-300">•</span>
              <span>常驻中国深圳</span>
            </div>
          </div>

          {/* Right Hero Visual from Image 3 */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Vibrant Mustard Yellow Circle backdrop */}
              <div className="absolute inset-4 rounded-full bg-[#f6be3c] shadow-inner transform transition-transform hover:scale-[1.02] duration-300" />
              
              {/* Secondary soft ring */}
              <div className="absolute -inset-1 rounded-full border-2 border-amber-300/40 pointer-events-none" />

              {/* Portrait Image with cutout look */}
              <div className="relative z-10 w-[88%] h-[88%] overflow-hidden rounded-full flex items-center justify-center">
                <img
                  src={PERSONAL_INFO.portraitAvatar}
                  alt="陈楠头像"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] drop-shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge 1: 🔔 技术研发 */}
              <div className="absolute -top-1 sm:top-6 right-0 sm:-right-4 z-20 flex items-center gap-2 px-5 py-3 rounded-2xl bg-white shadow-xl border border-slate-100/80 animate-bounce [animation-duration:3s]">
                <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <Bell className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <span className="font-display font-extrabold text-sm tracking-wide text-slate-800">
                  技术研发
                </span>
              </div>

              {/* Floating Badge 2: 🎨 体验设计 */}
              <div className="absolute bottom-16 -right-2 sm:-right-8 z-20 flex items-center gap-2 px-5 py-3 rounded-2xl bg-white shadow-xl border border-slate-100/80 animate-bounce [animation-duration:3.6s] [animation-delay:0.5s]">
                <div className="w-8 h-8 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500">
                  <Palette className="w-4 h-4 text-rose-500" />
                </div>
                <span className="font-display font-extrabold text-sm tracking-wide text-slate-800">
                  体验设计
                </span>
              </div>

              {/* Floating Badge 3: 💡 专注解决问题 */}
              <div className="absolute -bottom-3 left-4 z-20 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="font-semibold text-xs tracking-wide text-slate-700">
                  热爱解决问题与分享思考
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
