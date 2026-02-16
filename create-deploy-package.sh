#!/bin/bash
# Creates a clean deployment package for Cloudflare Pages manual upload

echo "📦 Creating Cloudflare Pages deployment package..."

# Create deploy directory
rm -rf cloudflare-deploy
mkdir cloudflare-deploy

# Copy only production files
echo "📋 Copying production files..."

# Copy all HTML files (59 tools + index)
cp *.html cloudflare-deploy/

# Copy assets
cp -r css cloudflare-deploy/
cp -r js cloudflare-deploy/
cp -r images cloudflare-deploy/
cp -r data cloudflare-deploy/

# Copy config files
cp _headers cloudflare-deploy/
cp _redirects cloudflare-deploy/

# Copy root files
cp sitemap.xml cloudflare-deploy/
cp robots.txt cloudflare-deploy/ 2>/dev/null || true
cp favicon.ico cloudflare-deploy/ 2>/dev/null || true

# Summary
echo ""
echo "✅ Deployment package created: cloudflare-deploy/"
echo ""
echo "📊 Package contents:"
du -sh cloudflare-deploy/
echo ""
echo "📁 Files included:"
find cloudflare-deploy -type f | wc -l
echo ""
echo "🚀 Next steps:"
echo "1. Go to https://dash.cloudflare.com"
echo "2. Workers & Pages → Create → Upload assets"
echo "3. Drag the 'cloudflare-deploy' folder"
echo "4. Deploy!"
echo ""
echo "💡 Or compress it:"
echo "   cd cloudflare-deploy && zip -r ../cloudflare-deploy.zip . && cd .."
