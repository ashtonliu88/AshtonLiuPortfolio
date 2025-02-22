import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PageTransition } from "@/components/page-transition"

export default function SkillsPage() {
  const skills = [
    { name: "React", progress: 90 },
    { name: "TypeScript", progress: 85 },
    { name: "Node.js", progress: 80 },
    { name: "Python", progress: 75 },
    { name: "AWS", progress: 70 },
  ]

  return (
    <PageTransition>
      <section className="flex min-h-[calc(100vh-theme(spacing.14)-theme(spacing.16))] items-center justify-center py-24">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Expertise</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </div>
            <div className="mt-16 space-y-8">
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
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

