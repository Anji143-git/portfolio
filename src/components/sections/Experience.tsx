import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CalendarDays, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  expanded?: boolean;
}

export default function Experience() {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([
    {
      company: 'Bank of America',
      role: 'Java Full-Stack Developer',
      period: 'Jun 2024 – Present',
      location: 'Chicago, IL',
      description: [
        'Developed and maintained secure web applications using Spring MVC, Vue.js, Hibernate, and React.',
        'Managed React application state using Redux and Hooks for a high-traffic banking portal for 2M+ users.',
        'Led full-stack development across 5 teams with Java, Spring Boot, Angular, and PostgreSQL.',
        'Implemented comprehensive testing (JUnit, Mockito, Cypress) to achieve 95% coverage.',
        'Worked in Agile and Scrum environments for efficient project delivery.',
        'Developed secure banking applications for 2M+ users.',
        'Upgraded legacy AngularJS components to Angular, improving performance and maintainability.',
        'Built scalable applications using AWS EC2, S3, and Lambda.'
      ],
      expanded: true
    },
    {
      company: 'OPTUM',
      role: 'Full-Stack Developer',
      period: 'Dec 2023 – Jun 2024',
      location: 'New Jersey, US',
      description: [
        'Developed end-to-end web applications using Spring Boot, React, and PostgreSQL.',
        'Monitored and debugged systems using Splunk dashboards.',
        'Designed RESTful APIs with JWT/OAuth2, reducing latency by 25% and improving security compliance.',
        'Implemented WebSocket servers for real-time health-data dashboards (Splunk integration).'
      ],
      expanded: false
    },
    {
      company: 'Accenture',
      role: 'Senior Software Engineer',
      period: 'Feb 2018 – Dec 2021',
      location: 'Mumbai, India',
      description: [
        'Built full-stack apps with Java, Spring Boot, React, and PostgreSQL.',
        'Integrated 5+ external systems using REST and SOAP services.',
        'Optimized SQL queries using Cost-Based Optimization.',
        'Ensured code quality using unit testing and SonarQube.'
      ],
      expanded: false
    }
  ]);

  const toggleExpand = (index: number) => {
    setExperiences(prev => 
      prev.map((exp, i) => 
        i === index ? { ...exp, expanded: !exp.expanded } : exp
      )
    );
  };

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">My journey as a developer through different roles and companies</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-border pl-8 ml-4 space-y-10">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company} 
                className={cn(
                  "relative animate-on-scroll",
                  "transition-all duration-500 ease-in-out"
                )}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 mt-1.5 h-5 w-5 rounded-full border border-border bg-primary/80 shadow-md"></div>
                
                {/* Experience card */}
                <div className={cn(
                  "relative p-6 rounded-xl shadow-sm",
                  "border border-border bg-card/30 backdrop-blur-sm",
                  "transition-all duration-300 hover:shadow-lg",
                  "hover:border-primary/30 cursor-pointer",
                  exp.expanded ? "!border-primary/50" : ""
                )}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <h4 className="text-lg font-medium text-primary">{exp.company}</h4>
                    </div>
                    <div className="flex items-center mt-2 sm:mt-0 text-sm text-muted-foreground">
                      <CalendarDays size={16} className="mr-1.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    exp.expanded ? "max-h-[1000px] opacity-100" : "max-h-[70px] opacity-70"
                  )}>
                    <ul className={cn(
                      "list-disc pl-5 space-y-1 text-muted-foreground mb-4",
                      exp.expanded ? "" : "line-clamp-2"
                    )}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm sm:text-base leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => toggleExpand(index)} 
                    className="text-sm mt-2 text-primary hover:text-primary/80"
                  >
                    {exp.expanded ? (
                      <> 
                        <span>Show Less</span>
                        <ChevronUp size={16} className="ml-1" />
                      </>
                    ) : (
                      <>
                        <span>Show More</span>
                        <ChevronDown size={16} className="ml-1" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}