import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockResources = {
  quotes: [
    { id: 1, author: "Augustine of Hippo", text: "Pray as though everything depended on God. Work as though everything depended on you.", category: "Prayer" },
    { id: 2, author: "Thomas Aquinas", text: "To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.", category: "Faith" },
    { id: 3, author: "John Chrysostom", text: "The road to Hell is paved with the bones of priests and monks, and the skulls of bishops are the lamp posts that light the path.", category: "Accountability" },
  ],
  commentaries: [
    { id: 1, reference: "Matthew 5:14-16", title: "The Light of the World", summary: "Believers are called to be visible witnesses of God's grace..." },
    { id: 2, reference: "Romans 8:28", title: "God Works for Good", summary: "This verse provides comfort that God orchestrates all things..." },
  ],
  stories: [
    { id: 1, title: "The Broken Window", category: "Forgiveness", summary: "A story about a boy who breaks a window and learns about grace..." },
    { id: 2, title: "The Shepherd's Search", category: "God's Love", summary: "An illustration of how God pursues us relentlessly..." },
  ],
};

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold text-foreground">Resource Finder</h1>
        </div>
      </header>

      {/* Search Bar */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 max-w-3xl">
          <div className="flex gap-2">
            <Input
              placeholder="Search quotes, commentaries, stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button className="bg-primary hover:bg-primary-dark text-white">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Tabs defaultValue="quotes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto">
            <TabsTrigger value="quotes" className="text-xs md:text-base py-2 md:py-2.5">Quotes</TabsTrigger>
            <TabsTrigger value="commentaries" className="text-xs md:text-base py-2 md:py-2.5">Commentaries</TabsTrigger>
            <TabsTrigger value="stories" className="text-xs md:text-base py-2 md:py-2.5">Stories</TabsTrigger>
          </TabsList>

          <TabsContent value="quotes" className="space-y-4 mt-6">
            {mockResources.quotes.map((quote) => (
              <div key={quote.id} className="gradient-card rounded-xl p-6 shadow-soft border border-border">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {quote.category}
                  </span>
                </div>
                <p className="text-foreground text-lg mb-3 italic">"{quote.text}"</p>
                <p className="text-muted-foreground font-medium">— {quote.author}</p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="commentaries" className="space-y-4 mt-6">
            {mockResources.commentaries.map((commentary) => (
              <div key={commentary.id} className="gradient-card rounded-xl p-6 shadow-soft border border-border">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {commentary.reference}
                  </span>
                </div>
                <h3 className="text-foreground text-xl font-semibold mb-2">{commentary.title}</h3>
                <p className="text-muted-foreground">{commentary.summary}</p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="stories" className="space-y-4 mt-6">
            {mockResources.stories.map((story) => (
              <div key={story.id} className="gradient-card rounded-xl p-6 shadow-soft border border-border">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-info/10 text-info text-xs font-medium">
                    {story.category}
                  </span>
                </div>
                <h3 className="text-foreground text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-muted-foreground">{story.summary}</p>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Resources;
