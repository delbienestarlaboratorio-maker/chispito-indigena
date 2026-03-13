"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const dynamic = "force-dynamic";

function PagoExitosoContent() {
    const params = useSearchParams();
    const plan = params.get("plan");
    const grado = params.get("grado");
    const cuadernillo = params.get("cuadernillo");

    const mensajes: Record<string, string> = {
        v2_mensual: "¡Tu plan V2 ya está activo! Tienes ejercicios ilimitados.",
        v3_mensual: "¡Tu plan V3 Familia está activo! Activa a tus hijos en la app.",
        cuadernillo: "¡Tu cuadernillo PDF está listo para descargar!",
    };

    const subMensaje = cuadernillo
        ? `Cuadernillo desbloqueado: ${cuadernillo.replace(/_/g, " ")}`
        : grado && grado !== ""
            ? `Grado activado: ${grado}`
            : "";

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-center max-w-lg"
        >
            <div className="text-8xl mb-6">🎉</div>
            <h1 className="font-fredoka text-5xl text-white mb-4">
                ¡Pago exitoso!
            </h1>
            <p className="text-white/70 text-xl mb-2">
                {(plan && mensajes[plan]) || "Tu pago fue procesado correctamente."}
            </p>
            {subMensaje && (
                <p className="text-white/50 mb-8">{subMensaje}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {cuadernillo ? (
                    <Link
                        href={`/cuadernillos/${cuadernillo.split("_")[0]}`}
                        className="btn-primary text-lg"
                    >
                        📄 Ir a mis cuadernillos
                    </Link>
                ) : (
                    <Link href="/#grados" className="btn-primary text-lg">
                        🚀 Ir a mis ejercicios
                    </Link>
                )}
                <Link href="/planes" className="btn-secondary text-lg">
                    Ver mi plan
                </Link>
            </div>
            <p className="text-white/30 text-sm mt-8">
                Recibirás un correo de confirmación de Clip.
            </p>
        </motion.div>
    );
}

export default function PagoExitosoPage() {
    return (
        <main className="min-h-screen hero-gradient flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4 pt-20">
                <Suspense fallback={
                    <div className="text-center">
                        <div className="text-6xl mb-4">⏳</div>
                        <p className="text-white/60">Verificando tu pago...</p>
                    </div>
                }>
                    <PagoExitosoContent />
                </Suspense>
            </div>
        </main>
    );
}
