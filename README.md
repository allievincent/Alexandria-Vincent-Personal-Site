# Allie Vincent: personal website

My personal site, built with React, Vite, Tailwind CSS and React Router.

**Live site:** https://YOUR-PROJECT.vercel.app

## Features
- Sticky navbar that highlights the section you're on + mobile hamburger menu
- Dark mode toggle (saves your choice)
- Typing animation and waving hand in the hero
- Experience timeline, skill icons, and project cards
- Contact form that opens your email app with the message filled in
- Separate `/research` page about my research project
- Fade-in animations on scroll and a back-to-top button
- Custom 404 page

Inspiration: andrejdeveloper.com (typing effect), benscott.dev (layout), the App Brewery capstone example, and a few YouTube React + Tailwind portfolio tutorials.

## Project structure
```
src/
  components/   reusable UI: Navbar, Button, SectionTitle, ProjectCard, TimelineItem, SkillCard, ContactForm...
  pages/
    Home/       one file per section (Hero, About, Experience, Projects, Resume, Contact)
    Research/   research write-up page
    NotFound/   404 page
  hooks/        useTheme, useActiveSection, useScrollToSection
  assets/icons/ skill icons (from devicon)
  data/         profile.js — all site content lives here
  App.jsx       routes
  main.jsx      entry point
public/         resume PDF + headshot.jpeg
```
To change any text, edit `src/data/profile.js`.

## Run it locally
```bash
npm install
npm run dev
```
Then open http://localhost:5173.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. On vercel.com, click **Add New → Project** and import the repo.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Click **Deploy**.

`vercel.json` makes routes like `/research` work when you refresh the page.
