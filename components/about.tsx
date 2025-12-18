'use client';

export default function About() {
  return (
    <section className="w-full bg-slate-950 py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
          Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Innovation</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-left bg-slate-900/30 p-8 rounded-3xl border border-slate-800">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To develop innovative IoT solutions that make cities smarter, more sustainable, and efficient. 
              We believe technology should serve people, reducing waste and improving quality of life.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">The Team</h3>
            <p className="text-slate-400 leading-relaxed">
              Founded by engineering students from ISEP, Ision combines academic research with practical application. 
              Led by <strong className="text-slate-200">Vasco Magolo</strong> (Tech Lead) and <strong className="text-slate-200">Miguel Correia</strong> (Operations), we are building the future of connected infrastructure.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}