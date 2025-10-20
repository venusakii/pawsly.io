"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

const features = [
  {
    icon: "🦴",
    title: "Feeding Log",
    description: "Never forget a meal again",
    color: "bg-accent",
  },
  {
    icon: "🚶",
    title: "Walk Tracker",
    description: "Record distance & routes",
    color: "bg-primary",
  },
  {
    icon: "🐕",
    title: "Mood Diary",
    description: "Track behavior & energy levels",
    color: "bg-secondary",
  },
]

export function WhyPawsly() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Why Pawsly?</h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Everything you need to keep your furry friend happy and healthy
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`text-6xl mb-4 inline-block transition-transform duration-300 ${
                  hoveredIndex === index ? "animate-bounce-light" : ""
                }`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-lg">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
