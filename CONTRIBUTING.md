# Contributing to Social AI Assistant

Thank you for your interest in contributing to the Social AI Assistant! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### 1. Development Setup

Follow the [Quick Start guide](../README.md#quick-start) in the main README to set up your development environment.

### Prerequisites

- **Node.js 18+**
- **pnpm 8.6.12** package manager
- **Git**

### 2. Finding Issues to Work On

- Check the [Issues](https://github.com/welshDog/My-Social-COMs-Buddy/issues) page for open tasks
- Look for issues labeled `good first issue` or `help wanted`
- Comment on issues you'd like to work on to avoid duplicate work

### 3. Making Changes

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing code style
   - Add tests for new functionality
   - Update documentation as needed
   - Ensure accessibility compliance

3. **Test your changes**

   ```bash
   # Run linting
   pnpm lint

   # Run type checking
   cd apps/web && pnpm type-check

   # Run tests
   cd apps/web && pnpm test

   # Build the project
   pnpm build
   ```

4. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and create a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

### 4. Pull Request Process

1. **Create a descriptive PR title** following conventional commit format
2. **Fill out the PR template** with:
   - Description of changes
   - Screenshots (if UI changes)
   - Testing instructions
   - Related issues

3. **Ensure CI passes** - all checks must pass before merging

## 📋 Code Standards

### TypeScript

- Use strict TypeScript settings
- Provide type definitions for all components
- Use interfaces over types for object shapes
- Avoid `any` type - use proper typing

### React

- Use functional components with hooks
- Follow React best practices
- Use proper key props in lists
- Implement proper error boundaries

### Accessibility

- Follow WCAG 2.1 AA guidelines
- Use semantic HTML elements
- Provide proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow the design system
- Ensure responsive design
- Test on multiple screen sizes

## 🧪 Testing

### Unit Tests

```bash
# Run tests (when implemented)
pnpm test
```

### Manual Testing Checklist

- [ ] Works on Chrome, Firefox, Safari, Edge
- [ ] Responsive on mobile and desktop
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] High contrast mode works
- [ ] Text-to-speech functions
- [ ] Voice commands work
- [ ] No console errors
- [ ] Performance is acceptable

## 📚 Documentation

### Component Documentation

- Add JSDoc comments to all components
- Document props with examples
- Include usage examples
- Document accessibility features

### Code Comments

- Add comments for complex logic
- Explain accessibility implementations
- Document API integrations

## 🎯 Commit Convention

We use [Conventional Commits](https://conventionalcommits.org/) format:

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation updates
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Testing
- `chore:` - Maintenance

### Examples

```
feat: add voice command for navigation
fix: resolve text-to-speech bug in Safari
docs: update component API documentation
style: format code with Prettier
refactor: simplify state management logic
test: add unit tests for PriorityChip component
chore: update dependencies
```

## 🔧 Development Tools

### Recommended VS Code Extensions

- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- GitLens
- Accessibility Insights

### Browser DevTools

- Use the Accessibility tab to test ARIA
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Use Lighthouse for performance audits

## 🚨 Issue Reporting

When reporting bugs, please include:

- Browser and version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Console errors

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Documentation**: Check the project wiki first

## 🙏 Recognition

Contributors will be recognized in:

- The main README contributors section
- Release notes
- Project documentation

Thank you for contributing to making social media more accessible! 🎉
