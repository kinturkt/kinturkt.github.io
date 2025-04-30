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
    title: "Full-Stack Developer",
    company: "iFlair Web Technologies Pvt. Ltd.",
    location: "India",
    period: "May 2021 - May 2022",
    description: [
      "Developed and refined backend services through Node.js, Laravel, and PHP, expanding system scalability and reducing API response time by 30%.",
      "Worked on frontend development with JavaScript, Tailwind CSS, and API integration, increasing responsiveness and user experience.",
      "Designed and implemented RESTful APIs across 10+ web applications, reducing integration time by 40%.",
      "Collaborated with cross-functional teams to deliver client projects with 100% on-time delivery, while adhering to Agile methodologies.",
      "Integrated third-party services such as payment gateways and OAuth 2.0 for enhanced security.",
      "Gained hands-on experience in CI/CD pipelines with GitHub to streamline deployments."
    ],
    technologies: ["Node.js", "Laravel", "PHP", "JavaScript", "Tailwind CSS", "REST APIs", "GitHub", "CI/CD"]
    },
    {
      id: 2,
      title: "Back-end Development Intern",
      company: "CreArt Solutions",
      location: "India",
      period: "June 2022 - July 2022",
      description: [
        "Wrote clean and maintainable Python code while providing regular updates to the Lead Manager.",
        "Engineered a scalable email sender web application using Django with HTML/CSS, improving email delivery efficiency by 15%.",
        "Enhanced code quality through active debugging, testing, and code reviews.",
      ],
      technologies: ["Python", "Django", "HTML", "CSS"]
      },
    {
      id: 3,
      title: "Web Developer",
      company: "Octagotech Pvt Ltd",
      location: "India",
      period: "July 2022 - November 2022",
      description: [
        "Developed static and dynamic web pages using HTML, CSS, JavaScript, and React.",
        "Connected MySQL databases, RESTful APIs, and customized WordPress themes for content management.",
        "Boosted site performance by 15% through web traffic analysis and optimization.",
        "Collaborated using Git and GitHub for version control and team integration."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "MySQL", "WordPress", "Git"]
      },
    {
      id: 4,
      title: "Junior PHP Developer",
      company: "Horizon Webinfo Pvt. Ltd.",
      location: "India",
      period: "February 2023 - April 2023",
      description: [
        "Enhanced backend functionality with PHP, Laravel, and MVC, leading to a 30% bug reduction and better maintainability.",
        "Revamped the application based on user feedback, improving functionality and UX.",
        "Analyzed user feedback and introduced new features, boosting user satisfaction by 10%."
      ],
      technologies: ["PHP", "Laravel", "MVC", "OOP"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title text-center">Work Experience</h2>
        <p className="section-subtitle text-center mx-auto">
          Explore my work experience, where I’ve had the opportunity to collaborate with talented teams and contribute to impactful projects across various organizations.
        </p>
        
        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.id} 
              className={`border-l-4 border-portfolio-primary shadow-md overflow-hidden animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="bg-gray-50 pb-2">
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-xl text-portfolio-primary flex items-center">
                      <Briefcase className="mr-2 h-5 w-5" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-gray-700 mt-1 font-medium">{exp.company} • {exp.location}</p>
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
