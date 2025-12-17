#!/bin/bash
# Image optimization script for web deployment
# Reduces file sizes while maintaining quality

echo "Optimizing images for web..."

# Create backup directory
mkdir -p images/originals

# Backup originals
cp images/*.png images/*.jpg images/*.jpeg images/originals/ 2>/dev/null

# Optimize PNG files (reduce to max 1920px width, 85% quality)
for img in images/*.png; do
    if [ -f "$img" ]; then
        echo "Optimizing $img..."
        magick "$img" -resize '1920x1920>' -quality 85 -strip "${img}.tmp"
        mv "${img}.tmp" "$img"
    fi
done

# Optimize JPEG files
for img in images/*.jpg images/*.jpeg; do
    if [ -f "$img" ]; then
        echo "Optimizing $img..."
        magick "$img" -resize '1920x1920>' -quality 85 -strip "${img}.tmp"
        mv "${img}.tmp" "$img"
    fi
done

echo "Optimization complete!"
echo "Original files backed up to images/originals/"
du -sh images/

