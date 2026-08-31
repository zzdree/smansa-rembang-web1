import pathlib
root=pathlib.Path(r"C:\ANDREAS\webschool-01")
p=root/"src/lib/data.ts"
t=p.read_text(encoding="utf-8")
# fix courses first image + avatars
t=t.replace('"/images/teachers/silhouette-2.svg", avatar: "/images/teachers/silhouette-1.svg"','"/images/courses/course-olimpiade.svg", avatar: "/images/teachers/silhouette-1.svg"')
t=t.replace('"/images/teachers/kepsek.jpg"','"/images/teachers/silhouette-kepsek.svg"')
t=t.replace('"/images/gallery/ace4b393463cdbde2ddd211f127773c9.jpg"','"/images/teachers/silhouette-5.svg"')
t=t.replace('"/images/teachers/avatar1.jpg"','"/images/teachers/silhouette-1.svg"')
t=t.replace('"/images/teachers/avatar2.jpg"','"/images/teachers/silhouette-2.svg"')
t=t.replace('"/images/teachers/avatar3.jpg"','"/images/teachers/silhouette-3.svg"')
p.write_text(t,encoding="utf-8")
print("data.ts fixed")

# Footer + other sisa SMA Negeri X — keep fictional but ensure "Contoh" label? keep as is
# Gallery: ensure fictional captions
import json, pathlib as pl
g=pl.Path(r"C:\ANDREAS\webschool-01\src\components\sections\Gallery.tsx")
if g.exists():
    gt=g.read_text(encoding="utf-8")
    gt=gt.replace("Dokumentasi Kegiatan Sekolah","Galeri Kegiatan — Ilustrasi Template")
    gt=gt.replace("Foto asli ","Ilustrasi ")
    g.write_text(gt,encoding="utf-8")
    print("gallery patched")

# Hero alt text fine, keep SMA Negeri X fiktif label already — ensure description mentions fiktif
h=pl.Path(r"C:\ANDREAS\webschool-01\src\components\sections\Hero.tsx")
ht=h.read_text(encoding="utf-8")
# add "— sekolah fiktif (template)" small note? keep subtle
if "membina 1.200" in ht and "fiktif" not in ht.lower():
    ht=ht.replace("SMA Negeri X Rembang — membina","SMA Negeri X Rembang (sekolah fiktif) — membina")
    h.write_text(ht,encoding="utf-8")
    print("hero patched")

# sanity.config.ts title -> generic template title
s=pl.Path(r"C:\ANDREAS\webschool-01\sanity.config.ts")
st=s.read_text(encoding="utf-8")
if "SMA Negeri X Rembang" in st:
    st=st.replace("SMA Negeri X Rembang","webschool-01 — SMA Negeri X (Template Fiktif)")
    s.write_text(st,encoding="utf-8")
    print("sanity.config patched")
print("done")
