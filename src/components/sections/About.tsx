import { cn } from '@/lib/utils';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold tracking-tight mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">Get to know more about me and my experience</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-on-scroll" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer with 5+ years of experience building scalable web applications for 2M+ users. 
              Expertise in Spring Boot, React, and AWS, with a track record of reducing deployment time by 40% 
              and improving system efficiency by 30% through CI/CD pipelines.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about modernizing legacy frontend systems (AngularJS to Angular) and building 
              accessible SPAs.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className={cn(
                "p-4 border border-border rounded-lg",
                "bg-muted/30 hover:bg-muted/50 transition-colors duration-300",
              )}>
                <h4 className="font-medium mb-2">Location</h4>
                <p className="text-muted-foreground">Chicago, IL</p>
              </div>
              <div className={cn(
                "p-4 border border-border rounded-lg",
                "bg-muted/30 hover:bg-muted/50 transition-colors duration-300",
              )}>
                <h4 className="font-medium mb-2">Email</h4>
                <p className="text-muted-foreground overflow-hidden text-ellipsis">
                  <a href="mailto:anjaneyulukambampati19@gmail.com" className="hover:text-primary transition-colors">
                    anjaneyulukambampati19@gmail.com
                  </a>
                </p>
              </div>
              <div className={cn(
                "p-4 border border-border rounded-lg",
                "bg-muted/30 hover:bg-muted/50 transition-colors duration-300",
              )}>
                <h4 className="font-medium mb-2">Phone</h4>
                <p className="text-muted-foreground">
                  <a href="tel:+14845491737" className="hover:text-primary transition-colors">
                    +1 484-549-1737
                  </a>
                </p>
              </div>
              <div className={cn(
                "p-4 border border-border rounded-lg",
                "bg-muted/30 hover:bg-muted/50 transition-colors duration-300",
              )}>
                <h4 className="font-medium mb-2">LinkedIn</h4>
                <p className="text-muted-foreground overflow-hidden text-ellipsis">
                  <a 
                    href="https://www.linkedin.com/in/anjaneyulu-kambam-5ab477220" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    View Profile
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" style={{animationDelay: '0.4s'}}>
            <div className={cn(
              "relative rounded-2xl overflow-hidden",
              "border border-border/50 bg-muted/20",
              "p-8 backdrop-blur-sm",
            )}>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-6">Personal Interests</h3>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <h4 className="font-medium mb-2">Challenge Seeker</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I enjoy challenging myself, approaching tasks with creativity and persistence
                    regardless of the outcome.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Cultural Explorer</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Exploring new places and immersing myself in different cultures broadens 
                    my perspective and enhances my adaptability.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Continuous Learner</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm passionate about staying current with emerging technologies and learning
                    new skills to expand my development toolkit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}