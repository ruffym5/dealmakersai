// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    const { vorname, nachname, email, website, branche, msg } =
        await request.json()

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,       // z.B. smtp.strato.de
        port: Number(process.env.SMTP_PORT), // 465
        secure: true,                       // TLS on connect
        auth: {
            user: process.env.SMTP_USER,      // hello@deal-makers.ai
            pass: process.env.SMTP_PASS,
        },
    })

    // 1) Mail an euch selbst
    await transporter.sendMail({
        from: `"Kontaktformular" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,          // hello@deal-makers.ai
        subject: '🆕 Neue Kontaktanfrage von der Website',
        text: `
Vorname: ${vorname}
Nachname: ${nachname}
E-Mail: ${email}
Website: ${website}
Branche: ${branche}

Nachricht:
${msg}
    `,
    })

    // 2) Bestätigungsmail an den Besucher
    await transporter.sendMail({
        from: `"deal-makers.ai" <${process.env.SMTP_USER}>`,
        to: email,                          // die eingetragene Adresse
        subject: 'Danke für deine Anfrage bei deal-makers.ai',
        text: `
Hallo ${vorname},

vielen Dank für deine Nachricht! Wir haben deine Anfrage erhalten und melden uns so schnell wie möglich bei dir.

Details:
• Name: ${vorname} ${nachname}
• E-Mail: ${email}
• Webseite: ${website}
• Branche: ${branche}

Deine Nachricht:
${msg}

Beste Grüße
deal-makers.ai-Team
    `,
    })

    return NextResponse.json({ success: true })
}
