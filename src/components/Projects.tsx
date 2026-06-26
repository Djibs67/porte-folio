import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "PharmaSaaS (Multi-tenant)",
      description:
        "Application SaaS multi-tenant complète dédiée à la gestion des stocks, des ventes, de la facturation et du personnel de plusieurs pharmacies.",
      image:
        "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400&h=250&fit=crop",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Djibsone",
      demo: "https://github.com/Djibsone",
    },
    {
      title: "CSI FAABA",
      description:
        "Développement d'une application de gestion de pharmacie et de dispensaire permettant d'administrer les médicaments, les stocks, les expirations et le personnel via une interface moderne.",
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=250&fit=crop",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Djibsone",
      demo: "https://github.com/Djibsone",
    },
    {
      title: "API REST (E-Learning)",
      description:
        "Conception et développement d'une API REST sécurisée avec Laravel Sanctum dédiée à la collecte de données et à la gestion d'une plateforme d'apprentissage en ligne.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      technologies: ["Laravel", "Sanctum", "REST API", "MySQL"],
      github: "https://github.com/Djibsone",
      demo: "",
    },
    {
      title: "Gestion Agricole Mobile",
      description:
        "Application mobile facilitant la mise en relation pour la revente des surplus agricoles et le suivi en temps réel du cours des produits sur les marchés locaux.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      technologies: ["Flutter", "MySQL", "REST API"],
      github: "https://github.com/Djibsone",
      demo: "https://github.com/Djibsone",
    },
    {
      title: "Filament Admin Panel",
      description:
        "Tableau de bord moderne d'administration avec visualisations de données en temps réel et gestion granulaire des rôles utilisateurs.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Laravel", "Filament", "Tailwind CSS", "Alpine.js"],
      github: "https://github.com/Djibsone",
      demo: "https://github.com/Djibsone",
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
              className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 group flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </div>

              <CardContent className="space-y-4 mt-auto">
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

                <div className="flex gap-4 pt-2 border-t border-slate-600/30">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      Démo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
