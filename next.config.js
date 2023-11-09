/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    experimental: {
        esmExternals: 'loose',
        appDir: true
      }
}

module.exports = nextConfig
