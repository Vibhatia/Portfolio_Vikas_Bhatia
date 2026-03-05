import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

const Education: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Education
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                    <p className="text-slate-400">{edu.degree}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
                  <Calendar className="w-4 h-4" />
                  {edu.dates}
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 w-fit">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-bold">{edu.gpa}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Additional Info
          </h3>
          <div className="flex flex-wrap gap-4">
            {resumeData.extra.map((item, i) => (
              <span key={i} className="text-slate-400 text-sm bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
