'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

type ContactSectionProps = {
    initialPlanMessage: string
}

export default function ContactSection({ initialPlanMessage }: ContactSectionProps) {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (textareaRef.current) {
            // hier automatisch Plantext + 2 Zeilenumbrüche
            textareaRef.current.value = initialPlanMessage
                ? `${initialPlanMessage}\n\n`
                : '';
        }
    }, [initialPlanMessage]);


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus('sending')
        const form = new FormData(e.currentTarget)
        const payload = Object.fromEntries(form.entries())

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })

        if (res.ok) setStatus('success')
        else {
            console.error(await res.text())
            setStatus('error')
        }
    }

    return (
        <section id="kontakt" className="py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">
                    Kontakt aufnehmen
                </h1>
                <p className="mt-4 text-center">
                    Wir helfen Ihnen, das passende Paket und Konditionen für Ihr Unternehmen zu finden.
                </p>

                <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
                    <div>
                        <h1 className="text-xl font-semibold">Wir finden die passende Lösung für Sie</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                        <div>
                            <Label htmlFor="vorname">Vorname</Label>
                            <Input name="vorname" id="vorname" type="text" required />
                        </div>
                        <div>
                            <Label htmlFor="nachname">Nachname</Label>
                            <Input name="nachname" id="nachname" type="text" required />
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input name="email" id="email" type="email" required />
                        </div>
                        <div>
                            <Label htmlFor="website">Firmenwebsite</Label>
                            <Input name="website" id="website" type="url" />
                            <span className="text-sm text-muted-foreground">Muss mit "https" beginnen</span>
                        </div>
                        <div>
                            <Label htmlFor="branche">Branche</Label>
                            <Input name="branche" id="branche" type="text" required />
                        </div>
                        <div>
                            <Label htmlFor="msg">Nachricht</Label>
                            <Textarea
                                name="msg"
                                id="msg"
                                rows={4}
                                ref={textareaRef}
                                placeholder="Ihre Nachricht..."
                            />
                        </div>

                        <Button type="submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sende…' : 'Absenden'}
                        </Button>

                        {status === 'success' && (
                            <p className="mt-4 text-green-600">Danke, wir melden uns bald!</p>
                        )}
                        {status === 'error' && (
                            <p className="mt-4 text-red-600">
                                Ups, da ist etwas schiefgelaufen. Bitte versuch’s später noch einmal.
                            </p>
                        )}
                    </form>
                </Card>
            </div>
        </section>
    )
}
