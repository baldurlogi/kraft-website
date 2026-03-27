import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  ScanText,
} from 'lucide-react'

const footerSections = [
  {
    title: 'Um KRAFT',
    baseHref: '/um-kraft',
    links: [
      'Saga KRAFT',
      'Heiðursviðurkenningar',
      'Kraftlyftingafólk ársins',
      'Iðorð',
      'Lög',
      'Reglugerðir o.fl.',
      'Stjórn',
      'Fundargerðir',
      'Úrskurðir',
      'Nefndir',
      'Kraftlyftingaþing',
      'Þinggerðir',
      'Ársskýrslur',
      'Félög',
      'Fréttir',
    ],
  },
  {
    title: 'Mót',
    baseHref: '/mot',
    links: [
      'Mótaskrá',
      'Handbók mótshaldara',
      'Dómaralisti',
      'Skráning dómara',
      'Úrslit',
      'Met',
      'Skráning á mót',
    ],
  },
  {
    title: 'Fræðsla',
    baseHref: '/fraedsla',
    links: [
      'Um kraftlyftingar',
      'Lyfjamál',
      'Adel',
      'Lyfjaeftirlit Íslands',
      'Lyftareglurnar',
      'Þjálfaranám',
      'Dómarapróf',
      'Stangarvarsla',
      'Styrkja KRAFT',
      'Kraftlyftingafólk ársins 2025',
    ],
  },
  {
    title: 'Afreksmál',
    baseHref: '/afreksmal',
    links: ['Árangur á stórmótum'],
  },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kraftlyftingasamband_island',
    image: '/instagram.png',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/user/krafticeland',
    image: '/Youtube_logo.png',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/KRAFTIS/',
    image: '/facebook_logo.png',
  },
  {
    label: 'Flickr',
    href: 'https://www.flickr.com/photos/kraft2010/',
    image: '/flickr_logo.png',
  },
]

const contactItems = [
  {
    label: 'Heimilisfang',
    value: 'Engjavegi 6, 104 Reykjavik',
    href: 'https://maps.google.com/?q=Engjavegi+6+104+Reykjavik',
    icon: MapPin,
  },
  {
    label: 'Skrifstofa',
    value: 'kraft@kraft.is',
    href: 'mailto:kraft@kraft.is',
    icon: Mail,
  },
  {
    label: 'Vefstjóri',
    value: 'webmaster@kraft.is',
    href: 'mailto:webmaster@kraft.is',
    icon: Mail,
  },
  {
    label: 'Kennitala',
    value: '700410-2180',
    icon: ScanText,
  },
]

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replaceAll('á', 'a')
    .replaceAll('é', 'e')
    .replaceAll('í', 'i')
    .replaceAll('ó', 'o')
    .replaceAll('ú', 'u')
    .replaceAll('ý', 'y')
    .replaceAll('ö', 'o')
    .replaceAll('æ', 'ae')
    .replaceAll('þ', 'th')
    .replaceAll('ð', 'd')
    .replaceAll('.', '')
    .replaceAll('/', '')
    .replaceAll(' ', '-')
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/8 bg-[linear-gradient(180deg,#2c2a2a_0%,#171515_100%)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.75fr)]">
          <div className="space-y-8">
            <a
              href="/"
              className="inline-flex max-w-md items-center gap-4 rounded-[2rem] border border-white/10 bg-white/6 px-4 py-4 transition-colors hover:bg-white/10"
            >
              <img
                src="/kraft-logo.png"
                alt="Merki Kraftlyftingasambands Íslands"
                className="h-14 w-auto shrink-0 sm:h-16"
              />

              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#ff7354]">
                  Iceland Powerlifting
                </p>
                <p className="brand-title text-pretty text-xl font-semibold leading-tight sm:text-2xl">
                  Kraftlyftingasamband Íslands
                </p>
              </div>
            </a>

            <p className="max-w-xl text-sm leading-7 text-white/68 sm:text-[0.95rem]">
              Landsamband kraftlyftinga á Íslandi með áherslu á mótahald,
              fræðslu, afreksstarf og sterkt samfélag innan íþróttarinnar.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex h-full gap-3 rounded-3xl border border-white/10 bg-white/6 p-4 transition-colors hover:bg-white/10">
                    <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-[#ff7354]">
                      <Icon className="size-4" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
                        {item.label}
                      </p>
                      <p className="mt-1 break-words text-sm text-white/82">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )

                if (!item.href) {
                  return <div key={item.label}>{content}</div>
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {content}
                  </a>
                )
              })}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold uppercase tracking-[0.14em] text-white sm:text-xl">
                  {section.title}
                </h2>

                <ul className="mt-5 space-y-3">
                  {section.links.map((label) => (
                    <li key={label}>
                      <a
                        href={`${section.baseHref}/${toSlug(label)}`}
                        className="group inline-flex items-start gap-2 text-sm leading-6 text-white/72 transition-colors hover:text-white sm:text-[0.96rem]"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#ff7354] opacity-0 transition-opacity group-hover:opacity-100" />
                        <span>{label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {socialLinks.map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/6 px-5 py-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/0">
                    <img
                      src={item.image}
                      alt={`${item.label} logo`}
                      className="max-h-10 w-auto max-w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-base font-semibold text-white">
                      {item.label}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-sm text-white/55 transition-colors group-hover:text-white/72">
                      Skoða miðil
                      <ArrowUpRight className="size-3.5" />
                    </p>
                  </div>
                </a>
              )
            })}
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Kraftlyftingasamband Íslands</p>

            <a
              href="#top"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/6 px-4 py-2.5 text-white/78 transition-colors hover:bg-white/10 hover:text-white"
            >
              Aftur efst
              <ArrowUp className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
