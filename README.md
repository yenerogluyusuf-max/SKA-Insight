# SKA Insight Website

A modern, responsive website for SKA Insight - Building bridges between Germany and Turkey through strategic consulting, project development, and management.

## Features

- 🌍 **Multi-language support** (German, English, Turkish)
- 📱 **Fully responsive design** with mobile-first approach
- ⚡ **Fast performance** with Vite build system
- 🎨 **Modern UI** with Tailwind CSS
- ♿ **Accessibility focused** with ARIA labels and keyboard navigation
- 🤖 **AI-powered insights** with Gemini integration
- 🎭 **Smooth animations** and transitions
- 🔍 **SEO optimized** with meta tags and structured data

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety (optional)
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ska-insight-website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Add your Gemini API key to `.env.local`:
```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment Options

### 1. Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### 2. Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure environment variables in Netlify dashboard

### 3. GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"deploy": "gh-pages -d dist"
```
3. Run: `npm run build && npm run deploy`

### 4. Traditional Web Hosting

1. Build the project: `npm run build`
2. Upload the contents of `dist/` folder to your web server
3. Configure your server to serve `index.html` for all routes

## Environment Variables

- `VITE_GEMINI_API_KEY` - Required for AI insights feature

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Icons.jsx       # SVG icon components
│   ├── Modal.jsx      # Modal dialog component
│   ├── ContactForm.jsx # Contact form with AI integration
│   └── ...
├── data/              # Static data and translations
│   ├── translations.js # Multi-language content
│   └── references.js   # Partner references
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
└── App.jsx           # Main application component
```

## Customization

### Adding New Languages

1. Add translations to `src/data/translations.js`
2. Update the language selector in `App.jsx`

### Styling

The project uses Tailwind CSS. Customize styles in:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles and utilities

### Content Updates

Update content in `src/data/translations.js` for all supported languages.

## Performance Optimization

- Images are optimized with proper sizing
- Code splitting with dynamic imports
- Lazy loading for better performance
- SEO meta tags and structured data

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2024 SKA Insight GbR. All rights reserved.
