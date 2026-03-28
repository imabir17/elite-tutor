"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, MessageCircle, Share2, Mail, Send } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function Footer() {
  const { openModal } = useModal();
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white overflow-hidden">
      {/* Massive CTA Section */}
      <div className="container mx-auto px-4 md:px-6 py-24 border-b border-white/10 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-[1.1]"
          >
            Ready to start your <span className="text-gradient from-accent to-yellow-300">journey?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Join hundreds of successful students who have secured their futures at top global universities.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
             <motion.button 
                onClick={openModal}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto px-8 py-5 bg-accent text-white rounded-full font-medium text-lg flex items-center justify-center gap-3 hover:bg-amber-600 transition-colors shadow-xl shadow-accent/20"
              >
                Book Your Free Consultation
                <motion.div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </motion.div>
              </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div>
              <a href="#" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-heading font-bold italic">
                  E
                </div>
                <span className="font-heading font-bold text-2xl tracking-tight text-white">
                  EliteTutor.
                </span>
              </a>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Premium IELTS preparation and study abroad consulting. We don't just teach English; we engineer your success.
              </p>
              <div className="flex gap-4">
                 {[Globe, MessageCircle, Share2, Mail].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                      <Icon size={18} />
                    </a>
                 ))}
              </div>
            </div>

            {/* Links Group 1 */}
            <div>
              <h4 className="font-bold text-lg mb-6">Programs</h4>
              <ul className="space-y-4">
                {["Intensive IELTS", "TOEFL Mastery", "University Applications", "Visa Interview Prep", "Speaking Clinics"].map((link) => (
                    <li key={link}>
                        <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                            {link}
                        </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Links Group 2 */}
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4">
                {["About Us", "Success Stories", "Methodology", "Pricing", "Contact"].map((link) => (
                    <li key={link}>
                        <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                            {link}
                        </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
              <p className="text-white/60 text-sm mb-4">
                 Get weekly tips on exam strategies and university admissions.
              </p>
              <div className="relative">
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors text-white"
                 />
                 <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent rounded-lg text-white hover:bg-amber-600 transition-colors">
                    <Send size={16} />
                 </button>
              </div>
            </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-xs">
            <p>© {new Date().getFullYear()} EliteTutor. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
