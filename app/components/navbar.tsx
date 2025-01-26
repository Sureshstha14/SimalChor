"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl ml-4  ">SS</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#contact">
            <Button variant="ghost">Contact</Button>
          </Link>
          <Link href="#projects">
            <Button>View Projects</Button>
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

