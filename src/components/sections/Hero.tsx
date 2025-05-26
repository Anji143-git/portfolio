import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';


export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const phrases = ['Full-stack Developer', 'Java Expert', 'React Specialist', 'Cloud Architect'];
  const typingSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 1500;

  const currentPhraseIndex = useRef(0);
  const currentCharIndex = useRef(0);
  const isTyping = useRef(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex.current];

      if (isTyping.current) {
        if (currentCharIndex.current < currentPhrase.length) {
          setTypedText(currentPhrase.substring(0, currentCharIndex.current + 1));
          currentCharIndex.current += 1;
          timeoutId = setTimeout(type, typingSpeed);
        } else {
          isTyping.current = false;
          timeoutId = setTimeout(type, pauseTime);
        }
      } else {
        if (currentCharIndex.current > 0) {
          setTypedText(currentPhrase.substring(0, currentCharIndex.current - 1));
          currentCharIndex.current -= 1;
          timeoutId = setTimeout(type, deleteSpeed);
        } else {
          isTyping.current = true;
          currentPhraseIndex.current = (currentPhraseIndex.current + 1) % phrases.length;
          timeoutId = setTimeout(type, typingSpeed);
        }
      }
    };

    type(); // Start typing effect

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, []); // Empty dependency array to run only once



  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-on-scroll" style={{animationDelay: '0.2s'}}>
            <h2 className="text-lg md:text-xl font-medium text-primary mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Anjaneyulu Kambampati
            </h1>
            <div className="h-8 mb-6">
              <h3 className="text-xl md:text-2xl font-medium text-muted-foreground">
                <span className="inline-block">{typedText}</span>
                <span className="inline-block w-1 h-6 ml-1 bg-primary animate-blink"></span>
              </h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Full-Stack Developer with 5+ years of experience building scalable web applications.
              Passionate about creating elegant solutions for complex problems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#" download>
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className={cn(
            "hidden lg:block relative",
            "animate-on-scroll rounded-2xl overflow-hidden",
            "w-[90%] h-[80vh] max-h-[600px]"
          )} style={{animationDelay: '0.4s'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl"></div>
            <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center border border-border/50 rounded-2xl">
              <div className="w-72 h-72 rounded-full bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 flex items-center justify-center overflow-hidden">
                <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">AK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        aria-label="Scroll to About section"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ChevronDown className="h-6 w-6 text-primary" />
      </button>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}