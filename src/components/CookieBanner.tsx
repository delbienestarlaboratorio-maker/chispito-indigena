"use client";
// CookieBanner — Aviso de cookies con enlace a privacidad
// Se guarda en localStorage para no volver a mostrarse

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const aceptado = localStorage.getItem("chispito_cookies_ok");
        if (!aceptado) setVisible(true);
    }, []);

    function aceptar() {
        localStorage.setItem("chispito_cookies_ok", "1");
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4"
            style={{ background: "rgba(13,27,42,0.97)", borderTop: "1px solid rgba(255,213,10,0.3)" }}
        >
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🍪</span>
                    <p className="text-white/80 text-sm leading-relaxed">
                        Chispito.mx usa cookies para mejorar tu experiencia educativa y recordar tu progreso.
                        Al continuar, aceptas nuestro uso de cookies.{" "}
                        <Link href="/privacidad" className="text-yellow-400 underline hover:text-yellow-300">
                            Aviso de privacidad
                        </Link>{" "}·{" "}
                        <Link href="/terminos" className="text-yellow-400 underline hover:text-yellow-300">
                            Términos y condiciones
                        </Link>
                    </p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                    <button
                        onClick={() => setVisible(false)}
                        className="px-4 py-2 rounded-xl text-sm text-white/50 hover:text-white transition-colors"
                    >
                        Solo esenciales
                    </button>
                    <button
                        onClick={aceptar}
                        className="px-5 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                        style={{ background: "#FFD60A", color: "#0D1B2A" }}
                    >
                        ✓ Aceptar todo
                    </button>
                </div>
            </div>
        </div>
    );
}
