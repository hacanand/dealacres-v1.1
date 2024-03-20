/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.canva.com'],
        remotePatterns: [
            {
                'protocol': "https",
                'hostname': 'dealacres.com'
            }
        ]
    }
}

module.exports = nextConfig
