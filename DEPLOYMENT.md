# Deployment Guide

## ✅ Current Status

**LIVE:** www.86groove.space (GitHub Pages + custom domain)

### What's Complete:
- ✅ Site deployed at www.86groove.space
- ✅ Custom domain configured via CNAME
- ✅ Dynamic date formatting with BST timezone
- ✅ Google Sheets RSVP with consent checkbox
- ✅ Geordie dialect validation messages
- ✅ Enhanced error handling for form submission
- ✅ Email made optional in RSVP form
- ✅ Venue image updated to bar interior
- ✅ Pizza image updated to higher quality

### Active Images:
1. **Hero** (`hero-background.png`) - Packed event, industrial ceiling
2. **Venue** (`bar-interior.jpeg`) - Premium cocktail bar interior
3. **Pizza** (`pizza-food.jpg`) - Byker Slice pizza (1.2MB)
4. **DJ** (`dj-party.png`) - Party vibe with DJ booth
5. **Hosts** (`architect-1.png`, `architect-2.png`) - Placeholder portraits

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

### Image Sizes
Current total: **~18MB**
- Consider running `bash optimize-images.sh` for faster mobile loading
- Pizza image recently updated (now 1.2MB)

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

