import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Maximize2, ExternalLink, Github } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  image: string;
  achievements: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: "ticketing-system",
      title: "Ticketing System",
      description: "A full-stack containerized ticketing application for enterprise support",
      fullDescription: "Designed and implemented a full-stack containerized web application for ticket management, providing a streamlined interface for support teams to handle user requests efficiently.",
      tech: ["Java", "Spring MVC", "AngularJS", "SQL", "Docker"],
      image: "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      achievements: [
        "Reduced ticket resolution time by 30% for 10K+ users by containerizing the app with Docker",
        "Implemented responsive UI with AngularJS for cross-device compatibility",
        "Integrated with SQL database for efficient ticket storage and retrieval"
      ]
    },
    {
      id: "real-time-analytics",
      title: "Real-time Analytics Tool",
      description: "Hackathon-winning analytics dashboard for data visualization",
      fullDescription: "Developed a real-time analytics tool during the Baker Hughes Hackathon in 2023, winning first place for its innovative approach to data visualization and analysis capabilities.",
      tech: ["React", "Spring Boot", "WebSockets", "D3.js", "PostgreSQL"],
      image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      achievements: [
        "Hackathon Winner: Baker Hughes | 2023",
        "Implemented real-time data streaming with WebSockets",
        "Created interactive dashboards for complex data visualization"
      ]
    },
    {
      id: "banking-portal",
      title: "Banking Portal",
      description: "High-traffic secure banking application with modern architecture",
      fullDescription: "Engineered a secure, high-performance banking portal serving 2M+ users with modern technologies focusing on security, performance, and user experience.",
      tech: ["React", "Redux", "Spring Boot", "AWS", "PostgreSQL", "JWT"],
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      achievements: [
        "Built scalable architecture serving 2M+ users",
        "Implemented secure authentication with JWT and OAuth2",
        "Optimized performance for handling high-volume transactions"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">Showcasing my best work and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "group rounded-xl overflow-hidden border border-border",
                "bg-card/30 backdrop-blur-sm animate-on-scroll",
                "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                "hover:border-primary/30"
              )}
              style={{animationDelay: `${0.2 * index}s`}}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute top-4 right-4 p-2 bg-background/60 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={`View details for ${project.title}`}
                >
                  <Maximize2 size={16} className="text-primary" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-center text-primary hover:bg-primary/10"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-muted-foreground pt-2">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">About this project</h4>
                  <p className="text-muted-foreground text-sm">{selectedProject.fullDescription}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Key Achievements</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                    {selectedProject.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 flex space-x-4">
                  <Button variant="outline" className="flex-1" disabled>
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="flex-1" disabled>
                    <Github size={16} className="mr-2" />
                    Repository
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}