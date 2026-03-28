"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { pricingTiers } from "@/lib/data";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useModal } from "@/context/ModalContext";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { openModal } = useModal();

  return (
    <section id="pricing" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Invest in Your <span className="text-gradient">Future</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <span className={cn("text-sm font-medium transition-colors", !isAnnual ? "text-primary" : "text-primary/50")}>
              Monthly Installments
            </span>
            <button
               onClick={() => setIsAnnual(!isAnnual)}
               className="relative w-16 h-8 rounded-full bg-primary/10 p-1 flex items-center transition-colors hover:bg-primary/20"
            >
               <motion.div
                  className="w-6 h-6 bg-accent text-white rounded-full shadow-md"
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  animate={{ x: isAnnual ? 32 : 0 }}
               />
            </button>
            <span className={cn("text-sm font-medium transition-colors", isAnnual ? "text-primary" : "text-primary/50")}>
              Pay in Full (Save 20%)
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {pricingTiers.map((tier, index) => {
            const price = isAnnual ? tier.fullPrice : tier.monthlyPrice;
            const isPopular = tier.isPopular;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                }}
                className={cn(
                  "relative p-8 rounded-3xl transition-all duration-300",
                  isPopular 
                    ? "bg-slate-900 dark:bg-slate-800 text-white shadow-2xl shadow-primary/20 scale-100 md:scale-105 z-10 border border-slate-700" 
                    : "glass bg-card/70 border border-primary/10 hover:shadow-xl hover:border-primary/20",
                )}
              >
                {isPopular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2">
                    <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className={cn("text-2xl font-heading font-bold mb-2", isPopular ? "text-white" : "text-primary")}>
                  {tier.name}
                </h3>
                
                <div className="flex items-baseline gap-1 my-6">
                  <span className={cn("text-4xl font-bold font-heading", isPopular ? "text-white" : "text-primary")}>
                    ${price}
                  </span>
                  <span className={cn("text-sm", isPopular ? "text-white/60" : "text-foreground/50")}>
                    {isAnnual ? "/course" : "/mo"}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0", isPopular ? "bg-accent/20 text-accent" : "bg-green-100 text-green-600")}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={cn("text-sm", isPopular ? "text-white/80" : "text-foreground/70")}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button 
                  onClick={openModal}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "w-full py-4 rounded-xl font-medium transition-colors shadow-lg",
                    isPopular 
                        ? "bg-accent hover:bg-amber-600 text-white shadow-accent/20" 
                        : "bg-primary hover:bg-blue-900 text-white shadow-primary/10"
                  )}
                >
                  Get Started
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
