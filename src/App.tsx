import { useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import Layout from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AnimatePresence } from '@/components/AnimatePresence';

function App() {
  useEffect(() => {
    document.title = "Anjaneyulu Kambampati | Full-stack Developer";
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme-preference">
      <AnimatePresence>
        <Layout>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </Layout>
      </AnimatePresence>
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}

export default App;