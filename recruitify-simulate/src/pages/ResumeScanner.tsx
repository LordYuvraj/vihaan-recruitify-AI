
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { FileText, Upload, CheckCircle, AlertCircle, Download, Clipboard, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ResumeScanner = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      toast({
        title: "Resume uploaded",
        description: `File: ${e.target.files[0].name}`,
        duration: 3000,
      });
    }
  };

  const handleAnalyze = () => {
    if (!file || !jobDescription) {
      toast({
        title: "Missing information",
        description: "Please upload a resume and enter a job description.",
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
        description: "Your resume has been analyzed successfully!",
        duration: 3000,
      });
    }, 3000);
  };

  const resetAnalysis = () => {
    setFile(null);
    setJobDescription("");
    setIsAnalyzed(false);
    toast({
      title: "Reset complete",
      description: "You can now start a new analysis.",
      duration: 2000,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Resume Scanner</h1>
        <p className="text-muted-foreground">Analyze your resume for ATS optimization and job fit scoring.</p>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload Resume</TabsTrigger>
          <TabsTrigger value="results" disabled={!isAnalyzed}>Results</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Upload Resume</CardTitle>
                <CardDescription>Upload your resume in PDF, DOCX, or TXT format</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors" onClick={() => document.getElementById("resume-upload")?.click()}>
                    <input
                      id="resume-upload"
                      type="file"
                      className="hidden"
                      accept=".pdf,.docx,.doc,.txt"
                      onChange={handleFileChange}
                    />
                    <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                    <h3 className="text-lg font-medium mb-1">Drag & drop or click to upload</h3>
                    <p className="text-sm text-muted-foreground">Supports PDF, DOCX, and TXT (Max 5MB)</p>
                  </div>
                  
                  {file && (
                    <div className="flex items-center p-3 bg-muted rounded-lg">
                      <FileText className="h-5 w-5 text-brand-500 mr-2" />
                      <span className="text-sm font-medium">{file.name}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="ml-auto" 
                        onClick={(e) => {
                          e.stopPropagation();
                          setFile(null);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
                <CardDescription>Add the job description for optimal matching</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input id="job-title" placeholder="e.g. Senior Software Engineer" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="job-description">Job Description</Label>
                    <Textarea 
                      id="job-description" 
                      placeholder="Paste the job description here..." 
                      rows={10}
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing || !file || !jobDescription}
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing Resume...
                    </>
                  ) : (
                    "Analyze Resume"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="results">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Resume Analysis</CardTitle>
                <CardDescription>AI-powered feedback and metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2 text-center">
                    <span className="text-4xl font-bold text-brand-600">84%</span>
                    <p className="text-sm text-muted-foreground">Overall Match Score</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Skills Match</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Experience Match</span>
                        <span className="font-medium">76%</span>
                      </div>
                      <Progress value={76} className="h-2" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Education Match</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>ATS Readability</span>
                        <span className="font-medium">88%</span>
                      </div>
                      <Progress value={88} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" onClick={resetAnalysis}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  New Analysis
                </Button>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Detailed Feedback</CardTitle>
                <CardDescription>AI recommendations to improve your resume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Key Strengths</h3>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">Strong technical skills that match the job requirements, especially in React, Node.js, and cloud technologies.</p>
                      </div>
                      <div className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">Quantified achievements with measurable results (e.g., improved performance by 40%, reduced costs by 25%).</p>
                      </div>
                      <div className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">Clear and well-structured work experience section with relevant job titles.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Areas for Improvement</h3>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <AlertCircle className="h-5 w-5 text-error-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">Missing keywords related to project management and agile methodologies that appear in the job description.</p>
                      </div>
                      <div className="flex gap-2">
                        <AlertCircle className="h-5 w-5 text-error-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">Consider adding a skills section at the top to improve ATS scanning.</p>
                      </div>
                      <div className="flex gap-2">
                        <AlertCircle className="h-5 w-5 text-error-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">The resume is slightly too dense with text, which may impact readability. Consider increasing white space.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Suggested Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Agile", "JIRA", "Scrum", "CI/CD", "DevOps", "AWS", "System Design", "REST API", "Microservices", "Unit Testing"].map((keyword) => (
                        <div key={keyword} className="bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-sm">
                          {keyword}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Optimized Resume Preview</h3>
                    <div className="relative border rounded-lg p-4 bg-muted/30">
                      <p className="text-sm text-muted-foreground">The AI has generated an optimized version of your resume tailored for this specific job description. You can view and download it below.</p>
                      <div className="mt-2 flex items-center">
                        <FileText className="h-5 w-5 text-brand-500 mr-2" />
                        <span className="text-sm font-medium">optimized_resume.pdf</span>
                        <Button variant="ghost" size="sm" className="ml-auto">
                          <Clipboard className="mr-2 h-4 w-4" />
                          Copy Text
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
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

export default ResumeScanner;
