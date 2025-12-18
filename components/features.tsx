'use client';

import { Leaf, Activity, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Environmental Impact",
    description: "Directly contribute to CO2 reduction by minimizing traffic congestion and optimizing resource usage in urban areas.",
    icon: <Leaf className="w-6 h-6 text-green-400" />,
    className: "md:col-span-2",
  },
  {
    title: "Cost Reduction",
    description: "Low-maintenance infrastructure designed to operate for years without intervention, significantly lowering operational OPEX.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    className: "md:col-span-1",
  },
  {
    title: "Traffic Optimization",
    description: "Reduce the time drivers spend searching for parking, improving city flow and citizen satisfaction.",
    icon: <Activity className="w-6 h-6 text-blue-400" />,
    className: "md:col-span-1",
  },
  {
    title: "Data-Driven Decisions",
    description: "Transform raw city data into actionable insights with our real-time analytics dashboard for smarter governance.",
    icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    className: "md:col-span-2",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-slate-950 py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Building the <span className="text-blue-500">Smart Cities</span> of Tomorrow
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Sustainable, efficient, and intelligent solutions designed to solve real urban challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:bg-slate-800/50 transition-colors ${feature.className}`}
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-slate-800 p-3 ring-1 ring-slate-700 group-hover:bg-slate-700 transition-colors">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}