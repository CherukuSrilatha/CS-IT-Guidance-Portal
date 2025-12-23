import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Star, Clock, Globe, Users, Target } from "lucide-react";

const Internships = () => {
  const internshipPortals = [
    { name: "Internshala", link: "https://internshala.com" },
    { name: "LinkedIn", link: "https://www.linkedin.com/jobs" },
    { name: "AngelList", link: "https://wellfound.com" },
    { name: "Unstop", link: "https://unstop.com" },
    { name: "Company Websites", link: "https://google.com/careers" }, // Example (Google Careers)
    { name: "University Career Centers", link: "#" } // Placeholder
  ];

  const yearWiseGuidance = [
    {
      year: "1st Year",
      guidance: "Focus on building foundational skills. Look for basic internships or volunteering opportunities."
    },
    {
      year: "2nd Year", 
      guidance: "Start applying for technical internships. Build 2-3 projects to showcase your skills."
    },
    {
      year: "3rd Year",
      guidance: "Prime time for internships! Most companies prefer 3rd year students. Apply early and widely."
    },
    {
      year: "4th Year",
      guidance: "Focus on full-time job applications, but internships can still lead to pre-placement offers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-tech-cyan/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Internship Guide</h1>
            <p className="text-xl text-muted-foreground">Your complete guide to finding and securing internships</p>
          </div>

          <div className="space-y-12">
            {/* What are Internships */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">What are Internships?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Internships are temporary work experiences that provide hands-on learning in your field of study. 
                  They bridge the gap between academic knowledge and real-world application, offering valuable 
                  industry exposure and professional development opportunities.
                </p>
              </CardContent>
            </Card>

            {/* Why Internships are Important */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Why Internships are Important</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Skills Development</h4>
                    <p className="text-muted-foreground">Gain practical experience and learn industry-standard tools and practices.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Professional Experience</h4>
                    <p className="text-muted-foreground">Build your resume with real work experience and accomplishments.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Networking Opportunities</h4>
                    <p className="text-muted-foreground">Connect with industry professionals and potential mentors.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Job Opportunities</h4>
                    <p className="text-muted-foreground">Many internships lead to full-time job offers upon graduation.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Where to Find Internships */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-tech-cyan/10">
                    <Globe className="h-6 w-6 text-tech-cyan" />
                  </div>
                  <CardTitle className="text-2xl">Where to Find Internships</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {internshipPortals.map((portal) => (
                    <a
                      key={portal.name}
                      href={portal.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-lg text-center hover:bg-accent/20 transition"
                    >
                      <span className="font-medium text-primary hover:underline">{portal.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Best Time to Apply */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Best Time to Apply (Year-wise Guidance)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {yearWiseGuidance.map((item) => (
                    <div key={item.year} className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
                      <div className="p-2 bg-accent/10 rounded-lg min-w-0">
                        <Users className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{item.year}</h4>
                        <p className="text-muted-foreground">{item.guidance}</p>
                      </div>
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

export default Internships;
