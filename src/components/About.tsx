// src/components/About.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import { Code, Database, Cpu, Cloud } from "lucide-react";

interface FocusArea {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const focusAreas: FocusArea[] = [
  {
    title: "AI and ML Engineering",
    description:
      "Designing and deploying models for recommendation, ranking, and classification using Python, TensorFlow, PyTorch, and scikit-learn, then shipping them as reliable APIs and services.",
    Icon: Cpu,
  },
  {
    title: "Data Science and Analytics",
    description:
      "Cleaning and modeling data with SQL, Pandas, and Jupyter Notebook, running experiments, and building dashboards in tools like Power BI to turn noisy data into clear decisions.",
    Icon: Database,
  },
  {
    title: "LLMs, Agents, and Automation",
    description:
      "Building LLM powered systems with OpenAI, Claude, and Gemini, orchestrating flows with LangChain and LangGraph, and wiring automations through n8n, Zapier, and evaluation tools like Opik.",
    Icon: Code,
  },
  {
    title: "Cloud, MLOps, and Platforms",
    description:
      "Running workloads on Azure, AWS, and GCP, using Vertex AI, Bedrock, and SageMaker for training and deployment, and wiring CI/CD, monitoring, and observability around production ML systems.",
    Icon: Cloud,
  },
];

const About: React.FC = () => (
  <section id="about" className="section-padding bg-white">
    <div className="container-custom max-w-3xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-portfolio-dark mb-2">About Me</h2>
      <hr className="w-16 border-2 border-portfolio-primary mb-6" />

      {/* Intro paragraphs */}
      <p className="text-base text-gray-700 leading-relaxed mb-4">
        I am a Computer Science graduate student at UT Arlington who enjoys working at the intersection of data, machine learning, and modern cloud platforms. Most of my work focuses on taking real business problems, modeling them with data and ML, and then turning those models into production ready systems.
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-4">
        On the ML and data side, I work with Python, SQL, NumPy, Pandas, scikit-learn, TensorFlow, and PyTorch, usually inside Jupyter Notebook for exploration and experimentation. From there I expose models through FastAPI or Streamlit, connect them to relational databases like PostgreSQL and MySQL, and use dashboards in Power BI or other tools to share insights with non technical stakeholders.
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-4">
        I also spend a lot of time with large language models and agents. I build RAG and agent style workflows using OpenAI, Claude, and Gemini on top of LangChain and LangGraph, with vector databases in the background. For real world automation I plug these systems into n8n and Zapier, and use tools like Opik and logging dashboards to understand how they behave over time.
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-8">
        On the cloud side, I have experience deploying data and ML workloads on Azure, AWS, and GCP, using managed platforms such as Vertex AI, Bedrock, and SageMaker. I care about reliability and observability, so I think in terms of CI and CD, monitoring, and how to keep latency and failure rates in check when these systems are serving live users.
      </p>

      {/* Areas of Expertise */}
      <h3 className="text-2xl font-semibold text-portfolio-dark mb-4">
        Areas of Expertise
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {focusAreas.map(({ title, description, Icon }) => (
          <Card
            key={title}
            className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
          >
            <Icon className="h-6 w-6 text-portfolio-primary mb-2" />
            <h4 className="font-medium text-lg mb-1">{title}</h4>
            <p className="text-gray-600 text-sm">{description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default About;