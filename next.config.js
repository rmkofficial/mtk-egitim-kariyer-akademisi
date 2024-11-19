/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['strapi-project-xi2f.onrender.com'], // Strapi'nin barındırıldığı alan adı
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'strapi-project-xi2f.onrender.com', // Yeni Strapi alan adı
                pathname: '/uploads/**', // Strapi'nin yükleme yolu
            },
        ],
    },
};

module.exports = nextConfig;
