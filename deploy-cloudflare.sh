#!/bin/bash
# Deploy to Cloudflare Pages using Wrangler CLI

echo "🚀 Deploying to Cloudflare Pages..."
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler CLI not found"
    echo ""
    echo "Install with: npm install -g wrangler"
    echo "Then run: wrangler login"
    exit 1
fi

# Check if logged in
if ! wrangler whoami &> /dev/null; then
    echo "🔐 Not logged in to Cloudflare"
    echo "Run: wrangler login"
    exit 1
fi

echo "📦 Building deployment package..."
echo ""

# Deploy using Wrangler
wrangler pages deploy . \
    --project-name=codeutils \
    --branch=main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your site is live at:"
echo "   https://codeutils.pages.dev"
