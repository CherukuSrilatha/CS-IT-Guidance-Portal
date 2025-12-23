import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, BookOpen, Clock, Briefcase, ArrowLeft } from "lucide-react";

const DataScienceCareer = () => {
  const learningPath = [
    {
      year: "1st Year",
      focus: "Mathematical Foundation",
      skills: ["Statistics & Probability", "Excel/Google Sheets", "Basic SQL", "Python Fundamentals"]
    },
    {
      year: "2nd Year",
      focus: "Data Analysis Skills",
      skills: ["Data Cleaning & Preprocessing", "Pandas & NumPy", "Data Visualization", "Exploratory Data Analysis"]
    },
    {
      year: "3rd Year",
      focus: "Advanced Analytics + Projects",
      skills: ["Machine Learning", "Statistical Modeling", "Big Data Tools", "Business Intelligence"]
    },
    {
      year: "4th Year",
      focus: "Revision & Job Preparation",
      skills: ["Revise Core Concepts", "Practice DSA & System Design Basics", "Apply for Internships & Jobs", "Work on Resume & Interview Prep"]
    }
  ];

  const keySkills = [
    "Python/R Programming", "SQL & Databases", "Statistics & Mathematics", "Data Visualization",
    "Machine Learning", "Excel & BI Tools", "Big Data Technologies", "Business Acumen",
    "Communication Skills", "Domain Knowledge", "Cloud Platforms", "Data Ethics"
  ];

  const learningResources = [
    { 
      platform: "Coursera", 
      url: "https://www.coursera.org", 
      courses: ["IBM Data Science Specialization", "Google Data Analytics Certificate"] 
    },
    { 
      platform: "edX", 
      url: "https://www.edx.org", 
      courses: ["MIT Introduction to Data Science", "Harvard Data Science"] 
    },
    { 
      platform: "Kaggle", 
      url: "https://www.kaggle.com", 
      courses: ["Kaggle Learn Courses", "Data Science Competitions"] 
    },
    { 
      platform: "DataCamp", 
      url: "https://www.datacamp.com", 
      courses: ["Python for Data Science", "R Programming Track"] 
    },
    { 
      platform: "Books (Amazon)", 
      url: "https://www.amazon.com", 
      courses: ["Python for Data Analysis", "The Data Science Handbook"] 
    }
  ];

  const careerOpportunities = [
    { role: "Data Scientist", description: "Extract insights from data to drive business decisions" },
    { role: "Data Analyst", description: "Analyze data trends and create reports for stakeholders" },
    { role: "Business Intelligence Analyst", description: "Create dashboards and business reports" },
    { role: "Quantitative Analyst", description: "Apply statistical methods in finance and trading" },
    { role: "Market Research Analyst", description: "Analyze market conditions and consumer behavior" },
    { role: "Data Engineer", description: "Build and maintain data infrastructure and pipelines" }
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

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                <Database className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Data Science</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Extract meaningful insights from data to drive business decisions. Combine statistics, programming, 
              and domain expertise to solve complex problems and predict future trends.
            </p>
          </div>

          {/* What is Data Science */}
          <section className="mb-12">
            <Card className="bg-[var(--gradient-card)] border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">What is Data Science About?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, 
                  and systems to extract knowledge and insights from structured and unstructured data. It combines 
                  statistics, mathematics, programming, and domain expertise to analyze complex data sets and make 
                  data-driven decisions that impact business strategy and operations.
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
                      <Clock className="h-5 w-5 text-accent" />
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
                      <BookOpen className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:underline text-primary"
                        >
                          {resource.platform}
                        </a>
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {resource.courses.map((course) => (
                        <li key={course} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
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
                  Data Science continues to be one of the fastest-growing fields with increasing demand across 
                  industries. Companies are investing heavily in data-driven decision making, creating abundant 
                  opportunities for skilled professionals. Expected growth rate: 35% through 2030, much faster than average.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataScienceCareer;
