# Brian Kim - Student Portfolio Website

A professional, mobile-first portfolio website built with **Astro** and **Tailwind CSS**, designed for easy content management and free hosting on **GitHub Pages**.

![Astro](https://img.shields.io/badge/Astro-4.x-ff5d01?logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A GitHub account (for deployment)

### 1. Install Dependencies

```bash
cd Website
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
Website/
├── public/
│   ├── favicon.svg           # Site favicon (replace with your own)
│   ├── robots.txt            # SEO crawling rules
│   ├── images/
│   │   └── projects/         # Project thumbnails go here
│   └── files/
│       └── resume.pdf        # Your resume PDF (add this)
├── src/
│   ├── components/
│   │   └── ProjectCard.astro # Reusable project card
│   ├── content/
│   │   ├── config.ts         # Content collection schema
│   │   └── projects/         # Your project Markdown files
│   │       ├── engineering-challenge.md
│   │       ├── business-plan.md
│   │       ├── stem-lab.md
│   │       └── leadership-event.md
│   ├── layouts/
│   │   └── Layout.astro      # Main site layout
│   ├── pages/
│   │   ├── index.astro       # Home page
│   │   ├── about.astro       # About page
│   │   ├── resume.astro      # Resume page
│   │   ├── contact.astro     # Contact page
│   │   └── projects/
│   │       ├── index.astro   # Projects listing
│   │       └── [slug].astro  # Individual project pages
│   └── styles/
│       └── global.css        # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind configuration
├── package.json
└── README.md
```

---

## 📝 How to Customize Content

### Updating Your Information

Look for `<!-- PLACEHOLDER -->` comments throughout the code. Key files to update:

| File | What to Update |
|------|----------------|
| `src/layouts/Layout.astro` | Name, meta description, social links |
| `src/pages/index.astro` | Hero tagline, about preview, interests |
| `src/pages/about.astro` | Full bio, education, skills, activities |
| `src/pages/resume.astro` | Complete resume content |
| `src/pages/contact.astro` | Email address, social links |
| `astro.config.mjs` | Your GitHub Pages URL |

### Adding a New Project

1. **Create a Markdown file** in `src/content/projects/`:

```markdown
---
title: "Your Project Title"
description: "A brief description of your project (1-2 sentences)"
date: "2024-01-15"
tags: ["Engineering", "STEM"]
role: "Your Role"
tools: ["Tool 1", "Tool 2", "Tool 3"]
thumbnail: "/images/projects/your-image.jpg"
links:
  demo: "https://example.com"
  github: "https://github.com/..."
  document: "https://docs.google.com/..."
featured: true
draft: false
---

## Overview

Write your project description here using Markdown...

## What I Did

- Accomplishment 1
- Accomplishment 2

## Results

Describe the outcomes and what you learned.
```

2. **Add your project image** to `public/images/projects/`

3. **Set `featured: true`** if you want it on the homepage

4. **Push to GitHub** - the site rebuilds automatically!

### Available Tags

Use these tags for consistency (or create your own):
- `Engineering`
- `Business`
- `STEM`
- `Leadership`

### Adding Images

1. Save images to `public/images/projects/`
2. Recommended size: 1200x630px
3. Reference in Markdown: `thumbnail: "/images/projects/filename.jpg"`

### Adding Your Resume PDF

1. Export your resume as PDF
2. Save as `public/files/resume.pdf`
3. The download button will automatically work

---

## 🎨 Customization

### Colors

Edit `tailwind.config.mjs` to change the color palette:

```javascript
colors: {
  primary: {
    500: '#3b82f6', // Main brand color
    // ... other shades
  },
  accent: {
    500: '#d946ef', // Accent color
    // ... other shades
  },
}
```

### Fonts

The site uses Google Fonts (Inter + Outfit). To change:

1. Edit `src/styles/global.css` - update the `@import` URL
2. Edit `tailwind.config.mjs` - update `fontFamily`

### Dark Mode

Dark mode is automatic based on system preference. Users can toggle manually using the button in the navbar.

---

## 🚀 Deploying to GitHub Pages

### Step 1: Create GitHub Repository

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Configure Astro for GitHub Pages

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  // Replace with your actual values
  site: 'https://YOUR-USERNAME.github.io',
  base: '/YOUR-REPO-NAME',
  // ...
});
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment", select **GitHub Actions**
4. The workflow will run automatically and deploy your site

### Step 4: Access Your Site

Your site will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

---

## 🔧 Troubleshooting

### "Page Not Found" after deployment

- Make sure `base` in `astro.config.mjs` matches your repository name
- Check that the GitHub Actions workflow completed successfully

### Images not loading

- Ensure image paths start with `/` (e.g., `/images/projects/photo.jpg`)
- Check that files exist in the `public/` folder

### Contact form not working

The form uses a placeholder action. To make it work:

1. **Option A: Use Formspree** (recommended)
   - Go to [formspree.io](https://formspree.io)
   - Create a free form
   - Replace `action="https://formspree.io/f/your-form-id"` with your form ID

2. **Option B: Use mailto fallback**
   - Uncomment the mailto code in `contact.astro`
   - Update the email address

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Credits

Built with:
- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ for student portfolios**
