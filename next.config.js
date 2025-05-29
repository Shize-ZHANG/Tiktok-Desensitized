/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.fullstack.edu.vn',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Tiktok-Desensitized' : '',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Tiktok-Desensitized/' : '',
  distDir: 'out',
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/404': { page: '/404' },
      '/_error': { page: '/_error' },
    }
  },
}

module.exports = nextConfig
