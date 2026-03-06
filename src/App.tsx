import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import Splash from './components/Splash';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import resumeData from './data/resume.json';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Your Message sent successfully! Check your email for confirmation in the Inbox or Spam folder.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-400">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Splash key="splash" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AnimatedBackground />
            <Navbar />
            
            {/* Scroll Progress Bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 z-[60] origin-left"
              style={{ scaleX }}
            />

            <Hero />
            
            <section id="experience">
              <Experience />
            </section>

            <Achievements />

            <section id="projects">
              <Projects />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <Education />

            {/* Contact Section */}
            <section id="contact" className="py-24 px-6 lg:px-24 bg-slate-950/50">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                      Let's <span className="text-emerald-400">Connect</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                      I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 group">
                        <div className="p-3 rounded-xl bg-white/5 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                          <Mail className="w-5 h-5" />
                        </div>
                        <a href={`mailto:${resumeData.basics.email}`} className="text-slate-300 hover:text-emerald-400 transition-colors">
                          {resumeData.basics.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-4 group">
                        <div className="p-3 rounded-xl bg-white/5 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                          <Phone className="w-5 h-5" />
                        </div>
                        <span className="text-slate-300">{resumeData.basics.phone}</span>
                      </div>
                      <div className="flex items-center gap-4 group">
                        <div className="p-3 rounded-xl bg-white/5 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <span className="text-slate-300">{resumeData.basics.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Name"
                          required
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 transition-all"
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          required
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 transition-all"
                        />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 transition-all"
                      />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message"
                        rows={4}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
                      />
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                      
                      {/* Status Message */}
                      {submitStatus.type && (
                        <div className={`p-4 rounded-xl text-center ${
                          submitStatus.type === 'success' 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-red-500/10 text-red-400 border border-red-500/30'
                        }`}>
                          {submitStatus.message}
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </section>

            <footer className="py-12 px-6 border-t border-white/5 text-center">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} {resumeData.basics.name}. Built with passion and precision.
              </p>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
