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
      title: "EHR Data Warehouse & Visualization",
      description:
        "Developed and managed a data warehousing system for Electronic Health Records (EHR) using C#, SSIS, and Python. Led a team that transformed and standardized over 5 million EHR records into HL7 FHIR format via Mirth Connect.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185554/Data_Visualization_fiaioo.png",
      category: "Data Engineering",
      technologies: [
        "C#",
        "SSIS",
        "Apache Airflow",
        "Mirth Connect",
        "HL7 FHIR",
        "Python",
      ],
      featured: true,
    },
    {
      id: 2,
      title: "Local Store WhatsApp Chatbot",
      description:
        "Built the backend for a Blinkit-style WhatsApp chatbot using Node.js. Integrated WhatsApp API, set up business number via Facebook, and automated ordering and support workflows.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185554/ChatBot_picspo.png",
      category: "Web Development",
      technologies: ["Node.js", "WhatsApp API", "Facebook Business"],
      featured: true,
    },
    {
      id: 3,
      title: "Facial Emotion Detection System",
      description:
        "Designed and implemented a proof-of-concept AI tool for facial emotion detection. The system was built using Python and OpenCV.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185554/Emotion_detection_rxi73p.png",
      category: "AI/ML",
      technologies: ["Python", "OpenCV"],
      featured: false,
    },
    {
      id: 4,
      title: "Real-time Stock Analysis API",
      description:
        "Developed a real-time stock candlestick analysis API using Python. This API also integrated with asynchronous WhatsApp messaging to provide financial notifications.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185556/sentiment_analysis_sq6vyn.png",
      category: "AI/ML",
      technologies: ["Python", "APIs"],
      featured: false,
    },
    {
      id: 5,
      title: "Jira Clone",
      description:
        "A full-stack project management application built as a clone of Jira, using Next.js.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185555/Jira_clone_shln7j.png",
      category: "Web Development",
      technologies: ["Next.js"],
      featured: true,
    },
    {
      id: 6,
      title: "Sports Tournament App",
      description: "Developed a sports tournament application using Next.js.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185554/Sports_App_egdmin.png",
      category: "Web Development",
      technologies: ["Next.js"],
      featured: false,
    },
    {
      id: 7,
      title: "Second-Hand Bikes & Car Selling Website",
      description:
        "Created a platform for buying and selling second-hand bikes and cars using Next.js for a fast, responsive, and SEO-friendly experience.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185555/second_hand_vehicle_qrbogr.png",
      category: "Web Development",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      featured: true,
    },
    {
      id: 8,
      title: "Fish & Meat Sale Website",
      description:
        "Developed a complete e-commerce platform for selling fish and meat online using Vite for the frontend and Next.js for backend and admin panel.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185554/fish_website_rn9rx9.png",
      category: "Web Development",
      technologies: ["Vite", "Next.js", "React", "Node.js", "Tailwind CSS"],
      featured: false,
    },
    {
      id: 9,
      title: "Color & Number Betting Website",
      description:
        "Developed a betting platform using PHP and MySQL (MariaDB). Users can bet on a color (2x payout) or a number (5x payout) and win if their guess is correct.",
      image:
        "https://res.cloudinary.com/dau24dmlo/image/upload/v1759185553/betting_site_zdeyyq.png",
      category: "Web Development",
      technologies: ["PHP", "MySQL", "MariaDB", "HTML", "CSS", "JavaScript"],
      featured: false,
    },
  ];

  const categories = ["All", "Web Development", "Data Engineering", "AI/ML"];

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
