import { ArrowUpRight, Mail } from 'lucide-react'

import { Button } from './ui/button'

const donationFacts = [
  { label: 'Styrktarreikningur', value: '0552-14-001254' },
  { label: 'Kennitala', value: '700410-2180' },
  { label: 'IBAN', value: 'IS360552140012547004102180' },
]

const donationSteps = [
  'Þú millifærir upphæð að eigin vali, að lágmarki 10.000 kr., og sendir kvittun á kraft@kraft.is.',
  'Kraftlyftingasambandið sendir kvittun til baka á greiðanda þar sem fram kemur nafn og kennitala greiðanda ásamt upphæð styrks.',
  'Kraftlyftingasambandið sendir upplýsingar um styrki til Skattsins svo skattafslátturinn geti skilað sér til þín.',
]

export function DonationPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(214,61,42,0.14),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)]">
          <div className="rounded-[2rem] border border-black/6 bg-white px-6 py-8 shadow-[0_22px_80px_-52px_rgba(15,23,42,0.5)] sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d63d2a]">
              Frjáls framlög
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Styrkja KRAFT
            </h1>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              Þú getur lagt sambandinu lið með frjálsum framlögum.
              Kraftlyftingasamband Íslands þakkar kærlega öllum sem leggja
              sambandinu lið.
            </p>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-black/6 bg-[#f8f5ef] p-5">
                <h2 className="text-lg font-semibold text-slate-950">
                  Frádráttarbærir styrkir til almannaheillafélaga
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Með lögum sem samþykkt voru þann 1. nóvember 2021 geta
                  einstaklingar og fyrirtæki fengið endurgreiðslu frá skatti ef
                  þau styrkja almannaheillafélög.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Sjá opinberan lista þar sem finna má Kraftlyftingasamband
                  Íslands:
                  {' '}
                  <a
                    href="https://www.skatturinn.is/atvinnurekstur/skattskylda/almannaheillaskra-skradir-logadilar/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#d63d2a] underline underline-offset-4"
                  >
                    Almannaheillafélög
                  </a>
                  .
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/6 bg-[#f8f5ef] p-5">
                <h2 className="text-lg font-semibold text-slate-950">
                  Hámarks- og lágmarksfjárhæðir
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  <strong>Einstaklingar:</strong>
                  {' '}
                  Til þess að einstaklingur fái frádrátt þurfa gjafir eða
                  framlög hans á árinu að vera að lágmarki 10.000 kr. Hámarks
                  frádráttur er 350.000 kr.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Upphæð skattafrádráttar er mismunandi eftir skattþrepi og er
                  ekki millifæranleg hjá hjónum eða sambúðarfólki.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  <strong>Fyrirtæki:</strong>
                  {' '}
                  Fyrirtækjum er heimilt að draga frá skattstofni allt að 1,5%
                  af rekstrartekjum.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-black/6 bg-[#f8f5ef] p-5">
              <h2 className="text-lg font-semibold text-slate-950">
                Áritun á framtal
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Móttakendur gjafa og framlaga, sem skráðir eru á
                almannaheillaskrá, þurfa að gefa út kvittun fyrir móttöku þar
                sem meðal annars kemur fram nafn og kennitala gefanda og fjárhæð
                framlags.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Að ári loknu þarf móttakandi að skila upplýsingum um móttekin
                framlög ársins til Skattsins og á grundvelli þeirra gagnaskila
                verður frádráttur áritaður á framtöl gefenda.
              </p>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-black/6 bg-[#1f1d1d] p-6 text-white">
              <h2 className="text-xl font-semibold">Hvernig á að styrkja</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 sm:text-[0.96rem]">
                {donationSteps.map((step) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[#ff7354]" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-7 text-white/68">
                Til þess að geta nýtt heimildina þarf greiðsla að hafa borist
                fyrir 30. desember ár hvert.
              </p>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-[2rem] border border-black/6 bg-[#1f1d1d] p-6 text-white shadow-[0_22px_80px_-52px_rgba(15,23,42,0.7)] sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff7354]">
                Greiðsluupplýsingar
              </p>
              <div className="mt-6 space-y-4">
                {donationFacts.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/10 bg-white/6 px-4 py-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                      {item.label}
                    </p>
                    <p className="mt-2 break-words text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/6 px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                  Kvittun sendist á
                </p>
                <a
                  href="mailto:kraft@kraft.is"
                  className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-white underline underline-offset-4"
                >
                  <Mail className="size-5 text-[#ff7354]" />
                  kraft@kraft.is
                </a>
              </div>

              <div className="mt-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full justify-between rounded-2xl"
                >
                  <a href="mailto:kraft@kraft.is?subject=Styrkja%20KRAFT">
                    Senda kvittun
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_22px_80px_-52px_rgba(15,23,42,0.35)] sm:p-7">
              <h2 className="text-lg font-semibold text-slate-950">
                Mikilvægt að hafa í huga
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Framlag þarf að vera að lágmarki 10.000 kr.</li>
                <li>
                  Nafn og kennitala greiðanda þurfa að koma fram á kvittun.
                </li>
                <li>
                  Kvittun þarf að berast sambandinu svo hægt sé að skrá framlagið
                  rétt.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
