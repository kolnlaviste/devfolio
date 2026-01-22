"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer"
import ChatBubble from "@/components/ChatBubble";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

type Skill = {
  name: string;
  icon: string;
};

type SkillCategories = {
  languages: Skill[];
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
  learning: Skill[];
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;   
  github?: string;
  demo?: string;
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<'all' | keyof SkillCategories>('all');


  const jobTitles = ["Jr. Full Stack Developer", "Frontend Developer", "Web Developer"]; // Add more titles if you like!
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [jobTitles.length]); 

  const skills: SkillCategories = {
    languages: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    ],
    frontend: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Svelte', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
    ],
    backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      { name: 'Microsoft Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg' },
    ],
    learning: [
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg' },
    ]
  };

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Elinnov Technologies",
      employment: 'Internship',
      period: "October 2024 - February 2025",
      description: "Software Engineer Intern at Elinnov Technologies, where I helped build and improve internal web apps, worked with front-end tools like React, and collaborated with the team on real-world development tasks."
    },
    {
      title: "Software Developer",
      company: "Tekkio",
      employment: 'Contract',
      period: "August 2025 - October 2025",
      description: "Worked as a Flutter Developer at Tekkio, contributing to the development of a cross-platform web application and supporting system configuration tasks on a custom Linux-based environment."
    }
  ];

  const projects: Project[] = [
    {
      title: "Knowledge Base Tool",
      description: "An internal tool that lets Elinnov employees easily find, create, and share company knowledge in one place.",
      technologies: ["React.js", "Redux", ".NET", "MongoDB", "ElasticSearch"],
      image: "/projects/knowledge-base-tool.jpg",
    },
    {
      title: "HireLink",
      description: "HireLink is a job board platform built with Next.js, Node.js, and PostgreSQL. It features job listings, company profiles, and search/filter tools to connect employees and job seekers efficiently.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS", "Headless UI"],
      image: "/projects/hirelink.png",
      github: "https://github.com/kolnlaviste/HireLink",
      demo: "https://hirelink.vercel.app/",
    },
    {
      title: "pulseboard",
      description: "A modern analytics SaaS platform that delivers real-time insights, performance tracking, and subscription management through a sleek, dark-themed interface built with Next.js, TypeScript, and Stripe integration.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "shadcn/ui", "Framer Motion", "Stripe"],
      image: "/projects/pulseboard.png",
      github: "https://github.com/kolnlaviste/pulseboard",
      demo: 'https://pulseboard-demo.vercel.app',
    },
    {
      title: "Valentines Invitation",
      description: "A valentines invitation website I created for my girlfriend",
      technologies: ["Next.js", "Gmail API"],
      image: "/projects/valentines.png",
      demo: "https://valentines-weld.vercel.app",
    },
    {
      title: "Vault AI",
      description: "VaultAI is a high-performance financial dashboard built with Next.js 15 and Supabase. It transforms raw CSV transaction data into real-time visual insights, featuring an AI-powered ledger, dynamic spending analytics, and secure, encrypted data management.",
      technologies: ["Next.js", "Supabase", "TailwindCSS", "Lucide React"],
      image: "/projects/VaultAI.png",
      github: "github.com/kolnlaviste/Vault-AI",
      demo: "https://vault-ai-demo.vercel.app",
    },
    {
      title: "Devfolio",
      description: "Personal portfolio created to display talents, projects, and information about myself",
      technologies: ["Next.js", "Tailwind"],
      image: "/projects/devfolio.png",
      demo: "https://devfolio-koln.vercel.app",
    },
  ];

  const filterButtons = [
    { name: 'All', value: 'all' },
    { name: 'Languages', value: 'languages' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' },
    { name: 'Tools', value: 'tools' },
    { name: 'Learning', value: 'learning' },
  ];

  const getFilteredSkills = (): [string, Skill[]][] => {
    if (activeCategory === 'all') {
      return [['all', Object.values(skills).flat()]];
    }
    return [[activeCategory, skills[activeCategory]]];
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
    exit: { opacity: 0 }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
    },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black relative overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950/10 to-black pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <section id="hero" className="h-screen flex items-center justify-center pt-16 relative">
            <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="flex flex-col items-center text-center space-y-6 relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 text-transparent bg-clip-text animate-fade-in">
                Koln Roward Laviste
              </h1>
              <AnimatePresence mode="wait"> 
                <motion.h2
                  key={jobTitles[currentTitleIndex]} 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }}   
                  exit={{ opacity: 0, y: 10 }}     
                  transition={{ duration: 0.5 }} 
                  className="text-xl md:text-2xl text-purple-200/80"
                >
                  {jobTitles[currentTitleIndex]}
                </motion.h2>
              </AnimatePresence>

              <p className="max-w-2xl text-gray-400 animate-fade-in-delay-2">
                I craft digital experiences with modern web technologies,
                focusing on clean code and intuitive user interfaces.
              </p>
              <div className="flex gap-4 animate-fade-in-delay-3">
                <Button asChild>
                  <Link
                    href="#projects"
                    className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all"
                  >
                    View Projects
                  </Link>
                </Button>
                <a
                  href="/assets/resume.pdf"
                  download="koln-laviste-resume.pdf"
                  className="inline-flex"
                >
                  <Button
                    variant="outline"
                    className="border-purple-500 hover:bg-purple-950/50 transform hover:scale-105 transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                      Resume
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </section>

          <ChatBubble />

          {/* Skills Section */}
          <section id="skills" className="py-20 lg:py-28 relative">
            <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 lg:mb-16 bg-gradient-to-r from-white to-purple-300 text-transparent bg-clip-text">
                Skills & Technologies
              </h2>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {filterButtons.map((button) => (
                  <Button
                    key={button.value}
                    variant={activeCategory === button.value ? "default" : "outline"}
                    onClick={() => setActiveCategory(button.value as typeof activeCategory)}
                    className={`
                      ${activeCategory === button.value
                        ? 'bg-purple-600 hover:bg-purple-700'
                        : 'border-purple-800 text-purple-300 hover:bg-purple-900/20'
                      }
                      transform hover:scale-105 transition-all
                    `}
                  >
                    {button.name}
                  </Button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="max-w-5xl mx-auto">
                <AnimatePresence mode="wait">
                  {getFilteredSkills().map(([category, skillList]) => (
                    <motion.div
                      key={category}
                      className="space-y-6"
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      variants={container}
                    >
                      {category !== 'all' && (
                        <h3 className="text-2xl font-semibold text-purple-200 capitalize text-center">
                          {category}
                        </h3>
                      )}
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                        {skillList.map((skill) => (
                          <motion.div
                            key={skill.name}
                            variants={item}
                            className="group flex flex-col items-center justify-center gap-3 p-4 rounded-lg bg-black/40 border border-purple-900/50 hover:border-purple-500 transition-all aspect-square w-full"
                            whileHover={{ scale: 1.05 }}
                          >
                            <motion.div
                              className="w-12 h-12 flex items-center justify-center"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{
                                duration: 0.6,
                                type: "spring",
                                stiffness: 200,
                                damping: 10
                              }}
                            >
                              <Image
                                src={skill.icon}
                                alt={skill.name}
                                className="w-full h-full object-contain filter group-hover:brightness-125 transition-all"
                                width={48} 
                                height={48}
                              />
                            </motion.div>
                            {category !== 'all' && (
                              <motion.span
                                className="text-sm text-gray-400 group-hover:text-purple-300 transition-colors text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                              >
                                {skill.name}
                              </motion.span>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Projects Section - (Already improved in previous step, kept the 'clean' version) */}
          <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
            {/* Background Blobs - Made more subtle */}
            <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl animate-pulse" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 lg:mb-16 bg-gradient-to-r from-white to-purple-300 text-transparent bg-clip-text">
                Featured Projects
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl bg-black/30 border border-purple-900/50 hover:border-purple-600 transition-all h-full shadow-md hover:shadow-lg"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    </div>

                    <div className="p-6 space-y-4 flex flex-col h-[calc(100%-16rem)]">
                      <h3 className="text-xl lg:text-2xl font-bold text-purple-200">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-base flex-grow leading-relaxed">
                        {project.description}
                      </p>

                      <div className="space-y-6 pt-2">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-purple-900/50 text-purple-200 px-2.5 py-0.5 text-xs rounded"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                              <Button variant="outline" size="sm" className="border-purple-800 text-purple-300 hover:bg-purple-900/20 hover:text-purple-100 w-full transition-colors">
                                View Code
                              </Button>
                            </a>
                          )}

                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                              <Button variant="default" size="sm" className="bg-purple-600 hover:bg-purple-700 w-full shadow-sm hover:shadow-md transition-shadow">
                                Live Demo
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-32 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-300 text-transparent bg-clip-text">
                Experience
              </h2>
              <div className="max-w-3xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="border-l-2 border-purple-800 pl-6 space-y-2 hover:border-purple-500 transition-colors backdrop-blur-sm bg-black/20 p-6 rounded-r-lg"
                  >
                    <h3 className="text-xl font-medium text-purple-200">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                    <p className="text-sm text-purple-400 font-semibold">{exp.employment}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-32 relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10">
              <div className="max-w-2xl mx-auto backdrop-blur-lg bg-black/30 p-8 rounded-2xl border border-purple-500/20">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-purple-300 text-transparent bg-clip-text">
                  Connect with me
                </h2>
                <div className="flex flex-col items-center gap-6">
                  <p className="text-gray-400 text-center max-w-2xl">
                    Feel free to reach out for collaborations or just a friendly hello
                  </p>
                  <div className="flex gap-4">
                    <Link href="mailto:roward18@gmail.com">
                      <Button
                        variant="outline"
                        className="border-purple-800 text-purple-300 hover:bg-purple-900/20 transform hover:scale-105 transition-all"
                      >
                        Email Me
                      </Button>
                    </Link>
                    <Link href="https://github.com/kolnlaviste" target="_blank">
                      <Button
                        variant="outline"
                        className="border-purple-800 text-purple-300 hover:bg-purple-900/20 transform hover:scale-105 transition-all"
                      >
                        GitHub
                      </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/koln-laviste" target="_blank">
                      <Button
                        variant="outline"
                        className="border-purple-800 text-purple-300 hover:bg-purple-900/20 transform hover:scale-105 transition-all"
                      >
                        LinkedIn
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}