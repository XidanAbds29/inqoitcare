import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
  variable: "--font-hind-siliguri",
});

export const metadata: Metadata = {
  title: "Inqo IT Care - Sales Automation for F-commerce",
  description: "Stop Being an Inbox Manager. Start Being a CEO. We build Sales Automation Systems for F-commerce with Auto-Courier Booking, Instant SMS, and Zero Downtime.",
  keywords: ["Sales Automation", "F-commerce", "Bangladesh", "Inqo IT Care", "Courier Integration", "Steadfast API", "Business Automation"],
  openGraph: {
    title: "Inqo IT Care - Sales Automation for F-commerce",
    description: "Automate your F-commerce sales with Inqo IT Care. Stop manual work, start growing.",
    url: "https://inqoitcare.com", // Replace with actual URL if known, or keep generic
    siteName: "Inqo IT Care",
    images: [
      {
        url: "/hero-person.png", // Using the CEO image as a preview
        width: 1200,
        height: 630,
        alt: "Inqo IT Care Sales Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inqo IT Care - Sales Automation for F-commerce",
    description: "Stop Being an Inbox Manager. Start Being a CEO. Automate your F-commerce business today.",
    images: ["/hero-person.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(inter.className, hindSiliguri.variable, "bg-background text-foreground antialiased")}>
        {children}
      </body>
    </html>
  );
}
