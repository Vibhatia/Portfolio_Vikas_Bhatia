import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Star, TrendingUp } from 'lucide-react';
import resumeData from '../data/resume.json';

const Achievements: React.FC = () => {
  const icons = [Trophy, Award, Star, TrendingUp];

  return (
    <section className="py-24 px-6 lg:px-24 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Key <span className="text-emerald-400">Achievements</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Milestones and recognition earned through dedication and technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.awards.map((award, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24 text-emerald-500" />
                </div>
                
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-500">
                  <Icon className="w-6 h-6 text-emerald-400 group-hover:text-slate-950 transition-colors duration-500" />
                </div>

                <p className="text-lg text-slate-300 font-medium leading-relaxed">
                  {award}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-emerald-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Verified Achievement
                  <div className="w-1 h-1 rounded-full bg-emerald-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
