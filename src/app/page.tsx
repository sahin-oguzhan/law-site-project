import About from '@/components/About';
import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import Lawyers from '@/components/Lawyers';
import Navbar from '@/components/Navbar';
import News from '@/components/News';
import ServicesBanner from '@/components/ServicesBanner';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ECE8E1]">
      <Navbar />
      <Hero />
      <About />
      <ServicesBanner />
      <Lawyers />
      <CTA />
      <News />
    </main>
  );
}
