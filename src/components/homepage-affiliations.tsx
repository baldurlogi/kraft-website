const memberOfItems = [
  {
    name: 'ÍSÍ',
    subtitle: 'KRAFT er hluti af',
    image: '/isi_logo.png',
  },
  {
    name: 'IPF',
    subtitle: 'International Powerlifting Federation',
    image: '/ipf_logo.jpg',
  },
  {
    name: 'EPF',
    subtitle: 'European Powerlifting Federation',
    image: '/epf_logo.png',
  },
  {
    name: 'NPF',
    subtitle: 'Nordic Powerlifting Federation',
    image: '/npf_logo.gif',
  },
]

const partnerItems = [
  {
    name: 'Atlas Endurhæfing',
    subtitle: 'Samstarfsaðili',
    image: '/atlas.png',
  },
]

const policyItems = [
  {
    name: 'Kynferðisleg áreitni og ofbeldi',
    subtitle: 'Viðmið og vernd innan íþróttastarfs',
    image: '/sexual_assault_iamge.png',
  },
  {
    name: 'Samskiptaráðgjafi íþrótta- og æskulýðsstarfs',
    subtitle: 'Stuðningur og ráðgjöf',
    image: '/sports_youthwork_image.png',
  },
  {
    name: 'Viðbragðsáætlun',
    subtitle: 'Ferli og viðbrögð',
    image: '/contingency_plan_image.png',
  },
]

type LogoCardProps = {
  image: string
  name: string
  subtitle: string
  imageClassName?: string
}

function LogoCard({
  image,
  name,
  subtitle,
  imageClassName = 'h-20 sm:h-24 lg:h-28',
}: LogoCardProps) {
  return (
    <article className="group rounded-[2rem] border border-black/6 bg-white px-6 py-7 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-42px_rgba(15,23,42,0.5)]">
      <div className="flex min-h-[7rem] items-center justify-center">
        <img
          src={image}
          alt={name}
          className={`w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03] ${imageClassName}`}
        />
      </div>

      <div className="mt-5 text-center">
        <h3 className="text-lg font-semibold text-slate-950">{name}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{subtitle}</p>
      </div>
    </article>
  )
}

export function HomepageAffiliations() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(214,61,42,0.12),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d63d2a]">
            Tengingar og ábyrgð
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            KRAFT í alþjóðlegu samhengi, samstarfi og faglegu umhverfi
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg">
            Hér birtast þau sambönd, samstarfsaðilar og verkferlar sem móta
            starf KRAFT og undirstrika fagmennsku, öryggi og ábyrgð.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          <section>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#d63d2a]">
                  Aðild
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
                  KRAFT er hluti af
                </h3>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-right sm:text-base">
                Samstarf og aðild að innlendum og alþjóðlegum samböndum styrkir
                stöðu íslenskra kraftlyftinga.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {memberOfItems.map((item) => (
                <LogoCard
                  key={item.name}
                  image={item.image}
                  name={item.name}
                  subtitle={item.subtitle}
                />
              ))}
            </div>
          </section>

          <section>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#d63d2a]">
                  Samstarf
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
                  Samstarfsaðilar
                </h3>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-right sm:text-base">
                Faglegt bakland og stuðningur sem hjálpar sambandinu og
                iðkendum að vaxa.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {partnerItems.map((item) => (
                <LogoCard
                  key={item.name}
                  image={item.image}
                  name={item.name}
                  subtitle={item.subtitle}
                  imageClassName="h-24 sm:h-28 lg:h-32"
                />
              ))}
            </div>
          </section>

          <section>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#d63d2a]">
                  Öryggi og verklag
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
                  Reglur, viðbrögð og skyldur sem þarf að fylgja
                </h3>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-right sm:text-base">
                Skýr umgjörð um samskipti, vernd og viðbragðsferla innan
                íþróttastarfsins.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {policyItems.map((item) => (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_20px_60px_-45px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex min-h-[16rem] items-center justify-center bg-[#f7f4ef] p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-auto max-h-56 w-full max-w-[22rem] object-contain"
                    />
                  </div>

                  <div className="border-t border-black/6 px-6 py-5">
                    <h4 className="text-lg font-semibold text-slate-950">
                      {item.name}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.subtitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
