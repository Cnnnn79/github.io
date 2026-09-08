import React, { useState } from 'react';
import { X, Play, Pause, Headphones, Radio, Volume2, Sparkles } from 'lucide-react';
import { PODCAST_EPISODES } from '../data/portfolioData';

interface PodcastModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PodcastModal: React.FC<PodcastModalProps> = ({ isOpen, onClose }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-[36px] shadow-2xl border border-purple-100 overflow-hidden my-6">
        
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#faf5ff] px-6 py-5 border-b border-purple-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-600 flex items-center justify-center text-white shadow-xs">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-xl text-purple-950">
                陈楠与朋友们 • 声音对谈
              </h2>
              <p className="text-xs text-purple-700">探索科技、体验设计与独立创作者心路</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white hover:bg-purple-100 flex items-center justify-center text-slate-700 transition-colors shadow-2xs cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
          {PODCAST_EPISODES.map((ep) => {
            const isPlaying = playingId === ep.id;
            return (
              <div
                key={ep.id}
                className={`p-5 rounded-3xl border transition-all ${
                  isPlaying
                    ? 'bg-purple-50 border-purple-300 shadow-md'
                    : 'bg-white border-slate-200/80 hover:border-purple-200 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold mb-2">
                      第 {ep.episodeNumber} 期 • {ep.duration}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                      {ep.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => togglePlay(ep.id)}
                    className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-md transition-all cursor-pointer ${
                      isPlaying
                        ? 'bg-purple-700 text-white animate-pulse'
                        : 'bg-amber-400 hover:bg-amber-500 text-slate-900'
                    }`}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {ep.avatars.map((av, i) => (
                        <img
                          key={i}
                          src={av}
                          alt="嘉宾头像"
                          className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                        />
                      ))}
                    </div>
                    <span>{ep.guest}</span>
                  </div>

                  <span className="text-slate-400">{ep.date}</span>
                </div>

                {isPlaying && (
                  <div className="mt-4 pt-3 border-t border-purple-200 flex items-center gap-3">
                    <Volume2 className="w-4 h-4 text-purple-600 animate-bounce" />
                    <div className="flex-1 h-2 bg-purple-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full w-1/3 animate-pulse" />
                    </div>
                    <span className="text-xs font-semibold text-purple-700">正在播放音频片段...</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
