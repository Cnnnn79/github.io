import React from 'react';
import { ArrowUpRight, Clock, TrendingUp, Sparkles, Headphones, Layers, FileText, User } from 'lucide-react';
import { TabType } from '../types';

interface PastelFeatureCardsProps {
  onSelectTab: (tab: TabType) => void;
  onOpenPodcastModal: () => void;
  onSelectProject: (projectId: string) => void;
  onSelectArticle: (articleId: string) => void;
}

export const PastelFeatureCards: React.FC<PastelFeatureCardsProps> = ({
  onSelectTab,
  onOpenPodcastModal,
  onSelectProject,
  onSelectArticle,
}) => {
  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2x2 Grid matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: CASE STUDIES (Mint/Cyan) */}
          <div
            id="card-case-studies"
            onClick={() => onSelectTab('works')}
            className="group relative overflow-hidden rounded-[36px] bg-[#d7f5f2] p-8 sm:p-10 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#c1ede9]"
          >
            {/* Top pill badge */}
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/90 text-slate-700 font-semibold text-sm shadow-xs backdrop-blur-xs">
                精选案例
              </span>
              <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-slate-600 group-hover:bg-white group-hover:scale-110 transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Overlapping visuals matching reference image (laptop + interior) */}
            <div className="absolute right-4 sm:right-8 top-10 flex items-start gap-3 pointer-events-none">
              {/* Laptop top view */}
              <div className="w-28 sm:w-36 h-36 sm:h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-white/80 rotate-[-4deg] group-hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=400&q=80"
                  alt="工作台与原型设计"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Living room / architectural render */}
              <div className="w-24 sm:w-32 h-44 sm:h-52 rounded-2xl overflow-hidden shadow-xl border-2 border-white/80 translate-y-6 rotate-[3deg] group-hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80"
                  alt="智能家居空间渲染"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="z-10 mt-28 sm:mt-32 max-w-[280px] sm:max-w-xs">
              <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#0f172a] mb-2">
                案例研究
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                探索我的代表作深度复盘与落地过程 ...{' '}
                <span className="font-semibold text-cyan-800 underline decoration-cyan-500/50 group-hover:decoration-cyan-800">
                  (查看全部)
                </span>
              </p>
            </div>
          </div>

          {/* Card 2: PM MOCKS (Warm Apricot / Peach) */}
          <div
            id="card-pm-mocks"
            onClick={() => onSelectTab('articles')}
            className="group relative overflow-hidden rounded-[36px] bg-[#fde5c8] p-8 sm:p-10 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#fbd8b0]"
          >
            {/* Top pill badge */}
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/90 text-slate-700 font-semibold text-sm shadow-xs backdrop-blur-xs">
                实战秘籍
              </span>
              <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-slate-600 group-hover:bg-white group-hover:scale-110 transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Orbiting Clock Icons */}
            <div className="my-auto py-6 flex items-center justify-center gap-3 relative">
              {/* Left small clock */}
              <div className="w-14 h-14 rounded-full bg-white/90 shadow-md flex items-center justify-center transform -translate-y-2 group-hover:rotate-12 transition-transform">
                <div className="w-7 h-7 rounded-lg bg-amber-400/90 flex items-center justify-center text-white">
                  <Clock className="w-4 h-4" />
                </div>
              </div>

              {/* Center large clock */}
              <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-xs">
                  <Clock className="w-7 h-7" />
                </div>
              </div>

              {/* Right small clock */}
              <div className="w-14 h-14 rounded-full bg-white/90 shadow-md flex items-center justify-center transform translate-y-2 group-hover:-rotate-12 transition-transform">
                <div className="w-7 h-7 rounded-lg bg-amber-400/90 flex items-center justify-center text-white">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="z-10 mt-auto">
              <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#0f172a] mb-2">
                产品实战演练
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-sm">
                学习如何运用产品思维拆解需求与高效通过面试 ...{' '}
                <span className="font-semibold text-amber-900 underline decoration-amber-600/50 group-hover:decoration-amber-900">
                  (浏览文章)
                </span>
              </p>
            </div>
          </div>

          {/* Card 3: ABOUT ME (Butter Yellow) */}
          <div
            id="card-about-me"
            onClick={() => onSelectTab('about')}
            className="group relative overflow-hidden rounded-[36px] bg-[#fef4a4] p-8 sm:p-10 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#fbe97a]"
          >
            {/* Top pill badge */}
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/90 text-slate-700 font-semibold text-sm shadow-xs backdrop-blur-xs">
                关于我
              </span>
              <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-slate-600 group-hover:bg-white group-hover:scale-110 transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Center Yellow Circle with Growth/Trend Icon */}
            <div className="my-auto py-6 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 flex items-center justify-center text-white shadow-xs">
                  <TrendingUp className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="z-10 mt-auto">
              <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#0f172a] mb-2">
                个人故事与理念
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-sm">
                始终秉持同理心洞察痛点，不断探索体验设计与工程的无限可能 ...{' '}
                <span className="font-semibold text-yellow-900 underline decoration-yellow-600/50 group-hover:decoration-yellow-900">
                  (了解更多)
                </span>
              </p>
            </div>
          </div>

          {/* Card 4: PODCAST (Pastel Lavender) */}
          <div
            id="card-podcast"
            onClick={onOpenPodcastModal}
            className="group relative overflow-hidden rounded-[36px] bg-[#e9d6fd] p-8 sm:p-10 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#dbc0fa]"
          >
            {/* Top pill badge */}
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/90 text-slate-700 font-semibold text-sm shadow-xs backdrop-blur-xs">
                精彩对谈
              </span>
              <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-slate-600 group-hover:bg-white group-hover:scale-110 transition-all">
                <Headphones className="w-5 h-5 text-purple-700" />
              </div>
            </div>

            {/* Overlapping Guest Avatars */}
            <div className="my-auto py-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {/* Avatar set 1 */}
              <div className="flex -space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="特邀嘉宾"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-3 border-[#c084fc] object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                  alt="特邀嘉宾"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-3 border-[#c084fc] object-cover shadow-md"
                />
              </div>

              {/* Avatar set 2 */}
              <div className="flex -space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                  alt="特邀嘉宾"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-3 border-[#c084fc] object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
                  alt="特邀嘉宾"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-3 border-[#c084fc] object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
                  alt="特邀嘉宾"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-3 border-[#c084fc] object-cover shadow-md"
                />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="z-10 mt-auto">
              <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#0f172a] mb-2">
                声音播客专栏
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-sm">
                探索科技人文、创作者成长与自由职业的真实声音 ...{' '}
                <span className="font-semibold text-purple-900 underline decoration-purple-600/50 group-hover:decoration-purple-900">
                  (即刻收听)
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
