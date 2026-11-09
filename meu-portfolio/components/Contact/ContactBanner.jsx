
export default function ContactBanner() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
                style={{
                    backgroundImage: "url('/douma-contato5.png')"
                }}
            />

            <div
                className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
                style={{
                    backgroundImage: "url('/douma-contato4.png')"
                }}
            />

            <div className="absolute inset-0 bg-[#10051b]/15" />

            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#080310] via-[#080310]/90 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080310] via-[#080310]/90 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#10051b]/10 to-transparent" />
        </div>
    );
}
