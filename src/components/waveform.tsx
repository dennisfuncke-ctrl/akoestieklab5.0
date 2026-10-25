import { cn } from "@/lib/cn";

function wave(amplitude: number, phase: number, y: number) {
  let d = "";
  for (let x = 0; x <= 1200; x += 10) {
    const t = (x / 600) * Math.PI * 2 + phase;
    const yy = y + Math.sin(t) * amplitude + Math.sin(t * 2.15 + 0.4) * amplitude * 0.28;
    d += `${x === 0 ? "M" : "L"}${x} ${yy.toFixed(1)} `;
  }
  return d;
}

const primary = wave(22, 0.2, 70);
const secondary = wave(12, 1.4, 74);

export function Waveform({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden text-accent", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1200 140"
        className="lab-drift h-full w-[200%] max-w-none"
        preserveAspectRatio="none"
      >
        <path d={secondary} fill="none" stroke="currentColor" strokeWidth="1.25" opacity="0.45" />
        <path d={primary} fill="none" stroke="currentColor" strokeWidth="2.25" />
      </svg>
    </div>
  );
}
