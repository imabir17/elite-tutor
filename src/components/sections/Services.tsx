"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { BookOpen, Mic, PenTool } from "lucide-react";
import React from "react";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Mic,
  PenTool,
};

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            A Curriculum Designed for <span className="text-gradient">Mastery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/70"
          >
            We break down the IELTS exam into fundamental skills, delivering hyper-focused modules that guarantee progress.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative p-8 glass rounded-3xl bg-card transition-all overflow-hidden border border-primary/5 shadow-xl shadow-black/[0.03] hover:shadow-2xl hover:shadow-accent/10"
              >
                {/* Border Gradient Reveal on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" style={{ filter: 'blur(2px)' }} />
                <div className="absolute inset-[1px] bg-card rounded-[23px] z-0" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
