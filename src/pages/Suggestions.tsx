import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Users, Code, MessageSquare, Target, Lightbulb } from "lucide-react";

const Suggestions = () => {
  const technicalSkills = [
    {
      title: "Data Structures & Algorithms",
      description: "Master problem-solving fundamentals for technical interviews",
      tips: ["Practice daily on LeetCode/HackerRank", "Focus on arrays, strings, trees first", "Learn time/space complexity analysis"]
    },
    {
      title: "Programming Languages",
      description: "Build strong foundation in at least 2-3 languages",
      tips: ["Choose based on career path", "Master syntax and OOP concepts", "Practice with real projects"]
    },
    {
      title: "Projects Development",
      description: "Build portfolio-worthy projects to showcase skills",
      tips: ["Start with simple projects", "Use version control (Git)", "Deploy projects online", "Document your code"]
    },
    {
      title: "Internship Preparation",
      description: "Get ready for competitive internship applications",
      tips: ["Build strong resume", "Practice coding interviews", "Learn about companies", "Network with professionals"]
    }
  ];

  const communicationSkills = [
    {
      title: "Technical Presentations",
      description: "Present your projects and ideas effectively",
      tips: ["Practice explaining technical concepts simply", "Use visual aids and demos", "Record yourself presenting"]
    },
    {
      title: "Teamwork & Collaboration",
      description: "Work effectively in team environments",
      tips: ["Learn collaboration tools (Slack, Jira)", "Practice pair programming", "Participate in group projects"]
    },
    {
      title: "Soft Skills Development",
      description: "Build essential workplace skills",
      tips: ["Develop leadership qualities", "Practice time management", "Learn conflict resolution", "Build emotional intelligence"]
    },
    {
      title: "Mock Interviews",
      description: "Practice interview skills regularly",
      tips: ["Practice with peers", "Use online platforms", "Get feedback on performance", "Work on body language"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-tech-cyan/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Student Success Suggestions</h1>
            <p className="text-xl text-muted-foreground">Essential focus areas for CS/IT students to excel in their careers</p>
          </div>

          {/* Technical Skills Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Technical Skills Focus</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill) => (
                <Card key={skill.title} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 border-border/50 bg-[var(--gradient-card)]">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{skill.title}</CardTitle>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skill.tips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Target className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <p className="text-sm">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Communication Skills Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold">Communication Skills Focus</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {communicationSkills.map((skill) => (
                <Card key={skill.title} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 border-border/50 bg-[var(--gradient-card)]">
                  <CardHeader>
                    <CardTitle className="text-xl text-accent">{skill.title}</CardTitle>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skill.tips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Lightbulb className="h-4 w-4 text-tech-cyan mt-1 flex-shrink-0" />
                          <p className="text-sm">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CGPA Section */}
          <section className="mt-16">
            <Card className="bg-[var(--gradient-card)] border-border/50">
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Maintain a decent CGPA (8.5 to 9) throughout your studies. This ensures eligibility for competitive opportunities and serves as a strong foundation for interviews and placements.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* General Interview Preparation */}
          <section className="mt-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">General Interview Preparation</h2>
            </div>
            
            <Card className="bg-[var(--gradient-card)] border-border/50">
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Irrespective of your career path, focus on these essential topics and skills commonly asked in technical interviews:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Core CS Subjects:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Object-Oriented Programming (OOP)</li>
                      <li>Data Structures & Algorithms (DSA)</li>
                      <li>Operating Systems (OS)</li>
                      <li>Computer Networks (CN)</li>
                      <li>Database Management Systems (DBMS) & SQL</li>
                      <li>Software Engineering & Design Patterns</li>
                      <li>Web Technologies (HTML, CSS, JS, React basics)</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Additional Skills:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Version Control (Git/GitHub)</li>
                      <li>Problem Solving & Competitive Coding</li>
                      <li>Basic Cloud & DevOps Concepts (AWS/GCP/Docker)</li>
                      <li>Basic AI/ML knowledge (optional, if interested)</li>
                      <li>Communication & Soft Skills</li>
                      <li>Project Documentation & Presentation Skills</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-muted-foreground mt-4">
                  Focus on these areas consistently to be well-prepared for technical interviews, irrespective of the domain or role you target.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="max-w-3xl mx-auto bg-[var(--gradient-card)] border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="text-muted-foreground mb-6">
                  Success comes from consistent effort and continuous learning. Start with one area and gradually expand your skills.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button onClick={() => window.location.href = '/skills'}>
                    Explore Career Paths
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = '/projects'}>
                    View Project Ideas
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Suggestions;
