import { Card, CardContent } from "@/components/ui/card";
import { IconType } from "react-icons";
import { FaMicrosoft } from "react-icons/fa";
import { SiApachespark } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { Code, Database, Cloud, Cog } from "lucide-react";
import { Workflow, BrainCircuit, Sparkles, Cpu } from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiC,
  SiReact,
  SiNextdotjs,
  SiFlask,
  SiDjango,
  SiLaravel,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiStreamlit,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiRedis,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiGithub,
  SiJupyter,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiPycharm,
  SiGooglecloud,
  SiAmazon,
  SiLangchain,
  SiHuggingface,
  SiFastapi,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: IconType;
  category: "Languages" | "Libraries and Frameworks" | "Databases" | "Cloud and DevOps" | "Tools";
}

const skills: Skill[] = [
  // Languages
  { name: "Python", icon: SiPython, category: "Languages" },
  { name: "SQL", icon: Database, category: "Languages" },
  { name: "JavaScript", icon: SiJavascript, category: "Languages" },
  { name: "PHP", icon: SiPhp, category: "Languages" },
  { name: "C", icon: SiC, category: "Languages" },
  { name: "Java", icon: FaJava, category: "Languages" },

  // Libraries and Frameworks
  { name: "NumPy", icon: SiNumpy, category: "Libraries and Frameworks" },
  { name: "Pandas", icon: SiPandas, category: "Libraries and Frameworks" },
  { name: "Scikit-learn", icon: SiScikitlearn, category: "Libraries and Frameworks" },
  { name: "TensorFlow", icon: SiTensorflow, category: "Libraries and Frameworks" },
  { name: "PyTorch", icon: SiPytorch, category: "Libraries and Frameworks" },
  { name: "Keras", icon: SiKeras, category: "Libraries and Frameworks" },
  { name: "PySpark", icon: SiApachespark, category: "Libraries and Frameworks" },
  { name: "FastAPI", icon: SiFastapi, category: "Libraries and Frameworks" },
  { name: "Flask", icon: SiFlask, category: "Libraries and Frameworks" },
  { name: "Django", icon: SiDjango, category: "Libraries and Frameworks" },
  { name: "Laravel", icon: SiLaravel, category: "Libraries and Frameworks" },
  { name: "Streamlit", icon: SiStreamlit, category: "Libraries and Frameworks" },

  // AI Models & Ecosystem
  { name: "OpenAI (GPT)", icon: BrainCircuit, category: "Libraries and Frameworks" },
  { name: "Claude (Anthropic)", icon: Sparkles, category: "Libraries and Frameworks" },
  { name: "Groq", icon: Cpu, category: "Libraries and Frameworks" },
  { name: "LangChain", icon: SiLangchain, category: "Libraries and Frameworks" },
  { name: "LangGraph", icon: Workflow, category: "Libraries and Frameworks" },
  { name: "Hugging Face", icon: SiHuggingface, category: "Libraries and Frameworks" },
  { name: "React", icon: SiReact, category: "Libraries and Frameworks" },
  { name: "Next.js", icon: SiNextdotjs, category: "Libraries and Frameworks" },

  // Databases
  { name: "MySQL", icon: SiMysql, category: "Databases" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Databases" },
  { name: "SQLite", icon: SiSqlite, category: "Databases" },
  { name: "Redis", icon: SiRedis, category: "Databases" },
  { name: "Firebase", icon: SiFirebase, category: "Databases" },
  { name: "MongoDB", icon: SiMongodb, category: "Databases" },
  { name: "VectorDB / pgvector", icon: Database, category: "Databases" },

  // Cloud and DevOps
  { name: "Google Cloud Platform (GCP)", icon: SiGooglecloud, category: "Cloud and DevOps" },
  { name: "Microsoft Azure", icon: FaMicrosoft, category: "Cloud and DevOps" },
  { name: "Amazon Web Services (AWS)", icon: SiAmazon, category: "Cloud and DevOps" },
  { name: "Vertex AI", icon: SiGooglecloud, category: "Cloud and DevOps" },
  { name: "AWS Bedrock", icon: SiAmazon, category: "Cloud and DevOps" },
  { name: "CI/CD", icon: Cog, category: "Cloud and DevOps" },

  // Tools
  { name: "Git", icon: SiGit, category: "Tools" },
  { name: "GitHub", icon: SiGithub, category: "Tools" },
  { name: "MySQL Workbench", icon: DiMsqlServer, category: "Tools" },
  { name: "PyCharm", icon: SiPycharm, category: "Tools" },
  { name: "Jupyter Notebook", icon: SiJupyter, category: "Tools" },
];

const categories: { label: Skill["category"]; icon: IconType }[] = [
  { label: "Languages", icon: Code },
  { label: "Libraries and Frameworks", icon: SiReact },
  { label: "Databases", icon: Database },
  { label: "Cloud and DevOps", icon: Cloud },
  { label: "Tools", icon: Cog },
];

const Skills = () => (
  <section id="skills" className="section-padding bg-gray-50">
    <div className="container-custom">
      <h2 className="section-title text-center">Technical Skills</h2>
      <p className="section-subtitle text-center mx-auto max-w-prose">
        A snapshot of the tools, cloud platforms, and technologies I’ve worked with across AI/ML, data, and backend projects.
      </p>

      <div className="mt-12 space-y-12">
        {categories.map(({ label, icon: CatIcon }) => (
          <Card key={label} className="shadow-md animate-slide-up overflow-hidden">
            <div className="flex items-center gap-2 bg-portfolio-primary p-4">
              <CatIcon className="text-white w-6 h-6" />
              <h3 className="text-xl font-bold text-white">{label}</h3>
            </div>
            <CardContent className="p-6">
              <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills
                  .filter((s) => s.category === label)
                  .map(({ name, icon: Icon }) => (
                    <li key={name} className="flex flex-col items-center gap-2 text-center">
                      <Icon className="w-8 h-8 text-portfolio-primary" />
                      <span className="text-sm font-medium">{name}</span>
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;