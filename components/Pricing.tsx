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
                    className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-10 shadow-[0_0_50px_rgba(255,215,0,0.15)]"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[200px] w-[200px] rounded-full bg-primary/20 blur-[80px]" />

                    <h2 className="mb-2 text-2xl font-bold text-primary">The Automation Package</h2>
                    <h3 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
                        <span className="text-2xl text-muted-foreground line-through mr-4">50,000 BDT</span>
                        Portfolio Offer
                    </h3>

                    <p className="mb-8 text-muted-foreground">
                        Get the complete system at a fraction of the cost. Limited time only.
                    </p>

                    <ul className="mb-10 space-y-4 text-left">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center text-foreground">
                                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                                    <Check className="h-4 w-4 text-primary" />
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
                        className="relative overflow-hidden bg-primary text-primary-foreground shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300 w-full rounded-xl py-4 text-xl font-bold block"
                    >
                        Book Your Call Now
                    </motion.a>

                    <p className="mt-4 text-sm text-muted-foreground">
                        No hidden fees. One-time payment.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
