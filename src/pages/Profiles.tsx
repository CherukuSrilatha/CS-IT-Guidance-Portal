import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Github, Star, Code, Briefcase, Users } from "lucide-react";

const Profiles = () => {
  const linkedinBenefits = [
    "Network with industry professionals and peers",
    "Showcase your achievements and experience",
    "Apply for jobs and internships directly",
    "Share and discover industry insights",
    "Build your personal brand"
  ];

  const githubBenefits = [
    "Host and showcase your coding projects",
    "Contribute to open source projects",
    "Demonstrate your coding skills to employers",
    "Collaborate with other developers",
    "Track your development progress"
  ];

  const linkedinTips = [
    "Use a professional headshot as profile picture",
    "Write a compelling headline that describes your role/goals",
    "Complete all profile sections with relevant information",
    "Regularly share content related to your field",
    "Connect with classmates, professors, and industry professionals"
  ];

  const githubTips = [
    "Complete your profile with bio and contact information",
    "Pin your best repositories to showcase top work",
    "Write detailed README files for each project",
    "Use descriptive commit messages",
    "Contribute to open source projects to show collaboration skills"
  ];

  const profilesLinks = {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-tech-cyan/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Professional Profiles</h1>
            <p className="text-xl text-muted-foreground">
              Build strong LinkedIn and GitHub profiles to advance your career
            </p>
          </div>

          <div className="space-y-12">
            {/* Importance of LinkedIn and GitHub */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Importance of LinkedIn and GitHub Accounts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg mb-6">
                  LinkedIn and GitHub are essential platforms for computer science and IT students. They serve as 
                  your professional digital presence and are often the first places recruiters and potential 
                  collaborators will look to evaluate your skills and experience.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Linkedin className="h-5 w-5 text-primary mr-2" />
                      <a
                        href={profilesLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-primary"
                      >
                        LinkedIn Benefits
                      </a>
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {linkedinBenefits.map((benefit) => (
                        <li key={benefit}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Github className="h-5 w-5 text-accent mr-2" />
                      <a
                        href={profilesLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-accent"
                      >
                        GitHub Benefits
                      </a>
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {githubBenefits.map((benefit) => (
                        <li key={benefit}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Do With These Profiles */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">What to Do With These Profiles</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* LinkedIn Section */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">
                        <a
                          href={profilesLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-primary"
                        >
                          LinkedIn
                        </a>
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Users className="h-4 w-4 text-primary mr-2" />
                          Networking
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Connect with professionals, join industry groups, and engage with content to build your network.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Star className="h-4 w-4 text-primary mr-2" />
                          Showcasing Achievements
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Highlight your projects, internships, certifications, and academic achievements.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Briefcase className="h-4 w-4 text-primary mr-2" />
                          Job Applications
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Apply for internships and full-time positions directly through the platform.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                      <h5 className="font-medium mb-2">Profile Optimization Tips:</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {linkedinTips.map((tip) => (
                          <li key={tip}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* GitHub Section */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Github className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold">
                        <a
                          href={profilesLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-accent"
                        >
                          GitHub
                        </a>
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Code className="h-4 w-4 text-accent mr-2" />
                          Hosting Projects
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Store and showcase your coding projects with proper documentation and version control.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Users className="h-4 w-4 text-accent mr-2" />
                          Open Source Contribution
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Contribute to open source projects to gain experience and demonstrate collaboration skills.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Star className="h-4 w-4 text-accent mr-2" />
                          Showing Coding Skills
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Let employers see your actual code quality, project structure, and technical abilities.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-accent/5 rounded-lg">
                      <h5 className="font-medium mb-2">Profile Enhancement Tips:</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {githubTips.map((tip) => (
                          <li key={tip}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
