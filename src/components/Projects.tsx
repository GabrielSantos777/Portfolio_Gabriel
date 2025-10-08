import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import planixCover from "@/assets/planix-cover.jpg";
import opinionCover from "@/assets/opinion-cover.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "planix",
      title: "Planix",
      description: "Sistema de gestão financeira pessoal com automação e relatórios.",
      fullDescription: "Planix é uma aplicação completa para gestão financeira pessoal que oferece automação de processos, relatórios detalhados e insights sobre seus gastos. Desenvolvido com React e PHP, utiliza banco de dados SQL para armazenamento seguro e Power BI para visualizações avançadas.",
      image: planixCover,
      technologies: ["React", "PHP", "SQL", "Power BI", "Bootstrap"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      featured: true,
    },
    {
      id: "opinion",
      title: "OpiniON",
      description: "Análise de sentimentos de comentários usando Python e NLP.",
      fullDescription: "OpiniON é uma ferramenta de análise de sentimentos que utiliza técnicas de Processamento de Linguagem Natural (NLP) para extrair insights de comentários e reviews. Desenvolvido em Python com bibliotecas como NLTK e scikit-learn, oferece visualizações interativas dos resultados.",
      image: opinionCover,
      technologies: ["Python", "NLP", "Machine Learning", "Flask"],
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description: "Site pessoal moderno e responsivo.",
      fullDescription: "Portfolio profissional desenvolvido com React e Tailwind CSS, apresentando projetos e habilidades de forma moderna e interativa.",
      image: planixCover,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      featured: false,
    },
    {
      id: "automation",
      title: "Automação n8n",
      description: "Workflows de automação para processos empresariais.",
      fullDescription: "Conjunto de workflows desenvolvidos em n8n para automatizar processos empresariais, integrando diferentes APIs e serviços.",
      image: opinionCover,
      technologies: ["n8n", "APIs", "JavaScript"],
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const allProjects = projects;

  return (
    <section id="projects" className="bg-card/50">
      <div className="section-container">
        <h2 className="section-title">Projetos</h2>
        
        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Destaques</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-lg overflow-hidden card-hover animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Todos os projetos</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-lg overflow-hidden card-hover animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedProject.fullDescription}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full rounded-lg"
                  />
                  
                  <div>
                    <h4 className="font-semibold mb-2">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {selectedProject.githubUrl && (
                      <Button
                        asChild
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10"
                      >
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {selectedProject.demoUrl && (
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
