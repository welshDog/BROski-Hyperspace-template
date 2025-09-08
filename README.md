# 🎯 Social AI Assistant

A comprehensive, **dyslexia-first social AI assistant** designed to make social media management accessible and intelligent for users with dyslexia. Built with modern web technologies and AI-powered features.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Security](https://img.shields.io/badge/security-secure-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.5+-black)
![React](https://img.shields.io/badge/React-19.1+-61dafb)

## ✨ Features

### 🎯 **Dyslexia-First Design**

- **High-contrast, readable fonts** with optimized spacing
- **Text-to-speech functionality** for all content
- **Simplified navigation** with clear visual hierarchy
- **Priority-based content organization** (Today/Week/FYI)
- **Voice command integration** for hands-free operation

### 🤖 **AI-Powered Features**

- **Smart Content Suggestions** - AI-generated content ideas based on context
- **Real-time Content Analysis** - Automatic readability scoring and suggestions
- **Intelligent Priority Detection** - Automatic content categorization
- **Voice Commands** - Hands-free navigation and content creation

### 📱 **Multi-Platform Support**

- **Twitter/X** integration
- **LinkedIn** professional networking
- **Facebook** community engagement
- **Instagram** visual content
- **Discord** community management

### 🎨 **Modern UI/UX**

- **Responsive design** that works on all devices
- **Dark/light theme support**
- **Intuitive tabbed interface**
- **Real-time statistics dashboard**
- **Smooth animations and transitions**

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
│   ├── web/                    # Next.js web application
│   │   ├── src/
│   │   │   ├── app/           # App Router pages
│   │   │   ├── components/    # Shared components
│   │   │   └── styles/        # Global styles
│   │   ├── public/            # Static assets
│   │   └── package.json
│   └── worker/                 # Hono API worker (planned)
├── packages/
│   └── ui-dyslexia/           # Reusable UI components
│       ├── AccessibilityProvider.tsx
│       ├── ComposeBox.tsx
│       ├── ContentAnalyzer.tsx
│       ├── DashboardStats.tsx
│       ├── Navigation.tsx
│       ├── PriorityChip.tsx
│       ├── ReadAloud.tsx
│       ├── SmartSuggestions.tsx
│       ├── SocialPost.tsx
│       ├── VoiceCommands.tsx
│       └── index.ts
├── Notes/                     # Project documentation
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

## 🎯 Component Library

The `ui-dyslexia` package provides specialized components:

### Core Components

- **`<ReadAloud />`** - Text-to-speech functionality
- **`<PriorityChip />`** - Color-coded priority indicators
- **`<SocialPost />`** - Social media post display
- **`<ComposeBox />`** - Rich text composition with AI suggestions
- **`<DashboardStats />`** - Analytics and metrics display

### AI Components

- **`<SmartSuggestions />`** - AI-powered content suggestions
- **`<ContentAnalyzer />`** - Real-time readability analysis
- **`<VoiceCommands />`** - Voice-controlled navigation

### Layout Components

- **`<Navigation />`** - Accessible navigation system
- **`<AccessibilityProvider />`** - Global accessibility context

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run tests: `pnpm lint && pnpm type-check`
5. Commit your changes: `git commit -m 'Add your feature'`
6. Push to the branch: `git push origin feature/your-feature`
7. Submit a pull request

### Code Standards

- **TypeScript**: Strict type checking enabled
- **ESLint**: All linting rules must pass
- **Prettier**: Code formatting enforced
- **Accessibility**: WCAG 2.1 AA compliance required

### Commit Convention

We use conventional commits:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation updates
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Testing
- `chore:` Maintenance

## 📈 Roadmap

### Phase 1 ✅ (Current)

- [x] Core dyslexia-friendly UI components
- [x] Text-to-speech functionality
- [x] Priority-based content organization
- [x] AI-powered content suggestions
- [x] Voice command integration
- [x] Multi-platform social media support

### Phase 2 🔄 (Next)

- [ ] Real social media API integrations
- [ ] User authentication and profiles
- [ ] Advanced AI content generation
- [ ] Analytics and reporting dashboard
- [ ] Mobile app development
- [ ] Offline functionality

### Phase 3 📋 (Future)

- [ ] Multi-language support
- [ ] Advanced accessibility features
- [ ] Plugin system for custom integrations
- [ ] Enterprise features
- [ ] API for third-party integrations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ for the dyslexia community
- Inspired by the need for accessible social media tools
- Thanks to the open-source community for amazing tools and libraries

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/welshDog/My-Social-COMs-Buddy/issues)
- **Discussions**: [GitHub Discussions](https://github.com/welshDog/My-Social-COMs-Buddy/discussions)
- **Documentation**: [Project Wiki](https://github.com/welshDog/My-Social-COMs-Buddy/wiki)

---

**Made with ❤️ for accessibility and inclusion**
