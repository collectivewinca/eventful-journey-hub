import { CalendarDays } from "lucide-react";

interface HeroProps {
  title: string;
  date: string;
  author: string;
  image: string;
}

export const Hero = ({ title, date, author, image }: HeroProps) => {
  return (
    <div className="relative w-full min-h-[60vh] bg-secondary flex items-center justify-center mb-12 animate-fade-up">
      <div className="container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <CalendarDays className="w-5 h-5" />
              <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
              <span>•</span>
              <span>{author}</span>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};