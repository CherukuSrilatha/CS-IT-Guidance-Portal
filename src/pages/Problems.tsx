import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Trophy } from "lucide-react";

const Problems = () => {
  const platforms = [
    { name: "LeetCode", url: "https://leetcode.com/" },
    { name: "CodeChef", url: "https://www.codechef.com/" },
    { name: "HackerRank", url: "https://www.hackerrank.com/" },
    { name: "Codeforces", url: "https://codeforces.com/" },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/" },
    { name: "Aptitude Platforms", url: "https://www.indiabix.com/" }, // Example aptitude site
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-tech-cyan/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Problem Solving</h1>
            <p className="text-xl text-muted-foreground">
              Master coding skills through practice and continuous learning
            </p>
          </div>

          <div className="space-y-12">
            {/* Importance of Problem Solving */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">
                    Importance of Problem Solving
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Problem solving and coding practice are crucial for CS/IT
                  students as they develop logical thinking, prepare you for
                  technical interviews, and help you master algorithms and data
                  structures essential for software development.
                </p>
              </CardContent>
            </Card>

            {/* Where to Solve Problems */}
            <Card className="border-border/50 bg-[var(--gradient-card)]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Where to Solve Problems</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {platforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-muted/50 rounded-lg text-center hover:bg-muted transition"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg inline-block mb-2">
                        <Trophy className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-primary hover:underline">
                        {platform.name}
                      </span>
                    </a>
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

export default Problems;
