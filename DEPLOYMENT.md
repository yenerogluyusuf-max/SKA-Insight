# 🚀 SKA Insight Website - Deployment Guide

This guide will help you deploy your improved SKA Insight website online. Choose the deployment method that works best for you.

## 📋 Prerequisites

Before deploying, you'll need:

1. **Node.js 18+** installed on your system
2. **Git** for version control
3. **A GitHub account** (for most deployment options)
4. **A Gemini API key** (for AI features)

### Installing Node.js

**Option 1: Download from official website**
- Visit [nodejs.org](https://nodejs.org/)
- Download and install the LTS version

**Option 2: Using Homebrew (macOS)**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

**Option 3: Using nvm (Node Version Manager)**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

## 🛠️ Local Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Create environment file:**
```bash
cp .env.example .env.local
```

3. **Add your Gemini API key to `.env.local`:**
```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

4. **Test locally:**
```bash
npm run dev
```

5. **Build for production:**
```bash
npm run build
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is perfect for React applications and offers:
- ✅ Automatic deployments from GitHub
- ✅ Global CDN
- ✅ Free tier with generous limits
- ✅ Easy environment variable management

**Steps:**

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/ska-insight-website.git
git push -u origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable: `VITE_GEMINI_API_KEY`
   - Click "Deploy"

3. **Custom domain (optional):**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

Netlify offers similar features to Vercel with excellent React support.

**Steps:**

1. **Push to GitHub** (same as Vercel)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up and connect GitHub
   - Click "New site from Git"
   - Choose your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Add environment variable: `VITE_GEMINI_API_KEY`
   - Click "Deploy site"

3. **Custom domain:**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Update DNS records

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

**Steps:**

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add deploy script to package.json:**
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy:**
```bash
npm run build
npm run deploy
```

4. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Your site will be at: `https://yourusername.github.io/ska-insight-website`

### Option 4: Traditional Web Hosting

For shared hosting providers like cPanel, Bluehost, etc.

**Steps:**

1. **Build the project:**
```bash
npm run build
```

2. **Upload files:**
   - Upload the entire contents of the `dist/` folder
   - Upload to your web server's public directory (usually `public_html` or `www`)

3. **Configure server:**
   - Ensure your server serves `index.html` for all routes
   - Add `.htaccess` file for Apache servers:
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

## 🔧 Environment Variables

For all deployment platforms, you'll need to set:

- `VITE_GEMINI_API_KEY` - Your Gemini API key for AI insights

### Getting a Gemini API Key:

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click "Get API Key"
4. Create a new API key
5. Copy the key and add it to your deployment platform

## 🎯 Performance Optimization

Your website is already optimized with:

- ✅ **Code splitting** - Only loads what's needed
- ✅ **Image optimization** - Proper sizing and formats
- ✅ **Lazy loading** - Components load as needed
- ✅ **Minimal bundle size** - Efficient build process
- ✅ **SEO optimization** - Meta tags and structured data

## 📊 Monitoring & Analytics

### Google Analytics (Optional)

Add to your `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics (if using Vercel)

1. Install: `npm install @vercel/analytics`
2. Add to `main.jsx`:
```jsx
import { Analytics } from '@vercel/analytics/react';

// In your App component
<Analytics />
```

## 🔄 Continuous Deployment

Once set up, your website will automatically deploy when you:

1. Push changes to your main branch
2. The deployment platform detects changes
3. Runs `npm run build`
4. Deploys the new version

## 🛡️ Security Considerations

- ✅ **HTTPS enabled** by default on all platforms
- ✅ **Environment variables** are secure and not exposed
- ✅ **No sensitive data** in the client-side code
- ✅ **API keys** are properly protected

## 🆘 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Environment Variables Not Working
- Ensure variables start with `VITE_`
- Restart your development server
- Check deployment platform settings

### Images Not Loading
- Check image URLs are accessible
- Ensure proper CORS headers
- Use relative paths for local images

## 📞 Support

If you encounter issues:

1. Check the deployment platform's documentation
2. Verify all environment variables are set
3. Ensure Node.js version is 18+
4. Check browser console for errors

## 🎉 Success!

Once deployed, your website will be live and accessible worldwide with:
- ⚡ Fast loading times
- 📱 Mobile responsiveness  
- 🌍 Multi-language support
- 🤖 AI-powered insights
- ♿ Accessibility features

Your SKA Insight website is now ready to help build bridges between Germany and Turkey!
