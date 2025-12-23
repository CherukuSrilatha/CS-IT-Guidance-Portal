import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Trophy, Users, Lightbulb, TrendingUp, Network, Globe } from "lucide-react";

const Hackathons = () => {
  const hackathonPlatforms = [
    { name: "Unstop", url: "https://unstop.com/" },
    { name: "Devpost", url: "https://devpost.com/" },
    { name: "HackerEarth", url: "https://www.hackerearth.com/challenges/hackathon/" },
    { name: "Major League Hacking (MLH)", url: "https://mlh.io/" },
    { name: "AngelHack", url: "https://angelhack.com/" },
    { name: "Local University Events", url: "#" }, // no fixed link, can keep placeholder
  ];

  const hackathonImportance = [
    {
      icon: TrendingUp,
      title: "Skill Development",
      description:
        "Rapidly improve your technical skills by working on real-world challenges under time constraints.",
    },
    {
      icon: Network,
      title: "Networking Opportunities",
      description:
        "Meet industry professionals, potential mentors, and like-minded developers to expand your network.",
    },
    {
      icon: Trophy,
      title: "Career Growth",
      description:
        "Win prizes, gain recognition, and potentially land job opportunities or internships.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-tech-cyan/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Hackathons</h1>
            <p className="text-xl text-muted-foreground">
              Participate in hackathons to showcase your skills and build your network
            </p>
          </div>

          <div className="space-y-12">
            {/* What are Hackathons */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">What are Hackathons?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Hackathons are time-bound events (usually 24-72 hours) where teams of developers,
                  designers, and entrepreneurs come together to build innovative solutions to specific
                  problems or challenges. Participants collaborate intensively to create prototypes,
                  applications, or solutions from scratch.
                </p>
              </CardContent>
            </Card>

            {/* Importance of Hackathons */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Trophy className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Importance of Hackathons</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {hackathonImportance.map((item) => (
                    <div
                      key={item.title}
                      className="text-center p-4 bg-muted/50 rounded-lg"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg inline-block mb-3">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Where to Find Hackathons */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-tech-cyan/10">
                    <Globe className="h-6 w-6 text-tech-cyan" />
                  </div>
                  <CardTitle className="text-2xl">Where to Find Hackathons</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {hackathonPlatforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-muted/50 rounded-lg text-center hover:bg-muted transition"
                    >
                      <div className="p-2 bg-accent/10 rounded-lg inline-block mb-2">
                        <Calendar className="h-5 w-5 text-accent" />
                      </div>
                      <span className="font-medium text-primary hover:underline">
                        {platform.name}
                      </span>
                    </a>
                  ))}
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Tips for First-Time Participants:</h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Start with smaller, local hackathons to gain experience</li>
                    <li>• Form a balanced team with diverse skills (frontend, backend, design)</li>
                    <li>• Focus on solving the problem rather than using complex technologies</li>
                    <li>• Prepare a clear presentation and demo of your solution</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
