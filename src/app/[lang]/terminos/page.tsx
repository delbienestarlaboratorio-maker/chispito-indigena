import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Términos y Condiciones — Chispito.mx",
    description: "Lee los términos y condiciones de uso de la plataforma educativa Chispito.mx.",
};

export default function TerminosPage() {
    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />
            <section className="pt-28 pb-20 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="text-5xl mb-4">📋</div>
                        <h1 className="text-4xl font-black text-white mb-3">Términos y Condiciones</h1>
                        <p className="text-white/50">Última actualización: 1 de enero de 2025</p>
                    </div>

                    <div className="space-y-8 text-white/80 leading-relaxed">
                        {/* Sección 1 */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">1. Aceptación de los términos</h2>
                            <p className="mb-3">Al acceder y utilizar la plataforma educativa <strong className="text-white">Chispito.mx</strong>, usted acepta estar sujeto a estos Términos y Condiciones de uso. Si no está de acuerdo con alguno de estos términos, le solicitamos no utilizar el sitio.</p>
                            <p>Chispito.mx es una plataforma educativa gratuita diseñada para apoyar a estudiantes de educación básica en México, alineada al plan de estudios de la Secretaría de Educación Pública (SEP).</p>
                        </div>

                        {/* Sección 2 */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">2. Uso de la plataforma</h2>
                            <p className="mb-3">Chispito.mx está destinada exclusivamente para:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Estudiantes de preescolar, primaria y secundaria en México</li>
                                <li>Padres de familia y tutores que acompañan el aprendizaje de sus hijos</li>
                                <li>Docentes que deseen utilizar los recursos como material de apoyo</li>
                            </ul>
                            <p className="mt-3">Queda prohibido el uso de esta plataforma para fines comerciales, reproducción masiva del contenido o cualquier actividad que viole los derechos de autor.</p>
                        </div>

                        {/* Sección 3 */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">3. Contenido educativo</h2>
                            <p className="mb-3">Todo el contenido de Chispito.mx está elaborado con base en el plan de estudios oficial de la SEP para el ciclo escolar 2025-2026 (Plan de Estudios 2022 - Nueva Escuela Mexicana).</p>
                            <p className="mb-3">Nos comprometemos a mantener el contenido actualizado y alineado con los programas oficiales. Sin embargo, recomendamos siempre verificar con el docente cualquier duda específica sobre el temario.</p>
                            <p>Los ejercicios son de carácter orientativo y no sustituyen la educación formal impartida en las instituciones educativas.</p>
                        </div>

                        {/* Sección 4 */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">4. Privacidad y datos personales</h2>
                            <p className="mb-3">Chispito.mx respeta su privacidad y la de su familia. No recopilamos información personal identificable de los menores de edad sin el consentimiento de sus padres o tutores.</p>
                            <p>Para más información, consulte nuestro{" "}
                                <Link href="/privacidad" className="text-yellow-400 underline">Aviso de Privacidad</Link>.
                            </p>
                        </div>

                        {/* Sección 5 */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">5. Propiedad intelectual</h2>
                            <p className="mb-3">Todo el contenido de Chispito.mx, incluyendo textos, ejercicios, imágenes, diseño y código, está protegido por las leyes de propiedad intelectual de México.</p>
                            <p>Queda permitido el uso personal no comercial del material, así como su impresión para uso educativo en el hogar. No está permitida la reproducción, distribución o venta del contenido sin autorización expresa.</p>
                        </div>

                        {/* Sección 6 */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">6. Limitación de responsabilidad</h2>
                            <p className="mb-3">Chispito.mx no garantiza que el uso de sus ejercicios resultará en calificaciones específicas o en el cumplimiento de objetivos académicos particulares. El aprendizaje depende de múltiples factores.</p>
                            <p>No nos hacemos responsables por el uso inadecuado de la plataforma ni por el acceso de menores sin supervisión parental.</p>
                        </div>

                        {/* Sección 7 */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">7. Modificaciones</h2>
                            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor al momento de su publicación en este sitio. Le recomendamos revisarlos periódicamente.</p>
                        </div>

                        {/* Sección 8 */}
                        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">8. Contacto</h2>
                            <p className="mb-3">Si tiene preguntas sobre estos términos, puede contactarnos a través de:</p>
                            <ul className="list-none space-y-2">
                                <li>📧 <strong className="text-white">contacto@chispito.mx</strong></li>
                                <li>🌐 <strong className="text-white">chispito.mx</strong></li>
                                <li>📍 Ciudad de México, México</li>
                            </ul>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/privacidad" className="px-6 py-3 rounded-xl font-bold text-center transition-all hover:opacity-90"
                            style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>
                            🔏 Aviso de Privacidad
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
