"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, useSpring, useTransform } from "framer-motion";
import { statistics } from "@/lib/data";

function Counter({ from, to, suffix }: { from: number; to: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(from, {
    stiffness: 50,
    damping: 20,
    mass: 1,
    restDelta: 0.01,
  });

  useEffect(() => {
    if (inView) {
      springValue.set(to);
    }
  }, [inView, springValue, to]);

  const display = useTransform(springValue, (current) => 
    (to % 1 !== 0 ? current.toFixed(1) : Math.round(current)).toString()
  );

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="flex items-center text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
        <motion.span>{display}</motion.span>
        <span>{suffix}</span>
      </div>
    </div>
  );
}

export default function Stats() {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={containerRef} className="py-16 bg-slate-900 dark:bg-slate-950 text-white border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.8, ease: "easeOut" } 
            }
          }}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-y border-white/10"
        >
          {statistics.map((stat, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="py-8"
            >
              <Counter from={0} to={stat.value} suffix={stat.suffix} />
              <p className="text-sm md:text-base font-medium text-white/70 text-center px-4 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
