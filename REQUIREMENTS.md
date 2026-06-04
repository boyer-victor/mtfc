# MTFC Asset Requirements

Replace the following before launch. Each entry lists the exact path and the spec.

## Logo
- **File:** `src/assets/icons/logo.svg`
- **Spec:** Club logo SVG. Must render on dark backgrounds (#0a0e0e). Provide full-color and white/mono versions if available.

## Hero Image
- **File:** `src/assets/images/placeholder-hero.svg`
- **Replace with:** `src/assets/images/hero.webp`
- **Spec:** High-resolution fencing action photo, minimum 1920×1080px. After adding, update the import path in `src/components/Hero.astro`.

## Coach Photos
- **File:** `src/assets/images/placeholder-coach-1.svg` → `src/assets/images/coach-[name].webp`
  - **Spec:** Headshot or action photo. Square crop preferred, minimum 400×400px. Update import in `src/pages/coaches.astro` and `src/pages/index.astro`.
- **File:** `src/assets/images/placeholder-coach-2.svg` → `src/assets/images/coach-[name].webp`
- **File:** `src/assets/images/placeholder-coach-3.svg` → `src/assets/images/coach-[name].webp`

## Gallery Images
- **Files:** `src/assets/images/placeholder-gallery-1.svg` through `placeholder-gallery-6.svg`
- **Replace with:** `src/assets/images/gallery-1.webp` through `gallery-6.webp`
- **Spec:** Action or club event photos, minimum 800×600px each. Update imports in `src/pages/gallery.astro`.

## Private Lesson Booking Links
- **Find by:** searching for `data-todo="cal.com"` across the codebase
- **Replace with:** Individual Cal.com booking URLs per coach once Cal.com is configured (Stage 2).

## ZenPlanner URL
- **File:** `src/config/site.ts` → `ZENPLANNER_EMBED_URL`
- **Spec:** Your ZenPlanner portal or embed URL. Found in your ZenPlanner admin dashboard under the embed/integration settings.

## Social Links
- **File:** `src/config/site.ts` → `SOCIAL` object
- **Spec:** Real Instagram, Facebook, and YouTube profile URLs for the club.

## Copy & Content
- **Find by:** searching for `<!-- TODO: Replace with real copy -->` in all `.astro` files
- **Replace with:** Real club history, mission statement, values, facility description, and contact details.

## Address
- **File:** `src/pages/about.astro`
- **Find:** `123 Placeholder Street`
- **Replace with:** Real club address.

## Announcements
- **File:** `src/data/announcements.ts`
- **Spec:** Replace placeholder entries with real club news. Add new entries at the top of the array — most recent first.
