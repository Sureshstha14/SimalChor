"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="text-white hover:text-blue-400 transition-colors">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

