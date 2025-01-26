import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const skills = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "SQL",
    "Data Visualization",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "React",
    "Next.js",
    "Tailwind CSS",
    "UI/UX Design",
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

