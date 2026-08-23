import About from '@/components/About';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ECE8E1]">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
