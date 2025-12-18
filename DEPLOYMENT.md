# Deployment Guide

## ✅ Current Status

**LIVE:** www.86groove.space (GitHub Pages + custom domain)

### What's Complete:
- ✅ Site deployed at www.86groove.space
- ✅ WebP image optimization (18MB → 1.3MB, 93% reduction)
- ✅ Picture elements with fallback to original formats
- ✅ Node.js optimization script (optimize-images.js)
- ✅ Custom domain configured via CNAME
- ✅ Dynamic date formatting with BST timezone
- ✅ Google Sheets RSVP with consent checkbox
- ✅ Geordie dialect validation messages
- ✅ Enhanced error handling for form submission

### Active Images (WebP + Fallback):
1. **Hero** (`hero-background.webp` / `.png`) - 383KB / 3MB
2. **Venue** (`bar-interior.webp` / `.jpeg`) - 150KB / 7.9MB
3. **Pizza** (`pizza-food.webp` / `.jpg`) - 198KB / 1.2MB
4. **DJ** (`dj-party.webp` / `.png`) - 127KB / 2.9MB
5. **Hosts** (`architect-1/2.webp` / `.png`) - 266KB+130KB / 2.6MB+1.2MB

**Total:** 1.3MB WebP vs 18MB originals (93% reduction)

## 🚀 Deployment Status

**Live Site:** www.86groove.space

### Custom Domain Setup (Complete)
1. ✅ CNAME file added with `www.86groove.space`
2. ✅ DNS configured to point to GitHub Pages
3. ✅ HTTPS enabled automatically by GitHub

### To Update the Live Site
```bash
git add .
git commit -m "Update description"
git push origin main
```
Changes appear within 1-2 minutes.

## ⚠️ Important Notes

### Image Optimization
**Implemented:** WebP format with `<picture>` fallback
- WebP images: **1.3MB total** (93% reduction)
- Original fallbacks: 18MB (for older browsers)
- Script: `npm run optimize-images` (Node.js + Sharp)

**Browser Support:**
- Modern browsers: Load WebP (fast)
- Older browsers: Fallback to PNG/JPG (compatible)

### Privacy Note
Venue photos are from The Grove's promotional materials and contain visible faces. These are used as-is with standard venue photography expectations.

### Still Needed: Host Photos
The "Architects" section has **placeholder boxes** for individual host portraits.

**Options:**
1. **Drag & Drop**: Open site in browser, drag individual photos onto placeholders
2. **Permanent**: Save as `images/host1.jpg` and `images/host2.jpg`, then update HTML
3. **AI Generation**: Use the beach photo you provided with AI to create stylized individual portraits

## 🎨 Customization

### Update Host Names
Edit `index.html` lines 58 and 65 ("The Ringleaders" section):
```html
<h3>The Birthday Boy</h3>  <!-- Change to actual name -->
<h3>The Other One</h3>      <!-- Change to actual name -->
```

### Update Event Details
Edit `index.html` lines 129-134 (EVENT_CONFIG object):
```javascript
const EVENT_CONFIG = {
    date: new Date('2026-05-24T17:00:00+01:00'), // BST timezone
    venue: 'Newcastle upon Tyne',
    location: 'Cocktail Bar & Terrace'
};
```
Note: Includes BST timezone for consistent global display.

## 🧪 Testing Locally

Simply open `index.html` in any browser:
```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

## 📱 Mobile Testing

The site is mobile-responsive. Test on:
- Chrome DevTools (F12 → Toggle Device Toolbar)
- Real mobile devices
- https://responsivedesignchecker.com/

## 🔒 RSVP Form

**Status**: ✅ **Fully Functional**

Google Sheets integration with enhanced features:
- Name (required), Email (optional), Response, Music Request
- Consent checkbox with privacy info tooltip
- Custom validation messages in Geordie dialect
- Enhanced error handling with user-friendly messages
- Visual feedback during submission ("LOCKING IT IN...")
- Form resets after successful submission

## 🖼️ Image Optimization

**Already Complete:** WebP images with fallback support

To re-run optimization:
```bash
npm install
npm run optimize-images
```

This generates WebP versions in `images-optimized/` directory.

## 📊 Analytics (Optional)

Add Google Analytics to track RSVPs and page views:
1. Create GA4 property
2. Add tracking code before `</head>` in `index.html`

## 🎯 Next Steps

1. **Immediate**: Commit and push to GitHub
2. **Short-term**: Add individual host photos
3. **Before launch**: Update host names and verify all details
4. **Optional**: Optimize images, add RSVP backend, consider face privacy

## 🆘 Troubleshooting

**Images not loading on GitHub Pages?**
- Ensure `images/` folder is committed and pushed
- Check file paths are relative (not absolute)
- Verify `.gitignore` isn't excluding images

**Site not updating?**
- GitHub Pages can take 1-5 minutes to deploy
- Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
- Check GitHub Actions tab for build status

**Mobile layout broken?**
- Test in Chrome DevTools responsive mode
- CSS media queries are at 768px breakpoint
- All images should be responsive (already configured)

