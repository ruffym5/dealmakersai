// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    // Basis-URL anpassen, falls Sie eine Umgebungsvariable verwenden
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://deal-makers.ai';

    // Liste Ihrer statischen Routen
    const routes = [
        '',           // Startseite
        'kontakt',    // Kontaktseite
        // Weitere Seiten hier eintragen...
    ];

    return routes.map((path) => ({
        url: `${baseUrl}/${path}`,
        lastModified: new Date(),
    }));
}
