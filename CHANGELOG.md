# Changelog

All notable changes to the Social AI Assistant will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial project setup with Turborepo monorepo structure
- Next.js 15.5.2 web application with App Router
- Comprehensive UI component library (`ui-dyslexia` package)
- Dyslexia-friendly design system with high contrast colors
- Text-to-speech functionality using Web Speech API
- Priority-based content organization (Today/Week/FYI)
- AI-powered content suggestions component
- Real-time content analysis for readability
- Voice command integration for hands-free operation
- Multi-platform social media support (Twitter, LinkedIn, Facebook, Instagram, Discord)
- Responsive design with Tailwind CSS
- TypeScript strict mode configuration
- ESLint and Prettier code formatting
- Turborepo build optimization
- Security hardening with latest dependency versions
- Jest testing framework with React 19 compatibility
- Babel configuration for Jest and Next.js compatibility
- System font stack for improved accessibility and performance

### Changed

- Upgraded to React 19.1.1 for latest features
- Updated all dependencies to latest secure versions
- Improved build performance with optimized webpack configuration
- Enhanced accessibility features throughout the application
- Replaced Google Fonts with system font stack for better performance
- Updated Lucide React to version 0.542.0
- Aligned all packages to use React 19 types consistently

### Fixed

- Resolved all security vulnerabilities (14+ critical/high severity issues)
- Fixed TypeScript compilation errors
- Corrected client component configuration for Next.js App Router
- Resolved dependency conflicts and peer dependency warnings
- Fixed Jest globals import issue (jest is globally available)
- Resolved Babel/SWC conflict with next/font by using system fonts
- Fixed React version conflicts across monorepo packages

### Security

- Upgraded Next.js from 14.0.4 to 15.5.2 (fixed 14+ vulnerabilities)
- Updated PostCSS to 8.5.6 (fixed moderate severity issues)
- Updated all dependencies to latest secure versions
- Added security headers configuration
- Implemented proper CSP and frame options

## [1.0.0] - 2025-09-08

### Added

- Project foundation with dyslexia-first design principles
- Core component architecture
- Basic social media post display functionality
- Text-to-speech proof of concept
- Priority chip component for content categorization
- Initial dashboard with statistics display
- Compose box for content creation
- Navigation system with accessibility features

### Technical

- Next.js 14 setup with TypeScript
- Tailwind CSS styling framework
- Turborepo monorepo configuration
- Basic component library structure
- Development environment setup

---

## Types of Changes

- `Added` for new features
- `Changed` for changes in existing functionality
- `Deprecated` for soon-to-be removed features
- `Removed` for now removed features
- `Fixed` for any bug fixes
- `Security` in case of vulnerabilities

## Version Format

This project uses [Semantic Versioning](https://semver.org/):

- **MAJOR** version for incompatible API changes
- **MINOR** version for backwards-compatible functionality additions
- **PATCH** version for backwards-compatible bug fixes

---

For more information about upcoming features and planned changes, see the [Roadmap](../README.md#roadmap) in the main README.
