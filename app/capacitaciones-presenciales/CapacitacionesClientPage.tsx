"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowLeft, Clock, Users, Award, Shield, MapPin, Target } from "lucide-react"
import Link from "next/link"
import { CapacitacionesContactForm } from "./contact-form"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Logo } from "@/components/logo"
import Image from "next/image"

export default function CapacitacionesClientPage() {
  const modalidades = [
    {
      titulo: "Manipulación Segura de Serpientes",
      descripcion:
        "Técnicas profesionales de captura, manejo y traslado seguro de serpientes venenosas y no venenosas.",
      objetivos: [
        "Identificar especies peligrosas vs. inofensivas",
        "Técnicas de captura con herramientas especializadas",
        "Protocolos de seguridad y equipos de protección",
        "Manejo de situaciones de emergencia",
        "Traslado y liberación segura",
      ],
      duracion: "4-8 horas",
      imagen: "/images/manipulacion-serpientes.jpg",
    },
    {
      titulo: "Manejo de Arácnidos Peligrosos",
      descripcion: "Protocolos de seguridad y técnicas de manipulación controlada de arañas y escorpiones venenosos.",
      objetivos: [
        "Identificación de especies de importancia médica",
        "Técnicas de captura sin riesgo",
        "Uso de herramientas especializadas",
        "Primeros auxilios en caso de accidentes",
        "Prevención y control en espacios cerrados",
      ],
      duracion: "3-6 horas",
      imagen: "/images/capacitacion-aranas.jpg",
    },
  ]

  const beneficios = [
    {
      icono: Shield,
      titulo: "Seguridad Garantizada",
      descripcion: "Protocolos probados que minimizan riesgos durante la manipulación",
    },
    {
      icono: Users,
      titulo: "Grupos Reducidos",
      descripcion: "Máximo 20 participantes para atención personalizada",
    },
    {
      icono: Award,
      titulo: "Certificación Oficial",
      descripcion: "Certificado de participación avalado por expertos",
    },
    {
      icono: MapPin,
      titulo: "En tu Ubicación",
      descripcion: "Nos trasladamos a tu institución con todo el equipamiento",
    },
    {
      icono: Clock,
      titulo: "Horarios Flexibles",
      descripcion: "Adaptamos los horarios a las necesidades de tu equipo",
    },
    {
      icono: Target,
      titulo: "Contenido Específico",
      descripcion: "Programa adaptado al tipo de institución y necesidades",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-[#62825d] hover:text-[#5a7355]">
              <ArrowLeft className="h-5 w-5" />
              <span>Volver al inicio</span>
            </Link>
            <Logo />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contenido principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero de capacitaciones */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/images/capacitacion-grupal.jpg"
                  alt="Capacitaciones Presenciales para Grupos"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <Badge className="bg-[#62825d]/10 text-[#62825d]">Capacitación Especializada</Badge>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Capacitaciones Presenciales para Grupos</h1>
                <p className="text-lg text-gray-600 mb-6">
                  Ofrecemos capacitaciones presenciales especializadas en manipulación segura de serpientes y arañas
                  para instituciones, empresas y grupos profesionales. Entrenamiento práctico con expertos certificados
                  que se adapta a las necesidades específicas de tu organización.
                </p>

                {/* Información general */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-[#62825d]" />
                    <span className="text-sm text-gray-600">4-8 horas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-[#62825d]" />
                    <span className="text-sm text-gray-600">Grupos hasta 20 personas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[#62825d]" />
                    <span className="text-sm text-gray-600">En tu ubicación</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modalidades disponibles */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Modalidades Disponibles</h2>
              {modalidades.map((modalidad, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="aspect-video md:aspect-square overflow-hidden">
                      <Image
                        src={modalidad.imagen || "/placeholder.svg"}
                        alt={modalidad.titulo}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{modalidad.titulo}</h3>
                      <p className="text-gray-600 mb-4">{modalidad.descripcion}</p>
                      <div className="mb-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#62825d]/10 text-[#62825d]">
                          Duración: {modalidad.duracion}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Objetivos:</h4>
                      <ul className="space-y-1">
                        {modalidad.objetivos.map((objetivo, objIndex) => (
                          <li key={objIndex} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-[#62825d] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{objetivo}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Beneficios */}
            <Card>
              <CardHeader>
                <CardTitle>¿Por qué elegir nuestras capacitaciones?</CardTitle>
                <CardDescription>Beneficios que hacen la diferencia en tu formación profesional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {beneficios.map((beneficio, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-[#62825d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <beneficio.icono className="h-5 w-5 text-[#62825d]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{beneficio.titulo}</h4>
                        <p className="text-sm text-gray-600">{beneficio.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Público objetivo */}
            <Card>
              <CardHeader>
                <CardTitle>Ideal para</CardTitle>
                <CardDescription>
                  Instituciones y organizaciones que requieren capacitación especializada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Hospitales y clínicas",
                    "Bomberos y rescatistas",
                    "Parques nacionales y reservas",
                    "Universidades e institutos",
                    "Empresas de control de plagas",
                    "Zoológicos y serpentarios",
                    "Organismos gubernamentales",
                    "ONGs y fundaciones ambientales",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#62825d] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar con formulario */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CapacitacionesContactForm />
            </div>
          </div>
        </div>
        {/* WhatsApp Float Button */}
        <WhatsAppFloat />
      </div>
    </div>
  )
}
