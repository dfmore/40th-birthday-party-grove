# Deployment Guide

## ✅ Current Status

Your website is **ready to deploy** to GitHub Pages!

### What's Complete:
- ✅ HTML merged from `gemini.html` into `index.html`
- ✅ CSS extracted to external `styles.css` file
- ✅ Original `gemini.html` deleted
- ✅ 5 high-quality venue images selected and copied to `images/` folder
- ✅ Images automatically load on page (drag-and-drop still works for replacements)
- ✅ `.gitignore` configured for GitHub
- ✅ Project structure optimized for GitHub Pages

### Selected Images (Maximum Impact):
1. **Hero Background** (`hero-background.png`) - Packed event showing industrial ceiling and crowd energy
2. **Terrace** (`venue-terrace.png`) - Rooftop terrace with Newcastle skyline
3. **Pizza** (`pizza-food.jpg`) - Byker Slice pepperoni pizza
4. **DJ/Party** (`dj-party.png`) - Bar interior with DJ booth and industrial aesthetic
5. **Extra** (`bar-interior.jpeg`) - Alternative bar shot (not currently used)

## 🚀 Deploy to GitHub Pages

### Step 1: Commit and Push

```bash
git add .
git commit -m "Add party website with venue images"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://[your-username].github.io/40th-birthday-party-grove`

## ⚠️ Important Notes

### Image Sizes
Current total: **~16MB**
- This is acceptable for GitHub but may load slowly on mobile
- Consider running `bash optimize-images.sh` to reduce to ~4-5MB
- Optimization maintains quality while improving load times

### Privacy Considerations
Several venue photos contain visible faces:
- `hero-background.png` - Crowd faces visible
- `dj-party.png` - Bartender visible

**Recommendations:**
1. Use AI face-swapping to replace with party guests
2. Apply blur/privacy filters before final deployment
3. Or use these as-is (they're from venue's promotional materials)

### Still Needed: Host Photos
The "Architects" section has **placeholder boxes** for individual host portraits.

**Options:**
1. **Drag & Drop**: Open site in browser, drag individual photos onto placeholders
2. **Permanent**: Save as `images/host1.jpg` and `images/host2.jpg`, then update HTML
3. **AI Generation**: Use the beach photo you provided with AI to create stylized individual portraits

## 🎨 Customization

### Update Host Names
Edit `index.html` lines 280 and 286:
```html
<h3>The Birthday Boy</h3>  <!-- Change to actual name -->
<h3>The Other One</h3>      <!-- Change to actual name -->
```

### Update Event Details
Edit `index.html` line 246:
```html
<p>SUNDAY MAY 24, 2026 // NEWCASTLE UPON TYNE</p>
```

### Change Countdown Date
Edit `index.html` line 332:
```javascript
var countDownDate = new Date("May 24, 2026 17:00:00").getTime();
```

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

Currently a **prototype** that shows an alert. To make it functional:

1. **Simple Solution**: Use a form service like:
   - Formspree.io (free tier available)
   - Google Forms embedded
   - Typeform

2. **Custom Solution**: Add backend with:
   - Netlify Forms (if hosting on Netlify instead)
   - AWS Lambda + API Gateway
   - Google Apps Script

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

