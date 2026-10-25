import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SabineBench } from "@/components/sabine";
import { Waveform } from "@/components/waveform";
import { articles } from "@/data/articles";
import { family } from "@/data/family";
import { getTerm, terms } from "@/data/glossary";
import { canonical } from "@/data/site";

const featuredSlugs = [
  "nagalmtijd",
  "speech-transmission-index-sti",
  "geluidsabsorptie",
  "spraakprivacy",
  "luchtgeluid",
  "decibel-d-b",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AkoestiekLab | Kennis over geluid, nagalm en akoestiek" },
      {
        name: "description",
        content:
          "Begrijp nagalm, decibel, spraakprivacy en geluidsisolatie. AkoestiekLab is het kennisplatform van Akoestiek360, gekoppeld aan Akoestiekscan en Geluidzaken.",
      },
    ],
    links: [{ rel: "canonical", href: canonical("/") }],
  }),
  component: Home,
});

function Home() {
  const featured = featuredSlugs.flatMap((slug) => {
    const term = getTerm(slug);
    return term ? [term] : [];
  });

  return (
    <main>
      <section className="bg-navy text-snow">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 pt-14 pb-10 lg:grid-cols-12 lg:pt-20">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">
              Kennisplatform van Akoestiek360
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-balance md:text-6xl">
              Geluid wordt pas helder als je de begrippen kent.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-pretty text-mist">
              AkoestiekLab legt nagalm, isolatie, spraakprivacy en metingen uit. Zodat een rapport, een norm
              of een klacht te volgen is — voordat je een paneel koopt of een wand verzwaart.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/begrippen"
                className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-semibold text-navy"
              >
                Open de begrippen
              </Link>
              <a
                href="#rekenen"
                className="inline-flex min-h-11 items-center rounded-full border border-mist px-5 text-sm font-semibold text-snow"
              >
                Reken een nagalmtijd
              </a>
            </div>
            <form action="/begrippen" method="get" className="mt-8 max-w-lg" role="search">
              <label htmlFor="home-zoek" className="text-sm font-semibold text-mist">
                Zoek een begrip
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="home-zoek"
                  name="q"
                  placeholder="Nagalm, STI, decibel…"
                  className="min-h-11 w-full rounded-full border border-line bg-snow px-4 text-navy"
                />
                <button
                  type="submit"
                  className="inline-flex min-h-11 items-center rounded-full bg-snow px-4 text-sm font-semibold text-navy"
                >
                  Zoek
                </button>
              </div>
            </form>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            <Fact value="60 dB" label="De daling die nagalmtijd definieert, nadat de bron stopt." />
            <Fact value="20–20.000 Hz" label="Het gebied dat een gezond, jong oor ongeveer kan horen." />
            <Fact value="STI 0–1" label="Van onverstaanbaar naar uitstekend. Privacy is het spiegelbeeld." />
          </div>
        </div>
        <Waveform className="h-16 text-accent md:h-20" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="verschil-titel">
        <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">Eerst dit onderscheid</p>
        <h2 id="verschil-titel" className="mt-2 max-w-2xl font-display text-3xl font-semibold text-balance md:text-4xl">
          Absorptie werkt in de ruimte. Isolatie werkt tussen ruimtes.
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="rounded-3xl bg-snow p-6 shadow-sm">
            <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">In de ruimte</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">Nagalm en verstaanbaarheid</h3>
            <p className="mt-3 text-pretty text-muted">
              Harde vlakken kaatsen spraak terug. De nagalmtijd zegt hoe lang dat duurt. Absorptie — een
              eiland, een baffle, een open plafond — haalt energie uit die reflecties. Het gesprek in déze
              kamer wordt helderder. De kamer ernaast hoort het niet vanzelf minder.
            </p>
            <Link to="/kennis/$slug" params={{ slug: "nagalmtijd" }} className="mt-4 inline-flex font-semibold text-accent-ink">
              Lees over nagalmtijd
            </Link>
          </article>
          <article className="rounded-3xl bg-navy p-6 text-snow">
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">Tussen ruimtes</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">Luchtgeluid, contact en omwegen</h3>
            <p className="mt-3 text-pretty text-mist">
              Stemmen door een wand zijn luchtgeluid. Voetstappen door een vloer zijn contactgeluid. En vaak
              loopt geluid flankerend om de scheiding heen. Daar helpen massa, ontkoppeling en kierdichting —
              niet een vilten paneel aan één kant.
            </p>
            <Link to="/kennis/$slug" params={{ slug: "geluidsisolatie" }} className="mt-4 inline-flex font-semibold text-accent">
              Lees over isolatie
            </Link>
          </article>
        </div>
      </section>

      <section id="rekenen" className="mx-auto max-w-6xl px-4 pb-16" aria-labelledby="rekenen-titel">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">Het lab</p>
          <h2 id="rekenen-titel" className="mt-2 font-display text-3xl font-semibold text-balance md:text-4xl">
            Hoe een kamer de nagalm verlengt
          </h2>
          <p className="mt-3 text-pretty text-muted">
            Schuif volume en absorptie. De staart zakt 60 dB in de berekende tijd. Het is de formule van
            Sabine, geen meting — en precies daarom leerzaam.
          </p>
        </div>
        <div className="mt-8">
          <SabineBench />
        </div>
        <p className="mt-4 text-sm">
          <Link to="/lab" className="font-semibold text-accent-ink">
            Meer in het lab: decibel en STI
          </Link>
        </p>
      </section>

      <section className="bg-snow py-16" aria-labelledby="begrippen-titel">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">Woordenlijst</p>
              <h2 id="begrippen-titel" className="mt-2 font-display text-3xl font-semibold text-balance md:text-4xl">
                {terms.length} begrippen, van absorptie tot zwevende vloer
              </h2>
            </div>
            <Link
              to="/begrippen"
              className="inline-flex min-h-11 items-center rounded-full bg-navy px-5 text-sm font-semibold text-snow"
            >
              Alle begrippen
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((term) => (
              <li key={term.slug}>
                <Link
                  to="/begrippen/$slug"
                  params={{ slug: term.slug }}
                  className="flex h-full flex-col rounded-3xl border border-line bg-paper p-5 hover:border-accent-ink"
                >
                  <span className="text-xs font-semibold tracking-wide text-accent-ink uppercase">
                    {term.title}
                  </span>
                  <span className="mt-2 text-sm text-pretty text-navy">{term.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="kennis-titel">
        <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">Verdieping</p>
        <h2 id="kennis-titel" className="mt-2 font-display text-3xl font-semibold text-balance md:text-4xl">
          Vier vragen die bijna elk project stelt
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to="/kennis/$slug"
              params={{ slug: article.slug }}
              className="rounded-3xl bg-snow p-6 shadow-sm hover:shadow-md"
            >
              <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">{article.kicker}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-balance">{article.title}</h3>
              <p className="mt-3 text-sm text-pretty text-muted">{article.description}</p>
              <p className="mt-4 text-sm font-semibold text-navy">{article.minutes} min lezen</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20" aria-labelledby="netwerk-titel">
        <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">Eén familie, vier ingangen</p>
        <h2 id="netwerk-titel" className="mt-2 max-w-2xl font-display text-3xl font-semibold text-balance md:text-4xl">
          Weten, meten of oplossen — elk heeft een eigen site
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {family.map((site) => (
            <li key={site.name} className="rounded-3xl bg-snow p-6 shadow-sm">
              <p className="text-sm font-semibold text-accent-ink">{site.role}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold">{site.name}</h3>
              <p className="mt-2 text-sm text-pretty text-muted">{site.text}</p>
              {site.here ? (
                <p className="mt-4 text-sm font-semibold">Je bent hier</p>
              ) : (
                <a href={site.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy">
                  {site.href.replace("https://", "").replace("/", "")}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <article className="rounded-3xl bg-snow p-4 text-navy">
      <p className="font-display text-2xl font-semibold text-balance">{value}</p>
      <p className="mt-1 text-sm text-pretty text-muted">{label}</p>
    </article>
  );
}
