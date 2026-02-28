#!/usr/bin/env node
/**
 * subir-libros-r2.js — Sube todos los libros SEP a Cloudflare R2
 * 
 * USO:
 *   1. npm install @aws-sdk/client-s3 (solo si no está instalado)
 *   2. Crear archivo .env.r2 con tus credenciales (ver abajo)
 *   3. node scripts/subir-libros-r2.js
 * 
 * CREDENCIALES NECESARIAS (Cloudflare Dashboard → R2 → Manage R2 API Tokens):
 *   R2_ACCOUNT_ID=tu_account_id
 *   R2_ACCESS_KEY_ID=tu_access_key_id
 *   R2_SECRET_ACCESS_KEY=tu_secret_access_key
 *   R2_BUCKET_NAME=chispito-libros
 *   R2_PUBLIC_URL=https://pub-XXXX.r2.dev   ← URL pública del bucket
 */

const fs = require('fs');
const path = require('path');

// Cargar variables de entorno desde .env.r2
const envFile = path.join(__dirname, '..', '.env.r2');
if (fs.existsSync(envFile)) {
    fs.readFileSync(envFile, 'utf8').split('\n').forEach(line => {
        const [k, ...v] = line.split('=');
        if (k && v.length) process.env[k.trim()] = v.join('=').trim();
    });
}

const { S3Client, PutObjectCommand, HeadObjectCommand } = require('@aws-sdk/client-s3');

const ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const ACCESS_KEY = process.env.R2_ACCESS_KEY_ID;
const SECRET_KEY = process.env.R2_SECRET_ACCESS_KEY;
const BUCKET = process.env.R2_BUCKET_NAME || 'chispito-libros';
const LIBROS_DIR = path.join(__dirname, '..', 'libros-sep');

if (!ACCOUNT_ID || !ACCESS_KEY || !SECRET_KEY) {
    console.error('❌ Faltan credenciales R2. Crea el archivo .env.r2 con:');
    console.error('   R2_ACCOUNT_ID=...');
    console.error('   R2_ACCESS_KEY_ID=...');
    console.error('   R2_SECRET_ACCESS_KEY=...');
    console.error('   R2_BUCKET_NAME=chispito-libros');
    console.error('   R2_PUBLIC_URL=https://pub-XXXX.r2.dev');
    process.exit(1);
}

const client = new S3Client({
    region: 'auto',
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY },
});

async function existeEnR2(key) {
    try {
        await client.send(new HeadObjectCommand({ Bucket: BUCKET, Key: key }));
        return true;
    } catch { return false; }
}

async function subirArchivo(localPath, r2Key, contentType) {
    if (await existeEnR2(r2Key)) {
        return 'skip';
    }
    const body = fs.readFileSync(localPath);
    await client.send(new PutObjectCommand({
        Bucket: BUCKET,
        Key: r2Key,
        Body: body,
        ContentType: contentType,
        CacheControl: 'public, max-age=31536000',  // 1 año (imágenes no cambian)
    }));
    return 'upload';
}

async function main() {
    console.log(`🚀 Iniciando subida a R2: ${BUCKET}`);
    console.log(`📁 Directorio: ${LIBROS_DIR}\n`);

    const grados = fs.readdirSync(LIBROS_DIR).filter(f =>
        fs.statSync(path.join(LIBROS_DIR, f)).isDirectory()
    );

    let totalArchivos = 0;
    let subidos = 0;
    let omitidos = 0;
    let errores = 0;

    for (const grado of grados) {
        const gradoDir = path.join(LIBROS_DIR, grado);
        const tipos = fs.readdirSync(gradoDir).filter(f =>
            fs.statSync(path.join(gradoDir, f)).isDirectory()
        );

        for (const tipo of tipos) {
            const tipoDir = path.join(gradoDir, tipo);
            const archivos = fs.readdirSync(tipoDir);
            totalArchivos += archivos.length;

            for (const archivo of archivos) {
                const localPath = path.join(tipoDir, archivo);
                const r2Key = `libros-sep/${grado}/${tipo}/${archivo}`;
                const ext = path.extname(archivo).toLowerCase();
                const contentType = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' :
                    ext === '.png' ? 'image/png' : 'application/json';

                try {
                    const result = await subirArchivo(localPath, r2Key, contentType);
                    if (result === 'upload') {
                        subidos++;
                        if (subidos % 50 === 0) {
                            console.log(`  📤 ${subidos}/${totalArchivos} archivos subidos...`);
                        }
                    } else {
                        omitidos++;
                    }
                } catch (err) {
                    console.error(`  ❌ Error subiendo ${r2Key}: ${err.message}`);
                    errores++;
                }
            }

            console.log(`  ✅ ${grado}/${tipo} — ${archivos.length} archivos`);
        }
    }

    console.log(`\n🎉 SUBIDA COMPLETADA:`);
    console.log(`  📤 Subidos:  ${subidos}`);
    console.log(`  ⏭️  Omitidos: ${omitidos} (ya existían)`);
    console.log(`  ❌ Errores:  ${errores}`);
    console.log(`\n💡 URL pública base: ${process.env.R2_PUBLIC_URL || 'https://pub-XXXX.r2.dev'}/libros-sep/`);
}

main().catch(console.error);
