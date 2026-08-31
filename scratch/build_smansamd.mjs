import fs from 'fs';
const base='scratch';
const files=fs.readdirSync(base).filter(f=>f.startsWith('raw2_'));
let md=`# SMANSA — SMA Negeri 1 Rembang — Data Lengkap Hasil Scraping

> Sumber: https://smansarembang.sch.id/ (di-scrape 2026-09-01 via Playwright headless Chromium, browser-use)
> Metode: Playwright chromium.launch + page.goto domcontentloaded, 16 URL
> Raw: scratch/raw2_*.txt + scratch/html2_*.html | All images: scratch/all_images.txt

---

## 1. Ringkasan Eksekusi

| URL | Title | Text | Imgs |
|---|---|---|---|
`;
for(const f of files){
  const c=fs.readFileSync(base+'/'+f,'utf8');
  const url=(c.match(/URL: (.*)/)||[])[1]||'';
  const title=(c.match(/TITLE: (.*)/)||[])[1]||'';
  const tlen=c.split('---TEXT---')[1]?.split('---IMGS---')[0]?.trim().length||0;
  const ic=(c.match(/https/g)||[]).length;
  md+=`| ${url.replace('https://smansarembang.sch.id','')} | ${title} | ${tlen} | ${ic} |\n`;
}
md+=`\nKontak 404 — halaman /kontak tidak ada (234 bytes).\n\n`;
for(const f of files){
  const c=fs.readFileSync(base+'/'+f,'utf8');
  const url=(c.match(/URL: (.*)/)||[])[1]||'';
  const title=(c.match(/TITLE: (.*)/)||[])[1]||'';
  const text=c.split('---TEXT---')[1]?.split('---IMGS---')[0]?.trim().slice(0,8000)||'';
  md+=`---\n\n## ${title} — ${url}\n\n\`\`\`\n${text}\n\`\`\`\n\n`;
}
const allImgs=fs.readFileSync('scratch/all_images.txt','utf8');
md+=`---\n\n## Daftar Semua Image URL (${allImgs.split('\n').filter(Boolean).length} unique)\n\n\`\`\`\n${allImgs}\n\`\`\`\n`;
fs.writeFileSync('SMANSA.md', md);
console.log('SMANSA.md written', md.length);
