import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
      <Hero />
      <Features />
      <ComparisonTable />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
