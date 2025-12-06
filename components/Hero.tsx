"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20 lg:flex-row lg:justify-between lg:px-20 lg:text-left text-center">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-2xl lg:w-1/2"
            >
                <div className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
                    <span className="font-hind text-sm font-medium text-primary">
                        🚀 বাংলাদেশের সেরা সেলস অটোমেশন সিস্টেম
                    </span>
                </div>
                <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
                    Stop Being an <span className="text-primary">Inbox Manager</span>.
                    <br />
                    Start Being a <span className="text-foreground">CEO</span>.
                </h1>
                <p className="mb-10 text-xl text-muted-foreground sm:text-2xl">
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
                    className="relative overflow-hidden bg-primary text-primary-foreground shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300 inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold"
                >
                    See Live Demo
                    <ArrowRight className="h-5 w-5" />
                </motion.a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end"
            >
                <div className="relative h-[400px] w-[300px] sm:h-[500px] sm:w-[400px] overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl shadow-primary/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                    <img
                        src="/hero-person.png"
                        alt="Successful CEO"
                        className="h-full w-full object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
}
