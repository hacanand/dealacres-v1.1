/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                'protocol': "https",
                'hostname': 'dealacres.com'
            }
        ]
    }
}

module.exports = nextConfig
