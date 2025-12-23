import { Button } from "@/components/ui/button";
import { Code, ArrowRight, BookOpen, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <Code className="h-16 w-16 text-primary animate-pulse" />
              <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              CS/IT Guidance Portal
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your roadmap to success in Computer Science and IT. Get semester-wise guidance, 
            internship tips, project ideas, and career roadmaps—all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3">
            <BookOpen className="h-8 w-8 text-primary mx-auto" />
            <h3 className="font-semibold">Semester Roadmaps</h3>
            <p className="text-sm text-muted-foreground">Domain-wise learning paths for each semester</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3">
            <Users className="h-8 w-8 text-primary mx-auto" />
            <h3 className="font-semibold">Career Guidance</h3>
            <p className="text-sm text-muted-foreground">Internships, profiles, and resume building</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3">
            <Trophy className="h-8 w-8 text-primary mx-auto" />
            <h3 className="font-semibold">Project Ideas</h3>
            <p className="text-sm text-muted-foreground">Hands-on projects and problem solving</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/signup">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/signin">
                Sign In
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Start your journey to becoming a skilled CS/IT professional
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;