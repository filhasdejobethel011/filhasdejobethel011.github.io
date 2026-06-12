'use client'

import { MinimalistHero } from '@/components/ui/minimalist-hero'

export default function Home() {
  return (
    <MinimalistHero
      logoText="Filhas de Jó"
      navLinks={[
        { label: 'História',   href: '/historia' },
        { label: 'Past HQ',    href: '/antigos-mc' },
        { label: 'Fotos',      href: '/fotos' },
        { label: 'Eventos',    href: '/eventos' },
        { label: 'Tesouraria', href: '/login' },
      ]}
      mainText=""
      readMoreLink="#"
      imageSrc="/mika.png"
      imageAlt="Filhas de Jó"
      logoSrc="/logofdj.png"
      overlayText={{ part1: 'Filhas', part2: 'de Jó' }}
      instagramHandle="@bethel11go"
      socialLinks={[]}
      locationText="Betel Nº 011 — Caldas Novas/GO"
      className="w-full h-full"
    />
  )
}
