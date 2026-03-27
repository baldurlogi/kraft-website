import { AchievementsPage } from './components/achievements-page'
import { DonationPage } from './components/donation-page'
import { Footer } from './components/footer'
import { HomepageAffiliations } from './components/homepage-affiliations'
import { Navbar } from './components/navbar'

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const isDonationPage = pathname === '/styrkja-kraft'
  const isAchievementsPage = pathname === '/afreksmal'

  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#f8f5ef_0%,#f3efe7_100%)] text-slate-950"
    >
      <Navbar />
      <main className="flex-1">
        {isDonationPage ? (
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
