/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: { ignoreBuildErrors: true },
    eslint: { ignoreDuringBuilds: true },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fakestoreapi.com",
            },
        ],
    },
};

export default nextConfig;
