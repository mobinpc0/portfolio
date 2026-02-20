# ✨ Md. Samiul Islam Mobin — Portfolio

A modern, interactive personal portfolio built with **React 19**, **Three.js**, and **Framer Motion**. Features a stunning 3D animated hero section, smooth scroll animations, dark/light theme toggle, and a fully responsive design.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.183-black?logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)

---

## 🎯 Features

- **3D Animated Hero** — Interactive distorted sphere using React Three Fiber & Drei
- **Dark / Light Theme** — Seamless toggle with persistent color scheme
- **Smooth Animations** — Section transitions powered by Framer Motion
- **Custom Cursor** — Unique cursor effect on desktop (hidden on touch devices)
- **Responsive Design** — Optimized for mobile, tablet, and desktop
- **Sections** — Hero, About, Skills, Projects, Research, Gallery, Contact

---

## 🛠️ Tech Stack

| Layer        | Technology                                       |
| ------------ | ------------------------------------------------ |
| Framework    | React 19 + TypeScript                            |
| Build Tool   | Vite 6                                           |
| 3D Graphics  | Three.js, @react-three/fiber, @react-three/drei  |
| Animations   | Framer Motion                                    |
| Icons        | Lucide React                                     |
| Styling      | Tailwind CSS (CDN) + Custom CSS                  |
| Fonts        | Inter, Playfair Display (Google Fonts)            |

---

## 📁 Project Structure

```
portfolio-main/
├── components/
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact form / info
│   ├── CustomCursor.tsx    # Custom cursor (desktop only)
│   ├── Gallery.tsx         # Photo gallery grid
│   ├── Hero.tsx            # 3D animated hero with sphere
│   ├── Navbar.tsx          # Navigation bar + mobile menu
│   ├── Projects.tsx        # Project showcase cards
│   ├── Research.tsx        # Research publications
│   ├── Skills.tsx          # Skills with progress bars
│   └── ThemeContext.tsx    # Dark/light theme provider
├── App.tsx                 # Root component
├── index.tsx               # React entry point
├── index.html              # HTML shell + Tailwind config
├── index.css               # Global styles & animations
├── constants.ts            # All portfolio data (projects, skills, etc.)
├── types.ts                # TypeScript interfaces
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** — v18 or higher ([download](https://nodejs.org/))
- **npm** — Comes bundled with Node.js

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in your browser**

   ```
   http://localhost:3000
   ```

---

## 📦 Available Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start the dev server on port 3000        |
| `npm run build`     | Build for production (outputs to `dist/`)|
| `npm run preview`   | Preview the production build locally     |

---

## ✏️ Customization

All portfolio content is centralized in **`constants.ts`** — edit this single file to update:

| Export        | What it controls                              |
| ------------- | --------------------------------------------- |
| `NAV_LINKS`   | Navigation menu items                         |
| `SKILLS`      | Skill names and proficiency levels (0–100)    |
| `EXPERIENCES` | Work & training experience entries            |
| `PROJECTS`    | Project cards (title, image, description, tech)|
| `RESEARCH`    | Research publications and journal info        |
| `GALLERY`     | Photo gallery image URLs and titles           |

TypeScript interfaces for the above are defined in **`types.ts`**.

### Theme Colors

Theme colors (gold accents, dark mode backgrounds) are configured in the Tailwind config inside `index.html`:

```js
colors: {
  gold:  { 400: '#FACC15', 500: '#EAB308', 600: '#CA8A04' },
  dark:  { 900: '#0f0f0f', 800: '#1a1a1a', 700: '#2a2a2a' }
}
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — deploy with zero config

### Netlify

1. Push your code to GitHub
2. Connect on [netlify.com](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Manual / Static Hosting

```bash
npm run build
```

Upload the contents of the `dist/` folder to any static hosting provider.

---

## 📄 License

This project is private. All rights reserved.
