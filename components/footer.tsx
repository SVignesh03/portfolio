"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
              Vignesh
            </h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Engineer specializing in SaaS platforms, AI
              integrations, healthcare data systems and business automation.
              <br />
              Available for freelance projects.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                onClick={() =>
                  window.open("https://github.com/SVignesh03/", "_blank")
                }
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vignesh-s-a90082248/",
                    "_blank",
                  )
                }
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                onClick={() =>
                  window.open("mailto:vickypedrosa0@gmail.com", "_blank")
                }
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Highlights</h4>

            <ul className="space-y-3 text-muted-foreground">
              <li>✓ 10+ Projects Delivered</li>
              <li>✓ 5M+ Healthcare Records Processed</li>
              <li>✓ SaaS & Business Applications</li>
              <li>✓ AI & Automation Solutions</li>
              <li>✓ Full Stack & Data Engineering</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>SaaS Development</li>
              <li>AI Integrations</li>
              <li>API Development</li>
              <li>Data Engineering</li>
              <li>Business Automation</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © {currentYear} Vignesh. All rights reserved.
            </p>
            <p className="text-muted-foreground flex items-center mt-4 md:mt-0">
              Building scalable software, automation and AI-powered solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
