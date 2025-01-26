"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      // Add your EmailJS configuration here
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
      })
      reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center  ">
          <Card className="bg-card/50 backdrop-blur  ">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Get in Touch</CardTitle>
              <CardDescription className="text-center">Have a project in mind? Let's talk about it.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input {...register("name")} placeholder="Your Name" className="bg-background/50" />
                <Input {...register("email")} type="email" placeholder="Your Email" className="bg-background/50" />
                <Textarea {...register("message")} placeholder="Your Message" className="bg-background/50" rows={5} />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

