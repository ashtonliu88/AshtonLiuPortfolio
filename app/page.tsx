import { Download, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"

export default function HomePage() {
  return (
    <PageTransition>
      <section className="flex min-h-[calc(100vh-theme(spacing.14)-theme(spacing.16))] items-center justify-center py-24">
        <div className="container flex max-w-[700px] flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Software Engineer</h1>
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
        </div>
      </section>
    </PageTransition>
  )
}

