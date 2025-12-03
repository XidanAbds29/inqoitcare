"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
    "Premium Next.js Website",
    "Steadfast Courier API Integration",
    "Instant SMS Gateway Setup",
    "Free Domain & Hosting Setup",
    "Facebook Pixel & CAPI Setup",
    "Lifetime Technical Support",
];

export default function Pricing() {
    return (
        <section className="py-20 px-4">
            <div className="mx-auto max-w-3xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-slate-900 p-10 shadow-[0_0_50px_rgba(99,102,241,0.15)]"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[200px] w-[200px] rounded-full bg-indigo-500/20 blur-[80px]" />

                    <h2 className="mb-2 text-2xl font-bold text-indigo-400">The Automation Package</h2>
                    <h3 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                        <span className="text-2xl text-slate-500 line-through mr-4">50,000 BDT</span>
                        Portfolio Offer
                    </h3>

                    <p className="mb-8 text-slate-400">
                        Get the complete system at a fraction of the cost. Limited time only.
                    </p>

                    <ul className="mb-10 space-y-4 text-left">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center text-slate-200">
                                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20">
                                    <Check className="h-4 w-4 text-green-500" />
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <motion.a
                        href="https://wa.me/+8801998079515"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-300 w-full rounded-xl py-4 text-xl font-bold block"
                    >
                        Book Your Call Now
                    </motion.a>

                    <p className="mt-4 text-sm text-slate-500">
                        No hidden fees. One-time payment.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
