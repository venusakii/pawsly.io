"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Walk & Feed Tracker", "Basic mood diary", "1 pet profile", "Mobile app access"],
    color: "border-secondary",
  },
  {
    name: "Plus",
    price: "$4.99",
    period: "per month",
    features: ["Everything in Free", "Add multiple pets", "Smart reminders", "Vet appointments", "Calendar sync"],
    color: "border-primary",
    popular: true,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    features: [
      "Everything in Plus",
      "Full history & insights",
      "Export data",
      "Priority support",
      "Advanced analytics",
      "Custom themes",
    ],
    color: "border-accent",
  },
]

export function PricingPlans() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Choose Your Plan</h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Start free, upgrade when you're ready
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative hover:shadow-2xl transition-all duration-300 border-2 ${plan.color} ${
                hoveredIndex === index ? "scale-105 rotate-1" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular 🐾
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-[#FF9F43] text-white"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                } rounded-full py-6 text-lg font-bold transition-all hover:scale-105`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
