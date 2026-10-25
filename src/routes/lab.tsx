import { createFileRoute, Link } from "@tanstack/react-router";
import { DecibelScale, StiMeter } from "@/components/meters";
import { SabineBench } from "@/components/sabine";
import { canonical } from "@/data/site";

export const Route = createFileRoute("/lab")({
  head: () => ({
    meta: [
      { title: "Lab — nagalm, decibel en STI rekenen | AkoestiekLab" },
      {
        name: "description",
        content:
          "Reken een nagalmtijd met Sabine, vergelijk decibelniveaus en lees een STI-score. Interactieve uitleg van AkoestiekLab, zonder meetrapport.",
      },
    ],
    links: [{ rel: "canonical", href: canonical("/lab") }],
  }),
  component: LabPage,
});

function LabPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">Lab</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold text-balance md:text-5xl">
        Drie instrumenten om een getal te voelen
      </h1>
      <p className="mt-4 max-w-2xl text-pretty text-muted">
        Niets hiervan vervangt een meting. Het maakt wel zichtbaar wat een formule doet, hoe hard 70 dB is
        ten opzichte van 60, en wanneer een STI-score een gesprek draagt of laat vallen.
      </p>

      <section className="mt-12" aria-labelledby="sabine-lab">
        <h2 id="sabine-lab" className="font-display text-3xl font-semibold">
          Nagalmtijd volgens Sabine
        </h2>
        <p className="mt-3 max-w-2xl text-pretty text-muted">
          T = 0,161 · V / A. V is het volume, A de totale absorptie in vierkante meter sabin. Kies een
          voorbeeld of schuif zelf. Daarna kun je de staart horen.
        </p>
        <div className="mt-6">
          <SabineBench />
        </div>
      </section>

      <section className="mt-16" aria-labelledby="db-lab">
        <h2 id="db-lab" className="font-display text-3xl font-semibold">
          Decibel is geen liniaal
        </h2>
        <p className="mt-3 max-w-2xl text-pretty text-muted">
          De schaal is logaritmisch. Een sprong van 10 dB is groot voor het oor, ook al staat er maar een
          klein getal bij. De voorbeelden zijn ordes van grootte, geen normwaarden.
        </p>
        <div className="mt-6">
          <DecibelScale />
        </div>
        <p className="mt-4 text-sm">
          <Link to="/begrippen/$slug" params={{ slug: "decibel-d-b" }} className="font-semibold text-accent-ink">
            Begrip: decibel
          </Link>
        </p>
      </section>

      <section className="mt-16" aria-labelledby="sti-lab">
        <h2 id="sti-lab" className="font-display text-3xl font-semibold">
          STI, van onverstaanbaar tot uitstekend
        </h2>
        <p className="mt-3 max-w-2xl text-pretty text-muted">
          De Speech Transmission Index loopt van 0 tot 1. De banden hieronder volgen de gebruikelijke
          kwaliteitsindeling. Privacy is vaak het omgekeerde: je wilt de score bij de buurman laag.
        </p>
        <div className="mt-6">
          <StiMeter />
        </div>
        <p className="mt-4 text-sm">
          <Link
            to="/begrippen/$slug"
            params={{ slug: "speech-transmission-index-sti" }}
            className="font-semibold text-accent-ink"
          >
            Begrip: STI
          </Link>
        </p>
      </section>
    </main>
  );
}
