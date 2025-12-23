import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, BookOpen, Clock, Briefcase, ArrowLeft } from "lucide-react";

const CybersecurityCareer = () => {
  const learningPath = [
    {
      year: "1st Year",
      focus: "IT Fundamentals",
      skills: ["Computer Networks", "Operating Systems", "Basic Programming", "IT Security Basics"]
    },
    {
      year: "2nd Year",
      focus: "Security Foundations",
      skills: ["Network Security", "Cryptography", "Ethical Hacking Basics", "Security Protocols"]
    },
    {
      year: "3rd Year",
      focus: "Practical Security",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Incident Response", "Digital Forensics"]
    },
    {
      year: "4th Year",
      focus: "Job Preparation & Applications",
      skills: ["Resume Building", "Certifications Prep (CEH, Security+)", "Interview Preparation", "Portfolio Projects"]
    }
  ];

  const keySkills = [
    "Network Security", "Ethical Hacking", "Penetration Testing", "Cryptography",
    "Digital Forensics", "Incident Response", "Security Auditing", "Risk Assessment",
    "Compliance Standards", "Security Tools", "Programming", "Linux/Windows Security"
  ];

  const learningResources = [
    { platform: "Cybrary", link: "https://www.cybrary.it", courses: ["Ethical Hacking", "Network Security", "Digital Forensics"] },
    { platform: "Coursera", link: "https://www.coursera.org/specializations/cyber-security", courses: ["IBM Cybersecurity Analyst", "Google Cybersecurity Certificate"] },
    { platform: "edX", link: "https://www.edx.org/course/mit-cybersecurity", courses: ["MIT Cybersecurity", "Introduction to Cyber Attacks"] },
    { platform: "TryHackMe", link: "https://tryhackme.com", courses: ["Hands-on Cybersecurity Training", "Practical Labs"] },
    { platform: "Hack The Box", link: "https://www.hackthebox.com", courses: ["Penetration Testing Labs", "Realistic Security Challenges"] }
  ];

  const careerOpportunities = [
    { role: "Cybersecurity Analyst", description: "Monitor and protect organizational systems from threats" },
    { role: "Ethical Hacker", description: "Test systems for vulnerabilities using authorized hacking techniques" },
    { role: "Security Consultant", description: "Advise organizations on security best practices and implementations" },
    { role: "Incident Response Specialist", description: "Handle and investigate security breaches and incidents" },
    { role: "Digital Forensics Analyst", description: "Investigate cybercrimes and analyze digital evidence" },
    { role: "Security Architect", description: "Design and implement comprehensive security solutions" }
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
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                <Shield className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Cybersecurity</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect digital assets and systems from cyber threats. Gain hands-on skills in ethical hacking, penetration testing, and incident response.
            </p>
          </div>

          {/* Key Skills */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Skills Required</h2>
            <Card className="bg-[var(--gradient-card)] border-border/50">
              <CardContent className="p-6 flex flex-wrap gap-2">
                {keySkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">{skill}</Badge>
                ))}
              </CardContent>
            </Card>
          </section>

          {/* Learning Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Year-wise Learning Roadmap</h2>
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
                        <Badge key={skill} variant="outline" className="px-3 py-1">{skill}</Badge>
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
                    <CardTitle className="text-lg">
                      <a href={resource.link} target="_blank" className="text-blue-600 underline">{resource.platform}</a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {resource.courses.map((course) => (
                        <li key={course} className="text-sm text-muted-foreground">• {course}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Career Opportunities */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {careerOpportunities.map((career) => (
                <Card key={career.role} className="bg-[var(--gradient-card)] border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{career.role}</CardTitle>
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

export default CybersecurityCareer;
