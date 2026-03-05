"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import GradeSelector from "@/components/GradeSelector";
import { AdBannerHorizontal } from "@/components/AdBanner";
import { MATERIAS } from "@/data/curriculum";
import { useTranslation } from "@/context/LanguageContext";
import VocesDeMexico from "@/components/VocesDeMexico";

const STATS_KEYS = [
  { numero: "23M+", labelKey: "stats.alumnos" },
  { numero: "81", labelKey: "stats.libros" },
  { numero: "1,000+", labelKey: "stats.ejercicios" },
  { numero: "100%", labelKey: "stats.alineado" },
];

const FEATURES_KEYS = [
  {
    emoji: "ðŸ–¨ï¸",
    titleKey: "feat.print.title",
    descKey: "feat.print.desc",
  },
  {
    emoji: "ðŸ“±",
    titleKey: "feat.screen.title",
    descKey: "feat.screen.desc",
  },
  {
    emoji: "ðŸ“–",
    titleKey: "feat.sep.title",
    descKey: "feat.sep.desc",
  },
  {
    emoji: "â­",
    titleKey: "feat.fun.title",
    descKey: "feat.fun.desc",
  },
  {
    emoji: "ðŸ“Š",
    titleKey: "feat.parents.title",
    descKey: "feat.parents.desc",
  },
  {
    emoji: "ðŸ†“",
    titleKey: "feat.free.title",
    descKey: "feat.free.desc",
  },
];

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="hero-gradient min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Texto */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6"
              style={{
                background: "rgba(255,214,10,0.15)",
                color: "var(--yellow)",
                border: "1px solid rgba(255,214,10,0.3)",
              }}
            >
              ðŸ‡²ðŸ‡½ {t("tag.sep")}
            </div>

            <h1 className="font-fredoka text-5xl md:text-7xl text-white leading-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-white/70 text-xl mb-8 max-w-2xl">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/#grados" className="btn-primary text-lg">
                ðŸš€ {t("btn.empezar")}
              </Link>
              <Link href="/planes" className="btn-secondary text-lg">
                {t("nav.planes")}
              </Link>
            </div>
            <p className="text-white/40 text-sm mt-4">
              {t("hero.notcard")}
            </p>
          </motion.div>

          {/* Mascota Chispito */}
          <motion.div
            className="flex-shrink-0 text-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="nico-mascot text-[160px] md:text-[200px] select-none">âš¡</div>
            <div
              className="mt-2 font-fredoka text-3xl"
              style={{ color: "var(--yellow)" }}
            >
              Â¡Chispito!
            </div>
            <div className="text-white/50 text-sm mt-1">{t("hero.mascot_desc")}</div>
          </motion.div>
        </div>
      </section>

      {/* MAPA INTERACTIVO LENGUAS INDIGENAS */}
      <VocesDeMexico />

      {/* STATS */}
      <section className="py-12 px-4" style={{ background: "rgba(255,214,10,0.06)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS_KEYS.map((s, i) => (
            <motion.div
              key={s.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-fredoka text-4xl md:text-5xl" style={{ color: "var(--yellow)" }}>
                {s.numero}
              </div>
              <div className="text-white/60 text-sm mt-1">{t(s.labelKey as any)}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AD BANNER horizontal no invasivo */}
      <AdBannerHorizontal />

      {/* SELECTOR DE GRADOS */}
      <GradeSelector />

      {/* AD BANNER */}
      <AdBannerHorizontal />

      {/* MATERIAS */}
      <section id="materias" className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-fredoka text-4xl text-white mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t("materias.title")}
          </motion.h2>
          <p className="text-white/60 mb-10">
            {t("materias.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(MATERIAS).map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={`/materia/${m.id}`}
                  className="materia-pill"
                  style={{
                    background: `${m.color}22`,
                    color: m.color,
                    borderColor: `${m.color}55`,
                  }}
                >
                  {m.emoji} {m.nombre}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-fredoka text-4xl md:text-5xl text-white mb-3">
              {t("why.title")}
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              {t("why.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES_KEYS.map((f, i) => (
              <motion.div
                key={f.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="text-4xl mb-3">{f.emoji}</div>
                <h3 className="font-fredoka text-xl text-white mb-2">{t(f.titleKey as any)}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{t(f.descKey as any)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="papa" className="py-24 px-4 text-center">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-12"
          style={{ background: "linear-gradient(135deg, #FFD60A22, #4ECDC422)" }}
        >
          <div className="text-6xl mb-4">âš¡</div>
          <h2 className="font-fredoka text-4xl md:text-5xl text-white mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-white/70 text-lg mb-8">
            {t("cta.subtitle")}
          </p>
          <Link href="/#grados" className="btn-primary text-xl">
            {t("cta.btn")}
          </Link>
          <p className="text-white/40 text-sm mt-4">
            {t("cta.features")}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10 text-center text-white/30 text-sm"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p className="font-fredoka text-xl mb-2" style={{ color: "var(--yellow)" }}>
          Chispito.mx âš¡
        </p>
        <p>
          {t("footer.sep")} â€¢{" "}
          <Link href="/privacidad" className="hover:text-white transition-colors">
            {t("footer.privacy")}
          </Link>{" "}
          â€¢{" "}
          <Link href="/terminos" className="hover:text-white transition-colors">
            {t("footer.terms")}
          </Link>
        </p>
        <p className="mt-2">{t("footer.made_in")}</p>
      </footer>
    </main>
  );
}

