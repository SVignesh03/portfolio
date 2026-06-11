"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "RSV Fitness Studio",
      description:
        "Built a role-based Gym Management SaaS platform with QR attendance tracking, membership management, payment tracking, analytics dashboards, multilingual support, and automated reminder workflows for fitness businesses.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1781185890/screencapture-localhost-3000-sign-in-2026-05-15-11_49_50_dvrb38.png",
      category: "SaaS",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "REST API",
      ],
      featured: true,
    },
    {
      id: 2,
      title: "Bar Vault Management System",
      description:
        "Developed a role-based bar management platform with dedicated dashboards for administrators, managers, and employees. Features include inventory tracking, billing operations, revenue analytics, reporting, user management, and branch-level access control.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1781185856/screencapture-bar-eta-five-vercel-app-login-2026-06-07-20_57_44_rcnwfv.png",
      category: "SaaS",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT Authentication",
      ],
      featured: true,
    },
    {
      id: 3,
      title: "EHR Data Warehouse & Visualization",
      description:
        "Developed and managed a healthcare data warehousing platform that transformed and standardized over 5 million Electronic Health Records into HL7 FHIR format using Python, SSIS, Apache Airflow, and Mirth Connect.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185554/Data_Visualization_fiaioo.png",
      category: "Data Engineering",
      technologies: [
        "Python",
        "SSIS",
        "Apache Airflow",
        "Mirth Connect",
        "HL7 FHIR",
        "SQL Server",
      ],
      featured: true,
    },
    {
      id: 4,
      title: "Fish & Meat E-Commerce Platform",
      description:
        "Developed a complete e-commerce platform for online fish and meat sales with customer ordering workflows, cart management, authentication, order processing, and an administrative dashboard.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185554/fish_website_rn9rx9.png",
      category: "Web Development",
      technologies: [
        "Vite",
        "Next.js",
        "React",
        "Node.js",
        "Tailwind CSS",
        "MongoDB",
      ],
      featured: true,
    },
    {
      id: 5,
      title: "Real-Time Stock Analysis API",
      description:
        "Built a backend platform for market sentiment analysis and stock intelligence using Python APIs. Integrated automated financial notifications and asynchronous messaging workflows.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185556/sentiment_analysis_sq6vyn.png",
      category: "AI/ML",
      technologies: ["Python", "Flask", "REST API", "OpenAI", "Automation"],
      featured: true,
    },
    {
      id: 6,
      title: "Jira Clone",
      description:
        "Built a project management platform inspired by Jira with task tracking, workflow management, authentication, and collaborative project organization features.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185555/Jira_clone_shln7j.png",
      category: "Web Development",
      technologies: ["Next.js", "React", "Node.js", "MongoDB"],
      featured: false,
    },
    {
      id: 7,
      title: "WhatsApp Business Automation Bot",
      description:
        "Developed a WhatsApp automation system for customer engagement, reminders, and business workflows with scheduled messaging and backend integrations.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185554/ChatBot_picspo.png",
      category: "Automation",
      technologies: [
        "Node.js",
        "MongoDB",
        "WhatsApp API",
        "GitHub Actions",
        "Cron Jobs",
      ],
      featured: false,
    },
    {
      id: 8,
      title: "Facial Emotion Detection System",
      description:
        "Designed and implemented an AI-powered facial emotion detection system using Python, TensorFlow, and OpenCV for real-time emotion classification.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185554/Emotion_detection_rxi73p.png",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
      featured: false,
    },
    {
      id: 9,
      title: "Sports Tournament Management System",
      description:
        "Developed a tournament management platform for organizing sports events, teams, schedules, scores, and competition workflows.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185554/Sports_App_egdmin.png",
      category: "Web Development",
      technologies: ["Next.js", "React", "Node.js"],
      featured: false,
    },
  ];

  const categories = [
    "All",
    "SaaS",
    "Web Development",
    "Data Engineering",
    "AI/ML",
    "Automation",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A collection of projects I&apos;ve worked on, showcasing my skills
              and passion for creating exceptional digital experiences.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                } delay-${index * 100}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    {project.featured && (
                      <Badge variant="default">Featured</Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
