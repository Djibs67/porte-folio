
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      toast({
        title: "Configuration requise",
        description: "Veuillez ajouter votre clé VITE_WEB3FORMS_KEY dans votre fichier .env pour activer l'envoi de messages.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nouveau message portfolio de ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message envoyé !",
          description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Erreur lors de l'envoi",
          description: result.message || "Une erreur est survenue.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur réseau",
        description: "Impossible de joindre le serveur d'envoi. Vérifiez votre connexion.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contactez-moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Discutons de votre projet
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Vous avez un projet en tête ? N'hésitez pas à me contacter. 
                Je serais ravi de discuter de vos besoins et de voir comment 
                je peux vous aider à concrétiser vos idées.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                <Mail className="w-6 h-6 text-blue-400" />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">crackedtamou@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                <Phone className="w-6 h-6 text-green-400" />
                <div>
                  <h4 className="text-white font-semibold">Téléphone</h4>
                  <p className="text-gray-300">+229 01 95 15 77 60</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                <MapPin className="w-6 h-6 text-red-400" />
                <div>
                  <h4 className="text-white font-semibold">Localisation</h4>
                  <p className="text-gray-300">Cotonou - Akpakpa, Bénin</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-slate-800/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Envoyez un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Votre message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
