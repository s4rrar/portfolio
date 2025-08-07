# AL-Hassan Sarrar - Portfolio

A modern, responsive portfolio website built with React, showcasing expertise in Computer Science, Cyber Security, Full Stack Development, and Data Science.

<img width="1919" height="939" alt="image" src="https://github.com/user-attachments/assets/d917cc07-fddd-4158-ab2d-31e5a5e43444" />

## Features

- **Modern Dark Theme**: Sleek dark design with red accent colors
- **Fully Responsive**: Perfect display on all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Typewriter Effect**: Dynamic typing animation for professional titles
- **Interactive Progress Bars**: Circular and linear progress indicators for skills
- **Real-time Stats**: Live statistics display with smooth counter animations
- **Social Integration**: Direct links to GitHub, LinkedIn, Twitter, and more
- **Intuitive Navigation**: Clean menu system with smooth transitions

## Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Next.js (Client-side rendering)

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/s4rrar/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Key Sections

### 1. **Hero Section**
- Dynamic typewriter effect showing multiple professional titles
- Call-to-action button linking to GitHub projects
- Professional profile image with hover effects

### 2. **Personal Information**
- Auto-calculated age based on birthdate
- Location and contact details
- Social media links with smooth hover animations

### 3. **Skills & Languages**
- Interactive circular progress bars for language proficiency
- Linear progress bars for technical skills
- Smooth animation on page load

### 4. **Statistics**
- Real-time counters for projects, clients, awards, and contributions
- Grid layout optimized for different screen sizes

### 5. **Expertise Cards**
- Detailed descriptions of core competencies
- Hover effects with smooth transitions
- Organized in responsive grid layout

## Customization

### Personal Information
Update the `personalInfo` object in `app/page.tsx`:

```typescript
const personalInfo = {
  name: "Your Name",
  titles: ["Your", "Professional", "Titles"],
  residence: "Your Country",
  city: "Your City",
  // ... other fields
};
```

### Skills & Languages
Modify the `skills` and `languages` arrays:

```typescript
const skills = [
  { name: "Your Skill", percentage: 95 },
  // ... add more skills
];
```

### Color Scheme
The portfolio uses a red accent color. To change it, update Tailwind classes:
- `text-red-400` → `text-blue-400`
- `bg-red-500` → `bg-blue-500`
- `border-red-500` → `border-blue-500`

## Responsive Design

The portfolio is built with mobile-first approach:
- **Mobile**: Optimized for small screens with stacked layout
- **Tablet**: Adjusted spacing and font sizes
- **Desktop**: Full sidebar layout with expanded content

## Performance Optimizations

- Lazy loading for images
- Optimized animations with `will-change` property
- Tree-shaking for minimal bundle size
- Efficient re-renders with React hooks


## Contact

**AL-Hassan Sarrar**
- LinkedIn: [linkedin.com/in/s4rrar](https://www.linkedin.com/in/s4rrar)
- GitHub: [github.com/s4rrar](https://github.com/s4rrar)
- Email: s4rrar@protonmail.com
- Telegram: [@s4rrar](https://t.me/s4rrar)

---

<div align="center">
  <p>Coded by AL-Hassan Sarrar</p>
  <p>Telegram Channel: <a href="https://t.me/nanvalue">@nanvalue</a></p>
</div>
