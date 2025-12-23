import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Hash, Brain, Database, Code, Globe, Briefcase } from "lucide-react";

const Projects = () => {
  const projectExamples = [
    {
      domain: "AI/ML",
      icon: Brain,
      color: "primary",
      projects: ["Chatbot", "Image Classification", "Stock Prediction", "Recommendation System"]
    },
    {
      domain: "Data Science",
      icon: Database,
      color: "accent",
      projects: ["Uber Trip Analysis", "E-commerce Data Analysis", "Customer Segmentation", "Sales Forecasting"]
    },
    {
      domain: "Full Stack Java",
      icon: Code,
      color: "tech-cyan",
      projects: ["Online Shopping System", "College Management System", "Library Management", "Banking Application"]
    },
    {
      domain: "MERN Stack",
      icon: Globe,
      color: "primary",
      projects: ["CS/IT Guidance Portal", "Social Media App", "Task Management System", "E-learning Platform"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-tech-cyan/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Projects Guide</h1>
            <p className="text-xl text-muted-foreground">Build impressive projects to showcase your skills and knowledge</p>
          </div>

          <div className="space-y-12">
            {/* Importance of Doing Projects Early */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Importance of Doing Projects Early</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Practical Learning</h4>
                    <p className="text-muted-foreground">Apply theoretical knowledge to real-world problems and gain hands-on experience.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Portfolio Building</h4>
                    <p className="text-muted-foreground">Create a strong portfolio that demonstrates your skills to employers and universities.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Skill Development</h4>
                    <p className="text-muted-foreground">Develop problem-solving abilities and learn new technologies through practice.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Career Advantage</h4>
                    <p className="text-muted-foreground">Stand out in interviews and applications with tangible proof of your capabilities.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Number of Projects */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Hash className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Recommended Number of Projects</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">At least 2-3 good projects related to your career path</h4>
                  <p className="text-muted-foreground">
                    Focus on quality over quantity. It's better to have 2-3 well-documented, feature-rich projects 
                    that demonstrate your skills thoroughly than to have many incomplete or basic projects. 
                    Each project should solve a real problem and showcase different aspects of your technical abilities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Project Examples */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-tech-cyan/10">
                    <Code className="h-6 w-6 text-tech-cyan" />
                  </div>
                  <CardTitle className="text-2xl">Project Examples by Domain</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {projectExamples.map((category) => (
                    <div key={category.domain} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-2 rounded-lg bg-${category.color}/10`}>
                          <category.icon className={`h-5 w-5 text-${category.color}`} />
                        </div>
                        <h4 className="font-semibold text-lg">{category.domain}</h4>
                      </div>
                      <div className="space-y-2">
                        {category.projects.map((project) => (
                          <div key={project} className="p-2 bg-background rounded text-sm">
                            {project}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Real-World Projects Advice */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Work on Real-World Problem Statements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Instead of copying existing projects from GitHub or tutorials, focus on identifying real-world 
                  problems in your community, college, or daily life and build innovative solutions. 
                  Recruiters highly value originality and problem-solving ability. Even a small but unique project 
                  demonstrates creativity and initiative.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
