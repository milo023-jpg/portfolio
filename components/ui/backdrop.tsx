const NOISE_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`;

const NOISE_URL = `url("data:image/svg+xml;utf8,${NOISE_SVG.replace(/\n/g, "").replace(/\s{2,}/g, " ")}")`;

export function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 88% 0%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 60%), radial-gradient(50% 45% at 8% 100%, color-mix(in oklab, var(--ink-4) 8%, transparent), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: NOISE_URL }}
      />
    </div>
  );
}
