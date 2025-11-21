import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, BookOpen, Search, Sparkles, ArrowRight, CheckCircle2, Zap } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="absolute top-10 md:top-20 -right-20 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 md:bottom-20 -left-20 md:left-10 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Hero Section */}
      <div className="relative container mx-auto px-4 pt-8 md:pt-16 pb-12 md:pb-24">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-12 md:mb-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-divine flex items-center justify-center">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-gradient">PreachBro</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Button asChild variant="ghost" size="sm" className="text-foreground hover:text-primary text-sm md:text-base">
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild size="sm" className="bg-primary hover:bg-primary-dark text-white shadow-divine text-sm md:text-base">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-glass">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powered by Advanced AI</span>
          </div> */}
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transform Your{" "}
            <span className="text-gradient animate-pulse">Ministry</span>
            <br />
            with AI
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            PreachBro combines cutting-edge AI with deep theological understanding 
            to help you craft powerful sermons, study scripture, and grow your ministry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white shadow-glow group text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
              <Link to="/register" className="flex items-center gap-2 justify-center">
                Start Today
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            {/* <Button asChild variant="outline" size="lg" className="border-border hover:bg-card text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
              <Link to="/login">Watch Demo</Link>
            </Button> */}
          </div>

          {/* Social Proof */}
          {/* <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Free forever plan</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative container mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Everything You Need</h2>
          <p className="text-base md:text-xl text-muted-foreground px-4">Powerful tools designed for modern ministry</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="group gradient-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-soft hover:shadow-divine transition-all duration-300 hover-scale backdrop-blur-glass">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-divine flex items-center justify-center mb-4 md:mb-6 shadow-glow group-hover:rotate-6 transition-transform">
              <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-foreground">AI Theological Chat</h3>
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
          <div className="group gradient-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-soft hover:shadow-divine transition-all duration-300 hover-scale backdrop-blur-glass">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-accent flex items-center justify-center mb-4 md:mb-6 shadow-glow group-hover:rotate-6 transition-transform">
              <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-foreground">Sermon Generator</h3>
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
          <div className="group gradient-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-soft hover:shadow-divine transition-all duration-300 hover-scale backdrop-blur-glass sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-info flex items-center justify-center mb-4 md:mb-6 shadow-glow group-hover:rotate-6 transition-transform">
              <Search className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-foreground">Resource Library</h3>
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
      <div className="relative container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-4xl mx-auto gradient-card rounded-2xl md:rounded-3xl p-6 md:p-12 border border-primary/20 shadow-divine text-center backdrop-blur-glass">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Ready to Elevate Your Ministry?</h2>
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Join thousands of pastors and preachers using AI to create more impactful sermons 
            and deepen their theological understanding.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white shadow-glow text-base md:text-lg px-8 md:px-12 w-full sm:w-auto">
            <Link to="/register" className="flex items-center gap-2 justify-center">
              Start Your Journey
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-12 md:mt-24">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-divine flex items-center justify-center">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-base md:text-lg font-bold text-gradient">PreachBro</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground text-center">
              © 2025 PreachBro
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
