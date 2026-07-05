import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Clock, ShieldCheck, Zap, Server } from "lucide-react";

const AboutSection = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/rishu-raj-690508190/",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub", 
      icon: Github,
      url: "https://github.com/rishu-raj007",
      color: "hover:text-gray-300"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:rishuraj331@gmail.com",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about automation, cloud infrastructure, and continuous improvement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8">
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                  "Experienced DevOps Engineer with 4+ years of expertise in cloud infrastructure automation and operations. Proficient in Terraform for Infrastructure as Code, Docker for containerized deployments, and Kubernetes for orchestration. Committed to building secure, cost-optimized, and highly available cloud environments."
                </blockquote>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 bg-gradient-card border border-border px-4 py-3 rounded-lg transition-all duration-300 hover:shadow-glow ${link.color} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="text-foreground">{link.name}</span>
                </a>
              ))}
            </div>

            <Button 
              className="bg-gradient-primary hover:shadow-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
              onClick={() => window.open("https://drive.google.com/file/d/14JmTwtuSiajNzW53CY_ErIjPLbTIAuWc/view?usp=drive_link", "_blank")}
            >
              <Download className="w-4 h-4 mr-2"  />
              Download Resume
            </Button>
          </div>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-1">4+</h3>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Server className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-1">10+</h3>
                  <p className="text-xs text-muted-foreground">Projects Deployed</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-1">100%</h3>
                  <p className="text-xs text-muted-foreground">Automation Focus</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-1">24/7</h3>
                  <p className="text-xs text-muted-foreground">System Reliability</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Core Competencies</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Infrastructure as Code (Terraform)</span>
                      <span className="text-primary font-medium">95%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Container Orchestration (Kubernetes/AKS)</span>
                      <span className="text-primary font-medium">90%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Cloud Architecture (Microsoft Azure)</span>
                      <span className="text-primary font-medium">92%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">CI/CD Pipeline Automation (ADO & Git)</span>
                      <span className="text-primary font-medium">95%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;