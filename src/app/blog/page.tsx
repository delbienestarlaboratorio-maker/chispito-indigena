import Navbar from "@/components/Navbar";
import { AdBannerHorizontal } from "@/components/AdBanner";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Chispito.mx — Novedades y recursos para padres y maestros",
    description: "Encuentra artículos, consejos y novedades sobre educación primaria en México alineado a la SEP.",
};

const POSTS_PLACEHOLDER = [
    {
        id: 1,
        title: "Cómo ayudar a tu hijo a estudiar para los exámenes de la SEP",
        excerpt: "Descubre las mejores técnicas de estudio en casa para mejorar el rendimiento escolar de tus hijos de acuerdo a la Nueva Escuela Mexicana.",
        date: "28 de Febrero, 2026",
        category: "Para Papás",
    },
    {
        id: 2,
        title: "Actualización de planes de estudio 2026: Lo que necesitas saber",
        excerpt: "Resumen de los cambios más recientes en el programa de la SEP y cómo Chispito.mx se ha actualizado para cubrirlos al 100%.",
        date: "15 de Febrero, 2026",
        category: "Novedades",
    },
    {
        id: 3,
        title: "La importancia de aprender jugando en preescolar y primaria",
        excerpt: "Por qué la gamificación ayuda a los niños a retener mejor la información y cómo aplicar estos principios en casa.",
        date: "02 de Febrero, 2026",
        category: "Educación",
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />

            {/* Hero */}
            <section
                className="pt-32 pb-16 px-4"
                style={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.15), var(--navy))",
                    borderBottom: "1px solid rgba(59,130,246,0.3)",
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-6xl mb-4">📰</div>
                    <h1 className="font-fredoka text-5xl md:text-6xl text-white mb-4">
                        El Blog de <span style={{ color: "var(--yellow)" }}>Chispito</span>
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
                        Noticias, consejos educativos y todo lo que necesitas saber sobre el programa de la SEP en México.
                    </p>
                </div>
            </section>

            <AdBannerHorizontal />

            {/* Content */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-8">
                        {POSTS_PLACEHOLDER.map((post) => (
                            <article
                                key={post.id}
                                className="glass p-6 md:p-8 rounded-2xl hover:border-white/20 transition-all group"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span
                                        className="text-xs font-bold px-3 py-1 rounded-full text-blue-300"
                                        style={{ background: "rgba(59,130,246,0.2)" }}
                                    >
                                        {post.category}
                                    </span>
                                    <span className="text-white/40 text-sm">{post.date}</span>
                                </div>
                                <h2 className="font-fredoka text-2xl md:text-3xl text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-white/60 text-base md:text-lg mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <span className="text-yellow-400 font-semibold text-sm group-hover:underline cursor-pointer">
                                    Leer artículo completo →
                                </span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <AdBannerHorizontal />

            <footer className="py-10 text-center text-white/30 text-sm border-t border-white/06 mt-10">
                <Link href="/" className="hover:text-white transition-colors">
                    ← Volver a inicio
                </Link>
            </footer>
        </main>
    );
}
