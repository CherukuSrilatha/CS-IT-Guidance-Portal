import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, BookOpen, Clock, Briefcase, ArrowLeft } from "lucide-react";

const JavaFullStackCareer = () => {
  const learningPath = [
    {
      year: "1st Year",
      focus: "Programming Fundamentals",
      skills: ["Java Basics", "OOP Concepts", "Data Structures", "Basic HTML/CSS"]
    },
    {
      year: "2nd Year",
      focus: "Core Java & Web Basics",
      skills: ["Advanced Java", "Collections Framework", "JavaScript", "Servlet/JSP", "MySQL"]
    },
    {
      year: "3rd Year",
      focus: "Framework & Full Stack",
      skills: ["Spring Boot", "React/Angular", "RESTful APIs", "Microservices", "JPA/Hibernate"]
    }
  ];

  const keySkills = [
    "Core Java", "Spring Framework", "Spring Boot", "Hibernate/JPA", "MySQL/PostgreSQL",
    "RESTful Web Services", "React/Angular", "JavaScript/TypeScript", "Maven/Gradle",
    "Git Version Control", "Microservices", "JUnit Testing"
  ];

  const learningResources = [
    { 
      platform: "Oracle", 
      courses: [
        { name: "Java SE Certification", link: "https://education.oracle.com/java-se-training" },
        { name: "Official Java Tutorials", link: "https://docs.oracle.com/javase/tutorial/" }
      ]
    },
    { 
      platform: "Spring.io", 
      courses: [
        { name: "Spring Boot Guides", link: "https://spring.io/guides" },
        { name: "Spring Framework Docs", link: "https://docs.spring.io/spring-framework/docs/current/reference/html/" }
      ]
    },
    { 
      platform: "Udemy", 
      courses: [
        { name: "Java Full Stack Development", link: "https://www.udemy.com/course/java-full-stack-developer/" },
        { name: "Spring Boot Microservices", link: "https://www.udemy.com/course/microservices-with-spring-boot/" }
      ]
    },
    { 
      platform: "Pluralsight", 
      courses: [
        { name: "Java Path", link: "https://www.pluralsight.com/paths/java" },
        { name: "Spring Framework Track", link: "https://www.pluralsight.com/courses/spring-framework-introduction" }
      ]
    },
    { 
      platform: "Books", 
      courses: [
        { name: "Effective Java by Joshua Bloch", link: "https://amzn.to/3yP4XFn" },
        { name: "Spring in Action", link: "https://amzn.to/4f75KfK" }
      ]
    }
  ];

  const careerOpportunities = [
    { role: "Java Developer", description: "Build enterprise applications using Java ecosystem" },
    { role: "Full Stack Developer", description: "Develop both frontend and backend components" },
    { role: "Backend Developer", description: "Focus on server-side application development" },
    { role: "Microservices Developer", description: "Design and implement microservices architecture" },
    { role: "Enterprise Application Developer", description: "Build large-scale enterprise systems" }
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
              <div className="p-4 rounded-xl bg-tech-cyan/10 border border-tech-cyan/20">
                <Code className="h-12 w-12 text-tech-cyan" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Full Stack Development with Java</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build robust, scalable enterprise applications using Java ecosystem. 
              Master both frontend and backend development with industry-standard frameworks and tools.
            </p>
          </div>

          {/* What is Java Full Stack */}
          <section className="mb-12">
            <Card className="bg-[var(--gradient-card)] border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">What is Java Full Stack Development About?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Java Full Stack Development involves building complete web applications using Java for backend 
                  services and modern frontend technologies. It includes database design, server-side logic, 
                  frontend UI, and deployment. Java’s strong enterprise ecosystem makes it ideal for 
                  large-scale applications in finance, healthcare, and e-commerce.
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
                      <Clock className="h-5 w-5 text-tech-cyan" />
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

            <Card className="mt-8 bg-[var(--gradient-card)] border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">4th Year</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focus only on <strong>revision, interview prep, and applying for jobs/internships</strong>. 
                  Practice DSA, System Design basics, and mock interviews. No new major learning here — 
                  just polishing skills and building confidence.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Learning Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Where to Learn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {learningResources.map((resource) => (
                <Card key={resource.platform} className="bg-[var(--gradient-card)] border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{resource.platform}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {resource.courses.map((course) => (
                        <li key={course.name} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-tech-cyan rounded-full mt-2 flex-shrink-0" />
                          <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            {course.name}
                          </a>
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
                      <Briefcase className="h-5 w-5 text-accent" />
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
                  Java remains one of the most in-demand programming languages in enterprise development. 
                  With cloud computing and microservices adoption, Java full-stack developers are highly valued. 
                  Strong career growth, stability, and high salaries make this an excellent long-term path.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JavaFullStackCareer;
