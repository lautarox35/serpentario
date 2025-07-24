"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Phone, Mail, User, Building, Users, MapPin, Calendar } from "lucide-react"

export function CapacitacionesContactForm() {
  const [formData, setFormData] = useState({
    nombreContacto: "",
    apellidoContacto: "",
    email: "",
    telefono: "",
    institucion: "",
    cargo: "",
    tipoInstitucion: "",
    ubicacion: "",
    numeroParticipantes: "",
    modalidadInteres: "",
    fechaPreferida: "",
    comentarios: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Crear el mensaje para WhatsApp
    const mensaje = `🏢 *SOLICITUD DE CAPACITACIÓN PRESENCIAL GRUPAL*

*DATOS DEL CONTACTO:*
• Nombre: ${formData.nombreContacto} ${formData.apellidoContacto}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}
• Cargo: ${formData.cargo}

*INFORMACIÓN INSTITUCIONAL:*
• Institución/Empresa: ${formData.institucion}
• Tipo: ${formData.tipoInstitucion}
• Ubicación: ${formData.ubicacion}

*DETALLES DE LA CAPACITACIÓN:*
• Modalidad de interés: ${formData.modalidadInteres}
• Número de participantes: ${formData.numeroParticipantes}
• Fecha preferida: ${formData.fechaPreferida}

*COMENTARIOS ADICIONALES:*
${formData.comentarios || "Sin comentarios adicionales"}

---
Por favor, envíenme información detallada sobre:
• Contenido específico del programa
• Duración y metodología
• Costos y formas de pago
• Disponibilidad de fechas
• Requisitos técnicos y logísticos

¡Gracias por su atención!`

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
        nombreContacto: "",
        apellidoContacto: "",
        email: "",
        telefono: "",
        institucion: "",
        cargo: "",
        tipoInstitucion: "",
        ubicacion: "",
        numeroParticipantes: "",
        modalidadInteres: "",
        fechaPreferida: "",
        comentarios: "",
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const isFormValid =
    formData.nombreContacto &&
    formData.apellidoContacto &&
    formData.email &&
    formData.telefono &&
    formData.institucion &&
    formData.tipoInstitucion &&
    formData.numeroParticipantes &&
    formData.modalidadInteres

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-[#62825d] text-white rounded-t-lg">
        <CardTitle className="flex items-center space-x-2">
          <MessageCircle className="h-5 w-5" />
          <span>Solicitar Capacitación Grupal</span>
        </CardTitle>
        <CardDescription className="text-white/80">
          Completa la información y te contactaremos para coordinar la capacitación
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Datos del contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Datos del Contacto</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombreContacto" className="text-sm font-medium">
                  Nombre *
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="nombreContacto"
                    name="nombreContacto"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.nombreContacto}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="apellidoContacto" className="text-sm font-medium">
                  Apellido *
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="apellidoContacto"
                    name="apellidoContacto"
                    type="text"
                    placeholder="Tu apellido"
                    value={formData.apellidoContacto}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
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
                  Teléfono *
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
            </div>

            <div className="space-y-2">
              <Label htmlFor="cargo" className="text-sm font-medium">
                Cargo/Posición
              </Label>
              <Input
                id="cargo"
                name="cargo"
                type="text"
                placeholder="Ej: Director, Coordinador, Jefe de Área"
                value={formData.cargo}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Información institucional */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Información Institucional</h3>
            <div className="space-y-2">
              <Label htmlFor="institucion" className="text-sm font-medium">
                Nombre de la Institución/Empresa *
              </Label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="institucion"
                  name="institucion"
                  type="text"
                  placeholder="Nombre completo de la institución"
                  value={formData.institucion}
                  onChange={handleInputChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tipoInstitucion" className="text-sm font-medium">
                Tipo de Institución *
              </Label>
              <Select onValueChange={(value) => handleSelectChange("tipoInstitucion", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el tipo de institución" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hospital">Hospital/Clínica</SelectItem>
                  <SelectItem value="bomberos">Bomberos/Rescatistas</SelectItem>
                  <SelectItem value="parque">Parque Nacional/Reserva</SelectItem>
                  <SelectItem value="universidad">Universidad/Instituto Educativo</SelectItem>
                  <SelectItem value="control-plagas">Empresa de Control de Plagas</SelectItem>
                  <SelectItem value="zoologico">Zoológico/Serpentario</SelectItem>
                  <SelectItem value="gobierno">Organismo Gubernamental</SelectItem>
                  <SelectItem value="ong">ONG/Fundación</SelectItem>
                  <SelectItem value="empresa-privada">Empresa Privada</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ubicacion" className="text-sm font-medium">
                Ubicación (Ciudad, Provincia)
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="ubicacion"
                  name="ubicacion"
                  type="text"
                  placeholder="Ej: Buenos Aires, CABA"
                  value={formData.ubicacion}
                  onChange={handleInputChange}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Detalles de la capacitación */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Detalles de la Capacitación</h3>
            <div className="space-y-2">
              <Label htmlFor="modalidadInteres" className="text-sm font-medium">
                Modalidad de Interés *
              </Label>
              <Select onValueChange={(value) => handleSelectChange("modalidadInteres", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona la modalidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="serpientes">Manipulación Segura de Serpientes</SelectItem>
                  <SelectItem value="aracnidos">Manejo de Arácnidos Peligrosos</SelectItem>
                  <SelectItem value="ambos">Ambas Modalidades</SelectItem>
                  <SelectItem value="personalizado">Programa Personalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="numeroParticipantes" className="text-sm font-medium">
                  Número de Participantes *
                </Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Select onValueChange={(value) => handleSelectChange("numeroParticipantes", value)} required>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Cantidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10">5-10 personas</SelectItem>
                      <SelectItem value="11-20">11-20 personas</SelectItem>
                      <SelectItem value="21-30">21-30 personas</SelectItem>
                      <SelectItem value="31-50">31-50 personas</SelectItem>
                      <SelectItem value="50+">Más de 50 personas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fechaPreferida" className="text-sm font-medium">
                  Fecha Preferida
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="fechaPreferida"
                    name="fechaPreferida"
                    type="text"
                    placeholder="Ej: Marzo 2024, Flexible"
                    value={formData.fechaPreferida}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comentarios" className="text-sm font-medium">
                Comentarios Adicionales
              </Label>
              <Textarea
                id="comentarios"
                name="comentarios"
                placeholder="Cuéntanos sobre objetivos específicos, experiencia previa del grupo, requisitos especiales, etc."
                value={formData.comentarios}
                onChange={handleInputChange}
                rows={4}
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
                <span>Enviar Solicitud por WhatsApp</span>
              </span>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Al enviar este formulario, serás redirigido a WhatsApp para completar tu solicitud de capacitación grupal.
          </p>
        </form>

        {/* Información adicional */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">¿Qué incluye nuestra capacitación?</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#62825d] rounded-full"></div>
              <span>Instructores expertos certificados</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#62825d] rounded-full"></div>
              <span>Material didáctico especializado</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#62825d] rounded-full"></div>
              <span>Práctica con equipos profesionales</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#62825d] rounded-full"></div>
              <span>Certificados de participación</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#62825d] rounded-full"></div>
              <span>Seguimiento post-capacitación</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
