const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');
const outputDir = path.join(__dirname, 'images-optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization settings
const optimizationSettings = {
  // For hero and large images - higher quality
  'hero-background': { quality: 85, maxWidth: 1920 },
  'venue-terrace': { quality: 85, maxWidth: 1200 },
  'bar-interior': { quality: 85, maxWidth: 1200 },
  'dj-party': { quality: 85, maxWidth: 1200 },
  'pizza-food': { quality: 85, maxWidth: 1200 },
  // For portraits - medium quality
  'architect-1': { quality: 80, maxWidth: 800 },
  'architect-2': { quality: 80, maxWidth: 800 },
};

async function optimizeImage(filename) {
  const inputPath = path.join(imagesDir, filename);
  const baseName = path.parse(filename).name;
  const outputPath = path.join(outputDir, `${baseName}.webp`);

  // Skip if not an image file
  const ext = path.extname(filename).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    return null;
  }

  try {
    const settings = optimizationSettings[baseName] || { quality: 80, maxWidth: 1200 };
    
    const metadata = await sharp(inputPath).metadata();
    console.log(`\nProcessing: ${filename}`);
    console.log(`  Original: ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)}MB (${metadata.width}x${metadata.height})`);

    await sharp(inputPath)
      .resize(settings.maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: settings.quality })
      .toFile(outputPath);

    const outputSize = fs.statSync(outputPath).size;
    const inputSize = fs.statSync(inputPath).size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
    
    console.log(`  Optimized: ${(outputSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  Savings: ${savings}%`);

    return {
      original: filename,
      optimized: `${baseName}.webp`,
      originalSize: inputSize,
      optimizedSize: outputSize,
      savings: savings
    };
  } catch (error) {
    console.error(`Error processing ${filename}:`, error.message);
    return null;
  }
}

async function optimizeAllImages() {
  console.log('Starting image optimization...\n');
  console.log('Output directory:', outputDir);

  const files = fs.readdirSync(imagesDir);
  const imageFiles = files.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });

  const results = [];
  for (const file of imageFiles) {
    const result = await optimizeImage(file);
    if (result) results.push(result);
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));
  
  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalOptimized = results.reduce((sum, r) => sum + r.optimizedSize, 0);
  const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);

  console.log(`Total original size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total optimized size: ${(totalOptimized / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${totalSavings}%`);
  console.log(`\nOptimized images saved to: ${outputDir}`);
  console.log('\nNext steps:');
  console.log('1. Review the optimized images in images-optimized/');
  console.log('2. If satisfied, replace the originals or update HTML to use .webp');
  console.log('3. Consider adding <picture> elements for fallback support');
}

optimizeAllImages().catch(console.error);

