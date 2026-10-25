import { createFileRoute, Link } from "@tanstack/react-router";
import { contact } from "@/data/family";
import { canonical } from "@/data/site";

export const Route = createFileRoute("/over")({
  head: () => ({
    meta: [
      { title: "Over AkoestiekLab — kennis van Akoestiek360" },
      {
        name: "description",
        content:
          "AkoestiekLab is de kennisbank van Akoestiek360 in Sappemeer. Uitleg over geluid, zonder verkoopdruk. Metingen lopen via Akoestiekscan en Geluidzaken.",
      },
    ],
    links: [{ rel: "canonical", href: canonical("/over") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">Over</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-balance md:text-5xl">
        Een lab voor begrip, geen catalogus
      </h1>
      <div className="mt-6 grid gap-4 text-lg text-pretty leading-relaxed">
        <p>
          AkoestiekLab is de kennislaag van Akoestiek360. Hier staan de begrippen die in rapporten, normen
          en gesprekken terugkomen: nagalmtijd, decibel, STI, flankerend geluid, absorptieklasse. Dezelfde
          lijn als op akoestiek360.nl, hier als leesbare woordenlijst.
        </p>
        <p>
          Het lab rekent en vergelijkt, maar meet niet. Een Sabine-berekening laat zien hoe volume en
          absorptie samenhangen. Een echte nagalm, een echte Dn,w of een installatiegeluid hoort bij een
          meting op locatie. Die doe je via{" "}
          <a className="font-semibold text-accent-ink" href="https://akoestiekscan.nl/">
            Akoestiekscan
          </a>{" "}
          als het om een kantoor of projectruimte gaat, en via{" "}
          <a className="font-semibold text-accent-ink" href="https://geluidzaken.nl/">
            Geluidzaken
          </a>{" "}
          als het om bouwakoestiek, horeca of de omgeving gaat.
        </p>
        <p>
          Advies en oplossingen blijven bij{" "}
          <a className="font-semibold text-accent-ink" href="https://akoestiek360.nl/">
            Akoestiek360
          </a>
          . Onafhankelijk: je mag een advies zelf uitvoeren of met je eigen leverancier. Het lab verkoopt
          geen panelen.
        </p>
      </div>
      <dl className="mt-10 grid gap-4 rounded-3xl bg-snow p-6 sm:grid-cols-2">
        <div>
          <dt className="text-sm font-semibold text-muted">Vestiging</dt>
          <dd className="mt-1">
            {contact.street}
            <br />
            {contact.postal}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-muted">Contact</dt>
          <dd className="mt-1">
            <a href={contact.phoneHref} className="font-semibold">
              {contact.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${contact.email}`} className="font-semibold">
              {contact.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-muted">KvK</dt>
          <dd className="mt-1">{contact.kvk}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-muted">Verder lezen</dt>
          <dd className="mt-1">
            <Link to="/begrippen" className="font-semibold text-accent-ink">
              Alle begrippen
            </Link>
          </dd>
        </div>
      </dl>
    </main>
  );
}
