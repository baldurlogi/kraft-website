import { useState } from 'react'
import {
  ArrowUpRight,
  FileText,
  Mail,
  Phone,
  ScrollText,
  Target,
  Trophy,
  Users,
} from 'lucide-react'

import { Button } from './ui/button'

const strategyDocuments = [
  {
    title: '3. afreksstefna Kraftlyftingasambands Íslands 2025-2033',
    fileName: 'KRAFT_AFKREKSSTEFNA 25-33',
  },
  {
    title: '2. afreksstefna Kraftlyftingasambands Íslands 2017-2025',
    fileName: 'KRAFT_AFKREKSSTEFNA17-25',
  },
  {
    title: '1. afreksstefna Kraftlyftingasambands Íslands 2012-2015',
    fileName: 'afreksstefna_12-15',
  },
]

const staffContacts = [
  {
    title: 'Íþróttastjóri',
    name: 'Auðunn Jónsson',
    email: 'coach@kraft.is',
    phone: '897 8017',
    icon: Target,
  },
  {
    title: 'Yfirþjálfari Master keppenda',
    name: 'Kristleifur Andrésson',
    email: 'kristleifur@kraft.is',
    icon: Trophy,
  },
  {
    title: 'Landsliðsnefnd',
    name: 'Formaður: Róbert Kjaran',
    email: 'coach@kraft.is',
    note: 'Öll erindi til landsliðsnefndar skulu berast með skriflegum hætti.',
    icon: Users,
  },
]

const operationalDocuments = [
  'Verklagsreglur við val í landslið',
  'Landsliðssamningur 2026 með fylgiskjölum',
  'Samningur við þjálfara 2023',
  'Ferðareglur KRAFT',
]

const standardsSections = [
  {
    title: 'Landsliðslágmörk 2025 og 2026',
    description:
      'Notast er við meðaltal úrslita úr hverjum flokki síðastliðin 3 ár.',
    items: ['LÁGMÖRK 2025-2026'],
  },
  {
    title: 'Landsliðslágmörk öldunga 2025 og 2026',
    description: 'Viðmið fyrir keppni í öldungaflokkum.',
    items: [
      'LÁGMÖRK kvennaflokkur 2025-2026',
      'LÁGMÖRK karlaflokkur 2025-2026',
    ],
  },
]

const quickLinks = [
  {
    title: 'Kraftlyftingafólk ársins',
    description: 'Yfirlit yfir þau sem hafa skarað fram úr á árinu.',
  },
  {
    title: 'Styrkleikalisti',
    description: 'Núverandi styrkleikaröðun og samanburður milli keppenda.',
    value: 'results.kraft.is/rankings',
  },
  {
    title: 'Samantekt 2010-2020',
    description: 'Samansafn yfir eldri afrek og þátttöku á alþjóðamótum.',
  },
]

const achievementYears = [
  {
    year: 2022,
    events: [
      'Reykjavik International Games',
      'EM öldunga í klassískum kraftlyftingum',
      'EM í kraftlyftingum',
      'HM unglinga í bekkpressu',
      'HM unglinga í klassískri bekkpressu',
      'HM í klassískum kraftlyftingum',
      'EM öldunga í kraftlyftingum',
      'IWGA World Games',
      'EM í klassískri bekkpressu',
      'EM unglinga í klassískri bekkpressu',
      'EM unglinga í bekkpressu',
      'HM unglinga í klassískum kraftlyftingum',
      'Vestur-Evrópumótið í klassískum kraftlyftingum',
      'Vestur-Evrópumótið í kraftlyftingum',
      'NM unglinga í klassískum kraftlyftingum',
      'NM unglinga í klassískri bekkpressu',
      'HM öldunga í klassískum kraftlyftingum',
      'HM í kraftlyftingum',
      'EM í klassískum kraftlyftingum',
      'EM unglinga í klassískum kraftlyftingum',
    ],
  },
  {
    year: 2020,
    events: [
      'Reykjavik International Games',
      'EM öldunga í klassískum kraftlyftingum',
    ],
  },
  {
    year: 2019,
    events: [
      'Reykjavik International Games',
      'EM í kraftlyftingum, allir aldursflokkar',
      'HM öldunga í bekkpressu',
      'HM í klassískri bekkpressu, allir aldursflokkar',
      'HM í klassískum kraftlyftingum, allir aldursflokkar',
      'EM öldunga í kraftlyftingum',
      'EM í klassískri bekkpressu, allir aldurshópar',
      'HM unglinga í kraftlyftingum',
      'Vestur-Evrópumótið í kraftlyftingum',
      'Vestur-Evrópumótið í klassískum kraftlyftingum',
      'Norðurlandamót unglinga í klassískum kraftlyftingum',
      'Norðurlandamót unglinga í klassískri bekkpressu',
      'HM öldunga í kraftlyftingum',
      'HM í kraftlyftingum',
      'EM í klassískum kraftlyftingum',
    ],
  },
  {
    year: 2018,
    events: [
      'Reykjavik International Games',
      'Arnold Sport Festival',
      'EM öldunga í klassískum kraftlyftingum',
      'EM í kraftlyftingum allir aldursflokkar',
      'HM í klassískum kraftlyftingum allir aldursflokkar',
      'EM í klassískri bekkpressu',
      'HM unglinga í kraftlyftingum',
      'Vestur-Evrópu móti í klassískum kraftlyftingum',
      'Vestur-Evrópu móti í kraftlyftingum',
      'Norðurlandamót unglinga í klassískum kraftlyftingum',
      'Norðurlandamót unglinga í kraftlyftingum',
      'Norðurlandamót unglinga í klassískri bekkpressu',
      'Norðurlandamót unglinga í bekkpressu',
      'Arnold Classic Open',
      'HM öldunga í kraftlyftingum',
      'HM í kraftlyftingum',
      'EM unglinga í klassískum kraftlyftingum',
    ],
  },
  {
    year: 2017,
    events: [
      'Reykjavik International Games',
      'SlingShot Pro Deadlift',
      'EM í klassískum kraftlyftingum allir aldursflokkar',
      'HM unglinga í klassískri bekkpressu',
      'EM í kraftlyftingum',
      'EM unglinga í kraftlyftingum',
      'HM í bekkpressu',
      'HM í klassískum kraftlyftingum allir aldursflokkar',
      'IWGA World Games',
      'EM í klassískri bekkpressu',
      'NM unglinga í kraftlyftingum',
      'NM unglinga í klassískum kraftlyftingum',
      'NM unglinga í bekkpressu',
      'NM unglinga í klassískri bekkpressu',
      'Arnold Classic Europe',
      'EM í bekkpressu',
      'HM í kraftlyftingum',
      'European classic cup',
    ],
  },
  {
    year: 2016,
    events: [
      'Reykjavik International Games',
      'Norðurlandamót unglinga í kraftlyftingum',
      'Norðurlandamót unglinga í klassískum kraftlyftingum',
      'EM í klassískum kraftlyftingum',
      'EM unglinga í kraftlyftingum',
      'HM í bekkpressu',
      'HM unglinga í bekkpressu',
      'EM í kraftlyftingum',
      'HM í klassískri bekkpressu',
      'HM í klassískum kraftlyftingum öllum aldursflokkum',
      'EM í bekkpressu',
      'EM unglinga í bekkpressu',
      'HM unglinga í kraftlyftingum',
      'HM í opnum flokki',
    ],
  },
  {
    year: 2015,
    events: [
      'Norðurlandamót unglinga í kraftlyftingum',
      'Norðurlandamót unglinga í klassískum kraftlyftingum',
      'EM unglinga',
      'EM í opnum flokki',
      'HM unglinga í bekkpressu',
      'HM í klassískum kraftlyftingum',
      'EM í bekkpressu',
      'HM unglinga',
      'HM í opnum flokki',
    ],
  },
  {
    year: 2014,
    events: [
      'Norðurlandamót unglinga',
      'EM unglinga',
      'EM',
      'HM í bekkpressu',
      'HM unglinga í bekkpressu',
      'HM í klassískum kraftlyftingum',
      'Norðurlandamót',
      'Norðurlandamót í bekkpressu',
      'HM unglinga í kraftlyftingum',
      'HM í kraftlyftingum',
    ],
  },
  {
    year: 2013,
    events: [
      'Norðurlandamót unglinga',
      'EM unglinga',
      'EM',
      'HM í bekkpressu',
      'HM unglinga í bekkpressu',
      'HM í klassískum kraftlyftingum',
      'EM í bekkpressu',
      'HM unglinga í kraftlyftingum',
      'HM',
    ],
  },
  {
    year: 2012,
    events: [
      'Norðurlandamót unglinga',
      'EM',
      'EM unglinga',
      'EM öldunga',
      'Norðurlandamót í bekkpressu',
      'HM unglinga',
      'HM',
    ],
  },
] as const

function ResourceCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_22px_80px_-52px_rgba(15,23,42,0.45)] sm:p-7">
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-[#f8f5ef] text-[#d63d2a]">
          <Icon className="size-5" />
        </div>
        <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  )
}

export function AchievementsPage() {
  const [selectedYear, setSelectedYear] = useState<number>(achievementYears[0].year)
  const activeYear =
    achievementYears.find((year) => year.year === selectedYear) ??
    achievementYears[0]

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(214,61,42,0.14),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d63d2a]">
            Afrek og landslið
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Afreksmál
          </h1>
          <p className="mt-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
            Stefna - Teymið - Lykilupplýsingar - Viðmið - Árangur á
            alþjóðamótum
          </p>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <ResourceCard icon={FileText} title="Afreksstefna">
            <div className="space-y-3">
              {strategyDocuments.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-black/6 bg-[#f8f5ef] px-4 py-4"
                >
                  <p className="text-sm font-medium leading-6 text-slate-900 sm:text-[0.96rem]">
                    {item.title}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[#d63d2a]">
                    {item.fileName}
                    <ArrowUpRight className="size-4" />
                  </p>
                </div>
              ))}
            </div>
          </ResourceCard>

          <ResourceCard icon={Users} title="Teymið">
            <div className="space-y-4">
              {staffContacts.map((person) => {
                const Icon = person.icon

                return (
                  <div
                    key={person.title}
                    className="rounded-[1.5rem] border border-black/6 bg-[#f8f5ef] px-4 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#d63d2a]">
                        <Icon className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {person.title}
                        </p>
                        <p className="mt-2 text-base font-semibold text-slate-950">
                          {person.name}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
                          <span className="inline-flex items-center gap-2">
                            <Mail className="size-4 text-[#d63d2a]" />
                            {person.email}
                          </span>
                          {person.phone ? (
                            <span className="inline-flex items-center gap-2">
                              <Phone className="size-4 text-[#d63d2a]" />
                              {person.phone}
                            </span>
                          ) : null}
                        </div>
                        {person.note ? (
                          <p className="mt-3 text-sm leading-6 text-slate-600">
                            {person.note}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </ResourceCard>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.8fr)]">
          <ResourceCard icon={ScrollText} title="Gögn og reglur">
            <div className="grid gap-3 sm:grid-cols-2">
              {operationalDocuments.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-black/6 bg-[#f8f5ef] px-4 py-4"
                >
                  <p className="text-sm font-medium leading-6 text-slate-900">
                    {item}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Tengill kemur síðar
                  </p>
                </div>
              ))}
            </div>
          </ResourceCard>

          <ResourceCard icon={Target} title="Landsliðslágmörk">
            <div className="space-y-4">
              {standardsSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-[1.5rem] border border-black/6 bg-[#f8f5ef] px-4 py-4"
                >
                  <h3 className="text-base font-semibold text-slate-950">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {section.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#d63d2a]/15 bg-white px-3 py-1.5 text-sm font-medium text-[#b73724]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResourceCard>

          <ResourceCard icon={Trophy} title="Flýtileiðir">
            <div className="space-y-3">
              {quickLinks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-black/6 bg-[#f8f5ef] px-4 py-4"
                >
                  <h3 className="text-base font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                  {item.value ? (
                    <p className="mt-3 break-all text-sm font-medium text-[#d63d2a]">
                      {item.value}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </ResourceCard>
        </div>

        <div className="mt-14 rounded-[2.25rem] border border-black/6 bg-[#1f1d1d] p-6 text-white shadow-[0_28px_100px_-56px_rgba(15,23,42,0.9)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ff7354]">
                Alþjóðamót
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
                Árangur eftir árum
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
              Árgangarnir eru birtir í einu sjónsviði í stað þess að láta
              notandann skrolla í gegnum endalausan tenglalista. Veldu ár og fáðu
              yfirsýn strax.
            </p>
          </div>

          <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
            {achievementYears.map((year) => (
              <Button
                key={year.year}
                type="button"
                variant={year.year === activeYear.year ? 'default' : 'outline'}
                onClick={() => setSelectedYear(year.year)}
                className={
                  year.year === activeYear.year
                    ? 'shrink-0 rounded-full'
                    : 'shrink-0 rounded-full border-white/12 bg-white/6 text-white hover:bg-white/10 hover:text-white'
                }
              >
                {year.year}
              </Button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(16rem,0.38fr)_minmax(0,1fr)]">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/42">
                Valið ár
              </p>
              <h3 className="mt-3 text-4xl font-semibold">{activeYear.year}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Skráð mót á þessu ári: {activeYear.events.length}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/68">
                Þegar við bætum við raunverulegum tenglum getur þessi sami
                strúktúr orðið að öflugri niðurstöðusíðu án þess að breyta
                upplifuninni.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
              <div className="grid gap-3 md:grid-cols-2">
                {activeYear.events.map((event, index) => (
                  <div
                    key={`${activeYear.year}-${event}`}
                    className="rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4 transition-colors hover:bg-white/10"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff7354]">
                          Mót {index + 1}
                        </p>
                        <p className="mt-2 text-[1rem] font-medium leading-7 text-white">
                          {event}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                        {activeYear.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
