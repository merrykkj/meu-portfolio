"use client";

import ContactBanner from "./ContactBanner";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    UserRound,
    Mail,
    MessageCircle,
    CheckCircle2
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
                strokeWidth="2"
            />
            <path
                d="M50 58C29 54 20 39 25 20C40 26 48 40 50 58Z"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M50 58C71 54 80 39 75 20C60 26 52 40 50 58Z"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M50 58C27 65 10 54 5 38C25 35 42 43 50 58Z"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M50 58C73 65 90 54 95 38C75 35 58 43 50 58Z"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M15 62H85"
                stroke="currentColor"
                strokeWidth="2"
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
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 88V35C3 17 17 3 35 3H88"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path
                d="M12 68V37C12 23 23 12 37 12H68"
                stroke="currentColor"
                strokeWidth="1"
            />
            <path
                d="M15 35C30 35 35 30 35 15C35 30 40 35 55 35C40 35 35 40 35 55C35 40 30 35 15 35Z"
                stroke="currentColor"
                strokeWidth="1"
            />
            <path
                d="M9 61C20 58 26 51 29 41"
                stroke="currentColor"
                strokeWidth="1"
            />
            <path
                d="M41 29C51 26 58 20 61 9"
                stroke="currentColor"
                strokeWidth="1"
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
        "w-full rounded-xl border border-[#a968cf] bg-[#24172f]/80 py-3 pl-12 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#c4b4cc] focus:border-[#e2adff] focus:bg-[#30203d] focus:shadow-[0_0_15px_rgba(183,101,255,0.25)]";

    return (
        <section
            id="contato"
            aria-labelledby="contact-title"
            className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#080310] px-4 py-20 text-white sm:px-6"
        >
            <ContactBanner />

            <div className="relative z-20 mx-auto w-full max-w-[520px]">
                <motion.article
                    initial={{
                        opacity: 0,
                        y: 35,
                        scale: 0.96
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1
                    }}
                    viewport={{
                        once: true,
                        amount: 0.15
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut"
                    }}
                    className="relative rounded-[26px] border-2 border-[#ce8cff] bg-[#140a20]/90 px-6 pb-7 pt-9 shadow-[0_0_8px_#d38cff,0_0_25px_rgba(166,83,242,0.55),inset_0_0_30px_rgba(130,51,205,0.12)] backdrop-blur-lg sm:px-9"
                >
                    <div className="pointer-events-none absolute inset-[7px] rounded-[20px] border border-[#9e5fc4]/65" />

                    <div className="pointer-events-none absolute -top-[29px] left-1/2 z-30 -translate-x-1/2">
                        <Lotus className="h-[58px] w-[85px] text-[#e6b0ff] drop-shadow-[0_0_9px_#c26bff]" />
                    </div>

                    <Ornament className="pointer-events-none absolute left-3 top-3 h-[60px] w-[60px] text-[#ba7cdb]/85" />

                    <Ornament className="pointer-events-none absolute right-3 top-3 h-[60px] w-[60px] -scale-x-100 text-[#ba7cdb]/85" />

                    <Ornament className="pointer-events-none absolute bottom-3 left-3 h-[60px] w-[60px] -scale-y-100 text-[#ba7cdb]/85" />

                    <Ornament className="pointer-events-none absolute bottom-3 right-3 h-[60px] w-[60px] scale-[-1] text-[#ba7cdb]/85" />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-[25px] bg-gradient-to-t from-[#70249b]/20 to-transparent" />

                    <header className="relative z-10 mb-5 text-center">
                        <h2
                            id="contact-title"
                            className="font-serif text-[clamp(2.8rem,6vw,4rem)] font-normal uppercase leading-none tracking-[-0.045em] text-[#f9edff] drop-shadow-[0_0_10px_rgba(210,145,255,0.9)]"
                        >
                            CONTATO
                        </h2>

                        <div className="mt-3 flex items-center justify-center gap-3">
                            <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#cda2e6] sm:w-12" />

                            <p className="whitespace-nowrap font-serif text-sm text-[#f0e0f7] sm:text-base">
                                Entre em contato comigo
                            </p>

                            <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#cda2e6] sm:w-12" />
                        </div>
                    </header>

                    <div className="relative z-10">
                        {status === "success" ? (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.9
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1
                                }}
                                role="status"
                                aria-live="polite"
                                className="flex min-h-[260px] flex-col items-center justify-center text-center"
                            >
                                <CheckCircle2
                                    size={52}
                                    strokeWidth={1.2}
                                    className="mb-5 text-[#e1b1ff] drop-shadow-[0_0_15px_rgba(190,107,255,0.8)]"
                                />

                                <h3 className="mb-3 font-serif text-2xl text-[#f8eaff]">
                                    Mensagem enviada!
                                </h3>

                                <p className="mb-6 max-w-sm text-sm text-[#d0bedc]">
                                    Sua mensagem foi enviada com sucesso.
                                    Obrigada por entrar em contato!
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setStatus(null)}
                                    className="rounded-full border border-[#d7a2ff] px-6 py-2.5 font-serif text-sm text-[#f0d6ff] transition-all hover:bg-[#a65bea]/20"
                                >
                                    Enviar outra mensagem
                                </button>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-3"
                            >
                                <div className="relative">
                                    <label
                                        htmlFor="name"
                                        className="sr-only"
                                    >
                                        Seu nome
                                    </label>

                                    <UserRound
                                        size={19}
                                        strokeWidth={1.7}
                                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#f0e2f7]"
                                    />

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Seu nome"
                                        autoComplete="name"
                                        required
                                        className={inputStyle}
                                    />
                                </div>

                                <div className="relative">
                                    <label
                                        htmlFor="email"
                                        className="sr-only"
                                    >
                                        Email
                                    </label>

                                    <Mail
                                        size={19}
                                        strokeWidth={1.7}
                                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#f0e2f7]"
                                    />

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        autoComplete="email"
                                        required
                                        className={inputStyle}
                                    />
                                </div>

                                <div className="relative">
                                    <label
                                        htmlFor="message"
                                        className="sr-only"
                                    >
                                        Sua mensagem
                                    </label>

                                    <MessageCircle
                                        size={19}
                                        strokeWidth={1.7}
                                        className="pointer-events-none absolute left-4 top-4 text-[#f0e2f7]"
                                    />

                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Sua mensagem..."
                                        required
                                        rows={4}
                                        className={`${inputStyle} min-h-[110px] resize-none`}
                                    />
                                </div>

                                <div className="pt-2">
                                    <motion.button
                                        type="submit"
                                        disabled={status === "loading"}
                                        whileHover={{
                                            scale: 1.02
                                        }}
                                        whileTap={{
                                            scale: 0.98
                                        }}
                                        className="group relative flex min-h-[52px] w-full items-center justify-center overflow-hidden rounded-full border-2 border-[#efc27e] bg-gradient-to-r from-[#271337] via-[#49205f] to-[#271337] px-10 font-serif text-sm font-semibold uppercase tracking-[0.03em] text-[#fff0ff] shadow-[0_0_8px_rgba(235,184,255,0.5),inset_0_0_15px_rgba(177,93,245,0.2)] transition-all duration-300 hover:border-[#ffe3aa] hover:shadow-[0_0_22px_rgba(204,122,255,0.7)] disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                                    >
                                        <Lotus className="absolute left-3 h-7 w-8 text-[#eec48c] sm:left-5" />

                                        <span className="relative z-10">
                                            {status === "loading"
                                                ? "Enviando..."
                                                : "ENVIAR MENSAGEM"}
                                        </span>

                                        <Lotus className="absolute right-3 h-7 w-8 text-[#eec48c] sm:right-5" />
                                    </motion.button>
                                </div>

                                {status === "error" && (
                                    <p
                                        role="alert"
                                        className="text-center text-sm font-medium text-red-300"
                                    >
                                        Erro ao enviar sua mensagem.
                                        Tente novamente.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </motion.article>
            </div>
        </section>
    );
}