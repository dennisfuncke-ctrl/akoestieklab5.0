import { Link } from "@tanstack/react-router";
import { contact, family } from "@/data/family";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-line bg-navy text-snow">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold">AkoestiekLab</p>
          <p className="mt-3 text-sm text-pretty text-mist">
            Het kennisplatform van Akoestiek360. Begrippen, uitleg en rekenhulpen over geluid — meten en
            advies blijven bij de zustersites.
          </p>
          <p className="mt-4 font-display text-lg text-accent italic">Samen naar een betere akoestiek.</p>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">Op deze site</p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link to="/begrippen" className="hover:text-accent">
                Begrippenlijst
              </Link>
            </li>
            <li>
              <Link to="/kennis" className="hover:text-accent">
                Kennisartikelen
              </Link>
            </li>
            <li>
              <Link to="/lab" className="hover:text-accent">
                Lab en rekenhulpen
              </Link>
            </li>
            <li>
              <Link to="/netwerk" className="hover:text-accent">
                Het netwerk
              </Link>
            </li>
            <li>
              <Link to="/over" className="hover:text-accent">
                Over het lab
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">Zustersites</p>
          <ul className="mt-3 grid gap-3 text-sm">
            {family
              .filter((site) => !site.here)
              .map((site) => (
                <li key={site.name}>
                  <a href={site.href} className="font-semibold hover:text-accent">
                    {site.name}
                  </a>
                  <p className="text-mist">{site.role}</p>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">Contact</p>
          <address className="mt-3 text-sm text-mist not-italic">
            Akoestiek360
            <br />
            {contact.street}
            <br />
            {contact.postal}
          </address>
          <p className="mt-3 text-sm">
            <a href={contact.phoneHref} className="font-semibold hover:text-accent">
              {contact.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${contact.email}`} className="hover:text-accent">
              {contact.email}
            </a>
          </p>
          <p className="mt-3 text-xs text-mist">KvK {contact.kvk}</p>
        </div>
      </div>
      <div className="border-t border-mist/25">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-mist">
          © {new Date().getFullYear()} AkoestiekLab, onderdeel van Akoestiek360. Kennis, geen webshop.
        </p>
      </div>
    </footer>
  );
}
