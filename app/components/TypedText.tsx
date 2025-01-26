"use client"

import { useEffect, useRef } from "react"
import Typed from "typed.js"

export default function TypedText() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["AI Engineer", "Data Analyst", "Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return <span ref={el} className="text-2xl text-blue-400" />
}

