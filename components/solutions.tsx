'use client';

import { Car, Ticket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: "ISION Parking",
    category: "Smart Mobility",
    description: "An intelligent urban parking management system that reduces traffic congestion and carbon emissions.",
    details: [
      "Real-time occupancy detection",
      "Reduces cruising for parking by up to 30%",
      "Seamless mobile app for citizens",
      "Low-maintenance autonomous sensors"
    ],
    icon: <Car className="w-10 h-10 text-blue-400" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "ISION Access",
    category: "Event Intelligence",
    description: "Crowd management and access control solution for large-scale events, ensuring safety and efficiency.",
    details: [
      "Contactless NFC entry validation",
      "Real-time capacity & flow monitoring",
      "Prevents overcrowding automatically",
      "Works reliably in high-density areas"
    ],
    icon: <Ticket className="w-10 h-10 text-purple-400" />,
    gradient: "from-purple-500/20 to-pink-500/20",
  }
];

export default function Solutions() {
  return (
    <section className="w-full bg-slate-950 py-24 px-4 md:px-6 border-t border-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              Our <span className="text-blue-500">Solutions</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Empowering municipalities and organizations with technology that improves quality of life and operational efficiency.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((sol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 hover:border-slate-700 transition-all`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sol.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-white shadow-xl">
                    {sol.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 uppercase tracking-wider">
                    {sol.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {sol.title}
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {sol.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {sol.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 mr-3 text-blue-500 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}