import { useQuery } from "@tanstack/react-query";
import { CalendarDays, User } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import { startOfToday, startOfWeek, subWeeks, isAfter, parseISO } from "date-fns";

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
  const [timeFilter, setTimeFilter] = useState<string>("all");
  const { data, isLoading, error } = useQuery({
    queryKey: ["feed"],
    queryFn: fetchFeed,
  });

  const filterPosts = (posts: FeedItem[]) => {
    const today = startOfToday();
    const thisWeekStart = startOfWeek(new Date());
    const lastWeekStart = subWeeks(thisWeekStart, 1);

    return posts.filter((post) => {
      const postDate = parseISO(post.date_published);
      
      switch (timeFilter) {
        case "today":
          return isAfter(postDate, today);
        case "thisWeek":
          return isAfter(postDate, thisWeekStart);
        case "lastWeek":
          return isAfter(postDate, lastWeekStart) && !isAfter(postDate, thisWeekStart);
        default:
          return true;
      }
    });
  };

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

  const filteredPosts = data ? filterPosts(data.items) : [];

  return (
    <div className="w-full space-y-8">
      <div className="flex justify-between items-center">
        <div className="prose max-w-none">
          <div
            className="text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: data?.description || "" }}
          />
        </div>
        <Select value={timeFilter} onValueChange={setTimeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Posts</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="thisWeek">This Week</SelectItem>
            <SelectItem value="lastWeek">Last Week</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredPosts.map((item) => (
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