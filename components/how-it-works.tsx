"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "1️⃣",
    title: "Create a profile for your dog",
    icon: "🐶",
  },
  {
    number: "2️⃣",
    title: "Add feeding & walking times",
    icon: "🕒",
  },
  {
    number: "3️⃣",
    title: "View daily stats and trends",
    icon: "📊",
  },
]

export function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-background to-[#F0F9F4]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">How It Works</h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Get started in three simple steps
        </p>

        <div className="max-w-4xl mx-auto relative">
          {/* Paw trail line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 opacity-30" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-primary/20">
                  <div className="text-5xl mb-4">{step.number}</div>
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
