import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown, Sparkles } from 'lucide-react';
import resumeData from '../data/resume.json';

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 lg:px-24 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Professional <span className="text-emerald-400">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group rounded-2xl border transition-all duration-500 overflow-hidden ${
                expandedIndex === index
                  ? 'bg-white/5 border-emerald-500/30'
                  : 'bg-white/[0.02] border-white/5 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${
                    expandedIndex === index ? 'bg-emerald-500 text-slate-950' : 'bg-white/5 text-emerald-400'
                  }`}>
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-slate-400 font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {exp.dates}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180 text-emerald-400' : ''
                  }`} />
                </div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5">
                      {exp.metrics && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.metrics.map((metric, mIdx) => (
                            <span key={mIdx} className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 flex items-center gap-1.5">
                              <Sparkles className="w-3 h-3" />
                              {metric}
                            </span>
                          ))}
                        </div>
                      )}

                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-slate-400 leading-relaxed">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {exp.stack && (
                        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-3">
                          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest w-full mb-1">Tech Stack</span>
                          {exp.stack.map((tech, tIdx) => (
                            <span key={tIdx} className="px-3 py-1 rounded-lg bg-white/5 text-slate-300 text-xs font-medium border border-white/10">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
