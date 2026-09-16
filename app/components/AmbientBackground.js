export default function AmbientBackground({ variant = "wood" }) {
  const colors = {
    wood: {
      blob1: "rgba(217, 169, 95, 0.14)",
      blob2: "rgba(139, 94, 52, 0.10)",
    },
    forest: {
      blob1: "rgba(217, 169, 95, 0.10)",
      blob2: "rgba(61, 107, 79, 0.11)",
    },
  };
  const c = colors[variant] || colors.wood;

  return (
    <div className="ambient-bg" aria-hidden="true">
      <div
        className="blob blob-1"
        style={{
          background: `radial-gradient(circle, ${c.blob1}, transparent 70%)`,
        }}
      />
      <div
        className="blob blob-2"
        style={{
          background: `radial-gradient(circle, ${c.blob2}, transparent 70%)`,
        }}
      />
    </div>
  );
}
