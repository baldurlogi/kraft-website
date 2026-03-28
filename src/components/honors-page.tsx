import { Award, ScrollText, Star } from 'lucide-react'

const recognitionGroups = [
  {
    title: 'Gullmerki KRAFT',
    accent: 'from-[#f4c95d] to-[#d6a52b]',
    people: [
      'Skúli Óskarsson (2016)',
      'Helgi Hauksson (2017)',
      'María Elísabet Guðsteinsdóttir (2020)',
      'Sóley Margrét Jónsdóttir og Júlían J. K. Jóhannsson (2025)',
    ],
  },
  {
    title: 'Heiðursmerki KRAFT',
    accent: 'from-slate-300 to-slate-500',
    people: ['Auðunn Jónsson (2025)'],
  },
]

export function HonorsPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(214,61,42,0.14),transparent_65%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d63d2a]">
            Saga KRAFT
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Heiðursviðurkenningar
          </h1>
          <p className="mt-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
            Stjórn Kraftlyftingasambands Íslands getur veitt aðilum viðurkenningu
            fyrir störf í þágu kraftlyftingahreyfingarinnar samkvæmt reglugerð
            um heiðursviðurkenningar.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#d63d2a]/15 bg-white px-4 py-2 text-sm font-medium text-[#b73724]">
            <ScrollText className="size-4" />
            Reglugerð um heiðursviðurkenningar
            <span className="text-slate-400">tengill kemur síðar</span>
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <div className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_22px_80px_-52px_rgba(15,23,42,0.45)] sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-[#f8f5ef] text-[#d63d2a]">
                <Award className="size-5" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-950">
                Heiðurviðurkenningar KRAFT
              </h2>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {recognitionGroups.map((group) => (
                <section
                  key={group.title}
                  className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-[#f8f5ef]"
                >
                  <div
                    className={`bg-gradient-to-r ${group.accent} px-5 py-4 text-slate-950`}
                  >
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>
                  <ol className="space-y-3 px-5 py-5 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
                    {group.people.map((person, index) => (
                      <li key={person} className="flex gap-3">
                        <span className="w-5 shrink-0 font-semibold text-[#b73724]">
                          {index + 1}.
                        </span>
                        <span>{person}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <section className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_22px_80px_-52px_rgba(15,23,42,0.35)] sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-[#f8f5ef] text-[#d63d2a]">
                  <Star className="size-5" />
                </div>
                <h2 className="text-xl font-semibold text-slate-950">
                  Heiðursformaður
                </h2>
              </div>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Sigurjón Pétursson var kjörinn heiðursformaður
                Kraftlyftingasambands Íslands á 10. þingi sambandsins
                29. febrúar 2020.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
