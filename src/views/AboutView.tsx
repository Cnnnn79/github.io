import React from 'react';
import { PERSONAL_INFO, TIMELINE_DATA } from '../data/portfolioData';
import { Sparkles, Heart, Code2, Compass, Briefcase, Award, Coffee, MessageCircle, Laptop, Camera, BookOpen } from 'lucide-react';

interface AboutViewProps {
  onOpenContact: () => void;
  onOpenCoffee: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenContact, onOpenCoffee }) => {
  const coreValues = [
    {
      title: '同理心先行',
      desc: '深入理解用户没有说出口的困惑与真实场景，不为形式而形式，只做真正解决问题的设计。',
      bgColor: 'bg-[#d7f5f2]',
      borderColor: 'border-[#bfe9e5]',
      icon: '🌱',
    },
    {
      title: '既要好用，更要赏心悦目',
      desc: '工具不应当是冷冰冰的。注入柔和的色彩、治愈的情绪动效与人性化细节，让日常使用充满愉悦。',
      bgColor: 'bg-[#fde5c8]',
      borderColor: 'border-[#fbd8b0]',
      icon: '✨',
    },
    {
      title: '设计与代码端到端闭环',
      desc: '不仅在 Figma 里构想极致交互，更能用现代全栈工程将构想像素级落地，消除设计与研发的鸿沟。',
      bgColor: 'bg-[#fef4a4]',
      borderColor: 'border-[#fbe97a]',
      icon: '⚡',
    },
    {
      title: '善于叙事与表达',
      desc: '用引人入胜的视觉层级与叙事节奏，向团队和用户讲述产品背后的思考与愿景。',
      bgColor: 'bg-[#e9d6fd]',
      borderColor: 'border-[#dbc0fa]',
      icon: '🎙️',
    },
  ];

  const skills = [
    { category: '体验设计', items: ['UI/UX 设计', '设计系统 (Design System)', '交互原型', '用户研究', 'Figma', '品牌视觉'] },
    { category: '技术工程', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Motion 动效', 'Node.js', '响应式布局'] },
    { category: '产品思维', items: ['产品路线图', '产品真题拆解', '指标分析 (AARRR)', '用户旅程地图', '竞品透视'] },
  ];

  const favorites = [
    { label: '日常装备', value: 'MacBook Pro 16" + 4K Studio Display + Keychron' },
    { label: '设计主力', value: 'Figma, CleanShot X, Motion 动效库' },
    { label: '咖啡豆偏好', value: '埃塞俄比亚水洗耶加雪菲 (花香与柑橘酸调)' },
    { label: '近期阅读', value: '《设计心理学》、《一人公司》、《重来 (Rework)》' },
  ];

  return (
    <div className="py-8 sm:py-14 space-y-16">
      
      {/* Top Bio Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] bg-gradient-to-br from-[#fffdfa] via-[#fffbf4] to-[#fef7eb] border border-amber-200/60 p-8 sm:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Bio Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#fef4a4] text-[#854d0e] font-bold text-sm">
                <span>关于我</span>
                <span>•</span>
                <span>个人档案</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-black text-[#191c34] leading-tight">
                你好，我是 {PERSONAL_INFO.name} 👋
              </h1>

              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                一名热衷于创造美好数字体验的独立产品设计师与全栈开发者。我着迷于研究人们如何与屏幕互动，并通过优雅的排版、舒适的马卡龙色彩与流畅的动效，让复杂的技术变得直观、亲切。
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                在过去几年里，我曾任职于知名科技企业担任资深体验设计师，也主导了数款独立工具软件从 0 到 1 的研发上线。闲暇时，我主持着一档声音对谈专栏，并持续在博客中分享产品真题拆解、设计方法论与持续学习心得。
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-amber-400" />
                  <span>与我联系</span>
                </button>
                <button
                  onClick={onOpenCoffee}
                  className="px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Coffee className="w-4 h-4" />
                  <span>请我喝杯咖啡</span>
                </button>
              </div>
            </div>

            {/* Right Graphic / Photo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-square rounded-[36px] bg-[#f6be3c] p-4 flex items-end justify-center shadow-lg">
                <img
                  src={PERSONAL_INFO.portraitAvatar}
                  alt="陈楠头像"
                  referrerPolicy="no-referrer"
                  className="w-[90%] h-[90%] object-cover object-center rounded-2xl filter contrast-105"
                />
                <div className="absolute -bottom-4 right-4 bg-white px-5 py-2.5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>专注解决问题与分享思考</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Core Design & Product Beliefs (Pastel cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-wider uppercase mb-3">
            <span>核心价值观</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#191c34]">
            我的设计与研发理念
          </h2>
          <p className="text-slate-600 text-base mt-2">
            每一行代码与每一个像素，都应当为用户带来温暖与价值。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className={`rounded-[32px] ${val.bgColor} p-7 border ${val.borderColor} shadow-xs flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all`}
            >
              <div className="text-3xl mb-4">{val.icon}</div>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] bg-white border border-slate-200/80 p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#191c34]">
              技能雷达与工具栈
            </h2>
            <p className="text-sm text-slate-500 mt-1">跨界融合，打通从创意概念到交付上线的完整链条</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((s, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <h3 className="font-display font-bold text-lg text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  {s.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/70 text-slate-800 text-xs font-semibold shadow-2xs hover:border-amber-300 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience & Career Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#191c34]">
            工作经历与创作旅程
          </h2>
          <p className="text-sm text-slate-500 mt-1">记录一路走来的沉淀与关键里程碑</p>
        </div>

        <div className="space-y-6">
          {TIMELINE_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="sm:w-44 flex-shrink-0">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-1">
                  {item.period}
                </span>
                <p className="text-xs text-slate-400 font-medium">{item.company}</p>
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="font-display font-bold text-lg text-slate-900">
                  {item.role}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-1 text-xs font-semibold text-cyan-800 bg-cyan-50/70 px-3 py-1.5 rounded-xl inline-block border border-cyan-100">
                  ✨ 核心亮点：{item.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creative Gear & Fun Facts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#f8fafc] border border-slate-200/80 p-6 sm:p-8">
          <h3 className="font-display font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
            <Laptop className="w-5 h-5 text-amber-500" />
            <span>日常创作好物与随身清单</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {favorites.map((fav, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase">{fav.label}</p>
                <p className="text-sm font-semibold text-slate-800 mt-1">{fav.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
