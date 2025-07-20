import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-muted mt-20 py-8 px-4 text-sm text-muted-foreground bg-background">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Koln Laviste. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="mailto:roward18@gmail.com"
            className="hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/kolnlaviste"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/koln-laviste"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
