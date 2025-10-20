"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [pawPrints, setPawPrints] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate floating paw prints
    const prints = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setPawPrints(prints)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#F0F9F4] to-[#FFFDF8]">
      {/* Floating paw prints background */}
      {pawPrints.map((print) => (
        <div
          key={print.id}
          className="absolute opacity-10 animate-float"
          style={{
            left: `${print.x}%`,
            top: `${print.y}%`,
            animationDelay: `${print.delay}s`,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
            <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
      ))}

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
                Track your pup's walks, meals, and joy — all in one place.
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty">
              Pawsly helps you build a daily routine for your furry friend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-[#FF9F43] text-white text-lg px-8 py-6 rounded-full transition-all hover:scale-105 hover:animate-wag"
              >
                Start Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 rounded-full transition-all hover:scale-105 bg-transparent"
              >
                See How It Works 🐾
              </Button>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <img
                src="/happy-dog-walking-with-owner-under-sun-illustratio.jpg"
                alt="Happy dog walking with owner"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
