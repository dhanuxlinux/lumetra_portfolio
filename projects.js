/**
 * ============================================================
 *  LUMETRA — FEATURED PROJECTS CONFIGURATION
 *  Edit this file to update the 6 projects on the website.
 * ============================================================
 *
 *  HOW TO EDIT A PROJECT:
 *  ─────────────────────────────────────────────────────────
 *  title      → Full project title shown in the card label
 *  shortTitle → Short name shown on hover overlay
 *  category   → Service category tag (e.g. "Brand Design")
 *
 *  image      → Path to your thumbnail photo (relative to index.html)
 *               Example:  image: "images/my-project.jpg"
 *               Leave empty ("") to use the generated CSS art instead.
 *
 *  theme      → CSS art theme used when image is empty.
 *               Choose one of:
 *               "brand" | "social" | "photo" | "web" | "video" | "3d"
 *
 *  images     → Array of image paths shown in the lightbox slider
 *               when a visitor clicks the project card.
 *               Add between 2 and 6 paths. Unused slots can be removed.
 *               All images live in projects-assets/projects-N/
 * ============================================================
 */

const PROJECTS = [
  {
    title:      "The Mokave Coffee - Brand Identity",
    shortTitle: "The Mokave Coffee",
    category:   "Brand Design",
    image:      "projects-assets/projects-1/image1.webp",        // ← Thumbnail (leave "" to use CSS art)
    theme:      "brand",   // ← CSS art theme
    images: [              // ← Lightbox slider images (2–6)
      "projects-assets/projects-1/image1.webp",
      "projects-assets/projects-1/image2.webp",
      "projects-assets/projects-1/image3.webp",
      "projects-assets/projects-1/image4.webp",
      "projects-assets/projects-1/image5.webp",
	  "projects-assets/projects-1/image6.webp",
	  "projects-assets/projects-1/image7.webp",
	  "projects-assets/projects-1/image8.webp",
	  "projects-assets/projects-1/image9.webp",
	  "projects-assets/projects-1/image10.webp",
	  "projects-assets/projects-1/image11.webp",
	  "projects-assets/projects-1/image12.webp",
      "projects-assets/projects-1/image13.webp"
    ]
  },
  {
    title:      "Summer Refresh - Social Campaign",
    shortTitle: "Summer Refresh Campaign",
    category:   "Social Media Marketing",
    image:      "",
    theme:      "social",
    images: [
      "projects-assets/projects-2/image1.webp",
      "projects-assets/projects-2/image2.webp",
      "projects-assets/projects-2/image3.webp",
      "projects-assets/projects-2/image4.webp",
      "projects-assets/projects-2/image5.webp",
      "projects-assets/projects-2/image6.webp"
    ]
  },
  {
    title:      "Urban Lens - Photography Series",
    shortTitle: "Urban Lens Series",
    category:   "Photography",
    image:      "",
    theme:      "photo",
    images: [
      "projects-assets/projects-3/image1.webp",
      "projects-assets/projects-3/image2.webp",
      "projects-assets/projects-3/image3.webp",
      "projects-assets/projects-3/image4.webp",
      "projects-assets/projects-3/image5.webp",
      "projects-assets/projects-3/image6.webp"
    ]
  },
  {
    title:      "Peaks Coffee - Website Redesign",
    shortTitle: "Peaks Coffee - Website",
    category:   "Web Design",
    image:      "",
    theme:      "web",
    images: [
      "projects-assets/projects-4/image1.webp",
      "projects-assets/projects-4/image2.webp",
      "projects-assets/projects-4/image3.webp",
      "projects-assets/projects-4/image4.webp",
      "projects-assets/projects-4/image5.webp",
      "projects-assets/projects-4/image6.webp"
    ]
  },
  {
    title:      "Horizon Films - Brand Commercial",
    shortTitle: "Horizon Films - Commercial",
    category:   "Video Production",
    image:      "",
    theme:      "video",
    images: [
      "projects-assets/projects-5/image1.webp",
      "projects-assets/projects-5/image2.webp",
      "projects-assets/projects-5/image3.webp",
      "projects-assets/projects-5/image4.webp",
      "projects-assets/projects-5/image5.webp",
      "projects-assets/projects-5/image6.webp"
    ]
  },
  {
    title:      "NovaSphere - 3D Product Visualization",
    shortTitle: "NovaSphere - Product Render",
    category:   "3D Design",
    image:      "",
    theme:      "3d",
    images: [
      "projects-assets/projects-6/image1.webp",
      "projects-assets/projects-6/image2.webp",
      "projects-assets/projects-6/image3.webp",
      "projects-assets/projects-6/image4.webp",
      "projects-assets/projects-6/image5.webp",
      "projects-assets/projects-6/image6.webp"
    ]
  }
];
