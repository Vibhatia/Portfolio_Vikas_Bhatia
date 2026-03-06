import React from 'react';
import { motion } from 'motion/react';
import { Download, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import resumeData from '../data/resume.json';
import LeetCodeIcon from './LeetCodeIcon';

const Hero: React.FC = () => {
  const { basics } = resumeData;

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 pt-20 overflow-hidden">
      <div className="max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-6 border border-emerald-500/20">
            Available for Opportunities
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none mb-6">
            {basics.name.split(' ')[0]} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {basics.name.split(' ')[1]}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium mb-8 max-w-2xl leading-relaxed">
            {basics.title}
          </p>
          <p className="text-lg text-slate-500 mb-10 max-w-xl leading-relaxed">
            {basics.summary.split('.')[0]}. {basics.summary.split('.')[1]}.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={scrollToExperience}
              className="group relative px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              View Experience
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=1DjM5Ab2hOZcBv6_BRwJjJqKZ8LhnOVd-"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          <div className="flex gap-6">
            {basics.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-emerald-400 transition-colors"
                title={link.name}
              >
                {link.name === 'LinkedIn' ? <Linkedin /> : link.name === 'LeetCode' ? <LeetCodeIcon /> : <Github />}
              </a>
            ))}
            <a
              href={`mailto:${basics.email}`}
              className="text-slate-500 hover:text-emerald-400 transition-colors"
              title="Email"
            >
              <Mail />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full -z-10" />
    </section>
  );
};

export default Hero;
