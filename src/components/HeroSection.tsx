import { Button } from "@/components/ui/button";
import { ArrowRight, Star, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-accent to-tech-cyan rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-tech-cyan to-primary rounded-full blur-lg animate-pulse delay-300"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-7xl font-bold leading-tight animate-fade-in">
                  CS/IT Guidance Portal
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in delay-200">
                  What to learn each semester, where to learn it, and how to build projects, profiles, and internships—early and confidently.
                </p>
              </div>
            </div>

          </div>

          <div className="relative animate-fade-in delay-400">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-700 transform hover:scale-105">
              <img
                src={heroImage}
                alt="Students coding together"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/20"></div>
              
              {/* Overlay inspiration text */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <p className="text-sm font-medium text-foreground">
                  💭 "The best time to plant a tree was 20 years ago. The second best time is now."
                </p>
                <p className="text-xs text-muted-foreground mt-1">Start your coding journey today!</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;