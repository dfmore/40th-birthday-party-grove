# THE 4-0 | 40th Birthday Party Website

A sophisticated, industrial-chic landing page for a joint 40th birthday celebration at The Grove, Newcastle.

## 🎉 Event Details

- **Date**: Sunday, May 24, 2026
- **Venue**: The Grove Cocktail Bar & Rooftop Terrace, Newcastle upon Tyne
- **Vibe**: Industrial chic meets sophisticated rager

## 🚀 Quick Start

1. Open `index.html` in any modern browser
2. The site works completely standalone - no build process needed
3. All images load automatically from the `images/` folder

## 📁 Project Structure

```
├── index.html          # Main landing page
├── styles.css          # All styling
├── favicon*.png/ico    # Favicons (multiple sizes)
├── apple-touch-icon.png # iOS home screen icon
├── robots.txt          # SEO configuration
├── CNAME               # Custom domain config
├── images/             # Venue photos (WebP + originals)
│   ├── *.webp          # Optimized images (~1.3MB total)
│   └── *.png/jpg       # Original images (~18MB fallback)
├── optimize-images.js  # Image optimization script
└── package.json        # Node dependencies (sharp)
```

## ✨ Features

- **WebP Images**: Optimized images with fallback support (93% size reduction)
- **SEO Ready**: Favicons, robots.txt, meta tags for social sharing
- **Countdown Timer**: Live countdown with timezone handling (BST)
- **Dynamic Date Formatting**: Single source of truth for event date
- **RSVP Form**: Google Sheets integration with consent checkbox & music requests
- **Geordie Flavour**: Custom validation messages in local dialect
- **Drag & Drop Images**: Replace any image by dragging a new one
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Industrial Theme**: Grove Orange (#ff4d00) accents

## 🎨 Design

- **Fonts**: Oswald (headers) + Inter (body)
- **Color Scheme**: Dark mode with Grove Orange (#ff4d00) accents
- **Aesthetic**: Industrial warehouse meets premium cocktail lounge

## 🌐 Deployment

**Live at:** www.86groove.space (GitHub Pages + custom domain)

### To Update
```bash
git add .
git commit -m "Update description"
git push origin main
```
Changes appear within 1-2 minutes.

### Image Optimization
Re-run optimization if adding new images:
```bash
npm install
npm run optimize-images
```

## 📝 Still Needed

- [ ] Add individual host portrait photos (currently placeholders)
- [ ] Update host names in "The Ringleaders" section

## 📸 Image Credits

All venue photography © The Grove, Newcastle

