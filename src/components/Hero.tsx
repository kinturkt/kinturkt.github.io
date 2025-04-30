import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
const Hero = () => {
  return <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="flex flex-col items-start max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark leading-tight mb-6">
            Hi, I'm <span className="text-portfolio-primary">Kintur Shah</span>
            <br />
            <span className="text-3xl md:text-4xl">Software Developer | Data Scientist</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
          I have 2+ years of experience in building scalable web applications, data science, machine learning models and backend development. Skilled in JavaScript, React, PHP, Python, and MySQL, with hands-on experience in Flask, Django RESTful APIs, Laravel, and MS Azure. 
          
          {/* Experienced in developing ML-powered solutions using scikit-learn, NLP, and Python-based pipelines. Currently expanding knowledge in Large Language Models (LLMs) and generative AI to bridge software development with cutting-edge AI innovation. Passionate about clean code, intelligent systems, and impactful user experiences. */}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild variant="default" className="bg-portfolio-primary hover:bg-portfolio-secondary">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
          
          <div className="flex space-x-4 mb-12">
            <a href="https://github.com/kinturkt" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-portfolio-primary transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/kintur-shah" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-portfolio-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
          
          <a href="#projects" className="flex items-center text-portfolio-primary font-medium hover:text-portfolio-secondary transition-colors">
            Scroll to see my work
            <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;