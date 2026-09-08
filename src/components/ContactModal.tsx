import React, { useState } from 'react';
import { X, Mail, MessageSquare, Send, Check, Copy, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSent(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const resetForm = () => {
    setSent(false);
    setFormData({ name: '', email: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-[36px] shadow-2xl border border-slate-100 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-slate-900 px-6 py-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>随时欢迎沟通交流</span>
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            一起创造美观且有价值的事物！
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            探讨项目合作、设计咨询、或单纯喝杯咖啡交个朋友，我都非常乐意。
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick info badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              onClick={copyEmail}
              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer hover:bg-amber-50 hover:border-amber-200 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-slate-400 font-medium">电子邮箱</p>
                  <p className="text-xs font-bold text-slate-700">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              <span className="text-xs text-amber-600 font-semibold group-hover:scale-105">
                {copiedEmail ? '已复制' : '复制'}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium">常驻地点</p>
                <p className="text-xs font-bold text-slate-700">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div className="text-center py-8 space-y-3 bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-emerald-900">
                留言已成功发送！
              </h3>
              <p className="text-slate-600 text-sm max-w-sm mx-auto">
                谢谢你的来信，我会在 24 小时内回复到你的邮箱 {formData.email}。
              </p>
              <button
                onClick={resetForm}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm cursor-pointer"
              >
                好的
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  你的姓名 / 昵称
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="例如：陈晓"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-amber-400 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  联系邮箱
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-amber-400 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  项目构想或留言
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="简单描述一下你的合作需求、想法或提问..."
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-amber-400 focus:outline-none text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>发送留言</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
