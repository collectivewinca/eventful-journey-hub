import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { Music, Users, ShoppingBag, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="MINY FOR Artists: Your Complete Toolkit to Own Your Career"
        date="2024-12-18T20:43:37.294Z"
        author="Alet Viegas, BLACKBEAN"
        image="https://insights.eventbuoy.com/insights-eventbuoy-com/production/images/item-4f40afec0f2a9cc560a3b2f9a050c79d.jpg"
      />
      
      <main className="container px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose max-w-none mb-16">
          <p className="text-xl text-muted-foreground mb-8">
            EventBuoy is your all-in-one mobile app for seamless event management and unforgettable experiences. 
            Designed for organizers and attendees, it centralizes event details, enhances communication, and fosters vibrant communities.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8">Features for Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <FeatureCard title="Fan Monetization" icon={<Music className="w-6 h-6" />}>
            Sell mixtapes and exclusive music content directly to fans.
          </FeatureCard>
          <FeatureCard title="CRM for Artists" icon={<Users className="w-6 h-6" />}>
            Manage fan data and engagement insights.
          </FeatureCard>
          <FeatureCard title="Merch Management" icon={<ShoppingBag className="w-6 h-6" />}>
            Create, sell, and track merchandise seamlessly.
          </FeatureCard>
          <FeatureCard title="Event Management" icon={<Calendar className="w-6 h-6" />}>
            Plan shows, listening sessions, and fan meetups.
          </FeatureCard>
        </div>

        <div className="bg-secondary rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Artists Choose MINY</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              Build a loyal fanbase with direct engagement
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              Retain control of your music and earnings
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              Leverage cutting-edge tools for scaling your career
            </li>
          </ul>
        </div>

        <div className="text-center">
          <a 
            href="https://minyvinyl.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Join MINY Today
          </a>
        </div>
      </main>
    </div>
  );
};

export default Index;