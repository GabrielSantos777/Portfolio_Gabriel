import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Batman Dev — Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contato@batmandev.com"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
