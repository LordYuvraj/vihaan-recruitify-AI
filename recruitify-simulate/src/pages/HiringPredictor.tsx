
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart, BarChart2, Download, FileCheck, FileText, RefreshCw, Sparkles, ThumbsDown, ThumbsUp, Upload, UserCheck, Video } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const HiringPredictor = () => {
  const [candidate, setCandidate] = useState("");
  const [role, setRole] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const { toast } = useToast();

  const handleAnalyze = () => {
    if (!candidate || !role) {
      toast({
        title: "Missing information",
        description: "Please select a candidate and role.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsAnalyzed(true);
      toast({
        title: "Analysis complete",
        description: "Hiring prediction has been generated successfully!",
        duration: 3000,
      });
    }, 3000);
  };

  const resetAnalysis = () => {
    setCandidate("");
    setRole("");
    setIsAnalyzed(false);
    toast({
      title: "Reset complete",
      description: "You can now start a new analysis.",
      duration: 2000,
    });
  };

  const candidates = [
    { id: "john-doe", name: "John Doe", role: "Software Engineer" },
    { id: "jane-smith", name: "Jane Smith", role: "Product Manager" },
    { id: "alex-johnson", name: "Alex Johnson", role: "UX Designer" },
    { id: "sarah-williams", name: "Sarah Williams", role: "Data Scientist" },
  ];

  const roles = [
    { id: "software-engineer", title: "Software Engineer" },
    { id: "product-manager", title: "Product Manager" },
    { id: "ux-designer", title: "UX Designer" },
    { id: "data-scientist", title: "Data Scientist" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hiring Probability Predictor</h1>
        <p className="text-muted-foreground">Predict candidate success probability based on all assessments.</p>
      </div>

      <Tabs defaultValue="analyze" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="analyze">Analyze Candidate</TabsTrigger>
          <TabsTrigger value="results" disabled={!isAnalyzed}>Prediction Results</TabsTrigger>
        </TabsList>
        
        <TabsContent value="analyze">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Candidate Selection</CardTitle>
                <CardDescription>Select a candidate to analyze</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select Candidate</Label>
                    <Select value={candidate} onValueChange={setCandidate}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a candidate..." />
                      </SelectTrigger>
                      <SelectContent>
                        {candidates.map((c) => (
                          <SelectItem key={c.id} value={c.id}>
                            {c.name} - {c.role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Target Role</Label>
                    <Select value={role} onValueChange={setRole}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role..." />
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((r) => (
                          <SelectItem key={r.id} value={r.id}>
                            {r.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Department</Label>
                    <Select defaultValue="engineering">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="product">Product</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="data">Data & Analytics</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Assessment Data to Include</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="bg-muted/50">Resume Analysis</Badge>
                      <Badge variant="outline" className="bg-muted/50">Technical Skills</Badge>
                      <Badge variant="outline" className="bg-muted/50">Interview Performance</Badge>
                      <Badge variant="outline" className="bg-muted/50">Group Discussion</Badge>
                      <Badge variant="outline" className="bg-muted/50">Cultural Fit</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing || !candidate || !role}
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Generate Prediction"
                  )}
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Analysis Configuration</CardTitle>
                <CardDescription>Customize prediction parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Prediction Model</Label>
                    <Select defaultValue="comprehensive">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="comprehensive">Comprehensive (All Factors)</SelectItem>
                        <SelectItem value="technical">Technical Focus</SelectItem>
                        <SelectItem value="behavioral">Behavioral Focus</SelectItem>
                        <SelectItem value="custom">Custom Weighting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Factor Weighting</Label>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Resume & Experience</span>
                          <span className="font-medium">25%</span>
                        </div>
                        <Progress value={25} className="h-1.5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Technical Skills</span>
                          <span className="font-medium">30%</span>
                        </div>
                        <Progress value={30} className="h-1.5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Interview Performance</span>
                          <span className="font-medium">20%</span>
                        </div>
                        <Progress value={20} className="h-1.5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Group Dynamics</span>
                          <span className="font-medium">15%</span>
                        </div>
                        <Progress value={15} className="h-1.5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Cultural Fit</span>
                          <span className="font-medium">10%</span>
                        </div>
                        <Progress value={10} className="h-1.5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Comparison Group</Label>
                    <Select defaultValue="similar-roles">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Employees</SelectItem>
                        <SelectItem value="similar-roles">Similar Roles</SelectItem>
                        <SelectItem value="department">Same Department</SelectItem>
                        <SelectItem value="top-performers">Top Performers Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Advanced Options</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-muted/50 cursor-pointer hover:bg-muted">Normalize Scores</Badge>
                      <Badge variant="outline" className="bg-muted/50 cursor-pointer hover:bg-muted">Include Historical Data</Badge>
                      <Badge variant="outline" className="bg-muted/50 cursor-pointer hover:bg-muted">Skill Gap Analysis</Badge>
                      <Badge variant="outline" className="bg-muted/50 cursor-pointer hover:bg-muted">Retention Probability</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="results">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Candidate Profile</CardTitle>
                <CardDescription>Consolidated assessment data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={`https://api.dicebear.com/7.x/personas/svg?seed=${candidate}`} />
                      <AvatarFallback>{candidates.find(c => c.id === candidate)?.name.split(' ').map(n => n[0]).join('') || "CN"}</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-2 text-xl font-bold">{candidates.find(c => c.id === candidate)?.name || "Candidate"}</h3>
                    <p className="text-sm text-muted-foreground">{roles.find(r => r.id === role)?.title || "Role"}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-brand-500" />
                        <span>Resume Score</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">85%</span>
                        <Badge variant="outline" className="bg-success-50 text-success-600 border-success-200">Strong</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <FileCheck className="h-4 w-4 mr-2 text-brand-500" />
                        <span>Technical Assessment</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">78%</span>
                        <Badge variant="outline" className="bg-success-50 text-success-600 border-success-200">Good</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Video className="h-4 w-4 mr-2 text-brand-500" />
                        <span>Interview Performance</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">70%</span>
                        <Badge variant="outline" className="bg-warning-50 text-warning-600 border-warning-200">Average</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <UserCheck className="h-4 w-4 mr-2 text-brand-500" />
                        <span>Group Discussion</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">82%</span>
                        <Badge variant="outline" className="bg-success-50 text-success-600 border-success-200">Strong</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-medium text-sm mb-2">Key Strengths</h3>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs">
                        <Sparkles className="h-3.5 w-3.5 text-success-500" />
                        <span>Problem-solving abilities</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs">
                        <Sparkles className="h-3.5 w-3.5 text-success-500" />
                        <span>Team collaboration</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs">
                        <Sparkles className="h-3.5 w-3.5 text-success-500" />
                        <span>Technical knowledge</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-medium text-sm mb-2">Growth Areas</h3>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-warning-500"></span>
                        <span>Communication clarity</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-warning-500"></span>
                        <span>Project management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="md:col-span-2">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Hiring Prediction</CardTitle>
                  <CardDescription>AI-powered success probability analysis</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-6">
                    <div className="flex flex-col items-center">
                      <div className="relative mb-4">
                        <svg className="w-48 h-48">
                          <circle
                            className="text-muted stroke-current"
                            strokeWidth="8"
                            stroke="currentColor"
                            fill="transparent"
                            r="70"
                            cx="96"
                            cy="96"
                          />
                          <circle
                            className="text-success-500 stroke-current"
                            strokeWidth="8"
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="70"
                            cx="96"
                            cy="96"
                            strokeDasharray="439.6"
                            strokeDashoffset="105.5"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <span className="text-5xl font-bold">76%</span>
                          <span className="text-muted-foreground text-sm mt-1">Success Probability</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Badge className="bg-success-100 text-success-700 hover:bg-success-200 border-success-200">
                          <ThumbsUp className="mr-1 h-3 w-3" />
                          Recommended for Hire
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="border rounded-lg p-4 space-y-3">
                        <h3 className="font-medium">Skill Match</h3>
                        <div className="space-y-2">
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Core Requirements</span>
                              <span className="font-medium">85%</span>
                            </div>
                            <Progress value={85} className="h-1.5" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Preferred Skills</span>
                              <span className="font-medium">70%</span>
                            </div>
                            <Progress value={70} className="h-1.5" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Experience Level</span>
                              <span className="font-medium">80%</span>
                            </div>
                            <Progress value={80} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 space-y-3">
                        <h3 className="font-medium">Comparative Analysis</h3>
                        <div className="space-y-2">
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>vs. All Candidates</span>
                              <span className="font-medium">Top 25%</span>
                            </div>
                            <Progress value={75} className="h-1.5" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>vs. Current Team</span>
                              <span className="font-medium">Above Average</span>
                            </div>
                            <Progress value={60} className="h-1.5" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>vs. Similar Roles</span>
                              <span className="font-medium">Top 30%</span>
                            </div>
                            <Progress value={70} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-medium">Success Factors</h3>
                      <div className="grid gap-2 md:grid-cols-2">
                        <div className="flex items-center border rounded-md p-3">
                          <div className="mr-3 h-9 w-9 rounded-full bg-success-50 flex items-center justify-center">
                            <ThumbsUp className="h-5 w-5 text-success-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Technical expertise</p>
                            <p className="text-xs text-muted-foreground">Strong skills alignment with role</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center border rounded-md p-3">
                          <div className="mr-3 h-9 w-9 rounded-full bg-success-50 flex items-center justify-center">
                            <ThumbsUp className="h-5 w-5 text-success-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Team collaboration</p>
                            <p className="text-xs text-muted-foreground">Excellent group discussion results</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center border rounded-md p-3">
                          <div className="mr-3 h-9 w-9 rounded-full bg-warning-50 flex items-center justify-center">
                            <ThumbsDown className="h-5 w-5 text-warning-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Communication</p>
                            <p className="text-xs text-muted-foreground">Room for improvement in clarity</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center border rounded-md p-3">
                          <div className="mr-3 h-9 w-9 rounded-full bg-success-50 flex items-center justify-center">
                            <ThumbsUp className="h-5 w-5 text-success-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Problem solving</p>
                            <p className="text-xs text-muted-foreground">Demonstrated analytical skills</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-medium">AI Recommendation</h3>
                      <div className="border rounded-lg p-4 bg-muted/30">
                        <p className="text-sm">
                          Based on comprehensive analysis across all assessments, this candidate demonstrates strong potential for success in the {roles.find(r => r.id === role)?.title || "selected"} role. Their technical skills and team collaboration abilities are particularly noteworthy. While there are some areas for growth in communication, these can be addressed through mentoring and training. Recommend proceeding with an offer, with consideration for providing support in the identified growth areas.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-6 flex justify-between">
                  <Button variant="outline" onClick={resetAnalysis}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    New Analysis
                  </Button>
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HiringPredictor;
