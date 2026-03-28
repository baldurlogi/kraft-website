import type { ComponentType, ReactNode } from 'react'
import {
  Building2,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ScrollText,
  ShieldCheck,
  Users,
} from 'lucide-react'

const staffMembers = [
  {
    name: 'Lára Bogey Finnbogadóttir',
    role: 'Skrifstofa KRAFT',
    email: 'lara@kraft.is',
    phone: '868 5332',
    note: 'Fastur skrifstofutími á þriðjudögum kl. 10-15.',
  },
  {
    name: 'Auðunn Jónsson',
    role: 'Íþróttastjóri',
    email: 'coach@kraft.is',
  },
]

const missionItems = [
  'Að hafa yfirstjórn og yfirumsjón allra íslenskra kraftlyftingamála.',
  'Að vinna að eflingu kraftlyftinga á landinu, þar með talið afreksíþrótta, hæfileikamótunar yngri íþróttamanna og almenningsíþrótta.',
  'Að vera í forsvari fyrir kraftlyftingar innan vébanda ÍSÍ.',
  'Að setja íslenskum kraftlyftingum nauðsynleg lög og reglur og sjá til þess að þeim sé fylgt.',
  'Að löggilda dómara, þjálfa menn til dómarastarfa og veita þeim réttindi.',
  'Að standa fyrir og úthluta kraftlyftingamótum hvort heldur um er að ræða innlend mót eða erlend, skrá og staðfesta met sem sett eru í samræmi við reglur sambandsins og varðveita úrslit móta.',
  'Að standa vörð um uppeldislegt gildi kraftlyftinga á Íslandi og vinna að framgangi heiðarlegrar keppni í kraftlyftingum.',
  'Að velja einstaklinga í landslið og að tefla fram landsliði og keppendum í alþjóðlegri keppni.',
  'Að koma fram erlendis fyrir hönd kraftlyftinga á Íslandi og sjá um að reglur varðandi kraftlyftingar séu í samræmi við alþjóðareglur.',
  'Að starfa í samræmi við siðareglur, berjast gegn misnotkun lyfja, hagræðingu úrslita í íþróttum og stuðla að því að ekki viðgangist ógnandi hegðun innan vébanda kraftlyftingaíþróttarinnar.',
  'Að vinna að öðrum þeim málum sem varða kraftlyftingar og framþróun þeirra á Íslandi.',
]

const aboutStructure = [
  {
    title: 'Saga KRAFT',
    children: ['Heiðursviðurkenningar', 'Kraftlyftingafólk ársins', 'Iðorð'],
  },
  { title: 'Lög' },
  { title: 'Reglugerðir o.fl.' },
  { title: 'Stjórn', children: ['Fundargerðir', 'Úrskurðir'] },
  { title: 'Nefndir' },
  { title: 'Kraftlyftingaþing', children: ['Þinggerðir', 'Ársskýrslur'] },
  { title: 'Félög' },
  { title: 'Fréttir' },
]

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: ComponentType<{ className?: string }>
  title: string
  children: ReactNode
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

export function AboutPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(214,61,42,0.14),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d63d2a]">
            Um sambandið
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Um KRAFT
          </h1>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <InfoCard icon={Building2} title="Skrifstofa KRAFT">
            <div className="space-y-4 text-slate-600">
              <p className="text-base leading-8">
                Skrifstofa KRAFT er á 4. hæð í húsi 4 í íþróttamiðstöð ÍSÍ í
                Laugardal.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f5ef] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Starfsmaður
                  </p>
                  <p className="mt-2 text-base font-semibold text-slate-950">
                    Lára Bogey Finnbogadóttir
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm">
                    <Mail className="size-4 text-[#d63d2a]" />
                    lara@kraft.is
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm">
                    <Phone className="size-4 text-[#d63d2a]" />
                    868 5332
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f5ef] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Viðvera
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-950">
                    Fastur skrifstofutími á þriðjudögum kl. 10-15.
                  </p>
                </div>
              </div>
            </div>
          </InfoCard>

          <InfoCard icon={Landmark} title="Upplýsingar KRAFT">
            <div className="space-y-4 text-slate-600">
              <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f5ef] px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Heimilisfang
                </p>
                <p className="mt-2 inline-flex items-start gap-2 text-base leading-7 text-slate-950">
                  <MapPin className="mt-1 size-4 shrink-0 text-[#d63d2a]" />
                  Kraftlyftingasamband Íslands, Engjavegi 6, 104 Reykjavík,
                  Ísland
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f5ef] px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Samskipti og banki
                </p>
                <div className="mt-2 space-y-2 text-base leading-7 text-slate-950">
                  <p>kraft@kraft.is</p>
                  <p>kt. 700410-2180</p>
                  <p>Banki: Íslandsbanki Akranesi, Dalbraut 1, 300 Akranes</p>
                  <p>Rknr. 552-26-007004</p>
                  <p>IBAN: IS020552260070047004102180</p>
                  <p>SWIFT: GLITISRE</p>
                </div>
              </div>
            </div>
          </InfoCard>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <InfoCard icon={Users} title="Starfsmenn KRAFT">
            <div className="grid gap-4 sm:grid-cols-2">
              {staffMembers.map((member) => (
                <div
                  key={member.name}
                  className="rounded-[1.5rem] border border-black/6 bg-[#f8f5ef] px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {member.role}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    {member.name}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-600">
                    <Mail className="size-4 text-[#d63d2a]" />
                    {member.email}
                  </p>
                  {member.phone ? (
                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-600">
                      <Phone className="size-4 text-[#d63d2a]" />
                      {member.phone}
                    </p>
                  ) : null}
                  {member.note ? (
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {member.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </InfoCard>

          <InfoCard icon={ScrollText} title="Hlutverk KRAFT">
            <h3 className="text-pretty text-2xl font-semibold leading-tight text-slate-950">
              Kraftlyftingasamband Íslands / KRAFT er æðsti aðili kraftlyftinga á
              Íslandi og hefur það í meginatriðum eftirfarandi hlutverk.
            </h3>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-slate-600 sm:text-[0.96rem]">
              {missionItems.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 w-5 shrink-0 font-semibold text-[#d63d2a]">
                    {String.fromCharCode(97 + index)}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </InfoCard>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <InfoCard icon={ShieldCheck} title="Sjálfstæði og jafnræði">
            <div className="space-y-4 text-base leading-8 text-slate-600">
              <p>
                KRAFT starfar sjálfstætt og er hlutlaust hvað varðar stjórnmál og
                trúarbrögð. KRAFT skal gæta jafnréttis og jafnréðis, og skulu
                allir vera jafnir fyrir lögum, reglugerðum og ákvörðunum KRAFT
                og nefnda á vegum sambandsins.
              </p>
              <p>
                Aðilar skulu njóta fullra réttinda án tillits til kynferðis,
                kynhneigðar, trúarbragða, skoðana, þjóðernis, kynþáttar,
                litarháttar, efnahags, ætternis og stöðu að öðru leyti.
              </p>
              <div className="h-px bg-black/10" />
              <p>
                KRAFT er sérsamband innan Íþrótta- og Ólympíusambands Íslands og
                á aðild að NPF, EPF og IPF.
              </p>
            </div>
          </InfoCard>

          <InfoCard icon={Users} title="Yfirlit Um KRAFT">
            <p className="text-sm leading-7 text-slate-600 sm:text-[0.96rem]">
              Hér er efnisyfirlit sem fylgir núverandi Um KRAFT flokkun í
              valmyndinni, en birt í skýrari og nútímalegri framsetningu.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {aboutStructure.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-black/6 bg-[#f8f5ef] px-4 py-4"
                >
                  <p className="text-base font-semibold text-slate-950">
                    {item.title}
                  </p>
                  {item.children ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.children.map((child) => (
                        <span
                          key={child}
                          className="rounded-full border border-[#d63d2a]/15 bg-white px-3 py-1.5 text-sm font-medium text-[#b73724]"
                        >
                          {child}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-sm font-medium text-slate-500">
                      Undirsíða / efnisflokkur
                    </p>
                  )}
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </div>
    </section>
  )
}
