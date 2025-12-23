import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, BookOpen, Clock, Briefcase, ArrowLeft } from "lucide-react";

const MERNStackCareer = () => {
  const learningPath = [
    {
      year: "1st Year",
      focus: "Web Development Basics",
      skills: ["HTML5 & CSS3", "JavaScript Fundamentals", "Responsive Design", "Git Basics"]
    },
    {
      year: "2nd Year", 
      focus: "Frontend Development",
      skills: ["React.js", "Component-based Architecture", "State Management", "RESTful APIs"]
    },
    {
      year: "3rd Year",
      focus: "Full Stack Integration + Real Projects",
      skills: ["Node.js & Express.js", "MongoDB", "Authentication", "Problem-Solving Projects"]
    },
    {
      year: "4th Year",
      focus: "Revision & Job Preparation",
      skills: ["DSA & System Design Basics", "Mock Interviews", "Internships", "Placement Preparation"]
    }
  ];

  const keySkills = [
    "JavaScript/TypeScript", "React.js", "Node.js", "Express.js", "MongoDB",
    "HTML5 & CSS3", "RESTful APIs", "Git & Version Control", "JSON Web Tokens",
    "State Management", "Responsive Design", "Database Design", "Testing", "Deployment"
  ];

  const learningResources = [
    { platform: "freeCodeCamp", url: "https://www.freecodecamp.org/learn", courses: ["Full Stack JavaScript", "React Certification"] },
    { platform: "Udemy", url: "https://www.udemy.com", courses: ["Complete MERN Stack Bootcamp", "React - The Complete Guide"] },
    { platform: "Coursera", url: "https://www.coursera.org", courses: ["Full-Stack Web Development with React", "MongoDB Basics"] },
    { platform: "YouTube (Traversy Media)", url: "https://www.youtube.com/c/TraversyMedia", courses: ["MERN Tutorials", "React Crash Courses"] },
    { platform: "MongoDB University", url: "https://learn.mongodb.com", courses: ["MongoDB Basics", "MongoDB for Developers"] }
  ];

  const careerOpportunities = [
    { role: "Frontend Developer", description: "Build user interfaces using React and modern JavaScript" },
    { role: "Backend Developer", description: "Develop server-side applications with Node.js and Express" },
    { role: "Full Stack Developer", description: "Handle both frontend and backend development" },
    { role: "MERN Stack Developer", description: "Specialize in MongoDB, Express, React, Node.js stack" },
    { role: "JavaScript Developer", description: "Focus on JavaScript-based applications and frameworks" },
    { role: "Web Application Developer", description: "Build complete web applications from scratch" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-tech-cyan/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = '/skills'} 
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Skills
          </Button>

          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <Globe className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">MERN Stack Development</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create modern, dynamic web applications using MongoDB, Express.js, React, and Node.js. 
              Master the complete JavaScript ecosystem for full-stack development.
            </p>
          </div>

          {/* What is MERN Stack */}
          <section className="mb-12">
            <Card className="bg-[var(--gradient-card)] border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">What is MERN Stack Development About?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  MERN Stack is a JavaScript-based technology stack consisting of MongoDB (database), 
                  Express.js (backend framework), React (frontend library), and Node.js (runtime environment). 
                  This stack allows developers to use JavaScript for both client and server-side development, 
                  creating seamless, efficient web applications with a unified development experience.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Key Skills */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Skills Required</h2>
            <Card className="bg-[var(--gradient-card)] border-border/50">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {keySkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Learning Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">When to Learn - Year-wise Roadmap</h2>
            <div className="grid gap-6">
              {learningPath.map((year) => (
                <Card key={year.year} className="bg-[var(--gradient-card)] border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Clock className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">{year.year}: {year.focus}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {year.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Learning Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Where to Learn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {learningResources.map((resource) => (
                <Card key={resource.platform} className="bg-[var(--gradient-card)] border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-accent" />
                      <CardTitle className="text-lg">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {resource.platform}
                        </a>
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {resource.courses.map((course) => (
                        <li key={course} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {course}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Career Opportunities */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Career Opportunities & Future Scope</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {careerOpportunities.map((career) => (
                <Card key={career.role} className="bg-[var(--gradient-card)] border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5 text-tech-cyan" />
                      <CardTitle className="text-lg">{career.role}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{career.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-8 bg-[var(--gradient-card)] border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Future Scope</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  MERN Stack development is highly sought after in the job market, especially for startups 
                  and modern web applications. The unified JavaScript ecosystem makes development efficient 
                  and reduces context switching. With the growing demand for interactive web applications, 
                  MERN Stack developers enjoy excellent career prospects and competitive compensation.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MERNStackCareer;
