import Navbar from "@/components/Navbar";
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from "next/link";
import { User, LogOut, Download, Star, Settings } from "lucide-react";

export default async function MiCuentaPage() {
    const cookieStore = await cookies()
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value
                },
            },
        }
    )

    const { data: { session } } = await supabase.auth.getSession()

    // Si no hay sesión, regresamos al login
    if (!session) {
        redirect('/login')
    }

    const unmaskedEmail = session.user.email || 'Usuario';
    const emailParts = unmaskedEmail.split('@');
    const displayEmail = emailParts.length === 2 ? `${emailParts[0].substring(0, 3)}***@${emailParts[1]}` : unmaskedEmail;

    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />

            <div className="pt-28 pb-16 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Header del Dashboard */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
                        <div className="flex items-center gap-4">
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                                style={{ background: "rgba(59,130,246,0.15)", color: "#3B82F6", border: "1px solid rgba(59,130,246,0.3)" }}
                            >
                                {unmaskedEmail.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h1 className="font-fredoka text-3xl text-white mb-1">Mi Cuenta</h1>
                                <p className="text-white/60 flex items-center gap-2">
                                    <User size={14} />
                                    {displayEmail}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Link href="/planes" className="btn-primary !py-2 !px-4 !text-sm flex items-center gap-2">
                                <Star size={16} /> Ver Planes V2/V3
                            </Link>
                        </div>
                    </div>

                    {/* Grid de opciones */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Status Card */}
                        <div className="glass p-6 rounded-2xl md:col-span-2">
                            <h2 className="font-fredoka text-xl text-white mb-4">Estado de tu Plan</h2>

                            <div className="p-4 rounded-xl mb-6" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-bold text-green-400 mb-1">Capa Gratuita Activa</p>
                                        <p className="text-sm text-green-400/70">Tienes acceso a 3 ejercicios diarios por bloque.</p>
                                    </div>
                                    <div className="text-3xl">🌱</div>
                                </div>
                            </div>

                            <p className="text-white/70 text-sm mb-4">
                                Sube de nivel para desbloquear simuladores ilimitados, guías completas para padres y descarga de cuadernillos en PDF sin marcas de agua.
                            </p>
                            <Link href="/planes" className="text-yellow-400 font-semibold hover:underline text-sm flex items-center gap-1">
                                Ver beneficios premium →
                            </Link>
                        </div>

                        {/* Quick links */}
                        <div className="glass p-6 rounded-2xl flex flex-col gap-4">
                            <h2 className="font-fredoka text-xl text-white mb-2">Accesos rápidos</h2>

                            <Link href="/#grados" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-white/80">
                                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><Star size={18} /></div>
                                <span className="font-medium text-sm">Continuar aprendiendo</span>
                            </Link>

                            <Link href="/cuadernillos" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-white/80">
                                <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400"><Download size={18} /></div>
                                <span className="font-medium text-sm">Mis Descargas PDF</span>
                            </Link>

                            <div className="mt-auto pt-4 border-t border-white/10">
                                <form action="/auth/signout" method="POST">
                                    <button type="submit" className="flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold text-sm transition-colors w-full p-2 hover:bg-red-400/10 rounded-lg">
                                        <LogOut size={16} /> Cerrar Sesión
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="py-6 text-center text-white/30 text-sm border-t border-white/06 mt-auto">
                <Link href="/" className="hover:text-white transition-colors">
                    ← Volver a inicio
                </Link>
            </footer>
        </main>
    );
}
