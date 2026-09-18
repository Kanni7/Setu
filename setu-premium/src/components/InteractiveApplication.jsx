import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Flame, Check, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractiveApplication() {
  const [stage, setStage] = useState('ideation');
  const [track, setTrack] = useState('spark');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    note: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const stages = [
    { id: 'ideation', label: 'Ideation & Concept', desc: 'Validating problem space' },
    { id: 'prototype', label: 'Prototype / Alpha', desc: 'Building first MVP version' },
    { id: 'traction', label: 'Early Users / Revenue', desc: 'Looking to scale unit metrics' },
  ];

  const tracks = [
    { id: 'spark', label: 'The Spark (3-Day Sprint)', tag: 'Mumbai / Delhi' },
    { id: 'transformation', label: 'The Transformation (30-Day Residency)', tag: 'Mumbai Exclusive' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory pastel confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B84A3A', '#E07A5F', '#F2C6A0', '#7A332B', '#C9814C']
      });
    }, 700);
  };

  return (
    <section id="apply" className="py-28 px-6 bg-canvas-100 relative overflow-hidden border-t border-ink-900/[0.06]">
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Motivational Banner */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100 border border-blush-200 text-blush-800 text-xs font-mono font-bold mb-4 shadow-xs">
            <Flame className="w-3.5 h-3.5 text-blush-600" />
            <span>COHORT ADMISSIONS PORTAL</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-ink-900 tracking-tight mb-4 leading-tight">
            HAI KEEDA? HAI HIMMAT? <br />
            <span className="text-violet-600 font-serif italic font-normal">
              TO KAR STARTUP!
            </span>
          </h2>

          <p className="text-sm sm:text-base font-sans text-ink-600 max-w-xl mx-auto">
            To know more about our programs and secure an invitation to our confidential candidate interview rounds, drop your details below.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl bg-white border border-ink-900/[0.08] p-8 sm:p-12 shadow-pastel-lg relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* 1. Stage Selector */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-500 mb-3">
                    1. Select Your Current Founder Stage
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {stages.map((s) => (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => setStage(s.id)}
                        className={`p-4 rounded-2xl text-left border transition-all ${
                          stage === s.id
                            ? 'bg-violet-50 border-violet-500 text-ink-900 shadow-sm'
                            : 'bg-canvas-100 border-ink-900/[0.06] text-ink-600 hover:border-ink-900/20'
                        }`}
                      >
                        <div className="font-display font-bold text-sm text-ink-900">{s.label}</div>
                        <div className="text-[11px] font-mono text-ink-500 mt-1">{s.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Program Track */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-500 mb-3">
                    2. Select Program Track Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tracks.map((t) => (
                      <button
                        type="button"
                        key={t.id}
                        onClick={() => setTrack(t.id)}
                        className={`p-4 rounded-2xl text-left border transition-all ${
                          track === t.id
                            ? 'bg-sage-50 border-sage-500 text-ink-900 shadow-sm'
                            : 'bg-canvas-100 border-ink-900/[0.06] text-ink-600 hover:border-ink-900/20'
                        }`}
                      >
                        <div className="font-display font-bold text-sm text-ink-900">{t.label}</div>
                        <div className="text-[11px] font-mono text-sage-700 font-semibold mt-1">{t.tag}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Personal & Contact Details */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-500 mb-3">
                    3. Contact & Location Information
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-canvas-100 border border-ink-900/[0.08] text-ink-900 placeholder-ink-400 focus:outline-none focus:border-violet-500 text-sm font-sans transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-canvas-100 border border-ink-900/[0.08] text-ink-900 placeholder-ink-400 focus:outline-none focus:border-violet-500 text-sm font-sans transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Contact Number (WhatsApp) *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-canvas-100 border border-ink-900/[0.08] text-ink-900 placeholder-ink-400 focus:outline-none focus:border-violet-500 text-sm font-sans transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="City (e.g. Mumbai, Delhi, Bengaluru) *"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-canvas-100 border border-ink-900/[0.08] text-ink-900 placeholder-ink-400 focus:outline-none focus:border-violet-500 text-sm font-sans transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. What are you building */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-ink-500">
                      4. What are you building or looking to solve?
                    </label>
                    <span className="text-[11px] font-mono text-sage-700 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" />
                      100% Confidential
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="E.g. Building an automated AI compliance and billing tool for Indian hospitals..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-canvas-100 border border-ink-900/[0.08] text-ink-900 placeholder-ink-400 focus:outline-none focus:border-violet-500 text-sm font-sans transition-colors resize-none"
                  />
                  {formData.note.length > 20 && (
                    <div className="mt-2 p-2.5 rounded-xl bg-sage-50 border border-sage-200 flex items-center justify-between text-xs font-mono text-sage-800">
                      <span>✓ Problem Statement Clarity: High</span>
                      <span className="font-bold">Assigned Track: 100-Day Sprint</span>
                    </div>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-violet-600 hover:bg-violet-700 shadow-pastel-glow-violet transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  {loading ? (
                    <span>Processing Application...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-violet-200" />
                      <span>Submit Inquiry & Application</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] font-mono text-ink-400">
                  Zero equity dilution • 100% confidential • Reviewed by Setu Admissions Committee
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-sage-100 border border-sage-300 text-sage-700 mx-auto flex items-center justify-center mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-extrabold text-ink-900 mb-2">
                  Application Received!
                </h3>
                <p className="text-sm font-sans text-ink-600 max-w-md mx-auto mb-8">
                  Thank you, <strong className="text-ink-900">{formData.name}</strong>. Our admissions committee will review your background and reach out via WhatsApp/Email within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl font-mono text-xs font-semibold text-ink-600 hover:text-ink-900 bg-canvas-100 border border-ink-900/10"
                >
                  Submit Another Profile
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
