import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vignesh - Data Engineer & Full Stack Developer",
  description:
    "Data Engineer & Full Stack Developer crafting efficient and scalable solutions",
  keywords: [
    "web development",
    "design",
    "UI/UX",
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Vignesh",
    "Developer",
    "Data Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Python",
    "Django",
    "Flask",
    "APIs",
    "Microservices",
    "Cloud Computing",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Agile",
    "Scrum",
    "Git",
    "GitHub",
    "DevOps",
    "Data Pipelines",
    "ETL",
    "Big Data",
    "Hadoop",
    "Spark",
    "Kafka",
    "Data Warehousing",
    "Data Visualization",
    "Machine Learning",
    "AI",
  ],
  authors: [{ name: "Vignesh" }],
  openGraph: {
    title: "Vignesh - Data Engineer & Full Stack Developer",
    description:
      "Data Engineer & Full Stack Developer crafting efficient and scalable solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
