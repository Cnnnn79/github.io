import React from 'react';
import { Send, Sparkles, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface WorkTogetherBannerProps {
  onOpenContact: () => void;
}

export const WorkTogetherBanner: React.FC<WorkTogetherBannerProps> = ({
  onOpenContact,
}) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner container matching Image 2 */}
        <div className="relative overflow-hidden rounded-[40px] bg-[#f1f5f9] border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center">
          
          {/* Left illustration/character pointing upward */}
          <div className="w-full md:w-5/12 relative flex items-end justify-center pt-8 md:pt-12 px-6 overflow-hidden">
            <div className="relative w-64 sm:w-72 h-72 sm:h-80 flex items-end justify-center">
              {/* Soft glow behind character */}
              <div className="absolute inset-0 bg-amber-200/40 rounded-full blur-2xl -z-10" />
              
              {/* Portrait image with playful styling */}
              <img
                src={PERSONAL_INFO.portraitAvatar}
                alt="陈楠"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center rounded-t-full filter contrast-105 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              
              {/* Cute hand point badge */}
              <div className="absolute top-4 right-4 bg-white/95 px-3.5 py-1.5 rounded-full shadow-md text-xs font-bold text-slate-800 border border-slate-100 flex items-center gap-1.5 animate-bounce">
                <span>☝️</span>
                <span>聊聊合作吧！</span>
              </div>
            </div>
          </div>

          {/* Right text & CTA matching Image 2 */}
          <div className="w-full md:w-7/12 p-8 sm:p-12 lg:p-14 flex flex-col items-start z-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-black text-[#1e293b] leading-[1.25] tracking-tight mb-8">
              让我们携手合作，把所有数字体验变得既超级可爱又超级好用。
            </h2>

            <button
              id="work-together-contact-btn"
              onClick={onOpenContact}
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-[#1e293b] bg-white hover:bg-slate-900 text-[#1e293b] hover:text-white font-bold text-base sm:text-lg shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-amber-500" />
              <span>与我联系</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
