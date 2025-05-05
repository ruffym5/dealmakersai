import Image from 'next/image'     // oder einfach: import React from 'react'
import logoSrc from '@/public/logo.svg' // nur wenn du den SVG-Loader in Next aktiv hast
import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        // Variante A: mit next/image
        <Image
            src="/logo.svg"
            alt="Logo"
            width={50}               // gewünschte Breite
            height={50}              // Höhe im Verhältnis zum Original-viewBox
            className={cn('object-contain', className)}
        />

        // Variante B: ganz einfach <img>
        // <img
        //   src="/logo.svg"
        //   alt="Logo"
        //   className={cn('w-32 h-auto', className)}
        // />
    )
}

export default Logo
