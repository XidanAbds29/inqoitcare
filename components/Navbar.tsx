"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md"
        >
            <Link href="/" className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                    <Image
                        src="/logo.png"
                        alt="Inqo IT Care Logo"
                        fill
                        className="object-cover"
                    />
                </div>
                <span className="text-xl font-bold text-foreground">Inqo IT Care</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
                <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    Features
                </a>
                <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                </a>
                <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                </a>
            </div>

            <a
                href="https://wa.me/+8801998079515"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
                Book Call
            </a>
        </motion.nav>
    );
}
