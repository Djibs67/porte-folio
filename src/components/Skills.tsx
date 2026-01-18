
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "React.js", "HTML", "CSS", "JavaScript"],
      color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
    },
    {
      title: "Backend",
      skills: ["Laravel", "PHP", "MySQL", "SQL Server"],
      color: "bg-green-500/20 text-green-300 border-green-500/30"
    },
    {
      title: "Outils",
      skills: ["Git", "VS Code", "Google Form", "Figma", "Canva"],
      color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill} 
                    className={`${category.color} hover:scale-110 transition-transform cursor-default`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
