import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Check, Sparkles } from 'lucide-react';

export const NewsletterSubscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#f59e0b', '#8b5cf6', '#06b6d4', '#ec4899'],
      });
    }, 600);
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Soft Warm Glow Container matching Image 2 top */}
        <div className="relative rounded-[40px] bg-gradient-to-b from-[#fffcf2] via-[#fff8e7] to-[#fff5db] border border-amber-200/70 p-8 sm:p-12 text-center shadow-xs">
          
          {/* Cute 3D Mailbox Icon inside circle matching Image 2 */}
          <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-md flex items-center justify-center -mt-4 mb-6 border border-amber-100">
            <div className="relative">
              <span className="text-4xl sm:text-5xl">📬</span>
            </div>
          </div>

          {/* Heading from Image 2 */}
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#1a1c32] tracking-tight mb-3">
            订阅获取最新思考与周刊推送
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
            订阅我的个人通讯，每周为你呈递关于体验设计、前沿技术、思维模型与个人成长的深度复盘。
          </p>

          {/* Subscription Form */}
          {subscribed ? (
            <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold animate-in zoom-in-95 duration-200">
              <Check className="w-5 h-5 text-emerald-600" />
              <span>太棒了！已成功订阅，期待与你在周刊相见！</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                id="newsletter-email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="请输入你的常用邮箱地址..."
                className="flex-1 px-5 py-3.5 rounded-2xl bg-white border-2 border-slate-700 text-slate-900 placeholder:text-slate-400 font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-2xs"
              />
              <button
                id="newsletter-subscribe-btn"
                type="submit"
                disabled={loading}
                className="px-8 py-3.5 rounded-2xl bg-[#f4be38] hover:bg-[#e5ad23] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-95 disabled:opacity-70 cursor-pointer whitespace-nowrap"
              >
                {loading ? '提交中...' : '立即订阅'}
              </button>
            </form>
          )}

          <div className="mt-4 text-xs text-slate-400 flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>无垃圾邮件，随时可一键取消订阅</span>
          </div>

        </div>

      </div>
    </section>
  );
};
