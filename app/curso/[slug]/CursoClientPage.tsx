"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowLeft, Clock, Users, Award, MessageCircle } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "./contact-form"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Logo } from "@/components/logo"
import Image from "next/image"
import { useEffect, useState } from "react"

// Datos de los cursos
const cursosData = {
  serpientes: {
    id: 1,
    titulo: "Curso de Serpientes",
    precio: "$30.000",
    duracion: "2 horas y media",
    modalidad: "En vivo",
    descripcion:
      "Comprende el fascinante mundo de las serpientes desde una perspectiva científica y cultural completa. Este curso te brindará conocimientos fundamentales sobre la biología, comportamiento y clasificación de las serpientes, así como su importancia cultural e histórica.",
    objetivos: [
      "Comprender la evolución y diversidad de las serpientes",
      "Identificar especies comunes y sus características",
      "Analizar el papel cultural de las serpientes en diferentes sociedades",
      "Desarrollar técnicas de observación y estudio",
      "Aplicar conocimientos en conservación y manejo",
    ],
    temas: [
      "Serpientes: visión antropológica histórica y cultural",
      "Miedo y fobia",
      "Introducción al mundo de las serpientes",
      "Características comunes y específicas",
      "Fisiología y morfología",
      "Clasificación según su mecanismo de inoculación de toxina",
      "Serpientes venenosas",
      "Serpientes sin toxinas",
      "Serpientes con toxinas consideradas sin peligro",
      "Serpientes comunes",
    ],
    imagen: "/images/curso-serpientes.jpg",
  },
  "envenenamiento-serpientes": {
    id: 2,
    titulo: "Curso de Envenenamiento de Serpientes",
    precio: "$30.000",
    duracion: "2 horas y media",
    modalidad: "En vivo",
    descripcion:
      "Especialízate en el manejo médico y primeros auxilios en casos de envenenamiento ofídico. Este curso está dirigido a profesionales de la salud, veterinarios y personas que trabajan en áreas de riesgo.",
    objetivos: [
      "Identificar síntomas de envenenamiento ofídico",
      "Aplicar protocolos de primeros auxilios",
      "Comprender la fisiopatología del envenenamiento",
      "Conocer los diferentes tipos de antivenenos",
      "Implementar medidas de prevención efectivas",
    ],
    temas: [
      "Veneno y ofidismo",
      "Serpientes de importancia médica a nivel mundial",
      "Ofidismo",
      "Venenos clasificación y fisiopatología del envenenamiento",
      "Reconocimiento de síntomas en accidentes",
      "Veneno de cada una de las especies",
      "Antiveneno",
      "Primeros auxilios",
      "Envenenamiento por culebras de poca importancia médica",
      "Qué hacer, qué no hacer, prevención",
    ],
    imagen: "/images/envenenamiento.jpg",
  },
  "aranas-alacranes": {
    id: 3,
    titulo: "Curso de Arañas y Alacranes",
    precio: "$30.000",
    duracion: "2 horas y media",
    modalidad: "En vivo",
    descripcion:
      "Domina el conocimiento sobre arácnidos venenosos y su importancia médica. Aprende sobre la diversidad de arañas y escorpiones, sus venenos y el manejo de accidentes por picaduras.",
    objetivos: [
      "Clasificar arácnidos según su peligrosidad",
      "Identificar especies de importancia médica",
      "Comprender la biología de arañas y escorpiones",
      "Aplicar primeros auxilios en casos de picaduras",
      "Desarrollar estrategias de prevención y control",
    ],
    temas: [
      "Clasificación según su veneno",
      "Características comunes y específicas",
      "Fisiología y morfología",
      "Tela de araña",
      "Arañas del mundo",
      "Arañas comunes de argentina",
      "Arañas consideradas de importancia médica",
      "Araneismo en Argentina",
      "Fisiopatología del envenenamiento",
      "Primeros auxilios y prevención",
      "Escorpiones - Fisiología y morfología",
      "Fisiopatología del envenenamiento",
      "Reconocimiento de especies",
    ],
    imagen: "/images/viuda-negra.jpg",
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function CursoClientPage({ params }: PageProps) {
  const curso = cursosData[params.slug as keyof typeof cursosData]
  const [isMobile, setIsMobile] = useState(false)
  const [highlightForm, setHighlightForm] = useState(false)

  useEffect(() => {
    // Scroll al inicio de la página cuando se carga el componente
    window.scrollTo({ top: 0, behavior: "smooth" })

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleSolicitarInfo = () => {
    if (isMobile) {
      // En móviles, hacer scroll al formulario
      const formElement = document.getElementById("contact-form")
      if (formElement) {
        formElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    } else {
      // En desktop, destacar el formulario
      setHighlightForm(true)
      setTimeout(() => setHighlightForm(false), 3000) // Quitar highlight después de 3 segundos
    }
  }

  if (!curso) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Curso no encontrado</h1>
          <Link href="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-[#62825d] hover:text-[#5a7355]">
              <ArrowLeft className="h-5 w-5" />
              <span>Volver a cursos</span>
            </Link>
            <Logo />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contenido principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero del curso */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={curso.imagen || "/placeholder.svg"}
                  alt={curso.titulo}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <Badge className="bg-[#62825d]/10 text-[#62825d]">Curso Especializado</Badge>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{curso.titulo}</h1>
                <p className="text-lg text-gray-600 mb-6">{curso.descripcion}</p>

                {/* Información del curso */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-[#62825d]" />
                    <span className="text-sm text-gray-600">{curso.duracion}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-[#62825d]" />
                    <span className="text-sm text-gray-600">{curso.modalidad}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-[#62825d]" />
                    <span className="text-sm text-gray-600">Certificado</span>
                  </div>
                </div>

                {/* Botón para solicitar información */}
                <Button onClick={handleSolicitarInfo} className="bg-[#62825d] hover:bg-[#5a7355]">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Solicitar Más Información
                </Button>
              </div>
            </div>

            {/* Objetivos */}
            <Card>
              <CardHeader>
                <CardTitle>Objetivos del Curso</CardTitle>
                <CardDescription>Al finalizar este curso serás capaz de:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {curso.objetivos.map((objetivo, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#62825d] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{objetivo}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Temario completo */}
            <Card>
              <CardHeader>
                <CardTitle>Temario Completo</CardTitle>
                <CardDescription>Contenido detallado que abordaremos durante el curso</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {curso.temas.map((tema, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#62825d]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-[#62825d]">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{tema}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar con formulario */}
          <div className="lg:col-span-1">
            <div
              id="contact-form"
              className={`sticky top-8 transition-all duration-500 ${
                highlightForm ? "ring-4 ring-[#62825d] ring-opacity-50 shadow-2xl transform scale-105" : ""
              }`}
            >
              <ContactForm cursoTitulo={curso.titulo} />
            </div>
          </div>
        </div>
        {/* WhatsApp Float Button */}
        <WhatsAppFloat />
      </div>
    </div>
  )
}
