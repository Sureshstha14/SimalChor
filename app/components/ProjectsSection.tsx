import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsSection() {
  const projects = [
    { title: "Project 1", description: "Description of Project 1" },
    { title: "Project 2", description: "Description of Project 2" },
    { title: "Project 3", description: "Description of Project 3" },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-20 bg-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-700 text-white">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">{project.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

