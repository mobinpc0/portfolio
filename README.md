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
- **Sections** — Hero, About, Skills, Experience & Education, Projects, Research, Achievements & Certificates, Contact

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
│   ├── Achievements.tsx    # Achievements & certificates (click to enlarge)
│   ├── Experience.tsx      # Education + experience timeline
│   ├── Hero.tsx            # 3D animated hero with sphere
│   ├── Navbar.tsx          # Navigation bar + mobile menu
│   ├── Projects.tsx        # Project showcase cards
│   ├── Research.tsx        # Conference papers with DOIs
│   ├── Skills.tsx          # Skills + tool logos by domain
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

All portfolio content is centralized in **`constants.ts`**. Images live in **`public/img/`** (`projects/`, `certs/`, `logos/`, `profile.jpg`).

| Export          | What it controls                                           |
| --------------- | ---------------------------------------------------------- |
| `PROFILE`       | Name, email, phone, LinkedIn, GitHub, location             |
| `NAV_LINKS`     | Navigation menu items                                      |
| `SKILL_DOMAINS` | Skill tabs: skills list and tool logos                     |
| `EDUCATION`     | Degrees and results                                        |
| `EXPERIENCES`   | Training and club experience                               |
| `PROJECTS`      | Project cards (image, bullet points, tech, links)          |
| `RESEARCH`      | Papers (venue, authors, DOI or status)                     |
| `ACHIEVEMENTS`  | Rank, competitions and certificates (image in `public/img/certs`) |

TypeScript interfaces are in **`types.ts`**. To add a tool logo, drop the file in `public/img/logos/` and reference it from `SKILL_DOMAINS`.

### Theme Colors

Theme colors (cyan accents, dark backgrounds) are configured in the Tailwind config inside `index.html`:

```js
colors: {
  gold: { 400: '#38BDF8', 500: '#00F0FF', 600: '#0284C7' },
  dark: { 950: '#030712', 900: '#060B18', 800: '#0F172A' }
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
