import { useState } from "react";

const levels = [
  { db: 0, label: "Gehoordrempel", note: "Bijna niets, voor een gezond oor." },
  { db: 30, label: "Fluisteren", note: "Dichtbij, zonder stemverheffing." },
  { db: 45, label: "Stil kantoor", note: "Lage installaties, weinig spraak." },
  { db: 60, label: "Gesprek", note: "Een normaal gesprek op een meter afstand." },
  { db: 70, label: "Kantine of stofzuiger", note: "Spraak moet harder, vermoeiend op den duur." },
  { db: 85, label: "Druk verkeer", note: "Rond de zone waar werkdagblootstelling gaat tellen." },
  { db: 100, label: "Concert of cirkelzaag", note: "Kort kan, lang zonder gehoorbescherming niet." },
  { db: 120, label: "Pijngrens", note: "Een vliegtuig dichtbij. Schadelijk en pijnlijk." },
];

const bands = [
  { max: 0.3, label: "Slecht", note: "Spraak is nauwelijks te volgen." },
  { max: 0.45, label: "Matig", note: "Je mist woorden, zeker bij namen en cijfers." },
  { max: 0.6, label: "Redelijk", note: "Een gesprek lukt, maar het kost aandacht." },
  { max: 0.75, label: "Goed", note: "Verstaanbaarheid die bij vergaderen past." },
  { max: 1, label: "Uitstekend", note: "Bijna alles komt aan, ook de medeklinkers." },
];

export function DecibelScale() {
  const [active, setActive] = useState(60);
  const current = levels.reduce((best, level) =>
    Math.abs(level.db - active) < Math.abs(best.db - active) ? level : best,
  );

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <label htmlFor="db-slider" className="text-sm font-semibold text-navy">
          Geluidsdrukniveau
          <span className="ml-2 tabular-nums text-accent-ink">{active} dB</span>
        </label>
        <input
          id="db-slider"
          type="range"
          min={0}
          max={120}
          step={1}
          value={active}
          onChange={(event) => setActive(Number(event.target.value))}
        />
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {levels.map((level) => (
            <button
              key={level.db}
              type="button"
              aria-pressed={current.db === level.db}
              onClick={() => setActive(level.db)}
              className={`min-h-11 rounded-2xl px-3 text-left text-sm ${
                current.db === level.db ? "bg-navy text-snow" : "bg-snow text-navy"
              }`}
            >
              <span className="block font-semibold tabular-nums">{level.db} dB</span>
              <span className={current.db === level.db ? "text-mist" : "text-muted"}>{level.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-3xl bg-snow p-5 lg:col-span-2">
        <div className="h-3 overflow-hidden rounded-full bg-paper" aria-hidden="true">
          <div className="h-full rounded-full bg-accent-ink" style={{ width: `${((active / 120) * 100).toFixed(2)}%` }} />
        </div>
        <p className="mt-4 font-display text-3xl font-semibold text-balance">{current.label}</p>
        <p className="mt-2 text-sm text-pretty text-muted">{current.note}</p>
        <p className="mt-4 text-sm text-pretty text-muted">
          Ongeveer 10 dB erbij klinkt voor veel mensen als een verdubbeling van de luidheid. Ongeveer 3 dB
          erbij is een verdubbeling van de geluidsenergie. Decibel is een verhouding, geen liniaal.
        </p>
      </div>
    </div>
  );
}

export function StiMeter() {
  const [sti, setSti] = useState(0.62);
  const band = bands.find((item) => sti <= item.max) ?? bands[bands.length - 1];

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <label htmlFor="sti-slider" className="text-sm font-semibold text-navy">
          Speech Transmission Index
          <span className="ml-2 tabular-nums text-accent-ink">
            {sti.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </label>
        <input
          id="sti-slider"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={sti}
          onChange={(event) => setSti(Number(event.target.value))}
        />
        <div className="mt-4 flex h-4 overflow-hidden rounded-full" aria-hidden="true">
          <span className="w-[30%] bg-line" />
          <span className="w-[15%] bg-mist" />
          <span className="w-[15%] bg-accent/50" />
          <span className="w-[15%] bg-accent" />
          <span className="w-[25%] bg-accent-ink" />
        </div>
        <div className="mt-2 flex justify-between text-xs text-muted">
          <span>0</span>
          <span>0,45</span>
          <span>0,60</span>
          <span>0,75</span>
          <span>1</span>
        </div>
      </div>
      <div className="rounded-3xl bg-navy p-5 text-snow lg:col-span-2">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">{band.label}</p>
        <p className="mt-2 font-display text-4xl font-semibold tabular-nums">
          {sti.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <p className="mt-3 text-sm text-pretty text-mist">{band.note}</p>
      </div>
    </div>
  );
}
