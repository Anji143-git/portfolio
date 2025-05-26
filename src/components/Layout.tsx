import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header scrolled={scrolled} />
      <main className={cn(
        "flex-1 w-full",
        "bg-gradient-to-b from-background to-background/90"
      )}>
        {children}
      </main>
      <Footer />
    </div>
  );
}