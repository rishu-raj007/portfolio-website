import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe, Cpu, Code2 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Freelance DevOps Consultant & UI Developer",
      subtitle: "crystarawater.com",
      description: "Architected and deployed the website infrastructure on a scalable cloud environment, ensuring high availability and optimal page load performance. Established automated deployment workflows to streamline content updates and site maintenance. Developed the complete UI with the help of multiple AI integrations.",
      tags: ["Cloud Architecture", "UI Development", "AI Integrations", "Automation", "Web Deployment"],
      links: [
        {
          label: "Visit Site",
          icon: Globe,
          url: "https://crystarawater.com"
        }
      ]
    },
    {
      title: "Azure Databricks Workspace Automation",
      subtitle: "GitHub Project",
      description: "Complete infrastructure automation of Azure Databricks workspace creation using Terraform and GitHub Actions. Designed to handle user access management, role assignments, and compute policies dynamically.",
      tags: ["Azure Databricks", "Terraform", "GitHub Actions", "IaC", "Security (RBAC)"],
      links: [
        {
          label: "GitHub Repository",
          icon: Github,
          url: "https://github.com/rishu-raj007"
        }
      ]
    },
    {
      title: "Terraform Load Balancer",
      subtitle: "GitHub Project",
      description: "Infrastructure automation for setting up high-performance load balancers using Terraform and GitHub Actions. Provides a standardized template for traffic distribution across multiple Azure compute resources.",
      tags: ["Load Balancing", "Terraform", "GitHub Actions", "Azure Networking", "High Availability"],
      links: [
        {
          label: "GitHub Repository",
          icon: Github,
          url: "https://github.com/rishu-raj007"
        }
      ]
    }
  ];

  const getTagStyle = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes("terraform") || t.includes("iac")) {
      return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
    }
    if (t.includes("azure") || t.includes("cloud")) {
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    }
    if (t.includes("kubernetes") || t.includes("load balancing") || t.includes("networking")) {
      return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
    }
    if (t.includes("github actions") || t.includes("automation")) {
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    }
    if (t.includes("ui") || t.includes("integrations")) {
      return "bg-rose-500/10 text-rose-400 border-rose-500/20";
    }
    return "bg-primary/10 text-primary border-primary/20";
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A showcase of cloud infrastructure, automation pipelines, and interface design projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border shadow-card hover:shadow-glow hover:-translate-y-2 hover:border-primary/30 transition-all duration-500 flex flex-col justify-between h-full animate-fade-in group/card"
              style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
            >
              <div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2 text-primary mb-2">
                    <div className="group-hover/card:scale-110 group-hover/card:text-primary-glow transition-transform duration-300">
                      {index === 0 ? <Globe className="w-5 h-5" /> : index === 1 ? <Cpu className="w-5 h-5" /> : <Code2 className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-primary/80">
                      {project.subtitle}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground leading-snug">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className={`border text-xs px-2.5 py-0.5 transition-colors ${getTagStyle(tag)}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-border/50 flex items-center justify-end">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold text-primary hover:text-primary-glow transition-colors group cursor-pointer"
                  >
                    <span className="mr-1.5">{link.label}</span>
                    <link.icon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
