import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Search,
} from 'lucide-react'

import { Button } from './ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

const navItems = [
  { label: 'Um KRAFT', href: '/um-kraft', expandable: true },
  { label: 'Mót', href: '/mot', expandable: true },
  { label: 'Fræðsla', href: '/fraedsla', expandable: true },
  { label: 'Afreksmál', href: '/afreksmal', expandable: true },
]

function BrandLogo({ mobile = false }: { mobile?: boolean }) {
  return (
    <img
      src="/kraft-logo.png"
      alt="Merki Kraftlyftingasambands Íslands"
      className={mobile ? 'h-11 w-auto shrink-0' : 'h-10 w-auto shrink-0 sm:h-12'}
    />
  )
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 sm:gap-3 sm:px-6 lg:px-8">
        <a
          href="/"
          className="group flex min-w-0 flex-1 items-center gap-2 rounded-full pr-2 transition-transform duration-200 hover:-translate-y-0.5 sm:gap-3 xl:flex-none"
          aria-label="Fara á forsíðu Kraftlyftingasambands Íslands"
        >
          <BrandLogo />

          <div className="min-w-0">
            <p className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-[#d63d2a] min-[440px]:block sm:text-[0.65rem] sm:tracking-[0.32em]">
              Iceland Powerlifting
            </p>
            <span className="brand-title block text-balance text-[clamp(0.95rem,2vw,1.9rem)] font-semibold leading-[1.05] text-slate-950 sm:leading-tight">
              Kraftlyftingasamband Íslands
            </span>
          </div>
        </a>

        <nav
          className="ml-6 hidden items-center gap-1 xl:flex"
          aria-label="Aðalvalmynd"
        >
          {navItems.map((item) => (
            <Button
              key={item.label}
              asChild
              variant="ghost"
              className="h-11 rounded-full px-4 text-[0.98rem] font-medium text-slate-700"
            >
              <a href={item.href}>
                {item.label}
                {item.expandable ? (
                  <ChevronDown className="size-4 opacity-70" />
                ) : null}
              </a>
            </Button>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 xl:flex">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-700"
            aria-label="Leita"
          >
            <Search className="size-5" />
          </Button>

          <Button asChild size="lg" className="pl-5 pr-4">
            <a href="/styrkja-kraft">
              Styrkja KRAFT
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-700"
            aria-label="Leita"
          >
            <Search className="size-5" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-slate-200 bg-white/85"
                aria-label="Opna valmynd"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="max-w-[24rem]">
              <SheetHeader className="pr-12">
                <div className="flex items-center gap-3">
                  <BrandLogo mobile />

                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#d63d2a]">
                      Kraft
                    </p>
                    <SheetTitle>Kraftlyftingasamband Íslands</SheetTitle>
                  </div>
                </div>

                <SheetDescription>
                  Nútímaleg og einföld leið inn á helstu síður sambandsins.
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-2" aria-label="Farsímavalmynd">
                {navItems.map((item) => (
                  <SheetClose key={item.label} asChild>
                    <a
                      href={item.href}
                      className="flex items-center justify-between rounded-2xl border border-transparent bg-white/70 px-4 py-3.5 text-base font-medium text-slate-900 transition-colors hover:border-slate-200 hover:bg-white"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="size-4 text-slate-500" />
                    </a>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto space-y-3 pt-4">
                <SheetClose asChild>
                  <Button asChild className="h-12 w-full justify-between rounded-2xl">
                    <a href="/styrkja-kraft">
                      Styrkja KRAFT
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </SheetClose>

                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 w-full justify-between rounded-2xl"
                  >
                    <a href="/">Fara á forsíðu</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
