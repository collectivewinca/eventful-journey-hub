import { Linkedin, Copyright } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary mt-16 py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Copyright className="h-4 w-4" />
              <span>2025 EventBuoy. All rights reserved.</span>
            </div>
            <span className="hidden md:inline">•</span>
            <a 
              href="https://myblackbean.ca" 
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by BLACKBEAN
            </a>
          </div>
          <div>
            <a 
              href="https://www.linkedin.com/showcase/eventbuoy/" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};