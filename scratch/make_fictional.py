import pathlib
fac = pathlib.Path(r"C:\ANDREAS\webschool-01\public\images\facilities")
fac.mkdir(parents=True, exist_ok=True)
defs = {
 'lab-ipa': ('#1a5a3a','Laboratorium IPA','\U0001f9ea'),
 'lab-komputer': ('#1a3a5a','Lab Komputer','\U0001f4bb'),
 'library': ('#5a3a1a','Perpustakaan','\U0001f4da'),
 'sports': ('#2a5a1a','Lapangan Olahraga','\U0001f3df\ufe0f'),
 'musholla': ('#3a5a3a','Musholla','\U0001f54c'),
 'classroom': ('#4a3a5a','Ruang Kelas','\U0001f3eb'),
}
for k,(bg,title,emoji) in defs.items():
    svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" rx="24" fill="{bg}"/><rect x="60" y="60" width="680" height="340" rx="16" fill="white" opacity="0.96"/><text x="400" y="210" text-anchor="middle" font-size="72">{emoji}</text><text x="400" y="270" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="800" fill="{bg}">{title}</text><text x="400" y="300" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#6b7280">SMA Negeri X Rembang — ilustrasi fiktif</text></svg>'
    (fac / f'{k}.svg').write_text(svg, encoding="utf-8")
    print(k, 'svg done')
print('done fac svg')
p = pathlib.Path(r"C:\ANDREAS\webschool-01\src\components\sections\Facilities.tsx")
t = p.read_text(encoding="utf-8")
for k in defs:
    t = t.replace(f'/images/facilities/{k}.jpg', f'/images/facilities/{k}.svg')
p.write_text(t, encoding="utf-8")
print('Facilities.tsx switched to svg')
courses_dir = pathlib.Path(r"C:\ANDREAS\webschool-01\public\images\courses")
courses_dir.mkdir(parents=True, exist_ok=True)
course_defs = {
 'olimpiade': ('#0F4C3A','Olimpiade Sains','\U0001f52c'),
 'robotik': ('#1a3a8a','Robotik & Coding','\U0001f916'),
 'english': ('#8a1a3a','English Intensive','\U0001f4dd'),
 'seni': ('#5a1a6a','Seni & Budaya','\U0001f3ad'),
 'pramuka': ('#3a5a1a','Pramuka & Paskibra','\u26fa'),
 'futsal': ('#5a3a0a','Futsal & Basket','\u26bd'),
}
for k,(bg,title,emoji) in course_defs.items():
    svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" rx="20" fill="{bg}"/><rect x="40" y="40" width="720" height="380" rx="16" fill="white" opacity="0.97"/><text x="400" y="200" text-anchor="middle" font-size="64">{emoji}</text><text x="400" y="255" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="800" fill="{bg}">{title}</text></svg>'
    (courses_dir / f'course-{k}.svg').write_text(svg, encoding="utf-8")
print('courses svg done')
d = pathlib.Path(r"C:\ANDREAS\webschool-01\src\lib\data.ts")
tx = d.read_text(encoding="utf-8")
tx = tx.replace('/images/gallery/99472b6d5d1df8325a5f0e2880f4efc3.jpg','/images/courses/course-olimpiade.svg')
tx = tx.replace('/images/gallery/a8013ef2b2df5c98752f818155e54222.jpg','/images/courses/course-robotik.svg')
tx = tx.replace('/images/gallery/a8b4918f9b29e68e73552afbc828f195.jpg','/images/courses/course-english.svg')
tx = tx.replace('/images/gallery/31236a6ca4b64d5ff9aa644502b57498.jpg','/images/courses/course-seni.svg')
tx = tx.replace('/images/gallery/0ebcb65adab27065623df6b274095758.jpg','/images/courses/course-pramuka.svg')
tx = tx.replace('/images/gallery/88099fff5402d32cb61689380134e700.jpg','/images/courses/course-futsal.svg')
tx = tx.replace('/images/gallery/12108bbbc13568d02d4949a406f36b5b.jpg','/images/courses/course-olimpiade.svg')
tx = tx.replace('/images/gallery/ccec9ca3aaeb1796a28eaabf8dcb1a62.jpg','/images/courses/course-english.svg')
d.write_text(tx, encoding="utf-8")
print('data courses patched')
