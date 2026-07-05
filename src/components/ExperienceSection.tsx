import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Briefcase, GraduationCap, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Senior DevOps Engineer",
      company: "PriceWaterhouse Cooper (PwC) India",
      location: "Kolkata/India",
      period: "Oct, 2025 - Present",
      bullets: [
        "Leveraged Docker to containerize 10+ applications, reducing deployment time by 40% and ensuring consistency across development, staging, and production environments.",
        "Developed reusable, parameterized Terraform modules to manage Azure storage, compute, and networking resources, cutting infrastructure provisioning time by 60% and improving scalability.",
        "Administered and managed Azure Databricks workspaces for 15+ teams, including user access, role assignments, and cluster policies, supporting data engineering workflows at scale.",
        "Configured and maintained cluster environments, optimizing performance and resource utilization, resulting in a 25% reduction in cloud compute costs through auto-scaling and auto-termination strategies.",
        "Implemented secure access controls using Azure Active Directory (AAD), RBAC, and managed identities, reducing unauthorized access incidents by 100% across all workspaces.",
        "Monitored workspace usage, job performance, and cluster health using Azure Monitor and built-in tools, achieving 99.9% uptime across critical Databricks environments.",
        "Automated workspace setup and cluster provisioning using Terraform, reducing manual configuration effort by 50% and enabling consistent, repeatable deployments.",
        "Managed secrets and credentials securely using Azure Key Vault, eliminating hardcoded credentials across 15+ pipelines and ensuring compliance with security standards.",
        "Optimized job scheduling and workflow orchestration using Databricks Jobs and Pipelines, improving job completion rates by 30% and reducing pipeline failures."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Tata Consultancy Services",
      location: "Kolkata/India",
      period: "May, 2022 - Sep, 2025",
      bullets: [
        "Architected and deployed scalable Azure infrastructure including VNets, subnets, and NSGs using Terraform, resulting in a 50% increase in deployment speed and a standardized, secure network topology.",
        "Implemented centralized identity management using Azure Entra ID and RBAC, reducing unauthorized access incidents by 20% and ensuring full compliance with internal security policies.",
        "Streamlined software delivery by implementing end-to-end CI/CD pipelines in Azure DevOps, decreasing manual intervention by 50% and significantly improving release reliability.",
        "Managed resilient AKS clusters and containerized applications using Docker, achieving 99.9% system availability through optimized pod scaling and lifecycle management.",
        "Developed and maintained modular Terraform templates for infrastructure provisioning, ensuring consistent, repeatable environment setups across development, staging, and production."
      ]
    }
  ];

  const achievements = [
    {
      title: "Director Appreciation",
      description: "Received Director appreciation for automating PBI creation for multiple ServiceNow tickets in the Azure DevOps (ADO) board."
    },
    {
      title: "Launchpad Trainer",
      description: "Selected to give Launchpad training to College Freshers on Cloud and Microservices by PwC."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            My professional journey, academic background, and key career achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Experience - Left/Center Column (takes 2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-semibold text-foreground flex items-center mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Briefcase className="w-6 h-6 mr-2 text-primary" />
              Work History
            </h3>
            
            <div className="space-y-8 border-l-2 border-primary/20 pl-6 ml-3 relative">
              {experiences.map((exp, index) => {
                const isCurrent = index === 0;
                return (
                  <div 
                    key={index} 
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
                  >
                    {/* Timeline node */}
                    <div className={`absolute -left-[35px] top-1.5 w-4 h-4 rounded-full border-4 border-background shadow-glow ${
                      isCurrent ? 'bg-emerald-400 animate-pulse' : 'bg-primary'
                    }`}></div>
                    
                    <Card className={`bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 ${
                      isCurrent ? 'border-primary/50 ring-1 ring-primary/20 shadow-primary/5' : 'border-border'
                    }`}>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                              {isCurrent && (
                                <Badge className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-xs font-semibold px-2.5 py-0.5">
                                  Current Role
                                </Badge>
                              )}
                            </div>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                          <div className="flex flex-col items-start sm:items-end text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1 text-primary/70" />
                              {exp.period}
                            </span>
                            <span className="flex items-center mt-1">
                              <MapPin className="w-4 h-4 mr-1 text-primary/70" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
                          {exp.bullets.map((bullet, idx) => (
                            <li key={idx} className="hover:text-foreground transition-colors duration-200">{bullet}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education & Achievements - Right Column (takes 1 col) */}
          <div className="space-y-8">
            {/* Education Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground flex items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <GraduationCap className="w-6 h-6 mr-2 text-primary" />
                Education
              </h3>
              
              <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-foreground">
                    Bachelor of Technology (BTech)
                  </h4>
                  <p className="text-primary font-medium mt-1">REC, Ramgarh</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-primary/70" />
                      Graduated: Aug, 2021
                    </span>
                    <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded font-medium">
                      7.8 CGPA
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground flex items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Award className="w-6 h-6 mr-2 text-primary" />
                Achievements
              </h3>
              
              <div className="space-y-4">
                {achievements.map((ach, index) => (
                  <Card 
                    key={index} 
                    className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.15 + 0.5}s` }}
                  >
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-primary mb-2 flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                        {ach.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed pl-3.5">
                        {ach.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;