import { ImageResponse } from 'next/og'

export const alt = 'Chispito.mx — Educación SEP'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0d1b2a, #1a365d)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    padding: '40px',
                }}
            >
                {/* Background glow effects */}
                <div
                    style={{
                        position: 'absolute',
                        top: -200,
                        right: -200,
                        width: 800,
                        height: 800,
                        background: 'rgba(255, 214, 10, 0.15)',
                        borderRadius: '50%',
                        filter: 'blur(100px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: -200,
                        left: -200,
                        width: 800,
                        height: 800,
                        background: 'rgba(59, 130, 246, 0.15)',
                        borderRadius: '50%',
                        filter: 'blur(100px)',
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#FFD60A',
                        width: '120px',
                        height: '120px',
                        borderRadius: '30px',
                        marginBottom: '40px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    }}
                >
                    {/* SVG Zap replacement for Next/OG */}
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0d1b2a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                </div>

                <h1
                    style={{
                        fontSize: '80px',
                        fontWeight: 800,
                        color: '#ffffff',
                        marginBottom: '20px',
                        letterSpacing: '-2px',
                        textAlign: 'center',
                    }}
                >
                    Chispito.mx
                </h1>

                <p
                    style={{
                        fontSize: '40px',
                        color: 'rgba(255, 255, 255, 0.8)',
                        textAlign: 'center',
                        maxWidth: '900px',
                        lineHeight: 1.4,
                        fontWeight: 500,
                    }}
                >
                    Aprende con los ejercicios de la SEP.
                    <br />
                    <span style={{ color: '#FFD60A' }}>¡Pero divertido! 🚀</span>
                </p>
            </div>
        ),
        {
            ...size,
        }
    )
}
