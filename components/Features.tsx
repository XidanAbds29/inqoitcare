"use client";

import { motion } from "framer-motion";
import { Keyboard, Hourglass, EyeOff, Truck, Bell, Zap } from "lucide-react";

const painPoints = [
    {
        icon: Keyboard,
        title: "Manual Typing",
        description: "You waste 2 hours/day typing Steadfast addresses.",
    },
    {
        icon: Hourglass,
        title: "Slow Speed",
        description: "Wordpress sites crash during Eid sales.",
    },
    {
        icon: EyeOff,
        title: "Blind Ads",
        description: "Without Pixel/CAPI, you are burning ad money.",
    },
];

const solutions = [
    {
        icon: Truck,
        title: "Steadfast Integration",
        description: "Orders sent to courier automatically.",
    },
    {
        icon: Bell,
        title: "Notification System",
        description: "You get a Telegram alert instantly.",
    },
    {
        icon: Zap,
        title: "Next.js Speed",
        description: "Loads in 0.8 seconds.",
    },
];

export default function Features() {
    return (
        <>
            {/* Pain Section */}
            <section className="py-20 px-4">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            The <span className="text-red-500">Problem</span> with Cheap Websites
                        </h2>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {painPoints.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center hover:border-slate-700 transition-colors"
                            >
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-red-400">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-slate-100">{item.title}</h3>
                                <p className="text-slate-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-20 px-4 bg-slate-900/30">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Inqo Solution</span>
                        </h2>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {solutions.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 text-cyan-400 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                                    <item.icon className="h-10 w-10" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-slate-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
