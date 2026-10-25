import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { JsonLd } from "@/components/json-ld";
import { articles, getArticle } from "@/data/articles";
import { getTerm } from "@/data/glossary";
import { canonical, clip } from "@/data/site";

export const Route = createFileRoute("/kennis/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData ? `${loaderData.title} — AkoestiekLab` : "Kennis — AkoestiekLab",
      },
      {
        name: "description",
        content: loaderData ? clip(loaderData.description) : "Kennisartikel over akoestiek.",
      },
    ],
    links: loaderData ? [{ rel: "canonical", href: canonical(`/kennis/${loaderData.slug}`) }] : [],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();
  const index = articles.findIndex((item) => item.slug === article.slug);
  const next = articles[index + 1] ?? articles[0];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          inLanguage: "nl-NL",
          url: canonical(`/kennis/${article.slug}`),
          author: { "@type": "Organization", name: "AkoestiekLab", url: "https://akoestieklab.nl/" },
          publisher: { "@type": "Organization", name: "Akoestiek360", url: "https://akoestiek360.nl/" },
        }}
      />
      <nav className="text-sm text-muted" aria-label="Kruimelpad">
        <Link to="/" className="hover:text-navy">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <Link to="/kennis" className="hover:text-navy">
          Kennis
        </Link>
      </nav>
      <p className="mt-6 text-sm font-semibold tracking-wide text-accent-ink uppercase">{article.kicker}</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-balance md:text-5xl">{article.title}</h1>
      <p className="mt-4 text-muted">{article.minutes} minuten lezen</p>
      <div className="mt-8 grid gap-5 text-lg leading-relaxed">
        {article.blocks.map((block, blockIndex) => {
          if (block.type === "h2") {
            return (
              <h2 key={blockIndex} className="font-display text-2xl font-semibold">
                {block.text}
              </h2>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={blockIndex} className="grid list-disc gap-2 pl-5 text-base">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }
          if (block.type === "terms") {
            const linked = block.slugs.flatMap((slug) => {
              const term = getTerm(slug);
              return term ? [term] : [];
            });
            return (
              <aside key={blockIndex} className="rounded-3xl bg-snow p-5 text-base">
                <h2 className="font-display text-xl font-semibold">Begrippen in dit stuk</h2>
                <ul className="mt-3 grid gap-2">
                  {linked.map((term) => (
                    <li key={term.slug}>
                      <Link
                        to="/begrippen/$slug"
                        params={{ slug: term.slug }}
                        className="font-semibold text-accent-ink"
                      >
                        {term.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            );
          }
          return (
            <p key={blockIndex} className="text-pretty">
              {block.text}
            </p>
          );
        })}
      </div>
      <p className="mt-10 text-pretty text-muted">
        Voor een meting in een kantoor of projectruimte:{" "}
        <a className="font-semibold text-accent-ink" href="https://akoestiekscan.nl/">
          Akoestiekscan
        </a>
        . Voor bouwakoestiek en de Omgevingswet:{" "}
        <a className="font-semibold text-accent-ink" href="https://geluidzaken.nl/">
          Geluidzaken
        </a>
        . Voor advies en oplossingen:{" "}
        <a className="font-semibold text-accent-ink" href="https://akoestiek360.nl/">
          Akoestiek360
        </a>
        .
      </p>
      {next && next.slug !== article.slug ? (
        <p className="mt-8">
          <Link to="/kennis/$slug" params={{ slug: next.slug }} className="font-semibold text-navy">
            Volgende: {next.title}
          </Link>
        </p>
      ) : null}
    </main>
  );
}
