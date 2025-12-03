"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Do I need to pay monthly?",
        answer: "No. This is a one-time payment for the complete system setup. You only pay for your domain and hosting renewal annually (approx. 2000-3000 BDT).",
    },
    {
        question: "Can I edit products myself?",
        answer: "Yes! We provide an easy-to-use Admin Dashboard where you can add, edit, or delete products, manage orders, and track sales without any coding knowledge.",
    },
    {
        question: "How long does it take to deliver?",
        answer: "We usually deliver the complete system within 3-5 business days after receiving all your requirements.",
    },
    {
        question: "Is the Steadfast integration included?",
        answer: "Yes, the Steadfast Courier API integration is included in this package. Orders will be automatically sent to your Steadfast panel.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 px-4 bg-slate-900/30">
            <div className="mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Questions</span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between p-6 text-left font-semibold text-slate-200 hover:bg-slate-800/50"
                            >
                                {faq.question}
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-indigo-400" />
                                ) : (
                                    <Plus className="h-5 w-5 text-indigo-400" />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "px-6 text-slate-400 transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                {faq.answer}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
