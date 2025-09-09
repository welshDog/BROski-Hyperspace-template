/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@dyslexia-first/ui-components'],
    experimental: {
        esmExternals: 'loose'
    }
}

module.exports = nextConfig