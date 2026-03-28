"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { methodologySteps } from "@/lib/data";

export default function Methodology() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="methodology" ref={containerRef} className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            The 4-Step <span className="text-gradient">Success Framework</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/70"
          >
            A proven methodology designed to take the guesswork out of your preparation and absolutely guarantee your results.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative pl-4 md:pl-0">
          {/* Vertical Scroll Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-gray-100 -translate-x-1/2 rounded-full hidden md:block" />
          <motion.div 
            style={{ 
              scaleY: scrollYProgress,
              transformOrigin: "top"
            }}
            className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500 to-accent -translate-x-1/2 rounded-full hidden md:block"
          />

          {/* Mobile line */}
          <div className="absolute left-8 top-4 bottom-4 w-1 bg-gray-100 -translate-x-1/2 rounded-full md:hidden" />
          <motion.div 
            style={{ 
              scaleY: scrollYProgress,
              transformOrigin: "top"
            }}
            className="absolute left-8 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500 to-accent -translate-x-1/2 rounded-full md:hidden"
          />

          {methodologySteps.map((step, index) => {
            return (
              <StepItem 
                key={step.step} 
                step={step} 
                index={index} 
                progress={scrollYProgress} 
                total={methodologySteps.length}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepItem({ 
  step, 
  index, 
  progress, 
  total 
}: { 
  step: any; 
  index: number; 
  progress: any; 
  total: number 
}) {
  const itemRef = useRef(null);
  
  // Calculate when this specific item should "light up" based on total scroll
  // The threshold is when the scroll indicator reaches this item.
  const start = index / total;
  const end = (index + 0.5) / total;
  
  const opacity = useTransform(progress, [start, end], [0.3, 1]);
  const scale = useTransform(progress, [start, end], [0.8, 1]);
  const circleColor = useTransform(
    progress,
    [start, end],
    ["#e5e7eb", "#F59E0B"] // gray-200 to accent
  );

  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={itemRef}
      style={{ opacity }}
      className={`relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className={`ml-12 md:ml-0 md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left'} bg-card p-8 rounded-3xl shadow-lg border border-primary/5 hover:shadow-2xl transition-shadow`} >
        <div className="flex items-center gap-4 mb-4 justify-start md:justify-[inherit] md:flex-col lg:flex-row lg:items-start lg:gap-4 md:items-center">
            <h3 className="font-heading text-2xl font-bold text-primary">
              <span className="text-accent md:hidden mr-2">Step {step.step}:</span>
              {step.title}
            </h3>
        </div>
        <p className="text-foreground/70 leading-relaxed">
          {step.description}
        </p>
      </div>

      <motion.div 
        style={{ 
          scale, 
          borderColor: circleColor,
          backgroundColor: 'var(--card)'
        }}
        className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-primary z-10 shadow-lg"
      >
        {step.step}
      </motion.div>
      
      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
}
