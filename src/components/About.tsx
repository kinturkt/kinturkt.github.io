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
    title: "Full-Stack Development",
    description:
      "Building scalable frontend and backend with JavaScript and its libraries, Laraval, and Python",
    Icon: Code,
  },
  {
    title: "Data Scienct and Visulization",
    description:
      "Transforming raw data into insights and interactive dashboards using Python, SQL, D3.js and Power BI",
    Icon: Database,
  },
  {
    title: "Machine Learning & AI",
    description:
      "Designing and deploying models with TensorFlow, PyTorch, and scikit-learn, and exploring large language models (LLMs) to power conversational AI experiences",
    Icon: Cpu,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Managing cloud hosting and databases on Azure, with CI/CD workflows powered by GitHub Actions",
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
        I’m a graduate student in Computer Science at UT Arlington, where I focus on
        software design, data-driven systems, and AI integration. By day I craft
        full-stack web apps—with React on the front end and PHP/Laravel or Node.js
        services on the back—and by night I explore machine learning pipelines and
        NLP workflows.
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-8">
        My background in Computer Engineering has taught me to write clean, efficient code
        and to collaborate across teams. Whether I’m optimizing database queries, designing
        CD/CI pipelines in Azure, or training a recommendation model in PyTorch, I aim
        to deliver solutions that scale, perform, and delight users.
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-8">
        I’m also delving into the world of Large Language Models (LLMs) and AI agents,
        experimenting with OpenAI’s API, LangChain, and prompt engineering to build
        conversational assistants, fine-tune custom models, and seamlessly integrate
        generative AI capabilities into web applications for smarter, more intuitive
        user experiences.
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