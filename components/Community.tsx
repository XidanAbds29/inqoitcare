"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const users = [
    {
        name: "Sadia Islam",
        role: "F-commerce Owner",
        image: "/user-1.png",
        quote: "Inqo changed how I manage my orders. It's a lifesaver!",
    },
    {
        name: "Rahim Ahmed",
        role: "Entrepreneur",
        image: "/user-2.png",
        quote: "The automation is seamless. My sales have doubled.",
    },
];

export default function Community() {
    return (
        <section className="py-20 px-4 bg-muted/5">
            <div className="mx-auto max-w-6xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                        Trusted by <span className="text-primary">Smart Entrepreneurs</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Join hundreds of business owners who have automated their sales process.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    {users.map((user, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 shadow-lg hover:border-primary/50 transition-colors"
                        >
                            <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-primary">
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <blockquote className="mb-4 text-lg italic text-foreground">
                                "{user.quote}"
                            </blockquote>
                            <div className="text-center">
                                <div className="font-bold text-primary">{user.name}</div>
                                <div className="text-sm text-muted-foreground">{user.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
