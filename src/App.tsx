import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FloatingAIChat from "./components/FloatingAIChat"; // ✅ Floating AI Chat

import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Internships from "./pages/Internships";
import Mentorship from "./pages/Mentorship";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Problems from "./pages/Problems";
import Hackathons from "./pages/Hackathons";
import Profiles from "./pages/Profiles";
import Suggestions from "./pages/Suggestions";
import AIMLCareer from "./pages/skills/AIMLCareer";
import DataScienceCareer from "./pages/skills/DataScienceCareer";
import JavaFullStackCareer from "./pages/skills/JavaFullStackCareer";
import MERNStackCareer from "./pages/skills/MERNStackCareer";
import CybersecurityCareer from "./pages/skills/CybersecurityCareer";
import CloudDevOpsCareer from "./pages/skills/CloudDevOpsCareer";

import ProfilePage from "./components/ProfilePage";

import AboutProject from "./pages/help/AboutProject";
import ContactDeveloper from "./pages/help/ContactDeveloper";
import FAQs from "./pages/help/FAQs";

import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
// ✅ Imported Feedback Page

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ✅ Floating AI Chat always visible */}
        <FloatingAIChat />

        <Routes>
          {/* Auth & Welcome */}
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Dashboard & Features */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/suggestions" element={<Suggestions />} />

          {/* Skill subroutes */}
          <Route path="/skills/ai-ml" element={<AIMLCareer />} />
          <Route path="/skills/data-science" element={<DataScienceCareer />} />
          <Route path="/skills/java-fullstack" element={<JavaFullStackCareer />} />
          <Route path="/skills/mern-stack" element={<MERNStackCareer />} />
          <Route path="/skills/cybersecurity" element={<CybersecurityCareer />} />
          <Route path="/skills/cloud-devops" element={<CloudDevOpsCareer />} />

          {/* Help Section */}
          <Route path="/about" element={<AboutProject />} />
          <Route path="/contact" element={<ContactDeveloper />} />
          <Route path="/faq" element={<FAQs />} />

          

          {/* Forgot / Reset Password */}
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
