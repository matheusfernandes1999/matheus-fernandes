import Hero from '@/app/components/landing/Hero';
import About from '@/app/components/landing/About';
import Projects from '@/app/components/landing/Projects';
import Skills from '@/app/components/landing/Skills';
import Contact from '@/app/components/landing/Contact';
import Footer from '@/app/components/landing/Footer';
import Header from './components/landing/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}