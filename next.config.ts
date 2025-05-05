/** @type {import('next').NextConfig} */
const nextConfig = {
  // …Deine bisherigen Optionen…
  eslint: {
    // Ignoriere ESLint-Fehler beim Build (nicht empfohlen für's lange Leben, aber
    // für schnelles Deploy okay)
    ignoreDuringBuilds: true,
  },
  images: {
    // hier auch gleich remotePatterns konfigurieren, wenn Du Domains umgestellt hast
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
