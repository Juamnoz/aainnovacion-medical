import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { VideoScrollSection } from '@/components/sections/VideoScrollSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { AudienceSection } from '@/components/sections/AudienceSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VideoScrollSection />
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)' }} />
        <AboutSection />
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)' }} />
        <ProductsSection />
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)' }} />
        <AudienceSection />
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)' }} />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
