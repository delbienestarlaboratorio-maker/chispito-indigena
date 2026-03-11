"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Zap, User, LogOut } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const supabase = createClient();

        // Initial session check
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleSignOut = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
    };

    const links = [
        { href: "/#grados", label: "Grados" },
        { href: "/#materias", label: "Materias" },
        { href: "/cuadernillos", label: "Cuadernillos PDF", badge: true },
        { href: "/universo", label: "🌌 Universo", special: true },
        { href: "/planes", label: "Planes 💎" },
        { href: "/blog", label: "Blog" },
        { href: "/maestros", label: "👩‍🏫 Maestros" },
        { href: "/#papa", label: "Para Papás" },
    ];
    type NavLink = { href: string; label: string; special?: boolean; badge?: boolean };

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50"
            style={{
                background: "rgba(13, 27, 42, 0.92)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div
                            className="w-9 h-9 rounded-full flex items-center justify-center"
                            style={{ background: "var(--yellow)" }}
                        >
                            <Zap size={20} style={{ color: "var(--navy)" }} />
                        </div>
                        <span
                            className="font-fredoka text-xl tracking-wide"
                            style={{ color: "var(--yellow)" }}
                        >
                            Chispito.mx
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-6">
                        {(links as NavLink[]).map((l) => (
                            l.special ? (
                                <Link key={l.href} href={l.href}>
                                    <motion.span
                                        animate={{ opacity: [1, 0.7, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="text-sm font-bold px-3 py-1 rounded-full"
                                        style={{ background: "rgba(167,139,250,0.2)", color: "#C4B5FD", border: "1px solid rgba(167,139,250,0.4)" }}
                                    >
                                        {l.label}
                                    </motion.span>
                                </Link>
                            ) : l.badge ? (
                                <Link key={l.href} href={l.href} className="flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition-colors">
                                    {l.label}
                                    <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold" style={{ background: "#22C55E30", color: "#22C55E" }}>GRATIS</span>
                                </Link>
                            ) : (
                                <Link key={l.href} href={l.href} className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
                                    {l.label}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link
                                    href="/mi-cuenta"
                                    className="text-sm text-white/70 hover:text-white font-semibold flex items-center gap-2 transition-colors"
                                >
                                    <User size={16} />
                                    Mi Cuenta
                                </Link>
                                <button
                                    onClick={handleSignOut}
                                    className="text-sm text-red-400 hover:text-red-300 font-semibold flex items-center gap-2 transition-colors"
                                >
                                    <LogOut size={16} />
                                    Salir
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="text-sm text-white/70 hover:text-white font-semibold transition-colors"
                            >
                                Iniciar Sesión
                            </Link>
                        )}
                        <Link href="/planes" className="btn-primary !py-2 !px-5 !text-sm">
                            ¡Prueba Gratis! 🚀
                        </Link>
                    </div>

                    {/* Mobile menu btn */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setOpen(!open)}
                        aria-label="Menu"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-3"
                    style={{ background: "rgba(13,27,42,0.98)" }}
                >
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="text-white/80 font-semibold py-2 border-b border-white/10"
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </Link>
                    ))}
                    {user ? (
                        <>
                            <Link
                                href="/mi-cuenta"
                                className="text-white/80 font-semibold py-2 border-b border-white/10 flex items-center gap-2"
                                onClick={() => setOpen(false)}
                            >
                                <User size={18} />
                                Mi Cuenta
                            </Link>
                            <button
                                onClick={() => {
                                    handleSignOut();
                                    setOpen(false);
                                }}
                                className="text-red-400 font-semibold py-2 border-b border-white/10 text-left flex items-center gap-2"
                            >
                                <LogOut size={18} />
                                Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <Link
                            href="/login"
                            className="text-white/80 font-semibold py-2 border-b border-white/10"
                            onClick={() => setOpen(false)}
                        >
                            Iniciar Sesión
                        </Link>
                    )}
                    <Link href="/planes" className="btn-primary text-center mt-2" onClick={() => setOpen(false)}>
                        ¡Prueba Gratis! 🚀
                    </Link>
                </motion.div>
            )}
        </nav>
    );
}
