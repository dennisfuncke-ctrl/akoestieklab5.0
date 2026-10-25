import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/data/site";
import appCss from "../styles.css?url";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AkoestiekLab",
  url: `${SITE_URL}/`,
  description:
    "Kennisplatform van Akoestiek360 over geluid, nagalm, spraakprivacy en geluidsisolatie.",
  parentOrganization: {
    "@type": "Organization",
    name: "Akoestiek360",
    url: "https://akoestiek360.nl/",
  },
  sameAs: ["https://akoestiek360.nl/", "https://akoestiekscan.nl/", "https://geluidzaken.nl/"],
  email: "info@akoestiek360.nl",
  telephone: "+31612219463",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wilhelminastraat 66",
    postalCode: "9611 JX",
    addressLocality: "Sappemeer",
    addressCountry: "NL",
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AkoestiekLab",
  url: `${SITE_URL}/`,
  inLanguage: "nl-NL",
  publisher: { "@type": "Organization", name: "Akoestiek360", url: "https://akoestiek360.nl/" },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/begrippen?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AkoestiekLab | Kennis over geluid en akoestiek" },
      {
        name: "description",
        content:
          "AkoestiekLab legt nagalm, isolatie, spraakprivacy en metingen uit. Het kennisplatform van Akoestiek360, naast Akoestiekscan en Geluidzaken.",
      },
      { name: "theme-color", content: "#0b2e5b" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,560;0,9..144,680;1,9..144,560&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="nl" className="antialiased">
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <JsonLd data={organization} />
          <JsonLd data={website} />
          <div className="flex min-h-screen flex-col">
            <a
              href="#inhoud"
              className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-snow focus:px-4 focus:py-2"
            >
              Naar de inhoud
            </a>
            <SiteHeader />
            <div id="inhoud" className="flex-1">
              <Outlet />
            </div>
            <SiteFooter />
          </div>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">Niet gevonden</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-balance">Deze pagina staat niet in het lab</h1>
      <p className="mt-4 text-pretty text-muted">
        Het adres klopt niet, of het begrip is nog niet opgenomen. Zoek in de woordenlijst of ga terug naar
        de start.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/begrippen"
          className="inline-flex min-h-11 items-center rounded-full bg-navy px-5 text-sm font-semibold text-snow"
        >
          Naar de begrippen
        </Link>
        <Link
          to="/"
          className="inline-flex min-h-11 items-center rounded-full border border-line bg-snow px-5 text-sm font-semibold"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
