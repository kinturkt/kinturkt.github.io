import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import movieImg from "@/assets/movie.jpg";
import thesisImg from "@/assets/thesis.png";
import hateImg from "@/assets/hate.png";
import bankImg from "@/assets/bank.jpg";
import cacheImg from "@/assets/cache.png";
import dashImg from "@/assets/dash.jpg";
import sqlImg from "@/assets/sql.png";
import atsImg from "@/assets/ats.png";
import financialAssistantImg from "@/assets/finance.jpg";

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
    title: "Financial Assistant Chatbot",
    description:
      "AI powered financial analysis assistant leveraging Vertex AI and RAG to answer financial queries with high retrieval relevance and reduced manual lookup time.",
    image: financialAssistantImg,
    tags: [
      "Python",
      "RAG",
      "Vector Search",
      "Embeddings",
      "Vertex AI",
      "Cloud SQL",
      "pgvector",
      "Streamlit",
      "LLM",
      "GCP",
    ],
    liveUrl:
      "https://prologis-assistant-98045253150.us-central1.run.app/",
    githubUrl:
      "https://github.com/kinturkt/Financial_Assistant_Chatbot_GCP",
  },
  {
    id: 2,
    title: "Intelligent ATS Resume Analyzer",
    description:
      "ATS aware resume analyzer that compares resumes to job descriptions, surfaces missing keywords, scores fit, and generates cover letter snippets using JSON structured prompting.",
    image: atsImg,
    tags: [
      "Python",
      "NLP",
      "JSON Prompting",
      "ATS",
      "Gemini",
      "Resume Parsing",
      "Text Analysis",
      "Streamlit",
      "FastAPI",
    ],
    liveUrl:
      "https://huggingface.co/spaces/kinturkt/Intelligent_ATS_Resume_Analyzer",
    githubUrl: "http://bit.ly/4oWYTQL",
  },
  {
    id: 3,
    title: "SQLMind – LLM SQL Data Analyst",
    description:
      "Text to SQL data analyst that converts natural language to SQL, allows CSV uploads, infers schema, and returns both generated SQL and results for transparent analysis.",
    image: sqlImg,
    tags: [
      "Python",
      "Text-to-SQL",
      "LLM",
      "Gemini",
      "FastAPI",
      "Streamlit",
      "SQLite",
      "CSV Ingestion",
      "Pandas",
    ],
    githubUrl: "http://bit.ly/4n13qR9",
  },
  {
    id: 4,
    title: "Movie Recommendation System",
    description:
      "Semantic movie recommendation engine using Sentence Transformers and cosine similarity to surface context aware movie suggestions.",
    image: movieImg,
    tags: [
      "NLP",
      "Semantic Search",
      "HuggingFace",
      "Sentence Transformers",
      "Cosine Similarity",
      "Streamlit",
    ],
    githubUrl: "https://github.com/kinturkt/MovieFindr",
    liveUrl: "https://huggingface.co/spaces/kinturkt/MovieFindr",
  },
  {
    id: 5,
    title: "Hate Speech Detection",
    description:
      "Deep learning classifier using BERT and LSTM that detects hate speech and toxicity with high accuracy after text cleaning, tokenization, and class balancing.",
    image: hateImg,
    tags: [
      "Deep Learning",
      "BERT",
      "LSTM",
      "TensorFlow",
      "Keras",
      "Classification",
      "NLP",
    ],
    githubUrl: "https://github.com/kinturkt/HateScan",
  },
  {
    id: 6,
    title: "DBCacheOptimizer",
    description:
      "Cloud hosted system that improves SQL query latency with Redis caching and a performance dashboard to visualize cache hit ratios and response times.",
    image: cacheImg,
    tags: [
      "Redis",
      "Caching",
      "Azure SQL",
      "Latency Optimization",
      "Flask",
      "Performance Dashboard",
    ],
    githubUrl: "https://github.com/kinturkt/DBCacheOptimizer",
  },
  {
    id: 7,
    title: "Digital Thesis Repository",
    description:
      "Full stack academic thesis management platform with RBAC, MySQL, real time chat using WebSockets, and WordPress integration for content publishing.",
    image: thesisImg,
    tags: [
      "Next.js",
      "RBAC",
      "MySQL",
      "WebSockets",
      "WordPress",
      "React",
      "REST API",
    ],
    liveUrl: "https://sxb3349.uta.cloud/",
    githubUrl: "https://github.com/kinturkt/ScholarVault",
  },
  {
    id: 8,
    title: "Amazon Prime Dashboard",
    description:
      "Interactive analytics dashboard on the Amazon Prime dataset, enabling exploration of content trends and distributions through multiple slicing dimensions.",
    image: dashImg,
    tags: [
      "Streamlit",
      "Analytics",
      "Data Visualization",
      "Pandas",
      "Matplotlib",
      "EDA",
    ],
    githubUrl:
      "https://github.com/kinturkt/Amazon-Prime-Dashboard-using-Streamlit",
    liveUrl: "https://amazon-prime-dashboard-by-kt.streamlit.app/",
  },
  {
    id: 9,
    title: "Banking System CLI",
    description:
      "Command line banking system that supports accounts, transactions, and loans using relational modeling and SQL primitives.",
    image: bankImg,
    tags: ["Python", "MySQL", "CLI", "Account Management", "Transactions"],
    githubUrl: "https://github.com/kinturkt/BankFusion",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="section-subtitle text-center mx-auto">
          Check out some of the projects I have built. These focus on AI, data, and cloud driven problem solving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="project-card h-full flex flex-col animate-slide-up"
            >
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
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-gray-200 text-gray-800 hover:bg-gray-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                {project.githubUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}

                {project.liveUrl && (
                  <Button
                    asChild
                    size="sm"
                    className="bg-portfolio-primary hover:bg-portfolio-secondary"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
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