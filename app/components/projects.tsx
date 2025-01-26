"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";


// Use the correct import or public folder reference for images
export default function Projects() {
  const projects = [
    {
      title: "Image Quality Enhancer",
      description:
        "An AI-powered tool that enhances low-quality images into high-resolution using deep learning models.",
      tech: ["Deep Learning", "Python", "Pytorch"],
      github: "https://github.com/your-repo/image-quality-enhancer",
      image: './ImageEnhancer.jpg', // Imported image
    },
    {
      title: "Sign Language Detection",
      description:
        "A system that translates sign language gestures into text using computer vision and machine learning.",
      tech: ["Python", "TensorFlow", "OpenCV"],
      github: "https://github.com/your-repo/sign-language-detection",
      image: './signLan.jpg', // Imported image
    },
    {
      title: "Ecommerce Website",
      description:
        "A full-stack e-commerce platform for seamless shopping experiences, featuring secure payment integration and admin controls.",
      tech: ["Node.js", "Express", "MongoDB", "React"],
      github: "https://github.com/your-repo/ecommerce-website",
      image: './ecommerce.jpg', // Imported image
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Image Section */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                {/* Footer with GitHub Button */}
                <CardFooter className="flex gap-2">
                  <Button
                    as="a"
                    href={project.github}
                    target="_blank"
                    variant="outline"
                    size="sm"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
