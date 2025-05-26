import { useState } from 'react';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'devops' | 'languages' | 'databases';
};

type CategoryFilter = 'all' | 'frontend' | 'backend' | 'devops' | 'languages' | 'databases';

export default function Skills() {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  
  const skills: Skill[] = [
    // Frontend
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'React.js', level: 90, category: 'frontend' },
    { name: 'Angular', level: 85, category: 'frontend' },
    { name: 'Vue.js', level: 80, category: 'frontend' },
    { name: 'Bootstrap', level: 85, category: 'frontend' },
    { name: 'Webpack', level: 75, category: 'frontend' },
    
    // Backend
    { name: 'Java', level: 95, category: 'backend' },
    { name: 'Spring Boot', level: 90, category: 'backend' },
    { name: 'REST APIs', level: 92, category: 'backend' },
    { name: 'GraphQL', level: 78, category: 'backend' },
    { name: 'Microservices', level: 85, category: 'backend' },
    { name: 'JWT/OAuth2', level: 82, category: 'backend' },
    
    // Languages
    { name: 'Kotlin', level: 75, category: 'languages' },
    { name: 'Python', level: 80, category: 'languages' },
    { name: 'PHP', level: 70, category: 'languages' },
    { name: 'Go', level: 65, category: 'languages' },
    
    // Databases
    { name: 'MySQL', level: 88, category: 'databases' },
    { name: 'PostgreSQL', level: 90, category: 'databases' },
    { name: 'MongoDB', level: 85, category: 'databases' },
    { name: 'SQL', level: 92, category: 'databases' },
    
    // DevOps & Cloud
    { name: 'Git', level: 90, category: 'devops' },
    { name: 'Docker', level: 85, category: 'devops' },
    { name: 'Kubernetes', level: 75, category: 'devops' },
    { name: 'AWS', level: 82, category: 'devops' },
    { name: 'GCP', level: 78, category: 'devops' },
    { name: 'CI/CD', level: 88, category: 'devops' },
  ];

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  const categories = [
    { value: 'all', label: 'All Skills' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'languages', label: 'Languages' },
    { value: 'databases', label: 'Databases' },
    { value: 'devops', label: 'DevOps & Cloud' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">My technical expertise and proficiency levels</p>
        </div>
        
        {/* Filter tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-10 animate-on-scroll" style={{animationDelay: '0.2s'}}>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value as CategoryFilter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                "border border-border hover:border-primary/50",
                filter === category.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/30 text-foreground hover:bg-muted"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className={cn(
                "p-5 rounded-lg border border-border bg-card/30 animate-on-scroll",
                "hover:border-primary/30 transition-all duration-300",
                "transform hover:-translate-y-1"
              )}
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm font-medium text-primary">{skill.level}%</span>
              </div>
              
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%`, transition: 'width 1.5s ease-out' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}