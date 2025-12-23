import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageCircle, BookOpen, Target, TrendingUp, Network } from "lucide-react";

const Mentorship = () => {
  const mentorshipPlatforms = [
    { name: "Unstop Free Mentor Calls", link: "https://unstop.com" },
    { name: "Topmate", link: "https://topmate.io" },
    { name: "ADPList", link: "https://adplist.org" },
    { name: "LinkedIn", link: "https://www.linkedin.com" },
    { name: "University Alumni Network", link: "#" }, // replace # with your university link if available
    { name: "Industry Meetups", link: "https://www.meetup.com" }
  ];

  const mentorshipBenefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Accelerate your professional development with personalized guidance and industry insights."
    },
    {
      icon: BookOpen,
      title: "Skill Development", 
      description: "Learn essential skills faster through expert advice and structured learning paths."
    },
    {
      icon: Network,
      title: "Networking",
      description: "Expand your professional network and gain access to exclusive opportunities."
    },
    {
      icon: Target,
      title: "Decision Making",
      description: "Make informed career decisions with guidance from experienced professionals."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-tech-cyan/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Mentorship Guide</h1>
            <p className="text-xl text-muted-foreground">Find mentors and accelerate your career growth</p>
          </div>

          <div className="space-y-12">
            {/* What is Mentorship */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">What is Mentorship?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Mentorship is a professional relationship where an experienced individual (mentor) guides and 
                  supports someone less experienced (mentee) in their career development. It involves knowledge 
                  sharing, skill development, and providing guidance on career decisions and challenges.
                </p>
              </CardContent>
            </Card>

            {/* Where to Get Guidance */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Where to Get Guidance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {mentorshipPlatforms.map((platform) => (
                    <a 
                      key={platform.name} 
                      href={platform.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-lg text-center hover:bg-primary/10 transition-colors"
                    >
                      <span className="font-medium text-primary hover:underline">{platform.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits of Mentorship */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-tech-cyan/10">
                    <Target className="h-6 w-6 text-tech-cyan" />
                  </div>
                  <CardTitle className="text-2xl">Benefits of Mentorship</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {mentorshipBenefits.map((benefit) => (
                    <div key={benefit.title} className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
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

export default Mentorship;
