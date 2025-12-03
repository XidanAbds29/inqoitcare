import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inqo IT Care - Sales Automation for F-commerce",
  description: "Stop Being an Inbox Manager. Start Being a CEO. We build Sales Automation Systems for F-commerce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "bg-slate-950 text-slate-50 antialiased")}>
        {children}
      </body>
    </html>
  );
}
