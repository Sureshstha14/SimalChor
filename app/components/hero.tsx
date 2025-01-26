"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"


export default function Hero() {
  return (
    <section className="relative pt-36 pb-20">
      <div className="container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Simal Shakha
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Computer Engineer specializing in building exceptional digital experiences. Let's turn your vision into
            reality.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
           <Link href="#projects">
            <Button size="lg" className="h-12 px-8">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
           </Link>
           <Link href="#contact">
            <Button size="lg" variant="outline" className="h-12 px-8">
              Contact Me
            </Button>
           </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </section>
  )
}

