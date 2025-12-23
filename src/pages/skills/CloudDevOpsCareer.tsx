import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cloud, BookOpen, Clock, Briefcase, ArrowLeft } from "lucide-react";

const CloudDevOpsCareer = () => {
  const learningPath = [
    {
      year: "1st Year",
      focus: "Infrastructure Basics",
      skills: ["Linux/Windows Administration", "Computer Networks", "Basic Programming", "Version Control (Git)"]
    },
    {
      year: "2nd Year",
      focus: "Cloud Foundations",
      skills: ["Cloud Platforms (AWS/Azure/GCP)", "Virtualization", "Containerization (Docker)", "Basic Scripting"]
    },
    {
      year: "3rd Year",
      focus: "DevOps Practices & Projects",
      skills: ["CI/CD Pipelines", "Kubernetes", "Infrastructure as Code (Terraform/Ansible)", "Monitoring & Logging", "Start real-world cloud/DevOps projects"]
    },
    {
      year: "4th Year",
      focus: "Revision & Job Preparation",
      skills: ["Revise all core cloud & DevOps concepts", "Internships & Projects Portfolio", "Resume & Interview Preparation", "Industry Certifications"]
    }
  ];

  const keySkills = [
    "AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code",
    "Linux Administration", "Scripting (Bash/Python)", "Monitoring Tools", "Git & Version Control",
    "Network Security", "Database Management", "Terraform", "Jenkins/GitLab CI"
  ];

  const learningResources = [
    { platform: "AWS Training - Cloud Practitioner", url: "https://www.aws.training/Details/Curriculum?id=20685" },
    { platform: "AWS Solutions Architect Associate", url: "https://www.aws.training/Details/Curriculum?id=20686" },
    { platform: "Microsoft Learn - Azure Fundamentals", url: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/" },
    { platform: "Coursera - Google Cloud DevOps Specialization", url: "https://www.coursera.org/specializations/devops-google-cloud" },
    { platform: "A Cloud Guru - Hands-on Labs", url: "https://acloudguru.com/" },
    { platform: "Books - The DevOps Handbook", url: "https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002" },
    { platform: "Books - Site Reliability Engineering", url: "https://sre.google/sre-book/table-of-contents/" }
  ];

  const careerOpportunities = [
    { role: "Cloud Engineer", description: "Design and manage cloud infrastructure and services" },
    { role: "DevOps Engineer", description: "Implement CI/CD pipelines and automation processes" },
    { role: "Site Reliability Engineer", description: "Ensure system reliability, availability, and performance" },
    { role: "Cloud Architect", description: "Design scalable and secure cloud solutions" },
    { role: "Platform Engineer", description: "Build and maintain development platforms and tools" },
    { role: "Infrastructure Engineer", description: "Manage and optimize IT infrastructure and systems" }
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
                <Cloud className="h-12 w-12 text-tech-cyan" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Cloud Computing & DevOps</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master cloud technologies and DevOps practices to build, deploy, and manage scalable applications 
              in modern cloud environments. Focus on Year 1-3 learning and Year 4 for projects, internships, and job preparation.
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
                      <Clock className="h-5 w-5 text-tech-cyan" />
                      <CardTitle className="text-xl">{year.year}: {year.focus}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {year.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="px-3 py-1">{skill}</Badge>
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
                    <Badge key={skill} variant="secondary" className="px-3 py-1">{skill}</Badge>
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
                      <Briefcase className="h-5 w-5 text-primary" />
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

export default CloudDevOpsCareer;
