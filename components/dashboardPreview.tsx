'use client';

import { motion } from 'framer-motion';
import { Activity, Car, Users, Leaf, MoreHorizontal } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <div className="relative w-full max-w-[800px] mx-auto perspective-1000">
      
      {/* Container Principal com efeito "Vidro" */}
      <motion.div 
        initial={{ rotateX: 10, y: 50, opacity: 0 }}
        animate={{ rotateX: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80 shadow-2xl backdrop-blur-md"
      >
        
        {/* Barra de Topo */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-3">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <div className="text-xs font-mono text-slate-500">Ision Command Center • v2.0</div>
        </div>

        {/* Conteúdo do Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          
          {/* Card 1: Parking Status */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-400 uppercase">City Parking</span>
              <Car className="h-4 w-4 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">87%</div>
            <div className="text-xs text-slate-500">Occupancy Rate</div>
            {/* Barra de progresso */}
            <div className="mt-3 h-1.5 w-full rounded-full bg-slate-800">
              <div className="h-1.5 w-[87%] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            </div>
          </div>

          {/* Card 2: Events / People */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-400 uppercase">Access Control</span>
              <Users className="h-4 w-4 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white">1,240</div>
            <div className="text-xs text-slate-500">Live Attendees</div>
            <div className="mt-3 flex gap-1">
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className={`h-6 w-full rounded-sm ${i > 4 ? 'bg-slate-800' : 'bg-purple-500/60'}`} />
               ))}
            </div>
          </div>

          {/* Card 3: Environment (Sustentabilidade) */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-400 uppercase">CO2 Saved</span>
              <Leaf className="h-4 w-4 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">-450<span className="text-sm font-normal text-slate-500">kg</span></div>
            <div className="text-xs text-green-500 flex items-center mt-1">
              <Activity className="h-3 w-3 mr-1" /> +12% this week
            </div>
          </div>

          {/* Mapa Grande (Simulado) */}
          <div className="md:col-span-3 h-48 rounded-lg border border-slate-800 bg-slate-900/30 relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 to-slate-950"></div>
             {/* Pontos a piscar (Sensores) */}
             <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-blue-500 animate-ping" />
             <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-blue-500" />
             
             <div className="absolute bottom-1/3 right-1/3 h-3 w-3 rounded-full bg-purple-500 animate-ping delay-300" />
             <div className="absolute bottom-1/3 right-1/3 h-3 w-3 rounded-full bg-purple-500" />

             <span className="relative z-10 text-xs text-slate-600 font-mono border border-slate-800 px-2 py-1 rounded bg-slate-950/50">
               Live Map Visualization
             </span>
          </div>

        </div>
      </motion.div>
      
      {/* Glow Effect behind */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl -z-10 rounded-[30%]" />
    </div>
  );
}