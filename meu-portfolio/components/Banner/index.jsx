
"use client";

export default function Banner() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#100711]">
      <div
        className="absolute inset-0 bg-cover bg-[72%_top] bg-no-repeat sm:bg-[65%_top] lg:bg-[center_top]"
        style={{
          backgroundImage: "url('/kokushibo3.png')"
        }}
      />


            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#080310] via-[#080310]/90 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080310] via-[#080310]/90 to-transparent" />

    </div>
  );
}
