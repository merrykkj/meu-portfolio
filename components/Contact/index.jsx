'use client'
import ContactBanner from './ContactBanner'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    const [status, setStatus] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('loading')

        const formData = new FormData(e.target)

        try {
            const response = await fetch("https://formspree.io/f/xjglldlp", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            })

            if (response.ok) {
                setStatus('success')
                e.target.reset()
            } else {
                setStatus('error')
            }
        } catch (error) {
            setStatus('error')
        }
    }

    return (
        <section
            id="contato"
            aria-labelledby="contact-title"
            className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
        >
            <ContactBanner />

            <div className="container mx-auto px-6 z-40 relative flex justify-center">
                <motion.article
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-black/90 p-10 rounded-2xl shadow-[0_0_50px_rgba(37,99,235,0.2)] w-full max-w-lg border border-blue-900/30 backdrop-blur-md"
                >
                    <header>
                        <h2
                            id="contact-title"
                            className='text-purple-600 text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(37,99,235,0.6)] text-center'
                        >
                            Contato
                        </h2>
                    </header>

                    {status === 'success' ? (
                        <div
                            role="status"
                            aria-live="polite"
                            className="text-center py-10"
                        >
                            <h3 className="text-white text-2xl font-bold mb-4">
                                ENVIADO COM SUCESSO!
                            </h3>
                            <button
                                onClick={() => setStatus(null)}
                                className="text-purple-500 font-bold border-b border-purple-500"
                            >
                                Enviar outra
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className='space-y-5'>
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Seu nome
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    required
                                    type="text"
                                    placeholder='Seu nome'
                                    className='w-full p-4 bg-white/10 border border-white/20 text-white rounded-xl outline-none focus:border-blue-500 focus:bg-white/20 transition-all placeholder:text-gray-400'
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    required
                                    type="email"
                                    placeholder='Email'
                                    className='w-full p-4 bg-white/10 border border-white/20 text-white rounded-xl outline-none focus:border-blue-500 focus:bg-white/20 transition-all placeholder:text-gray-400'
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Sua mensagem
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder='Sua mensagem...'
                                    className='w-full p-4 bg-white/10 border border-white/20 text-white rounded-xl h-40 outline-none focus:border-blue-500 focus:bg-white/20 transition-all placeholder:text-gray-400 resize-none'
                                ></textarea>
                            </div>

                            <button
                                disabled={status === 'loading'}
                                className="w-full bg-purple-600 hover:bg-purple-500 text-white py-4 rounded-xl font-black text-xl transition-all shadow-[0_0_15px_rgba(147,51,234,0.4)] hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] uppercase tracking-tighter disabled:opacity-50"
                            >
                                {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                            </button>

                            {status === 'error' && (
                                <p role="alert" className="text-red-500 text-center font-bold">
                                    Erro ao enviar. Tente novamente.
                                </p>
                            )}
                        </form>
                    )}
                </motion.article>
            </div>
        </section>
    )
}