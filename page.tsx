"use client"

import { motion } from "framer-motion"
import { Download, Github, Linkedin, Mail, Moon, Sun, Twitter } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText("your.email@example.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const skills = [
    { name: "React", progress: 90 },
    { name: "TypeScript", progress: 85 },
    { name: "Node.js", progress: 80 },
    { name: "Python", progress: 75 },
    { name: "AWS", progress: 70 },
  ]

  const projects = [
    {
      title: "Project One",
      description: "A full-stack application built with React and Node.js",
      link: "https://github.com/yourusername/project-one",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform using Next.js and Stripe",
      link: "https://github.com/yourusername/project-two",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Project Three",
      description: "A real-time chat application with WebSocket",
      link: "https://github.com/yourusername/project-three",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">John Doe</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground" href="#about">
                About
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground" href="#projects">
                Projects
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground" href="#skills">
                Skills
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground" href="#contact">
                Contact
              </a>
            </nav>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>
      <main className="container py-20">
        <section id="about" className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Software Engineer
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Passionate about building exceptional software solutions and creating impactful user experiences.
            </p>
            <div className="mt-8 flex space-x-4">
              <Button asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="aspect-video w-full object-cover"
                      width={400}
                      height={200}
                    />
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="outline" className="w-full">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="skills" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Expertise</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="github" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">GitHub Contributions</h2>
            <Card>
              <CardContent className="p-6">
                <img
                  src="https://ghchart.rshah.org/yourusername"
                  alt="GitHub Contributions Graph"
                  className="w-full dark:invert"
                />
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="contact" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <Button onClick={copyEmail} variant="outline" className="w-full md:w-auto">
                <Mail className="mr-2 h-4 w-4" />
                {copied ? "Copied!" : "Copy Email"}
              </Button>
              <Button asChild variant="outline" className="w-full md:w-auto">
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full md:w-auto">
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </a>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js and Tailwind CSS. Deployed on Vercel.
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

