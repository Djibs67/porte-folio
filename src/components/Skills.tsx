
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Code2, Database, Cpu } from "lucide-react";

const Skills = () => {
  const skillDetails: Record<string, { projects: string[], description: string }> = {
    "Next.js": {
      projects: ["PharmaSaaS (Multi-tenant)", "CSI FAABA"],
      description: "Framework React pour des applications web performantes avec rendu hybride (SSR/ISR)."
    },
    "React.js": {
      projects: ["PharmaSaaS (Multi-tenant)", "CSI FAABA"],
      description: "Développement d'interfaces utilisateur interactives, fluides et réutilisables."
    },
    "Tailwind CSS": {
      projects: ["PharmaSaaS (Multi-tenant)", "CSI FAABA", "Filament Admin Panel"],
      description: "Design système moderne, responsive et adapté aux mobiles."
    },
    "TypeScript": {
      projects: ["PharmaSaaS (Multi-tenant)", "CSI FAABA"],
      description: "Développement sécurisé et typé pour des bases de code robustes."
    },
    "JavaScript": {
      projects: ["Tous les projets frontend"],
      description: "Logique client interactive et manipulation dynamique du DOM."
    },
    "HTML": {
      projects: ["Tous les projets"],
      description: "Bases de structure sémantique et accessibilité web."
    },
    "CSS": {
      projects: ["Tous les projets"],
      description: "Styles personnalisés, transitions fluides et animations."
    },
    "Laravel": {
      projects: ["API REST (E-Learning)", "Filament Admin Panel"],
      description: "Framework PHP de référence pour architectures MVC et APIs sécurisées."
    },
    "PHP": {
      projects: ["API REST (E-Learning)", "Filament Admin Panel"],
      description: "Programmation backend modulaire et logique métier."
    },
    "Supabase": {
      projects: ["PharmaSaaS (Multi-tenant)", "CSI FAABA"],
      description: "Backend-as-a-Service pour l'authentification et les bases PostgreSQL."
    },
    "MySQL": {
      projects: ["Gestion Agricole Mobile", "API REST (E-Learning)"],
      description: "Conception de bases de données relationnelles et optimisation des requêtes."
    },
    "SQL Server": {
      projects: ["Projets d'entreprise"],
      description: "Gestion de bases de données relationnelles en environnement Windows Server."
    },
    "Git / GitHub": {
      projects: ["Tous les projets"],
      description: "Contrôle de version, travail d'équipe et workflows Git Flow."
    },
    "REST APIs": {
      projects: ["API REST (E-Learning)", "Gestion Agricole Mobile"],
      description: "Conception de routes d'API documentées, robustes et sécurisées."
    },
    "Insomnia": {
      projects: ["API REST (E-Learning)", "Gestion Agricole Mobile"],
      description: "Validation, débogage et tests de routes d'API REST."
    },
    "Canva": {
      projects: ["Création de contenus graphiques", "Présentations client"],
      description: "Conception de visuels de communication, présentations et supports graphiques de projets."
    },
    "Microsoft Office": {
      projects: ["Documentation projet", "Rédaction de spécifications"],
      description: "Rédaction de cahiers des charges, rapports et documentations techniques (Word, Excel)."
    },
    "Asana / Trello": {
      projects: ["Suivi de sprints", "Gestion de tickets"],
      description: "Planification agile, suivi de tâches (méthode Kanban) et coordination de projet."
    },
    "Slack": {
      projects: ["Collaboration d'équipe", "Intégrations DevOps"],
      description: "Communication d'équipe synchrone et intégration de webhooks de notifications (GitHub, CI/CD)."
    },
    "SaaS (Multi-tenant)": {
      projects: ["PharmaSaaS (Multi-tenant)"],
      description: "Architecture logicielle avec isolation étanche des données clients."
    }
  };

  const skillCategories = [
    {
      title: "Frontend & UI",
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      color: "bg-blue-500/20 text-blue-300 border border-blue-500/30"
    },
    {
      title: "Backend & Données",
      icon: <Database className="w-8 h-8 text-green-400" />,
      skills: ["Laravel", "PHP", "Supabase", "MySQL", "SQL Server"],
      color: "bg-green-500/20 text-green-300 border border-green-500/30"
    },
    {
      title: "Outils & Collaboration",
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      skills: ["Git / GitHub", "REST APIs", "Insomnia", "Canva", "Microsoft Office", "Trello / Asana", "Slack", "SaaS (Multi-tenant)"],
      color: "bg-purple-500/20 text-purple-300 border border-purple-500/30"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Survolez une compétence pour en savoir plus sur son utilisation et les projets associés.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-[1.03] flex flex-col items-center text-center shadow-lg"
            >
              <div className="mb-4 p-3 bg-slate-900/50 rounded-full border border-slate-700/30">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center w-full">
                {category.skills.map((skill, skillIndex) => {
                  const details = skillDetails[skill];
                  const side = skillIndex < category.skills.length / 2 ? "top" : "bottom";
                  return (
                    <Tooltip key={skill}>
                      <TooltipTrigger asChild>
                        <span className="inline-block hover:scale-110 transition-transform cursor-pointer">
                          <Badge 
                            className={`${category.color} py-1.5 px-3 text-sm`}
                          >
                            {skill}
                          </Badge>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent 
                        side={side}
                        sideOffset={8}
                        className="bg-slate-950 border border-slate-800 text-gray-200 p-3 max-w-xs rounded-lg shadow-2xl z-50"
                      >
                        <div className="space-y-1.5">
                          <p className="font-semibold text-white border-b border-slate-800 pb-1 flex items-center justify-between gap-2 text-left">
                            <span>{skill}</span>
                          </p>
                          {details?.description && (
                            <p className="text-xs text-gray-300 leading-relaxed text-left">
                              {details.description}
                            </p>
                          )}
                          {details?.projects && details.projects.length > 0 && (
                            <div className="pt-1.5 text-left">
                              <p className="text-[9px] uppercase font-bold tracking-wider text-blue-400">
                                Projets associés :
                              </p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {details.projects.map((proj) => (
                                  <span 
                                    key={proj} 
                                    className="text-[9px] bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded text-gray-400 font-medium"
                                  >
                                    {proj}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
