export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Raw Paper Base Layer */}
      <div className="absolute inset-0 bg-[#FFFBF0]" />

      {/* Fine Grid Texture */}
      <div className="absolute inset-0 bg-linen-grid opacity-70" />

      {/* Dot Matrix Accent */}
      <div className="absolute inset-0 bg-dot-matrix opacity-40" />
    </div>
  );
}
