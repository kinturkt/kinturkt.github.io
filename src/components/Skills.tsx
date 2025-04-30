import { Card, CardContent } from "@/components/ui/card";
import { IconType } from "react-icons";
import {
  // ── SimpleIcons (si) ───────────────
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
  SiGit,
  SiGithub,
  SiJupyter,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiPycharm,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
// import { SiVisualstudiocode } from "react-icons/si";

import { Code, Database, Cog } from "lucide-react";

interface Skill {
  name: string;
  icon: IconType;
  category: "Languages" | "Libraries and Frameworks" | "Databases" | "Tools";
}

const skills: Skill[] = [
  // Languages
    { name: "Python", icon: SiPython, category: "Languages" },
    { name: "JavaScript", icon: SiJavascript, category: "Languages" },
    { name: "PHP", icon: SiPhp, category: "Languages" },
    { name: "C", icon: SiC, category: "Languages" },
    { name: "Java", icon: FaJava, category: "Languages" },

  // Libraries & Frameworks
    { name: "NumPy", icon: SiNumpy, category: "Libraries and Frameworks" },
    { name: "Pandas", icon: SiPandas, category: "Libraries and Frameworks" },
    { name: "Scikit‑learn", icon: SiScikitlearn, category: "Libraries and Frameworks" },
    { name: "Matplotlib", icon: Code, category: "Libraries and Frameworks" },
    { name: "Seaborn", icon: Code, category: "Libraries and Frameworks" },    
    { name: "TensorFlow", icon: SiTensorflow, category: "Libraries and Frameworks" },
    { name: "PyTorch", icon: SiPytorch, category: "Libraries and Frameworks" },
    { name: "Keras", icon: SiKeras, category: "Libraries and Frameworks" },
    { name: "React", icon: SiReact, category: "Libraries and Frameworks" },
    { name: "Next.js", icon: SiNextdotjs, category: "Libraries and Frameworks" },
    { name: "Flask", icon: SiFlask, category: "Libraries and Frameworks" },
    { name: "Django", icon: SiDjango, category: "Libraries and Frameworks" },
    { name: "Laravel", icon: SiLaravel, category: "Libraries and Frameworks" },
    { name: "Streamlit", icon: SiStreamlit, category: "Libraries and Frameworks" },

    // Databases
    { name: "MySQL", icon: SiMysql, category: "Databases" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "Databases" },
    { name: "SQLite", icon: SiSqlite, category: "Databases" },
    { name: "Redis", icon: SiRedis, category: "Databases" },
    { name: "Firebase", icon: SiFirebase, category: "Databases" },
    { name: "VectorDB", icon: Database, category: "Databases" },

  // Tools / Cloud / DevOps
    { name: "Git", icon: SiGit, category: "Tools" },
    { name: "GitHub", icon: SiGithub, category: "Tools" },
  // { name: "Visual Studio Code", icon: SiVisualstudiocode, category: "Tools" },
    { name: "PyCharm", icon: SiPycharm, category: "Tools" }, 
  // { name: "MATLAB", icon: SiMatlab, category: "Tools" },
  // { name: "Azure", icon: SiMicrosoftazure, category: "Tools" },
  // { name: "Power BI", icon: SiPowerbi, category: "Tools" },
    { name: "MySQL Workbench", icon: DiMsqlServer , category: "Tools" },
    { name: "Jupyter Notebook", icon: SiJupyter, category: "Tools" },
    { name: "CI / CD", icon: Cog, category: "Tools" },
];

const categories: { label: Skill["category"]; icon: IconType }[] = [
    { label: "Languages", icon: Code },
    { label: "Libraries and Frameworks", icon: SiReact },
    { label: "Databases", icon: Database },
    { label: "Tools", icon: Cog },
];

const Skills = () => (
  <section id="skills" className="section-padding bg-gray-50">
    <div className="container-custom">
      <h2 className="section-title text-center">Technical Skills</h2>
      <p className="section-subtitle text-center mx-auto max-w-prose">
        A snapshot of the tools and technologies that I have used
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
                    <li
                      key={name}
                      className="flex flex-col items-center gap-2 text-center"
                    >
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