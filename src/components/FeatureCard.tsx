import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  children: ReactNode;
  icon: ReactNode;
}

export const FeatureCard = ({ title, children, icon }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-primary">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
};