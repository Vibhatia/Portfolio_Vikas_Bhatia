import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Code2, Layers } from 'lucide-react';
import resumeData from '../data/resume.json';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="flex gap-3">
                  {project.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                      title={link.name}
                      target="_blank"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-400 text-[10px] font-mono uppercase tracking-wider border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 mb-6">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-sm text-slate-400 leading-relaxed flex items-start gap-2">
                    <span className="text-emerald-500 mt-1.5 shrink-0">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
