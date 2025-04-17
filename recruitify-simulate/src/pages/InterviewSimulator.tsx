
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Video, Mic, Camera, Check, X, Clock, BarChart2, Play, Pause, RefreshCw, Download, ArrowRight, List } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const InterviewSimulator = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const [isSimulationStarted, setIsSimulationStarted] = useState(false);
  const [isSimulationActive, setIsSimulationActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const { toast } = useToast();

  const questions = [
    "Tell me about yourself and your experience with software development.",
    "How do you approach debugging a complex issue in a large codebase?",
    "Describe a challenging project you worked on and how you overcame obstacles.",
    "How do you stay updated with the latest technologies and industry trends?",
    "Can you explain your experience with CI/CD pipelines and DevOps practices?"
  ];

  const handleStartSimulation = () => {
    if (!selectedRole || !selectedDifficulty) {
      toast({
        title: "Missing selections",
        description: "Please select a role and difficulty level.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsSimulationStarted(true);
    setCurrentQuestion(0);
    setElapsedTime(0);

    toast({
      title: "Interview simulation ready",
      description: "Click 'Start Interview' when you're ready to begin.",
      duration: 3000,
    });
  };

  const handleToggleSimulation = () => {
    setIsSimulationActive(!isSimulationActive);
    
    if (!isSimulationActive) {
      toast({
        title: "Interview started",
        description: "Answer the questions as if you're in a real interview.",
        duration: 3000,
      });
    } else {
      toast({
        title: "Interview paused",
        description: "You can resume when ready.",
        duration: 2000,
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      toast({
        title: "Next question",
        description: "Moving to the next interview question.",
        duration: 2000,
      });
    } else {
      setIsSimulationActive(false);
      toast({
        title: "Interview completed",
        description: "All questions have been answered. View your results.",
        duration: 3000,
      });
    }
  };

  const handleReset = () => {
    setIsSimulationStarted(false);
    setIsSimulationActive(false);
    setCurrentQuestion(0);
    setElapsedTime(0);
    
    toast({
      title: "Simulation reset",
      description: "You can start a new interview simulation.",
      duration: 2000,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Interview Simulator</h1>
        <p className="text-muted-foreground">Practice with AI interviewers and get feedback in real time.</p>
      </div>

      <Tabs defaultValue="setup" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="setup">Setup Interview</TabsTrigger>
          <TabsTrigger value="simulation" disabled={!isSimulationStarted}>Simulation</TabsTrigger>
          <TabsTrigger value="results" disabled={!isSimulationStarted}>Results & Feedback</TabsTrigger>
        </TabsList>
        
        <TabsContent value="setup">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Interview Configuration</CardTitle>
                <CardDescription>Set up your practice interview session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Role</label>
                    <Select onValueChange={(value) => setSelectedRole(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a position..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software-engineer">Software Engineer</SelectItem>
                        <SelectItem value="product-manager">Product Manager</SelectItem>
                        <SelectItem value="data-scientist">Data Scientist</SelectItem>
                        <SelectItem value="ux-designer">UX Designer</SelectItem>
                        <SelectItem value="marketing-specialist">Marketing Specialist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Difficulty Level</label>
                    <Select onValueChange={(value) => setSelectedDifficulty(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select difficulty..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Interview Type</label>
                    <Select defaultValue="technical">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Interview</SelectItem>
                        <SelectItem value="behavioral">Behavioral Interview</SelectItem>
                        <SelectItem value="case-study">Case Study</SelectItem>
                        <SelectItem value="mixed">Mixed Format</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Duration</label>
                    <Select defaultValue="20">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 minutes</SelectItem>
                        <SelectItem value="20">20 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handleStartSimulation}
                  disabled={!selectedRole || !selectedDifficulty}
                >
                  Prepare Interview
                </Button>
              </CardFooter>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audio & Video Check</CardTitle>
                  <CardDescription>Test your microphone and camera</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Mic className="h-4 w-4 mr-2 text-brand-500" />
                        <span className="text-sm font-medium">Microphone</span>
                      </div>
                      <span className="text-sm text-success-600 flex items-center">
                        <Check className="h-4 w-4 mr-1" /> Connected
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Camera className="h-4 w-4 mr-2 text-brand-500" />
                        <span className="text-sm font-medium">Camera</span>
                      </div>
                      <span className="text-sm text-success-600 flex items-center">
                        <Check className="h-4 w-4 mr-1" /> Connected
                      </span>
                    </div>
                    
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center border">
                      <Video className="h-8 w-8 text-muted-foreground" />
                      <Button size="sm" className="absolute bottom-2 right-2">
                        Test Camera
                      </Button>
                    </div>
                    
                    <div className="bg-muted rounded-lg p-2 flex items-center">
                      <div className="w-full bg-background h-5 rounded-md overflow-hidden">
                        <div className="w-3/4 h-full bg-brand-500 animate-pulse-slow"></div>
                      </div>
                      <Button size="sm" className="ml-2 h-8">
                        Test Mic
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Interview Tips</CardTitle>
                  <CardDescription>Best practices for a successful interview</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                      <span>Speak clearly and at a moderate pace</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                      <span>Maintain eye contact with the camera</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                      <span>Use the STAR method for behavioral questions</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                      <span>Have examples ready for common questions</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                      <span>Find a quiet environment with good lighting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="simulation">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Interview Session</CardTitle>
                      <CardDescription>
                        {selectedRole && selectedDifficulty ? 
                          `${selectedRole.replace("-", " ")} - ${selectedDifficulty} level` : 
                          "Your interview session"}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{Math.floor(elapsedTime / 60).toString().padStart(2, '0')}:{(elapsedTime % 60).toString().padStart(2, '0')}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="relative flex-grow flex flex-col">
                    <div className="bg-muted rounded-lg p-4 mb-4">
                      <p className="font-medium text-lg">{questions[currentQuestion]}</p>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <List className="h-4 w-4 mr-1" />
                          Question {currentQuestion + 1} of {questions.length}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-grow relative aspect-video bg-muted rounded-lg overflow-hidden border flex items-center justify-center mb-4">
                      {!isSimulationActive ? (
                        <div className="text-center">
                          <Video className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-muted-foreground">Click Start Interview to begin</p>
                        </div>
                      ) : (
                        <>
                          <Video className="h-12 w-12 text-muted-foreground animate-pulse" />
                          <div className="absolute top-2 right-2 bg-error-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                            <span>LIVE</span>
                            <span className="ml-1 h-2 w-2 bg-white rounded-full animate-pulse"></span>
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Button 
                          variant={isSimulationActive ? "destructive" : "default"} 
                          onClick={handleToggleSimulation}
                        >
                          {isSimulationActive ? (
                            <>
                              <Pause className="mr-2 h-4 w-4" />
                              Pause Interview
                            </>
                          ) : (
                            <>
                              <Play className="mr-2 h-4 w-4" />
                              Start Interview
                            </>
                          )}
                        </Button>
                        
                        <Button variant="outline" onClick={handleReset}>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Reset
                        </Button>
                      </div>
                      
                      <Button 
                        onClick={handleNextQuestion}
                        disabled={!isSimulationActive || currentQuestion >= questions.length - 1}
                      >
                        Next Question
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Real-time Analysis</CardTitle>
                  <CardDescription>AI-powered interview feedback</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Confidence</span>
                        <span className="font-medium">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Clarity</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Technical Accuracy</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Engagement</span>
                        <span className="font-medium">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <h3 className="font-medium">Live Feedback</h3>
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <Check className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Good eye contact and posture</p>
                        </div>
                        <div className="flex gap-2">
                          <Check className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Clear explanation of technical concepts</p>
                        </div>
                        <div className="flex gap-2">
                          <X className="h-4 w-4 text-error-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Speaking a bit too quickly at times</p>
                        </div>
                        <div className="flex gap-2">
                          <X className="h-4 w-4 text-error-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Could provide more specific examples</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="results">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
                <CardDescription>Overall interview performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <svg className="w-32 h-32">
                      <circle
                        className="text-muted stroke-current"
                        strokeWidth="6"
                        stroke="currentColor"
                        fill="transparent"
                        r="58"
                        cx="64"
                        cy="64"
                      />
                      <circle
                        className="text-brand-500 stroke-current"
                        strokeWidth="6"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="58"
                        cx="64"
                        cy="64"
                        strokeDasharray="364.4"
                        strokeDashoffset="109.32"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">70%</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Overall Communication</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Technical Knowledge</span>
                      <span className="font-medium">82%</span>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Question Relevance</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Behavioral Skills</span>
                      <span className="font-medium">72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Problem Solving</span>
                      <span className="font-medium">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Detailed Feedback</CardTitle>
                <CardDescription>AI-powered insights and recommendations</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px] overflow-y-auto">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Strengths</h3>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Check className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">Demonstrated strong technical knowledge of software development concepts and practices.</p>
                      </div>
                      <div className="flex gap-2">
                        <Check className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">Clearly articulated past experiences and provided good context for your role in projects.</p>
                      </div>
                      <div className="flex gap-2">
                        <Check className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">Maintained professional demeanor and positive attitude throughout the interview.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Areas for Improvement</h3>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <X className="h-5 w-5 text-error-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">Answers tended to be lengthy - focus on being more concise while still being thorough.</p>
                      </div>
                      <div className="flex gap-2">
                        <X className="h-5 w-5 text-error-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">Limited use of the STAR method when answering behavioral questions.</p>
                      </div>
                      <div className="flex gap-2">
                        <X className="h-5 w-5 text-error-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">Could provide more specific examples of metrics and quantifiable results in past work.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Question-by-Question Analysis</h3>
                    
                    <div className="border rounded-lg p-4 space-y-3">
                      <p className="font-medium">Q1: Tell me about yourself and your experience with software development.</p>
                      <div className="flex items-center">
                        <Progress value={75} className="h-2 flex-grow" />
                        <span className="ml-2 text-sm font-medium">75%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Good overview of your background, but could be more focused on relevant skills for this specific role. Consider structuring this answer as past, present, future.</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 space-y-3">
                      <p className="font-medium">Q2: How do you approach debugging a complex issue in a large codebase?</p>
                      <div className="flex items-center">
                        <Progress value={88} className="h-2 flex-grow" />
                        <span className="ml-2 text-sm font-medium">88%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Excellent methodical approach described. Good mention of tools and techniques. Consider adding a brief real-world example to illustrate your process.</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 space-y-3">
                      <p className="font-medium">Q3: Describe a challenging project you worked on and how you overcame obstacles.</p>
                      <div className="flex items-center">
                        <Progress value={62} className="h-2 flex-grow" />
                        <span className="ml-2 text-sm font-medium">62%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">The project example was relevant, but you spent too much time on context and not enough on your specific contributions and problem-solving approach.</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 space-y-3">
                      <p className="font-medium">Q4: How do you stay updated with the latest technologies and industry trends?</p>
                      <div className="flex items-center">
                        <Progress value={70} className="h-2 flex-grow" />
                        <span className="ml-2 text-sm font-medium">70%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Good mention of resources like blogs and conferences. Could improve by providing examples of how you've applied new learnings to your work.</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 space-y-3">
                      <p className="font-medium">Q5: Can you explain your experience with CI/CD pipelines and DevOps practices?</p>
                      <div className="flex items-center">
                        <Progress value={55} className="h-2 flex-grow" />
                        <span className="ml-2 text-sm font-medium">55%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">This area needs improvement. Your answer was too general and lacked specific tools and methodologies. Consider focusing on concrete examples of DevOps practices you've used.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Recommendations</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <ArrowRight className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0" />
                        <span>Practice using the STAR method (Situation, Task, Action, Result) for behavioral questions.</span>
                      </li>
                      <li className="flex gap-2">
                        <ArrowRight className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0" />
                        <span>Prepare more specific examples with quantifiable results from your past work.</span>
                      </li>
                      <li className="flex gap-2">
                        <ArrowRight className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0" />
                        <span>Work on being more concise while still thoroughly answering questions.</span>
                      </li>
                      <li className="flex gap-2">
                        <ArrowRight className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0" />
                        <span>Strengthen your knowledge of CI/CD tools and DevOps practices.</span>
                      </li>
                      <li className="flex gap-2">
                        <ArrowRight className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0" />
                        <span>Practice your introduction to make it more tailored to specific roles.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InterviewSimulator;
