# System Documentation

## Project Overview

This is an AstroJS project named "smoggy-astronaut" configured as a modern, performance-focused single-page web application with Tailwind CSS v4, Starwind UI component library, and GSAP animations. The project features a password-protected entrance leading to an immersive landing page with video background and background music.

## Tech Stack

### Core Framework
- **Astro v5.15.4**: Static site generator and web framework with file-based routing
- **TypeScript**: Configured with Astro's strictest settings
- **Bun**: Package manager and runtime

### Styling
- **Tailwind CSS v4.1.17**: Utility-first CSS framework with the latest v4 features
- **@tailwindcss/vite v4.1.17**: Vite plugin for Tailwind CSS v4 integration
- **@tailwindcss/forms v0.5**: Form styling plugin
- **tw-animate-css v1**: Animation utilities for Tailwind

### UI Components
- **Starwind UI**: Accessible Astro component library
  - Components directory: `src/components`
  - Configuration file: `starwind.config.json`
  - Base color: gray (not slate as previously documented)
  - CSS variables enabled for theming
  - Uses CLI for adding components: `bunx starwind@latest add [component]`
  - Installed components: button, card, input, label

### Utilities
- **tailwind-merge v3**: Utility for merging Tailwind CSS classes
- **tailwind-variants v3**: Component variants utility
- **@tabler/icons v3**: Icon library

### Animation
- **GSAP v3.13.0**: Professional-grade JavaScript animation library

## Project Structure

```
/
├── .claude/              # Claude Code configuration
├── .context/             # Project documentation
│   ├── README.md         # Documentation index
│   ├── System.md         # System architecture (this file)
│   ├── Subject.md        # Project context and goals
│   └── SOP.md            # Standard operating procedures
├── .vscode/              # VS Code settings
├── public/               # Static assets (served at root)
│   ├── favicon.svg       # Default Astro favicon
│   ├── Little Happiness from YouTube.mp3  # Background music
│   └── QuickEdit-Up to 4K.mov  # Landing page background video
├── src/
│   ├── assets/           # Images and media files (for imports)
│   │   ├── Cute Pastel Lofi Room.jpeg  # Original background image
│   │   ├── Click1-MP3.mp3  # Sound effect
│   │   ├── click2-MP3.mp3  # Sound effect
│   │   ├── Pop1-MP3.mp3    # Sound effect
│   │   ├── pop2-MP3.mp3    # Sound effect
│   │   ├── Little Happiness from YouTube.mp3  # BGM (also in public)
│   │   └── QuickEdit-Up to 4K.mov  # Video (also in public)
│   ├── components/       # Astro/Starwind UI components
│   │   └── starwind/     # Starwind UI components (installed via CLI)
│   │       ├── button/   # Button component
│   │       │   ├── Button.astro
│   │       │   └── index.ts
│   │       ├── card/     # Card components
│   │       │   ├── Card.astro
│   │       │   ├── CardContent.astro
│   │       │   ├── CardDescription.astro
│   │       │   ├── CardFooter.astro
│   │       │   ├── CardHeader.astro
│   │       │   ├── CardTitle.astro
│   │       │   └── index.ts
│   │       ├── input/    # Input component
│   │       │   ├── Input.astro
│   │       │   └── index.ts
│   │       └── label/    # Label component
│   │           ├── Label.astro
│   │           └── index.ts
│   ├── layouts/          # Reusable page layouts
│   │   └── BaseLayout.astro  # Base layout with global CSS + GSAP
│   ├── pages/            # Astro pages (file-based routing)
│   │   ├── index.astro   # Password-protected entrance page
│   │   └── landing.astro # Main landing page (single-page app)
│   └── styles/
│       ├── global.css    # Main CSS entry point (imports Tailwind + Starwind)
│       └── starwind.css  # Starwind UI theme configuration with CSS variables
├── .gitignore            # Git ignore rules
├── astro.config.mjs      # Astro configuration
├── bun.lock              # Bun lockfile
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── starwind.config.json  # Starwind UI configuration
```

## Configuration Files

### astro.config.mjs
```javascript
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
```
- Minimal configuration
- Integrates Tailwind CSS v4 via Vite plugin
- No additional integrations or adapters

### tsconfig.json
- Extends Astro's strict TypeScript config (`astro/tsconfigs/strict`)
- Path alias `@/*` maps to `src/*` for cleaner imports
- Configured for ES modules
- Includes `.astro/types.d.ts` for type generation

### starwind.config.json
- Components directory: `src/components`
- Base color: `gray` (used for color palette generation)
- CSS variables enabled for theming
- CSS file: `src/styles/starwind.css`
- Components array: `[]` (no components installed yet)

### package.json
- Project name: `smoggy-astronaut`
- Version: `0.0.1`
- Type: `module` (ES modules)
- Scripts:
  - `dev`: Start development server
  - `build`: Build for production
  - `preview`: Preview production build
  - `astro`: Run Astro CLI commands

## Development Server

- **Dev command**: `bun run dev`
- **Build command**: `bun run build`
- **Preview command**: `bun run preview`
- **Default port**: 4321 (Astro default, or next available)

## Integration Points

### Tailwind CSS v4
- Integrated via Vite plugin in `astro.config.mjs`
- Main entry point: `src/styles/global.css`
- Imports Tailwind via `@import "tailwindcss"`
- Includes Starwind theme via `@import "./starwind.css"`

### Starwind UI Theming System
- Uses CSS custom properties for theming
- Supports light/dark modes via `.dark` class
- Color tokens defined in `src/styles/starwind.css`:
  - Background, foreground, card colors
  - Primary (blue-700), secondary (fuchsia-700)
  - Semantic colors: muted, accent, info, success, warning, error
  - Border, input, outline colors
  - Configurable border radius via `--radius` variable
- Dark mode variant: `@custom-variant dark (&:where(.dark, .dark *))`
- Accordion animations configured with custom keyframes

### Animation Libraries
- **tw-animate-css**: Provides Tailwind-compatible animation utilities
- **GSAP**: Available for client-side JavaScript animations
- Custom accordion animations defined in Starwind theme

### Icon System
- **@tabler/icons v3**: Icon library available for import

## Core Functionalities

### Current State
This project is a fully functional single-page application with:
- ✅ Password-protected entrance page with animated lock
- ✅ Immersive landing page with video background and background music
- ✅ Complete Tailwind CSS v4 setup with Starwind theming
- ✅ GSAP animation library for complex animations
- ✅ BaseLayout component for consistent page structure
- ✅ Starwind UI components: button, card, input, label
- ✅ Hybrid animation approach: Tailwind for simple, GSAP for complex
- ✅ Mobile-responsive design with proper padding and constraints

### Layouts

#### BaseLayout.astro (`src/layouts/BaseLayout.astro`)
**Purpose**: Provides common HTML structure for all pages

**Features**:
- Imports global CSS (`@/styles/global.css`) which includes Tailwind and Starwind
- Integrates GSAP and makes it globally available via `window.gsap`
- SEO meta tags support (title, description)
- Responsive viewport settings
- TypeScript interface for props (title, description)

**Usage**:
```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
---
<BaseLayout title="Page Title" description="Page description">
  <!-- Your content -->
</BaseLayout>
```

**Critical Note**: Must import `@/styles/global.css` in frontmatter, not via `<link>` tags

### Routing
- **File-based routing** via Astro
- **Single-page app design**: All pages use `max-h-dvh` and `max-w-dvw` to prevent scrolling
- **No traditional navigation**: Each page is a full-screen immersive experience

**Current Routes**:
- `/` → `src/pages/index.astro` (password-protected entrance)
- `/landing` → `src/pages/landing.astro` (main landing page)

### Pages

#### 1. Password Protection Page (`/` - index.astro)
**Purpose**: Secure entrance to the application

**Features**:
- Custom animated lock icon (shackle + body + keyhole) using Tailwind classes
- Password validation with animations
- GSAP animations for:
  - Shake effect on incorrect password
  - Lock shackle opening animation
  - Unlock overlay with bounce effect
- Starwind UI components (Card, Input, Button)
- Redirects to `/landing` on successful authentication
- Mobile-responsive with proper padding

**Technical Implementation**:
- Password stored in frontmatter: `"password"` (easily configurable)
- Uses `is:inline` script with `define:vars` to pass password to client
- Initialization function with GSAP availability check and retry logic
- DOM ready check before attaching event listeners
- Error handling with console logging for debugging

**Key Code Pattern**:
```javascript
function initPasswordForm() {
  // Check GSAP availability, retry if not loaded
  if (typeof window.gsap === 'undefined') {
    setTimeout(initPasswordForm, 100);
    return;
  }
  // Initialize form listeners
}
```

**Visual Design**:
- Gradient background: `from-primary via-purple-600 to-secondary`
- White card with semi-transparent background (`bg-white/95 backdrop-blur`)
- Lock icon colors use Starwind primary color for keyhole
- Error message with fade-in/out transitions

#### 2. Landing Page (`/landing` - landing.astro)
**Purpose**: Main immersive experience after authentication with interactive features

**Features**:
- **Animated Dumpling Marquee Background**: 6 horizontal rows of scrolling dumpling icons
  - Alternating scroll directions (rows 1,3,5 left-to-right; rows 2,4,6 right-to-left)
  - Fade-out effect on edges using CSS mask gradients
  - 40 dumplings per row for seamless infinite loop on ultra-wide screens
  - 45-second animation duration for gentle, relaxed scrolling
  - Positioned at z-index: 0 (behind all interactive content)
- **Background Music**: Autoplay audio with play/pause control (`Little Happiness from YouTube.mp3`)
- **Sound Effects**: Click sounds and UI feedback sounds
- **Main Media Area**: Centered green placeholder div for future content
- **4 Interactive Icon Buttons**:
  - Top-left: Music control (play/pause BGM)
  - Top-right, Bottom-left, Bottom-right: Open draggable windows
- **3 Draggable Windows**: Movable windows with title bars and close buttons
- Single-page app layout with no scrolling
- Mobile-responsive with `p-4` padding

**Layout Structure**:
```
┌─ Absolute Background Layer (z-index: 0)
│  └─ Dumpling Marquee Wrapper (full size, 6 rows)
│     ├─ Row 1: 40 dumplings, scroll left-to-right, fade edges
│     ├─ Row 2: 40 dumplings, scroll right-to-left, fade edges
│     ├─ Row 3: 40 dumplings, scroll left-to-right, fade edges
│     ├─ Row 4: 40 dumplings, scroll right-to-left, fade edges
│     ├─ Row 5: 40 dumplings, scroll left-to-right, fade edges
│     └─ Row 6: 40 dumplings, scroll right-to-left, fade edges
├─ Canvas Container (#canvas, relative, flex-1, min-h-dvh, z-index: 1)
│  ├─ Main Media Container (absolute, centered with left-1/2 top-1/2)
│  │  ├─ Green main media div (absolute inset-0)
│  │  ├─ Icon Button - Top Left (Music Control) 📱 ⏸️/▶️
│  │  ├─ Icon Button - Top Right (Window 1) 📁
│  │  ├─ Icon Button - Bottom Left (Window 2) 🖼️
│  │  └─ Icon Button - Bottom Right (Window 3) ⚙️
│  ├─ Window 1 (absolute, draggable, blue-purple gradient)
│  ├─ Window 2 (absolute, draggable, pink-rose gradient)
│  └─ Window 3 (absolute, draggable, green-teal gradient)
└─ Audio elements (BGM + sound effects)
```

**Interactive Features**:

*Sound Effects*:
- All button clicks play `/Click1-MP3.mp3`
- Music pause plays `/Pop1-MP3.mp3`
- Music resume and window close play `/pop2-MP3.mp3`

*Music Control Button (Top-Left)*:
- Toggles BGM play/pause
- Visual indicator changes (⏸️ ↔️ ▶️)
- Plays appropriate sound effects on state change

*Window Buttons (Other 3 buttons)*:
- Click opens respective draggable window
- Windows appear with GSAP scale + bounce animation
- Each window has unique gradient title bar

*Draggable Windows*:
- Drag by title bar (cursor changes to move)
- Bounded to `#canvas` container (won't escape viewport)
- Close button (✕) in title bar
- Close animation: scale down with GSAP
- GSAP Draggable plugin with inertia and edge resistance

**Technical Implementation**:
- **Marquee Animation**: CSS-based infinite scroll marquee
  - Uses `translateX(-50%)` with duplicated content for seamless loop
  - Each row has 40 images (20 visible + 20 duplicates with `aria-hidden="true"`)
  - Alternating rows use `animation-direction: reverse`
  - Edge fade effect via `mask-image: linear-gradient(to right, transparent, black 5rem, black calc(100% - 5rem), transparent)`
  - Images: 60px × 60px with 3rem gap and 0.6 opacity
  - Animation: 45s linear infinite for slow, gentle motion
- **GSAP Draggable Plugin**: Registered and used for window dragging
- **Sound Management**: 
  - All audio files preloaded
  - `currentTime` reset to 0 before each play for instant replay
- **Window State**: Hidden by default, shown with animations
- **Bounds Constraint**: `bounds: '#canvas'` keeps windows in viewport
- **Event Delegation**: Close buttons use data attributes for identification

**GSAP Draggable Configuration**:
```javascript
Draggable.create(window, {
  trigger: window.querySelector('.window-titlebar'),
  bounds: '#canvas',
  type: 'x,y',
  edgeResistance: 0.65,
  inertia: true
});
```

**Window Animation Pattern**:
```javascript
// Open
gsap.fromTo(win, 
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
);

// Close
gsap.to(win, {
  scale: 0, opacity: 0, duration: 0.2, ease: 'power2.in',
  onComplete: () => win.classList.add('hidden')
});
```

**Mobile Accessibility**:
- Canvas has `p-4` padding to ensure content doesn't touch edges
- Main media centered with proper responsive sizing
- Video background scales with `object-cover`
- Touch-friendly button sizes (24×24 w-24 h-24)

### Styling Approach
- Utility-first with Tailwind CSS v4
- Component variants via `tailwind-variants`
- Class merging via `tailwind-merge`
- Semantic color tokens for consistent theming
- CSS variable-based theme customization

## Known Issues & Troubleshooting

### Media Files with Spaces in Filenames
**Issue**: Astro cannot import media files with spaces in filenames from `src/assets/`  
**Solution**: Copy media files to `public/` folder and reference them with paths like `/filename.ext`

**Example**:
```astro
// ❌ Doesn't work
import video from '@/assets/QuickEdit-Up to 4K.mov';

// ✅ Works
const video = '/QuickEdit-Up to 4K.mov'; // File must be in public/
```

### GSAP Not Available in Inline Scripts
**Issue**: When using `is:inline` scripts with `define:vars`, GSAP may not be loaded yet  
**Solution**: Implement initialization function with retry logic

**Example**:
```javascript
function initForm() {
  if (typeof window.gsap === 'undefined') {
    setTimeout(initForm, 100);
    return;
  }
  // Your code here
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initForm);
} else {
  initForm();
}
```

### Tailwind CSS Not Working
**Issue**: Styles not loading on pages  
**Solution**: Ensure `@/styles/global.css` is imported in BaseLayout frontmatter

```astro
---
import '@/styles/global.css'; // Must be in frontmatter
---
```

### Starwind Component Props
**Issue**: TypeScript errors about `className` prop  
**Solution**: Use `class` instead of `className` in Astro components

```astro
<!-- ❌ React syntax -->
<Button className="...">Click</Button>

<!-- ✅ Astro syntax -->
<Button class="...">Click</Button>
```

### Audio Autoplay Blocked
**Issue**: Browsers block autoplay by default  
**Solution**: Implement fallback to play on first user interaction

```javascript
audio.play().catch(() => {
  const playOnInteraction = () => {
    audio.play();
    document.removeEventListener('click', playOnInteraction);
  };
  document.addEventListener('click', playOnInteraction);
});
```

## Database Schema

No database currently configured.

## API Endpoints

No API endpoints currently configured.

## Environment Variables

None currently required.

## Build Output

- Static site generation by default
- Output directory: `dist/` (excluded from git)
- Optimized HTML, CSS, and JavaScript bundles

## Development Workflow

1. Start dev server: `bun run dev`
2. Add components as needed: `bunx starwind@latest add [component-name]`
3. Create pages in `src/pages/`
4. Build components in `src/components/`
5. Build for production: `bun run build`
6. Preview build: `bun run preview`

## Next Steps

- Add Starwind UI components as needed
- Create reusable layouts in `src/layouts/`
- Build out pages in `src/pages/`
- Implement animations with GSAP or tw-animate-css
- Define project-specific components
- Consider adding content collections if needed
- Set up deployment configuration

---

**Related Documentation:**
- [Subject.md](.context/Subject.md) - Project context and goals
- [SOP.md](.context/SOP.md) - Development best practices
- [README.md](.context/README.md) - Documentation index
