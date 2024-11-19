/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'], // Localhost'tan resimlere izin ver
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337', // Strapi'nin çalıştığı port
                pathname: '/uploads/**', // Strapi'nin yükleme yolu
            },
        ],
    },
};

module.exports = nextConfig;
