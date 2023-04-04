/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
	domains: ['nettmaker.no', 'cdn.sanity.io', 'tailwindui.com'],
  }
}

module.exports = nextConfig
