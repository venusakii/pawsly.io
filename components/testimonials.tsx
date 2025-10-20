import { Card } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Pawsly helped me understand my dog's habits — and saved us a few missed dinners!",
    author: "Anna & Max",
    location: "Berlin",
    emoji: "🐕",
  },
  {
    quote: "We use it as a shared family log for our corgi walks!",
    author: "James",
    location: "London",
    emoji: "🐶",
  },
  {
    quote: "The best app for keeping track of multiple dogs. Absolutely love it!",
    author: "Sarah",
    location: "New York",
    emoji: "🦮",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Paw pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 24 24'%3E%3Cpath fill='%23F6B26B' d='M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Loved by Pet Parents</h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          See what our community has to say
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-3xl border-2 border-primary/20"
            >
              <div className="text-5xl mb-4">{testimonial.emoji}</div>
              <p className="text-lg text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="text-sm">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
