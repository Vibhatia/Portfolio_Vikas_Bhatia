import React from 'react';
import { motion } from 'motion/react';
import resumeData from '../data/resume.json';

const Skills: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-24 bg-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Technical <span className="text-emerald-400">Arsenal</span>
          </h2>
          <p className="text-slate-500">A comprehensive toolkit for building modern, scalable applications.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(resumeData.skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-sm font-medium border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
