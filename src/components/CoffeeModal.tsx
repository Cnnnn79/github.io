import React, { useState } from 'react';
import { X, Coffee, Heart, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CoffeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CoffeeModal: React.FC<CoffeeModalProps> = ({ isOpen, onClose }) => {
  const [cups, setCups] = useState(1);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#ec4899', '#3b82f6', '#10b981'],
    });
    setTimeout(() => {
      // Keep state for a moment then reset on next open
    }, 1500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCups(1);
    setName('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-[36px] shadow-2xl border border-amber-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center mb-3 shadow-inner">
            <Coffee className="w-8 h-8 text-white fill-white/20" />
          </div>
          <h2 className="font-display font-extrabold text-2xl">请陈楠喝杯咖啡</h2>
          <p className="text-xs text-amber-100 mt-1">如果你喜欢我的文章或开源作品，欢迎请我喝杯香浓咖啡 ☕</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-800">
                非常感谢你的支持与善意！
              </h3>
              <p className="text-slate-600 text-sm">
                你为我续上了 {cups} 杯咖啡，已收到你留下的温暖心意。祝你今天也拥有好心情！✨
              </p>
              <button
                onClick={handleReset}
                className="w-full py-3.5 rounded-2xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-colors shadow-sm"
              >
                关闭
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Cup selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  选择咖啡杯数
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 3, 5].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setCups(num)}
                      className={`py-3 rounded-2xl border-2 font-extrabold text-sm transition-all flex flex-col items-center gap-1 ${
                        cups === num
                          ? 'border-amber-500 bg-amber-50 text-amber-900 shadow-sm scale-102'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-xl">☕</span>
                      <span>¥ {num * 15}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  你的称呼 (可选)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="例如：一位路过的设计师朋友"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-amber-400 focus:outline-none text-sm"
                />
              </div>

              {/* Message input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  写几句留言 (可选)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="说点鼓励或交流的话吧..."
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-amber-400 focus:outline-none text-sm resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Coffee className="w-5 h-5 fill-white/20" />
                <span>赠送 {cups} 杯咖啡 (¥{cups * 15})</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
