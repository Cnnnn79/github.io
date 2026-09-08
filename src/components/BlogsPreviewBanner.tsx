import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MASONRY_GALLERY } from '../data/portfolioData';

interface BlogsPreviewBannerProps {
  onGoToArticles: () => void;
}

export const BlogsPreviewBanner: React.FC<BlogsPreviewBannerProps> = ({
  onGoToArticles,
}) => {
  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width gradient card matching bottom of Image 1 */}
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#fbf1ff] via-[#f5defd] to-[#faf0ff] border border-purple-200/60 p-8 sm:p-12 lg:p-16 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-5 flex flex-col items-start z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xs text-purple-800 font-semibold text-xs tracking-wider uppercase mb-6 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>精选思考与灵感</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#191a32] tracking-tight mb-4">
                我的文章
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 max-w-md">
                探索源源不断的创作灵感与系统化复盘。涵盖体验设计、全栈工程落地、思维模型与数字游牧笔记。
              </p>

              <button
                id="blogs-view-more-btn"
                onClick={onGoToArticles}
                className="group flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-[#8a2be2] hover:bg-[#7822c9] text-white font-bold text-base shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>浏览全部文章</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right masonry photo grid matching Image 1 */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 max-h-[380px] overflow-hidden rounded-3xl p-1">
                
                {/* Column 1 */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="h-32 sm:h-44 rounded-2xl overflow-hidden shadow-md group">
                    <img
                      src={MASONRY_GALLERY[0].url}
                      alt={MASONRY_GALLERY[0].title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-40 sm:h-52 rounded-2xl overflow-hidden shadow-md group">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                      alt="Smile"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-3 sm:space-y-4 -translate-y-4">
                  <div className="h-28 sm:h-36 rounded-2xl overflow-hidden shadow-md group">
                    <img
                      src={MASONRY_GALLERY[1].url}
                      alt={MASONRY_GALLERY[1].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-44 sm:h-56 rounded-2xl overflow-hidden shadow-md group">
                    <img
                      src={MASONRY_GALLERY[3].url}
                      alt={MASONRY_GALLERY[3].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Column 3 */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="h-48 sm:h-60 rounded-2xl overflow-hidden shadow-md group">
                    <img
                      src={MASONRY_GALLERY[2].url}
                      alt={MASONRY_GALLERY[2].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-28 sm:h-36 rounded-2xl overflow-hidden shadow-md group">
                    <img
                      src={MASONRY_GALLERY[4].url}
                      alt={MASONRY_GALLERY[4].title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
