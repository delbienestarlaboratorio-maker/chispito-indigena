"use client";
import { useEffect, useRef } from "react";

interface AdBannerProps {
    slot: string;
    format?: "auto" | "fluid" | "rectangle" | "leaderboard";
    className?: string;
    style?: React.CSSProperties;
}

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

/**
 * Componente de publicidad Google AdSense no invasiva.
 * Solo se muestra si hay anuncio disponible.
 */
export default function AdBanner({ slot, format = "auto", className = "", style }: AdBannerProps) {
    const ref = useRef<HTMLModElement>(null);

    useEffect(() => {
        try {
            if (typeof window !== "undefined" && window.adsbygoogle) {
                window.adsbygoogle.push({});
            }
        } catch (e) {
            console.warn("AdSense error:", e);
        }
    }, []);

    return (
        <div
            className={`ad-banner ${className}`}
            style={{ position: "relative", ...style }}
            aria-label="Publicidad"
        >
            <ins
                ref={ref}
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
}

/** Banner horizontal (leaderboard 728x90) — entre secciones de contenido */
export function AdBannerHorizontal() {
    return (
        <div className="w-full my-6 px-4" aria-hidden="false">
            <p className="text-xs text-white/20 text-center mb-1 font-semibold uppercase tracking-widest">
                Anuncio
            </p>
            <AdBanner
                slot="1234567890"
                format="leaderboard"
                className="w-full"
                style={{ minHeight: 90 }}
            />
        </div>
    );
}

/** Ad lateral (sidebar 300x250) — para páginas de ejercicios */
export function AdSidebar() {
    return (
        <aside className="hidden lg:block" style={{ minWidth: 300 }}>
            <p className="text-xs text-white/20 mb-1 font-semibold uppercase tracking-widest">
                Anuncio
            </p>
            <AdBanner
                slot="0987654321"
                format="rectangle"
                className="ad-sidebar"
                style={{ minHeight: 250 }}
            />
        </aside>
    );
}

/** Ad nativo entre ejercicios (in-feed) */
export function AdInFeed() {
    return (
        <div className="my-4" aria-hidden="false">
            <p className="text-xs text-gray-400/50 mb-1 font-semibold uppercase tracking-widest text-center">
                Anuncio
            </p>
            <AdBanner
                slot="1122334455"
                format="fluid"
                style={{ minHeight: 100, background: "rgba(255,255,255,0.02)", borderRadius: 12 }}
            />
        </div>
    );
}
