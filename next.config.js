/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            }
        ],
    },
};

const { i18n } = require('./i18n/next-i18next.config');

module.exports = {
  i18n,
};

module.exports = nextConfig
