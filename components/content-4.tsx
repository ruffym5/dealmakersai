import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section id="overview" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">Warum professionelle AI-Beratung heute entscheidend ist</h2>
                    <div className="space-y-6">
                        <p> In einer Welt rasanter technologischer Entwicklung hilft Ihnen eine fundierte
                            AI-Beratung, genau die Stellen zu identifizieren, an denen Automatisierung
                            echten Mehrwert schafft – bevor Sie Zeit und Budget in unklare Projekte
                            stecken.</p>
                        <p>
                            <span className="font-bold">Nur mit gezielter Expertise</span> lassen sich
                            typische Herausforderungen wie unzureichende Datenqualität, fehlende
                            Integrationsstrategie oder unklare Erfolgskriterien zuverlässig meistern.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
