import { Hero } from "@/components/Hero";
import { BlogFeed } from "@/components/BlogFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="EventBuoy Insights"
        date="2024-03-19"
        author="EventBuoy Team"
        image="https://insights.eventbuoy.com/insights-eventbuoy-com/production/images/channel-6b79e8086f5ddd405cb75e42fef63830.png"
      />
      
      <main className="container px-4 py-12 sm:px-6 lg:px-8">
        <BlogFeed />
      </main>
    </div>
  );
};

export default Index;