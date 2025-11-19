#!/usr/bin/env python3
"""
Upscale and prepare a high-resolution logo PNG.
- Reads `images/creditore-logo.png`
- Ensures output width is at least 1000px (keeps proportions)
- Uses LANCZOS resampling for best quality upscaling
- Preserves alpha if present; optionally makes a uniform background transparent
- Saves `images/creditore-logo-highres.png`

Run with:
    python3 scripts/upscale_logo.py

Requires Pillow. If not installed, the script will try to install it for the current user.
"""
import sys
import os
from math import sqrt

try:
    from PIL import Image, ImageEnhance
except Exception:
    print('Pillow not found, attempting to install...')
    subprocess_args = [sys.executable, '-m', 'pip', 'install', '--user', 'Pillow==10.1.0']
    import subprocess
    subprocess.check_call(subprocess_args)
    from PIL import Image, ImageEnhance

IN_PATH = os.path.join('images', 'creditore-logo.png')
OUT_PATH = os.path.join('images', 'creditore-logo-highres.png')
TARGET_MIN_WIDTH = 1000

if not os.path.exists(IN_PATH):
    print('Input file not found:', IN_PATH)
    sys.exit(1)

img = Image.open(IN_PATH)
print('Loaded', IN_PATH)
print('Original mode:', img.mode)
print('Original size:', img.size)

w, h = img.size
# Determine target width
target_w = max(TARGET_MIN_WIDTH, w)
if target_w != w:
    new_h = int((target_w / w) * h)
    print(f'Resizing {w}x{h} -> {target_w}x{new_h} (LANCZOS)')
    img = img.resize((target_w, new_h), resample=Image.LANCZOS)
else:
    print('No resize required; keeping original size')

# Convert to RGBA to preserve/enable transparency
img = img.convert('RGBA')

# Detect if any transparency exists
has_transparency = any(a < 255 for *_, a in img.getdata())
print('Has transparency:', has_transparency)

# If no transparency, check corner uniformity and optionally make background transparent
if not has_transparency:
    def sample_corner(im, x0, y0, wbox=10, hbox=10):
        pixels = []
        ox = min(wbox, max(1, im.width - x0))
        oy = min(hbox, max(1, im.height - y0))
        for yy in range(y0, y0 + oy):
            for xx in range(x0, x0 + ox):
                pixels.append(im.getpixel((xx, yy))[:3])
        return pixels

    # gather corner samples
    pixels = []
    pixels += sample_corner(img, 0, 0)
    pixels += sample_corner(img, max(0, img.width - 10), 0)
    pixels += sample_corner(img, 0, max(0, img.height - 10))
    pixels += sample_corner(img, max(0, img.width - 10), max(0, img.height - 10))

    avg = [sum(c[i] for c in pixels) / len(pixels) for i in range(3)]
    var = [sum((c[i] - avg[i]) ** 2 for c in pixels) / len(pixels) for i in range(3)]
    stddev = (var[0] ** 0.5 + var[1] ** 0.5 + var[2] ** 0.5) / 3
    print('Corner avg:', tuple(int(x) for x in avg), 'avg stddev:', stddev)

    if stddev < 12:
        print('Background appears uniform; will make background transparent')
        bg = tuple(int(round(x)) for x in avg)
        thr = 30
        data = img.getdata()
        newdata = []
        for item in data:
            r, g, b, a = item
            dist = sqrt((r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2)
            if dist <= thr:
                newdata.append((r, g, b, 0))
            else:
                newdata.append((r, g, b, a))
        img.putdata(newdata)
    else:
        print('Background not uniform; leaving as-is (no auto-transparent conversion)')

# Apply a very light sharpening to make the logo crisper (subtle)
try:
    enhancer = ImageEnhance.Sharpness(img)
    img = enhancer.enhance(1.05)
    print('Applied light sharpening')
except Exception:
    pass

# Save output
img.save(OUT_PATH, format='PNG', optimize=True)
print('Saved high-resolution logo to', OUT_PATH)
print('Final size/mode:', img.size, img.mode)
