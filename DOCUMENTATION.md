# FMG Vendor Onboarding Portal Documentation

## 1. Project Overview

The **FMG Vendor Onboarding Portal** is a high-performance, responsive web application designed for service providers to apply, configure their services, and manage their compliance documents.

Built with **React**, **TypeScript**, and **Tailwind CSS**, it strictly adheres to the **Genie UI Design System v5**, ensuring a premium, consistent, and accessible user experience across all devices.

### Key Features

- **Multi-Step Onboarding Flow**: 7-step wizard covering Business Basics, Service Selection, Availability, Photos, Compliance, and Insurance.
- **Authentication**: Login and Signup pages with social auth integration and secure routing.
- **Responsive Design**: Fully adaptive layouts that transition from single-column mobile views to multi-column desktop interfaces.
- **Theme Support**: Global light/dark mode toggle with automatic preference persistence.
- **Design System Compliance**: 100% adherence to Genie UI v5 tokens for colors, typography, spacing, and motion.
- **Accessibility**: WCAG 2.1 AA compliant, including high-contrast text and keyboard navigation support.

---

## 2. Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3) + CSS Variables
- **Routing**: [React Router](https://reactrouter.com/)
- **State Management**: React Context (`ThemeContext`) + Local State (`useState`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/)
- **Utilities**: `clsx` and `tailwind-merge` for class management.

---

## 3. Architecture & Folder Structure

```
/src
├── assets/             # Static assets (images, logos)
├── components/         # Reusable UI components (Button, Input, Card, etc.)
├── constants/          # Static data (Location data, Services list)
├── contexts/           # React Context providers (ThemeContext)
├── layouts/            # Layout wrappers (AuthLayout)
├── pages/              # Main view components (OnboardingPage, LoginPage, SignupPage)
├── utils/              # Helper functions (cn utility)
├── App.css             # Global styles and design system variables
├── App.tsx             # Root component with Routing
└── main.tsx            # Entry point with ThemeProvider
```

### Core Concepts

- **Atomic Design**: Components are small, reusable atoms (`Button`, `Input`) combined into larger organisms (`DocumentUpload`, `AvailabilityPicker`).
- **Context-Driven Theming**: The `ThemeContext` wraps the entire application, providing `toggleTheme` functionality and persisting the `theme` state (light/dark) to `localStorage`.
- **Layouts**: `AuthLayout` provides a consistent wrapper for authentication pages, while `OnboardingPage` manages its own layout logic due to the complex stepper UI.

---

## 4.- [DESIGN_SYSTEM.md](file:///Users/adityaraj0421/FMG-Vendor's%20Onboarding/DESIGN_SYSTEM.md) - Project specifics and tokens

- [Genie_UI_Design_System_v5_Final.md](file:///Users/adityaraj0421/FMG-Vendor's%20Onboarding/Genie_UI_Design_System_v5_Final.md) - Master specification. of CSS variables and Tailwind utility classes.

### 4.1 Global Variables (`src/index.css`)

All design tokens are defined as CSS custom properties:

```css
:root {
  /* Colors */
  --bg-default: #050505; /* Deep Charcoal */
  --primary-main: #FF4D00; /* Vibrant Orange */
  
  /* Typography */
  --font-headlines: 'Outfit', sans-serif;
  --font-ui: 'Plus Jakarta Sans', sans-serif;
  
  /* Spacing */
  --space-2: 16px; 
  --space-4: 32px;
}

[data-theme="light"] {
  /* Light Mode Overrides */
  --bg-default: #F4F5F7;
  --text-primary: #111111;
}
```

### 4.2 Component Styling

Components use these variables via arbitrary Tailwind values or custom utility classes:

- **Backgrounds**: `bg-[var(--bg-surface)]`
- **Text**: `text-[var(--text-primary)]`, `text-[var(--text-muted)]`
- **Spacing**: `p-[var(--space-4)]`, `gap-[var(--space-2)]`
- **Radius**: `rounded-[var(--radius-md)]`

### 4.3 Responsiveness Strategy

Mobile-first approach with `md:` breakpoints (600px+):

- **Grid Layouts**: `grid-cols-1 md:grid-cols-2`
- **Flex Direction**: `flex-col md:flex-row`
- **Button Widths**: `w-full md:w-auto`

---

## 5. Setup & Development

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Access the app at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

The output will be in the `dist` directory.

### Code Quality & Linting

We use ESLint and Prettier. To lint the project:

```bash
npm run lint
```

---

## 6. Recent Enhancements (v1.1)

- **Theme Toggle**: Added light/dark mode switch in the navigation bar.
- **WCAG Compliance**: improved color contrast for `text-muted` and implemented automatic logo inversion for light mode.
- **Mobile Optimization**: Added spacing to navigation buttons and adjusted text labels for better mobile readability.
- **Text Updates**: Renamed "Compliance Documents" to "Documents" and "Configure Availability" to "Availability".
- **Workflow Optimizations**: Made business photos non-mandatory for faster onboarding.
- **Visual Polish**: Centered success screen content for better balance.

---

## 7. Deployment (Vercel)

The project is optimized for deployment on [Vercel](https://vercel.com).

### Agile Deployment Steps

1. **Push to GitHub**: Ensure your latest code is pushed to your remote repository.
2. **Import to Vercel**:
    - Go to Vercel Dashboard -> "Add New..." -> "Project".
    - Select your GitHub repository.
3. **Configure Project**:
    - **Framework Preset**: Vite (should be auto-detected).
    - **Root Directory**: `./` (default).
    - **Build Command**: `npm run build` (default).
    - **Output Directory**: `dist` (default).
4. **Deploy**: Click "Deploy".

### Post-Deployment Checks

- Verify the **Theme Toggle** persists across page reloads.
- Check that **Routes** work correctly (e.g., refreshing on `/login` shouldn't 404). *Note: Vercel automatically handles client-side routing for Vite apps.*
