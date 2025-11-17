import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Programme Immobilier - Résidence Les Jardins',
  description: 'Découvrez notre programme de 37 appartements',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

