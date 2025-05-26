import { useState } from 'react';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Add event listener for scroll
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Anjaneyulu Kambampati</h3>
            <p className="text-muted-foreground mb-4">Full-stack Developer based in Chicago, IL</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/anjaneyulu-kambam-5ab477220" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:anjaneyulukambampati19@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Anjaneyulu Kambampati. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}