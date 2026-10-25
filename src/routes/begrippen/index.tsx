import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categories, letterOf, searchTerms, type CategoryId } from "@/data/glossary";
import { canonical } from "@/data/site";

export const Route = createFileRoute("/begrippen/")({
  validateSearch: (search: Record<string, unknown>) => {
    const q = typeof search.q === "string" ? search.q.slice(0, 80) : "";
    return q ? { q } : {};
  },
  head: () => ({
    meta: [
      { title: "Begrippen akoestiek en geluid — AkoestiekLab" },
      {
        name: "description",
        content:
          "Woordenlijst akoestiek: nagalmtijd, decibel, STI, luchtgeluid, absorptieklasse en meer. Uitleg van AkoestiekLab, het kennisplatform van Akoestiek360.",
      },
    ],
    links: [{ rel: "canonical", href: canonical("/begrippen") }],
  }),
  component: GlossaryPage,
});

function GlossaryPage() {
  const { q } = Route.useSearch();
  const navigate = useNavigate({ from: "/begrippen/" });
  const [letter, setLetter] = useState<string | null>(null);
  const [category, setCategory] = useState<CategoryId | "alles">("alles");
  const query = q ?? "";

  const letters = useMemo(() => {
    const set = new Set(searchTerms("").map((term) => letterOf(term.title)));
    return Array.from(set);
  }, []);

  const results = useMemo(() => {
    return searchTerms(query).filter((term) => {
      if (category !== "alles" && term.category !== category) return false;
      if (letter && !query && letterOf(term.title) !== letter) return false;
      return true;
    });
  }, [query, category, letter]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">Woordenlijst</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold text-balance md:text-5xl">
        Begrippen akoestiek en geluid
      </h1>
      <p className="mt-4 max-w-2xl text-pretty text-muted">
        De begrippen die op Akoestiek360 zijn verzameld, hier uitgelegd als kennisbank. Zoek op naam of
        filter op letter en thema. Metingen vind je bij{" "}
        <a href="https://akoestiekscan.nl/" className="font-semibold text-accent-ink">
          Akoestiekscan
        </a>{" "}
        en{" "}
        <a href="https://geluidzaken.nl/" className="font-semibold text-accent-ink">
          Geluidzaken
        </a>
        .
      </p>

      <form
        className="mt-8"
        role="search"
        action="/begrippen"
        method="get"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="begrip-zoek" className="text-sm font-semibold">
          Zoeken
        </label>
        <input
          id="begrip-zoek"
          name="q"
          value={query}
          placeholder="Bijvoorbeeld flankerend, sabine, dB(A)"
          onChange={(event) => {
            const next = event.target.value;
            setLetter(null);
            void navigate({
              search: next ? { q: next } : {},
              replace: true,
            });
          }}
          className="mt-2 min-h-11 w-full rounded-full border border-line bg-snow px-4"
        />
      </form>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Thema">
        <FilterChip pressed={category === "alles"} onClick={() => setCategory("alles")}>
          Alles
        </FilterChip>
        {(Object.keys(categories) as CategoryId[]).map((id) => (
          <FilterChip key={id} pressed={category === id} onClick={() => setCategory(id)}>
            {categories[id]}
          </FilterChip>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-1" role="group" aria-label="Beginletter">
        <FilterChip pressed={letter === null} onClick={() => setLetter(null)}>
          A–Z
        </FilterChip>
        {letters.map((item) => (
          <FilterChip key={item} pressed={letter === item} onClick={() => setLetter(item)}>
            {item}
          </FilterChip>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted">{results.length} begrippen</p>
      {results.length === 0 ? (
        <p className="mt-4 rounded-3xl bg-snow p-6 text-muted">
          Niets gevonden. Probeer nagalm, decibel of isolatie.
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-line rounded-3xl bg-snow">
          {results.map((term) => (
            <li key={term.slug}>
              <Link
                to="/begrippen/$slug"
                params={{ slug: term.slug }}
                className="grid gap-1 px-5 py-4 hover:bg-paper md:grid-cols-[16rem_1fr] md:gap-6"
              >
                <span className="font-semibold">{term.title}</span>
                <span className="text-sm text-pretty text-muted">{term.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

function FilterChip({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`min-h-11 rounded-full px-3 text-sm font-semibold ${
        pressed ? "bg-navy text-snow" : "bg-snow text-navy"
      }`}
    >
      {children}
    </button>
  );
}
