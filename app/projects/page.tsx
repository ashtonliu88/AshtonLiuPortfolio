import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"

export default function ProjectsPage() {
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
    <PageTransition>
      <section className="flex min-h-[calc(100vh-theme(spacing.14)-theme(spacing.16))] items-center justify-center py-24">
        <div className="container max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
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
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

