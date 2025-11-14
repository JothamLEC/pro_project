# TODO - Project Task Tracking

This document tracks completed and ongoing tasks for the proposal website project.

**Tag Legend:**
- `[LLM]` - Tasks to be completed by Claude AI
- `[DEV]` - Tasks requiring developer input/decision
- `[BOTH]` - Collaborative tasks

---

## Completed Tasks

### Initial Setup (November 2025)

- [x] `[LLM]` Create Astro project with minimal template
- [x] `[LLM]` Install and configure Tailwind CSS v4
- [x] `[LLM]` Add Tailwind Vite plugin to Astro config
- [x] `[LLM]` Install Starwind component library system
- [x] `[LLM]` Configure Starwind with base settings (gray theme, CSS variables)
- [x] `[LLM]` Install GSAP animation library
- [x] `[LLM]` Install Tabler Icons
- [x] `[LLM]` Configure TypeScript with strict mode
- [x] `[LLM]` Set up path aliases (`@/*` → `src/*`)
- [x] `[LLM]` Create base styling system with CSS variables
- [x] `[LLM]` Implement dark mode theming
- [x] `[LLM]` Set up semantic color tokens
- [x] `[LLM]` Configure accordion animations
- [x] `[LLM]` Install @tailwindcss/forms plugin
- [x] `[LLM]` Install utility packages (tailwind-merge, tailwind-variants, tw-animate-css)
- [x] `[LLM]` Initialize Git repository
- [x] `[LLM]` Create documentation structure in `.context/` folder
- [x] `[LLM]` Write System.md documentation
- [x] `[LLM]` Write Subject.md documentation
- [x] `[LLM]` Write SOP.md documentation
- [x] `[LLM]` Write TODO.md documentation (this file)

---

## In Progress

### Proposal Website - Phase 1
- [ ] `[LLM]` **[P0]** Update TODO.md with tagging system and proposal tasks
- [ ] `[LLM]` **[P0]** Update Subject.md with proposal website context

---

## Planned Tasks

### Proposal Website - Password Protection
- [ ] `[LLM]` **[P0]** Create password entry page (`src/pages/index.astro`)
- [ ] `[LLM]` **[P0]** Implement password validation logic (林奕琛爱陈洁敏)
- [ ] `[LLM]` **[P0]** Add fail2ban system (5 attempts max, 10-minute lockout)
- [ ] `[LLM]` **[P0]** Implement localStorage tracking for attempts and lockout
- [ ] `[LLM]` **[P0]** Create error message display (show only on wrong password)
- [ ] `[LLM]` **[P0]** Implement fade-in transition to landing page on success

### Proposal Website - Landing Teaser Page
- [ ] `[LLM]` **[P0]** Create landing page component (`src/pages/landing.astro`)
- [ ] `[LLM]` **[P0]** Set up editable frontmatter for text sections (default: 3, dynamically scalable)
- [ ] `[LLM]` **[P0]** Implement fixed positioning layout
- [ ] `[LLM]` **[P0]** Add GSAP scroll-triggered animations with blur in/out effects
- [ ] `[LLM]` **[P0]** Implement CSS scroll-snap for smooth section transitions
- [ ] `[LLM]` **[P0]** Enable reverse scrolling to replay animations
- [ ] `[LLM]` **[P0]** Add transition to main page on final scroll action
- [ ] `[DEV]` **[P1]** Select and specify font for handwritten text style
- [ ] `[DEV]` **[P2]** Review and edit text content in frontmatter

### Proposal Website - Animated Background
- [ ] `[LLM]` **[P0]** Create gradient blob system (2 large, 1 medium, 1 small)
- [ ] `[LLM]` **[P0]** Implement GSAP floating, merging, breaking animations
- [ ] `[LLM]` **[P0]** Research and implement cursor-based fluid dynamics (GSAP vs Canvas/WebGL)
- [ ] `[LLM]` **[P0]** Sync background colors with scroll sections:
  - Section 1: Gold background + white blobs
  - Section 2: Pastel pink background + brown blobs
  - Section 3: Light baby blue background + darker blue blobs
- [ ] `[LLM]` **[P1]** Add noise texture overlay to background

### Proposal Website - Main Page
- [ ] `[LLM]` **[P0]** Create main page component (`src/pages/main.astro`)
- [ ] `[LLM]` **[P0]** Set up placeholder styling (h-dvh w-dvh bg-red-300)
- [ ] `[DEV]` **[P1]** Design and provide content for main page
- [ ] `[DEV]` **[P1]** Provide images/media for main page (if needed)

### Proposal Website - Mobile Optimization
- [ ] `[LLM]` **[P0]** Implement portrait-only experience
- [ ] `[LLM]` **[P0]** Test and optimize scroll-snap on mobile
- [ ] `[LLM]` **[P0]** Optimize blob animations for mobile performance
- [ ] `[LLM]` **[P1]` Test password input on mobile devices
- [ ] `[BOTH]` **[P1]** Conduct full mobile testing session

### Proposal Website - Documentation
- [ ] `[LLM]` **[P1]** Update System.md with new dependencies and structure
- [ ] `[LLM]` **[P1]** Update SOP.md with project-specific guidelines
- [ ] `[LLM]` **[P1]** Document animation patterns and customization

### Proposal Website - Deployment
- [ ] `[DEV]` **[P0]** Set up Cloudflare Pages account
- [ ] `[BOTH]` **[P0]** Configure Cloudflare Pages deployment
- [ ] `[LLM]` **[P1]** Create deployment documentation
- [ ] `[DEV]` **[P1]** Test deployed site on actual device
- [ ] `[DEV]` **[P1]** Share preview link for feedback

---

## Future Enhancements (Post-Proposal)

### Additional Features
- [ ] `[DEV]` Add photo gallery section
- [ ] `[DEV]` Add timeline of relationship milestones
- [ ] `[DEV]` Create "Yes" button interaction (no "No" option!)
- [ ] `[LLM]` Add confetti animation on acceptance
- [ ] `[DEV]` Add background music option
- [ ] `[LLM]` Create polaroid-style photo frames

### Performance & Polish
- [ ] `[LLM]` Run Lighthouse audit
- [ ] `[LLM]` Optimize Core Web Vitals
- [ ] `[LLM]` Implement lazy loading for images
- [ ] `[LLM]` Add loading states and transitions
- [ ] `[LLM]` Test cross-browser compatibility

### Accessibility
- [ ] `[LLM]` Ensure keyboard navigation works
- [ ] `[LLM]` Add appropriate ARIA labels
- [ ] `[LLM]` Test color contrast ratios
- [ ] `[LLM]` Add focus indicators

---

## Blocked / On Hold

No blocked tasks currently.

---

## Notes

### Project Status
The project is a **proposal website** for an 8-year relationship:
- Single-page application with password protection
- Animated scroll-based storytelling
- Mobile-first, portrait-only experience
- Hosted on Cloudflare Pages (static)

### Color Palette
- **Primary**: White, pastel pink, soft gold, light baby blue
- **Accents**: Soft brown, darker blue
- **Style**: Romantic, minimal, elegant

### Technical Approach
- **Framework**: Astro (static)
- **Styling**: Tailwind CSS v4 with custom pastel colors
- **Animation**: GSAP for scroll & blob animations
- **Fluid Dynamics**: To be determined (GSAP plugins vs Canvas/WebGL)
- **Password**: Client-side validation with localStorage fail2ban
- **Typography**: To be selected by developer

### Next Steps
1. Update documentation with proposal context
2. Create password protection page
3. Build landing teaser with scroll animations
4. Implement animated gradient blobs
5. Mobile testing and optimization

---

## Development Workflow

### Current Sprint: MVP Implementation
**Goal**: Create functional password → landing → main page flow

**Priority Order**:
1. Password protection (P0)
2. Landing page structure (P0)
3. Basic animations (P0)
4. Gradient blobs (P0)
5. Mobile optimization (P0)
6. Font selection (P1 - developer)
7. Content finalization (P1 - developer)

---

## Changelog

### 2025-11-10
- Initial project setup completed
- Documentation structure created
- Proposal website requirements defined
- Added tagging system for LLM/DEV task separation
- Organized tasks by feature and priority

---

## Related Documentation
- [README.md](.context/README.md) - Documentation index
- [System.md](.context/System.md) - Technical architecture
- [Subject.md](.context/Subject.md) - Project context (to be updated)
- [SOP.md](.context/SOP.md) - Development procedures
