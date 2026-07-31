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
      {/* Kornizë e mprehtë antracite */}
      <rect width="64" height="64" fill="#16191D" />
      <rect x="0.5" y="0.5" width="63" height="63" fill="none" stroke="#3A4149" strokeWidth="1" />

      {/* Pirg dërrasash — simboli i biznesit, tona çeliku */}
      <rect x="12" y="40" width="40" height="8" fill="#4A525C" />
      <rect x="16" y="30" width="32" height="8" fill="#6B747F" />
      <rect x="20" y="20" width="24" height="8" fill="#8A929C" />

      {/* Shiriti sinjal — aksenti portokalli */}
      <rect x="20" y="20" width="24" height="3" fill="#FF5A1F" />

      {/* Pika sinjali poshtë */}
      <rect x="12" y="52" width="6" height="6" fill="#FF5A1F" />
    </svg>
  );
}
