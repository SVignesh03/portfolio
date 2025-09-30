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
      title: "Full Stack Development",
      description:
        "End-to-end web applications built with modern frameworks and best practices.",
      features: ["React/Next.js", "Node.js", "API Integrations"],
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Designing ETL pipelines and data workflows for scalable, reliable solutions.",
      features: ["Apache Airflow", "Mirth Connect", "SQL/Python"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "Deploying and managing applications on cloud platforms with automation.",
      features: ["AWS & Azure", "Docker/Kubernetes", "CI/CD Pipelines"],
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Automating business processes and system integrations for efficiency.",
      features: ["n8n", "Webhooks", "Custom API Workflows"],
    },
    {
      icon: Shield,
      title: "Healthcare Data Solutions",
      description:
        "Secure and compliant solutions for healthcare data management.",
      features: ["HL7 FHIR", "EHR Systems", "Data Normalization"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Cross-platform mobile apps that deliver smooth and engaging user experiences.",
      features: ["React Native", "iOS/Android", "App Store Ready"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that are both functional and visually engaging.",
      features: ["User Research", "Prototyping", "Design Systems"],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Boosting online visibility and improving search engine performance.",
      features: ["Technical SEO", "Content Strategy", "Analytics"],
    },
    {
      icon: Monitor, // generic icon for Ads
      title: "Advertising Services",
      description:
        "Manage and optimize campaigns across Google and Meta platforms to drive traffic and conversions.",
      features: [
        "Google Ads (Search, Display, YouTube)",
        "Meta Ads (Facebook & Instagram)",
        "Audience Targeting & Analytics",
      ],
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
              I offer comprehensive digital solutions to help bring your ideas
              to life and grow your business online.
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
