import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ArrowUpRight, ExternalLink, Sparkles, Layers, Target, CheckCircle2 } from 'lucide-react';
import { WorkTogetherBanner } from '../components/WorkTogetherBanner';

interface WorksViewProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export const WorksView: React.FC<WorksViewProps> = ({ onSelectProject, onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: '全部作品' },
    { id: 'Case Studies', label: '案例研究' },
    { id: 'UI/UX Design', label: 'UI/UX 设计' },
    { id: 'Web Apps', label: 'Web 全栈应用' },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const colorStyles: Record<string, { bg: string; border: string; badgeBg: string; text: string }> = {
    mint: {
      bg: 'bg-[#d7f5f2]',
      border: 'border-[#c0ede9]',
      badgeBg: 'bg-cyan-900/10 text-cyan-900',
      text: 'text-cyan-950',
    },
    peach: {
      bg: 'bg-[#fde5c8]',
      border: 'border-[#fbd6ad]',
      badgeBg: 'bg-amber-900/10 text-amber-900',
      text: 'text-amber-950',
    },
    yellow: {
      bg: 'bg-[#fef4a4]',
      border: 'border-[#fae878]',
      badgeBg: 'bg-yellow-900/10 text-yellow-900',
      text: 'text-yellow-950',
    },
    purple: {
      bg: 'bg-[#e9d6fd]',
      border: 'border-[#dbc0fa]',
      badgeBg: 'bg-purple-900/10 text-purple-900',
      text: 'text-purple-950',
    },
  };

  return (
    <div className="py-8 sm:py-14 space-y-12">
      
      {/* Header Banner matching Mint CaseStudies styling from Image 1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] bg-gradient-to-r from-[#d9f6f3] via-[#e2faf8] to-[#eafcfb] border border-cyan-200/80 p-8 sm:p-14 shadow-xs">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-cyan-900 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>精选案例与项目实践</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-black text-[#132c33] tracking-tight mb-4">
              我的作品
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              从痛点洞察、交互原型到工程落地交付，在这里探索我倾心打磨的代表性作品与实践复盘。
            </p>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const style = colorStyles[project.colorScheme] || colorStyles.mint;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group rounded-[36px] ${style.bg} border ${style.border} p-7 sm:p-9 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-white/95 text-slate-800 text-xs font-bold shadow-2xs">
                      {project.badge} • {project.year}
                    </span>

                    <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-slate-700 group-hover:bg-white group-hover:scale-110 transition-all shadow-2xs">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Visual Preview */}
                  <div className="w-full h-56 sm:h-64 rounded-3xl overflow-hidden shadow-sm mb-6 bg-white/50 border-2 border-white/80">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className={`font-display text-2xl sm:text-3xl font-black ${style.text} mb-2`}>
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Tags and CTA */}
                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-xl bg-white/70 text-slate-700 text-xs font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-slate-800 underline decoration-slate-400 group-hover:decoration-slate-900">
                    深入案例分析 →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Collaboration CTA */}
      <WorkTogetherBanner onOpenContact={onOpenContact} />

    </div>
  );
};
