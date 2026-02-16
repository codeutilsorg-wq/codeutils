@echo off
REM Creates a clean deployment package for Cloudflare Pages manual upload

echo 📦 Creating Cloudflare Pages deployment package...
echo.

REM Clean and create deploy directory
if exist cloudflare-deploy rmdir /s /q cloudflare-deploy
mkdir cloudflare-deploy

echo 📋 Copying production files...

REM Copy all HTML files
xcopy *.html cloudflare-deploy\ /Y /Q >nul

REM Copy asset directories
xcopy css cloudflare-deploy\css\ /E /I /Y /Q >nul
xcopy js cloudflare-deploy\js\ /E /I /Y /Q >nul
xcopy images cloudflare-deploy\images\ /E /I /Y /Q >nul
xcopy data cloudflare-deploy\data\ /E /I /Y /Q >nul

REM Copy config files
copy _headers cloudflare-deploy\ /Y >nul
copy _redirects cloudflare-deploy\ /Y >nul

REM Copy root files
copy sitemap.xml cloudflare-deploy\ /Y >nul 2>nul
copy robots.txt cloudflare-deploy\ /Y >nul 2>nul
copy favicon.ico cloudflare-deploy\ /Y >nul 2>nul

echo.
echo ✅ Deployment package created: cloudflare-deploy\
echo.
echo 🚀 Next steps:
echo 1. Go to https://dash.cloudflare.com
echo 2. Workers ^& Pages → Create → Upload assets
echo 3. Drag the 'cloudflare-deploy' folder
echo 4. Deploy!
echo.
pause
