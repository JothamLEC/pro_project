# Standard Operating Procedures

## Best Practices for Development

### Adding Starwind UI Components

1. **Browse available components** at https://starwind.dev/components
2. **Add component via CLI**:
   ```bash
   bunx starwind@latest add [component-name]
   ```
   For example: `bunx starwind@latest add button`
3. **Import and use** in your Astro pages/components:
   ```astro
   ---
   import Button from '@/components/starwind/button/Button.astro';
   import Card from '@/components/starwind/card/Card.astro';
   ---
   <Card class="w-full">
     <Button>Click me</Button>
   </Card>
   ```

**Important Notes**:
- Starwind components are installed in `src/components/starwind/[component-name]/`
- Each component has its own folder with an `index.ts` file
- Use `class` prop, NOT `className` (Astro uses HTML attribute names)
- Import default exports, not named exports

### Creating New Pages

1. **Create a new `.astro` file** in `src/pages/`
2. **Use BaseLayout** for consistent structure:
   ```astro
   ---
   import BaseLayout from '@/layouts/BaseLayout.astro';
   ---
   
   <BaseLayout title="Page Title" description="Page description">
     <!-- Your page content -->
   </BaseLayout>
   ```
3. **File-based routing**: 
   - `src/pages/index.astro` → `/`
   - `src/pages/about.astro` → `/about`
   - `src/pages/blog/[slug].astro` → `/blog/:slug`

### Working with Media Files

#### For Images/Small Assets
- Place in `src/assets/` if importing in components
- Use Astro's image optimization features

#### For Videos/Audio (especially with spaces in filenames)
1. **Place files in `public/` folder** for direct serving
2. **Reference with absolute paths** starting with `/`
3. **Do NOT try to import** large media files with spaces in names

**Example**:
```astro
---
// ❌ Don't do this with files that have spaces
import video from '@/assets/My Video File.mov';

// ✅ Do this instead
const video = '/My Video File.mov'; // File in public/
const audio = '/Background Music.mp3'; // File in public/
---

<video src={video} autoplay loop muted playsinline />
<audio src={audio} autoplay loop />
```

**Why?**: Astro's build process can't handle import paths with spaces. The `public/` folder serves files as-is without processing.

### Adding Styles

1. **Global styles**: Add to `src/styles/global.css`
2. **Component-scoped styles**: Use `<style>` tag in `.astro` files
3. **Tailwind utilities**: Use directly in component markup
4. **Starwind styles**: Already configured in `src/styles/starwind.css`
5. **IMPORTANT**: Always import global CSS in BaseLayout frontmatter, never via `<link>` tags

### Animation Best Practices

**Hybrid Approach: Tailwind + GSAP**

We use a two-tier animation strategy:
1. **Tailwind for simple animations**: Transitions, hover effects, basic transforms
2. **GSAP for complex animations**: Sequential timelines, advanced easing, physics-based motion

#### Using Tailwind Animations

For simple transitions and effects:
```astro
<!-- Hover effects -->
<button class="transition-transform hover:-translate-y-0.5">Hover me</button>

<!-- Fade transitions -->
<div class="opacity-0 transition-opacity duration-300">
  <!-- Add opacity-100 class to show -->
</div>

<!-- Scale animations -->
<div class="scale-0 transition-transform duration-500">
  <!-- Add scale-100 class to animate in -->
</div>
```

#### Using GSAP for Advanced Animations

GSAP is globally available via BaseLayout. Access it in your page scripts:

**For regular scripts**:
```astro
<script>
  import gsap from 'gsap';
  
  // Your animations
  gsap.to('.element', { x: 100, duration: 1 });
</script>
```

**For inline scripts with define:vars (CRITICAL)**:
When using `is:inline` with `define:vars`, you MUST implement initialization with GSAP availability check:

```astro
<script is:inline define:vars={{ someVar }}>
  function initAnimations() {
    // Check if GSAP is loaded, retry if not
    if (typeof window.gsap === 'undefined') {
      setTimeout(initAnimations, 100);
      return;
    }
    
    const gsap = window.gsap;
    
    // Check if DOM elements exist
    const element = document.getElementById('myElement');
    if (!element) {
      console.error('Element not found');
      return;
    }
    
    // Your animations and event listeners here
    gsap.to(element, { x: 100, duration: 1 });
  }
  
  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
</script>
```

**Why?**: `is:inline` scripts run immediately and GSAP may not be loaded yet. The retry logic ensures GSAP is available before executing animations.

#### When to Use Each

**Use Tailwind for:**
- Hover states and focus effects
- Simple opacity/scale transitions
- Basic transforms (translate, rotate)
- State-based styling changes
- Responsive animations

**Use GSAP for:**
- Multi-step animation sequences
- Complex easing functions (bounce, elastic, etc.)
- Coordinated animations across multiple elements
- Physics-based motion
- Precise timing control
- Advanced transforms and morphing
- **Draggable interactions** (see GSAP Draggable below)

### Using GSAP Draggable Plugin

**Purpose**: Make elements draggable with smooth physics and bounds constraints

**Setup**:
```astro
<script>
  import gsap from 'gsap';
  import { Draggable } from 'gsap/Draggable';
  
  // Register the plugin
  gsap.registerPlugin(Draggable);
</script>
```

**Basic Pattern**:
```javascript
Draggable.create('#elementId', {
  type: 'x,y',           // Allow both horizontal and vertical dragging
  bounds: '#container',  // Constrain dragging to container
  edgeResistance: 0.65,  // Resistance at bounds edges (0-1)
  inertia: true          // Smooth momentum after release
});
```

**Dragging by Handle** (e.g., window title bars):
```javascript
Draggable.create('#window', {
  trigger: '#titleBar',  // Only drag when grabbing title bar
  bounds: '#canvas',
  type: 'x,y',
  edgeResistance: 0.65,
  inertia: true
});
```

**Common Patterns**:

*Draggable Windows*:
```javascript
const windows = [
  document.getElementById('window1'),
  document.getElementById('window2')
];

windows.forEach(win => {
  if (win) {
    Draggable.create(win, {
      trigger: win.querySelector('.window-titlebar'),
      bounds: '#canvas',
      type: 'x,y',
      edgeResistance: 0.65,
      inertia: true
    });
  }
});
```

*With Callbacks*:
```javascript
Draggable.create('#element', {
  type: 'x,y',
  onDragStart: function() {
    console.log('Started dragging');
  },
  onDrag: function() {
    console.log('Dragging...', this.x, this.y);
  },
  onDragEnd: function() {
    console.log('Stopped dragging');
  }
});
```

**Important Notes**:
- Elements must have `position: absolute` or `position: relative` for dragging
- Parent container should have `position: relative` for bounds to work correctly
- Use `trigger` to specify a drag handle (like a title bar)
- `edgeResistance` adds natural feel when hitting bounds (0 = no resistance, 1 = full stop)
- `inertia: true` adds momentum/throwable behavior

### Creating Infinite Scroll Marquees

**Purpose**: Create smooth, seamless infinite scrolling animations for backgrounds or decorative elements

**Key Concept**: Duplicate your content and animate by exactly -50% to create a perfect loop

**Basic Pattern**:

```astro
<div class="marquee-wrapper">
  <div class="marquee-row">
    <div class="marquee-track">
      <!-- First set of content -->
      <img src="/icon.png" alt="Item 1" />
      <img src="/icon.png" alt="Item 2" />
      <img src="/icon.png" alt="Item 3" />
      <!-- ... more items ... -->
      
      <!-- Duplicate set (exactly the same) -->
      <img src="/icon.png" aria-hidden="true" />
      <img src="/icon.png" aria-hidden="true" />
      <img src="/icon.png" aria-hidden="true" />
      <!-- ... same number of items ... -->
    </div>
  </div>
</div>

<style>
  .marquee-wrapper {
    width: 100%;
    overflow: hidden;
  }

  .marquee-row {
    overflow: clip;
    /* Optional: Add fade on edges */
    mask-image: linear-gradient(
      to right,
      transparent,
      black 5rem,
      black calc(100% - 5rem),
      transparent
    );
  }

  .marquee-track {
    display: flex;
    gap: 3rem;
    padding-left: 3rem;
    width: max-content;
    animation: marquee-scroll 30s linear infinite;
  }

  @keyframes marquee-scroll {
    to {
      transform: translateX(-50%);
    }
  }
</style>
```

**For Ultra-Wide Screens**:
- Add more duplicate content (e.g., 40 total items: 20 visible + 20 duplicates)
- This ensures no gaps appear on very wide monitors

**Alternating Direction** (for multiple rows):
```css
.marquee-row-reverse .marquee-track {
  animation-direction: reverse;
}
```

**Key Principles**:
1. **Exact duplication**: Second set must be identical to first
2. **50% translation**: Animate to exactly `translateX(-50%)` for seamless loop
3. **Use `aria-hidden="true"`**: Mark duplicates for accessibility
4. **Linear timing**: Use `linear` for constant speed
5. **Adjust speed**: Longer duration = slower scroll (30s is relaxed, 10s is fast)
6. **Edge fades**: Use `mask-image` gradient for elegant fade-out on edges
7. **Pointer events**: Add `pointer-events: none` if marquee is purely decorative

**Common Use Cases**:
- Background decorative elements
- Logo/partner scrollers
- Testimonial carousels
- Ambient visual effects

### Component Development

1. **Create reusable components** in `src/components/`
2. **Use TypeScript** for type safety
3. **Follow naming conventions**:
   - PascalCase for component files
   - Descriptive, semantic names
4. **Keep components focused**: Each component should have a single responsibility

### Path Aliases

- Use `@/` alias for imports from `src/`
  ```typescript
  import Layout from '@/layouts/Layout.astro';
  import Button from '@/components/ui/button.astro';
  ```

### Running Development Commands

- **Start dev server**: `bun run dev`
- **Build for production**: `bun run build`
- **Preview production build**: `bun run preview`
- **Add Starwind component**: `bunx starwind@latest add [component]`

### Documentation Updates

**After implementing new features**, update the relevant documentation:
1. **System.md**: Update project structure, tech stack, or core functionalities
2. **Subject.md**: Update project context if scope changes
3. **SOP.md**: Add new procedures or best practices
4. **README.md**: Update the documentation index if new docs are added

### Git Workflow

1. Make changes in feature branches
2. Commit with clear, descriptive messages
3. Test builds before committing
4. Keep commits focused and atomic

### Code Quality

- Use TypeScript strict mode (already configured)
- Follow Astro best practices
- Keep components accessible (leverage Starwind UI's built-in accessibility)
- Test responsive layouts with Tailwind's utilities
- Optimize images and assets

---

**Note:** These SOPs should evolve as the project grows. Always update this document when establishing new patterns or workflows.
