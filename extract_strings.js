const fs = require('fs');

const code = fs.readFileSync('d:/Paginas_web/Sistema educacion Basica/Chispito.indigena/src/app/universo/page.tsx', 'utf8');

const regex = /texto:\s*"([^"]+)"/g;
let match;
const strings = new Set(); // Use Set to avoid duplicates

while ((match = regex.exec(code)) !== null) {
    strings.add(match[1]);
}

console.log(JSON.stringify(Array.from(strings), null, 2));
