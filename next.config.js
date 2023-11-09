/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        esmExternals: 'loose',
      },
    experimental: {
        appDir: true
    }
}

module.exports = nextConfig
