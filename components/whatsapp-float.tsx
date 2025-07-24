"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    const numeroWhatsApp = "5493544593134"
    const mensaje = encodeURIComponent(
      "¡Hola! Me interesa obtener más información sobre los cursos de Academia del Serpentario Machaqway. ¿Podrían ayudarme?",
    )
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`
    window.open(urlWhatsApp, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-[#62825d] hover:bg-[#5a7355] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />

      {/* Tooltip */}
      <div
        className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
          isHovered ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        ¡Chatea con nosotros!
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>

      {/* Animación de pulso */}
      <div className="absolute inset-0 bg-[#62825d] rounded-full animate-ping opacity-20"></div>
    </button>
  )
}
