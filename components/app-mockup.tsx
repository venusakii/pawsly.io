import { Card } from "@/components/ui/card"

const mockups = [
  {
    title: "Daily Schedule",
    image: "/mobile-app-daily-schedule-interface-dog-care.jpg",
  },
  {
    title: "Walk Summary",
    image: "/mobile-app-walk-tracking-map-interface.jpg",
  },
  {
    title: "Feeding Alerts",
    image: "/mobile-app-feeding-reminder-notification-interface.jpg",
  },
]

export function AppMockup() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Beautiful & Simple Interface
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Everything you need at your fingertips
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {mockups.map((mockup, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                <h3 className="text-xl font-bold text-center mb-4 text-foreground">{mockup.title}</h3>
                <img
                  src={mockup.image || "/placeholder.svg"}
                  alt={mockup.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
