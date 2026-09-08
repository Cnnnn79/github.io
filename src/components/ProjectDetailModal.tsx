import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Layers, Lightbulb, Target } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-[36px] shadow-2xl border border-slate-100 overflow-hidden my-6">
        
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 font-bold text-xs">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              发布于 {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto space-y-8">
          
          {/* Main Visual Gallery */}
          <div className="space-y-3">
            <div className="w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
              <img
                src={project.galleryImages[activeImageIndex] || project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail selector if multiple images */}
            {project.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto py-1">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-cyan-500 scale-105 shadow-xs'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Subtitle */}
          <div>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0f172a] mb-2">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Actions & Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-sm transition-all"
              >
                <span>在线体验 Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-slate-700 text-slate-800 font-bold text-sm hover:bg-slate-50 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>查看源码</span>
              </a>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Overview / Description */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
            <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-600" />
              <span>项目背景与概述</span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-100">
              <h3 className="text-base font-bold text-rose-900 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-rose-600" />
                <span>核心痛点</span>
              </h3>
              <p className="text-rose-800/90 text-sm sm:text-base leading-relaxed">
                {project.problem || '用户在既有流程中面临交互冗长、信息层级不清的体验断层。'}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-100">
              <h3 className="text-base font-bold text-emerald-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-emerald-600" />
                <span>设计方案与解法</span>
              </h3>
              <p className="text-emerald-800/90 text-sm sm:text-base leading-relaxed">
                {project.solution || '重构视觉中枢与操作捷径，运用微交互消除等待焦虑，提升达成率。'}
              </p>
            </div>
          </div>

          {/* Key Outcomes / Metrics */}
          {project.outcomes && (
            <div className="p-6 rounded-3xl bg-[#fefce8] border border-amber-200/80">
              <h3 className="text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>关键成效与里程碑</span>
              </h3>
              <ul className="space-y-2">
                {project.outcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
