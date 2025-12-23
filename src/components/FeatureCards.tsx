import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, Users, Trophy, FileText, Brain, ArrowRight, Calendar, User } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Skills",
      description: "Semester-wise skill roadmap based on your domain. Know exactly what to learn and when.",
      color: "primary",
      stats: "All Domains",
      href: "/skills"
    },
    {
      icon: Briefcase,
      title: "Internships",
      description: "What internships are, where to find them, and how to prepare before companies start hiring.",
      color: "accent",
      stats: "Complete Guide",
      href: "/internships"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Why mentorship matters and how to find the right mentors for your career growth.",
      color: "tech-cyan",
      stats: "Expert Tips",
      href: "/mentorship"
    },
    {
      icon: Trophy,
      title: "Projects",
      description: "Project ideas for each semester and how to showcase them effectively.",
      color: "primary",
      stats: "All Levels",
      href: "/projects"
    },
    {
      icon: FileText,
      title: "Resume & Portfolio",
      description: "Build professional resume, GitHub, and LinkedIn profiles that recruiters notice.",
      color: "accent",
      stats: "Step-by-Step",
      href: "/resume"
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Introduction to coding platforms like LeetCode and how to start your practice journey.",
      color: "tech-cyan",
      stats: "Beginner Guide",
      href: "/problems"
    },
    {
      icon: Calendar,
      title: "Hackathons",
      description: "Find and participate in hackathons to showcase your skills and build your network.",
      color: "primary",
      stats: "All Events",
      href: "/hackathons"
    },
    {
      icon: User,
      title: "Profiles",
      description: "Showcase your work and connect with other students and professionals in your field.",
      color: "accent",
      stats: "Community",
      href: "/profiles"
    },
    {
      icon: Brain,
      title: "Suggestions",
      description: "Essential focus areas for technical and communication skills development.",
      color: "primary",
      stats: "Success Tips",
      href: "/suggestions"
    }
  ];

  const handleCardClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-tech-cyan/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Guidance Sections
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What to learn and where to learn it—semester by semester, with practical steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border-border/50 bg-[var(--gradient-card)] cursor-pointer"
              onClick={() => handleCardClick(feature.href)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-${feature.color}/10 border border-${feature.color}/20`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium bg-muted px-2 py-1 rounded-full">
                    {feature.stats}
                  </span>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{feature.description}</p>
                <Button variant="ghost" className="w-full group-hover:bg-accent/10 transition-colors">
                  Explore {feature.title}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;