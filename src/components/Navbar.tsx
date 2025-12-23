import { Button } from "@/components/ui/button";
import {
  Code,
  BookOpen,
  Briefcase,
  Users,
  Trophy,
  FileText,
  Brain,
  User,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ---------- Left Section: Logo ---------- */}
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-primary" />
            <span
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
              onClick={() => navigate("/dashboard")}
            >
              Guidance Portal
            </span>
          </div>

          {/* ---------- Right Section: Dropdowns ---------- */}
          <div className="flex items-center space-x-3">
            {/* ---------- Student Profile Dropdown ---------- */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-1" />
                  Student Profile
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* ---------- Help Dropdown ---------- */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <HelpCircle className="h-4 w-4 mr-1" />
                  Help
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => navigate("/about")}>
                  About Project
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/contact")}>
                  Contact Developer
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/faq")}>
                  FAQs
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
