"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      await emailjs.send(
        "service_uf2hoej",
        "template_r4bi05u",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "icXgEUJYcpx_D4MV1",
      )
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      })
      reset()
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-20 bg-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
        <Input
          {...register("name", { required: "Name is required" })}
          placeholder="Your Name"
          className="bg-gray-700 text-white"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Your Email"
          className="bg-gray-700 text-white"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <Textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Your Message"
          className="bg-gray-700 text-white"
          rows={5}
        />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  )
}

