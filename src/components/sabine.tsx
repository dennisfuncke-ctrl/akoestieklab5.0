import { useMemo, useState } from "react";

const presets = [
  { id: "kantoor", label: "Kantoor", l: 8, w: 6, h: 2.7, alpha: 0.18 },
  { id: "vergader", label: "Vergaderen", l: 6, w: 4, h: 2.7, alpha: 0.28 },
  { id: "restaurant", label: "Restaurant", l: 14, w: 8, h: 3.2, alpha: 0.12 },
  { id: "gym", label: "Gymzaal", l: 24, w: 14, h: 7, alpha: 0.08 },
] as const;

function compute(l: number, w: number, h: number, alpha: number) {
  const floor = l * w;
  const walls = 2 * (l * h + w * h);
  const volume = l * w * h;
  const surface = 2 * floor + walls;
  const absorption = alpha * surface;
  const rt = (0.161 * volume) / absorption;
  return { floor, walls, volume, surface, absorption, rt };
}

function verdict(rt: number) {
  if (rt < 0.4) return "Droog. Fijn voor spraak op korte afstand, soms wat kaal in een grote zaal.";
  if (rt < 0.6) return "Strak. Een orde van grootte die bij vergaderen en geconcentreerd werken past.";
  if (rt < 0.9) return "Werkbaar voor veel kantoren. Spraak blijft volgbaar als het achtergrondgeluid meewerkt.";
  if (rt < 1.4) return "Levendig. Gesprekken worden waziger, zeker als meer mensen tegelijk praten.";
  return "Hol. Reflecties blijven lang hangen. Spraak verliest hier al snel zijn randen.";
}

function roundTo(value: number, digits: number) {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function formatNl(value: number, digits = 1) {
  return value.toLocaleString("nl-NL", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function playDecay(rt: number) {
  const Ctx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return;
  const ctx = new Ctx();
  const seconds = Math.min(3.5, Math.max(0.35, rt * 1.15));
  const length = Math.floor(ctx.sampleRate * seconds);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  const tau = Math.max(0.03, rt / 6.91);
  for (let i = 0; i < length; i += 1) {
    const t = i / ctx.sampleRate;
    data[i] = (Math.random() * 2 - 1) * Math.exp(-t / tau);
  }
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 1800;
  const gain = ctx.createGain();
  gain.gain.value = 0.16;
  source.connect(filter).connect(gain).connect(ctx.destination);
  source.onended = () => {
    void ctx.close();
  };
  source.start();
}

export function SabineBench() {
  const [length, setLength] = useState(8);
  const [width, setWidth] = useState(6);
  const [height, setHeight] = useState(2.7);
  const [alpha, setAlpha] = useState(0.18);
  const [preset, setPreset] = useState<string>("kantoor");

  const result = useMemo(
    () => compute(length, width, height, alpha),
    [length, width, height, alpha],
  );
  const shown = useMemo(() => {
    const floor = roundTo(length * width, 2);
    const walls = roundTo(2 * (length * height + width * height), 2);
    const volume = roundTo(length * width * height, 2);
    const surface = roundTo(2 * floor + walls, 2);
    const absorption = roundTo(alpha * surface, 2);
    return {
      floor,
      walls,
      volume,
      surface,
      absorption,
      rt: (0.161 * volume) / absorption,
    };
  }, [length, width, height, alpha]);

  const bars = useMemo(() => {
    const span = Math.max(result.rt, 0.25);
    return Array.from({ length: 36 }, (_, index) => {
      const t = (index / 35) * span;
      return Math.exp((-6.91 * t) / Math.max(result.rt, 0.05));
    });
  }, [result.rt]);

  function applyPreset(next: (typeof presets)[number]) {
    setPreset(next.id);
    setLength(next.l);
    setWidth(next.w);
    setHeight(next.h);
    setAlpha(next.alpha);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="rounded-3xl bg-snow p-5 shadow-sm lg:col-span-3 lg:p-7">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Voorbeeldruimtes">
          {presets.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={preset === item.id}
              onClick={() => applyPreset(item)}
              className={`min-h-11 rounded-full px-4 text-sm font-semibold ${
                preset === item.id ? "bg-navy text-snow" : "bg-paper text-navy"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <Slider label="Lengte" value={length} min={3} max={30} step={0.5} unit="m" onChange={setLength} />
          <Slider label="Breedte" value={width} min={3} max={20} step={0.5} unit="m" onChange={setWidth} />
          <Slider label="Hoogte" value={height} min={2.2} max={12} step={0.1} unit="m" onChange={setHeight} />
        </div>
        <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          <p className="rounded-2xl bg-paper px-4 py-3">
            <span className="block text-xs font-semibold tracking-wide text-muted uppercase">Volume</span>
            <span className="mt-1 block font-semibold tabular-nums text-navy">
              {formatFlex(length)} × {formatFlex(width)} × {formatFlex(height)} = {formatFlex(shown.volume)} m³
            </span>
          </p>
          <p className="rounded-2xl bg-paper px-4 py-3">
            <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
              Alle vlakken
            </span>
            <span className="mt-1 block font-semibold tabular-nums text-navy">
              vloer {formatFlex(shown.floor)} + plafond {formatFlex(shown.floor)} + wanden {formatFlex(shown.walls)} ={" "}
              {formatFlex(shown.surface)} m²
            </span>
            <span className="mt-1 block text-xs font-medium text-muted">
              Niet het volume. Vloer, plafond en vier wanden.
            </span>
          </p>
        </div>
        <AbsorptionControl alpha={alpha} surface={shown.surface} absorption={shown.absorption} onChange={setAlpha} />
        <p className="mt-4 text-sm text-pretty text-muted">
          Sabine: T = 0,161 × {formatFlex(shown.volume)} m³ / {formatFlex(shown.absorption)} m² ={" "}
          {formatNl(shown.rt, 2)} s. α is het aandeel geluid dat de vlakken opnemen, geen oppervlak. Eén
          gemiddelde over alle vlakken, in een diffuus veld. Orde van grootte, geen meetrapport.
        </p>
      </div>
      <div className="flex flex-col rounded-3xl bg-navy p-5 text-snow lg:col-span-2 lg:p-7">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">Nagalmtijd</p>
        <p className="mt-2 font-display text-6xl font-semibold tabular-nums">
          {formatNl(shown.rt, 2)}
          <span className="ml-2 text-2xl font-sans font-semibold text-mist">s</span>
        </p>
        <p className="mt-2 text-sm tabular-nums text-mist">
          0,161 × {formatFlex(shown.volume)} m³ / {formatFlex(shown.absorption)} m²
        </p>
        <p className="mt-3 text-sm text-pretty text-mist">{verdict(shown.rt)}</p>
        <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
          <div>
            <dt className="text-mist">Volume L×B×H</dt>
            <dd className="font-semibold tabular-nums">{formatFlex(shown.volume)} m³</dd>
          </div>
          <div>
            <dt className="text-mist">Alle vlakken</dt>
            <dd className="font-semibold tabular-nums">{formatFlex(shown.surface)} m²</dd>
          </div>
          <div>
            <dt className="text-mist">Absorptie A</dt>
            <dd className="font-semibold tabular-nums">{formatFlex(shown.absorption)} m²</dd>
          </div>
        </dl>
        <p className="mt-3 text-sm text-pretty text-mist">
          Die m² gelden alleen volledig bij α = 1. Bij α = 0,5 heb je twee keer zoveel materiaal nodig:{" "}
          {formatFlex(shown.absorption * 2)} m².
        </p>
        <div className="mt-6 flex h-24 items-end gap-1" aria-hidden="true">
          {bars.map((amp, index) => (
            <span
              key={index}
              className="flex-1 rounded-sm bg-accent"
              style={{
                height: `${Math.max(6, amp * 100).toFixed(2)}%`,
                opacity: (0.45 + amp * 0.55).toFixed(3),
              }}
            />
          ))}
        </div>
        <div className="mt-1 flex justify-between text-xs text-mist">
          <span>bron stopt</span>
          <span>−60 dB bij {formatNl(shown.rt, 2)} s</span>
        </div>
        <button
          type="button"
          onClick={() => playDecay(result.rt)}
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-4 text-sm font-semibold text-navy"
        >
          Speel de nagalm af
        </button>
      </div>
    </div>
  );
}

function formatFlex(value: number, digits = 2) {
  return value.toLocaleString("nl-NL", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  });
}

function AbsorptionControl({
  alpha,
  surface,
  absorption,
  onChange,
}: {
  alpha: number;
  surface: number;
  absorption: number;
  onChange: (value: number) => void;
}) {
  const percent = Math.round(alpha * 100);
  const reflected = 100 - percent;
  return (
    <div className="mt-5 rounded-2xl bg-paper p-4">
      <label htmlFor="gemiddelde-absorptie" className="block text-sm font-semibold text-navy">
        <span className="flex items-start justify-between gap-3">
          <span>
            Gemiddelde absorptie α
            <span className="mt-0.5 block text-xs font-medium text-muted">
              Verhouding van 0 tot 1, geen meters
            </span>
          </span>
          <span className="text-right font-sans leading-tight font-semibold tabular-nums text-accent-ink">
            <span className="block text-base">{percent}%</span>
            <span className="block text-sm">{formatFlex(absorption)} m²</span>
          </span>
        </span>
        <input
          id="gemiddelde-absorptie"
          className="mt-2"
          type="range"
          min={0.01}
          max={1}
          step={0.01}
          value={alpha}
          aria-valuetext={`${percent} procent, ${formatFlex(absorption)} vierkante meter`}
          onChange={(event) => onChange(Number(event.target.value))}
        />
        <span className="mt-1 flex justify-between text-xs font-medium text-muted">
          <span>1% weinig</span>
          <span>100% alles opgenomen</span>
        </span>
      </label>
      <div className="mt-3" aria-hidden="true">
        <div className="flex h-2.5 overflow-hidden rounded-full bg-line">
          <div className="bg-accent-ink" style={{ width: `${percent}%` }} />
        </div>
        <div className="mt-1 flex justify-between gap-3 text-xs font-medium text-muted">
          <span>opgenomen {percent}%</span>
          <span>teruggekaatst {reflected}%</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-pretty text-navy">
        A = α × alle vlakken = {formatNl(alpha, 2)} × {formatFlex(surface)} m² ={" "}
        <span className="font-semibold tabular-nums">{formatFlex(absorption)} m²</span>
      </p>
      <p className="mt-2 rounded-xl bg-snow px-3 py-2 text-sm text-pretty text-navy">
        Die m² absorptie geldt alleen volledig bij α = 1. Dan is{" "}
        <span className="font-semibold tabular-nums">{formatFlex(absorption)} m²</span> materiaal genoeg. Bij α =
        0,5 levert elke m² maar de helft, dus heb je twee keer zoveel nodig:{" "}
        <span className="font-semibold tabular-nums">{formatFlex(absorption * 2)} m²</span>.
      </p>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  unit,
  digits = 1,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  digits?: number;
  onChange: (value: number) => void;
}) {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <label htmlFor={id} className="block text-sm font-semibold text-navy">
      <span className="flex items-baseline justify-between gap-3">
        {label}
        <span className="font-sans font-semibold tabular-nums text-accent-ink">
          {formatNl(value, digits)}
          {unit ? ` ${unit}` : ""}
        </span>
      </span>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}
