import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    // ⚠️ Permite build mesmo com erros de TypeScript
    ignoreBuildErrors: true,
  },
  eslint: {
    // ⚠️ Ignora erros de ESLint durante o build
    ignoreDuringBuilds: true,
  }
}

export default nextConfig