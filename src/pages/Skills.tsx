import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Database, Code, Globe, Shield, Cloud, ArrowRight } from "lucide-react";

const Skills = () => {
  const careerPaths = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning (AI/ML)",
      description: "Build intelligent systems that can learn and make decisions",
      color: "primary",
      href: "/skills/ai-ml"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Extract insights from data to drive business decisions",
      color: "accent",
      href: "/skills/data-science"
    },
    {
      icon: Code,
      title: "Full Stack Development with Java",
      description: "Build end-to-end applications using Java ecosystem",
      color: "tech-cyan",
      href: "/skills/java-fullstack"
    },
    {
      icon: Globe,
      title: "MERN Stack Development",
      description: "Create modern web applications using MongoDB, Express, React, Node.js",
      color: "primary",
      href: "/skills/mern-stack"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect systems and data from digital threats",
      color: "accent",
      href: "/skills/cybersecurity"
    },
    {
      icon: Cloud,
      title: "Cloud Computing & DevOps",
      description: "Deploy and manage applications in cloud environments",
      color: "tech-cyan",
      href: "/skills/cloud-devops"
    }
  ];

  const handleCardClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-tech-cyan/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Career Paths in CS/IT</h1>
            <p className="text-xl text-muted-foreground">Choose your specialization and follow a structured learning path</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPaths.map((path) => (
              <Card 
                key={path.title} 
                className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border-border/50 bg-[var(--gradient-card)] cursor-pointer"
                onClick={() => handleCardClick(path.href)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-${path.color}/10 border border-${path.color}/20`}>
                      <path.icon className={`h-6 w-6 text-${path.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{path.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{path.description}</p>
                  <Button variant="ghost" className="w-full group-hover:bg-accent/10 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;