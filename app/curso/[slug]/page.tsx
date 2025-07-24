import CursoClientPage from "./CursoClientPage"

export function generateStaticParams() {
  return [{ slug: "serpientes" }, { slug: "envenenamiento-serpientes" }, { slug: "aranas-alacranes" }]
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function CursoPage({ params }: PageProps) {
  return <CursoClientPage params={params} />
}
