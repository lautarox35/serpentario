import CursoClientPage from "./CursoClientPage"

export async function generateStaticParams() {
  // Asegurar que estas rutas se generen estáticamente
  return [{ slug: "serpientes" }, { slug: "envenenamiento-serpientes" }, { slug: "aranas-alacranes" }]
}

// Agregar metadata para SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const cursosData = {
    serpientes: {
      title: "Curso de Serpientes - Serpentario",
      description:
        "Comprende el fascinante mundo de las serpientes desde una perspectiva científica y cultural completa.",
    },
    "envenenamiento-serpientes": {
      title: "Curso de Envenenamiento de Serpientes - Serpentario",
      description: "Especialízate en el manejo médico y primeros auxilios en casos de envenenamiento ofídico.",
    },
    "aranas-alacranes": {
      title: "Curso de Arañas y Alacranes - Serpentario",
      description: "Domina el conocimiento sobre arácnidos venenosos y su importancia médica.",
    },
  }

  const curso = cursosData[params.slug as keyof typeof cursosData]

  return {
    title: curso?.title || "Curso - Serpentario",
    description: curso?.description || "Curso especializado en serpientes y arácnidos",
  }
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function CursoPage({ params }: PageProps) {
  return <CursoClientPage params={params} />
}
