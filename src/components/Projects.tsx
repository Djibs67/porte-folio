
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plateforme e-commerce complète avec panier et paiements",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["Laravel", "Bootstrap", "HTML", "CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Educ Platform",
      description: "Plateforme de gestion d'une ecole",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "GEC (Gestion d'Entreprise Commerciale)",
      description: "Plateforme de gestion d'une entreprise commerciale",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Panel Administration",
      description:
        "Tableau de bord moderne avec visualisations de données en temps réel",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Laravel", "Filament", "Tailwind CSS", "Alpine.js"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "API REST",
      description:
        "API REST pour la collecte des données et pour la partie elearning",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      technologies: ["Laravel", "Sanctum",],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Mobile App",
      description:
        "Application mobile cross-platform pour la gestion de tâches",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      technologies: ["React Native", "Firebase", "Redux"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
