
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BarChart2, Clock, Download, FileText, Mic, RefreshCw, UserPlus, Users, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const GroupDiscussion = () => {
  const [topic, setTopic] = useState("");
  const [participants, setParticipants] = useState<string[]>(["John Smith", "Sarah Lee", "AI Participant 1", "AI Participant 2"]);
  const [newParticipant, setNewParticipant] = useState("");
  const [isSessionConfigured, setIsSessionConfigured] = useState(false);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const { toast } = useToast();

  const handleAddParticipant = () => {
    if (newParticipant.trim()) {
      setParticipants([...participants, newParticipant]);
      setNewParticipant("");
      toast({
        title: "Participant added",
        description: `${newParticipant} has been added to the discussion.`,
        duration: 2000,
      });
    }
  };

  const handleRemoveParticipant = (index: number) => {
    const updatedParticipants = [...participants];
    updatedParticipants.splice(index, 1);
    setParticipants(updatedParticipants);
    toast({
      title: "Participant removed",
      description: `${participants[index]} has been removed from the discussion.`,
      duration: 2000,
    });
  };

  const handleStartSession = () => {
    if (!topic) {
      toast({
        title: "Missing topic",
        description: "Please enter a discussion topic.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsSessionConfigured(true);
    toast({
      title: "Session configured",
      description: "Your group discussion session is ready to start.",
      duration: 3000,
    });
  };

  const toggleSession = () => {
    setIsSessionActive(!isSessionActive);
    
    if (!isSessionActive) {
      toast({
        title: "Session started",
        description: "Group discussion is now in progress.",
        duration: 3000,
      });
    } else {
      toast({
        title: "Session paused",
        description: "Group discussion has been paused.",
        duration: 2000,
      });
    }
  };

  const resetSession = () => {
    setIsSessionConfigured(false);
    setIsSessionActive(false);
    toast({
      title: "Session reset",
      description: "The group discussion session has been reset.",
      duration: 2000,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Group Discussion Analyzer</h1>
        <p className="text-muted-foreground">Simulate and analyze group discussions for team dynamics.</p>
      </div>

      <Tabs defaultValue="setup" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="setup">Setup Discussion</TabsTrigger>
          <TabsTrigger value="session" disabled={!isSessionConfigured}>Live Session</TabsTrigger>
          <TabsTrigger value="analysis" disabled={!isSessionConfigured}>Analysis & Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="setup">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Discussion Configuration</CardTitle>
                <CardDescription>Set up your group discussion session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="topic">Discussion Topic</Label>
                    <Input 
                      id="topic" 
                      placeholder="Enter the discussion topic..." 
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Discussion Type</Label>
                    <Select defaultValue="problem-solving">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="problem-solving">Problem Solving</SelectItem>
                        <SelectItem value="brainstorming">Brainstorming</SelectItem>
                        <SelectItem value="decision-making">Decision Making</SelectItem>
                        <SelectItem value="conflict-resolution">Conflict Resolution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Duration</Label>
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
                  
                  <div className="space-y-2">
                    <Label>AI Behavior</Label>
                    <Select defaultValue="balanced">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="balanced">Balanced Participants</SelectItem>
                        <SelectItem value="challenging">Challenging Viewpoints</SelectItem>
                        <SelectItem value="supportive">Supportive Environment</SelectItem>
                        <SelectItem value="mixed">Mixed Personalities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handleStartSession}
                  disabled={!topic}
                >
                  Configure Discussion
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Participants</CardTitle>
                <CardDescription>Add and manage discussion participants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Input 
                      placeholder="Enter participant name..." 
                      value={newParticipant}
                      onChange={(e) => setNewParticipant(e.target.value)}
                    />
                    <Button onClick={handleAddParticipant}>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted px-4 py-2 font-medium text-sm">
                      Participant List ({participants.length})
                    </div>
                    <div className="divide-y">
                      {participants.map((participant, index) => (
                        <div key={index} className="flex items-center justify-between p-3">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={`https://api.dicebear.com/7.x/personas/svg?seed=${participant}`} />
                              <AvatarFallback>{participant.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{participant}</p>
                              <p className="text-xs text-muted-foreground">
                                {participant.includes('AI') ? 'AI Participant' : 'Human Participant'}
                              </p>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleRemoveParticipant(index)}
                            disabled={participant.includes('AI')}
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Discussion Topic Details</Label>
                    <Textarea 
                      placeholder="Provide additional details about the discussion topic..." 
                      rows={5}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="session">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Live Discussion</CardTitle>
                      <CardDescription>{topic}</CardDescription>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>00:00</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="relative flex-grow">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden border flex items-center justify-center">
                      {!isSessionActive ? (
                        <div className="text-center">
                          <Users className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-muted-foreground">Click Start Session to begin</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 h-full w-full p-2 gap-2">
                          {participants.slice(0, 4).map((participant, index) => (
                            <div key={index} className="bg-background rounded border flex flex-col items-center justify-center relative">
                              <Avatar className="h-16 w-16">
                                <AvatarImage src={`https://api.dicebear.com/7.x/personas/svg?seed=${participant}`} />
                                <AvatarFallback>{participant.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <span className="mt-2 text-sm font-medium">{participant}</span>
                              <div className="absolute bottom-2 right-2 flex space-x-1">
                                <div className="bg-success-500 h-2 w-2 rounded-full animate-pulse"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex gap-2">
                        <Button 
                          variant={isSessionActive ? "destructive" : "default"} 
                          onClick={toggleSession}
                        >
                          {isSessionActive ? "Pause Session" : "Start Session"}
                        </Button>
                        
                        <Button variant="outline" onClick={resetSession}>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Reset
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Live Metrics</CardTitle>
                  <CardDescription>Real-time discussion analytics</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Group Engagement</span>
                        <span className="font-medium">76%</span>
                      </div>
                      <Progress value={76} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Speaking Time Distribution</h3>
                      <div className="space-y-3">
                        {participants.map((participant, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>{participant}</span>
                              <span className="font-medium">{Math.floor(Math.random() * 30) + 10}%</span>
                            </div>
                            <Progress value={Math.floor(Math.random() * 30) + 10} className="h-1.5" />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Participation Type</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="border rounded p-2 text-center">
                          <div className="text-2xl font-bold text-brand-500">7</div>
                          <div className="text-xs text-muted-foreground">Questions</div>
                        </div>
                        <div className="border rounded p-2 text-center">
                          <div className="text-2xl font-bold text-brand-500">12</div>
                          <div className="text-xs text-muted-foreground">Ideas</div>
                        </div>
                        <div className="border rounded p-2 text-center">
                          <div className="text-2xl font-bold text-brand-500">5</div>
                          <div className="text-xs text-muted-foreground">Challenges</div>
                        </div>
                        <div className="border rounded p-2 text-center">
                          <div className="text-2xl font-bold text-brand-500">9</div>
                          <div className="text-xs text-muted-foreground">Agreements</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Discussion Climate</h3>
                      <div className="flex items-center space-x-2 text-xs">
                        <span>Competitive</span>
                        <div className="flex-grow h-2 bg-muted rounded-full overflow-hidden">
                          <div className="bg-brand-500 h-full" style={{ width: '35%' }}></div>
                        </div>
                        <span>Collaborative</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="analysis">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Discussion Summary</CardTitle>
                <CardDescription>AI-generated overview of group dynamics</CardDescription>
              </CardHeader>
              <CardContent className="h-[600px] overflow-y-auto">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Key Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      This 20-minute discussion on "{topic}" revealed a predominantly collaborative group dynamic with moderate engagement levels. The conversation progressed through four distinct phases: initial exploration, idea generation, critical evaluation, and consensus building.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Participation Analysis</h3>
                    <div className="space-y-4">
                      {participants.map((participant, index) => (
                        <div key={index} className="border rounded-lg p-4 space-y-2">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={`https://api.dicebear.com/7.x/personas/svg?seed=${participant}`} />
                              <AvatarFallback>{participant.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{participant}</p>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <span>{Math.floor(Math.random() * 30) + 10}% speaking time</span>
                                <span className="mx-2">•</span>
                                <span>{Math.floor(Math.random() * 15) + 5} contributions</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="font-medium">Communication Style:</span>
                              <span className="ml-1">{["Direct", "Analytical", "Supportive", "Questioning"][index % 4]}</span>
                            </div>
                            <div>
                              <span className="font-medium">Primary Role:</span>
                              <span className="ml-1">{["Initiator", "Facilitator", "Critic", "Harmonizer"][index % 4]}</span>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground">
                            {participant === "John Smith" && "Demonstrated strong leadership qualities by structuring the discussion and encouraging input from all participants. Asked probing questions that led to deeper analysis."}
                            {participant === "Sarah Lee" && "Excelled at building upon others' ideas and finding connections between different perspectives. Provided supportive feedback and helped maintain a positive group climate."}
                            {participant === "AI Participant 1" && "Contributed analytical insights and challenged assumptions when necessary. Helped keep the discussion on track and focused on key objectives."}
                            {participant === "AI Participant 2" && "Offered creative solutions and alternative viewpoints. Sometimes dominated conversation and could improve by creating more space for others."}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Discussion Flow Analysis</h3>
                    <div className="border rounded-lg p-4 space-y-4">
                      <div className="space-y-1">
                        <h4 className="font-medium text-sm">Topic Exploration</h4>
                        <div className="h-8 bg-muted rounded-md relative">
                          <div className="absolute inset-0 flex items-center px-3">
                            <div className="h-1 flex-grow bg-gradient-to-r from-brand-200 via-brand-500 to-brand-700 rounded-full"></div>
                          </div>
                          <div className="absolute top-1 left-[10%]">
                            <div className="h-6 w-6 rounded-full bg-brand-100 border border-brand-300 flex items-center justify-center text-xs">1</div>
                          </div>
                          <div className="absolute top-1 left-[30%]">
                            <div className="h-6 w-6 rounded-full bg-brand-100 border border-brand-300 flex items-center justify-center text-xs">2</div>
                          </div>
                          <div className="absolute top-1 left-[60%]">
                            <div className="h-6 w-6 rounded-full bg-brand-100 border border-brand-300 flex items-center justify-center text-xs">3</div>
                          </div>
                          <div className="absolute top-1 left-[85%]">
                            <div className="h-6 w-6 rounded-full bg-brand-100 border border-brand-300 flex items-center justify-center text-xs">4</div>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Initial framing</span>
                          <span>Idea generation</span>
                          <span>Critical evaluation</span>
                          <span>Resolution</span>
                        </div>
                      </div>
                      
                      <div className="space-y-1 text-sm">
                        <p><span className="font-medium">Key moments:</span></p>
                        <div className="pl-4 space-y-2">
                          <p>• <span className="font-medium">4:12</span> - Breakthrough moment when John connected the competing ideas</p>
                          <p>• <span className="font-medium">9:45</span> - Constructive debate between Sarah and AI Participant 1</p>
                          <p>• <span className="font-medium">14:30</span> - Group reached initial consensus on main approach</p>
                          <p>• <span className="font-medium">17:20</span> - Final action items assigned and agreed upon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Emotional Dynamics</h3>
                    <div className="border rounded-lg p-4">
                      <div className="h-40 relative">
                        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-muted/50 to-transparent rounded"></div>
                        <div className="absolute inset-0 flex items-end">
                          <div className="h-[60%] w-1/4 bg-success-200 rounded-t"></div>
                          <div className="h-[35%] w-1/4 bg-brand-200 rounded-t"></div>
                          <div className="h-[25%] w-1/4 bg-warning-200 rounded-t"></div>
                          <div className="h-[10%] w-1/4 bg-error-200 rounded-t"></div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 flex text-xs text-center text-muted-foreground">
                          <div className="w-1/4 p-1">Positive<br/>60%</div>
                          <div className="w-1/4 p-1">Neutral<br/>35%</div>
                          <div className="w-1/4 p-1">Tense<br/>25%</div>
                          <div className="w-1/4 p-1">Negative<br/>10%</div>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground">
                        The emotional tone of the discussion was predominantly positive (60%) with occasional tension during the critical evaluation phase. Group members showed mutual respect and constructive engagement even when disagreeing.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Group Performance</CardTitle>
                  <CardDescription>Evaluation metrics for this discussion</CardDescription>
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
                        <span className="text-3xl font-bold">73%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Task Completion</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Balanced Participation</span>
                        <span className="font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Constructive Climate</span>
                        <span className="font-medium">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Idea Quality</span>
                        <span className="font-medium">70%</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Action Orientation</span>
                        <span className="font-medium">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                  <CardDescription>AI-powered suggestions for improvement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-brand-500 pl-4 py-1">
                      <h3 className="font-medium">For the Group</h3>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li>• Consider establishing clearer role assignments at the beginning of discussions</li>
                        <li>• Create more opportunities for quieter members to contribute</li>
                        <li>• Document key decisions and action items throughout the conversation</li>
                        <li>• Allocate specific time for divergent thinking before convergent evaluation</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-success-500 pl-4 py-1">
                      <h3 className="font-medium">For Individual Participants</h3>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li>• <span className="font-medium">John:</span> Continue your effective facilitation, but create more space for others</li>
                        <li>• <span className="font-medium">Sarah:</span> Your connecting skills are valuable; consider taking more initiative</li>
                        <li>• <span className="font-medium">AI Participant 1:</span> Balance analytical contributions with more supportive comments</li>
                        <li>• <span className="font-medium">AI Participant 2:</span> Monitor speaking time and practice active listening</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-warning-500 pl-4 py-1">
                      <h3 className="font-medium">Future Discussion Structure</h3>
                      <p className="mt-2 text-sm">
                        Based on this group's dynamics, we recommend a structured approach with timed sections for ideation, evaluation, and decision-making. A designated facilitator role that rotates between members could improve balanced participation.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Full Analysis Report
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

export default GroupDiscussion;
