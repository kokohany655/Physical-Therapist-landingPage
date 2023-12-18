import AboutMe from '@/components/Home/AboutMe'
import ContactMe from '@/components/Home/Contact'
import Features from '@/components/Home/Features'
import Map from '@/components/Home/Map'
import MyJourney from '@/components/Home/MyJourney'
import SectionHero from '@/components/Home/SectionHero'
import Services from '@/components/Home/Services'

export default function Home() {
  return (
    <div className=' w-full flex flex-col space-y-14 mb-10 px-5 md:p-0'>
      <SectionHero/>
      <Features/>
      <AboutMe/>
      <MyJourney/>
      <Services/>
      <ContactMe/>
      <Map/>
    </div>
  )
}
