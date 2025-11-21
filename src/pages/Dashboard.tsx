import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, BookOpen, Search, User, LogOut } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gradient">PreachBro</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/">
                <LogOut className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">
              Welcome back, Brother!
            </h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
              Choose a tool to continue your ministry work
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* AI Chat */}
            <Link to="/chat" className="group">
              <div className="gradient-card rounded-2xl p-6 md:p-8 shadow-soft border border-border hover:shadow-divine transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-foreground">AI Chat</h3>
                <p className="text-muted-foreground">
                  Have theological discussions and get personalized guidance
                </p>
              </div>
            </Link>

            {/* Sermon Generator */}
            <Link to="/sermon-generator" className="group">
              <div className="gradient-card rounded-2xl p-6 md:p-8 shadow-soft border border-border hover:shadow-divine transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-foreground">Sermon Generator</h3>
                <p className="text-muted-foreground">
                  Create or enhance your sermons with AI assistance
                </p>
              </div>
            </Link>

            {/* Resource Finder */}
            <Link to="/resources" className="group sm:col-span-2 md:col-span-1">
              <div className="gradient-card rounded-2xl p-6 md:p-8 shadow-soft border border-border hover:shadow-divine transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-info/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6 md:w-8 md:h-8 text-info" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-foreground">Resources</h3>
                <p className="text-muted-foreground">
                  Find quotes, commentaries, and stories for your sermons
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
