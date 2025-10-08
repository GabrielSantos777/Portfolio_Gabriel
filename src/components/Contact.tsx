import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <h2 className="section-title">Contato</h2>
        
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
          <p className="text-xl text-muted-foreground">
            Quer conversar ou trabalhar comigo? Entre em contato!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold neon-glow w-full sm:w-auto"
            >
              <a href="mailto:contato@batmandev.com" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Enviar Email
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="pt-8">
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Informações de Contato</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:contato@batmandev.com" className="hover:text-primary transition-colors">
                    contato@batmandev.com
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Github className="h-4 w-4 text-primary" />
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/batmandev
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Linkedin className="h-4 w-4 text-primary" />
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/batmandev
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
