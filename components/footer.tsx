'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Box } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 text-slate-400 font-sans">
      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Coluna 1: Marca e Missão */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 text-white text-xl font-bold mb-4">
              <Box className="w-6 h-6 text-blue-500" />
              <span>ISION</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Empowering smart cities with scalable LoRaWAN solutions. From parking to event management, we connect the physical world to the digital.
            </p>
          </div>

          {/* Coluna 2: Soluções */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#parking" className="hover:text-blue-400 transition-colors">Smart Parking</Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-blue-400 transition-colors">Event Access</Link>
              </li>
              <li>
                <span className="text-slate-600 cursor-not-allowed">Waste Management (Soon)</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#about" className="hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#partners" className="hover:text-blue-400 transition-colors">Partners</Link>
              </li>
              <li>
                <a href="mailto:contact@ision.pt" className="hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} Ision IoT Solutions. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}