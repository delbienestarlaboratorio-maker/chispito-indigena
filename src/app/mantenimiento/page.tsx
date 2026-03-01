import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Estamos en mantenimiento | Chispito.mx',
    description: 'Estamos mejorando la plataforma de Chispito.mx. Volveremos pronto.',
    robots: { index: false, follow: false }
}

export default function MantenimientoPage() {
    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center p-4 text-center"
            style={{
                background: 'linear-gradient(135deg, var(--navy), #0a1128)',
                color: 'white'
            }}
        >
            <div
                className="max-w-md w-full glass rounded-3xl p-10 flex flex-col items-center shadow-2xl"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
                <div className="text-7xl mb-6 animate-pulse filter drop-shadow-[0_0_15px_rgba(255,214,10,0.5)]">
                    🔋
                </div>

                <h1 className="font-fredoka text-3xl mb-4 text-white">
                    Pausa para recargar
                </h1>

                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                    Estamos mejorando los servidores y subiendo nuevos ejercicios a la plataforma.
                    <br /><br />
                    <strong className="text-white">¡Estaremos de vuelta muy pronto! 🚀</strong>
                </p>

                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-1/2 animate-bounce flex"></div>
                </div>
                <p className="text-xs text-white/30 mt-4 font-mono">Status: Updating Systems</p>
            </div>
        </main>
    )
}
