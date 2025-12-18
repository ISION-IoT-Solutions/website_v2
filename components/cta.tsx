'use client';

import { ArrowRight, Mail } from 'lucide-react';

export default function Cta() {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-slate-950 to-blue-950/20 border-t border-slate-900">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to optimize your city?
        </h2>
        <p className="text-slate-400 text-lg mb-10">
          Whether you need smart parking for a municipality or access control for a large event, Ision has the scalable solution for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:contact@ision.pt" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-medium text-white shadow transition-all hover:bg-blue-700 hover:scale-105">
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </a>
          <button className="inline-flex h-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 px-8 text-sm font-medium text-white transition-all hover:bg-slate-800">
            Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}