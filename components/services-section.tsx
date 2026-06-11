"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Smartphone,
  Palette,
  Search,
  ArrowRight,
  Cloud,
  Database,
  Shield,
  Workflow,
} from "lucide-react";

export function ServicesSection() {
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

  const services = [
    {
      icon: Monitor,
      title: "SaaS Development",
      description:
        "Custom SaaS platforms, dashboards, portals, and business systems built for scalability and growth.",
      features: ["Next.js", "React", "Role Based Access", "Admin Dashboards"],
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Designing ETL pipelines, healthcare data platforms, analytics workflows, and data transformations.",
      features: ["Apache Airflow", "SQL", "Python", "HL7 FHIR"],
    },
    {
      icon: Workflow,
      title: "AI & Automation",
      description:
        "AI-powered workflows, WhatsApp automation, sentiment analysis, and intelligent business processes.",
      features: ["OpenAI", "WhatsApp API", "n8n", "Automation"],
    },
    {
      icon: Cloud,
      title: "API Development",
      description:
        "Secure REST APIs and backend services designed for scalability and third-party integrations.",
      features: ["FastAPI", "Node.js", "Authentication", "Webhooks"],
    },
    {
      icon: Shield,
      title: "Healthcare Solutions",
      description:
        "Healthcare data standardization, EHR systems, FHIR transformation, and secure data processing.",
      features: ["EHR", "FHIR", "Mirth Connect", "Data Governance"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "Deployment, monitoring, containerization, and CI/CD pipelines for reliable production systems.",
      features: ["AWS", "Docker", "GitHub Actions", "CI/CD"],
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I help businesses build scalable SaaS platforms, AI-powered
              applications, automation workflows, healthcare data solutions, and
              cloud-native systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 delay-${index * 100}`}
                onClick={() => (window.location.href = "#contact")}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                      >
                        {feature}
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
