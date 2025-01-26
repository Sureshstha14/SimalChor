"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <Tabs defaultValue="info" className="w-full max-w-2xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="info">Info</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
        </TabsList>
        <TabsContent value="info" className="mt-4">
          <p>
            I am Simal Shakha, a passionate and dedicated professional with expertise in AI engineering, data analysis,
            and design. I strive to create innovative solutions that make a positive impact on people's lives.
          </p>
        </TabsContent>
        <TabsContent value="education" className="mt-4">
          <ul className="list-disc pl-5">
            <li>Bachelor's in Computer Engineering - Khwopa College of Engineering</li>
            <li>+2 - Khwopa College</li>
          </ul>
        </TabsContent>
        <TabsContent value="experience" className="mt-4">
          <p>[Add your work experience here]</p>
        </TabsContent>
      </Tabs>
    </section>
  )
}

