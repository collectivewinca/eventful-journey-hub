import { Facebook, Twitter, Linkedin, Copyright } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary mt-16 py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Copyright className="h-4 w-4" />
            <span>{new Date().getFullYear()} EventBuoy. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};