# Lumetra Portfolio

**The Light That Guides Creativity** - Lumetra creative agency portfolio website.

---

## File Structure

```
lumetra_portfolio/
│
├── index.html          ← Main page
├── styles.css          ← All styles (including lightbox)
├── projects.js         ← Edit this to update project info & image paths
├── script.js           ← All JavaScript (cards + lightbox slider)
│
├── lumetra-assets/
│   ├── logo.webp
│   ├── main_name_logo.webp
│   └── name_logo.webp
│
└── projects-assets/
    ├── projects-1/     ← Apex Clothing Co. — Brand Identity
    │   ├── image1.webp
    │   ├── image2.webp
    │   ├── image3.webp
    │   ├── image4.webp
    │   ├── image5.webp
    │   └── image6.webp
    ├── projects-2/     ← Summer Refresh — Social Campaign
    ├── projects-3/     ← Urban Lens — Photography Series
    ├── projects-4/     ← Peaks Coffee — Website Redesign
    ├── projects-5/     ← Horizon Films — Brand Commercial
    └── projects-6/     ← NovaSphere — 3D Product Visualization
```

---

## How to Add Project Images

1. Place your `.webp` images in the matching `projects-assets/projects-N/` folder.
2. Name them `image1.webp` through `image6.webp` (you can use 2–6 images per project).
3. Open `projects.js` and update the `images` array for that project if you have fewer than 6 images — just remove the unused lines.

---

## How to Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings → Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your site will be live at `https://YOUR-USERNAME.github.io/lumetra_portfolio/`
