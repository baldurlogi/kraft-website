import { AboutPage } from './components/about-page'
import { AchievementsPage } from './components/achievements-page'
import { DonationPage } from './components/donation-page'
import { Footer } from './components/footer'
import { HomepageAffiliations } from './components/homepage-affiliations'
import { HonorsPage } from './components/honors-page'
import { LiftersOfTheYearPage } from './components/lifters-of-the-year-page'
import { Navbar } from './components/navbar'

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const isAboutPage = pathname === '/um-kraft'
  const isHonorsPage = pathname === '/um-kraft/heidursvidurkenningar'
  const isLiftersOfTheYearPage =
    pathname === '/kraftlyftingafolk_arsins' ||
    pathname === '/um-kraft/kraftlyftingafolk_arsins'
  const isDonationPage = pathname === '/styrkja-kraft'
  const isAchievementsPage = pathname === '/afreksmal'

  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#f8f5ef_0%,#f3efe7_100%)] text-slate-950"
    >
      <Navbar />
      <main className="flex-1">
        {isLiftersOfTheYearPage ? (
          <LiftersOfTheYearPage />
        ) : isHonorsPage ? (
          <HonorsPage />
        ) : isAboutPage ? (
          <AboutPage />
        ) : isDonationPage ? (
          <DonationPage />
        ) : isAchievementsPage ? (
          <AchievementsPage />
        ) : (
          <HomepageAffiliations />
        )}
      </main>
      <Footer />
    </div>
  )
}
