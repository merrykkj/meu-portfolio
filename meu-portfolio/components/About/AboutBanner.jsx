
export default function AboutBanner() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#080b05]">
      <div
        className="absolute inset-0 bg-cover bg-[35%_center] bg-no-repeat sm:bg-[30%_center] lg:bg-center"
        style={{
          backgroundImage: "url('/gyuntaro.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#080b05]/10 to-[#080b05]/35" />

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080b05]/90 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080b05]/95 to-transparent" />

      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#080b05]/40 to-transparent" />

      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#080b05]/70 to-transparent" />
    </div>
  );
}
