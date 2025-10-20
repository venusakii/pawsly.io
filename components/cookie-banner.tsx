"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-5">
      <div className="bg-white rounded-3xl shadow-2xl p-6 border-2 border-primary/20">
        <p className="text-foreground mb-4 text-lg">We use cookies — the crunchy kind and the digital kind 🍪🐶</p>
        <Button
          onClick={handleAccept}
          className="w-full bg-primary hover:bg-[#FF9F43] text-white rounded-full py-3 text-lg font-bold transition-all hover:scale-105 animate-bounce-light"
        >
          Accept & Continue 🐾
        </Button>
      </div>
    </div>
  )
}
