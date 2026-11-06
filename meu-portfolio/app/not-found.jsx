
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-gradient-to-br from-[#080808] via-[#260b10] to-[#650f1b] px-6 py-12 text-white md:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="/muzan.png"
          alt=""
          className="absolute bottom-0 right-0 hidden h-full w-auto max-w-none object-contain object-right-bottom md:block"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px]">
        <div className="flex w-full max-w-[680px] flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-3 text-[11px] font-bold uppercase tracking-[0.4em] text-red-400 sm:text-xs">
            Kimetsu no Yaiba
          </span>

          <h1
            className="text-[clamp(5rem,12vw,9rem)] leading-[1.15] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "var(--font-shojumaru)" }}
          >
            404
          </h1>

          <div className="my-5 h-0.5 w-24 bg-gradient-to-r from-red-600 to-transparent" />

          <h2
            className="mb-5 text-xl leading-relaxed sm:text-2xl lg:text-3xl"
            style={{ fontFamily: "var(--font-shojumaru)" }}
          >
            Você entrou no domínio errado...
          </h2>

          <p className="mb-7 max-w-lg text-sm leading-7 text-neutral-300 sm:text-base">
            Parece que Muzan apagou todos os rastros desta página.
            Nem mesmo os caçadores conseguiram encontrá-la.
            É melhor retornar antes que seja tarde demais.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-red-500/40 bg-gradient-to-r from-red-800 to-red-600 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_30px_rgba(185,28,28,0.3)] transition-all duration-300 hover:-translate-y-1 hover:from-red-700 hover:to-red-500 hover:shadow-[0_12px_35px_rgba(185,28,28,0.5)]"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}
