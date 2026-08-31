import pathlib
root = pathlib.Path(r"C:\ANDREAS\webschool-01")

# Facilities.tsx
p = root / "src/components/sections/Facilities.tsx"
t = p.read_text(encoding="utf-8")
t = t.replace(
    "Foto asli SMAN 1 Rembang \u2014 sarana modern terawat untuk akademik, ibadah, olahraga & kreativitas.",
    "Fasilitas representatif sekolah fiktif \u2014 ilustrasi umum untuk template, bukan foto sekolah spesifik."
)
# swap to generic facilities paths (will be downloaded next)
repls = {
 "/images/gallery/86f6378892c28953823ba1a3c4841bac.jpg":"/images/facilities/lab-ipa.jpg",
 "/images/gallery/ace4b393463cdbde2ddd211f127773c9.jpg":"/images/facilities/lab-komputer.jpg",
 "/images/gallery/ccec9ca3aaeb1796a28eaabf8dcb1a62.jpg":"/images/facilities/library.jpg",
 "/images/gallery/756af809a7e0f2c217639de193a8794d.jpg":"/images/facilities/sports.jpg",
 "/images/gallery/c330c438fd2b078317d60395c289fb78.jpg":"/images/facilities/musholla.jpg",
 "/images/gallery/8091f720499814cbb9d94c52f6414e9e.jpg":"/images/facilities/classroom.jpg",
}
for k,v in repls.items():
    t = t.replace(k, v)
p.write_text(t, encoding="utf-8")
print("Facilities patched")

# data.ts teachers -> silhouette
d = root / "src/lib/data.ts"
tx = d.read_text(encoding="utf-8")
tx = tx.replace("/images/pages/bu_endang.png", "/images/teachers/silhouette-kepsek.svg")
for i in range(1,6):
    tx = tx.replace(f"/images/teachers/guru{i}.jpg", f"/images/teachers/silhouette-{i}.svg")
# courses avatars already silhouetted via above loop, but also fix gallery-based teacher images
tx = tx.replace("/images/gallery/99472b6d5d1df8325a5f0e2880f4efc3.jpg","/images/teachers/silhouette-2.svg")
tx = tx.replace("/images/gallery/8091f720499814cbb9d94c52f6414e9e.jpg","/images/teachers/silhouette-3.svg")
tx = tx.replace("/images/gallery/c330c438fd2b078317d60395c289fb78.jpg","/images/teachers/silhouette-4.svg")
tx = tx.replace("/images/gallery/ad7286dd300c40fd04883db5d8ea3781.jpg","/images/teachers/silhouette-1.svg")
d.write_text(tx, encoding="utf-8")
print("data teachers silhouetted")

# About section copy - ensure fictional
about = root / "src/components/sections/About.tsx"
if about.exists():
    at = about.read_text(encoding="utf-8")
    at = at.replace("SMAN 1 Rembang", "SMA Negeri X — sekolah fiktif")
    at = at.replace("SMA Negeri 1 Rembang", "SMA Negeri X — sekolah fiktif")
    about.write_text(at, encoding="utf-8")
    print("About patched")

print("done")
