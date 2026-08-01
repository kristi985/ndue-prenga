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
      {/* Kornizë arre e errët */}
      <rect width="64" height="64" fill="#241A12" />
      <rect x="0.5" y="0.5" width="63" height="63" fill="none" stroke="#4E342E" strokeWidth="1" />

      {/* Pirg dërrasash — simboli i biznesit, tona druri */}
      <rect x="12" y="40" width="40" height="8" fill="#5D4037" />
      <rect x="16" y="30" width="32" height="8" fill="#8D6E63" />
      <rect x="20" y="20" width="24" height="8" fill="#BCAAA4" />

      {/* Shiriti pishë — aksenti dru i verdhë i ngopur */}
      <rect x="20" y="20" width="24" height="3" fill="#D9A95F" />

      {/* Pika pishë poshtë */}
      <rect x="12" y="52" width="6" height="6" fill="#D9A95F" />
    </svg>
  );
}
