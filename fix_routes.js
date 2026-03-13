const fs = require('fs');

const run = () => {
    const s = ['src/app/[grado]/page.tsx', 'src/app/[grado]/[materia]/page.tsx', 'src/app/[grado]/[materia]/[bloque]/page.tsx', 'src/app/cuadernillos/[grado]/page.tsx', 'src/app/guia-mensual/[grado]/page.tsx'];
    for (let p of s) {
        if (!fs.existsSync(p)) continue;
        let c = fs.readFileSync(p, 'utf8');
        if (!c.includes('export const dynamicParams = false;')) {
            fs.writeFileSync(p, 'export const dynamicParams = false;\n' + c);
        }
    }

    const e = ['src/app/api/libro-sep/[...path]/route.ts', 'src/app/auth/callback/route.ts', 'src/app/auth/signout/route.ts', 'src/app/mi-cuenta/page.tsx', 'src/app/sitemap.ts'];
    for (let p of e) {
        if (!fs.existsSync(p)) continue;
        let c = fs.readFileSync(p, 'utf8');
        if (!c.includes("export const runtime = 'edge';")) {
            fs.writeFileSync(p, "export const runtime = 'edge';\n" + c);
            console.log("Added edge runtime to " + p);
        }
    }

    const l = "export const runtime = 'edge';\nexport default function Layout({ children }: { children: React.ReactNode }) { return children; }\n";
    if (!fs.existsSync('src/app/pipi-story')) fs.mkdirSync('src/app/pipi-story', { recursive: true });
    fs.writeFileSync('src/app/pipi-story/layout.tsx', l);

    if (!fs.existsSync('src/app/libro-sep')) fs.mkdirSync('src/app/libro-sep', { recursive: true });
    fs.writeFileSync('src/app/libro-sep/layout.tsx', l);
};
run();
