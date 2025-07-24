"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MessageCircle, Phone, Mail, User, MapPin } from "lucide-react"

interface ContactFormProps {
  cursoTitulo: string
}

export function ContactForm({ cursoTitulo }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    pais: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Crear el mensaje para WhatsApp
    const mensaje = `¡Hola! Me interesa inscribirme en el *${cursoTitulo}*

*Mis datos de contacto:*
• Nombre: ${formData.nombre} ${formData.apellido}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}
• País: ${formData.pais}

Me gustaría recibir más información sobre el curso, modalidades de pago y fechas de inicio.

¡Gracias!`

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje)

    // Número de WhatsApp (sin el +)
    const numeroWhatsApp = "5493544593134"

    // Crear la URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`

    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, "_blank")

    // Resetear el formulario después de un breve delay
    setTimeout(() => {
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        pais: "",
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const isFormValid = formData.nombre && formData.apellido && formData.email && formData.telefono && formData.pais

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-[#62825d] text-white rounded-t-lg">
        <CardTitle className="flex items-center space-x-2">
          <MessageCircle className="h-5 w-5" />
          <span>Solicitar Más Información</span>
        </CardTitle>
        <CardDescription className="text-white/80">Completa tus datos y te contactaremos por WhatsApp</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre" className="text-sm font-medium">
                Nombre *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="apellido" className="text-sm font-medium">
                Apellido *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="apellido"
                  name="apellido"
                  type="text"
                  placeholder="Tu apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Correo Electrónico *
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono" className="text-sm font-medium">
              Número de Teléfono *
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="+54 9 11 1234-5678"
                value={formData.telefono}
                onChange={handleInputChange}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pais" className="text-sm font-medium">
              País *
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="pais"
                name="pais"
                type="text"
                placeholder="Ej: Argentina, Colombia, México"
                value={formData.pais}
                onChange={handleInputChange}
                className="pl-10"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#62825d] hover:bg-[#5a7355] text-white"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Enviando...</span>
              </span>
            ) : (
              <span className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Enviar por WhatsApp</span>
              </span>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Al enviar este formulario, serás redirigido a WhatsApp para completar tu consulta.
          </p>
        </form>

        {/* Información adicional */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">¿Por qué elegirnos?</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#62825d] rounded-full"></div>
              <span>Instructores expertos</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#62825d] rounded-full"></div>
              <span>Certificado oficial</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#62825d] rounded-full"></div>
              <span>Soporte personalizado</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#62825d] rounded-full"></div>
              <span>Material actualizado</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
