"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function JoinThePack() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    // Handle email submission
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
      {/* Paw pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24'%3E%3Cpath fill='%23F6B26B' d='M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Join the Pack</h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Keep your dog happy, healthy, and on track — every day.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-6 text-lg rounded-full border-2 border-primary/30 focus:border-primary"
            required
          />
          <Button
            type="submit"
            size="lg"
            className="bg-primary hover:bg-[#FF9F43] text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105 hover:animate-wag whitespace-nowrap"
          >
            Get Started 🦴
          </Button>
        </form>

        <p className="text-sm text-muted-foreground mt-6">No credit card required. Start tracking in seconds.</p>
      </div>
    </section>
  )
}
