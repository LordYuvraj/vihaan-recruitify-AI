
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MoonIcon, SunIcon } from "lucide-react";
import { 
  BarChart2, 
  FileText, 
  Users, 
  Video, 
  UserPlus, 
  Settings, 
  LayoutDashboard, 
  LogOut, 
  HelpCircle,
  FileBarChart
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

const MainLayout = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { toast } = useToast();
  const location = useLocation();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`,
      duration: 2000,
    });
  };

  const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard, path: "/" },
    { title: "Resume Scanner", icon: FileText, path: "/resume-scanner" },
    { title: "Interview Simulator", icon: Video, path: "/interview-simulator" },
    { title: "Group Discussion", icon: Users, path: "/group-discussion" },
    { title: "Hiring Predictor", icon: FileBarChart, path: "/hiring-predictor" },
    { title: "Candidates", icon: UserPlus, path: "/candidates" },
    { title: "Analytics", icon: BarChart2, path: "/analytics" },
    { title: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r border-border">
          <SidebarHeader className="px-6 py-5">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-brand-500 flex items-center justify-center text-white font-bold">R</div>
              <span className="text-xl font-bold">RecruitifyAI</span>
            </Link>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className={location.pathname === item.path ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}>
                        <Link to={item.path} className="flex items-center space-x-3">
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                          {item.title === "Resume Scanner" && (
                            <span className="ai-badge ml-auto">AI</span>
                          )}
                          {item.title === "Interview Simulator" && (
                            <span className="ai-badge ml-auto">AI</span>
                          )}
                          {item.title === "Group Discussion" && (
                            <span className="ai-badge ml-auto">AI</span>
                          )}
                          {item.title === "Hiring Predictor" && (
                            <span className="ai-badge ml-auto">AI</span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter className="border-t border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>HR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">HR Manager</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === "light" ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" size="sm" className="w-[48%]">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help
              </Button>
              <Button variant="outline" size="sm" className="w-[48%]" onClick={() => {
                toast({
                  title: "Logged out successfully",
                  description: "You have been logged out of your account",
                  duration: 3000,
                })
              }}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
