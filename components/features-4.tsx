import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export default function Features() {
    return (
        <section id="solution" className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Unser Beratungsansatz</h2>
                    <p className="mt-4">Pragmatisch starten, intelligent wachsen und nachhaltig profitieren</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />

                            <h3 className="text-sm font-medium">Potenzialanalyse
                            </h3>
                        </div>
                        <p className="text-sm">Aufnahme Ihrer Ziele, Systeme und Datenqualität</p>
                        <p className="text-sm">Identifikation von Quick Wins und langfristigen Hebeln</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />

                            <h3 className="text-sm font-medium">Strategieentwicklung</h3>
                        </div>
                        <p className="text-sm">KI-Use-Cases für Vertrieb, Marketing & Service</p>
                        <p className="text-sm">Roadmap mit Priorisierung nach Aufwand und Impact</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />

                            <h3 className="text-sm font-medium">Technische Umsetzung</h3>
                        </div>
                        <p className="text-sm">Auswahl und Integration passender AI-Tools</p>
                        <p className="text-sm">API-Anbindung an CRM-/Marketing-Systeme</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />

                            <h3 className="text-sm font-medium">Change Management & Schulung</h3>
                        </div>
                        <p className="text-sm">Training für Ihr Team: von Grundlagen bis Advanced AI-Strategien</p>
                        <p className="text-sm">Dokumentation und Playbooks für den operativen Einsatz</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />

                            <h3 className="text-sm font-medium">Kontinuierliche Optimierung</h3>
                        </div>
                        <p className="text-sm">Monitoring-Dashboards für Transparenz</p>
                        <p className="text-sm">Regelmäßige Reviews & Anpassungen</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Skalierung & laufender Support</h3>
                        </div>
                        <p className="text-sm">Ausweitung erfolgreicher KI-Use-Cases auf weitere Abteilungen und Märkte</p>
                        <p className="text-sm">Wartung, Updates und Performance-Monitoring</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
