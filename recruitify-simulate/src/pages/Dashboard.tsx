
import { StatCard } from "@/components/ui/stat-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Calendar, Clock, FileText, Users, Video, UserCheck, UserX, Award, AlertCircle, Clock3 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your recruitment dashboard.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Candidates" 
          value="124" 
          icon={Users} 
          trend={8}
          variant="info" 
        />
        <StatCard 
          title="Resume Scans" 
          value="56" 
          icon={FileText} 
          trend={12}
          variant="success" 
        />
        <StatCard 
          title="Interviews" 
          value="32" 
          icon={Video} 
          trend={-3}
          variant="warning" 
        />
        <StatCard 
          title="Hiring Rate" 
          value="24%" 
          icon={UserCheck} 
          trend={5}
          variant="default" 
        />
      </div>

      <h2 className="text-xl font-semibold mb-4">AI Recruitment Modules</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <FeatureCard 
          icon={FileText}
          title="Resume Scanner"
          description="Analyze resumes for ATS optimization and job fit scoring."
          href="/resume-scanner"
          iconClassName="bg-brand-50"
        />
        <FeatureCard 
          icon={Video}
          title="Interview Simulator"
          description="Practice with AI interviewers and get feedback in real time."
          href="/interview-simulator"
          iconClassName="bg-success-50"
        />
        <FeatureCard 
          icon={Users}
          title="Group Discussion"
          description="Simulate and analyze group discussions for team dynamics."
          href="/group-discussion"
          iconClassName="bg-warning-50"
        />
        <FeatureCard 
          icon={BarChart2}
          title="Hiring Predictor"
          description="Predict candidate success probability based on all assessments."
          href="/hiring-predictor"
          iconClassName="bg-error-50"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest recruitment activities across all modules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50">
                    <FileText className="h-4 w-4 text-brand-500" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Resume Analyzed: John Smith</p>
                  <p className="text-xs text-muted-foreground">Marketing Specialist • 78% Match</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" /> 13 minutes ago
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success-50">
                    <Video className="h-4 w-4 text-success-500" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Interview Completed: Sarah Davis</p>
                  <p className="text-xs text-muted-foreground">Product Manager • 82% Confidence Score</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" /> 2 hours ago
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warning-50">
                    <Users className="h-4 w-4 text-warning-500" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Group Discussion: Engineering Team</p>
                  <p className="text-xs text-muted-foreground">5 Participants • Discussion Analysis Complete</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" /> 1 day ago
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-error-50">
                    <UserCheck className="h-4 w-4 text-error-500" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Candidate Hired: Michael Wong</p>
                  <p className="text-xs text-muted-foreground">UX Designer • 91% Success Prediction</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" /> 2 days ago
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recruitment Pipeline</CardTitle>
            <CardDescription>Current status of active recruitment processes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-brand-500" />
                    <span className="text-sm font-medium">Senior Developer</span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">12 candidates</span>
                </div>
                <Progress value={68} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Screening</span>
                  <span>Interviews</span>
                  <span>Final</span>
                  <span>Hired</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-success-500" />
                    <span className="text-sm font-medium">Marketing Manager</span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">8 candidates</span>
                </div>
                <Progress value={45} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Screening</span>
                  <span>Interviews</span>
                  <span>Final</span>
                  <span>Hired</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-warning-500" />
                    <span className="text-sm font-medium">Data Scientist</span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">15 candidates</span>
                </div>
                <Progress value={92} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Screening</span>
                  <span>Interviews</span>
                  <span>Final</span>
                  <span>Hired</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-error-500" />
                    <span className="text-sm font-medium">HR Specialist</span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">6 candidates</span>
                </div>
                <Progress value={25} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Screening</span>
                  <span>Interviews</span>
                  <span>Final</span>
                  <span>Hired</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
