import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Praveen Singh | Full Stack Developer',
    short_name: 'Praveen Singh',
    description: 'Portfolio of Praveen Singh, a Full Stack Developer specializing in React, Next.js, and NestJS.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a1a',
    theme_color: '#64ffda',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
