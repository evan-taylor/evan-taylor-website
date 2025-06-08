# Evan Taylor - Personal Portfolio

A minimal, text-focused personal website built with Next.js and TypeScript. Inspired by clean, modern design principles with emphasis on content and readability.

## About

This is the personal portfolio of Evan Taylor, a Computer Science student at Cal Poly San Luis Obispo. The site showcases projects, background, and contact information in a minimalist design that prioritizes content over flashy visuals.

## Design Philosophy

- **Minimal & Clean**: Black background with white text for maximum readability
- **Typography-First**: Content is king, with careful attention to spacing and hierarchy  
- **Fast & Accessible**: Optimized for performance and screen readers
- **Mobile-Friendly**: Responsive design that works on all devices

## Features

- **Homepage**: Overview of background, projects, and current focus
- **Projects Page**: Detailed project descriptions with live links
- **About Page**: Personal journey and timeline
- **Contact Links**: Email, GitHub, LinkedIn, and Twitter

## Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS variables
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- **Deployment**: Ready for Vercel, Netlify, or similar platforms

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/evan-taylor/evan-taylor-website.git
   cd evan-taylor-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
app/
├── globals.css          # Global styles and CSS variables
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Homepage
├── about/
│   └── page.tsx        # About page with timeline
└── projects/
    └── page.tsx        # Projects showcase
```

## Customization

To adapt this for your own use:

1. Update personal information in `app/page.tsx`
2. Modify projects data in `app/projects/page.tsx`
3. Edit timeline in `app/about/page.tsx`
4. Update metadata in `app/layout.tsx`
5. Adjust colors and spacing in `app/globals.css`

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Connect your GitHub repository
2. Vercel will automatically detect Next.js and deploy
3. Your site will be live with automatic deployments on every push

Alternatively, you can deploy to Netlify, GitHub Pages, or any platform supporting static sites.

## Contact

- **Website**: [evan-taylor.com](https://evan-taylor.com)
- **Email**: [evan@evan-taylor.com](mailto:evan@evan-taylor.com)
- **GitHub**: [@evan-taylor](https://github.com/evan-taylor)
- **LinkedIn**: [evan-l-taylor](https://linkedin.com/in/evan-l-taylor)

---

Built with ❤️ by Evan Taylor
