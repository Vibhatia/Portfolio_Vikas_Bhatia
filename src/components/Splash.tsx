import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="text-6xl font-black text-white tracking-tighter flex items-center">
          <span className="text-emerald-500">V</span>
          <span className="border-l-2 border-emerald-500/50 pl-2 ml-2">B</span>
        </div>
      </motion.div>

      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
        <motion.div
          className="absolute inset-y-0 left-0 bg-emerald-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-xs font-mono text-slate-500 uppercase tracking-widest"
      >
        Initializing Systems... {progress}%
      </motion.p>
    </motion.div>
  );
};

export default Splash;
