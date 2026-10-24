
"use client";

import ContactBanner from "./ContactBanner";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserRound,
  Mail,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Send,
  LoaderCircle
} from "lucide-react";

function Lotus({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 58C38 46 37 28 50 7C63 28 62 46 50 58Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M50 58C29 54 20 39 25 20C40 26 48 40 50 58Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M50 58C71 54 80 39 75 20C60 26 52 40 50 58Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M50 58C27 65 10 54 5 38C25 35 42 43 50 58Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M50 58C73 65 90 54 95 38C75 35 58 43 50 58Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M15 62H85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Ornament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 88V35C3 17 17 3 35 3H88"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M12 68V37C12 23 23 12 37 12H68"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M15 35C30 35 35 30 35 15C35 30 40 35 55 35C40 35 35 40 35 55C35 40 30 35 15 35Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
}

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xjglldlp",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        }
      );

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle =
    "w-full appearance-none rounded-xl border border-[#70435f]/70 !bg-[#1b101d] py-3 pl-12 pr-4 text-sm !text-[#f7eaf5] outline-none transition-all duration-300 placeholder:text-[#b79bab] hover:border-[#a16b91] focus:border-[#d69cbf] focus:!bg-[#261528] focus:shadow-[0_0_0_3px_rgba(187,105,153,0.08)]";

  const inputInlineStyle = {
    backgroundColor: "#1b101d",
    color: "#f7eaf5",
    colorScheme: "dark"
  };

  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#09040d] px-4 py-20 text-white sm:px-6"
    >
      <ContactBanner />

      <div className="relative z-20 mx-auto w-full max-w-[580px] lg:translate-x-[3vw]">
        <article className="relative rounded-[24px] border border-[#9b617f]/70 bg-[#100912]/90 px-6 pb-6 pt-8 shadow-[0_20px_75px_rgba(0,0,0,0.55),0_0_30px_rgba(112,37,83,0.16)] backdrop-blur-xl sm:px-9">
          <div className="pointer-events-none absolute inset-[6px] rounded-[19px] border border-[#81506c]/35" />

          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px]">
            <div className="absolute -top-24 left-1/2 h-52 w-72 -translate-x-1/2 rounded-full bg-[#8e355e]/15 blur-[80px]" />
            <div className="absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-[#722c69]/15 blur-[75px]" />
          </div>

          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#e4adca]/80 to-transparent" />

          <div className="pointer-events-none absolute -top-6 left-1/2 z-30 -translate-x-1/2">
            <div className="flex h-12 w-20 items-center justify-center rounded-full bg-[#100912]/90">
              <Lotus className="h-11 w-16 text-[#d8a46e] drop-shadow-[0_0_8px_rgba(216,164,110,0.3)]" />
            </div>
          </div>

          <Ornament className="pointer-events-none absolute left-3 top-3 h-12 w-12 text-[#b786a1]/65" />
          <Ornament className="pointer-events-none absolute right-3 top-3 h-12 w-12 -scale-x-100 text-[#b786a1]/65" />
          <Ornament className="pointer-events-none absolute bottom-3 left-3 h-12 w-12 -scale-y-100 text-[#b786a1]/65" />
          <Ornament className="pointer-events-none absolute bottom-3 right-3 h-12 w-12 scale-[-1] text-[#b786a1]/65" />

          <header className="relative z-10 mb-5 text-center">
            <span className="mb-2 inline-block text-[10px] font-medium uppercase tracking-[0.35em] text-[#d6a46d]">
              Vamos conversar?
            </span>

            <h2
              id="contact-title"
              className="font-serif text-[clamp(2.8rem,6vw,3.6rem)] font-normal uppercase leading-none tracking-[-0.045em] text-[#f4ddec]"
            >
              Contato
            </h2>

            <div className="mt-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#b37a96]" />
              <Lotus className="h-5 w-7 text-[#c99769]" />
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#b37a96]" />
            </div>

            <p className="mt-2 text-[13px] text-[#c6aebe]">
              Tem uma ideia ou proposta? Envie sua mensagem.
            </p>
          </header>

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  aria-live="polite"
                  className="flex min-h-[230px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#c28ca9]/50 bg-[#542943]/25">
                    <CheckCircle2
                      size={30}
                      strokeWidth={1.4}
                      className="text-[#e5b6d0]"
                    />
                  </div>

                  <h3 className="mb-2 font-serif text-2xl text-[#f6e4ee]">
                    Mensagem enviada!
                  </h3>

                  <p className="mb-5 max-w-xs text-sm leading-relaxed text-[#c6aebe]">
                    Sua mensagem foi enviada com sucesso.
                    Obrigada por entrar em contato!
                  </p>

                  <button
                    type="button"
                    onClick={() => setStatus(null)}
                    className="rounded-full border border-[#b87d9c]/70 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-[#f1d7e5] transition-all hover:border-[#e4acc9] hover:bg-[#6b3657]/25"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >
                  <div className="relative">
                    <label htmlFor="name" className="sr-only">
                      Seu nome
                    </label>

                    <UserRound
                      size={18}
                      strokeWidth={1.6}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#d1a5bf]"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      autoComplete="name"
                      required
                      className={inputStyle}
                      style={inputInlineStyle}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="sr-only">
                      Seu email
                    </label>

                    <Mail
                      size={18}
                      strokeWidth={1.6}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#d1a5bf]"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Seu email"
                      autoComplete="email"
                      required
                      className={inputStyle}
                      style={inputInlineStyle}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="sr-only">
                      Sua mensagem
                    </label>

                    <MessageCircle
                      size={18}
                      strokeWidth={1.6}
                      className="pointer-events-none absolute left-4 top-4 text-[#d1a5bf]"
                    />

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Sua mensagem..."
                      required
                      rows={3}
                      className={`${inputStyle} min-h-[105px] resize-y`}
                      style={inputInlineStyle}
                    />
                  </div>

                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={
                        status !== "loading"
                          ? { scale: 1.015 }
                          : undefined
                      }
                      whileTap={
                        status !== "loading"
                          ? { scale: 0.985 }
                          : undefined
                      }
                      className="group relative flex min-h-[48px] w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-[#b77d99] bg-gradient-to-r from-[#54243e] via-[#713552] to-[#54243e] px-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#fff0f7] shadow-[0_5px_22px_rgba(104,36,75,0.28)] transition-all duration-300 hover:border-[#e1a9c4] hover:shadow-[0_0_24px_rgba(168,79,126,0.3)] disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm"
                    >
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {status === "loading" ? (
                        <>
                          <LoaderCircle
                            size={18}
                            className="animate-spin"
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar mensagem
                          <Send
                            size={16}
                            strokeWidth={1.7}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                          />
                        </>
                      )}
                    </motion.button>
                  </div>

                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-center justify-center gap-2 rounded-lg border border-red-400/25 bg-red-950/30 px-3 py-2.5 text-center text-xs text-red-200"
                    >
                      <AlertCircle size={16} />
                      Erro ao enviar. Tente novamente.
                    </div>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <div className="pointer-events-none absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b27a97]/60 to-transparent" />
        </article>
      </div>


    </section>
  );
}
