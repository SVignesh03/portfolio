"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Workflow } from "lucide-react";
import { ProfileBlob } from "./profileblob";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  const skills = [
    "Python",
    "SQL",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "C#",
    ".NET",
    "Rust",
    "MongoDB",
    "SQL Server",
    "Firebase",
    "Parquet",
    "Azure",
    "MySQL",
    "AWS",
    "Apache Airflow",
    "Mirth Connect",
    "n8n",
    "SSIS",
    "CI/CD",
    "Git",
    "GitHub",
    "BitBucket",
    "API Integrations",
    "Webhooks",
    "HL7 FHIR",
    "EHR Systems",
    "REST APIs",
    "JSON",
    "Jira",
    "Docker",
    "Kubernetes",
    "Clerk Auth",
    "React",
    "Next.js",
    "Bootstrap",
    "MUI",
    "Shadcn",
    "GitHub Actions",
    "Automation",
    "Version Control",
    "VPN",
    "Scripting",
    "Analytic Leadership",
    "Team Management",
    "Communication",
    "Collaboration",
    "Problem Solving",
    "Troubleshooting",
    "App Development",
    "Observability",
  ];

  const highlights = [
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Designing ETL pipelines, normalizing healthcare data, and ensuring data quality",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Building modern web applications with React, Next.js, Node.js, and APIs",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "Deploying scalable solutions on AWS & Azure with Docker, Kubernetes, and CI/CD",
    },
    {
      icon: Workflow,
      title: "Automation & Integration",
      description:
        "Automating workflows with Airflow, n8n, and API integrations to boost efficiency",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <ProfileBlob
                imageSrc="https://res.cloudinary.com/dau24dmlo/image/upload/v1759188598/passport_size_photo-removebg-preview_n7pju4.png"
                size="w-40 h-40"
                bgColor="bg-[#f7731b]"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I&apos;m a Data Engineer and Full Stack Developer passionate about
              building scalable data pipelines and modern web apps. I love
              solving complex problems and turning ideas into impactful
              solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I began as a Software Engineering intern building AI tools and
                backend systems, and grew into a Data Engineer and Full Stack
                Developer specializing in ETL pipelines, automation, and web
                apps in healthcare and e-commerce.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I believe in the power of data and technology to solve real
                problems and create meaningful impact. Every project I work on
                is a chance to build systems that are both scalable and
                valuable.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card
                  key={item.title}
                  className={`hover:shadow-lg transition-all duration-300 delay-${
                    index * 100
                  }`}
                >
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
