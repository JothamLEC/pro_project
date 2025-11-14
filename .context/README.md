# Project Documentation Index

This directory contains all important documentation for the "smoggy-astronaut" Astro project. Below is a comprehensive index of available documentation.

## Quick Start

New to the project? Start here:
1. Read **System.md** for technical architecture and setup
2. Review **Subject.md** for project context and goals
3. Check **SOP.md** for development workflows and best practices

## Available Documentation

### System.md
**Complete technical documentation** including:
- Project overview and current state (fully functional single-page app)
- Full tech stack breakdown (Astro, Tailwind CSS v4, Starwind UI, GSAP)
- Detailed project structure (layouts, pages, components, media files)
- Configuration files explanation
- Integration points (Tailwind, Starwind theming, animations)
- **Detailed page implementations**:
  - Password-protected entrance with GSAP animations
  - Interactive landing page with:
    - Animated dumpling marquee background (6 rows, infinite scroll)
    - Background music control
    - Sound effects system
    - 4 interactive icon buttons
    - 3 draggable windows (GSAP Draggable plugin)
- **BaseLayout architecture** and usage patterns
- **Known Issues & Troubleshooting** section with solutions for:
  - Media files with spaces in filenames
  - GSAP loading in inline scripts
  - Tailwind CSS import issues
  - Starwind component props (class vs className)
  - Audio autoplay browser restrictions
- Development server setup and build process

**When to read this:** Understanding the codebase architecture, troubleshooting issues, setting up development environment, or adding new integrations.

### Subject.md
**Project context documentation** including:
- Project type and current stage
- Target audience (to be defined)
- Content details (to be defined)
- Project goals and objectives
- Development philosophy

**When to read this:** Understanding the "why" behind the project, target audience considerations, or project scope.

### SOP.md
**Standard Operating Procedures** covering:
- **How to add Starwind UI components** (with correct import paths and prop usage)
- **Working with media files** (critical for videos/audio with spaces in filenames)
- Creating new pages with Astro's file-based routing and BaseLayout
- Adding and organizing styles (with CSS import best practices)
- **Animation best practices** (Hybrid Tailwind + GSAP approach):
  - When to use Tailwind vs GSAP
  - Regular script patterns
  - **Critical: Inline script patterns with define:vars** (initialization, GSAP availability check, DOM ready handling)
  - **GSAP Draggable Plugin**: Complete guide with setup, patterns, and best practices
  - **Infinite Scroll Marquees**: CSS-based seamless loop animations with duplication pattern
- Component development best practices
- Path alias usage (`@/` imports)
- Development commands
- Documentation update workflow
- Git workflow and code quality guidelines

**When to read this:** Before adding components, working with media files, implementing animations, creating pages, or troubleshooting common issues. Essential for maintaining consistency and avoiding known pitfalls.

## Documentation Update Protocol

**After implementing new features**, always update the relevant documentation:

1. **System.md** - Update if you:
   - Add new dependencies or integrations
   - Modify project structure
   - Add API endpoints or database schema
   - Change configuration files
   - Add new core functionalities

2. **Subject.md** - Update if you:
   - Change project scope or goals
   - Define target audience
   - Add content strategy details
   - Modify development philosophy

3. **SOP.md** - Update if you:
   - Establish new development patterns
   - Create new workflows or procedures
   - Learn best practices from mistakes
   - Add new tools or commands

4. **README.md** (this file) - Update if you:
   - Create new documentation files
   - Change documentation structure
   - Add new documentation sections

## Project State

**Current Status:** Fully functional single-page application  
**Last Updated:** 2025-11-10  
**Version:** 0.0.1

The project features:
- ✅ Password-protected entrance page with animated lock
- ✅ Interactive landing page with animated dumpling marquee background
- ✅ Background music control and sound effects system
- ✅ 4 interactive icon buttons (music control + window openers)
- ✅ 3 draggable windows with GSAP Draggable plugin
- ✅ CSS-based infinite scroll marquee (6 rows, alternating directions, fade edges)
- ✅ Complete Tailwind CSS v4 + Starwind UI integration
- ✅ GSAP animation system with Draggable plugin
- ✅ Mobile-responsive design
- ✅ Single-page app architecture (no scrolling)

---

**Note:** Keep these documents up to date to ensure they accurately reflect the current state of the project. Good documentation is essential for onboarding new team members and maintaining code quality.
