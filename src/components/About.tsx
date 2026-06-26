
import { Code, Coffee, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Développeur Full Stack avec plus de 3 ans d'expérience, je me spécialise dans la création d'applications robustes et scalables. Mon expertise s'articule autour des écosystèmes <strong>Laravel (PHP)</strong> et <strong>React / Next.js (TypeScript)</strong>, avec une forte affinité pour la conception d'architectures de bases de données et de solutions multi-tenants (SaaS).
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              J'accompagne les entreprises dans la digitalisation de leurs processus métiers en concevant des outils sur mesure, performants et faciles à maintenir, tout en garantissant un niveau élevé de sécurité et de stabilité.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold">Code Propre</h3>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold">Innovation</h3>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                <Coffee className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold">Passion</h3>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full flex items-center justify-center">
              <div className="w-64 h-64 bg-slate-700 rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
