import { Footer } from './components/footer'
import { HomepageAffiliations } from './components/homepage-affiliations'
import { Navbar } from './components/navbar'

export default function App() {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#f8f5ef_0%,#f3efe7_100%)] text-slate-950"
    >
      <Navbar />
      <main className="flex-1">
        <HomepageAffiliations />
      </main>
      <Footer />
    </div>
  )
}
