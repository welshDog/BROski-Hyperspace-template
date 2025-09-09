# 🎯 Dyslexia-First Web App Template

A modern, **accessibility-first web application template** built with Next.js 15, React 19, and TypeScript. Designed specifically for users with dyslexia, featuring high-contrast themes, text-to-speech functionality, and inclusive design patterns.

## 📋 Repository Structure

This workspace is connected to **two GitHub repositories**:

- **Template Repository**: [`dyslexia-Hyperspace-template`](https://github.com/welshDog/dyslexia-Hyperspace-template.git)
  - Clean template with all tools and configurations
  - Ready to be cloned for new projects
  - Contains reusable components and setup

- **Project Repository**: [`My-Social-COMs-Buddy`](https://github.com/welshDog/My-Social-COMs-Buddy.git)
  - Specific application development
  - Project-specific customizations
  - Application-specific features

## 🔄 Managing Both Repositories

### Using the Management Scripts

**Windows (PowerShell):**
```powershell
.\manage-repos.bat
```

**Unix/Linux/macOS:**
```bash
./manage-repos.sh
```

### Manual Commands

```bash
# Push to template repository (clean template)
git push template main

# Push to project repository (current development)
git push origin main

# Pull from template repository
git pull template main

# Pull from project repository
git pull origin main
```

## 🚀 Quick Start

### 🎯 **Accessibility-First Design**

- **High-contrast, readable fonts** with optimized spacing
- **Text-to-speech functionality** for all content
- **Simplified navigation** with clear visual hierarchy
- **Dark/light theme support** with custom color schemes
- **Keyboard navigation** and screen reader support

### 🛠️ **Developer Experience**

- **Next.js 15.5.2** with App Router and latest features
- **React 19.1.1** with concurrent features and optimizations
- **TypeScript 5.0+** with strict type checking
- **Tailwind CSS 3.3.0** for utility-first styling
- **Jest testing** with React Testing Library
- **ESLint + Prettier** for code quality

### 🎨 **UI Component Library**

The `ui-dyslexia` package provides specialized components:

- **Theme System** - Custom CSS variables for consistent theming
- **Accessible Components** - Form inputs, buttons, navigation
- **Text-to-Speech** - Web Speech API integration
- **Priority System** - Color-coded priority indicators
- **Responsive Design** - Mobile-first approach

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+**
- **pnpm 8.6.12** package manager
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/welshDog/My-Social-COMs-Buddy.git
   cd hyperspace
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   cd apps/web
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+**
- **pnpm 8.6.12** package manager
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/welshDog/My-Social-COMs-Buddy.git
   cd hyperspace
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   cd apps/web
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
hyperspace/
├── apps/
│   └── web/                    # Next.js web application
│       ├── src/
│       │   ├── app/           # App Router pages
│       │   │   ├── globals.css # Custom CSS with theme variables
│       │   │   ├── layout.tsx  # Root layout component
│       │   │   └── page.tsx    # Main page (customize this)
│       │   └── __tests__/      # Jest test files
│       ├── public/            # Static assets
│       └── package.json       # Web app dependencies
├── packages/
│   └── ui-dyslexia/           # Reusable UI components
│       ├── *.tsx              # Component files
│       ├── index.ts           # Component exports
│       └── package.json       # Component dependencies
├── turbo.json                # Turborepo configuration
├── pnpm-workspace.yaml       # Workspace configuration
└── README.md
```

## 🛠️ Tech Stack

### Core Framework

- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.0.2** - Type-safe development

### Build & Development

- **Turborepo 2.5.6** - High-performance monorepo build system
- **pnpm 8.6.12** - Fast, disk-efficient package manager
- **ESLint 8.x** - Code linting and formatting
- **Prettier 3.6.2** - Code formatting

### UI & Styling

- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Lucide React 0.542.0** - Beautiful icon library
- **PostCSS 8.5.6** - CSS processing

### Testing

- **Jest 30.1.3** - JavaScript testing framework
- **Testing Library** - React component testing utilities
- **Babel 7.28.4** - JavaScript transpilation

### Accessibility

- **Web Speech API** - Text-to-speech functionality
- **ARIA attributes** - Screen reader support
- **High contrast colors** - Visual accessibility
- **Keyboard navigation** - Full keyboard support

## 📊 Development Workflow

### Available Scripts

```bash
# Root level commands
pnpm build          # Build all packages
pnpm dev           # Start all development servers
pnpm lint          # Lint all packages
pnpm format        # Format code with Prettier

# Web app commands
cd apps/web
pnpm dev           # Start Next.js development server
pnpm build         # Build for production
pnpm start         # Start production server
pnpm lint          # Run ESLint
pnpm type-check    # Run TypeScript type checking
```

### Development Server

```bash
cd apps/web && pnpm dev
```

Starts the development server at `http://localhost:3000`

### Building for Production

```bash
pnpm run build
```

Creates optimized production builds for all packages.

## 🔒 Security

This project maintains **zero known security vulnerabilities**:

- ✅ **Next.js**: Latest secure version (15.5.2)
- ✅ **Dependencies**: All packages updated to latest secure versions
- ✅ **Audit**: Regular security audits with `pnpm audit`

## � Component Library

The `ui-dyslexia` package provides **accessibility-first UI components** that you can use and extend:

### Core Components

- **`<ReadAloud />`** - Text-to-speech functionality
- **`<PriorityChip />`** - Color-coded priority indicators
- **`<ThemeToggle />`** - Dark/light mode switcher
- **`<Form />`** - Accessible form components
- **`<Notification />`** - Toast notifications

### Layout Components

- **`<Navigation />`** - Accessible navigation system
- **`<DashboardStats />`** - Statistics display cards
- **`<SocialPost />`** - Social media post display

### Utility Components

- **`<ComposeBox />`** - Rich text composition
- **`<ContentAnalyzer />`** - Content analysis tools
- **`<VoiceCommands />`** - Voice-controlled navigation

### Theme System

- **CSS Custom Properties** for consistent theming
- **Dark/Light Mode** support
- **High Contrast** color schemes
- **Dyslexia-Friendly** typography

All components are built with **accessibility in mind** and follow WCAG 2.1 AA guidelines.
