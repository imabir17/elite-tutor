"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export default function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-slate-900 dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
         <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Stories of <span className="text-accent text-gradient from-accent to-yellow-300">Success</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/70 max-w-xl"
              >
                Don't just take our word for it. Hear from students who have realized their dreams of studying at top global universities.
              </motion.p>
            </div>
         </div>
      </div>

      {/* Infinite Marquee utilizing Framer Motion CSS animation */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        
        <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 30 
            }}
            className="flex gap-6 px-4 w-max hover:[animation-play-state:paused]"
        >
            {/* Double the items to fake infinite scroll seamlessly */}
            {[...testimonials, ...testimonials].map((t, index) => (
                <div 
                  key={index}
                  className="w-[350px] md:w-[450px] p-8 glass bg-white/5 rounded-3xl border border-white/10 shrink-0 flex flex-col justify-between"
                >
                    <div>
                        <div className="flex gap-1 mb-6">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-5 h-5 fill-accent text-accent" />
                            ))}
                        </div>
                        <p className="text-white/90 text-lg leading-relaxed mb-8">
                            "{t.quote}"
                        </p>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                       <div>
                         <h4 className="font-bold text-white">{t.name}</h4>
                         <p className="text-sm text-white/60 text-accent">{t.target}</p>
                       </div>
                       <div className="flex flex-col items-end">
                         <span className="text-xs text-white/60">Achieved</span>
                         <span className="font-heading font-bold text-xl text-white">{t.score}</span>
                       </div>
                    </div>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
