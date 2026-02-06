/**
 * Code Utils - Build Script
 * Minifies CSS and JavaScript files for production
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔨 Building minified assets for Code Utils...\n');

// Check if dependencies are installed
function checkDependencies() {
    try {
        require.resolve('terser');
        require.resolve('clean-css');
        return true;
    } catch (e) {
        return false;
    }
}

// Install dependencies if needed
if (!checkDependencies()) {
    console.log('📦 Installing minification tools...');
    console.log('   - terser (JavaScript minifier)');
    console.log('   - clean-css-cli (CSS minifier)\n');

    try {
        execSync('npm install --save-dev terser clean-css-cli', { stdio: 'inherit' });
        console.log('\n✅ Dependencies installed!\n');
    } catch (err) {
        console.error('❌ Failed to install dependencies');
        process.exit(1);
    }
}

// Get file size in KB
function getFileSize(filePath) {
    const stats = fs.statSync(filePath);
    return (stats.size / 1024).toFixed(2);
}

// Minify JavaScript
console.log('📦 Minifying JavaScript...');
try {
    const jsInput = 'js/common.js';
    const jsOutput = 'js/common.min.js';

    const originalSize = getFileSize(jsInput);

    execSync(`npx terser ${jsInput} -o ${jsOutput} -c -m --comments false`, { stdio: 'pipe' });

    const minifiedSize = getFileSize(jsOutput);
    const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(1);

    console.log(`   ✅ ${jsInput} → ${jsOutput}`);
    console.log(`      ${originalSize} KB → ${minifiedSize} KB (${savings}% smaller)\n`);
} catch (err) {
    console.error('❌ JavaScript minification failed:', err.message);
    process.exit(1);
}

// Minify CSS
console.log('🎨 Minifying CSS...');
try {
    const cssFiles = [
        'css/variables.css',
        'css/base.css',
        'css/components.css'
    ];

    // Calculate total original size
    const totalOriginalSize = cssFiles.reduce((sum, file) => {
        return sum + parseFloat(getFileSize(file));
    }, 0);

    const cssOutput = 'css/common.min.css';
    const cssInput = cssFiles.join(' ');

    execSync(`npx cleancss ${cssInput} -o ${cssOutput}`, { stdio: 'pipe' });

    const minifiedSize = getFileSize(cssOutput);
    const savings = ((1 - minifiedSize / totalOriginalSize) * 100).toFixed(1);

    console.log(`   ✅ ${cssFiles.length} CSS files → ${cssOutput}`);
    console.log(`      ${totalOriginalSize.toFixed(2)} KB → ${minifiedSize} KB (${savings}% smaller)\n`);
} catch (err) {
    console.error('❌ CSS minification failed:', err.message);
    process.exit(1);
}

// Summary
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Build complete!\n');
console.log('📁 Minified files created:');
console.log('   - css/common.min.css');
console.log('   - js/common.min.js\n');
console.log('📝 Next steps:');
console.log('   1. Update HTML files to use .min. versions');
console.log('   2. Test locally to ensure everything works');
console.log('   3. Commit and deploy to Netlify');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
