
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart2, FileText, Users, Video, ArrowRight, Check } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold">R</div>
            <span className="text-xl font-bold">RecruitifyAI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/login">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 md:py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              AI-Powered Recruitment Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Streamline your hiring process with intelligent resume scanning, interview simulations, 
              group discussions, and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/login">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Schedule Demo
              </Button>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">All-in-One Recruitment Solution</h2>
            <p className="text-lg text-muted-foreground">
              Our platform combines four powerful AI modules to transform your recruitment process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resume Scanner</h3>
              <p className="text-muted-foreground mb-4">
                AI-powered resume analysis optimized for ATS with skill-matching and job fit scoring.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">ATS optimization feedback</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Keyword and skill gap analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Job fit scoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-success-100 flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-success-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interview Simulator</h3>
              <p className="text-muted-foreground mb-4">
                Practice with AI interviewers and receive personalized feedback in real-time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Role-specific interview questions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Real-time performance analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Video and speech feedback</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-warning-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-warning-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Group Discussion</h3>
              <p className="text-muted-foreground mb-4">
                Simulate and analyze group dynamics with AI-powered participants and feedback.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Multiple AI participants</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Participation analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Teamwork and leadership metrics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-error-100 flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-error-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hiring Predictor</h3>
              <p className="text-muted-foreground mb-4">
                Predict candidate success probability with AI-powered analytics and insights.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Success probability scoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Comprehensive assessment integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">Data-driven hiring recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Recruitment Process?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of companies using RecruitifyAI to find the perfect candidates faster.
            </p>
            <Link to="/login">
              <Button size="lg">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold">R</div>
              <span className="text-xl font-bold">RecruitifyAI</span>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-center md:text-left">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} RecruitifyAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
