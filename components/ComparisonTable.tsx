"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    { name: "Speed", generic: "Slow (3s+)", inqo: "Instant (0.8s)" },
    { name: "Courier Sync", generic: false, inqo: true },
    { name: "Security", generic: "Vulnerable", inqo: "Enterprise Grade" },
    { name: "Monthly Fees", generic: "Hidden Costs", inqo: "Zero" },
];

export default function ComparisonTable() {
    return (
        <section className="py-20 px-4">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Inqo IT Care</span>?
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50"
                >
                    <div className="grid grid-cols-3 border-b border-slate-800 bg-slate-900 p-6 text-center font-bold">
                        <div className="text-left text-slate-400">Feature</div>
                        <div className="text-slate-400">Generic Agency</div>
                        <div className="text-indigo-400">Inqo IT Care</div>
                    </div>

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn(
                                "grid grid-cols-3 items-center p-6 text-center transition-colors hover:bg-slate-800/30",
                                index !== features.length - 1 && "border-b border-slate-800"
                            )}
                        >
                            <div className="text-left font-medium text-slate-200">{feature.name}</div>

                            <div className="flex justify-center text-slate-400">
                                {typeof feature.generic === "boolean" ? (
                                    feature.generic ? (
                                        <Check className="h-6 w-6 text-green-500" />
                                    ) : (
                                        <X className="h-6 w-6 text-red-500" />
                                    )
                                ) : (
                                    <span className="text-red-400">{feature.generic}</span>
                                )}
                            </div>

                            <div className="flex justify-center font-bold text-white">
                                {typeof feature.inqo === "boolean" ? (
                                    feature.inqo ? (
                                        <div className="rounded-full bg-green-500/20 p-1">
                                            <Check className="h-6 w-6 text-green-500" />
                                        </div>
                                    ) : (
                                        <X className="h-6 w-6 text-red-500" />
                                    )
                                ) : (
                                    <span className="text-green-400">{feature.inqo}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
