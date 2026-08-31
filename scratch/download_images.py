import pathlib, urllib.request, os
root = pathlib.Path(r"C:\ANDREAS\webschool-01")

# --- create silhouette SVGs ---
teachers_dir = root / "public/images/teachers"
teachers_dir.mkdir(parents=True, exist_ok=True)

svg_template = lambda color1, color2: f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <rect width="400" height="400" rx="24" fill="{color1}"/>
  <circle cx="200" cy="140" r="70" fill="{color2}" opacity="0.95"/>
  <ellipse cx="200" cy="320" rx="120" ry="80" fill="{color2}" opacity="0.95"/>
  <circle cx="200" cy="145" r="28" fill="white" opacity="0.15"/>
</svg>'''

colors = [("#0F4C3A","#1a7a5a"),("#1a3a5a","#2a6496"),("#5a3a1a","#8a5a2a"),("#4a1a5a","#7a2a8a"),("#3a1a1a","#6a2a2a"),("#2a4a3a","#4a7a5a")]
for i,c in enumerate(colors,1):
    (teachers_dir / f"silhouette-{i}.svg").write_text(svg_template(c[0], c[1]), encoding="utf-8")
# kepsek special gold accent
(teachers_dir / "silhouette-kepsek.svg").write_text(svg_template("#093A27","#FFB800"), encoding="utf-8")
print("silhouettes created")

# --- download facility images via picsum/unsplash ---
fac_dir = root / "public/images/facilities"
fac_dir.mkdir(parents=True, exist_ok=True)

# Use picsum.photos seeded + unsplash source via w3 valid
# We'll use picsum IDs that roughly match context or unsplash direct
targets = {
    "lab-ipa.jpg": "https://picsum.photos/seed/labipa/800/500",
    "lab-komputer.jpg": "https://picsum.photos/seed/labkomputer/800/500",
    "library.jpg": "https://picsum.photos/seed/librarysch/800/500",
    "sports.jpg": "https://picsum.photos/seed/sportsfield/800/500",
    "musholla.jpg": "https://picsum.photos/seed/musholla/800/500",
    "classroom.jpg": "https://picsum.photos/seed/classroom01/800/500",
}
for name, url in targets.items():
    dest = fac_dir / name
    try:
        print(f"downloading {name} from {url}")
        urllib.request.urlretrieve(url, dest)
        print(f"  -> {dest.stat().st_size} bytes")
    except Exception as e:
        print(f"  failed {name}: {e}")

# also ensure courses images exist — create generic course images
courses_dir = root / "public/images/courses"
courses_dir.mkdir(parents=True, exist_ok=True)
course_targets = {
    "course-olimpiade.jpg": "https://picsum.photos/seed/olimpiade/800/500",
    "course-robotik.jpg": "https://picsum.photos/seed/robotik/800/500",
    "course-english.jpg": "https://picsum.photos/seed/englishsch/800/500",
    "course-seni.jpg": "https://picsum.photos/seed/senitari/800/500",
    "course-pramuka.jpg": "https://picsum.photos/seed/pramuka/800/500",
    "course-futsal.jpg": "https://picsum.photos/seed/futsal/800/500",
}
for name, url in course_targets.items():
    dest = courses_dir / name
    try:
        print(f"downloading {name}")
        urllib.request.urlretrieve(url, dest)
        print(f"  -> {dest.stat().st_size}")
    except Exception as e:
        print(f"  failed {name}: {e}")

print("done")
