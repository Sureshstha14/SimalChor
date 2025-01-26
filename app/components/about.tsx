"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const details = [
    {
      title: "Education",
      content: ["Bachelor's in Computer Engineering - Khwopa College of Engineering", "+2 - Khwopa College"],
    },
    {
      title: "Contact",
      content: ["Email: sshakha350@gmail.com", "Phone: 9860916855"],
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{detail.title}</h3>
                  <ul className="space-y-2">
                    {detail.content.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

