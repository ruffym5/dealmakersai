import Link from 'next/link'

const members = [
    {
        name: 'Timur Sereflioglu',
        role: 'Co-Founder',
        avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQHJa3lz6Ythbw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689861690712?e=1747872000&v=beta&t=eL4dCD3UibpJZjpNVVWnnZwygqaKWTN5e6g9ts7lUdc',
        link: '#',
    },
    {
        name: 'Florian Weippert',
        role: 'Co-Founder',
        avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHQsyzhHg9eKQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726340609798?e=1747872000&v=beta&t=HjZ_p7ooJlbUnccKOSoHR1mj_sSRdImu2_Zj5y91ebY',
        link: '#',
    },
    {
        name: 'Onur Özcelik',
        role: 'Co-Founder',
        avatar: 'https://profile-images.xing.com/images/731d2a8a3fc5e02f4525469881d8b010-1/onur-%C3%B6zcelik.256x256.jpg?0.0452948131912867',
        link: '#',
    },
]

export default function TeamSection() {
    return (
        <section id="team" className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950"></span>
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl">Founder Team</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>Unser Team vereint Erfahrung, strategisches Denken und technologische Expertise, um Unternehmen mit modernster KI-Lösung zu unterstützen. Mit einem klaren Fokus auf Effizienz und Skalierbarkeit entwickeln wir smarte Automatisierungen, die nachhaltige Ergebnisse liefern.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <img className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src={member.avatar} alt="team member" width="826" height="1239" />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>

                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
