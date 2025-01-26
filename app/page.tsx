import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/0" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

