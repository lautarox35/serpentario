"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BookOpen, Users, Award, ExternalLink, Star, Quote, MapPin, Clock, Shield } from "lucide-react"
import Link from "next/link"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Logo } from "@/components/logo"
import Image from "next/image"

export default function Component() {
  const cursos = [
    {
      id: 1,
      slug: "serpientes",
      titulo: "Curso de Serpientes",
      precio: "$30.000",
      descripcion:
        "Comprende el fascinante mundo de las serpientes desde una perspectiva científica y cultural completa.",
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
    {
      id: 2,
      slug: "envenenamiento-serpientes",
      titulo: "Curso de Envenenamiento de Serpientes",
      precio: "$30.000",
      descripcion: "Especialízate en el manejo médico y primeros auxilios en casos de envenenamiento ofídico.",
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
    {
      id: 3,
      slug: "aranas-alacranes",
      titulo: "Curso de Arañas y Alacranes",
      precio: "$30.000",
      descripcion: "Domina el conocimiento sobre arácnidos venenosos y su importancia médica.",
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
  ]

  const testimonios = [
    {
      id: 1,
      nombre: "Dr. María González",
      profesion: "Médica Veterinaria",
      curso: "Curso de Envenenamiento de Serpientes",
      comentario:
        "Excelente curso, muy completo y práctico. Los conocimientos adquiridos me han sido fundamentales en mi práctica profesional. El instructor domina perfectamente el tema y la metodología es muy clara.",
      calificacion: 5,
      fecha: "Hace 2 semanas",
    },
    {
      id: 2,
      nombre: "Carlos Mendoza",
      profesion: "Biólogo",
      curso: "Curso de Serpientes",
      comentario:
        "Increíble la profundidad del contenido. Superó mis expectativas completamente. La parte antropológica fue fascinante y me ayudó a entender mejor la relación cultural con estos animales.",
      calificacion: 5,
      fecha: "Hace 1 mes",
    },
    {
      id: 3,
      nombre: "Ana Rodríguez",
      profesion: "Enfermera de Emergencias",
      curso: "Curso de Arañas y Alacranes",
      comentario:
        "Muy útil para mi trabajo en el hospital. Ahora puedo identificar mejor los casos de envenenamiento por arácnidos y aplicar los primeros auxilios correctamente. Totalmente recomendado.",
      calificacion: 5,
      fecha: "Hace 3 semanas",
    },
    {
      id: 4,
      nombre: "Prof. Roberto Silva",
      profesion: "Docente de Biología",
      curso: "Curso de Serpientes",
      comentario:
        "Como educador, valoro mucho la calidad del material didáctico. Las explicaciones son claras y el enfoque científico es riguroso. Mis estudiantes se beneficiaron enormemente.",
      calificacion: 5,
      fecha: "Hace 1 semana",
    },
    {
      id: 5,
      nombre: "Dra. Patricia López",
      profesion: "Médica de Familia",
      curso: "Curso de Envenenamiento de Serpientes",
      comentario:
        "Información actualizada y muy bien estructurada. Me siento mucho más preparada para manejar emergencias por mordeduras de serpientes. El instructor es muy profesional.",
      calificacion: 5,
      fecha: "Hace 2 meses",
    },
    {
      id: 6,
      nombre: "Martín Torres",
      profesion: "Guardaparque",
      curso: "Curso de Arañas y Alacranes",
      comentario:
        "Perfecto para mi trabajo en el campo. Ahora puedo educar mejor a los visitantes sobre los riesgos y cómo prevenirlos. El curso es muy práctico y aplicable.",
      calificacion: 5,
      fecha: "Hace 3 semanas",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? "text-amber-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  const scrollToCursos = () => {
    const cursosSection = document.getElementById("cursos")
    if (cursosSection) {
      cursosSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex space-x-6">
              <Link href="#cursos" className="text-gray-600 hover:text-[#62825d] transition-colors">
                Cursos
              </Link>
              <Link href="#contacto" className="text-gray-600 hover:text-[#62825d] transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden min-h-[600px] flex items-center">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cabecera.jpg"
            alt="Academia del Serpentario Machaqway - Serpientes"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay oscuro para mejor legibilidad del texto */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-amber-900/20"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-white/90 text-[#62825d] hover:bg-white border-0 shadow-lg">
            Educación Especializada
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Nuestros Cursos</h2>
          <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto font-medium drop-shadow-md">
            Descubre el fascinante mundo de los reptiles y arácnidos con nuestros cursos especializados. Aprende de
            expertos y obtén conocimientos científicos fundamentales para tu desarrollo profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#62825d] hover:bg-[#5a7355] shadow-lg border-0" onClick={scrollToCursos}>
              Ver Cursos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#62825d] bg-white/10 backdrop-blur-sm"
              onClick={() => {
                const numeroWhatsApp = "5493544593134"
                const mensaje = encodeURIComponent(
                  "¡Hola! Me gustaría obtener más información sobre los cursos de Academia del Serpentario Machaqway. ¿Podrían ayudarme?",
                )
                const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`
                window.open(urlWhatsApp, "_blank")
              }}
            >
              Más Información
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#62825d]/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-[#62825d]" />
              </div>
              <h3 className="text-xl font-semibold">Expertos Reconocidos</h3>
              <p className="text-gray-600">
                Aprende de profesionales con años de experiencia en herpetología y aracnología.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold">Clases en Vivo</h3>
              <p className="text-gray-600">
                Participa en sesiones interactivas en tiempo real con nuestros expertos y resuelve tus dudas al
                instante.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Certificación</h3>
              <p className="text-gray-600">Obtén certificados que avalen tus conocimientos especializados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cursos Online Disponibles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada curso online está diseñado para brindarte conocimientos profundos y prácticos sobre especies
              venenosas y su manejo desde la comodidad de tu hogar.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cursos.map((curso) => (
              <Card key={curso.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={curso.imagen || "/placeholder.svg"}
                    alt={curso.titulo}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{curso.titulo}</CardTitle>
                  <CardDescription className="text-base">{curso.descripcion}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <h4 className="font-semibold mb-3 text-gray-900">Temario del curso:</h4>
                  <ul className="space-y-2">
                    {curso.temas.slice(0, 6).map((tema, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-[#62825d] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tema}</span>
                      </li>
                    ))}
                    {curso.temas.length > 6 && (
                      <li className="text-sm text-gray-500 italic">+{curso.temas.length - 6} temas adicionales</li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href={`/curso/${curso.slug}`} className="w-full">
                    <Button className="w-full bg-[#62825d] hover:bg-[#5a7355]">Consultar Capacitación Online</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capacitaciones Presenciales Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido de capacitaciones */}
            <div className="space-y-6 lg:order-1">
              <Badge className="bg-[#62825d] text-white">Capacitación Especializada</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Capacitaciones Presenciales para Grupos</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ofrecemos capacitaciones presenciales especializadas en{" "}
                <strong>manipulación segura de serpientes y arañas</strong> para instituciones, empresas y grupos
                profesionales. Entrenamiento práctico con expertos certificados.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Modalidades disponibles:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-[#62825d] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Manipulación Segura de Serpientes</h4>
                      <p className="text-gray-600 text-sm">
                        Técnicas profesionales de captura, manejo y traslado seguro
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-[#62825d] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Manejo de Arácnidos Peligrosos</h4>
                      <p className="text-gray-600 text-sm">
                        Protocolos de seguridad y técnicas de manipulación controlada
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#62825d] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">En tu ubicación</h4>
                      <p className="text-gray-600 text-sm">Nos trasladamos a tu institución o lugar de trabajo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-[#62825d] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Duración Personalizada</h4>
                      <p className="text-gray-600 text-sm">
                        Desde talleres de 4 horas hasta cursos intensivos de varios días
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#62825d]/20">
                <h4 className="font-semibold text-gray-900 mb-3">Ideal para:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#62825d] flex-shrink-0" />
                    <span>Hospitales y clínicas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#62825d] flex-shrink-0" />
                    <span>Bomberos y rescatistas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#62825d] flex-shrink-0" />
                    <span>Parques nacionales</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#62825d] flex-shrink-0" />
                    <span>Universidades</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#62825d] flex-shrink-0" />
                    <span>Empresas de control de plagas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#62825d] flex-shrink-0" />
                    <span>Zoológicos y serpentarios</span>
                  </div>
                </div>
              </div>
              {/* Botón visible solo en desktop */}
              <div className="hidden lg:block">
                <Button size="lg" className="bg-[#62825d] hover:bg-[#5a7355] text-white" asChild>
                  <Link href="/capacitaciones-presenciales">
                    <Users className="h-5 w-5 mr-2" />
                    Consultar Capacitación Grupal
                  </Link>
                </Button>
              </div>
            </div>

            {/* Imagen ilustrativa */}
            <div className="space-y-4 lg:order-2">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/capacitacion-grupal.jpg"
                  alt="Capacitación presencial - Experto enseñando manipulación segura"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/images/manipulacion-serpientes.jpg"
                    alt="Demostración práctica de técnicas de manipulación"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/images/capacitacion-aranas.jpg"
                    alt="Capacitación especializada en manejo de arácnidos"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Botón visible solo en móvil, debajo de las imágenes */}
              <div className="lg:hidden">
                <Button size="lg" className="w-full bg-[#62825d] hover:bg-[#5a7355] text-white" asChild>
                  <Link href="/capacitaciones-presenciales">
                    <Users className="h-5 w-5 mr-2" />
                    Consultar Capacitación Grupal
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ebook Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido del ebook */}
            <div className="space-y-6">
              <Badge className="bg-[#62825d] text-white">Recurso Especializado</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Guía de Campo de Serpientes Venenosas de Argentina
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lleva contigo el conocimiento esencial para identificar serpientes venenosas argentinas. Una guía
                práctica y completa con ilustraciones detalladas, características distintivas y datos fundamentales para
                profesionales y entusiastas.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#62825d] flex-shrink-0" />
                  <span className="text-gray-700">Identificación precisa de especies venenosas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#62825d] flex-shrink-0" />
                  <span className="text-gray-700">Ilustraciones de alta calidad</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#62825d] flex-shrink-0" />
                  <span className="text-gray-700">Información científica actualizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#62825d] flex-shrink-0" />
                  <span className="text-gray-700">Formato digital para llevar al campo</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-amber-600">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <span className="text-gray-600 ml-2">Recurso altamente valorado</span>
              </div>

              {/* Botón visible solo en desktop */}
              <div className="hidden lg:block">
                <Button
                  size="lg"
                  className="bg-[#62825d] hover:bg-[#5a7355] text-white"
                  onClick={() => {
                    window.open(
                      "https://articulo.mercadolibre.com.ar/MLA-2182928634-guia-de-campo-de-serpientes-venenosas-de-argentina-_JM#origin%3Dshare%26sid%3Dshare",
                      "_blank",
                    )
                  }}
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Comprar Nuestra Guía de Campo
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Galería de imágenes del ebook */}
            <div className="space-y-4">
              {/* En móvil: imágenes en una sola columna más grandes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/images/ebook-1.png"
                    alt="Página de muestra 1 - Guía de Campo"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/images/ebook-2.png"
                    alt="Página de muestra 2 - Guía de Campo"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/images/ebook-4.png"
                    alt="Página de muestra 4 - Guía de Campo"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/images/ebook-13.png"
                    alt="Página de muestra 13 - Guía de Campo"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Botón visible solo en móvil, debajo de las fotos */}
              <div className="lg:hidden">
                <Button
                  size="lg"
                  className="w-full bg-[#62825d] hover:bg-[#5a7355] text-white"
                  onClick={() => {
                    window.open(
                      "https://articulo.mercadolibre.com.ar/MLA-2182928634-guia-de-campo-de-serpientes-venenosas-de-argentina-_JM#origin%3Dshare%26sid%3Dshare",
                      "_blank",
                    )
                  }}
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Comprar Nuestra Guía de Campo
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros estudiantes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce las experiencias de profesionales que han transformado su conocimiento con nuestros cursos
              especializados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonios.map((testimonio) => (
              <Card key={testimonio.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{testimonio.nombre}</h4>
                      <p className="text-sm text-gray-600">{testimonio.profesion}</p>
                      <p className="text-xs text-[#62825d] font-medium mt-1">{testimonio.curso}</p>
                    </div>
                    <Quote className="h-6 w-6 text-[#62825d]/30 flex-shrink-0" />
                  </div>
                  <div className="flex items-center space-x-1 mt-2">{renderStars(testimonio.calificacion)}</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 text-sm leading-relaxed italic">"{testimonio.comentario}"</p>
                  <p className="text-xs text-gray-500 mt-3">{testimonio.fecha}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Estadísticas de satisfacción */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-1">{renderStars(5)}</div>
                <h3 className="text-2xl font-bold text-[#62825d]">4.9/5</h3>
                <p className="text-gray-600">Calificación promedio</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#62825d]">500+</h3>
                <p className="text-gray-600">Estudiantes satisfechos</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#62825d]">98%</h3>
                <p className="text-gray-600">Recomiendan nuestros cursos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#62825d] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar tu especialización?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Únete a nuestra comunidad de estudiantes y profesionales especializados en herpetología y aracnología.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#62825d] bg-transparent"
              onClick={() => {
                const numeroWhatsApp = "5493544593134"
                const mensaje = encodeURIComponent(
                  "¡Hola! Me gustaría hablar con un asesor sobre los cursos de Academia del Serpentario Machaqway. ¿Podrían ayudarme con más información?",
                )
                const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`
                window.open(urlWhatsApp, "_blank")
              }}
            >
              Contactar Asesor
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  )
}
