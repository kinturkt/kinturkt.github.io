import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Award } from "lucide-react";

interface EduItem {
    id: number;
    logoSrc: string;
    title: string;
    institution: string;
    period: string;
    gpa: string;
    description: string;
}

const eduItems: EduItem[] = [
    {
        id: 1,
        logoSrc: "/logos/uta.jpg",
        title: "Master of Science in Computer Science",
        institution: "The University of Texas at Arlington",
        period: "August 2023 – May 2025",
        gpa: "3.83",
        description: "Focusing on advanced computing concepts like cloud computing, data science, and machine learning applications. Working on research projects in computational methods and algorithm optimization.",
    },
    {
        id: 2,
        logoSrc: "/logos/lj.png",
        title: "Bachelor of Engineering in Computer Engineering",
        institution: "LJ Institute of Engineering and Technology",
        period: "August 2019 – June 2023",
        gpa: "3.70",
        description: "Built strong foundation in computing principles, programming fundamentals, and hardware systems. Participated in technical workshops and coding competitions.",
    },
];

const Education: React.FC = () => (
    <section id="education" className="section-padding bg-white">
    <div className="container-custom max-w-4xl mx-auto"></div>
        <h2 className="section-title text-center">Education</h2>
        <hr className="w-16 border-portfolio-primary mb-8 mx-auto" />

        <div className="relative pl-12 lg:pl-20">
        <div className="relative pl-20">
        {/* vertical line */}
        <div className="absolute left-6 top-0 h-full w-[2px] bg-gray-200"></div>

        {eduItems.map(({ id, logoSrc, title, institution, period, gpa, description }) => (
            <div key={id} className="flex items-start mb-12 relative">
            {/* dot + logo */}
            <div className="absolute left-0 top-1">
                <div className="h-12 w-12 rounded-full bg-white border-2 border-portfolio-primary flex items-center justify-center overflow-hidden">
                <img
                    src={logoSrc}
                    alt={`${institution} logo`}
                    className="h-8 w-8 object-contain"
                />
                </div>
            </div>

            <Card className="flex-1 p-6 rounded-lg shadow-sm ml-6">
                <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-portfolio-dark">{title}</h3>
                <div className="flex items-center space-x-4 text-gray-500 text-sm">
                    <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {period}
                    </span>
                    <span className="font-medium">GPA: {gpa}</span>
                </div>
                </div>
                <p className="text-portfolio-primary font-medium mb-1">{institution}</p>
                <p className="text-gray-600 text-sm">{description}</p>
            </Card>
            </div>
        ))}
        </div>

    {/* Certifications Section */}
    <div className="mt-12">
        <h4 className="text-2xl font-semibold text-portfolio-dark mb-6">
                Certifications
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                { title: "Fundamentals of LLMs", issuer: "Hugging Face", year: "2025" },
                { title: "Databricks Fundamentals", issuer: "Databricks", year: "2025" },
                { title: "Google Cloud Platform for Machine Learning Essential Training", issuer: "LinkedIn Learning", year: "2025" },
                { title: "Power BI Essential Training", issuer: "LinkedIn Learning", year: "2025" },
                { title: "LangChain Fundamentals", issuer: "Analytics Vidhyala", year: "2025" },
                { title: "JavaScript Intermediate", issuer: "HackerRank", year: "2025" },
                { title: "Introduction to Generative AI", issuer: "Google Cloud Training", year: "2024" },
                { title: "Python for Data Science, AI & Development Certificate", issuer: "IBM", year: "2023" },
                { title: "Introduction to Data Analytics", issuer: "IBM", year: "2023" },
                { title: "Data Science with Python", issuer: "Coursera", year: "2024" },
                { title: "SQL for Data Analysis and Data Science Certificate", issuer: "Udemy", year: "2021" },
            ].map((cert) => (
            <Card
                key={cert.title}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
                <div className="flex items-center mb-2">
                    <Award className="w-6 h-6 text-portfolio-primary mr-2" />
                    <span className="font-medium">{cert.title}</span>
                </div>
                <p className="text-gray-600 text-sm">
                    {cert.issuer} &middot; {cert.year}
                </p>
            </Card>
            ))}
        </div>
        </div>
    </div>
    </section>
);

export default Education;