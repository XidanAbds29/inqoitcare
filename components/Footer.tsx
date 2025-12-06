export default function Footer() {
    return (
        <footer className="border-t border-border bg-background py-12 text-center text-muted-foreground">
            <div className="mx-auto max-w-6xl px-4">
                <p className="mb-4 text-lg font-semibold text-foreground">Inqo IT Care</p>
                <p className="mb-8 text-sm">
                    Empowering F-commerce businesses with automation.
                </p>
                <div className="flex justify-center gap-6 text-sm">
                    <a href="#" className="hover:text-primary">Privacy Policy</a>
                    <a href="#" className="hover:text-primary">Terms of Service</a>
                    <a href="https://wa.me/+8801998079515" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Contact Us</a>
                </div>
                <p className="mt-8 text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Inqo IT Care. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
