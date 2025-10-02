# Dean Walston's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with custom color scheme
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling between sections
- **Dark Theme**: Elegant dark color palette with blue and tan accents
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Next.js for optimal loading speeds

## 📋 Sections

- **Hero**: Personal introduction with contact links
- **Summary**: Professional overview and certifications
- **Skills**: Technical skills organized by category
- **Education**: Academic background and current programs
- **Experience**: Professional work history with detailed achievements
- **Leadership**: Leadership roles and activities

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any modern hosting platform

## 💻 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/dahw/ideal-portfolio.git
   cd ideal-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**

   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live!

**Alternative: GitHub Integration**

- Connect your GitHub repository to Vercel
- Automatic deployments on every push to main branch
- Visit [vercel.com](https://vercel.com) to get started

### 2. Netlify

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy the `out` folder** to Netlify
   - Drag and drop the `out` folder to Netlify's deploy page
   - Or connect your GitHub repository for automatic deployments

### 3. GitHub Pages

1. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** scripts:

   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d out"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### 4. Custom Server

For self-hosting on your own server:

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Start the production server**

   ```bash
   npm run start
   ```

3. **Configure reverse proxy** (nginx, Apache, etc.) to point to port 3000

## 📁 Project Structure

```
ideal-portfolio/
├── components/
│   ├── portfolio/          # Portfolio-specific components
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Summary.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   └── Leadership.tsx
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── sheet.tsx
├── lib/
│   └── utils.ts           # Utility functions
├── pages/
│   ├── _app.tsx          # App wrapper
│   └── index.tsx         # Main portfolio page
├── styles/
│   └── globals.css       # Global styles
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Colors

The color scheme is defined in the main component styles:

- **Primary Background**: `#1a1d29`
- **Secondary Background**: `#252837`
- **Accent Blue**: `#4a90e2`
- **Accent Tan**: `#d4b896`
- **Text Primary**: `#e8eaed`
- **Text Secondary**: `#9ca3af`

### Content

Update the content in each component file:

- Personal information in `Hero.tsx`
- Professional summary in `Summary.tsx`
- Skills in `Skills.tsx`
- Education details in `Education.tsx`
- Work experience in `Experience.tsx`
- Leadership activities in `Leadership.tsx`

## 📞 Contact

Dean Aldric Harrison Walston

- **Email**: Dwalston252@gmail.com
- **Phone**: 404-625-7717
- **LinkedIn**: [dean-walston](https://www.linkedin.com/in/dean-walston)
- **GitHub**: [deanwalston](https://github.com/dahw)

---

Built with ❤️ using Next.js and TypeScript
