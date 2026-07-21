export default function Logo({ size = 40, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoMarkGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4d3419" />
          <stop offset="1" stopColor="#8a6238" />
        </linearGradient>
      </defs>

      {/* Sfondi me rrumbullakosje */}
      <rect width="64" height="64" rx="16" fill="url(#logoMarkGrad)" />

      {/* Tekstura druri (rreshta horizontalë) */}
      <g opacity="0.18" stroke="#fff" strokeWidth="0.6">
        <line x1="8" y1="18" x2="56" y2="18" />
        <line x1="8" y1="26" x2="56" y2="26" />
        <line x1="8" y1="34" x2="56" y2="34" />
        <line x1="8" y1="42" x2="56" y2="42" />
        <line x1="8" y1="50" x2="56" y2="50" />
      </g>

      {/* Pirg dërrasash — simboli i biznesit */}
      <rect x="14" y="38" width="36" height="9" rx="1.5" fill="#d4b894" />
      <rect x="17" y="28" width="30" height="9" rx="1.5" fill="#ead9c0" />
      <rect x="21" y="18" width="22" height="9" rx="1.5" fill="#f5ecdf" />

      {/* Theksi ambër */}
      <rect x="21" y="18" width="22" height="2.5" rx="1.25" fill="#c87f2d" />

      {/* Inicialet NP */}
      <text
        x="46"
        y="60"
        fontFamily="Poppins, Arial, sans-serif"
        fontSize="10"
        fontWeight="800"
        fill="#fff"
        opacity="0.35"
        textAnchor="end"
      >
        NP
      </text>
    </svg>
  );
}
