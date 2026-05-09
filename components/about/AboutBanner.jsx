'use client'

import { motion } from 'framer-motion'

export default function AboutBanner() {
    return (
        <div className="relative w-full h-screen bg-[#0a0510]">

            <motion.img
                src="/fundo-pattern.png"
                alt=""
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                className="absolute inset-0 w-full h-full object-cover"
            />

            <motion.img
                src="/butterfly-element.png"
                alt=""
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 0.5 }}
                transition={{ duration: 1 }}
                className="absolute left-10 bottom-0 h-64 w-auto object-contain"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0510] via-transparent to-transparent" />
        </div>
    )
}
