import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Aviso de Privacidad — Chispito.mx",
    description: "Aviso de privacidad de Chispito.mx. Cómo protegemos tus datos y los de tu familia.",
};

export default function PrivacidadPage() {
    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />
            <section className="pt-28 pb-20 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="text-5xl mb-4">🔏</div>
                        <h1 className="text-4xl font-black text-white mb-3">Aviso de Privacidad</h1>
                        <p className="text-white/50">Última actualización: 1 de enero de 2025</p>
                        <p className="text-white/40 text-sm mt-1">De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</p>
                    </div>

                    <div className="space-y-8 text-white/80 leading-relaxed">
                        {/* Identidad del responsable */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">I. Identidad y domicilio del Responsable</h2>
                            <p className="mb-3"><strong className="text-white">Chispito.mx</strong> es el responsable del tratamiento de sus datos personales.</p>
                            <ul className="list-none space-y-2">
                                <li>🌐 Sitio web: <strong className="text-white">https://chispito.mx</strong></li>
                                <li>📧 Correo de contacto: <strong className="text-white">contacto@chispito.mx</strong></li>
                                <li>📍 Ciudad de México, México</li>
                            </ul>
                        </div>

                        {/* Datos que se recaban */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">II. Datos personales que se recaban</h2>
                            <p className="mb-3">Chispito.mx <strong className="text-white">no requiere registro</strong> para acceder a sus ejercicios. Sin embargo, al utilizar la plataforma, podemos recopilar de forma automática:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-white">Datos técnicos:</strong> dirección IP, tipo de navegador, sistema operativo, páginas visitadas, tiempo de sesión.</li>
                                <li><strong className="text-white">Preferencias de uso:</strong> grado seleccionado, materias visitadas, progreso en ejercicios (almacenados localmente en su dispositivo via localStorage).</li>
                                <li><strong className="text-white">Datos opcionales:</strong> Si utiliza nuestro formulario de contacto, nombre y correo electrónico.</li>
                            </ul>
                            <p className="mt-3 text-white/60 text-sm">En ningún caso recopilamos datos personales de menores de edad sin el consentimiento expreso de sus padres o tutores legales.</p>
                        </div>

                        {/* Finalidades */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">III. Finalidades del tratamiento</h2>
                            <p className="mb-3">Sus datos son utilizados para:</p>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-semibold text-white">Finalidades primarias (necesarias):</p>
                                    <ul className="list-disc pl-6 space-y-1 mt-2">
                                        <li>Mejorar la experiencia de navegación y el rendimiento del sitio</li>
                                        <li>Recordar sus preferencias de grado y materia</li>
                                        <li>Responder solicitudes de contacto o soporte</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Finalidades secundarias (opcionales):</p>
                                    <ul className="list-disc pl-6 space-y-1 mt-2">
                                        <li>Analizar estadísticas de uso para mejorar el contenido educativo</li>
                                        <li>Enviar información sobre actualizaciones del sitio (solo si lo solicita)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Cookies */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">IV. Uso de cookies y tecnologías similares</h2>
                            <p className="mb-3">Utilizamos las siguientes tecnologías:</p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/20">
                                            <th className="text-left py-2 text-white/60 font-semibold">Tipo</th>
                                            <th className="text-left py-2 text-white/60 font-semibold">Propósito</th>
                                            <th className="text-left py-2 text-white/60 font-semibold">Duración</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        <tr>
                                            <td className="py-2.5 text-white">Esenciales</td>
                                            <td className="py-2.5">Funcionalidad básica del sitio</td>
                                            <td className="py-2.5">Sesión</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2.5 text-white">LocalStorage</td>
                                            <td className="py-2.5">Guardar progreso y preferencias</td>
                                            <td className="py-2.5">Permanente</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2.5 text-white">Analíticas</td>
                                            <td className="py-2.5">Estadísticas anónimas de uso</td>
                                            <td className="py-2.5">13 meses</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4 text-sm text-white/60">Puede configurar su navegador para rechazar cookies, aunque esto puede afectar algunas funciones del sitio.</p>
                        </div>

                        {/* Derechos ARCO */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">V. Derechos ARCO</h2>
                            <p className="mb-3">Usted tiene derecho a <strong className="text-white">Acceder, Rectificar, Cancelar y Oponerse</strong> al tratamiento de sus datos personales (derechos ARCO), de conformidad con la LFPDPPP.</p>
                            <p className="mb-3">Para ejercer estos derechos, envíe un correo a <strong className="text-white">contacto@chispito.mx</strong> indicando:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Nombre completo del titular</li>
                                <li>Derecho que desea ejercer</li>
                                <li>Descripción clara de lo que solicita</li>
                            </ul>
                            <p className="mt-3">Responderemos en un plazo máximo de <strong className="text-white">20 días hábiles</strong>.</p>
                        </div>

                        {/* Menores */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">VI. Privacidad de menores de edad</h2>
                            <p className="mb-3">La protección de la privacidad de los niños es una prioridad para Chispito.mx. Según la LFPDPPP y el Artículo 4° Constitucional sobre derechos de la niñez:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>No recopilamos intencionalmente datos de menores de 13 años</li>
                                <li>Recomendamos que los padres supervisen el uso del sitio por parte de sus hijos</li>
                                <li>Si detectamos que hemos recopilado datos de un menor sin consentimiento parental, los eliminaremos de inmediato</li>
                            </ul>
                        </div>

                        {/* Transferencias */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">VII. Transferencias de datos</h2>
                            <p>Chispito.mx <strong className="text-white">no vende, renta ni transfiere</strong> sus datos personales a terceros con fines comerciales. Solo podemos compartir información con proveedores de servicios técnicos que nos ayudan a operar el sitio (hosting, analíticas), bajo estrictas obligaciones de confidencialidad.</p>
                        </div>

                        {/* Cambios */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">VIII. Cambios al aviso de privacidad</h2>
                            <p>Cualquier modificación a este aviso será publicada en esta página con la fecha de actualización correspondiente. Le recomendamos revisarlo periódicamente.</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/terminos" className="px-6 py-3 rounded-xl font-bold text-center transition-all hover:opacity-90"
                            style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>
                            📋 Términos y Condiciones
                        </Link>
                        <Link href="/" className="px-6 py-3 rounded-xl font-bold text-center transition-all hover:opacity-90"
                            style={{ background: "#FFD60A", color: "#0D1B2A" }}>
                            ⚡ Volver a Chispito
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
