import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Container,
  Settings,
  Shield,
  BarChart3,
  Users,
  Github,
  Terminal,
  CloudSnow,
  Box,
  Cog,
  Zap,
  Activity,
  TrendingUp,
  MessageSquare,
  Star
} from "lucide-react";

const SkillsSection = () => {
  const getBadgeStyle = (categoryTitle: string) => {
    const title = categoryTitle.toLowerCase();
    if (title.includes("cloud")) {
      return "bg-blue-500/15 text-blue-400 border-blue-500/20 hover:bg-blue-500/25";
    }
    if (title.includes("containers")) {
      return "bg-emerald-500/15 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/25";
    }
    if (title.includes("ticketing")) {
      return "bg-orange-500/15 text-orange-400 border-orange-500/20 hover:bg-orange-500/25";
    }
    if (title.includes("tools")) {
      return "bg-purple-500/15 text-purple-400 border-purple-500/20 hover:bg-purple-500/25";
    }
    if (title.includes("security")) {
      return "bg-rose-500/15 text-rose-400 border-rose-500/20 hover:bg-rose-500/25";
    }
    if (title.includes("monitoring")) {
      return "bg-amber-500/15 text-amber-400 border-amber-500/20 hover:bg-amber-500/25";
    }
    return "bg-cyan-500/15 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/25";
  };

  const skillCategories = [
    {
      title: "Cloud & OS",
      icon: Cloud,
      skills: ["Azure", "Linux"],
      color: "text-blue-400"
    },
    {
      title: "Containers & IaC",
      icon: Container,
      skills: ["Docker", "Terraform", "Kubernetes"],
      color: "text-green-400"
    },
    {
      title: "Ticketing Tools",
      icon: Settings,
      skills: ["Service Now"],
      color: "text-orange-400"
    },
    {
      title: "Tools & CLI",
      icon: Terminal,
      skills: ["Azure CLI", "Azure Storage", "Git", "Azure Pipelines", "ADO"],
      color: "text-purple-400"
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      skills: ["SonarQube", "Veracode", "TFsec", "TFLint", "checkov"],
      color: "text-red-400"
    },
    {
      title: "Monitoring",
      icon: BarChart3,
      skills: ["Prometheus", "Grafana", "Datadog"],
      color: "text-yellow-400"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Agile", "Team collaboration", "Communication", "Problem-Solving", "Proactive Learning", "Accountability", "Leadership", "Kanban"],
      color: "text-cyan-400"
    }
  ];

  const interests = [
    { name: "Photography", icon: Star },
    { name: "Playing With AI tools", icon: Zap },
    { name: "Continuous Learning", icon: TrendingUp },
    { name: "Open Source", icon: Github }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern DevOps practices, cloud infrastructure, and automation technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-gradient-card border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className={`border text-xs px-2.5 py-0.5 transition-colors ${getBadgeStyle(category.title)}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Interests & Hobbies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, index) => (
              <div 
                key={interest.name}
                className="flex items-center space-x-2 bg-gradient-card border border-border px-4 py-2 rounded-lg hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                <interest.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Hindi", "English", "Bangla"].map((language, index) => (
              <Badge 
                key={language}
                variant="outline" 
                className="text-lg px-6 py-2 border-primary text-primary hover:bg-primary/10 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.9}s` }}
              >
                {language}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;