import React, { useState } from 'react';
import { Article } from '../types';
import { X, Calendar, Clock, Eye, Heart, Share2, Bookmark, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
}) => {
  const [likes, setLikes] = useState<number>(article?.likes || 0);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#ec4899', '#f59e0b', '#8b5cf6'],
      });
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-[36px] shadow-2xl border border-slate-100 overflow-hidden my-6">
        
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs">
              {article.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
          {/* Article Cover Image */}
          <div className="w-full h-64 sm:h-80 rounded-3xl overflow-hidden mb-8 shadow-sm">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Metadata */}
          <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#111827] leading-tight mb-4">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pb-6 mb-8 border-b border-slate-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-slate-400" />
              {article.views} 次浏览
            </span>
            <div className="flex items-center gap-1.5 ml-auto">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Summary Quote Box */}
          <div className="p-5 rounded-2xl bg-[#fffbeb] border-l-4 border-amber-400 text-slate-800 text-sm sm:text-base leading-relaxed mb-8">
            <span className="font-bold text-amber-900 block mb-1">💡 核心概要：</span>
            {article.summary}
          </div>

          {/* Article Content */}
          <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-6">
            {article.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-xl sm:text-2xl font-black text-slate-900 pt-4 pb-1">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg sm:text-xl font-bold text-slate-800 pt-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('* ') || paragraph.startsWith('- ')) {
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2">
                    {paragraph.split('\n').map((li, lIdx) => (
                      <li key={lIdx}>{li.replace(/^[\*\-]\s+/, '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.match(/^\d\./)) {
                return (
                  <ol key={idx} className="list-decimal pl-6 space-y-2">
                    {paragraph.split('\n').map((li, lIdx) => (
                      <li key={lIdx}>{li.replace(/^\d\.\s+/, '')}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Bottom Interactive Bar */}
          <div className="mt-12 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-sm transition-all ${
                  hasLiked
                    ? 'bg-rose-50 text-rose-600 border border-rose-200 shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                <span>{likes} 喜欢</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? '已复制链接' : '分享'}</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-2xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
            >
              完成阅读
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
