import { Sparkles } from "lucide-react";

const MotivationalBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-tech-cyan/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            A Guidance Portal for CS/IT Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Early clarity with curated resources for skills, projects, internships, and profiles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Semester Roadmaps</h3>
            <p className="text-sm text-muted-foreground">Domain-wise skills to learn each semester, with trusted links.</p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Projects & Internships</h3>
            <p className="text-sm text-muted-foreground">Project ideas, how to apply, and where to find internships.</p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Profiles & Resume</h3>
            <p className="text-sm text-muted-foreground">GitHub/LinkedIn setup and resume basics recruiters expect.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MotivationalBanner;