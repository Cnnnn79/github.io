import React, { useState, useMemo } from 'react';
import { Article } from '../types';
import { ARTICLES_DATA } from '../data/portfolioData';
import { Search, Clock, Calendar, Eye, Heart, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { NewsletterSubscribe } from '../components/NewsletterSubscribe';

interface ArticlesViewProps {
  onSelectArticle: (article: Article) => void;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({ onSelectArticle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'All', label: '全部文章', en: 'All' },
    { id: 'Design', label: '体验设计', en: 'Design' },
    { id: 'Product', label: '产品实战', en: 'Product' },
    { id: 'Tech', label: '前端技术', en: 'Tech' },
    { id: 'Life', label: '生活随笔', en: 'Life' },
  ];

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchCategory =
        activeCategory === 'All' || article.category === activeCategory;
      const matchSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-8 sm:py-14 space-y-12">
      
      {/* Header Banner matching Image 1 BLOGS styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] bg-gradient-to-r from-[#faeffe] via-[#f4dbfd] to-[#f8edff] border border-purple-200/80 p-8 sm:p-14 shadow-xs">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-purple-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>深度思考与实战复盘</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-black text-[#191a32] tracking-tight mb-4">
              我的文章
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              探索源源不断的灵感与方法论。这里沉淀了我关于产品思维、系统化真题演练、体验心理学与独立研发的实践心得。
            </p>
          </div>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
          
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-2xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#8a2be2] text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索文章或关键词..."
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm placeholder:text-slate-400"
            />
          </div>

        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100">
            <p className="text-slate-500 font-medium">未找到符合条件的内容，换个搜索词试试吧~</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group relative bg-white rounded-[32px] border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col cursor-pointer"
              >
                {/* Cover Image */}
                <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold text-slate-800 shadow-xs">
                      {article.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-700 group-hover:bg-[#8a2be2] group-hover:text-white transition-colors shadow-xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug mb-3 line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {article.summary}
                    </p>
                  </div>

                  {/* Bottom tags & stats */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {article.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-slate-500 font-medium">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        {article.views}
                      </span>
                      <span className="flex items-center gap-1 text-rose-500 font-medium">
                        <Heart className="w-3.5 h-3.5 fill-rose-100" />
                        {article.likes}
                      </span>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Newsletter */}
      <NewsletterSubscribe />

    </div>
  );
};
