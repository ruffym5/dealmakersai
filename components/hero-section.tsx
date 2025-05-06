import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { HeroHeader } from '@/components/hero5-header'

const transitionVariants = {
    item: {
        hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: { type: 'spring', bounce: 0.3, duration: 1.5 },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="relative pt-24 md:pt-36">
                    {/* Hintergrund-Animation */}
                    <AnimatedGroup
                        variants={{
                            container: { visible: { transition: { delayChildren: 1 } } },
                            item: {
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 2 } },
                            },
                        }}
                        className="absolute inset-0 -z-20"
                    >
                        <Image
                            src="https://res.cloudinary.com/dg4jhba5c/image/upload/v1741605538/night-background_ni3vqb.jpg"
                            alt="background"
                            className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                            width={3276}
                            height={4095}
                        />
                    </AnimatedGroup>

                    {/* Bodengrund */}
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />

                    {/* Hero-Text */}
                    <div className="mx-auto max-w-7xl px-6 text-center sm:mx-auto lg:mr-auto">
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                        >
                            AI-Beratung für Ihr Unternehmen
                        </TextEffect>
                        <TextEffect
                            per="line"
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.5}
                            as="p"
                            className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                        >
                            Strategie, Implementierung und Skalierung für nachhaltiges Wachstum
                        </TextEffect>

                        <AnimatedGroup
                            variants={{
                                container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } },
                                ...transitionVariants,
                            }}
                            className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                        >
                            <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                <Button asChild size="lg" className="rounded-xl px-5 text-base">
                                    <Link href="#kontakt">
                                        <span className="whitespace-nowrap">
                                            Jetzt kostenlose Erstberatung anfordern
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        </AnimatedGroup>
                    </div>

                    {/* Video mit Blur-Overlay, zentriert */}
                    <AnimatedGroup
                        variants={{
                            container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } },
                            ...transitionVariants,
                        }}
                    >
                        <div className="relative mt-8 sm:mt-12 md:mt-20 w-full flex justify-center px-2 overflow-hidden">
                            {/* Blur/Verlauf-Overlay */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% to-background"
                            />
                            {/* Video-Container */}
                            <div className="relative inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1 max-w-6xl w-full">
                                <video
                                    className="w-full h-full object-cover aspect-15/8 rounded-2xl"
                                    src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>
                        </div>
                    </AnimatedGroup>
                </section>
            </main>
        </>
    )
}
