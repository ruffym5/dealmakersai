'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Check } from 'lucide-react'

type PricingProps = {
    onSelectPlan: (plan: string) => void
}

export default function Pricing({ onSelectPlan }: PricingProps) {
    return (
        <section id="pricing" className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-4xl font-semibold lg:text-5xl">
                        Flexible AI-Beratungs-Pakete für optimales Wachstum
                    </h1>
                    <p>
                        Optimieren Sie Ihre Prozesse mit modernster KI-Technologie für nachhaltige Skalierbarkeit und höhere Abschlussraten.
                    </p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    {/* Explorer */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Explorer</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">0€</span>
                            <CardDescription className="text-sm">Kostenlos, 1 Monat Demo</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />
                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Basic Analyse & AI-Einblicke',
                                    'Automatisierte Lead-Generierung (limitiert)',
                                    'Email & Chat Support',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <Link href="#kontakt" passHref>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => onSelectPlan('Interesse an Explorer')}
                                >
                                    <span>Demo testen</span>
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Optimizer */}
                    <Card className="relative flex flex-col">
                        <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                            Sales Boost
                        </span>
                        <CardHeader>
                            <CardTitle className="font-medium">Optimizer</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">2500€</span>
                            <CardDescription className="text-sm">AI-Sales-Boost</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />
                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Alle Features aus Explorer',
                                    'KI-gestützte CRM-Optimierung',
                                    'Automatische Follow-Up Sequenzen',
                                    'KI-generierter Sales-Report',
                                    'Standard Security Features',
                                    'Voice Agent',
                                    'Dynamische Priorisierung von Leads',
                                    'Automatisierte Multi-Channel-Strategien',
                                    'API-Anbindung für CRM-Systeme like HubSpot',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Link href="#kontakt" passHref>
                                <Button
                                    asChild
                                    className="w-full"
                                    onClick={() => onSelectPlan('Interesse an Optimizer')}
                                >
                                    <span>Sales Boost starten</span>
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Autopilot */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Autopilot</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">5000€</span>
                            <CardDescription className="text-sm">High-End AI-Sales-Paket</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />
                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Alle Features aus Optimizer',
                                    'Vollautomatische Outbound-Kampagnen mit AI',
                                    'Autonomer Voice Agent für Lead-Qualifizierung',
                                    'Automatisiertes Sales-Coaching für Teams',
                                    'Compliance-Features für internationale Märkte',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <Link href="#kontakt" passHref>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => onSelectPlan('Interesse an Autopilot')}
                                >
                                    <span>Vollautomatisieren</span>
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}
