"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20 text-center">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl"
            >
                <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
                    Stop Being an <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Inbox Manager</span>.
                    <br />
                    Start Being a <span className="text-white">CEO</span>.
                </h1>
                <p className="mb-10 text-xl text-slate-400 sm:text-2xl">
                    We build Sales Automation Systems for F-commerce.
                    <br className="hidden sm:block" />
                    Auto-Courier Booking, Instant SMS, and Zero Downtime.
                </p>
                <motion.a
                    href="https://hue-house.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-300 inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold"
                >
                    See Live Demo
                    <ArrowRight className="h-5 w-5" />
                </motion.a>
            </motion.div>
        </section>
    );
}
