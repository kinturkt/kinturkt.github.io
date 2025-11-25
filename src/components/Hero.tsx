import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import ktImage from "@/assets/kt.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16 animate-fade-in">

          {/* Left: Profile Image */}
          <div className="w-72 h-80 flex-shrink-0 shadow-lg rounded-md overflow-hidden">
            <img
              src={ktImage}
              alt="Kintur Shah"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark leading-tight mb-4">
              Hi, I'm <span className="text-portfolio-primary">Kintur Shah</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              AI/ML Engineer • Data Scientist • LLM Developer
            </h2>

            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl">
              I design and build intelligent systems powered by machine learning, 
              large language models, and cloud-native architectures. My experience spans 
              data pipelines, RAG systems, and production-grade ML deployments using tools like 
              Python, LangChain, LangGraph, OpenAI, Claude, Gemini, AWS Bedrock, Vertex AI, 
              PyTorch, TensorFlow, and modern vector databases.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Button asChild variant="default" className="bg-portfolio-primary hover:bg-portfolio-secondary">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#projects">View My Work</a>
              </Button>
            </div>

            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/kinturkt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-portfolio-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/kintur-shah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-portfolio-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>

            <a
              href="#projects"
              className="flex items-center text-portfolio-primary font-medium hover:text-portfolio-secondary transition-colors"
            >
              Scroll to see my work
              <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;