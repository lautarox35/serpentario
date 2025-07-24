import Image from "next/image"

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Image
        src="/images/logo-serpentario.png"
        alt="Academia del Serpentario Machaqway"
        width={40}
        height={40}
        className="h-10 w-10"
      />
      <span className="text-2xl font-bold text-[#62825d]">Academia del Serpentario Machaqway</span>
    </div>
  )
}
