const audiences = [
  {
    icon: "🐾",
    title: "Individual Pet Owners",
    description: "Perfect for keeping track of your furry friend's daily routine",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Families Sharing Care",
    description: "Coordinate pet care across the whole family",
  },
  {
    icon: "🐶",
    title: "Dog Trainers & Walkers",
    description: "Professional tools for managing multiple clients",
  },
]

export function ForWho() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-[#F0F9F4]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Who Is Pawsly For?</h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Built for everyone who loves their pets
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20"
            >
              <div className="text-6xl mb-4 inline-block hover:animate-bounce-light transition-transform">
                {audience.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{audience.title}</h3>
              <p className="text-muted-foreground text-lg">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
