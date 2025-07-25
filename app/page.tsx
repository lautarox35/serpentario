"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ArrowRight, BookOpen, CheckCircle, Download, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  // Función para hacer scroll a la sección de cursos
  const scrollToCursos = () => {
    const cursosSection = document.getElementById("cursos-online")
    if (cursosSection) {
      cursosSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Función para abrir WhatsApp con mensaje predefinido
  const openWhatsApp = () => {
    const message = "Hola! Estoy interesado en obtener más información sobre los cursos."
    const url = `https://wa.me/5491112345678?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Aprende sobre serpientes y arácnidos con expertos
              </h1>
              <p className="text-lg text-gray-700">
                Cursos especializados para profesionales de la salud, biólogos, veterinarios y entusiastas de la
                herpetología y aracnología.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToCursos} className="bg-[#62825d] hover:bg-[#5a7355]">
                  Ver Cursos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={openWhatsApp}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Más Información
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/serpiente.jpg"
                alt="Serpiente"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">¿Por qué elegir nuestros cursos?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una experiencia educativa única con ventajas que no encontrarás en otros lugares
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#62825d]/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-[#62825d]" />
                </div>
                <CardTitle>Expertos en el campo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nuestros instructores son profesionales con años de experiencia en herpetología y aracnología.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#62825d]/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#62825d]" />
                </div>
                <CardTitle>Certificación oficial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recibe un certificado que valida tus conocimientos y habilidades adquiridas durante el curso.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#62825d]/10 rounded-full flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-[#62825d]" />
                </div>
                <CardTitle>Material exclusivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accede a recursos educativos de alta calidad, guías prácticas y material complementario.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cursos Online */}
      <section id="cursos-online" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nuestros Cursos Online</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Aprende a tu ritmo con nuestros cursos especializados en serpientes y arácnidos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Curso 1 */}
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/images/curso-serpientes.jpg"
                  alt="Curso de Serpientes"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Curso de Serpientes</CardTitle>
                <CardDescription>Duración: 2 horas y media</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Comprende el fascinante mundo de las serpientes desde una perspectiva científica y cultural completa.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">$30.000</span>
                  <Link href="/curso/serpientes">
                    <Button className="bg-[#62825d] hover:bg-[#5a7355]">Ver Detalles</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Curso 2 */}
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/images/envenenamiento.jpg"
                  alt="Curso de Envenenamiento de Serpientes"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Curso de Envenenamiento de Serpientes</CardTitle>
                <CardDescription>Duración: 2 horas y media</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Especialízate en el manejo médico y primeros auxilios en casos de envenenamiento ofídico.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">$30.000</span>
                  <Link href="/curso/envenenamiento-serpientes">
                    <Button className="bg-[#62825d] hover:bg-[#5a7355]">Ver Detalles</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Curso 3 */}
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/images/viuda-negra.jpg"
                  alt="Curso de Arañas y Alacranes"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Curso de Arañas y Alacranes</CardTitle>
                <CardDescription>Duración: 2 horas y media</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Domina el conocimiento sobre arácnidos venenosos y su importancia médica.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">$30.000</span>
                  <Link href="/curso/aranas-alacranes">
                    <Button className="bg-[#62825d] hover:bg-[#5a7355]">Ver Detalles</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capacitaciones Presenciales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Capacitaciones Presenciales</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos capacitaciones personalizadas para instituciones, empresas y grupos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/capacitacion-grupal.jpg"
                alt="Capacitación grupal"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Para Empresas</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/capacitacion-aranas.jpg"
                alt="Capacitación sobre arañas"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Para Instituciones</h3>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/capacitaciones-presenciales">
              <Button className="bg-[#62825d] hover:bg-[#5a7355]">
                Conocer Más
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* E-books */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">E-books Gratuitos</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Descarga nuestros e-books gratuitos y comienza a aprender hoy mismo
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* E-book 1 */}
            <Card className="overflow-hidden">
              <div className="p-4">
                <Image
                  src="/images/ebook-1.png"
                  alt="E-book Guía de Serpientes"
                  width={200}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <CardHeader className="pt-0">
                <CardTitle className="text-lg">Guía de Serpientes</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar
                </Button>
              </CardContent>
            </Card>

            {/* E-book 2 */}
            <Card className="overflow-hidden">
              <div className="p-4">
                <Image
                  src="/images/ebook-2.png"
                  alt="E-book Primeros Auxilios"
                  width={200}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <CardHeader className="pt-0">
                <CardTitle className="text-lg">Primeros Auxilios</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar
                </Button>
              </CardContent>
            </Card>

            {/* E-book 3 */}
            <Card className="overflow-hidden">
              <div className="p-4">
                <Image
                  src="/images/ebook-4.png"
                  alt="E-book Arañas Venenosas"
                  width={200}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <CardHeader className="pt-0">
                <CardTitle className="text-lg">Arañas Venenosas</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar
                </Button>
              </CardContent>
            </Card>

            {/* E-book 4 */}
            <Card className="overflow-hidden">
              <div className="p-4">
                <Image
                  src="/images/ebook-13.png"
                  alt="E-book Escorpiones"
                  width={200}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <CardHeader className="pt-0">
                <CardTitle className="text-lg">Escorpiones</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#62825d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Listo para comenzar tu aprendizaje?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Inscríbete ahora en nuestros cursos y conviértete en un experto en serpientes y arácnidos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToCursos} variant="secondary">
              Ver Todos los Cursos
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10 bg-transparent"
              onClick={openWhatsApp}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </main>
  )
}
