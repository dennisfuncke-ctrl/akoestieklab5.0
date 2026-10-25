import { createFileRoute, Link } from "@tanstack/react-router";
import { articles } from "@/data/articles";
import { canonical } from "@/data/site";

export const Route = createFileRoute("/kennis/")({
  head: () => ({
    meta: [
      { title: "Kennis over akoestiek — AkoestiekLab" },
      {
        name: "description",
        content:
          "Uitleg over nagalmtijd, spraakprivacy, geluidsisolatie en de normen ISO 16283 en NEN 5077. Van AkoestiekLab, onderdeel van Akoestiek360.",
      },
    ],
    links: [{ rel: "canonical", href: canonical("/kennis") }],
  }),
  component: KnowledgePage,
});

function KnowledgePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">Kennis</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold text-balance md:text-5xl">
        De vier vragen achter bijna elk akoestisch probleem
      </h1>
      <p className="mt-4 max-w-2xl text-pretty text-muted">
        Korte stukken om een rapport te kunnen lezen. De begrippen erin linken door naar de woordenlijst.
        Meten doe je via{" "}
        <a className="font-semibold text-accent-ink" href="https://akoestiekscan.nl/">
          Akoestiekscan
        </a>{" "}
        of{" "}
        <a className="font-semibold text-accent-ink" href="https://geluidzaken.nl/">
          Geluidzaken
        </a>
        , afhankelijk van de vraag.
      </p>
      <ul className="mt-10 grid gap-4">
        {articles.map((article, index) => (
          <li key={article.slug}>
            <Link
              to="/kennis/$slug"
              params={{ slug: article.slug }}
              className="grid gap-4 rounded-3xl bg-snow p-6 shadow-sm md:grid-cols-[4rem_1fr] md:p-8"
            >
              <span className="font-display text-3xl font-semibold text-accent-ink tabular-nums">
                0{index + 1}
              </span>
              <span>
                <span className="text-sm font-semibold tracking-wide text-accent-ink uppercase">
                  {article.kicker}
                </span>
                <span className="mt-1 block font-display text-3xl font-semibold text-balance">
                  {article.title}
                </span>
                <span className="mt-3 block text-pretty text-muted">{article.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
