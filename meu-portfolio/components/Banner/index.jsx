"use client";

export default function Banner() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#100711]">
            <div
                className="absolute inset-0 bg-cover bg-[70%_center] bg-no-repeat sm:bg-[65%_center] lg:bg-center"
                style={{
                    backgroundImage: "url('/kokushibo.png')",
                }}
            />

            <div className="absolute inset-0 bg-[#09030d]/10" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#100711]/85 via-[#170817]/45 to-transparent lg:from-[#100711]/55 lg:via-transparent" />

            <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-[#08030b]/95 via-[#08030b]/60 to-transparent sm:h-48 lg:h-64" />

            <div className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-[#08030b]/95 via-[#08030b]/65 to-transparent sm:h-56 lg:h-72" />

            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#100711]/30 to-transparent" />
        </div>
    );
}