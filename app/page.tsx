// app/page.tsx
'use client'

import { useState } from 'react'
import HeroSection from '@/components/hero-section'
import ContentSection from '@/components/content-4'
import Features from '@/components/features-4'
import Pricing from '@/components/pricing'
import TeamSection from '@/components/team'
import ContactSection from '@/components/contact'
import FooterSection from '@/components/footer'


export default function Page() {
  // State für den ausgewählten Plan
  const [selectedPlan, setSelectedPlan] = useState<string>('')

  return (
    <div>
      <HeroSection />
      <ContentSection />
      <Features />

      {/* hier geben wir die Callback-Funktion weiter */}
      <Pricing onSelectPlan={setSelectedPlan} />

      <TeamSection />

      {/* hier übergeben wir den aktuellen Wert an das Textarea */}
      <ContactSection initialPlanMessage={selectedPlan} />

      <FooterSection />
    </div>
  )
}
