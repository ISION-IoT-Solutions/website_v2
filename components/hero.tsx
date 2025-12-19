'use client';

import { ArrowRight, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import DashboardPreview from "@/components/dashboardPreview";
export default function Hero() {
  return (
    <section className="relative w-full bg-slate-950 py-24 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 w-fit">
              <Activity className="mr-2 h-4 w-4" />
              Ision IoT Solutions v2.0
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl xl:text-7xl">
              Connect the physical world to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital</span>
            </h1>
            
            <p className="max-w-[600px] text-slate-400 md:text-xl">
            Transform brute data into smart decisions. The Ision platform offers robust sensors and intuitive dashboards for your infrastructure.
            </p>
            
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500">
                See It In Action <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="inline-flex h-12 items-center justify-center rounded-md border border-slate-700 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 hover:text-white">
                Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto w-full lg:mr-0"
          >
            <DashboardPreview /> 
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}