const features = [
  {
    title: "Smart Reminders",
    description: "Set reminders for meals and walks",
    icon: "⏰",
    image: "/app-dashboard-with-reminders-interface.jpg",
  },
  {
    title: "Vet Appointments",
    description: "Add vet appointments and never miss a checkup",
    icon: "🏥",
    image: "/calendar-with-vet-appointments-interface.jpg",
  },
  {
    title: "Multiple Pets",
    description: "Track multiple pets in one place",
    icon: "🐕🐈",
    image: "/multiple-pet-profiles-dashboard.jpg",
  },
  {
    title: "Calendar Sync",
    description: "Sync with Apple/Google Calendar",
    icon: "📅",
    image: "/calendar-sync-integration-interface.jpg",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#F0F9F4] to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Powerful Features</h2>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="relative group">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-auto rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <div className="text-6xl mb-4 inline-block hover:animate-bounce-light transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-xl text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
