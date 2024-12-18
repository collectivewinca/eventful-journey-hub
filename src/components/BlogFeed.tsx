import { useQuery } from "@tanstack/react-query";
import { CalendarDays, User } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

interface Author {
  name: string;
}

interface FeedItem {
  id: string;
  title: string;
  content_html: string;
  date_published: string;
  image?: string;
  authors?: Author[];
}

interface FeedResponse {
  items: FeedItem[];
  title: string;
  description: string;
}

const fetchFeed = async (): Promise<FeedResponse> => {
  const response = await fetch("https://insight.eventbuoy.com/json/");
  if (!response.ok) {
    throw new Error("Failed to fetch feed");
  }
  return response.json();
};

export const BlogFeed = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["feed"],
    queryFn: fetchFeed,
  });

  if (isLoading) {
    return (
      <div className="w-full grid grid-cols-1 gap-6 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-muted rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-destructive">
        Failed to load posts. Please try again later.
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
      <div className="prose max-w-none mb-12">
        <div
          className="text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: data?.description || "" }}
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {data?.items.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="w-4 h-4" />
                <time dateTime={item.date_published}>
                  {new Date(item.date_published).toLocaleDateString()}
                </time>
                {item.authors?.[0] && (
                  <>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{item.authors[0].name}</span>
                    </div>
                  </>
                )}
              </div>
              <h2 className="text-2xl font-bold tracking-tight">{item.title}</h2>
            </CardHeader>
            <CardContent>
              {item.image && (
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: item.content_html }}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};