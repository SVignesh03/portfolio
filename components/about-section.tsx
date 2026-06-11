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
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "FastAPI",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Apache Airflow",
    "HL7 FHIR",
    "REST APIs",
    "AI Integrations",
    "Automation",
  ];

  const highlights = [
    {
      icon: Code,
      title: "SaaS Development",
      description:
        "Building scalable SaaS platforms, admin dashboards, CRM systems, and business applications.",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Designing ETL pipelines, healthcare data platforms, HL7 FHIR transformations, and analytics solutions.",
    },
    {
      icon: Workflow,
      title: "Automation & AI",
      description:
        "Creating AI-powered applications, WhatsApp automation, integrations, and workflow orchestration.",
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment",
      description:
        "Deploying secure and scalable applications using AWS, Docker, CI/CD, and modern cloud infrastructure.",
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
              I'm a Full Stack Engineer with experience building SaaS platforms,
              healthcare data systems, AI-powered applications, and business
              automation tools. I specialize in transforming complex
              requirements into scalable, user-friendly solutions that deliver
              real business value.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My career started in healthcare technology, where I worked on
                large-scale Electronic Health Record (EHR) data pipelines, ETL
                processes, and HL7 FHIR standardization projects involving
                millions of patient records. Over time, I expanded into full
                stack development, building SaaS platforms, admin dashboards,
                e-commerce systems, WhatsApp automation solutions, and
                AI-powered applications using React, Next.js, Node.js, FastAPI,
                and modern cloud technologies.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, I focus on developing scalable software that combines
                strong backend architecture, intuitive user experiences,
                automation, and AI capabilities. Whether it's a startup MVP, an
                internal business platform, or a complex data-driven system, I
                enjoy turning ideas into production-ready solutions.
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
