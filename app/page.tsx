import Hero from "@/components/hero";
import Features from "@/components/features";
import Solutions from "@/components/solutions";
import Partners  from "@/components/partners";
import About from "@/components/about";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950">
      <Hero />
      <Features />
      <Solutions />
      <Partners />
      <About />
      <Cta />
      <Footer />
    </main>
  );
}