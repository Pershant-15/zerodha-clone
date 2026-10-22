// Original, simple SVG artwork drawn for this learning project. Solid colors only.
const BLUE = "#387ed1";
const ORANGE = "#ff5722";
const INK = "#424242";
const MUTED = "#9b9b9b";
const LINE = "#e0e0e0";
const SOFT = "#f5f8fd";

export function Logo() {
  return (
    <svg width="150" height="28" viewBox="0 0 150 28" role="img" aria-label="Zerodha clone logo">
      <rect x="0" y="2" width="24" height="24" rx="5" fill={BLUE} />
      <path d="M6 18 L12 8 L18 18" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="32" y="21" fontFamily="Inter, sans-serif" fontSize="19" fontWeight="600" fill={INK}>
        Zerodha
      </text>
      <text x="108" y="21" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500" fill={MUTED}>
        clone
      </text>
    </svg>
  );
}

export function HeroIllustration() {
  // [x, bar height]; bars sit on the baseline at y = 250
  const bars = [
    [70, 60],
    [125, 85],
    [180, 70],
    [235, 105],
    [290, 125],
    [345, 150],
  ];
  return (
    <svg viewBox="0 0 460 340" className="w-100" role="img" aria-label="Trading dashboard illustration">
      <rect x="10" y="20" width="440" height="270" rx="12" fill="#fff" stroke={LINE} strokeWidth="2" />
      <rect x="10" y="20" width="440" height="36" rx="12" fill={SOFT} />
      <circle cx="32" cy="38" r="5" fill={ORANGE} />
      <circle cx="50" cy="38" r="5" fill={MUTED} />
      <circle cx="68" cy="38" r="5" fill={BLUE} />
      <line x1="40" y1="250" x2="425" y2="250" stroke={LINE} strokeWidth="2" />
      {bars.map(([x, h], i) => (
        <rect key={i} x={x} y={250 - h} width="34" height={h} rx="4" fill={i % 2 ? BLUE : "#6fa0e0"} />
      ))}
      <polyline
        points="87,215 142,190 197,200 252,160 307,135 362,100"
        fill="none"
        stroke={ORANGE}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[[87, 215], [142, 190], [197, 200], [252, 160], [307, 135], [362, 100]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#fff" stroke={ORANGE} strokeWidth="3" />
      ))}
      <rect x="330" y="215" width="105" height="105" rx="14" fill={INK} />
      <rect x="342" y="228" width="40" height="8" rx="4" fill={MUTED} />
      <rect x="342" y="246" width="80" height="8" rx="4" fill="#757575" />
      <rect x="342" y="264" width="62" height="8" rx="4" fill="#757575" />
      <rect x="342" y="288" width="80" height="20" rx="6" fill={BLUE} />
    </svg>
  );
}

const products = [
  ["Kite", "Trading platform", BLUE],
  ["Console", "Backoffice", ORANGE],
  ["Coin", "Mutual funds", INK],
  ["Kite Connect", "Trading APIs", BLUE],
  ["Varsity", "Education", ORANGE],
  ["Trading Q&A", "Community", INK],
];

export function EcosystemIllustration() {
  return (
    <div className="row g-3 justify-content-center">
      {products.map(([name, sub, color]) => (
        <div className="col-6 col-md-4 col-lg-2" key={name}>
          <div className="product-tile">
            <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
              <rect width="44" height="44" rx="10" fill={color} />
              <text x="22" y="29" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="600" fill="#fff">
                {name[0]}
              </text>
            </svg>
            <div className="product-name">{name}</div>
            <div className="product-sub">{sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function KiteConnectBanner() {
  return (
    <div className="connect-banner d-flex flex-column flex-md-row align-items-md-center gap-4">
      <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true" className="flex-shrink-0">
        <rect width="64" height="64" rx="14" fill={BLUE} />
        <path d="M22 24 L12 32 L22 40 M42 24 L52 32 L42 40 M36 20 L28 44" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="mb-0 body-text flex-grow-1">
        <strong>Need more?</strong> Build your own trading and investing experience
        with Kite Connect, simple HTTP APIs to place orders, stream market data,
        manage your account, and more.{" "}
        <a href="#kite-connect" className="text-link">Explore →</a>
      </p>
    </div>
  );
}

export function EducationIllustration() {
  return (
    <svg viewBox="0 0 420 300" className="w-100" role="img" aria-label="Open book and community illustration">
      <rect x="40" y="60" width="150" height="190" rx="8" fill={BLUE} />
      <rect x="55" y="75" width="150" height="190" rx="8" fill="#fff" stroke={BLUE} strokeWidth="3" />
      <rect x="75" y="100" width="90" height="10" rx="5" fill={INK} />
      <rect x="75" y="125" width="110" height="8" rx="4" fill={LINE} />
      <rect x="75" y="143" width="100" height="8" rx="4" fill={LINE} />
      <rect x="75" y="161" width="108" height="8" rx="4" fill={LINE} />
      <polyline points="78,235 108,210 132,222 168,188" fill="none" stroke={ORANGE} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="235" y="50" width="150" height="80" rx="14" fill={SOFT} stroke={LINE} strokeWidth="2" />
      <path d="M260 130 L250 152 L282 130" fill={SOFT} stroke={LINE} strokeWidth="2" />
      <rect x="255" y="72" width="100" height="8" rx="4" fill={INK} />
      <rect x="255" y="92" width="70" height="8" rx="4" fill={MUTED} />
      <rect x="265" y="165" width="130" height="70" rx="14" fill={BLUE} />
      <path d="M370 235 L382 256 L350 235" fill={BLUE} />
      <rect x="285" y="187" width="90" height="8" rx="4" fill="#fff" />
      <rect x="285" y="205" width="60" height="8" rx="4" fill="#cfe0f6" />
    </svg>
  );
}
