import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const achievements = [
    "Configured and managed Azure Entra ID for secure identity and access management",
    "Designed secure Azure networks with VNets, subnets, NSGs",
    "Provisioned Azure Compute (VMs, Scale Sets, AKS)",
    "Implemented CI/CD with Azure Pipelines & Git",
    "Orchestrated infrastructure using Terraform",
    "Managed AKS clusters for production-grade containerized workloads",
    "Automated provisioning with reusable Terraform modules",
    "Used Docker for containerization",
    "Monitored systems with Prometheus & Grafana"
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-border shadow-card animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Building2 className="w-6 h-6 mr-2 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  Bachelor of Technology
                </h4>
                <p className="text-primary font-medium">REC Ramgarh</p>
                <p className="text-muted-foreground">2021 • CGPA: 7.8</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card animate-fade-in" style={{ animationDelay: "1.3s" }}>
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-primary" />
                Career Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-foreground font-semibold">3.2+ Years</p>
                  <p className="text-muted-foreground text-sm">DevOps Experience</p>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Cloud Infrastructure</p>
                  <p className="text-muted-foreground text-sm">Azure Specialist</p>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Automation Expert</p>
                  <p className="text-muted-foreground text-sm">CI/CD & Infrastructure as Code</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;