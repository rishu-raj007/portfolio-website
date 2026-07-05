import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/rishu-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-0">
      {/* Background Image with Overlay */}
      <div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="absolute inset-0 bg-gradient-hero/90"></div>
</div>


      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Content - Profile Image */}
          <div className="flex-shrink-0 animate-fade-in relative group mx-auto lg:mx-0" style={{ animationDelay: "0.2s" }}>
            {/* Ambient Glow */}
            <div className="absolute -inset-2 bg-gradient-primary rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            {/* Main Image Card */}
            <div className="relative w-56 h-72 sm:w-80 sm:h-96 lg:w-80 lg:h-[420px] bg-card rounded-2xl overflow-hidden border border-primary/30 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
              <img 
                src={profileImage} 
                alt="Rishu Ravi Raj" 
                className="w-full h-full object-cover object-[center_45%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              {/* Tiny dynamic tag on image */}
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-lg text-xs font-semibold text-primary">
                Cloud & DevOps
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs text-emerald-400 mb-6 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-semibold tracking-wider uppercase">Open to DevOps Opportunities</span>
            </div>

            <h1 className="text-4xl  sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6">
              <span className="block">Rishu Ravi Raj</span>
              <span className="block text-transparent bg-gradient-primary bg-clip-text font-extrabold">
                DevOps Engineer
              </span>
            </h1>
            
            <p className="text-lg text-white sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl lg:max-w-none leading-relaxed">
              4+ years of expertise in cloud infrastructure automation, CI/CD pipelines, and container orchestration.
            </p>

            <div className="flex items-center justify-center text-white lg:justify-start text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <MapPin className="w-5  h-5 mr-2 text-primary" />
              <span>Kolkata, WB, India</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-gradient-primary hover:shadow-primary transition-all duration-300 text-lg px-8 py-3"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              
              <Button 
                onClick={() => scrollToSection('about')}
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-3"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://www.linkedin.com/in/rishu-raj-690508190/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
              >
                <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              
              <a
                href="https://github.com/rishu-raj007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
              >
                <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              
              <a
                href="mailto:rishuraj331@gmail.com"
                className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
              >
                <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <button 
            onClick={() => scrollToSection('about')}
            className="w-10 h-10 rounded-full border-2 border-primary/50 flex items-center justify-center hover:border-primary transition-colors duration-300 group"
          >
            <ArrowDown className="w-5 h-5 text-primary group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;