"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function ConsultationModal() {
  const { isModalOpen, closeModal } = useModal();
  const [step, setStep] = useState<"form" | "submitting" | "success">("form");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("submitting");
    
    // Simulate API Call
    setTimeout(() => {
      setStep("success");
    }, 1500);
  };

  const handleClose = () => {
    closeModal();
    // Reset form state after exit animation completes
    setTimeout(() => setStep("form"), 300);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-lg bg-card rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-20"
            >
              <X size={20} />
            </button>

            {step === "form" && (
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="mb-8">
                  <h3 className="font-heading text-3xl font-bold text-primary mb-2">
                    Book a Consultation
                  </h3>
                  <p className="text-foreground/70">
                    Fill out the form below and our lead instructor will contact you shortly to plan your success.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Email Address</label>
                      <input required type="email" pattern=".*@.*" title="Please include an '@' in the email address." placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Phone Number</label>
                      <input required type="tel" onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9+\-()\s]/g, ''); }} placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Current Score (approx)</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400">
                        <option value="">Select Band...</option>
                        <option value="none">Haven't taken yet</option>
                        <option value="5">Band 5.0 - 5.5</option>
                        <option value="6">Band 6.0 - 6.5</option>
                        <option value="7">Band 7.0 - 7.5</option>
                        <option value="8">Band 8.0+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Target Score</label>
                      <select required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400">
                        <option value="">Select Target...</option>
                        <option value="6.5">Band 6.5</option>
                        <option value="7.0">Band 7.0</option>
                        <option value="7.5">Band 7.5</option>
                        <option value="8.0">Band 8.0+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Target Country / University</label>
                    <input type="text" placeholder="e.g. Canada, University of Toronto" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400" />
                  </div>

                  <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">What do you struggle with the most?</label>
                      <textarea rows={3} placeholder="Tell us a little bit about your current challenges..." className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400"></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 bg-accent text-white rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-accent/20 mt-4">
                    Submit Application
                  </button>
                </form>
              </div>
            )}

            {step === "submitting" && (
              <div className="p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <Loader2 className="w-12 h-12 text-accent animate-spin mb-6" />
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">Sending your request...</h3>
                <p className="text-foreground/70">Connecting you securely with our team.</p>
              </div>
            )}

            {step === "success" && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 flex flex-col items-center justify-center text-center min-h-[400px]"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="font-heading text-3xl font-bold text-primary mb-2">Request Received!</h3>
                <p className="text-foreground/70 mb-8 max-w-sm">
                  We've successfully received your consultation request. Our lead instructor will email you within 24 hours to schedule our call.
                </p>
                <button 
                  onClick={handleClose}
                  className="px-8 py-3 bg-slate-100 dark:bg-slate-800 text-primary rounded-xl font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Close Window
                </button>
              </motion.div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
