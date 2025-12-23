import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, BookOpen, Clock, Briefcase, ArrowLeft } from "lucide-react";

const AIMLCareer = () => {
  const learningPath = [
    {
      year: "1st Year",
      focus: "Foundation Building",
      skills: [
        "Mathematics (Statistics, Linear Algebra)",
        "Python Programming",
        "Basic Data Structures",
        "OOPS Concepts"
      ]
    },
    {
      year: "2nd Year",
      focus: "Core Concepts",
      skills: [
        "Machine Learning Fundamentals",
        "Data Analysis with Pandas/NumPy",
        "Basic Neural Networks",
        "Computer Networks, Operating Systems, DBMS & SQL"
      ]
    },
    {
      year: "3rd Year",
      focus: "Specialization & Real-World Projects",
      skills: [
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "TensorFlow/PyTorch",
        "Start real-world problem-solving projects (internships, hackathons)"
      ]
    },
    {
      year: "4th Year",
      focus: "Revision & Job Preparation",
      skills: [
        "Revise all core concepts and AI/ML topics",
        "Apply for internships/jobs",
        "Prepare resume, portfolio, and interview practice"
      ]
    }
  ];

  const keySkills = [
    "Python/R Programming",
    "Machine Learning Algorithms",
    "Deep Learning",
    "Data Analysis",
    "Statistics & Mathematics",
    "TensorFlow/PyTorch",
    "Computer Vision",
    "Natural Language Processing",
    "SQL Databases",
    "Cloud Platforms (AWS/GCP/Azure)",
    "MLOps",
    "Research & Problem Solving"
  ];

  const learningResources = [
    { 
      platform: "Coursera - Andrew Ng's ML Course", 
      url: "https://www.coursera.org/learn/machine-learning" 
    },
    { 
      platform: "Coursera - Deep Learning Specialization", 
      url: "https://www.coursera.org/specializations/deep-learning" 
    },
    { 
      platform: "Kaggle - Learn Section", 
      url: "https://www.kaggle.com/learn" 
    },
    { 
      platform: "fast.ai - Practical Deep Learning", 
      url: "https://www.fast.ai/" 
    },
    { 
      platform: "YouTube - Sentdex Python/ML Tutorials", 
      url: "https://www.youtube.com/@sentdex" 
    },
    { 
      platform: "Books - Hands-On ML by Aurélien Géron", 
      url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" 
    }
  ];

  const careerOpportunities = [
    { role: "Machine Learning Engineer", description: "Develop and deploy ML models in production" },
    { role: "Data Scientist", description: "Extract insights from data using ML techniques" },
    { role: "AI Research Scientist", description: "Conduct research in artificial intelligence" },
    { role: "Computer Vision Engineer", description: "Work on image and video analysis systems" },
    { role: "NLP Engineer", description: "Build systems that understand human language" },
    { role: "MLOps Engineer", description: "Manage ML model deployment and infrastructure" }
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
                <Brain className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Artificial Intelligence & Machine Learning</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build intelligent systems that can learn, reason, and make decisions. Focus on learning in Year 1-3 
              and apply in Year 4 for projects, internships, and job preparation.
            </p>
          </div>

          {/* Learning Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Year-wise Roadmap</h2>
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

          {/* Learning Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Where to Learn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {learningResources.map((res) => (
                <Card key={res.platform} className="bg-[var(--gradient-card)] border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-accent" />
                      <CardTitle className="text-lg">{res.platform}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={res.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Go to Course
                    </a>
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default AIMLCareer;
