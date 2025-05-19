import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import movieImg from "@/assets/movie.jpg";
import thesisImg from "@/assets/thesis.png";
import hateImg from "@/assets/hate.png";
import imsImg from "@/assets/ims.jpg";
import bankImg from "@/assets/bank.jpg";
import cacheImg from "@/assets/cache.png";
import davImg from "@/assets/dav.jpg";
import dashImg from "@/assets/dash.jpg";
import bbImg from "@/assets/bb.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Movie Recommendation System",
    description: "An NLP-based movie recommender using Sentence Transformers and cosine similarity, deployed via Streamlit.",
    image: movieImg,
    tags: ["Python", "NLP", "Streamlit", "HuggingFace", "Sentence Transformers"],
    githubUrl: "https://github.com/kinturkt/MovieFindr",
    liveUrl: "https://huggingface.co/spaces/kinturkt/MovieFindr"
  },
  {
    id: 2,
    title: "Digital Thesis Repository",
    description: "Centralized system for academic thesis management with RBAC, real-time chat, and WordPress blogs.",
    image: thesisImg,
    tags: ["Next.js", "React", "MySQL", "API", "HTML", "CSS", "WordPress", "Cloud"],
    liveUrl: "https://sxb3349.uta.cloud/",
    githubUrl: "https://github.com/kinturkt/ScholarVault",
  },
  {
    id: 3,
    title: "Hate Speech Detection",
    description: "Built BERT and LSTM-based hate speech classifier with 93% accuracy using NLP and deep learning.",
    image: hateImg,
    tags: ["Python", "TensorFlow", "Keras", "BERT", "LSTM", "NLP"],
    githubUrl: "https://github.com/kinturkt/HateScan",
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "Flask-based system to manage inventory, products, and transactions with real-time updates.",
    image: imsImg,
    tags: ["Python", "Flask", "SQLite", "JSON"],
    githubUrl: "https://github.com/kinturkt/Inventory-Management-System-IMS-Project",
  },
  {
    id: 5,
    title: "Blood Bank and Donation Management System",
    description: "PHP-based system to manage blood groups, donors and users.",
    image: bbImg,
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    githubUrl: "https://github.com/kinturkt/Blood-Bank-and-Donation-Management-System",
  },

  {
    id: 6,
    title: "Banking System using SQL and Python",
    description: "CLI-based banking app to manage accounts, transactions, and loans with optimized SQL queries.",
    image: bankImg,
    tags: ["Python", "Azure MySQL", "CLI"],
    githubUrl: "https://github.com/kinturkt/BankFusion",
  },
  {
    id: 7,
    title: "DBCacheOptimizer",
    description: "Azure-hosted system optimizing SQL queries with Redis caching and performance dashboard.",
    image: cacheImg,
    tags: ["Azure SQL", "Redis", "MS Azure", "HTML", "CSS", "Flask"],
    githubUrl: "https://github.com/kinturkt/DBCacheOptimizer",
  },
  {
    id: 8,
    title: "Zomato Restaurant Data Analysis and Visualization",
    description: "Analyzed Zomato restaurant dataset for insights and visualized data trends using Python, Pandas, and Matplotlib.",
    image: davImg,
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis", "Data Visualization", "Jupyter Notebook", "Power BI"],
    githubUrl: "https://github.com/kinturkt/ZomatoViz"
  },
  {
    id: 9,
    title: "Amazon Prime Dashboard using Streamlit",
    description: "Developed an interactive dashboard for analyzing Amazon Prime data using Streamlit, showcasing key statistics and trends.",
    image: dashImg,
    tags: ["Streamlit", "Python", "Data Visualization", "Pandas", "Matplotlib", "Amazon Prime"],
    githubUrl: "https://github.com/kinturkt/Amazon-Prime-Dashboard-using-Streamlit"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="section-subtitle text-center mx-auto">
          Check out some of the cool projects I've worked on! These projects allowed me to tackle interesting challenges and create real-world value.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <Card key={project.id} className="project-card h-full flex flex-col animate-slide-up">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-200 text-gray-800 hover:bg-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                {project.githubUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                
                {project.liveUrl && (
                  <Button asChild size="sm" className="bg-portfolio-primary hover:bg-portfolio-secondary">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
