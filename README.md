# Arthur Bispo do Rosário - Digital Exhibition

A modern, immersive web experience celebrating the life and work of Arthur Bispo do Rosário, one of Brazil's most significant outsider artists. This single-page application combines elegant typography, smooth animations, and interactive elements to create a contemplative digital journey through Bispo's artistic legacy.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?logo=typescript)

## 🎨 Overview

This project is a digital homage to Arthur Bispo do Rosário (1909-1989), a Brazilian artist who spent most of his life in a psychiatric institution, creating an extraordinary body of work from discarded materials. The website presents his story and artwork through a carefully crafted visual narrative.

### Key Features

- **Immersive Hero Section**: Full-screen introduction with parallax effects
- **Narrative Storytelling**: Poetic text sections with fade-in animations
- **Interactive Manto Display**: Flip interaction to reveal front and back of his masterpiece
- **Full-Bleed Image Galleries**: Three pillar sections with hover effects
- **Responsive Catalog**: Modal-based artwork showcase
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets

## 🛠 Tech Stack

### Core Technologies

- **React 18.3.1** - UI library with concurrent features
- **TypeScript 5.6.2** - Type-safe development
- **Vite 5.4.19** - Next-generation frontend tooling
- **React Router DOM 6.28.0** - Client-side routing

### Styling & Animation

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 11.15.0** - Production-ready animation library
- **shadcn/ui** - Re-usable component library (48 components included)

### Development Tools

- **ESLint 9.17.0** - Code linting
- **Vitest 2.1.8** - Unit testing framework
- **PostCSS & Autoprefixer** - CSS processing

## 📁 Project Structure

```
bispodorosario/
├── public/
│   ├── Manto frente.png      # Front view of the Manto (1.9 MB)
│   ├── Manto verso.png        # Back view of the Manto (1.1 MB)
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── hero-bg.jpg        # Hero section background
│   ├── components/
│   │   ├── ui/                # shadcn/ui components (48 files)
│   │   ├── HeroSection.tsx    # Landing hero with title
│   │   ├── IntroSection.tsx   # Narrative introduction
│   │   ├── PillarsSection.tsx # Three pillars with full-bleed images
│   │   ├── MantoSection.tsx   # Interactive manto flip display
│   │   ├── CatalogSection.tsx # Artwork catalog with modal
│   │   └── FooterSection.tsx  # Footer with quote
│   ├── hooks/
│   │   ├── use-mobile.tsx     # Mobile detection hook
│   │   └── use-toast.ts       # Toast notification hook
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── pages/
│   │   ├── Index.tsx          # Main page component
│   │   └── NotFound.tsx       # 404 page
│   ├── test/
│   │   ├── example.test.ts    # Example test
│   │   └── setup.ts           # Test configuration
│   ├── App.tsx                # Root component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles & custom gradients
├── DEPLOY.md                  # Deployment guide
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd bispodorosario

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run test         # Run tests with Vitest
```

## 🎯 Component Architecture

### HeroSection

Full-screen landing with animated title and scroll indicator. Uses Framer Motion for entrance animations.

**Key Features:**

- Parallax background image
- Staggered text animations
- Gradient overlays for readability
- Animated scroll indicator

### IntroSection

Narrative text section with background image and fade-in animations.

**Key Features:**

- Full-width background with overlays
- Three animated text blocks
- Responsive typography (text-xl to text-3xl)
- Custom blue gradient for artist name

### PillarsSection

Three full-bleed horizontal stripes showcasing Bispo's artistic pillars.

**Key Features:**

- Full-width background images with overlays
- Hover effects (scale, opacity changes)
- Grid layout (7 columns text, 5 columns number)
- Large decorative numbers (01, 02, 03)
- Responsive design with mobile stacking

**Images Used:**

- O Globo Archive (2 images)
- Bienal Archive (1 image)

### MantoSection

Interactive display of Bispo's masterpiece "Manto da Apresentação".

**Key Features:**

- Click-to-flip interaction
- Fade transitions between front/back views
- Text overlays with sacred gradient
- Keyboard accessibility (Enter/Space)
- Responsive image scaling

**Technical Implementation:**

```typescript
- State management with useState
- Opacity-based transitions (700ms)
- object-contain for proper image fitting
- Gradient text with stroke for legibility
```

### CatalogSection

Grid-based artwork catalog with modal detail view.

**Key Features:**

- 2-column responsive grid
- Hover effects on cards
- Full-screen modal with image + description
- AnimatePresence for smooth modal transitions

### FooterSection

Minimalist footer with Bispo's quote.

**Key Features:**

- Centered layout
- Decorative line separator
- Quote with attribution
- Grain texture background

## 🎨 Design System

### Typography

- **Display Font**: Used for headings and artistic text
- **Body Font**: Used for readable content
- **Tracking**: Wide letter-spacing for uppercase titles (0.3em - 0.4em)

### Color Palette

```css
/* Primary (Blue) */
--primary: hsl(220 72% 55%) /* Accent (Red) */ --accent: hsl(0 70% 60%)
  /* Gradients */
  .text-gradient-blue: linear-gradient(
    135deg,
    hsl(220 72% 55%),
    hsl(200 80% 70%)
  )
  .text-gradient-sacred: linear-gradient(
    135deg,
    hsl(38 60% 75%),
    hsl(40 50% 90%)
  );
```

### Animations

- **Fade In**: opacity 0 → 1, duration 0.8s
- **Slide Up**: y: 20-40px → 0, duration 0.8s
- **Hover Scale**: scale 1 → 1.05, duration 0.7s
- **Flip Transition**: opacity cross-fade, duration 0.7s

## 📊 Performance Metrics

### Build Output

```
dist/index.html                   0.95 kB (gzip: 0.47 kB)
dist/assets/hero-bg.jpg         127.48 kB
dist/assets/index.css            67.01 kB (gzip: 11.87 kB)
dist/assets/index.js            449.71 kB (gzip: 145.50 kB)
```

### Optimization Strategies

- Code splitting with React.lazy (if needed)
- Image optimization (WebP format recommended)
- CSS purging via Tailwind
- Tree-shaking unused code
- Gzip compression

### External Resources

The application loads images from:

- Enciclopédia Itaú Cultural
- O Globo Archive
- Bienal Archive
- Museu Bispo do Rosário

## 🌐 Deployment

### Recommended Platforms

**Vercel** (Recommended)

```bash
npm install -g vercel
vercel
```

**Netlify**

```bash
npm install -g netlify-cli
netlify deploy --prod
```

**GitHub Pages**

1. Update `vite.config.ts` with base path
2. Build and deploy:

```bash
npm run build
npx gh-pages -d dist
```

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🔧 Configuration Files

### vite.config.ts

- React plugin configuration
- Path aliases (@/ → src/)
- Build optimization settings

### tailwind.config.ts

- Custom color scheme
- Font family definitions
- Animation configurations
- Plugin integrations

### tsconfig.json

- Strict type checking
- Path mapping
- ES2020 target
- React JSX transform

## 📝 Code Style

### TypeScript Conventions

- Functional components with TypeScript
- Interface definitions for props
- Explicit return types for complex functions
- Strict null checks enabled

### React Patterns

- Hooks for state management
- Component composition
- Props drilling minimization
- Controlled components for forms

### CSS Conventions

- Tailwind utility classes
- Custom gradients in index.css
- Responsive design with mobile-first approach
- Semantic class names for custom components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style
- Add tests for new features
- Update documentation
- Ensure build passes
- Test responsive design

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Arthur Bispo do Rosário** - The artist whose work inspired this project
- **Museu Bispo do Rosário** - For preserving and sharing his legacy
- **Enciclopédia Itaú Cultural** - For archival images
- **shadcn/ui** - For the component library
- **Vercel** - For the deployment platform

## 📞 Contact

For questions or feedback about this project, please open an issue on GitHub.

---

**Note**: This is a cultural and educational project celebrating Brazilian art and heritage. All images and content are used for non-commercial, educational purposes.
