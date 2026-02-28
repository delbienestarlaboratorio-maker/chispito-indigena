"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function PagoErrorPage() {
    return (
        <main className="min-h-screen hero-gradient flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4 pt-20">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center max-w-lg"
                >
                    <div className="text-8xl mb-6">😕</div>
                    <h1 className="font-fredoka text-5xl text-white mb-4">
                        No se pudo procesar el pago
                    </h1>
                    <p className="text-white/60 text-lg mb-8">
                        Tu pago no fue completado. No se realizó ningún cargo a tu cuenta.
                        Intenta de nuevo o usa otro método de pago.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/planes" className="btn-primary text-lg">
                            🔄 Intentar de nuevo
                        </Link>
                        <Link href="/" className="btn-secondary text-lg">
                            Volver al inicio
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
