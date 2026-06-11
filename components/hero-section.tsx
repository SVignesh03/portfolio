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
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dau24dmlo/video/upload/v1781190337/AdobeStock_332751005-1_vnzs7i.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black/40 to-purple-500/20" />

      {/* Optional Blur */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md px-4 py-2 text-sm mb-8">
                🚀 Available for Freelance Work
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                Building
                <span className="block bg-gradient-to-r from-primary via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  SaaS Platforms
                </span>
                Business Systems &<span className="block">AI Solutions</span>
              </h1>

              <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-10">
                Full Stack Engineer specializing in React, Next.js, FastAPI and
                cloud-integrated applications. Experienced in building SaaS
                platforms, healthcare systems, business automation tools, admin
                dashboards and AI-powered applications.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button
                  size="lg"
                  onClick={() => (window.location.href = "#portfolio")}
                  className="bg-gradient-to-r from-primary to-purple-600 hover:scale-105 transition-all"
                >
                  View Projects
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => (window.location.href = "#contact")}
                  className="backdrop-blur-md bg-white/5 border-white/20"
                >
                  Let's Talk
                </Button>
              </div>

              {/* MOBILE STATS */}
              <div className="grid grid-cols-2 gap-6 lg:hidden">
                <div>
                  <h3 className="text-3xl font-bold text-primary">3+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-primary">10+</h3>
                  <p className="text-gray-400">Projects Built</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-primary">5M+</h3>
                  <p className="text-gray-400">Healthcare Records</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-primary">100%</h3>
                  <p className="text-gray-400">Custom Solutions</p>
                </div>
              </div>
            </div>

            {/* DESKTOP RIGHT SIDE */}
            <div className="hidden lg:flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
                  <h3 className="text-4xl font-bold text-primary">3+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
                  <h3 className="text-4xl font-bold text-primary">10+</h3>
                  <p className="text-gray-400">Projects Built</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
                  <h3 className="text-4xl font-bold text-primary">5M+</h3>
                  <p className="text-gray-400">Healthcare Records</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
                  <h3 className="text-4xl font-bold text-primary">100%</h3>
                  <p className="text-gray-400">Custom Solutions</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "FastAPI",
                  "MongoDB",
                  "AI",
                  "SaaS",
                  "Automation",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
}
