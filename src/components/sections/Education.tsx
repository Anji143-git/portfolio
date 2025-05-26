import { GraduationCap, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Education() {
  const education = [
    {
      degree: 'Master of Science, Computer Science',
      school: 'Lewis University',
      gpa: '3.4',
      year: '2023'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Associate Developer',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      name: 'Certified Java Developer',
      issuer: 'Oracle',
      year: '2022'
    }
  ];

  const achievements = [
    {
      title: 'Top Performer',
      organization: 'Optum',
      description: 'Full-stack Web App with 50,000+ Users'
    },
    {
      title: 'Hackathon Winner',
      organization: 'Baker Hughes | 2023',
      description: 'Developed a real-time analytics tool using React and Spring Boot'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Education & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">My educational background, certifications, and notable achievements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div 
            className={cn(
              "rounded-xl p-6 animate-on-scroll",
              "border border-border bg-card/30 backdrop-blur-sm",
              "hover:border-primary/30 transition-all duration-300"
            )}
            style={{animationDelay: '0.2s'}}
          >
            <div className="mb-6 flex items-center">
              <div className="p-2.5 rounded-full bg-primary/10 mr-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="border-l-2 border-border pl-4 py-1 hover:border-primary transition-colors duration-300">
                  <h4 className="font-bold">{item.degree}</h4>
                  <p className="text-primary">{item.school}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-1">
                    <span>GPA: {item.gpa}</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div 
            className={cn(
              "rounded-xl p-6 animate-on-scroll",
              "border border-border bg-card/30 backdrop-blur-sm",
              "hover:border-primary/30 transition-all duration-300"
            )}
            style={{animationDelay: '0.3s'}}
          >
            <div className="mb-6 flex items-center">
              <div className="p-2.5 rounded-full bg-primary/10 mr-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "p-4 rounded-lg",
                    "border border-border/60 bg-muted/30",
                    "hover:border-primary/30 hover:bg-muted/50 transition-all duration-300"
                  )}
                >
                  <h4 className="font-medium">{cert.name}</h4>
                  <p className="text-sm text-primary">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div 
            className={cn(
              "rounded-xl p-6 animate-on-scroll",
              "border border-border bg-card/30 backdrop-blur-sm",
              "hover:border-primary/30 transition-all duration-300"
            )}
            style={{animationDelay: '0.4s'}}
          >
            <div className="mb-6 flex items-center">
              <div className="p-2.5 rounded-full bg-primary/10 mr-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Achievements</h3>
            </div>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className={cn(
                  "p-4 rounded-lg",
                  "border border-border/60 bg-muted/30",
                  "hover:border-primary/30 hover:bg-muted/50 transition-all duration-300"
                )}>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-primary">{achievement.organization}</p>
                  <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}