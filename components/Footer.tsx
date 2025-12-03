export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-12 text-center text-slate-400">
            <div className="mx-auto max-w-6xl px-4">
                <p className="mb-4 text-lg font-semibold text-white">Inqo IT Care</p>
                <p className="mb-8 text-sm">
                    Empowering F-commerce businesses with automation.
                </p>
                <div className="flex justify-center gap-6 text-sm">
                    <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
                    <a href="#" className="hover:text-indigo-400">Terms of Service</a>
                    <a href="https://wa.me/+8801998079515" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">Contact Us</a>
                </div>
                <p className="mt-8 text-xs text-slate-600">
                    © {new Date().getFullYear()} Inqo IT Care. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
