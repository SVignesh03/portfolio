"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-orange-500 bg-clip-text text-transparent">
              Hello, I&apos;m Vignesh
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Creative Designer & Developer crafting beautiful digital experiences
            that make a difference in people&apos;s lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg transition-all duration-300"
              onClick={() => {
                window.location.href = "#portfolio";
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:shadow-lg transition-all duration-300"
            >
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform duration-200"
              onClick={() =>
                window.open("https://github.com/SVignesh03/", "_blank")
              }
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform duration-200"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vignesh-s-a90082248/",
                  "_blank"
                )
              }
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform duration-200"
              onClick={() =>
                window.open("mailto:vickypedrosa0@gmail.com", "_blank")
              }
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
