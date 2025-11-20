import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, BookOpen, Search, Sparkles, ArrowRight, CheckCircle2, Zap } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Hero Section */}
      <div className="relative container mx-auto px-4 pt-16 pb-24">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-divine flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">PreachBro</span>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" className="text-foreground hover:text-primary">
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary-dark text-white shadow-divine">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-glass">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Transform Your{" "}
            <span className="text-gradient animate-pulse">Ministry</span>
            <br />
            with AI
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            PreachBro combines cutting-edge AI with deep theological understanding 
            to help you craft powerful sermons, study scripture, and grow your ministry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white shadow-glow group text-lg px-8">
              <Link to="/register" className="flex items-center gap-2">
                Start Free Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-card text-lg px-8">
              <Link to="/login">Watch Demo</Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Free forever plan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative container mx-auto px-4 py-24">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-muted-foreground">Powerful tools designed for modern ministry</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="group gradient-card rounded-2xl p-8 border border-border/50 shadow-soft hover:shadow-divine transition-all duration-300 hover-scale backdrop-blur-glass">
            <div className="w-16 h-16 rounded-xl bg-gradient-divine flex items-center justify-center mb-6 shadow-glow group-hover:rotate-6 transition-transform">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">AI Theological Chat</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Engage in deep theological discussions with an AI that understands your 
              preaching style, biblical interpretation preferences, and denominational background.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Contextual scripture analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Personalized responses
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Multi-translation support
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="group gradient-card rounded-2xl p-8 border border-border/50 shadow-soft hover:shadow-divine transition-all duration-300 hover-scale backdrop-blur-glass">
            <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6 shadow-glow group-hover:rotate-6 transition-transform">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Sermon Generator</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Create compelling, biblically-sound sermons in minutes or enhance your 
              existing manuscripts with AI-powered insights and refinements.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Instant sermon outlines
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                PDF upload & enhancement
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Style customization
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="group gradient-card rounded-2xl p-8 border border-border/50 shadow-soft hover:shadow-divine transition-all duration-300 hover-scale backdrop-blur-glass">
            <div className="w-16 h-16 rounded-xl bg-info flex items-center justify-center mb-6 shadow-glow group-hover:rotate-6 transition-transform">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Resource Library</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Access an extensive collection of quotes from church fathers, modern 
              commentaries, inspiring stories, and appropriate humor for every sermon.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-info" />
                Church fathers quotes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-info" />
                Biblical commentaries
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-info" />
                Sermon illustrations
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto gradient-card rounded-3xl p-12 border border-primary/20 shadow-divine text-center backdrop-blur-glass">
          <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Ministry?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of pastors and preachers using AI to create more impactful sermons 
            and deepen their theological understanding.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white shadow-glow text-lg px-12">
            <Link to="/register" className="flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-divine flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gradient">PreachBro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 PreachBro. Empowering ministry through AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
