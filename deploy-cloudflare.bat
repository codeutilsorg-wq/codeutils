@echo off
REM Deploy to Cloudflare Pages using Wrangler CLI

echo 🚀 Deploying to Cloudflare Pages...
echo.

REM Check if wrangler is installed
where wrangler >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Wrangler CLI not found
    echo.
    echo Install with: npm install -g wrangler
    echo Then run: wrangler login
    pause
    exit /b 1
)

echo 📦 Building deployment package...
echo.

REM Deploy using Wrangler
wrangler pages deploy . --project-name=codeutils --branch=main

echo.
echo ✅ Deployment complete!
echo.
echo 🌐 Your site is live at:
echo    https://codeutils.pages.dev
echo.
pause
