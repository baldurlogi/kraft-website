import { Award, Trophy } from 'lucide-react'

const winnersByYear = [
  {
    year: 2025,
    woman: 'Kristín Þórhallsdóttir',
    womanClub: 'Kraftlyftingafélag Akraness',
    man: 'Guðfinnur Snær Magnússon',
    manClub: 'Breiðablik',
  },
  {
    year: 2024,
    woman: 'Sóley Margrét Jónsdóttir',
    womanClub: 'Breiðablik',
    man: 'Alexander Örn Kárason',
    manClub: 'Breiðablik',
  },
  {
    year: 2023,
    woman: 'Sóley Margrét Jónsdóttir',
    man: 'Alexander Örn Kárason',
  },
  {
    year: 2022,
    woman: 'Kristín Þórhallsdóttir',
    man: 'Guðfinnur Snær Magnússon',
  },
  {
    year: 2021,
    woman: 'Kristín Þórhallsdóttir',
    man: 'Viktor Samúelsson',
  },
  {
    year: 2020,
    woman: 'Sóley Margrét Jónsdóttir',
    man: 'Júlían J. K. Jóhannsson',
  },
  {
    year: 2019,
    woman: 'Sóley Margrét Jónsdóttir',
    man: 'Júlían J. K. Jóhannsson',
  },
  {
    year: 2018,
    woman: 'Hulda B Waage',
    man: 'Júlían J. K. Jóhannsson',
  },
  {
    year: 2017,
    woman: 'Fanney Hauksdóttir',
    man: 'Júlían J. K. Jóhannsson',
  },
  {
    year: 2016,
    woman: 'Fanney Hauksdóttir',
    man: 'Júlían J. K. Jóhannsson',
  },
  {
    year: 2015,
    woman: 'Fanney Hauksdóttir',
    man: 'Viktor Samúelsson',
  },
  {
    year: 2014,
    woman: 'Ragnheiður Kr Sigurðardóttir',
    man: 'Júlían J.K. Jóhannsson',
  },
  {
    year: 2013,
    woman: 'Fanney Hauksdóttir',
    man: 'Auðunn Jónsson',
  },
  {
    year: 2012,
    woman: 'María Guðsteinsdóttir',
    man: 'Auðunn Jónsson',
  },
  {
    year: 2011,
    woman: 'María Guðsteinsdóttir',
    man: 'Fannar Gauti Dagbjartsson',
  },
  {
    year: 2010,
    woman: 'María Guðsteinsdóttir',
    man: 'Auðunn Jónsson',
  },
]

function WinnerCard({
  label,
  name,
  club,
}: {
  label: string
  name: string
  club?: string
}) {
  return (
    <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f5ef] px-4 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold leading-7 text-slate-950">
        {name}
      </p>
      {club ? (
        <p className="mt-2 text-sm leading-6 text-slate-600">{club}</p>
      ) : null}
    </div>
  )
}

export function LiftersOfTheYearPage() {
  const latestYear = winnersByYear[0]

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(214,61,42,0.14),transparent_65%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d63d2a]">
            Saga KRAFT
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Kraftlyftingafólk ársins
          </h1>
          <p className="mt-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
            Í lok keppnistímabils eru valin kraftlyftingakarl og kraftlyftingakona
            ársins samkvæmt reglugerð um val á kraftlyftingafólki ársins.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
          <section className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_22px_80px_-52px_rgba(15,23,42,0.45)] sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-[#f8f5ef] text-[#d63d2a]">
                <Trophy className="size-5" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-950">
                Val undanfarinna ára
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {winnersByYear.map((entry) => (
                <article
                  key={entry.year}
                  className="rounded-[1.75rem] border border-black/6 bg-[#f8f5ef] p-5 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {entry.year}
                    </h3>
                    {entry.year === latestYear.year ? (
                      <span className="rounded-full border border-[#d63d2a]/15 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#b73724]">
                        Nýjasta val
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <WinnerCard
                      label="Kraftlyftingakona ársins"
                      name={entry.woman}
                      club={entry.womanClub}
                    />
                    <WinnerCard
                      label="Kraftlyftingakarl ársins"
                      name={entry.man}
                      club={entry.manClub}
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="space-y-6">
            <section className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_22px_80px_-52px_rgba(15,23,42,0.35)] sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-[#f8f5ef] text-[#d63d2a]">
                  <Award className="size-5" />
                </div>
                <h2 className="text-xl font-semibold text-slate-950">
                  Nýjasta val
                </h2>
              </div>

              <div className="mt-5 space-y-3">
                <WinnerCard
                  label="Kona ársins 2025"
                  name={latestYear.woman}
                  club={latestYear.womanClub}
                />
                <WinnerCard
                  label="Karl ársins 2025"
                  name={latestYear.man}
                  club={latestYear.manClub}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
