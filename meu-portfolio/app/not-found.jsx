import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative isolate flex h-[100svh] w-full items-center overflow-hidden bg-[#100205] text-white">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="/muzan2.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] md:object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#090204]/90 via-[#160306]/55 to-[#100205]/10 md:from-[#090204]/65 md:via-[#100205]/20 md:to-transparent" />

        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#100205]/75 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-center justify-center px-5 sm:px-8 md:justify-start lg:px-16">
        <div className="flex w-full max-w-[600px] flex-col items-center text-center">
          <span className="mb-[clamp(6px,1.5vh,16px)] font-serif text-[clamp(9px,1vw,12px)] uppercase tracking-[0.45em] text-[#f0e5e5]">
            Kimetsu no Yaiba
          </span>

          <div className="mb-[clamp(4px,1vh,12px)] flex w-full max-w-[360px] items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#e6c5c5]/80" />

            <span className="text-xl text-[#e21c2c] drop-shadow-[0_0_12px_#dc143c]">
              ❖
            </span>

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#e6c5c5]/80" />
          </div>

          <h1 className="w-full max-w-[min(480px,55vh)]">
            <img
              src="/404-muzan.png"
              alt="Erro 404"
              className="h-auto max-h-[30vh] w-full object-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
            />
          </h1>

          <h2 className="mt-[clamp(4px,1vh,12px)] font-serif text-[clamp(1.2rem,2.5vw,2.4rem)] font-normal uppercase leading-[1.15] tracking-[0.025em] text-[#f3e9e9] [text-shadow:0_3px_12px_rgba(0,0,0,0.7)]">
            Você entrou no
            <span className="block">
              domínio{" "}
              <span className="text-[#f12635]">errado...</span>
            </span>
          </h2>

          <p className="mt-[clamp(8px,2vh,22px)] max-w-[510px] font-serif text-[clamp(11px,1.1vw,16px)] leading-[1.6] text-[#e6d8d8]">
            Parece que Muzan apagou todos os rastros desta página.
            <br className="hidden sm:block" />
            Nem mesmo os caçadores conseguiram encontrá-la.
            <br className="hidden sm:block" />
            É melhor retornar antes que seja tarde demais.
          </p>

          <div className="my-[clamp(8px,2vh,22px)] flex w-full max-w-[340px] items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d8b7b7]/70" />

            <span className="text-lg text-[#e21c2c] drop-shadow-[0_0_10px_#dc143c]">
              ❖
            </span>

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d8b7b7]/70" />
          </div>

          <Link
            href="/"
            className="group relative inline-flex min-h-[clamp(42px,6vh,60px)] w-full max-w-[300px] items-center justify-center overflow-hidden border border-[#ff2538] bg-[#280408]/60 px-6 py-2 font-serif text-[clamp(12px,1.2vw,17px)] uppercase tracking-[0.08em] text-[#fff0f0] shadow-[0_0_14px_rgba(255,20,45,0.35),inset_0_0_12px_rgba(255,20,45,0.1)] transition-all duration-300 hover:bg-[#8d0919]/70 hover:shadow-[0_0_28px_rgba(255,20,45,0.6)]"
            style={{
              clipPath:
                "polygon(6% 0, 94% 0, 100% 25%, 100% 75%, 94% 100%, 6% 100%, 0 75%, 0 25%)",
            }}
          >
            <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#ff6b78] to-transparent" />

            <span className="relative z-10">Voltar ao início</span>

            <span className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ff6b78] to-transparent" />
          </Link>
        </div>
      </div>
    </main>
  );
}