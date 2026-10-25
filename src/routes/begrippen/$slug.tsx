import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { JsonLd } from "@/components/json-ld";
import { categories, getTerm, terms } from "@/data/glossary";
import { canonical, clip } from "@/data/site";

export const Route = createFileRoute("/begrippen/$slug")({
  loader: ({ params }) => {
    const term = getTerm(params.slug);
    if (!term) throw notFound();
    return term;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — AkoestiekLab` : "Begrip — AkoestiekLab" },
      {
        name: "description",
        content: loaderData ? clip(loaderData.summary) : "Begrip uit de akoestiek.",
      },
    ],
    links: loaderData
      ? [{ rel: "canonical", href: canonical(`/begrippen/${loaderData.slug}`) }]
      : [],
  }),
  component: TermPage,
});

function TermPage() {
  const term = Route.useLoaderData();
  const index = terms.findIndex((item) => item.slug === term.slug);
  const previous = index > 0 ? terms[index - 1] : undefined;
  const next = index >= 0 && index < terms.length - 1 ? terms[index + 1] : undefined;
  const related = term.related.flatMap((slug) => {
    const item = getTerm(slug);
    return item ? [item] : [];
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          name: term.title,
          description: term.summary,
          url: canonical(`/begrippen/${term.slug}`),
          inDefinedTermSet: canonical("/begrippen"),
          inLanguage: "nl-NL",
        }}
      />
      <nav className="text-sm text-muted" aria-label="Kruimelpad">
        <Link to="/" className="hover:text-navy">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <Link to="/begrippen" className="hover:text-navy">
          Begrippen
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-navy">{term.title}</span>
      </nav>
      <p className="mt-6 text-sm font-semibold tracking-wide text-accent-ink uppercase">
        {categories[term.category]}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-balance md:text-5xl">{term.title}</h1>
      <p className="mt-5 text-lg text-pretty leading-relaxed">{term.summary}</p>
      {term.practice ? (
        <p className="mt-4 text-pretty leading-relaxed text-muted">{term.practice}</p>
      ) : null}
      <aside className="mt-8 rounded-3xl bg-snow p-5">
        <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">Verder in de familie</p>
        <p className="mt-2 text-pretty">{term.see.note}</p>
        <a href={term.see.href} className="mt-3 inline-flex font-semibold text-navy">
          {term.see.label}
        </a>
      </aside>
      {related.length > 0 ? (
        <section className="mt-10" aria-labelledby="verwant-titel">
          <h2 id="verwant-titel" className="font-display text-2xl font-semibold">
            Verwante begrippen
          </h2>
          <ul className="mt-4 grid gap-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/begrippen/$slug"
                  params={{ slug: item.slug }}
                  className="block rounded-3xl border border-line bg-snow px-5 py-4 hover:border-accent-ink"
                >
                  <span className="font-semibold">{item.title}</span>
                  <span className="mt-1 block text-sm text-pretty text-muted">{item.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <nav className="mt-10 flex flex-wrap justify-between gap-3 text-sm font-semibold" aria-label="Vorige en volgende">
        {previous ? (
          <Link to="/begrippen/$slug" params={{ slug: previous.slug }} className="text-accent-ink">
            ← {previous.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to="/begrippen/$slug" params={{ slug: next.slug }} className="text-accent-ink">
            {next.title} →
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
