"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Zap, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const supabase = createClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError("Por favor ingresa tu correo electrónico.");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithOtp({
                email,
                options: {
                    shouldCreateUser: true, // Allow signups via magic link
                    emailRedirectTo: `${window.location.origin}/auth/callback`,
                },
            });

            if (error) throw error;
            setIsSuccess(true);
        } catch (err: any) {
            setError(err.message || "Ocurrió un error al enviar el enlace mágico.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen hero-gradient flex flex-col">
            <Navbar />

            <div className="flex-1 flex items-center justify-center p-4 mt-16">
                <div
                    className="w-full max-w-md p-8 rounded-3xl relative overflow-hidden"
                    style={{
                        background: "rgba(13,27,42,0.8)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                    }}
                >
                    {/* Glow effect */}
                    <div
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                        style={{ background: "var(--yellow)" }}
                    />
                    <div
                        className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                        style={{ background: "#3B82F6" }}
                    />

                    {/* Logo */}
                    <div className="flex justify-center mb-6 relative z-10">
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center"
                            style={{ background: "var(--yellow)" }}
                        >
                            <Zap size={32} style={{ color: "var(--navy)" }} />
                        </div>
                    </div>

                    <h1 className="font-fredoka text-3xl text-white text-center mb-2 relative z-10">
                        ¡Hola de nuevo! 👋
                    </h1>
                    <p className="text-white/60 text-center text-sm mb-8 relative z-10">
                        Ingresa sin contraseña usando un Enlace Mágico
                    </p>

                    {isSuccess ? (
                        <div className="relative z-10 bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                            <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
                            <h3 className="text-white font-semibold mb-2">¡Revisa tu correo!</h3>
                            <p className="text-white/60 text-sm">
                                Te hemos enviado un enlace mágico a <strong>{email}</strong>. Haz clic en el enlace para iniciar sesión al instante.
                            </p>
                        </div>
                    ) : (
                        <form className="relative z-10 space-y-4" onSubmit={handleLogin}>
                            <div>
                                <label className="block text-white/70 text-sm font-semibold mb-1.5 ml-1">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="tu@email.com"
                                    required
                                    className="w-full px-4 py-3 rounded-xl outline-none transition-all placeholder:text-white/20 text-white"
                                    style={{
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                    }}
                                    onFocus={(e) => (e.target.style.borderColor = "var(--yellow)")}
                                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                                />
                            </div>

                            {error && (
                                <div className="text-red-400 text-sm font-medium bg-red-400/10 p-3 rounded-xl">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="btn-primary w-full py-3.5 mt-4 text-base flex justify-center items-center"
                            >
                                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Enviar Enlace Mágico ✨"}
                            </button>
                        </form>
                    )}

                    <div className="mt-8 text-center text-sm relative z-10">
                        <span className="text-white/50">¿No tienes cuenta? </span>
                        <Link href="/planes" className="text-yellow-400 font-semibold hover:underline">
                            Comienza gratis
                        </Link>
                    </div>
                </div>
            </div>

            <footer className="py-6 text-center text-white/30 text-sm border-t border-white/06">
                <Link href="/" className="hover:text-white transition-colors">
                    ← Volver a inicio
                </Link>
            </footer>
        </main>
    );
}
