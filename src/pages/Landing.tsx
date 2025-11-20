import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, BookOpen, Lightbulb, Sparkles } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Faith Companion</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Welcome to{" "}
            <span className="text-gradient">PreachBro</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Your personalized AI assistant for theological study, sermon preparation, 
            and spiritual growth. Built for pastors, preachers, and faith seekers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white shadow-divine">
              <Link to="/login">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="gradient-card rounded-xl p-8 shadow-soft border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">AI Chat Assistant</h3>
            <p className="text-muted-foreground">
              Engage in theological discussions with AI that adapts to your preaching style and preferences.
            </p>
          </div>

          <div className="gradient-card rounded-xl p-8 shadow-soft border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Sermon Generator</h3>
            <p className="text-muted-foreground">
              Create powerful sermons instantly or refine your existing scripts with AI assistance.
            </p>
          </div>

          <div className="gradient-card rounded-xl p-8 shadow-soft border border-border">
            <div className="w-12 h-12 rounded-lg bg-info/10 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-info" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Resource Finder</h3>
            <p className="text-muted-foreground">
              Access quotes from church fathers, commentaries, inspiring stories, and appropriate humor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
