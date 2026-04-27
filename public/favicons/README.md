# Favicons

This folder stores all favicon variants for FocusSpace.

Current files:

- `cubo1.ico` (primary favicon)
- `cubo64.png` (PNG favicon)
- `cubo180.png` (Apple touch icon)
- `cubo192.png` (high-resolution favicon)
- `cubo2.ico` (alternate variant, not currently used)

Current mapping in `index.html`:

- `rel="icon" type="image/x-icon"` -> `/favicons/cubo1.ico`
- `rel="icon" type="image/png" sizes="64x64"` -> `/favicons/cubo64.png`
- `rel="icon" type="image/png" sizes="192x192"` -> `/favicons/cubo192.png`
- `rel="apple-touch-icon" sizes="180x180"` -> `/favicons/cubo180.png`
