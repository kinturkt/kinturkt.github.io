import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const experiences: WorkExperience[] = [
    {
      id: 1,
      title: "AI/ML Engineer",
      company: "Resolve Tech Solutions",
      location: "United States",
      period: "September 2025 – Present",
      description: [
        "Designed end-to-end AI architecture integrating Titan embeddings, OpenSearch vector databases, and retrieval-augmented pipelines for semantic search and contextual data enrichment.",
        "Engineered an intelligent incident-management framework using AWS Bedrock AgentCore and ServiceNow to automate ticket triage and enrichment across multi-cloud infrastructure.",
        "Collaborated with platform teams to implement observability, latency tracking, and failover mechanisms ensuring high reliability and uptime of AI services."
      ],
      technologies: ["AWS Bedrock", "Titan Embeddings", "OpenSearch", "RAG", "ServiceNow", "Python", "Multi-Cloud"]
    },
    {
      id: 2,
      title: "Data Scientist Intern",
      company: "Holiday Channel LLC",
      location: "United States",
      period: "June 2025 – September 2025",
      description: [
        "Architected LLM-based recommendation pipelines for recipes, gifting, and marketplace personalization using LangChain, vector databases, and RAG workflows.",
        "Leveraged GCP Vertex AI with ML and NLP models to improve personalization accuracy and predictive insights through interactive dashboards.",
        "Collaborated on end-to-end prototyping, testing, and deployment of AI/ML solutions for production integration."
      ],
      technologies: ["LangChain", "Vertex AI", "RAG", "Python", "GCP", "NLP", "Vector Databases"]
    },
    {
      id: 3,
      title: "Data Analyst Intern",
      company: "University of Texas at Arlington – Office of Admissions",
      location: "United States",
      period: "November 2024 – May 2025",
      description: [
        "Analyzed key KPI metrics and performance trends using SQL and Python to support data-driven strategic decisions.",
        "Built and automated Power BI and Excel dashboards visualizing performance and operational insights.",
        "Improved operational efficiency by 15% through process automation and optimized data workflows."
      ],
      technologies: ["Python", "SQL", "Power BI", "Excel", "Data Visualization"]
    },
    {
      id: 4,
      title: "Data Analytics Intern",
      company: "CSRBOX Foundation",
      location: "India",
      period: "February 2023 – May 2023",
      description: [
        "Optimized and maintained data pipelines using Python and Azure Data Factory for large-scale data preprocessing, improving reliability and consistency.",
        "Performed EDA and applied predictive modeling with time series and A/B testing, improving forecast accuracy by 15%.",
        "Automated ETL workflows using SQL and PySpark, reducing data processing time significantly."
      ],
      technologies: ["Python", "PySpark", "SQL", "Azure Data Factory", "Pandas", "Seaborn", "ETL"]
    },
    {
      id: 5,
      title: "Backend Development Intern",
      company: "CreArt Solutions",
      location: "India",
      period: "June 2022 – July 2022",
      description: [
        "Engineered a scalable email sender web application using Django, HTML, and CSS, improving email delivery efficiency by 30%.",
        "Developed backend APIs and integrated SQLite for core feature persistence and scalability.",
        "Improved maintainability through modularized code and structured backend architecture."
      ],
      technologies: ["Python", "Django", "HTML", "CSS", "SQLite"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title text-center">Work Experience</h2>
        <p className="section-subtitle text-center mx-auto">
          Explore my professional experience across AI, data, and backend engineering, where I’ve applied machine learning, data engineering, and cloud technologies to deliver real-world impact.
        </p>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              className="border-l-4 border-portfolio-primary shadow-md overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="bg-gray-50 pb-2">
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-xl text-portfolio-primary flex items-center">
                      <Briefcase className="mr-2 h-5 w-5" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-gray-700 mt-1 font-medium">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="pl-2">
                      <span className="ml-2">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-gray-100">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;