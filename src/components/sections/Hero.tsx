"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { PlayCircle, ShieldCheck, TrendingUp } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const { openModal } = useModal();

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Glowing Orb */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 dark:bg-card/30 border border-primary/10 w-fit backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary">Accepting new students for Fall 2026</span>
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              className="font-heading text-5xl md:text-7xl font-bold text-primary leading-[1.1]"
            >
              Master Your Exams.<br className="hidden md:block" />
              <span className="text-gradient">Secure Your Future</span><br className="hidden md:block" />
              Abroad.
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed"
            >
              Elite 1-on-1 IELTS preparation and study abroad consulting designed to guarantee your targeted band score through personalized methodologies.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-4">
              <motion.button 
                onClick={openModal}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-accent text-white rounded-full font-medium text-lg flex items-center justify-center gap-2 hover:bg-amber-600 transition-colors shadow-xl shadow-accent/20"
              >
                Start Your Journey
                <motion.span 
                  className="group-hover:translate-x-1 transition-transform"
                >
                  →
                </motion.span>
              </motion.button>
              
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-card text-primary border border-primary/10 rounded-full font-medium text-lg flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-lg shadow-black/5"
              >
                <PlayCircle className="w-5 h-5 text-accent" />
                See How It Works
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column (Complex Composition) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Portrait Placeholder */}
            <div className="relative z-10 w-full aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden glass rounded-t-[100px] border pb-4 px-4 pt-4 shadow-2xl">
               <div className="w-full h-full bg-slate-200 dark:bg-slate-800 rounded-[80px] rounded-b-xl overflow-hidden relative">
                 {/* Imagine an image goes here. We use a nice gradient placeholder */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 dark:from-slate-800 to-slate-100 dark:to-slate-700 opacity-50" />
                 <img 
                   src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1470&auto=format&fit=crop" 
                   alt="Tutor Portrait" 
                   className="object-cover w-full h-full"
                 />
               </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{ y: y1 }}
              className="absolute top-20 -left-10 md:-left-20 z-20 glass px-6 py-4 rounded-2xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Band 8.0+</p>
                <p className="text-xs text-foreground/60">Score Guarantee</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ y: y2 }}
              className="absolute bottom-32 -right-4 md:-right-12 z-20 glass px-6 py-4 rounded-2xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">100+ Students</p>
                <p className="text-xs text-foreground/60">Successfully Placed</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
