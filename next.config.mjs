/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
            },
        ],
    },
    output: 'export',
    transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
