import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

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
                  "Experienced DevOps Engineer with a strong background in infrastructure automation and cloud operations. Proficient in Terraform, Docker, Kubernetes, and Microsoft Azure. Skilled in building scalable, secure, and automated CI/CD pipelines and containerized deployments. Passionate about solving problems with automation and continuous learning."
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
              <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">3.2+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
                  <p className="text-muted-foreground">Projects Deployed</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
                  <p className="text-muted-foreground">Automation Focus</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
                  <p className="text-muted-foreground">System Reliability</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Core Competencies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Infrastructure as Code (Terraform)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Container Orchestration (Kubernetes)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Cloud Architecture (Microsoft Azure)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    CI/CD Pipeline Automation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;