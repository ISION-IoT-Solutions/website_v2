'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Partners() {
  return (
    <section className="w-full bg-slate-950 py-16 px-4 md:px-6 border-t border-slate-900">
      <div className="container mx-auto max-w-6xl text-center">
        
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Trusted & Supported By
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 hover:opacity-100 transition-all duration-500">
          
          {/* ISEP LOGO */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center"
            
          > 
          <a href="https://www.isep.ipp.pt" target="_blank" rel="noopener noreferrer">
             <Image 
               src="/images/isep.png" 
               alt="ISEP Logo" 
               width={150} 
               height={60} 
               className="h-12 w-auto object-contain brightness-0 invert" 
               />
               </a>
          </motion.div>

          {/* SUCESSOS CRIATIVOS LOGO */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
            
          >
            <a href="https://sucessos-criativos.pt" target="_blank" rel="noopener noreferrer">
             <Image 
               src="/images/sucessos_criativos.png" 
               alt="Sucessos Criativos Logo" 
               width={150} 
               height={60} 
               className="h-12 w-auto object-contain brightness-0 invert"
               />
               </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}