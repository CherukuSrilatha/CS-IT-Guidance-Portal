import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, Globe, Palette, User } from "lucide-react";

const Resume = () => {
  const resumeSteps = [
    "Choose an ATS-friendly template",
    "Include contact information and professional summary",
    "List relevant skills and technologies",
    "Add project descriptions with impact metrics",
    "Include education and certifications",
    "Proofread for grammar and formatting"
  ];

  const resumeBuilders = [
    { name: "Overleaf (LaTeX)", link: "https://www.overleaf.com/" },
    { name: "Canva", link: "https://www.canva.com/resumes/templates/" },
    { name: "Resume.io", link: "https://resume.io/" },
    { name: "Zety", link: "https://zety.com/resume-builder" },
    { name: "NovoResume", link: "https://novoresume.com/resume-builder" },
    { name: "Google Docs Templates", link: "https://docs.google.com/document/u/0/?ftv=1&tgif=d" }
  ];

  const atsCheckers = [
    { name: "Jobscan", link: "https://www.jobscan.co/" },
    { name: "Resume Worded", link: "https://resumeworded.com/" },
    { name: "SkillSyncer", link: "https://skillsyncer.com/" }
  ];

  const portfolioTips = [
    "Showcase your best 3-5 projects",
    "Include live demos and source code links", 
    "Write detailed project descriptions",
    "Highlight technologies used",
    "Add your contact information",
    "Make it mobile-responsive"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-tech-cyan/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Resume & Portfolio</h1>
            <p className="text-xl text-muted-foreground">Build professional profiles that get noticed by recruiters</p>
          </div>

          <div className="space-y-12">
            {/* What is a Resume */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">What is a Resume?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  A resume is a concise document that summarizes your education, work experience, skills, and 
                  achievements. It's your first impression to potential employers and should effectively 
                  communicate your qualifications for a specific role in 1-2 pages.
                </p>
              </CardContent>
            </Card>

            {/* How to Prepare a Resume */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">How to Prepare a Resume</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {resumeSteps.map((step, index) => (
                    <div key={step} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                      <div className="p-1 bg-primary/10 rounded-full min-w-0">
                        <span className="text-primary font-semibold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              {/* How to Check Your Resume */}
              <Card className="border-border/50 bg-[var(--gradient-card)]">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-tech-cyan/10">
                      <CheckCircle className="h-6 w-6 text-tech-cyan" />
                    </div>
                    <CardTitle className="text-xl">How to Check Your Resume</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold">ATS (Applicant Tracking System) Checkers</h4>
                    <p className="text-muted-foreground text-sm">
                      Use ATS checkers to ensure your resume passes automated screening systems used by companies.
                    </p>
                    <div className="space-y-2">
                      {atsCheckers.map((site) => (
                        <a
                          key={site.name}
                          href={site.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-2 bg-muted rounded text-sm text-blue-600 hover:underline text-center"
                        >
                          {site.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resume Building Websites */}
              <Card className="border-border/50 bg-[var(--gradient-card)]">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Resume Building Websites</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {resumeBuilders.map((builder) => (
                      <a
                        key={builder.name}
                        href={builder.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-muted rounded text-sm text-blue-600 hover:underline text-center"
                      >
                        {builder.name}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Building Your Portfolio */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Building Your Portfolio</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  A portfolio website showcases your projects, skills, and achievements online. It's essential 
                  for demonstrating your practical abilities to employers and clients.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {portfolioTips.map((tip) => (
                    <div key={tip} className="flex items-start space-x-2 p-3 bg-muted/50 rounded-lg">
                      <User className="h-4 w-4 text-primary mt-1 min-w-0" />
                      <p className="text-sm text-muted-foreground">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
