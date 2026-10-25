import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { contact, family } from "@/data/family";
import { canonical } from "@/data/site";

const routes = [
  {
    question: "Ik wil weten wat een term betekent",
    answer: "Blijf op AkoestiekLab. De woordenlijst en de kennisstukken zijn daarvoor gemaakt.",
    href: "/begrippen",
    external: false,
    label: "Naar de begrippen",
  },
  {
    question: "Een kantoor, zaal of belcel klinkt niet",
    answer:
      "Nagalm, verstaanbaarheid en spraakprivacy meet je op locatie met de scan van Akoestiek360.",
    href: "https://akoestiekscan.nl/",
    external: true,
    label: "Akoestiekscan",
  },
  {
    question: "Geluid tussen woningen, horeca of een installatie",
    answer:
      "Luchtgeluid, contactgeluid, gevels en de Omgevingswet horen bij Geluidzaken. Onafhankelijk gemeten.",
    href: "https://geluidzaken.nl/",
    external: true,
    label: "Geluidzaken",
  },
  {
    question: "Ik zoek advies of een oplossing",
    answer: "Akoestiek360 denkt mee over de maatregel. Je blijft vrij in wie het uitvoert.",
    href: "https://akoestiek360.nl/",
    external: true,
    label: "Akoestiek360",
  },
];

export const Route = createFileRoute("/netwerk")({
  head: () => ({
    meta: [
      { title: "Netwerk — Akoestiek360, scan, lab en Geluidzaken" },
      {
        name: "description",
        content:
          "Hoe AkoestiekLab, Akoestiek360, Akoestiekscan en Geluidzaken samenhangen. Welke site je gebruikt voor kennis, een kantoormeting of bouwakoestiek.",
      },
    ],
    links: [{ rel: "canonical", href: canonical("/netwerk") }],
  }),
  component: NetworkPage,
});

function NetworkPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">Netwerk</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold text-balance md:text-5xl">
        Vier sites, één akoestisch huis in Sappemeer
      </h1>
      <p className="mt-4 max-w-2xl text-pretty text-muted">
        AkoestiekLab legt uit. De andere drie doen het werk in de ruimte, in het gebouw of in het advies.
        Zo hoeft een kennisbank geen offerte te zijn, en een meetrapport geen woordenboek.
      </p>

      <ol className="mt-10 grid gap-4">
        {routes.map((item, index) => (
          <li key={item.question} className="grid gap-3 rounded-3xl bg-snow p-6 shadow-sm md:grid-cols-[4rem_1fr_auto] md:items-center">
            <span className="font-display text-3xl font-semibold text-accent-ink tabular-nums">0{index + 1}</span>
            <span>
              <span className="block font-display text-2xl font-semibold text-balance">{item.question}</span>
              <span className="mt-1 block text-pretty text-muted">{item.answer}</span>
            </span>
            {item.external ? (
              <a href={item.href} className="inline-flex min-h-11 items-center gap-1 font-semibold">
                {item.label}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            ) : (
              <a href={item.href} className="inline-flex min-h-11 items-center font-semibold text-accent-ink">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>

      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {family.map((site) => (
          <li key={site.name} className="rounded-3xl border border-line p-6">
            <h2 className="font-display text-2xl font-semibold">{site.name}</h2>
            <p className="mt-1 text-sm font-semibold text-accent-ink">{site.role}</p>
            <p className="mt-3 text-pretty text-muted">{site.text}</p>
            {site.here ? (
              <p className="mt-4 text-sm font-semibold">Deze website</p>
            ) : (
              <a href={site.href} className="mt-4 inline-flex text-sm font-semibold">
                {site.href.replace("https://", "")}
              </a>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted">
        Bereikbaar via {contact.street}, {contact.postal}.{" "}
        <a className="font-semibold text-navy" href={contact.phoneHref}>
          {contact.phoneDisplay}
        </a>{" "}
        ·{" "}
        <a className="font-semibold text-navy" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </p>
    </main>
  );
}
