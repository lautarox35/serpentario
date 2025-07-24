/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // Asegurar que las rutas dinámicas se generen
  generateBuildId: async () => {
    return 'serpentario-build'
  }
}

export default nextConfig
