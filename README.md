# 🚀 Zanfuu - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcasing my work as a Frontend Developer with a clean, elegant design and smooth animations.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional layout with gradient backgrounds
- 📱 **Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🌙 **Dark Mode** - Toggle between light and dark themes
- ⚡ **Fast Performance** - Built with Next.js 14 and optimized for speed
- 🎭 **Smooth Animations** - Framer Motion animations for better UX
- 📧 **Contact Form** - Working contact form with email integration
- 🎯 **SEO Optimized** - Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: Nodemailer
- **Icons**: Custom SVG icons
- **Fonts**: Geist Sans & Geist Mono

## 📋 Sections

- **🏠 Home** - Hero section with introduction and CTA buttons
- **👤 About** - Personal information and statistics
- **🛠️ Skills** - Technical skills with progress bars and categories
- **🚀 Projects** - Portfolio projects with filtering by category
- **💼 Experience** - Work experience timeline
- **📜 Certificates** - Professional certifications
- **📞 Contact** - Contact form with email integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/zanfuu-portfolio.git
   cd zanfuu-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Setup

To enable the contact form, you need to set up Gmail App Password:

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable **2-Step Verification**
3. Go to **App passwords** → **Generate app password**
4. Select **Mail** and **Other (custom name)**
5. Enter "Portfolio Contact Form" as the name
6. Copy the generated password
7. Add it to your `.env.local` file

## 🎨 Customization

### Colors & Theme
- Edit gradient colors in `app/page.tsx`
- Modify color scheme in `tailwind.config.js`
- Update dark mode colors in component files

### Content
- Update personal information in section components
- Add/modify projects in `data/projects.ts`
- Update skills in `data/skills.ts`
- Modify experience in `data/experiences.ts`
- Add certificates in `data/certificates.ts`

### Styling
- All components use Tailwind CSS classes
- Animations are handled by Framer Motion
- Responsive design with mobile-first approach

## 📁 Project Structure

```
zanfuu/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── experiences/       # Experience page
│   ├── projects/          # Projects page
│   ├── certificates/      # Certificates page
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── layouts/           # Layout components
│   ├── sections/          # Page sections
│   ├── pages/             # Page-specific components
│   └── ui/                # Reusable UI components
├── data/                  # Static data files
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Deploy with Railway CLI
- **DigitalOcean**: Use App Platform

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/zanfuu-portfolio/issues).

## 📞 Contact

**Fauzan Naufal Azmi (Zanfuu)**
- Email: fnaufalazmi09@gmail.com
- Phone: +62 812-2172-0785
- Location: Jakarta, Indonesia

---

⭐ **Star this repository if you found it helpful!**