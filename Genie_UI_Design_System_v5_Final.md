# Genie UI Design System — Unified Specification

**Version:** 5.0 (Corrected Edition)
**Last Updated:** 2026-02-08
**Review Applied:** Comprehensive corrections from v4 review
**Status:** Active
**Architecture:** Foundation + Mode System

---

## Table of Contents

1. **Mode 1: Foundation Layer** — Shared tokens all modes inherit
2. **Mode 2: Marketing — Landing Page** — Sanctioned overrides for conversion-optimized pages
3. **Mode 3: Product — User App** — Consumer mobile-first application
4. **Mode 4: Product — Vendor App** — Business/service-provider application
5. **Mode 5: Product — Admin Dashboard** — Internal administration panel
6. **Cross-Mode Implementation Guide** — Dev handoff, platform notes, testing
7. **Appendix** — Quick reference, version history, resources

### Document Architecture

This specification uses a **Foundation + Mode** architecture:

- **Foundation Layer** defines shared design tokens (colors, typography, spacing, motion, iconography) that ALL modes inherit by default.
- **Marketing Mode** applies 6 explicitly sanctioned overrides for conversion-optimized landing pages. Every override is documented with rationale and constraint boundary.
- **Product Modes** (User App, Vendor App, Admin Dashboard) follow Foundation strictly with zero overrides. Admin Dashboard has one density adjustment (40px toolbar buttons, 44px table rows).

**Golden Rule:** When building any component, start with Foundation tokens. Only deviate if the component lives in Marketing Mode AND the deviation is listed in the Sanctioned Overrides table. Everything else is a bug.

---

## Mode 1: Foundation Layer

**Version:** 1.0
**Last Updated:** 2026-02-08
**Review Applied:** Comprehensive corrections from v4 review
**Status:** Active

---

### 1. Brand Identity & Design Philosophy

#### Brand Statement

**"Uber Infrastructure meets ChatGPT Intelligence"**

Genie is a unified design system for high-performance, data-intensive applications. It combines industrial precision with intelligent interaction—delivering interfaces that feel engineered, responsive, and purposeful. Dark mode native, built for velocity.

#### Core Vibe

- **High-Performance:** Instant feedback, snappy interactions, no lag
- **Industrial:** Black Ops aesthetics, mechanical motion, precision engineering
- **Data-Driven:** Structured information density without visual chaos
- **Native-First:** Designed concurrently for Web (React), iOS (SwiftUI), Android (Compose/Kotlin), and Admin Web

#### Design Principles

| Principle | Definition |
|-----------|-----------|
| **Precision Over Decoration** | Every pixel serves a functional purpose. No ornament. Maximum signal-to-noise. |
| **Black Ops Aesthetics** | Deep charcoal foundation with surgical use of light to guide attention and hierarchy. |
| **Mechanical Physics** | Interfaces snap into place, slide with confidence, lock into position. Engineered, not organic. |
| **Data Density** | Show the data (IDs, coordinates, latency). Structure it beautifully. Trust the user. |

---

### 2. Color System

#### 2.1 Semantic Tokens — Backgrounds

| Token | Dark Mode | Light Mode | Purpose |
|-------|-----------|-----------|---------|
| `bg-default` | `#050505` | `#F4F5F7` | Canvas background, main surface |
| `bg-surface` | `#121212` | `#FFFFFF` | Elevated surfaces, cards, panels |
| `bg-input` | `#1A1A1A` | `#F0F2F5` | Form inputs, text fields, shallow containers |
| `bg-overlay` | `rgba(5,5,5,0.85)` | `rgba(0,0,0,0.4)` | Modal backdrops, menu overlays |
| `border-subtle` | `#333333` | `#E2E4E8` | Dividers, inactive states, low contrast |
| `border-strong` | `#555555` | `#C4C8D0` | Active borders, input focus, high contrast |

#### 2.2 Brand Color Scale — Primary (Constant Across All Themes)

| Token | Value | Usage |
|-------|-------|-------|
| `primary-main` | `#FF4D00` | CTAs, primary buttons, selected states |
| `primary-hover` | `#FF6A2B` | Hover state on primary actions |
| `primary-pressed` | `#CC3D00` | Pressed/active state on primary actions |
| `primary-dim` | `#4D1700` | Background tint for primary (15% opacity dark, 10% opacity light) |
| `primary-glow` | `#FF4D00` | Glow effects, focus rings, highlight accents |

#### 2.3 Text Color Scale

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|-----------|-------|
| `text-primary` | `#EDEDED` | `#111111` | Headlines, primary labels, primary action text |
| `text-body` | `#A1A1A1` | `#4A5568` | Body text, secondary labels, descriptions |
| `text-muted` | `#666666` | `#94A3B8` | Tertiary information, helper text, hints |
| `text-disabled` | `#333333` | `#CBD5E1` | Disabled controls, inactive states |
| `text-inverse` | `#111111` | `#FAFAFA` | Text on primary background (inverse contrast) |

#### 2.4 Semantic Status Colors (Constant Across All Themes)

| Token | Color | Usage |
|-------|-------|-------|
| `status-success` | `#00E096` | Success states, positive confirmations, completed status |
| `status-error` | `#FF2D55` | Error messages, failure states, critical alerts |
| `status-warning` | `#FFC043` | Warnings, cautionary states, pending actions |
| `status-info` | `#2E93FA` | Information messages, neutral alerts, secondary actions |

#### 2.5 Accessibility & Contrast Ratios

All color combinations meet WCAG AA minimum (4.5:1) for normal text.

| Combination | Ratio | Level | Context |
|------------|-------|-------|---------|
| Primary Orange (`#FF4D00`) on Dark (`#050505`) | 5.4:1 | AA | Buttons, active states |
| Text Inverse (`#111111`) on Primary Orange | 5.6:1 | AA | Text within orange buttons |
| Primary Text (`#EDEDED`) on Dark (`#050505`) | 15.8:1 | AAA | Headlines, critical information |
| Body Text (`#A1A1A1`) on Dark (`#050505`) | 6.7:1 | AA | Body copy, descriptions |

---

### 3. Typography System

#### 3.1 Font Families

| Role | Family | Characteristics |
|------|--------|-----------------|
| **Headlines** | Outfit | Geometric sans-serif, confident, modern, zero-width numerals |
| **UI & Body** | Plus Jakarta Sans | Humanist sans-serif, warm, readable, optical spacing |
| **Data & Code** | JetBrains Mono | Monospace, fixed-width, high legibility for technical content |

**Font Loading Strategy:** Embed Outfit (headlines only) and Plus Jakarta Sans for UI. Load JetBrains Mono on-demand for code blocks and data displays.

#### 3.2 Typographic Scale (Base 16px, Modular Ratio 1.2)

| Scale | Font | Size | Line Height | Letter Spacing | Weight | Usage |
|-------|------|------|-------------|---|--------|-------|
| Display XL | Outfit | 80px | 110% (88px) | -3% (-2.4px) | Bold 700 | Splash screens, hero titles |
| Display L | Outfit | 56px | 115% (64px) | -2% (-1.12px) | SemiBold 600 | Page hero, splash headlines |
| Heading 1 | Outfit | 32px | 120% (38px) | -1% (-0.32px) | SemiBold 600 | Page titles, section headers |
| Heading 2 | Outfit | 24px | 130% (31px) | 0% | Medium 500 | Subsection headers, modal titles |
| Heading 3 | Outfit | 20px | 140% (28px) | 0% | Medium 500 | Card headers, tertiary headers |
| Body Large | Plus Jakarta Sans | 18px | 160% (28px) | 0% | Regular 400 | Lead text, featured body copy |
| Body Base | Plus Jakarta Sans | 16px | 150% (24px) | 0% | Regular 400 | Default body text, labels, UI labels |
| Body Small | Plus Jakarta Sans | 14px | 150% (21px) | 0% | Regular 400 | Secondary labels, helper text |
| Caption | Plus Jakarta Sans | 12px | 140% (16px) | +1% (+0.12px) | Medium 500 | Captions, timestamps, metadata |
| Button | Plus Jakarta Sans | 16px | 100% (16px) | +2% (+0.32px) | SemiBold 600 | Button labels (all buttons) |
| Mono Base | JetBrains Mono | 14px | 150% (21px) | 0% | Regular 400 | Code blocks, IDs, data values |
| Mono Small | JetBrains Mono | 12px | 140% (16px) | 0% | Medium 500 | Inline code, version tags, micro-labels |

#### 3.3 Text Styles (CSS/Design Tokens)

```yaml
text-display-xl:
  font-family: Outfit
  font-size: 80px
  line-height: 1.1
  font-weight: 700
  letter-spacing: -3%

text-heading-1:
  font-family: Outfit
  font-size: 32px
  line-height: 1.2
  font-weight: 600
  letter-spacing: -1%

text-body-base:
  font-family: Plus Jakarta Sans
  font-size: 16px
  line-height: 1.5
  font-weight: 400
  letter-spacing: 0%

text-button:
  font-family: Plus Jakarta Sans
  font-size: 16px
  line-height: 1
  font-weight: 600
  letter-spacing: +2%

text-mono-base:
  font-family: JetBrains Mono
  font-size: 14px
  line-height: 1.5
  font-weight: 400
  letter-spacing: 0%
```

---

#### 3.4 OpenType Features

Apply these globally for enhanced typography:

```css
/* Global OpenType Features */
* {
  font-feature-settings:
    "kern" 1,    /* Kerning */
    "liga" 1,    /* Standard ligatures */
    "calt" 1,    /* Contextual alternates */
    "tnum" 1,    /* Tabular (fixed-width) numerals */
    "zero" 1;    /* Slashed zero */
}

/* Headlines: Enable stylistic alternates */
h1, h2, h3, h4, h5, h6,
.text-display-xl,
.text-heading-1,
.text-heading-2,
.text-heading-3 {
  font-feature-settings:
    "ss01" 1,    /* Stylistic set 01 (Outfit: alternate 'a') */
    "ss02" 1;    /* Stylistic set 02 (Outfit: alternate 'g') */
}
```

---

### 4. Spacing & Layout System

#### 4.1 8-Point Grid

The spacing scale is based on an 8px fundamental unit. All spacing, sizing, and positioning use multiples of 8.

| Token | Value | Usage |
|-------|-------|-------|
| `space-0.5` | 4px | Tight spacing, icon-to-text gaps |
| `space-1` | 8px | Component padding, tight gutters |
| `space-1.5` | 12px | Input padding (vertical), form gaps |
| `space-2` | 16px | Standard padding, card padding |
| `space-3` | 24px | Section spacing, hero padding |
| `space-4` | 32px | Large sections, panel padding |
| `space-6` | 48px | Major spacing, full sections |
| `space-8` | 64px | Full-bleed sections, max gaps |

**Application Rules:**

- All padding/margin must be multiples of 8px
- Never mix 4px and 16px in adjacent elements (use 12px as bridge)
- Horizontal padding matches vertical for squares and balanced layouts
- Vertical spacing > horizontal spacing in data-dense interfaces

#### 4.2 Responsive Breakpoints

| Device Class | Width Range | Columns | Margin | Gutter | Max Container |
|--------------|-------------|---------|--------|--------|---|
| **Mobile** | 0–599px | 4 | 24px | 16px | 100% |
| **Tablet** | 600–1023px | 8 | 32px | 24px | 100% |
| **Desktop** | 1024–1439px | 12 | 64px | 24px | 100% |
| **Wide** | 1440px+ | 12 | 64px | 24px | 1280px (centered) |

**Breakpoint Variables:**

```yaml
$bp-mobile-max: 599px
$bp-tablet-start: 600px
$bp-tablet-max: 1023px
$bp-desktop-start: 1024px
$bp-desktop-max: 1439px
$bp-wide-start: 1440px
$bp-wide-container: 1280px
```

**Safe Areas (Mobile):** Add 24px horizontal padding at viewport edge; reduce to 16px below 400px width for max usability.

#### 4.3 Z-Index Stack

| Layer | Z-Index | Usage |
|-------|---------|-------|
| `z-floor` | 0 | Default document flow |
| `z-elevated` | 100 | Elevated cards, sticky sections |
| `z-sticky` | 500 | Sticky headers, pinned navigation |
| `z-overlay` | 800 | Modals, side sheets, dropdowns |
| `z-toast` | 900 | Toast notifications, snackbars |
| `z-cursor` | 999 | Tooltips, popovers, highest priority |

---

### 5. Shape & Border Radius

#### 5.1 Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `radius-none` | 0px | Sharp edges (rare) |
| `radius-xs` | 4px | Small buttons, tight inputs, micro-elements |
| `radius-sm` | 8px | Button corners, input fields, small cards |
| `radius-md` | 12px | Standard radius for most components |
| `radius-lg` | 24px | Large cards, modals, hero sections |
| `radius-full` | 9999px | Pills, badges, fully rounded elements |

**Strategy:** Use `radius-sm` (8px) as default. Apply `radius-md` (12px) for larger components. Reserve `radius-lg` (24px) for hero/modal contexts.

#### 5.2 Borders

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|-----------|-------|
| `border-width-thin` | 1px | 1px | Dividers, subtle borders |
| `border-width-std` | 1px | 1px | Input borders, card borders |
| `border-width-thick` | 2px | 2px | Focus rings, active states, emphasis |

**Border Colors:** Use `border-subtle` for inactive states; `border-strong` for active/focus states. Semantic colors (success, error) override for status indicators.

---

### 6. Shadow & Elevation System

#### 6.1 Shadow Scale

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|-----------|-------|
| `shadow-sm` | None (use border only) | `0 2px 4px rgba(5,5,5,0.05)` | Subtle elevation, slight depth |
| `shadow-md` | `0 4px 12px #050505` | `0 8px 16px rgba(5,5,5,0.08)` | Elevated cards, modals, popovers |
| `shadow-glow` | `0 0 12px rgba(255,77,0,0.4)` | `0 0 12px rgba(255,77,0,0.3)` | Focus rings, hover highlights (primary only) |

**Dark Mode Strategy:** Minimize shadows; rely on border and surface color separation. Use `shadow-md` only for critical elevation (modals, overlays). Use `shadow-glow` sparingly for primary CTAs.

**Light Mode Strategy:** Shadows provide depth and separation. Apply `shadow-sm` for subtlety; `shadow-md` for prominent surfaces.

**Blur:** All shadows use 12px blur radius maximum for clean, modern appearance.

---

### 7. Motion & Animation

#### 7.1 Timing Durations

| Token | Duration | Usage |
|-------|----------|-------|
| `duration-instant` | 100ms | Micro-interactions (hover states, small toggles) |
| `duration-fast` | 200ms | UI transitions (fade in/out, scale) |
| `duration-nav` | 300ms | Navigation transitions, sheet slides, major state changes |
| `duration-breath` | 2000ms | Loading pulse, ambient animations |

#### 7.2 Easing Functions

| Easing | Cubic Bezier | Usage |
|--------|--------------|-------|
| **Mechanical Snap** | `cubic-bezier(0.2, 0, 0.38, 0.9)` | Button presses, snappy state changes, industrial feel |
| **Linear** | `cubic-bezier(0, 0, 1, 1)` | Progress bars, determinate animations, predictable motion |
| **Recoil** | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Entrance animations, celebratory moments, elastic bounce |
| **Ease Out** | `cubic-bezier(0, 0, 0.2, 1)` | Fade outs, scale downs, exit animations |
| **Ease In** | `cubic-bezier(0.4, 0, 1, 1)` | Fade ins, builds, emphasis animations |

#### 7.3 Motion Choreography

**Entrance Animations:**

- Mobile: Slide in from right/left edge with Recoil easing (duration-fast)
- Desktop: Fade in and slide up with Ease Out easing (duration-fast)
- Stagger lists by 50ms per item (maximum 6 items; batch after)

**Origin Point:** All transforms originate from the action point (button, icon, touch location) when possible.

**Exit Animations:**

- Reverse entrance motion (slide out, fade out) with Ease Out easing
- Duration: match entrance (duration-fast)

**Reduced Motion Respect:**

```javascript
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

#### 7.4 Refusal Shake (Error Feedback)

**Purpose:** Signal a blocked/invalid action with a short, forceful horizontal shake.

**Spec:**

- duration: 200ms
- oscillations: 3
- amplitude: 6px (horizontal)
- easing: Mechanical Snap
- haptics: error (mobile only)

**CSS Keyframes:**

```css
@keyframes refusal-shake {
  0% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
  100% { transform: translateX(0); }
}

.refusal-shake {
  animation: refusal-shake 200ms cubic-bezier(0.2, 0, 0.38, 0.9);
}
```

**Framer Motion (Web):**

```javascript
const refusalShake = {
  x: [0, -6, 6, -4, 4, 0],
  transition: { duration: 0.2, ease: [0.2, 0, 0.38, 0.9] }
};
```

**Mobile Haptics:** Trigger error haptic (iOS `.error`, Android `HapticFeedbackConstants.REJECT` or `LONG_PRESS`).

#### 7.5 Toast Auto-Dismiss Timing

| Type | Auto-Dismiss | Notes |
|------|--------------|-------|
| Success | 3s | Then fade out 300ms |
| Info | 4s | Standard informational feedback |
| Warning | 6s | Allow more reading time |
| Error | Persistent | Manual close required |

#### 7.6 Micro-Interaction Examples

**Button Press:**

- scale: 0.98 → 1.0
- opacity: 1.0 → 1.0
- duration: 100ms
- easing: Mechanical Snap

**Loading Pulse (Logo):**

- scale: 1.0 → 1.1 → 1.0
- duration: 2000ms
- easing: Linear
- repeat: infinite

**Modal Entrance:**

- opacity: 0 → 1.0
- translateY: 20px → 0
- duration: 200ms
- easing: Ease Out

**Toast Notification:**

- slideInUp: 100px → 0
- opacity: 0 → 1.0
- duration: 200ms
- easing: Recoil
- autoHide: see Toast Auto-Dismiss Timing table

---

### 8. Iconography System

#### 8.1 Icon Library & Specifications

| Attribute | Specification | Notes |
|-----------|---------------|-------|
| **Library** | Phosphor Icons | Consistent, geometric, 24 weights available |
| **Stroke Weight (Inactive)** | 2px (Regular) | Default state, low emphasis |
| **Stroke Weight (Active)** | 2.5px (Bold) | Selected, interactive, emphasized |
| **Sizing Standards** | 16px, 20px, 24px, 32px | See usage matrix below |
| **Line Cap** | Round | For softer, modern appearance |
| **Line Join** | Round | Prevents sharp corner artifacts |

#### 8.2 Icon Sizing & Context

| Size | Weight | Usage | Context |
|------|--------|-------|---------|
| **16px** | Regular 2px | Inline icons, labels, text-adjacent | Within body text, form fields |
| **20px** | Regular 2px | Input field icons, compact UI | Left/right of form inputs |
| **24px** | Bold 2.5px (if active) | Navigation, toolbars, primary controls | Tabs, nav bars, action icons |
| **32px** | Regular 2px | Feature icons, empty states, hero sections | Large buttons, card features |

#### 8.3 Icon Color States

| State | Color | Usage |
|-------|-------|-------|
| **Inactive** | `text-body` | Default, unselected state |
| **Active** | `text-primary` | Hovered, focused, or interactive |
| **Selected** | `primary-main` | Currently active tab, selected item |
| **Disabled** | `text-disabled` | Non-interactive, unavailable |

#### 8.4 Icon Styles & Variants

| Style | Weight | Usage |
|-------|--------|-------|
| **Regular** | Standard | Default, inactive states |
| **Bold** | +0.5px | Active, emphasized states, selected |
| **Duotone** | Dual-color | Empty states, hero illustrations only |
| **Filled** | Solid | Selected states, toggle active |

**Rule:** Use Regular by default. Switch to Bold only when highlighting active state. Duotone reserved for decorative, non-functional contexts (empty states, landing pages).

#### 8.5 Touch Target & Spacing

| Platform | Icon Touch Target | Icon-to-Text Gap | Min Clear Space |
|----------|-------------------|------------------|---|
| **Mobile** | 44px × 44px | 8px | 12px surrounding |
| **Desktop** | 40px × 40px | 8px | 8px surrounding |
| **Inline** | N/A (text size) | 4px | N/A |

#### 8.6 Empty State Icon Mapping

**Default Styling:** 32px, Duotone weight, color `text-muted` (secondary tone at 40% opacity).

| Empty State | Icon (Phosphor) | Usage |
|-------------|-----------------|-------|
| No Results | `magnifying-glass` | Search/filters return zero items |
| No Data | `database` | Charts/tables with no records |
| No Notifications | `bell-slash` | Notification centers, alerts |
| No Messages | `chat-circle` | Messaging or inbox views |
| No Favorites | `star` | Favorites, saved items |
| No Activity | `activity` | Activity feeds, timelines |
| Empty Inbox | `inbox` | General empty list state |

---

### 9. Logo & Brand Mark

#### 9.1 Logo Specifications

| Attribute | Mobile | Desktop | Notes |
|-----------|--------|---------|-------|
| **Height** | 24px | 32px | Width scales proportionally |
| **Position** | Left or center | Left preferred | Never right-aligned |
| **Clearance** | 16px min all sides | 16px min all sides | Protect from adjacent elements |
| **Color** | Always monochrome | Always monochrome | Use `text-primary` (never orange) |
| **Background** | Transparent | Transparent | No background container required |

**Rationale:** Orange-colored logos create competition with primary CTAs. Monochrome ensures the mark doesn't distract from actionable content.

#### 9.2 Logo Loading Animation

**Idle State:**

- Scale: 1.0 (static)
- Opacity: 1.0

**Loading State:**

```css
@keyframes logo-pulse {
  0% {
    transform: scale(1.0);
    opacity: 1.0;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.9;
  }
  100% {
    transform: scale(1.0);
    opacity: 1.0;
  }
}

animation: logo-pulse duration-breath linear infinite;
```

**Trigger:** Activate during async operations (API calls, initial data load).

---

### 10. UX Writing & Content Tone

#### 10.1 Voice & Tone Principles

| Dimension | Guideline | Example |
|-----------|-----------|---------|
| **Efficiency** | No pleasantries, no filler | ✓ "Scanning Grid..." vs ✗ "Searching..." |
| **Verification** | System language, technical accuracy | ✓ "Connection Failed" vs ✗ "Something went wrong" |
| **Urgency** | Direct, action-oriented | ✓ "Update Required" vs ✗ "A new version is available" |
| **Active Voice** | Subject-verb-object, never passive | ✓ "Save Changes" vs ✗ "Changes will be saved" |
| **Specificity** | Domain language over generic | ✓ "No Inventory Detected" vs ✗ "No results found" |

#### 10.2 Content Capitalization & Formatting

| Element | Rule | Example |
|---------|------|---------|
| **Data Labels** | ALL CAPS | `LATITUDE`, `TIMESTAMP`, `REQUEST_ID` |
| **Numbers** | Monospace font with units | `42.3 km` (using JetBrains Mono) |
| **IDs & Codes** | Monospace, ALL CAPS or alphanumeric | `REQ-00127A` |
| **Timestamps** | Relative if <1 day old; absolute if older | "2m ago" or "Feb 8, 2026 14:32" |
| **Errors** | Sentence case, actionable | "Retry request" not "request failed" |
| **Buttons** | Title case, action verb | "Save Draft" not "save" |

#### 10.3 System Language Dictionary

| Situation | Approved Language | Avoid |
|-----------|------------------|-------|
| Loading | "Scanning Grid...", "Connecting...", "Indexing..." | "Loading...", "Searching..." |
| Empty State | "No Inventory Detected", "No Matches Found" | "Nothing here", "No results" |
| Error | "Connection Failed", "Request Timeout", "Invalid ID" | "Something went wrong", "Error occurred" |
| Confirmation | "Saved", "Deleted", "Synced" | "Done", "Complete", "OK" |
| Disabled | "Insufficient Permissions", "Not Available", "Locked" | "Can't do that", "Unavailable" |

#### 10.4 Text Interaction Formatting

**Inline Code (Mono Small):**
Use JetBrains Mono 12px for inline references to IDs, function names, or technical terms within body text.

**Data Values (Mono Base):**
Use JetBrains Mono 14px for displayed data (coordinates, timestamps, metrics) that users may need to copy or reference.

**Error Messages:**

- Always include the error code (system-generated) and suggested action
- Format: "[Error Label]: [Brief Description]. [Action]."
- Example: "REQUEST_TIMEOUT: Connection exceeded 30s limit. Retry or contact support."

---

### 11. Accessibility & Compliance

#### 11.1 WCAG 2.1 Compliance

| Criterion | Level | Implementation |
|-----------|-------|---|
| **Color Contrast** | AA minimum (4.5:1 text) | All text combinations validated in Section 2.5 |
| **Focus Indicators** | AA | Visible focus ring (2px, `primary-main` or `border-strong`) |
| **Motion** | AAA | `prefers-reduced-motion` respected globally |
| **Touch Targets** | Enhanced | 44px minimum on mobile, 40px on desktop |
| **Semantic HTML** | AA | Proper heading hierarchy, landmark regions, ARIA labels |

#### 11.2 Keyboard Navigation

- Tab order follows visual left-to-right, top-to-bottom flow
- Tab index: avoid hardcoded values (use natural DOM order)
- Focus visible on all interactive elements (buttons, inputs, links)
- Escape closes overlays (modals, sheets, popovers)
- Enter triggers primary action; Space toggles inputs

#### 11.3 Screen Reader Support

- All icons have descriptive `aria-label` attributes
- Form inputs paired with `<label>` elements
- Dynamic content updates announced with `aria-live="polite"`
- Status changes labeled with `role="status"` or `role="alert"`

#### 11.4 Motion & Vestibular Considerations

All animations respect `prefers-reduced-motion`. Critical interactions (loading, state change) have text fallbacks.

---

### 12. Design Token Export Format

#### 12.1 CSS Custom Properties (Variables)

```css
/* Backgrounds */
--bg-default: #050505;
--bg-surface: #121212;
--bg-input: #1A1A1A;
--bg-overlay: rgba(5, 5, 5, 0.85);
--border-subtle: #333333;
--border-strong: #555555;

/* Brand Colors */
--primary-main: #FF4D00;
--primary-hover: #FF6A2B;
--primary-pressed: #CC3D00;
--primary-dim: rgba(77, 23, 0, 0.15);
--primary-glow: #FF4D00;

/* Text Colors */
--text-primary: #EDEDED;
--text-body: #A1A1A1;
--text-muted: #666666;
--text-disabled: #333333;
--text-inverse: #111111;

/* Status */
--status-success: #00E096;
--status-error: #FF2D55;
--status-warning: #FFC043;
--status-info: #2E93FA;

/* Spacing */
--space-0-5: 4px;
--space-1: 8px;
--space-1-5: 12px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-6: 48px;
--space-8: 64px;

/* Radius */
--radius-none: 0;
--radius-xs: 4px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 24px;
--radius-full: 9999px;

/* Typography */
--font-headlines: 'Outfit', sans-serif;
--font-ui: 'Plus Jakarta Sans', sans-serif;
--font-mono: 'JetBrains Mono', monospace;

/* Z-Index */
--z-floor: 0;
--z-elevated: 100;
--z-sticky: 500;
--z-overlay: 800;
--z-toast: 900;
--z-cursor: 999;

/* Timing */
--duration-instant: 100ms;
--duration-fast: 200ms;
--duration-nav: 300ms;
--duration-breath: 2000ms;

/* Easing */
--ease-snap: cubic-bezier(0.2, 0, 0.38, 0.9);
--ease-linear: cubic-bezier(0, 0, 1, 1);
--ease-recoil: cubic-bezier(0.175, 0.885, 0.32, 1.275);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

#### 12.2 Design Token JSON (for Design Tools)

```json
{
  "color": {
    "bg": {
      "default": { "value": "#050505", "type": "color" },
      "surface": { "value": "#121212", "type": "color" },
      "input": { "value": "#1A1A1A", "type": "color" },
      "overlay": { "value": "rgba(5, 5, 5, 0.85)", "type": "color" }
    },
    "primary": {
      "main": { "value": "#FF4D00", "type": "color" },
      "hover": { "value": "#FF6A2B", "type": "color" },
      "pressed": { "value": "#CC3D00", "type": "color" }
    },
    "text": {
      "primary": { "value": "#EDEDED", "type": "color" },
      "body": { "value": "#A1A1A1", "type": "color" },
      "muted": { "value": "#666666", "type": "color" }
    },
    "status": {
      "success": { "value": "#00E096", "type": "color" },
      "error": { "value": "#FF2D55", "type": "color" },
      "warning": { "value": "#FFC043", "type": "color" },
      "info": { "value": "#2E93FA", "type": "color" }
    }
  },
  "spacing": {
    "0-5": { "value": "4px", "type": "dimension" },
    "1": { "value": "8px", "type": "dimension" },
    "2": { "value": "16px", "type": "dimension" },
    "3": { "value": "24px", "type": "dimension" },
    "4": { "value": "32px", "type": "dimension" }
  },
  "radius": {
    "xs": { "value": "4px", "type": "dimension" },
    "sm": { "value": "8px", "type": "dimension" },
    "md": { "value": "12px", "type": "dimension" },
    "lg": { "value": "24px", "type": "dimension" },
    "full": { "value": "9999px", "type": "dimension" }
  },
  "typography": {
    "display-xl": {
      "fontFamily": { "value": "Outfit" },
      "fontSize": { "value": "80px" },
      "lineHeight": { "value": "1.1" },
      "fontWeight": { "value": "700" },
      "letterSpacing": { "value": "-3%" }
    }
  }
}
```

---

### 13. Implementation Checklist

Use this checklist when implementing Genie Foundation across any new product or component:

- [ ] Colors: All semantic tokens applied to backgrounds, text, borders
- [ ] Typography: Correct font families and scales used per context
- [ ] Spacing: All padding/margin multiples of 8px
- [ ] Radius: Border radius applied per component size
- [ ] Motion: Animations respect `prefers-reduced-motion`
- [ ] Shadows: Elevation system consistent with mode (dark/light)
- [ ] Icons: Phosphor icons at correct sizes and weights
- [ ] Accessibility: Color contrast validated (4.5:1+), focus visible
- [ ] Responsiveness: Layout adapts to breakpoints correctly
- [ ] Touch Targets: Interactive elements ≥44px mobile, ≥40px desktop
- [ ] UX Writing: Copy uses approved tone and terminology
- [ ] Z-Index: Layering follows established stack
- [ ] Logo: Applied correctly (monochrome, clearance respected)

---

### 14. Frequently Asked Questions

**Q: When should I use `radius-sm` vs `radius-md`?**
A: Use `radius-sm` (8px) for small components (buttons, inputs, small cards). Use `radius-md` (12px) for larger containers and standard cards. Reserve `radius-lg` (24px) for hero sections and modals only.

**Q: How do I theme for light mode?**
A: Replace dark mode token values with their light mode equivalents (shown in tables). Ensure contrast ratios remain ≥4.5:1. All brand colors (primary, status) remain constant.

**Q: What's the difference between `duration-fast` and `duration-nav`?**
A: `duration-fast` (200ms) is for quick micro-interactions. `duration-nav` (300ms) is for navigational transitions that benefit from slightly more time to feel intentional.

**Q: Can I use different easing functions?**
A: Use only the specified easing curves. Custom curves will feel inconsistent. If none fit your need, post to the Design System Slack for review.

**Q: What font sizes should I use in the app?**
A: Never create custom sizes. Use the typographic scale provided. This ensures visual harmony across all products.

**Q: How do I handle very long labels in buttons?**
A: Keep button text to 2–3 words maximum. If longer, use a secondary text style or truncate intelligently. See Component patterns (Section 2+) for specifics.

---

**Document Version:** 1.0
**Last Reviewed:** 2026-02-08
**Next Review:** 2026-05-08
**Owner:** Design Systems Team

---

## Mode 2 — Marketing Landing Page

A high-performance, conversion-focused mode for external-facing marketing sites. Combines Foundation tokens with 6 sanctioned overrides to deliver brand impact while maintaining performance.

### Inheritance Note

Marketing Landing Page mode inherits 100% of Foundation tokens and applies **6 sanctioned overrides** only. These overrides are strictly limited to specific contexts and components. All unmodified tokens follow Foundation exactly. Overrides enable visual distinction and conversion optimization for external-facing surfaces; product apps (Mode 3) use Foundation without modification.

### Architectural Constraint: Dark-Only Marketing

⚠️ **Critical Limitation:** The Marketing mode is **dark-only** by design.

**Reason:** Marketing pages use opacity-based tokens (`text-white/70`, `bg-white/5%`, `backdrop-blur`) for glassmorphism effects. These tokens are semantically tied to white/light values and cannot be inverted for light mode without complete re-implementation.

**Implication:** If Genie requires light-mode marketing pages in the future, the following must be re-architected:

- All opacity-based text colors → semantic tokens
- All glassmorphism surfaces → solid or gradient backgrounds
- All backdrop-blur effects → removed or replaced with shadows

**Current Scope:** This limitation is acceptable because:

1. Marketing pages are conversion-optimized for a specific aesthetic (dark, premium)
2. Light mode is only required in product modes (User/Vendor/Admin), which already support it
3. The performance and aesthetic benefits of dark marketing outweigh flexibility

---

### Sanctioned Overrides — Marketing Mode

| Token/Property | Foundation Value | Marketing Override | Rationale | Constraint |
|---|---|---|---|---|
| **Button Radius** | `radius-sm` 8px | `radius-full` 9999px (pill) | Pill buttons feel playful, modern, and increase visual weight for CTAs without enlarging hit area | Hero CTAs and primary navbar CTA only; all form submit buttons retain `radius-sm` 8px |
| **Shadows** | border-only approach | Glassmorphism + backdrop-blur 16px | Frosted glass creates depth, reduces harsh black-on-black contrast, modern premium aesthetic | Navbar and feature/solution cards only; modals, drawers, toasts remain Foundation solid style |
| **Motion Easing** | Mechanical Snap `cubic-bezier(0.2, 0, 0.38, 0.9)` | Fluid Easing `cubic-bezier(0.16, 1, 0.3, 1)` | Fluid easing feels organic, less mechanical; suitable for scroll-triggered reveal animations | Scroll animations only; button hovers/presses retain Mechanical Snap |
| **Text Opacity** | Semantic color tokens | Tailwind opacity utilities (e.g., `text-white/70`, `text-white/90`) | Opacity utilities enable fine-grained hierarchy; easier to implement glassmorphism transparency | Marketing text only; product UI retains semantic tokens |
| **Visual Effects** | None (Foundation clean) | Aurora, Fluid Orbs, Radar Dots, Map Grid, Static Halo | Decorative motion effects create engagement and visual interest for landing pages | Decorative only; must respect `prefers-reduced-motion: reduce`; max 2 active effects per viewport |
| **Card Style** | Solid + border | Glassmorphism (`bg white/5%`, `blur 16px`, `border white/10%`) | Glass aesthetic differentiates marketing surfaces; modern, premium appearance | Feature/solution cards only; never on data tables or product cards |

---

### Floating Pill Navbar

**Structure:** Fixed, sticky navigation anchored to viewport top. Appears after user scrolls 100px down page.

**Layout & Dimensions:**

- Position: `fixed` top, `z-index: 500` (`z-sticky`)
- Height: 56px
- Width: calc(100vw - 48px) mobile / 90% desktop
- Max width: 1200px, centered horizontally with margin auto + left/right auto

**Styling:**

- Background: `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur(16px)`
- Border: 1px solid `rgba(255, 255, 255, 0.08)`
- Border radius: `radius-full` (9999px)
- Box shadow: `0 4px 24px rgba(0, 0, 0, 0.3)`
- Padding: 0 24px horizontal, vertically centered

**Logo (Left):**

- Height: 24px (width scales proportionally)
- Color: monochrome `text-primary` (#EDEDED)
- Position: left, 24px from edge
- Clearance: 16px minimum all sides
- State: scale 1.0 idle; on hover no scale change

**Navigation Links (Center):**

- Font: Outfit (override), 14px Medium 500
- Color: `text-white/70` (opacity utility)
- Spacing: 32px horizontal gap between links
- Available links: Home, Features, Pricing, Blog, Docs
- States:
  - Default: `text-white/70`
  - Hover: `text-white/90`, no scale
  - Active: `text-primary` (#EDEDED)

**CTA Button (Right):**

- Width: 40px × 56px
- Style: Primary button (override style)
- Background: `primary-main` (#FF4D00)
- Text: "Get Started", Button scale 16px SemiBold, `text-inverse` (#111111)
- Border radius: `radius-full` (pill)
- Padding: 0 24px
- States:
  - Default: bg `primary-main`, text `text-inverse`
  - Hover: bg `primary-hover` (#FF6A2B)
  - Pressed: bg `primary-pressed` (#CC3D00), scale 98%, duration 100ms, easing Mechanical Snap

**Mobile Hamburger:**

- Visible below 768px
- Icon: 24px Phosphor Menu (Regular)
- Color: `text-primary`
- Replaces navigation links; onClick opens slide-out menu

**Entrance Animation:**

- Trigger: After 100px scroll down
- Style: Slide down + fade in
- Duration: 300ms (`duration-nav`)
- Easing: `cubic-bezier(0, 0, 0.2, 1)` (Ease Out from Foundation)
- From: translateY -56px, opacity 0
- To: translateY 0, opacity 1

---

### Hero Section

**Container:**

- Full viewport height: 100vh
- Minimum height: 700px
- Maximum height: 900px
- Background: `#050505` (pure black, override from `#050505`)
- Display: flex, center content both axes
- Padding: safe area + 24px mobile, 64px desktop

**Content Box:**

- Max width: 800px
- Text align: center
- Alignment: all content centered

**Headline:**

- Font: Outfit (override), 56–80px Bold 700 (responsive)
- Desktop 80px, tablet 64px, mobile 56px
- Line height: 110% (88px at 80px size)
- Letter spacing: -3% (-2.4px at 80px)
- Color: `text-primary` (#EDEDED)
- Margin bottom: 24px
- Max characters: 60 (breaks into 2–3 lines naturally)
- Example: "Dispatch at Scale"

**Subheadline:**

- Font: Outfit (override), 18–20px Regular 400
- Line height: 150%
- Color: `text-white/60` (opacity utility)
- Margin bottom: 48px
- Max characters: 100 (breaks into 2 lines)
- Example: "AI-powered grid optimization for enterprise logistics networks"

**CTA Group (Two Buttons):**

- Layout: flex horizontal center, 16px gap
- Mobile: stack vertically, 100% width each

**Primary CTA:**

- Style: Pill button (override)
- Size: 56px height × auto width (min 200px), `radius-full`
- Background: `primary-main` (#FF4D00)
- Text: "Start Free Trial", Button scale 16px SemiBold, `text-inverse`
- Padding: 0 32px
- States:
  - Default: bg `primary-main`
  - Hover: bg `primary-hover` (#FF6A2B)
  - Pressed: bg `primary-pressed` (#CC3D00), scale 98%, duration 100ms, Mechanical Snap
  - Focus: 2px outline `primary-glow` (#FF4D00)
- Accessible: aria-label "Start your free trial"

**Secondary CTA:**

- Style: Outlined pill (override)
- Size: 56px height × auto width (min 200px), `radius-full`
- Background: transparent
- Border: 1px solid `rgba(255, 255, 255, 0.2)` (white 20% opacity)
- Text: "View Demo", Button scale 16px SemiBold, `text-primary`
- Padding: 0 32px
- States:
  - Default: border `white/20`, text `text-primary`
  - Hover: border `white/40`, bg `white/5%`, text `text-primary`
  - Pressed: border `primary-main`, bg `primary-dim` with 10% opacity
  - Focus: 2px outline `primary-glow`

**Hero Entrance Animation (Staggered):**

- Headline:
  - Start: 0ms
  - Duration: 800ms
  - Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (fluid override)
  - From: opacity 0, translateY 30px
  - To: opacity 1, translateY 0
- Subheadline:
  - Start: 150ms (stagger)
  - Duration: 800ms
  - Easing: fluid
  - From: opacity 0, translateY 30px
  - To: opacity 1, translateY 0
- CTAs:
  - Start: 300ms (stagger)
  - Duration: 800ms
  - Easing: fluid
  - From: opacity 0, translateY 30px
  - To: opacity 1, translateY 0
- Visual Effects (Aurora + Radar):
  - Start: parallel at 0ms
  - Duration: full entrance
  - Opacity: fade in alongside headline

**Visual Effects Composition:**

- Background: Aurora radial gradient behind headline (see Visual Effects section)
- Overlay: Radar Dots scattered across viewport (sparse, low density)
- Z-index: effects behind text (z-index 0, text z-index 10)

---

### Feature Cards (3-Column Grid)

**Container:**

- Layout: CSS grid, 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
- Gap: 24px horizontal and vertical
- Padding: 64px section padding (top/bottom), 24px mobile horizontal
- Max width: 1200px, centered
- Background: inherit from hero/body section

**Individual Card:**

- Width: auto (grid fills)
- Height: auto (content-driven)
- Styling: Glassmorphism (override)
  - Background: `rgba(255, 255, 255, 0.03)` (white 3% opacity)
  - Border: 1px solid `rgba(255, 255, 255, 0.06)` (white 6% opacity)
  - Backdrop filter: `blur(16px)`
  - Border radius: `radius-lg` 24px
  - Padding: 32px
  - Box shadow: none (glass aesthetic no shadow)

**Card Content Hierarchy:**

**Icon (Top):**

- Library: Phosphor Icons Duotone
- Size: 48px
- Color: `primary-main` (#FF4D00)
- Margin bottom: 16px

**Title:**

- Font: Outfit (override), 20px SemiBold 600
- Line height: 130%
- Color: `text-primary` (#EDEDED)
- Margin bottom: 12px

**Description:**

- Font: Outfit (override), 16px Regular 400
- Line height: 150%
- Color: `text-white/60` (opacity utility)
- Margin bottom: 0

**Card States:**

- Default: as specified above
- Hover (desktop only):
  - Border: `rgba(255, 255, 255, 0.12)` (white 12%)
  - Transform: translateY -4px
  - Duration: 300ms
  - Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (fluid)
  - Cursor: pointer (even though non-interactive)

**Scroll Animation (IntersectionObserver):**

- Trigger: When card enters viewport bottom (20% visibility threshold)
- Entrance style:
  - From: opacity 0, translateY 40px
  - To: opacity 1, translateY 0
  - Duration: 800ms
  - Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (fluid)
- Stagger: 100ms delay per card (first at 0ms, second at 100ms, third at 200ms)
- Fire once: resets on viewport leave but fires max once per page load
- Reduced motion: skip animation, show static opacity 1

---

### Solution Cards (Alternating Layout)

**Container Structure:**

- Repeating rows alternating image-left / text-right
- Full-width sections, 64px vertical spacing
- Max width: 1200px, centered
- Padding: 0 24px mobile, 0 desktop

**Image Side (Left or Right):**

- Ratio: 16:9 aspect
- Styling: Glassmorphism glass appearance
  - Border radius: `radius-lg` 24px
  - Overflow: hidden
  - Backdrop filter: `blur(8px)` (lighter than cards)
  - Border: 1px solid `rgba(255, 255, 255, 0.06)`
- Content: illustration, screenshot, or video
- Mobile: stacks to full-width, single column

**Text Side:**

- Width: 50% desktop, 100% mobile
- Padding: 0 48px desktop, 0 mobile (stacked layout)
- Display: flex, center vertically

**Text Content:**

**Category Tag:**

- Font: Plus Jakarta Sans, 12px Caption ALL CAPS Medium 500
- Letter spacing: +1% (0.12px)
- Color: `text-white/40` (opacity utility)
- Margin bottom: 16px
- Example: "SOLUTION", "FEATURE", "INTEGRATION"

**Title:**

- Font: Outfit (override), 32px SemiBold 600
- Line height: 120%
- Letter spacing: -1% (-0.32px)
- Color: `text-primary` (#EDEDED)
- Margin bottom: 16px

**Description:**

- Font: Outfit (override), 18px Regular 400
- Line height: 160%
- Color: `text-white/50` (opacity utility)
- Margin bottom: 24px
- Max length: 150 characters (2–3 lines)

**CTA Link:**

- Font: Plus Jakarta Sans, 16px SemiBold 600, Button scale
- Letter spacing: +2%
- Color: `primary-main` (#FF4D00)
- Style: underline on hover
- Icon: 16px arrow-right Phosphor, right of text, 8px gap
- States:
  - Default: `primary-main`, no underline
  - Hover: `primary-hover`, underline, gap increases to 12px
  - Duration: 200ms, easing Mechanical Snap

**Row Animation:**

- Trigger: IntersectionObserver, 20% visibility
- From: opacity 0, translateX ±40px (left row translateX -40px, right row translateX +40px)
- To: opacity 1, translateX 0
- Duration: 800ms
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (fluid)
- Fire once per scroll

---

### Footer

**Background:** `#050505` (pure black, override)

**Container Layout:** Bento grid, 3 columns desktop / 2 columns tablet / 1 column mobile, 24px gap, 64px padding section

**Large CTA Cell (spans 2 columns desktop):**

- Background: Glassmorphism `rgba(255, 255, 255, 0.05)` + `blur(16px)`
- Border: 1px solid `rgba(255, 255, 255, 0.08)`
- Radius: `radius-lg` 24px
- Padding: 48px
- Layout: flex column, center center

**Headline (Large CTA):**

- Font: Outfit (override), 32px SemiBold 600
- Color: `text-primary`
- Margin bottom: 12px
- Example: "Ready to Dispatch?"

**Subline (Large CTA):**

- Font: Outfit (override), 18px Regular 400
- Color: `text-white/60`
- Margin bottom: 32px

**Button (Large CTA):**

- Style: Pill primary (override) 56px
- Text: "Start Now"
- Behavior: same as navbar CTA

**Link Columns (1–3 additional cells):**

- Background: `rgba(255, 255, 255, 0.02)` (subtle glass)
- Border: 1px solid `rgba(255, 255, 255, 0.04)`
- Radius: `radius-lg` 24px
- Padding: 32px

**Group Title (Link Column):**

- Font: Plus Jakarta Sans, 12px Caption ALL CAPS Medium
- Letter spacing: +1%
- Color: `text-white/40`
- Margin bottom: 16px
- Example: "PRODUCT", "COMPANY", "LEGAL"

**Links (Link Column):**

- Font: Plus Jakarta Sans, 16px Body Base Regular
- Color: `text-white/60`
- Line height: 200% (32px gap per link)
- States:
  - Hover: `text-primary`, duration 200ms Mechanical Snap
  - Visited: `text-white/50`

**Bottom Bar:**

- Margin top: 48px
- Padding: 24px 0
- Border top: 1px solid `rgba(255, 255, 255, 0.06)`
- Layout: flex space-between, center

**Copyright (Left):**

- Font: Plus Jakarta Sans, 12px Mono Small
- Color: `text-white/40`
- Text: "© 2026 Genie. All rights reserved."

**Social Icons (Right):**

- Layout: flex horizontal, 16px gap
- Icons: 20px Phosphor (Twitter, LinkedIn, GitHub, Discord)
- Color: `text-white/40`
- States: hover `text-primary`, 200ms Mechanical Snap
- Links: open external in new tab

---

### Form Inputs (Marketing Context)

**Standard Input:**

- Height: 56px (larger than Foundation 48px)
- Width: 100% container
- Background: `rgba(255, 255, 255, 0.05)` (glass background)
- Border: 1px solid `rgba(255, 255, 255, 0.1)` (white 10%)
- Border radius: `radius-md` 12px
- Padding: 0 16px horizontal, centered vertically
- Font: Outfit (override), 16px Regular, `text-white/90`
- Placeholder: `text-white/40`
- Line height: 24px

**States:**

- Default: as above
- Focus:
  - Border: 2px solid `primary-main` (#FF4D00)
  - Box shadow: `0 0 0 3px rgba(255, 77, 0, 0.2)` (glow effect)
  - Duration: instant (no transition)
  - Outline: none
- Filled:
  - Background: `rgba(255, 255, 255, 0.08)`
  - Border: 1px solid `rgba(255, 255, 255, 0.12)`
- Error:
  - Border: 2px solid `status-error` (#FF2D55)
  - Box shadow: `0 0 0 3px rgba(255, 45, 85, 0.1)`
  - Error message: 12px Caption, color `status-error`, margin top 8px
- Disabled:
  - Background: `rgba(255, 255, 255, 0.02)`
  - Border: 1px solid `rgba(255, 255, 255, 0.04)`
  - Color: `text-white/30`
  - Cursor: not-allowed

**Textarea:**

- Same as input, min-height 120px, resize vertical

**Select/Dropdown:**

- Same as input, with dropdown icon 20px Phosphor right-aligned
- On open: border and shadow as focus state
- Options dropdown: bg `bg-surface`, border `border-subtle`, **Submit Button (Form-specific):**
- Height: 56px (full-width common pattern)
- Style: Primary button (Foundation, NOT pill)
- Border radius: `radius-sm` 8px (NOT override to pill)
- Background: `primary-main`
- Text: "Submit", Button scale, `text-inverse`
- Padding: 0 24px
- States:
  - Hover: bg `primary-hover`
  - Pressed: bg `primary-pressed`, scale 98%, 100ms Mechanical Snap
  - Disabled: bg `primary-dim`, opacity 50%, cursor not-allowed
  - Loading: show 16px spinner inside button, text hidden

---

### Modal (Marketing Context)

**Constraint:** Modals use Foundation solid style, NOT glassmorphism.

**Modal Dialog:**

- Max width: 560px (narrow) or 800px (wide)
- Background: `bg-surface` (#121212) Foundation token
- Border: 1px solid `border-subtle` (#333333)
- Border radius: `radius-lg` 24px
- Box shadow: `0 4px 12px #050505` (Foundation)
- Padding: 32px (header/body/footer)
- Z-index: 800 (`z-overlay`)

**Backdrop:**

- Background: `rgba(0, 0, 0, 0.7)` (solid dark overlay, darker than Foundation `rgba(5, 5, 5, 0.85)`)
- Backdrop filter: `blur(8px)`
- Z-index: 799 (below modal)

**Modal Entrance Animation:**

- From: opacity 0, scale 95%, translateY 20px
- To: opacity 1, scale 100%, translateY 0
- Duration: 300ms (`duration-nav`)
- Easing: `cubic-bezier(0, 0, 0.2, 1)` (Ease Out)

**Modal Header:**

- Font: Outfit (override), 24px SemiBold
- Color: `text-primary`
- Padding: 0 (inherit from container)
- Close button: 24px X icon top-right, text-white/60 hover text-primary

**Modal Body:**

- Font: Outfit (override), 16px Regular
- Color: `text-white/70`
- Padding: 16px 0 (top/bottom)

**Modal Footer:**

- Layout: flex justify-end, 16px gap
- Buttons: Primary pill (override) 56px, Secondary transparent 56px

**Escape Key:** Closes modal instantly
**Click Backdrop:** Closes modal instantly

---

### Motion System

**Scroll Animations (Override Easing):**

All scroll-triggered elements use:

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (fluid, replaces Mechanical Snap)
- Default entrance: opacity 0 → 1, translateY 40px → 0
- Duration: 800ms
- Trigger: IntersectionObserver, 20% visibility threshold
- Fire: Once per scroll, resets on viewport leave
- Stagger: 100ms per item (max 6 items in view; batch after)

**Hero Entrance:**

- Headline: 0ms
- Subheadline: 150ms offset
- CTAs: 300ms offset
- Visual effects: 0ms (parallel)
- Each property: opacity 0→1, translateY 30px→0
- Duration: 800ms total
- Easing: fluid

**Button Hovers (Keep Foundation):**

- Easing: Mechanical Snap (retain from Foundation, do NOT override)
- Scale: 0.98 → 1.0 on press
- Duration: 100ms

**Card Hovers (Fluid Easing):**

- Transform: translateY 0 → -4px
- Duration: 300ms
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (fluid)

**Link Hovers (Mechanical Snap):**

- Color: `text-white/60` → `text-primary`
- Duration: 200ms
- Easing: Mechanical Snap
- Underline: width 0 → 100%

**Framer Motion Presets:**

```javascript
// fadeInUp: Fade in + slide up
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1], // fluid
  },
};

// staggerContainer: Stagger children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1, // 100ms
      delayChildren: 0,
    },
  },
};

// navbarSlideIn: Navbar appear after scroll
const navbarSlideIn = {
  initial: { y: -56, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: 0.3,
    ease: [0, 0, 0.2, 1], // ease-out
  },
};

// cardHoverScale: Card hover lift
const cardHoverScale = {
  whileHover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1], // fluid
    },
  },
};
```

---

### Visual Effects (5 Decorative Effects)

**General Rules:**

- All effects: `aria-hidden="true"`, `pointer-events: none`
- Respect `prefers-reduced-motion: reduce` (disable animations)
- Max 2 active effects per viewport simultaneously
- Always behind text content (z-index < text)
- Never block interactive elements

#### 1. Aurora Radial Gradient

**Purpose:** Large, soft radial glow behind hero section.

**CSS Implementation:**

```css
.aurora {
  position: absolute;
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    ellipse at center,
    rgba(255, 77, 0, 0.15) 0%,
    rgba(255, 77, 0, 0.08) 25%,
    rgba(255, 77, 0, 0.04) 50%,
    transparent 75%
  );
  filter: blur(100px);
  z-index: 1;
  will-change: transform, filter;
}

@keyframes aurora-rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
    filter: blur(100px);
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg);
    filter: blur(120px);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
    filter: blur(100px);
  }
}

@keyframes aurora-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.aurora {
  animation: aurora-rotate 20s linear infinite, aurora-pulse 15s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .aurora {
    animation: none;
    opacity: 0;
  }
}
```

**Parameters:**

- Base size: 600px (width/height)
- Primary color: `#FF4D00` at 15% opacity start, 8% mid, 4% end
- Blur range: 100–120px
- Rotation: 20s full rotation, linear
- Scale pulse: 1.0 → 1.1, 15s ease-in-out
- Z-index: 1 (behind all text)

---

#### 2. Fluid Orbs

**Purpose:** 4 layers of floating, independent orbs creating depth.

**CSS Implementation:**

```css
.orb-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  will-change: transform;
}

.orb-layer-1 {
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle,
    rgba(255, 77, 0, 0.3) 0%,
    transparent 70%
  );
  filter: blur(40px);
  top: 10%;
  left: 15%;
  animation: float-1 8s ease-in-out infinite;
}

.orb-layer-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(255, 77, 0, 0.2) 0%,
    transparent 70%
  );
  filter: blur(60px);
  top: 50%;
  right: 10%;
  animation: float-2 10s ease-in-out infinite;
}

.orb-layer-3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(255, 77, 0, 0.15) 0%,
    transparent 70%
  );
  filter: blur(80px);
  bottom: 0%;
  left: 30%;
  animation: float-3 12s ease-in-out infinite;
}

.orb-layer-4 {
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(255, 77, 0, 0.1) 0%,
    transparent 70%
  );
  filter: blur(100px);
  top: 20%;
  right: 0%;
  animation: float-4 15s ease-in-out infinite;
}

@keyframes float-1 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
}

@keyframes float-2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 30px); }
}

@keyframes float-3 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
}

@keyframes float-4 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, -20px); }
}

@media (prefers-reduced-motion: reduce) {
  .orb {
    animation: none;
    opacity: 0;
  }
}
```

**Parameters:**

- Layer 1: 200px, blur 40px, opacity 30%, 8s cycle, translate ±30px
- Layer 2: 300px, blur 60px, opacity 20%, 10s cycle, translate ±30px
- Layer 3: 400px, blur 80px, opacity 15%, 12s cycle, translate ±20px
- Layer 4: 500px, blur 100px, opacity 10%, 15s cycle, translate ±30px
- Easing: ease-in-out (sine curve)
- Z-index: 0 (behind everything)
- Spread: independent positions across viewport

---

#### 3. Map Grid

**Purpose:** Subtle CSS grid lines creating a sense of structure and data density.

**CSS Implementation:**

```css
.map-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(
      0deg,
      transparent 24px,
      rgba(255, 255, 255, 0.03) 25px,
      rgba(255, 255, 255, 0.03) 26px,
      transparent 27px,
      transparent 74px,
      rgba(255, 255, 255, 0.03) 75px,
      rgba(255, 255, 255, 0.03) 76px,
      transparent 77px
    ),
    linear-gradient(
      90deg,
      transparent 24px,
      rgba(255, 255, 255, 0.03) 25px,
      rgba(255, 255, 255, 0.03) 26px,
      transparent 27px,
      transparent 74px,
      rgba(255, 255, 255, 0.03) 75px,
      rgba(255, 255, 255, 0.03) 76px,
      transparent 77px
    );
  background-size: 40px 40px;
  background-position: 0 0;
  z-index: 0;
  pointer-events: none;
  opacity: 1;
  animation: grid-pulse 6s ease-in-out infinite;
}

@keyframes grid-pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

.grid-cell-random {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 77, 0, 0.2);
  animation: cell-pulse var(--pulse-duration, 3s) ease-in-out infinite;
  animation-delay: var(--pulse-delay, 0s);
}

@keyframes cell-pulse {
  0%, 100% {
    background: transparent;
    border-color: rgba(255, 77, 0, 0.1);
  }
  50% {
    background: rgba(255, 77, 0, 0.1);
    border-color: rgba(255, 77, 0, 0.3);
  }
}

@media (prefers-reduced-motion: reduce) {
  .map-grid,
  .grid-cell-random {
    animation: none;
    opacity: 0.1;
  }
}
```

**Parameters:**

- Grid cell size: 40px × 40px
- Line color: `white` at 3% opacity
- Line width: 1px
- Random cells: 5–8 cells scattered, pulse 2–4s cycle, staggered 0–2s delays
- Primary accent on pulse: `#FF4D00` at 10–20% opacity
- Z-index: 0
- Overall animation: subtle pulse 6s

---

#### 4. Radar Dots

**Purpose:** Scattered points with pulsing scale animation creating data-point aesthetic.

**CSS Implementation:**

```css
.radar-dots {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.radar-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 77, 0, 0.3);
  will-change: transform;
  animation: radar-pulse var(--pulse-duration, 3s) ease-in-out infinite;
  animation-delay: var(--pulse-delay, 0s);
}

@keyframes radar-pulse {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
}

@media (prefers-reduced-motion: reduce) {
  .radar-dot {
    animation: none;
    opacity: 0;
  }
}
```

**JavaScript Scatter:**

```javascript
function generateRadarDots(count = 24) {
  const dots = [];
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = (i * 200) % 3000; // 200ms stagger, max 3s
    const duration = 2000 + Math.random() * 2000; // 2–4s
    dots.push({ x, y, delay, duration });
  }
  return dots;
}
```

**Parameters:**

- Dot size: 4px × 4px circles
- Color: `#FF4D00` at 30% opacity
- Scatter: random X/Y across viewport
- Pulse: scale 1 → 1.5, opacity 0.3 → 0.6
- Cycle: 2–4s per dot
- Stagger: 200ms offset per dot
- Loop: infinite
- Z-index: 1

---

#### 5. Static Halo

**Purpose:** Large, slow-rotating ring halo creating a sense of energy around hero section.

**CSS Implementation:**

```css
.static-halo {
  position: absolute;
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid rgba(255, 77, 0, 0.08);
  border-radius: 50%;
  z-index: 1;
  will-change: transform;
  animation: halo-rotate 30s linear infinite, halo-breathe 10s ease-in-out infinite;
}

@keyframes halo-rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes halo-breathe {
  0%, 100% {
    opacity: 0.8;
    r: 300px;
  }
  50% {
    opacity: 0.4;
    r: 320px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .static-halo {
    animation: none;
    opacity: 0.1;
    border-color: transparent;
  }
}
```

**Parameters:**

- Ring radius: 300px nominal, 320px at peak
- Border: 2px solid, `#FF4D00` at 8% opacity
- Rotation: 30s full rotation, linear
- Breathing: 10s cycle, opacity 0.8 → 0.4
- Z-index: 1 (behind text)
- Centered on hero

---

### Performance Targets

Lighthouse 90+ score required for marketing site.

**Metrics:**

- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Cumulative Layout Shift (CLS): < 0.1
- JavaScript bundle: < 150KB (minified + gzipped)
- CSS bundle: < 30KB (minified + gzipped)

**Optimization Strategies:**

- Images: lazy-load with placeholder, WebP + JPEG fallback
- Animations: use CSS keyframes not JavaScript
- Effects: render only visible effects (IntersectionObserver)
- Fonts: subset Outfit/Plus Jakarta Sans, preload critical
- Code splitting: separate marketing vs. product bundles

---

### Constraints & Guardrails

**Glassmorphism Rules:**

- ONLY navbar, feature cards, solution cards, footer cells
- NEVER modals, drawers, toasts, tables, forms
- All glass backgrounds must pass WCAG AA (4.5:1) contrast with blur disabled
- Test glass text color against `bg-surface` as fallback

**Pill Button Rules:**

- ONLY hero/navbar/footer CTAs
- NEVER form submit buttons, modal actions, secondary actions
- Pill buttons still 56px height, maintain touch target

**Outfit Typography Rules:**

- ONLY marketing landing pages
- NEVER product apps, internal dashboards, admin interfaces
- Fallback to Plus Jakarta Sans on slow connections (font-display: swap)

**Visual Effects Rules:**

- Must have explicit `aria-hidden="true"` and `pointer-events: none`
- Must respect `prefers-reduced-motion: reduce` (fade to opacity 0)
- Max 2 active effects per viewport at once
- Effects never block or interfere with interactive content
- All effects behind content layer (z-index ≤ 1)

**Accessibility (WCAG AA Minimum):**

- All glass text: validate 4.5:1 contrast with blur disabled
- Example: `text-white/90` on `rgba(white, 5%)` + blur 16px should pass AA
- Test combination in design tool or browser DevTools
- Provide high-contrast fallback for large text (18pt+)

**Mobile (< 768px):**

- Navbar: becomes hamburger menu
- Feature cards: 1 column (not 2)
- Solution cards: image stacks full-width above text
- Footer: 1 column bento grid
- Effects: disable non-essential effects (Radar, Static Halo) to save resources

---

---

## Mode 3 — Product: User App

A mobile-first, consumer-facing application for real-time service dispatch and booking. Follows Foundation tokens exactly with ZERO overrides. Emphasizes data density, snappy interactions, and native-like mobile experience.

### Inheritance Note

User App mode inherits 100% of Foundation tokens. **No overrides applied.** All colors, typography, spacing, motion, and shadows use Foundation exactly. This ensures product consistency and separation from marketing mode.

---

### Buttons (4 Variants)

#### Primary Button

**Dimensions:**

- Height: 48px (standard)
- Width: auto (content-based) or full-width (container-based)
- Min width: 120px (prevents squishing)
- Padding: 0 24px (horizontal)

**Styling:**

- Background: `primary-main` (#FF4D00)
- Text: `text-inverse` (#111111), Button scale 16px SemiBold 600, letter-spacing +2%
- Border: none
- Border radius: `radius-sm` 8px
- Font: Plus Jakarta Sans (Foundation, not Outfit)
- Box shadow: none (Foundation clean)

**States:**

- Default:
  - bg `primary-main` (#FF4D00)
  - text `text-inverse` (#111111)
  - cursor pointer
- Hover:
  - bg `primary-hover` (#FF6A2B)
  - duration 200ms, easing Mechanical Snap
  - no scale change
- Pressed/Active:
  - bg `primary-pressed` (#CC3D00)
  - scale 98%, duration 100ms, easing Mechanical Snap
  - no color shift (scale only)
- Disabled:
  - bg `primary-dim` (#4D1700) at 30% opacity
  - text `text-disabled` (#333333)
  - cursor not-allowed
  - no hover/press states
- Loading:
  - Show 16px circular spinner inside button
  - Text hidden
  - Button disabled during load
  - Spinner color: `text-inverse`

**Accessibility:**

- Minimum 44px touch target (achieved with 48px height + padding)
- Focus visible: 2px outline `primary-glow` (#FF4D00), 4px offset
- ARIA: aria-label for icon-only buttons

---

#### Secondary Button

**Dimensions:**

- Height: 48px
- Width: auto or full-width
- Padding: 0 24px

**Styling:**

- Background: transparent
- Border: 1px solid `border-strong` (#555555)
- Text: `text-primary` (#EDEDED), Button scale
- Border radius: `radius-sm` 8px

**States:**

- Default:
  - bg transparent
  - border `border-strong` (#555555)
  - text `text-primary`
- Hover:
  - bg `primary-dim` 10% opacity (applies `#4D1700` at 10%)
  - border `border-strong` (no change)
  - text `text-primary`
  - duration 200ms Mechanical Snap
- Pressed:
  - border `primary-main` (#FF4D00) 1px
  - bg `primary-dim` 15% opacity
  - scale 98%, 100ms Mechanical Snap
- Disabled:
  - border `border-subtle` (#333333)
  - text `text-disabled`
  - cursor not-allowed

---

#### Ghost Button

**Dimensions:**

- Height: 48px
- Width: auto or full-width
- Padding: 0 16px
- Min width: 100px

**Styling:**

- Background: transparent
- Border: none
- Text: `text-body` (#A1A1A1), Button scale
- Border radius: `radius-sm` 8px

**States:**

- Default:
  - bg transparent
  - text `text-body`
- Hover:
  - text `text-primary` (#EDEDED)
  - bg `bg-input` (#1A1A1A)
  - duration 200ms Mechanical Snap
- Pressed:
  - text `primary-main` (#FF4D00)
  - scale 98%, 100ms Mechanical Snap
- Disabled:
  - text `text-disabled` (#333333)
  - cursor not-allowed

---

#### Destructive Button

**Dimensions:**

- Height: 48px
- Styling similar to Primary
- Padding: 0 24px

**Styling:**

- Background: `status-error` (#FF2D55)
- Text: `text-inverse` (#111111)
- Border radius: `radius-sm` 8px

**States:**

- Default: bg `status-error`
- Hover: bg saturate 120% (shift to brighter red)
- Pressed: scale 98%, 100ms Mechanical Snap
- Disabled: opacity 50%

**Usage:** Delete actions, cancel operations, destructive confirmations

---

### Cards (3 Types with ASCII Diagrams)

#### Vendor Card

**Purpose:** Display vendor/service provider with rating, distance, availability.

**Container:**

- Background: `bg-surface` (#121212)
- Border: 1px `border-subtle` (#333333)
- Border radius: `radius-md` 12px
- Padding: 16px
- Width: 100% (full container, typically in horizontal scroll list)
- Min width: 280px
- Height: auto

**Layout (ASCII):**

```
┌─────────────────────────────┐
│ [IMG: 280×140]              │
│ ┌─────────────────────────┐ │
│ │ [AVATAR: 40px]  [TITLE] │ │
│ │ [CATEGORY]       [★ 4.8] │ │
│ │ [DISTANCE]       [AVAIL] │ │
│ │ [TAG] [TAG]      [PRICE] │ │
│ └─────────────────────────┘ │
│ [ BOOK NOW BUTTON 48px ]    │
└─────────────────────────────┘
```

**Image Section (Top):**

- Ratio: 16:9 aspect
- Height: 140px (auto width)
- Border radius: `radius-md` top only 12px
- Overflow: hidden
- Fallback: bg `bg-input`, icon 48px `text-muted`

**Content Section (Below Image):**

**Vendor Name + Avatar (Header Row):**

- Layout: flex, align center, 12px gap
- Avatar: 40px circle, bg-input fallback
- Title: Heading 3 (20px Outfit Medium), `text-primary`, max 20 chars
- Gap to right: 12px
- Rating: align right, flex-shrink 0

**Rating (Right of Title):**

- Stars: 5 × 20px Phosphor, `primary-main` filled
- Format: "★ 4.8 (412)" on separate line if overflow
- Font: Mono Small 12px
- Color: `text-muted`

**Category + Distance (Second Row):**

- Font: Body Small 14px, `text-body`
- Format: "Hair Salon • 2.3 km away"
- Availability: "Available now" in `status-success` green

**Tags (Third Row):**

- Chips/tags: Body Small 14px, bg `primary-dim`, text `text-primary`, radius-full
- Max 2 tags, overflow hidden
- Common: "Popular", "Top Rated", "New"

**Price (Bottom Right):**

- Font: Display L 56px SemiBold, `primary-main`, right-aligned
- Format: "$45" or "$45–$120" range
- Occupies right side of card

**Button (Bottom):**

- Full width 100%
- Height: 48px
- Primary style
- Text: "Book Now"
- Margin top: 16px

**States:**

- Default: as specified
- Hover (desktop):
  - Border: `border-strong` (#555555) 1px
  - Transform: translateY -2px
  - Duration: 200ms, easing Mechanical Snap
  - Cursor: pointer
- Pressed: scale 98%
- Loading: button shows spinner

---

#### Service Card

**Similar to Vendor but emphasizes service details.**

**Container:** Same as Vendor (280px, `bg-surface`, `radius-md`)

**Layout (ASCII):**

```
┌─────────────────────────────┐
│ [IMG: Service 280×140]      │
│ ┌─────────────────────────┐ │
│ │ [SERVICE TITLE]         │ │
│ │ [DESCRIPTION: 60 chars] │ │
│ │ ────────────────────── │ │
│ │ Duration: 45 min  $65   │ │
│ │ Available: Today 2–4pm  │ │
│ │ Availability: ███ 3 slots│
│ └─────────────────────────┘ │
│ [ BOOK SERVICE ]            │
└─────────────────────────────┘
```

**Differences from Vendor Card:**

- No avatar, no rating
- Service name (larger, Heading 2 24px)
- Description (Body Small, `text-body`)
- Divider line: `border-subtle` 1px
- Duration: "45 min", left-aligned, Body Small
- Price: right-aligned, larger Display L
- Availability text: "Today 2–4pm", Body Small, `text-muted`
- Availability slot counter: Progress bar, 3/5 filled, status-success green

---

#### Order Card

**Purpose:** Display past/current order summary.**

**Container:**

- Same as Vendor (280px min, flexible width)
- `bg-surface`, `border-subtle`, `radius-md` 12px
- Padding: 16px

**Layout (ASCII):**

```
┌─────────────────────────────┐
│ [STATUS: CONFIRMED]         │ (top-right badge)
│ [ORDER ID: ORD-00234] Mono  │
│ ─────────────────────────── │
│ [Vendor Name] Heading 3     │
│ [Service Name]              │
│ $65 • 45 min • Today 2–4pm  │
│ ─────────────────────────── │
│ [RESCHEDULE] [CANCEL]       │ (ghost buttons)
└─────────────────────────────┘
```

**Status Badge (Top-Right):**

- Semantic badge: 24px height, radius-full, ALL CAPS Caption
- Colors:
  - Success green: "COMPLETED"
  - Info blue: "CONFIRMED"
  - Warning yellow: "IN PROGRESS"
  - Error red: "CANCELLED"

**Order ID (Below Badge):**

- Font: Mono Small 12px
- Color: `text-muted`
- Format: "ORD-00234"

**Vendor + Service Details:**

- Heading 3: vendor name
- Body Small: service description
- Body Small inline: "$65 • 45 min • Today 2–4pm"

**Actions (Bottom):**

- Layout: flex space-between, 12px gap
- Ghost buttons 40px height (smaller)
- Text: "Reschedule", "Cancel"
- Accessible: aria-labels

---

### Navigation

#### Bottom Tab Navigation (Mobile)

**Container:**

- Fixed bottom, width 100vw
- Height: 80px (includes safe area)
- Background: `bg-surface` (#121212)
- Backdrop filter: `blur(20px)`
- Border-top: 1px `border-subtle`
- Z-index: 500 (`z-sticky`)
- Safe area: +20px bottom padding on iOS

**Layout:**

- Flex horizontal, 5 tabs, space-around
- Safe area inset respected

**Individual Tab:**

- Width: 20% (5 tabs)
- Height: 60px (without safe area)
- Display: flex column, center align items
- Cursor: pointer

**Tab Icon:**

- Size: 24px Phosphor
- Weight: Regular (2px stroke) default, Bold (2.5px) active
- Color:
  - Inactive: `text-muted` (#666666)
  - Active: `primary-main` (#FF4D00)
- Margin bottom: 4px

**Tab Label (Below Icon):**

- Font: Caption 12px Medium
- Color:
  - Inactive: `text-muted`
  - Active: `text-primary`
- Max width: 60px, truncate if needed

**Tabs (Standard Order):**

1. Home (house icon)
2. Search (magnifying glass)
3. Bookings (calendar)
4. Chat (message)
5. Profile (person)

**Badge (Notifications):**

- 20px circle, `primary-main` background
- Caption 12px centered, `text-inverse` text
- Position: top-right of icon
- Appears on Chat, Bookings tabs when count > 0
- Example: red badge with "3" on Chat tab

**States:**

- Default: inactive state
- Pressed: scale 95%, 100ms Mechanical Snap
- Active: icon filled + primary-main color + label visible
- Disabled: opacity 50%, cursor not-allowed

**Mobile-Only Behavior:**

- Fixed position prevents scroll
- Safe area on iPhone: adds 16–20px bottom padding
- Haptics on iOS: light tap on press

---

#### Top Bar (Mobile)

**Container:**

- Fixed top, height 56px
- Background: `bg-surface` (#121212)
- Border-bottom: 1px `border-subtle`
- Z-index: 500 (`z-sticky`)
- Padding: 8px 16px horizontally, 8px vertically (content center)
- Safe area: +20px top padding on notch devices

**Layout:**

- Flex space-between, align center
- Left: back button or hamburger
- Center: title
- Right: actions (bell, avatar)

**Back Button (Left):**

- 40px circle, icon 24px chevron-left, `text-primary`
- States: hover primary-dim, pressed scale 98%

**Title (Center):**

- Font: Heading 3 20px Medium
- Color: `text-primary`
- Max width: 200px, truncate
- Example: "Home", "Search Results"

**Action Icons (Right):**

- Layout: flex, 8px gap
- Icons: 24px Phosphor, `text-primary`
- Each 40px × 40px touch target
- Badge on bell: red 20px circle with count

**Scroll Behavior:**

- On scroll down: collapse to 44px (title disappears, just icons)
- On scroll up: expand to 56px
- Transition: 300ms (`duration-nav`), easing Mechanical Snap
- Icons always visible

---

#### Desktop Top Bar

**Container:**

- Fixed top, height 64px
- Background: `bg-surface` (#121212)
- Backdrop filter: `blur(8px)` (optional glass effect, Foundation-approved)
- Border-bottom: 1px `border-subtle`
- Z-index: 500
- Padding: 8px 64px (horizontal), 8px vertically (centered content)
- Max width: 1200px centered on screen (or full-width)

**Logo (Left):**

- 32px height (scaled from 24px mobile)
- Color: monochrome `text-primary`
- Margin right: 48px

**Search Bar (Center):**

- Width: 480px max, centered
- Height: 44px
- Background: `bg-input` (#1A1A1A)
- Border: 1px `border-subtle`
- Border radius: `radius-md` 12px
- Padding: 0 16px
- Font: Body Base 16px
- Color: `text-body`
- Placeholder: "Search vendors, services..."
- Icon (left): 20px magnifying glass, `text-muted`, 16px from edge
- States:
  - Focus: border 2px `primary-main`, shadow glow

**Navigation Links (If present):**

- Font: Body Small 14px
- Color: `text-body`
- Spacing: 32px horizontal gap
- Hover: `text-primary`
- Links: none on product app (desktop nav often via sidebar)

**Action Icons (Right):**

- Bell icon: 24px, badge "3"
- Avatar: 40px circle, image or initials
- Spacing: 24px gap

**Sticky Behavior:**

- Remains fixed as user scrolls
- Shadow on scroll: `shadow-md`

---

### Search Component

**Search Input:**

- Height: 48px
- Background: `bg-input` (#1A1A1A)
- Border: 1px `border-subtle`
- Border radius: `radius-md` 12px
- Padding: 0 16px
- Font: Body Base 16px, `text-body`
- Placeholder: "Scanning Grid..." (UX tone)

**Left Icon (Magnifying Glass):**

- Size: 20px Phosphor
- Color: `text-muted`
- Position: 16px left
- Pointer events: none

**States:**

- Default: as above
- Focus:
  - Border: 2px `primary-main`
  - Box shadow: `0 0 0 3px rgba(255, 77, 0, 0.2)` (glow)
  - Background: `bg-input` (no change)
- Filled: border `border-strong`
- Error: border 2px `status-error`, error message 12px below

**Results Dropdown:**

- Position: absolute below input
- Width: 100% (match input)
- Background: `bg-surface` (#121212)
- Border: 1px `border-subtle`
- Border radius: `radius-md` 12px
- Max height: 400px, overflow-y auto
- Z-index: 800 (`z-overlay`)
- Box shadow: `0 4px 12px #050505` (`shadow-md`)

**Result Item (Dropdown):**

- Height: 56px
- Padding: 12px 16px
- Layout: flex, align center
- Font: Body Base 16px, `text-primary`
- Icon (left): 20px Phosphor, `text-muted`, 12px from left
- States:
  - Default: bg transparent
  - Hover: bg `primary-dim` 10% opacity
  - Pressed: bg `primary-dim` 15% opacity

**Category Filter Pills (Below Search):**

- Layout: horizontal scroll, 12px gap
- Pill height: 36px
- Font: Body Small 14px
- Colors:
  - Default: bg `bg-input`, text `text-body`, border `border-subtle`
  - Active: bg `primary-main`, text `text-inverse`, border none
- Padding: 0 12px
- Border radius: `radius-full`
- Example: "All", "Hair", "Nails", "Massage", "Skincare"

---

### Form Inputs & Fields

**Standard Input Field (Foundation Exact):**

- Height: 48px
- Background: `bg-input` (#1A1A1A)
- Border: 1px `border-subtle` (#333333)
- Border radius: `radius-sm` 8px
- Padding: 0 16px horizontal, 12px vertical
- Font: Body Base 16px, `text-primary`
- Placeholder: `text-muted` (#666666)
- Line height: 24px (center content)

**States:**

- Default: as above
- Focus:
  - Border: 2px `primary-main` (#FF4D00)
  - Box shadow: `0 0 0 3px rgba(255, 77, 0, 0.2)` (glow effect)
  - Outline: none
  - Duration: instant
- Filled:
  - Background: `bg-input` (no change)
  - Border: 1px `border-strong`
  - Text color: `text-primary`
- Error:
  - Border: 2px `status-error` (#FF2D55)
  - Box shadow: `0 0 0 3px rgba(255, 45, 85, 0.1)`
  - Error message: 12px Caption, `status-error`, margin top 4px
  - Duration: instant
- Success:
  - Border: 2px `status-success` (#00E096)
  - Checkmark icon (right): 20px, `status-success`
- Disabled:
  - Background: `bg-default` (#050505)
  - Border: 1px `border-subtle`
  - Color: `text-disabled`
  - Cursor: not-allowed
  - Opacity: 50%

**Label (Above Input):**

- Font: Body Small 14px SemiBold
- Color: `text-primary`
- Margin bottom: 8px
- Required indicator: red asterisk

**Textarea:**

- Same as input, min-height 120px
- Resize: vertical only
- Font: monospace optional for code input

**Select/Dropdown Input:**

- Same as input, 48px height
- Dropdown icon (right): 20px chevron-down, `text-muted`
- On focus: chevron rotates 180°, duration 200ms Mechanical Snap
- Disabled: opacity 50%

**Dropdown Menu (Opened):**

- Position: absolute below
- Width: 100%
- Background: `bg-surface`
- Border: 1px `border-subtle`
- Border radius: `radius-md` 12px
- Z-index: 800
- Max height: 320px, overflow-y auto
- Box shadow: `0 4px 12px #050505` (`shadow-md`)

**Dropdown Option:**

- Height: 44px
- Padding: 8px 16px
- Font: Body Base 16px
- Color: `text-body`
- States:
  - Hover: bg `primary-dim` 10% opacity
  - Selected: bg `primary-dim` 15% opacity, text `text-primary`, checkmark 16px left
  - Keyboard focus: border-left 2px `primary-main`

**Date Picker Input:**

- Same as standard input
- Icon (left): 20px calendar
- Placeholder: "MM/DD/YYYY"
- Click opens native/custom date picker
- Selected date: format "Feb 15, 2026"

**Phone Number Input:**

- Same as standard input
- Auto-format: "(123) 456-7890"
- Validation: indicates invalid format in real-time
- Placeholder: "(000) 000-0000"

---

### Badges & Status Indicators

**Status Badge (24px):**

- Height: 24px
- Padding: 0 12px
- Border radius: `radius-full` 9999px
- Font: Caption 12px ALL CAPS SemiBold
- Display: inline-block

**Status Colors:**

- Success (green): bg `rgba(0, 224, 150, 0.15)` (15% opacity in dark mode), text `status-success` (#00E096)
- Error (red): bg `rgba(255, 45, 85, 0.15)` (15% opacity in dark mode), text `status-error` (#FF2D55)
- Warning (yellow): bg `rgba(255, 192, 67, 0.15)` (15% opacity in dark mode), text `status-warning` (#FFC043)
- Info (blue): bg `rgba(46, 147, 250, 0.15)` (15% opacity in dark mode), text `status-info` (#2E93FA)
- Neutral: bg `border-subtle`, text `text-muted`

**Examples:**

- "COMPLETED" (success green)
- "PENDING" (warning yellow)
- "CONFIRMED" (info blue)
- "CANCELLED" (error red)

**Tag Badge (28px):**

- Height: 28px
- Padding: 0 12px
- Border radius: `radius-xs` 4px
- Font: Caption 12px Medium
- Background: `primary-dim`, text `text-primary`
- Removable (if list): X icon 16px right, clickable
- Max width: 100px, truncate

**Count Badge (20px Circle):**

- 20px × 20px circle
- Background: `primary-main` (#FF4D00)
- Text: Caption 12px, `text-inverse`, centered
- Position: typically top-right of parent
- Display: flex, center align

---

### Bottom Sheet (Mobile)

**Container:**

- Position: fixed bottom
- Width: 100vw
- Max height: 85vh
- Background: `bg-surface` (#121212)
- Border: 1px top `border-subtle`
- Border radius: `radius-lg` 24px (top corners only)
- Z-index: 800 (`z-overlay`)
- Safe area: respect bottom safe area padding

**Handle (Top Indicator):**

- Width: 48px, height: 4px
- Background: `border-subtle` (#333333)
- Border radius: `radius-full`
- Position: top center, 12px from top
- Optional visual indicator

**Content:**

- Padding: 24px 16px
- Overflow-y: auto
- Max height: 85vh - 56px (minus header)

**Backdrop:**

- Background: `rgba(0, 0, 0, 0.4)` (Foundation `bg-overlay` alternative)
- Z-index: 799 (below sheet)
- Click: closes sheet

**Entrance Animation:**

- From: translateY 100%, opacity 0
- To: translateY 0, opacity 1
- Duration: 300ms (`duration-nav`)
- Easing: Mechanical Snap

**Exit Animation (Gesture Dismiss):**

- Swipe down > 100px dismisses
- Velocity > 500px/s auto-closes
- Reverse animation: translateY 0 → 100%

**Keyboard Behavior:**

- Sheet shifts up as keyboard opens (iOS keyboard avoidance)
- Max height reduces to 60vh when keyboard visible

---

### Modal (Desktop)

**Constraint:** Modals use Foundation solid style (see Mode 2 for reference).

**Modal Dialog:**

- Max width: 560px (default), 800px (wide variant)
- Background: `bg-surface` (#121212)
- Border: 1px `border-subtle` (#333333)
- Border radius: `radius-lg` 24px
- Box shadow: `0 4px 12px #050505` (`shadow-md`)
- Padding: 32px (uniform)
- Z-index: 800 (`z-overlay`)

**Modal Header:**

- Font: Heading 2 24px SemiBold
- Color: `text-primary`
- Padding: 0 (inherit from container)
- Close button: 24px X icon, top-right, `text-muted` hover `text-primary`

**Modal Body:**

- Font: Body Base 16px
- Color: `text-body`
- Line height: 150%
- Padding: 16px 0 (top/bottom spacing)

**Modal Footer:**

- Layout: flex justify-end, 16px gap
- Padding: 16px 0 top margin
- Buttons: Primary 48px, Secondary 48px

**Backdrop:**

- Background: `rgba(0, 0, 0, 0.7)` (darkened)
- Backdrop filter: `blur(8px)` (optional)
- Click: closes modal (if dismissible)
- Z-index: 799

**Entrance Animation:**

- From: opacity 0, scale 95%, translateY 20px
- To: opacity 1, scale 100%, translateY 0
- Duration: 300ms (`duration-nav`)
- Easing: Mechanical Snap

**Keyboard Navigation:**

- Escape key: closes modal
- Tab: cycles through focusable elements within modal
- Return: submits primary action (if applicable)

**Focus Trap:**

- Focus cycles within modal only
- First focusable element receives initial focus

---

### Toasts & Notifications

**Toast Container:**

- Position: fixed top 24px, center horizontally (desktop) / bottom 24px (mobile safe area)
- Width: 360px (desktop), calc(100vw - 32px) (mobile)
- Max stack: 3 toasts
- Z-index: 900 (`z-toast`)
- Layout: stack vertical, gap 12px

**Individual Toast:**

- Height: auto, min 56px
- Background: `bg-surface` (#121212)
- Border: 1px `border-subtle`, left 3px thick semantic color
- Border radius: `radius-md` 12px
- Padding: 16px
- Box shadow: `0 4px 12px #050505` (`shadow-md`)
- Layout: flex, align center, gap 12px

**Icon (Left):**

- 20px Phosphor, semantic color
- Success: `status-success` green
- Error: `status-error` red
- Warning: `status-warning` yellow
- Info: `status-info` blue

**Message (Center, Flex Grow):**

- Font: Body Base 16px
- Color: `text-primary`
- Max width: 280px

**Close Button (Right, Optional):**

- 20px X icon, `text-muted`
- Hover: `text-primary`
- Click: dismiss toast

**Auto-Dismiss:**

- Success: 3s, then fadeOut 300ms
- Info: 4s
- Warning: 6s
- Error: never (manual close required)

**Entrance Animation:**

- From: opacity 0, translateY -20px (top) / translateY 20px (bottom)
- To: opacity 1, translateY 0
- Duration: 200ms (`duration-fast`)
- Easing: Recoil (from Foundation)

**Exit Animation:**

- From: opacity 1, translateY 0
- To: opacity 0, translateY -20px
- Duration: 200ms
- Easing: Ease Out

**Mobile Behavior:**

- Full width minus safe areas (32px margins)
- Position: bottom safe area
- Stack upward

---

### Empty States

**Container:**

- Display: flex column, center align items
- Min height: 300px, center vertically in container
- Padding: 48px 24px

**Icon:**

- Size: 64px Phosphor Duotone (if available, else Regular)
- Color: `text-muted` (#666666)
- Margin bottom: 24px

**Headline:**

- Font: Heading 1 32px SemiBold
- Color: `text-primary`
- Margin bottom: 12px
- Example: "No Services Found", "No Bookings Yet"

**Description:**

- Font: Body Base 16px
- Color: `text-body`
- Max width: 400px
- Margin bottom: 24px
- Example: "Try searching with different keywords or browse categories"

**Action Button:**

- Style: Secondary 48px (Foundation)
- Text: "Browse Services", "Start Searching"
- Margin top: 0 (auto-spaced from description)

---

### Loading States

**Skeleton Loader (Placeholder):**

- Matches target element size/shape
- Background: `bg-input` (#1A1A1A)
- Shimmer animation: linear gradient slide left→right, 1.5s infinite
- Border radius: match target radius
- Opacity: 0.6
- Common usage: card lists, data tables

```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(
    to right,
    #1A1A1A 0%,
    #2a2a2a 50%,
    #1A1A1A 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 1.5s infinite;
}
```

**Spinner (Loading Indicator):**

- Size variants: 16px (inline), 24px (default), 40px (full-screen)
- Stroke: 2px
- Color: `primary-main` (#FF4D00)
- Animation: rotate 360°, 1s linear infinite
- Usage: buttons, async operations

```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner {
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 77, 0, 0.2);
  border-top-color: #FF4D00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

**Progress Bar:**

- Height: 4px
- Background: `bg-input` (#1A1A1A)
- Filled bar: `primary-main` (#FF4D00)
- Radius: `radius-full` (rounded ends)
- Width: 0–100%
- Animation: smooth transition as progress updates

**Overlay Loading (Full Screen):**

- Position: fixed, full viewport
- Background: `rgba(5, 5, 5, 0.85)` (Foundation `bg-overlay`)
- Backdrop filter: `blur(4px)`
- Z-index: 998 (below toast, above modals)
- Center: spinner 24px
- Spinner color: `primary-main`

---

### Map Components (Service Location)

**Active Signal Pin (Service Location Marker):**

- Icon: 16px circle, solid `primary-main` (#FF4D00)
- Inner core: 6px white circle
- Pulse ring: 32px outer ring, `primary-main` 20% opacity
- Animation: pulse scale 1.0 → 1.2, 2s ease-in-out infinite
- Z-index: on map, clickable

**Selected Pin:**

- Size: 20px circle (scaled up)
- Core: 8px white
- Pulse: 48px outer ring
- Animation: faster pulse 1.5s

**Clustered Pins:**

- Multiple pins at same location collapse into count badge
- Display: circular badge, count number centered
- Background: `primary-main`
- Text: `text-inverse`, Caption 12px
- Size: 40px circle (scales with count)

**Hover Pin:**

- Scale: 1.1x
- Pulse: brighten 20%
- Tooltip: vendor name, distance, rating (Body Small)
- Duration: instant

**Service Route Line:**

- Stroke: 2px, `primary-main` at 60% opacity
- Path: smoothed bezier curve
- Animation: optional dash animation for active routes

**Map Style (Dark Mode):**

- Base tiles: dark gray (#1a1a1a base)
- Text labels: `text-muted` color
- Water: darker shade
- Streets: subtle `border-subtle` color
- Library: Mapbox Dark or Google Maps dark theme

**Map Controls:**

- Zoom buttons (top-right): 40px circles, `bg-surface`, `border-subtle`
- Locate button (top-right below zoom): current location
- Style: Primary secondary icon
- Interactions: Mechanical Snap easing

---

### Patterns & Compositions

#### Chat/Messaging

**Message Bubble (Sent - Right Aligned):**

- Background: `primary-main` (#FF4D00)
- Text: `text-inverse` (#111111), Body Base
- Border radius: `radius-md` 12px (with sharp corner bottom-right: 4px)
- Padding: 12px 16px
- Max width: 70% container width
- Margin: 0 0 8px auto (right align)

**Message Bubble (Received - Left Aligned):**

- Background: `bg-surface` (#121212)
- Border: 1px `border-subtle`
- Text: `text-body`
- Border radius: `radius-md` 12px (sharp corner bottom-left: 4px)
- Padding: 12px 16px
- Max width: 70%
- Margin: 0 auto 8px 0 (left align)

**Timestamp (Centered, Between Messages):**

- Font: Mono Small 12px
- Color: `text-muted`
- Margin: 16px 0
- Example: "2:45 PM Today"

**Typing Indicator (Received):**

- 3 dots, each 8px circle
- Color: `text-muted`
- Animation: bounce up/down, 400ms per dot, staggered
- Position: inside message bubble style

**Input Row (Bottom):**

- Layout: flex, gap 12px
- Height: 56px
- Padding: 8px 16px
- Background: `bg-surface`
- Border-top: 1px `border-subtle`

**Text Input (Chat):**

- Flex grow, 48px height
- Same as standard input but no label
- Placeholder: "Type message..."

**Send Button (Chat):**

- 40px circle, Primary style
- Icon: 20px paper-plane Phosphor, `text-inverse`
- States: hover primary-hover, pressed scale 98%
- Disabled if input empty

---

#### Ratings & Reviews

**Star Rating Display (5 Stars):**

- Icon: 20px Phosphor star
- Color: `primary-main` (#FF4D00) filled, `border-subtle` unfilled
- Spacing: 4px gap
- Interactive: tap to rate, click on star
- Scale: 1.0 default, 1.2x on hover, 0.95 on press
- Duration: 200ms Mechanical Snap

**Average Rating Summary:**

- Display: Heading 1 56px SemiBold "4.8"
- Stars: 5 × 24px below
- Count: Body Small "(412 reviews)" below

**Review Card:**

- Background: `bg-surface`
- Border: 1px `border-subtle`
- Padding: 16px
- Radius: `radius-md`

**Review Header (Reviewer Info):**

- Avatar: 32px circle left
- Name: Body SemiBold 16px right of avatar
- Stars: 3 × 16px right-aligned
- Layout: flex space-between, align center

**Review Body:**

- Font: Body Base 16px
- Color: `text-body`
- Max 5 lines, expand on click
- Margin top: 12px

**Review Metadata:**

- Font: Mono Small 12px, `text-muted`
- Format: "Verified Purchase • Feb 8, 2026"

---

#### Order Flow (Status Timeline)

**Horizontal Step Indicator (Top):**

- 4–5 steps max
- Circles: 40px, numbered 1–5
- States:
  - Completed: bg `status-success`, text white
  - Current: bg `primary-main`, text white
  - Future: bg `border-subtle`, text `text-muted`
- Connectors: lines between circles, `border-subtle` default / `status-success` completed
- Labels below: Body Small, step name

**Status Badges (Per Step):**

- Example row: "1. CONFIRMED", "2. PREPARING", "3. ON THE WAY", "4. ARRIVING", "5. COMPLETED"
- Font: Caption ALL CAPS SemiBold
- Color: semantic (success green, warning yellow, info blue)

**ETA Display (Prominent):**

- Font: Display L 56px SemiBold, `primary-main`
- Format: "Arriving in 12 min"
- Subtext: Body Small, next milestone
- Update frequency: real-time, every 10s

**Live Tracking Map:**

- Full container height
- Service route: 2px `primary-main` line
- Origin pin: `bg-input` circle
- Destination pin: `primary-main` active signal pin
- Current location: large active signal (20px)
- Map controls: zoom + center button

**Vertical Timeline (Below Map, Alternative Layout):**

- Steps vertically stacked
- Left line: connected circles (completed solid, future outline)
- Right content: step name, time, details
- Completed: `text-muted`
- Current: `text-primary`
- Future: `text-muted` lighter

**Example Timeline Entry:**

```
● [CONFIRMED]
  Feb 8, 2:00 PM
  Order placed with Hair & Co.

● [PREPARING]
  Feb 8, 2:15 PM
  Service ready

> [EN ROUTE]
  Arriving in 12 min
  Driver: Sarah (5★)
  Plate: ABC 1234
```

---

### Platform-Specific Notes

#### iOS (SwiftUI)

- NavigationStack for routing (iOS 16+)
- Haptic feedback: light tap (simple), medium (success), heavy (error)
- Safe areas: notch, dynamic island, home indicator inset
- Swipe back: enabled (NavigationStack default)
- Status bar: light content color
- App icon: 180px × 180px, no rounded corners (iOS applies)
- Splash screen: match hero section design

#### Android (Kotlin Compose)

- Material3 overridden with Genie tokens (color, typography)
- Haptics: VibrationEffect.DEFAULT, effects (click, double-click)
- Edge-to-edge: full bleed, inset UI from edges programmatically
- Predictive back gesture: enabled (Android 13+)
- System colors: override Material3 defaults
- Dynamic colors: disable (use static Genie palette)
- Landscape support: responsive breakpoints

#### Web (React + Tailwind v4)

- Framework: React 18+, TypeScript
- Styling: Tailwind CSS v4 with custom theme config
- Icons: @phosphor-icons/react
- Motion: framer-motion for animations
- State management: React Query (server), Zustand (client)
- Forms: react-hook-form + zod validation
- Map: Mapbox GL JS or Google Maps (dark theme)
- PWA: service worker, manifest.json, app shell
- Build: Vite, optimized code splitting
- Bundle targets: JS < 150KB, CSS < 30KB

---

**Document Version:** 1.0
**Last Updated:** 2026-02-08
**Review Applied:** Comprehensive corrections from v4 review
**Owner:** Design Systems Team
**Status:** Active

---

## Mode 4 — Product: Vendor App

Business/service-provider app (like Uber driver app). Follows Foundation 100%, ZERO overrides. Dense variants for rapid decision-making and action.

### Inheritance Note

Vendor App inherits 100% of Foundation design tokens with no color, typography, or spacing overrides. The primary customization is **density**: quick-action buttons compress to 40px height to support fast workflows. All colors use Foundation values:

- Primary buttons: `primary-main` (#FF4D00)
- Surface containers: `bg-surface` (#121212)
- Text: `text-primary` (#EDEDED), `text-body` (#A1A1A1), `text-muted` (#666666)
- Status badges: `status-success` (#00E096), `status-warning` (#FFC043), `status-info` (#2E93FA), `status-error` (#FF2D55)
- All spacing: multiples of 8px per Foundation grid

---

### Components

#### Buttons

**Primary Button:**

- Height: 48px (standard), 40px (quick-action dense variant)
- Width: auto, minimum 120px, maximum 100% container
- Padding: 12px 24px (48px) or 8px 16px (40px)
- Border radius: `radius-sm` (8px)
- Typography: Button (16px SemiBold Plus Jakarta Sans)
- Background: `primary-main` (#FF4D00)
- Text: `text-inverse` (#111111)
- States:
  - Idle: `primary-main` bg
  - Hover: `primary-hover` (#FF6A2B) bg
  - Pressed: `primary-pressed` (#CC3D00) bg, scale 0.98
  - Loading: opacity 0.7, pulse animation (duration-breath)
  - Disabled: `bg-input` (#1A1A1A), `text-disabled` (#333333), no shadow

**Secondary Button:**

- Height: 48px (standard), 40px (quick-action)
- Padding: 12px 24px (48px) or 8px 16px (40px)
- Border radius: `radius-sm` (8px)
- Border: 1px solid `border-strong` (#555555)
- Background: transparent
- Text: `text-primary` (#EDEDED)
- States:
  - Idle: border `border-strong`, no shadow
  - Hover: bg `primary-dim` (rgba(77, 23, 0, 0.15)), border `border-strong`
  - Pressed: scale 0.98, bg `primary-dim`
  - Disabled: border `border-subtle` (#333333), text `text-disabled`

**Ghost Button:**

- Height: 48px (standard), 40px (quick-action)
- Padding: 12px 24px (48px) or 8px 16px (40px)
- Border radius: `radius-sm` (8px)
- Background: transparent
- Text: `text-primary` (#EDEDED)
- States:
  - Idle: transparent, no border
  - Hover: bg `bg-input` (#1A1A1A)
  - Pressed: bg `primary-dim`, scale 0.98
  - Disabled: text `text-disabled`, no bg

**Destructive Button:**

- Height: 48px
- Padding: 12px 24px
- Border radius: `radius-sm` (8px)
- Background: `status-error` (#FF2D55)
- Text: `text-inverse` (#111111)
- States:
  - Idle: `status-error` bg
  - Hover: 10% opacity increase
  - Pressed: scale 0.98
  - Disabled: opacity 0.5, no shadow

**Quick-Action Button (Dense):**

- Height: 40px (standard for vendor density)
- Width: 40px (square) or auto with 8px horizontal padding
- Padding: 0 (square) or 8px 12px
- Border radius: `radius-sm` (8px)
- Typography: Body Small 14px SemiBold
- States follow Primary/Secondary rules above
- Use case: Order acceptance/decline, inline status change, FAB

**Floating Action Button (FAB):**

- Shape: 56px circular (radius-full)
- Icon: 24px Phosphor Bold, color `text-inverse` (#111111)
- Background: `primary-main` (#FF4D00)
- Shadow:
- Position: fixed bottom-right, 24px from edges
- Z-Index: `z-elevated` (100)
- Entrance: scale 0 → 1 on page load with Recoil easing, duration-fast (200ms)
- Scroll behavior: hide (slide down, 200ms Ease Out) when user scrolls down; show (slide up, 200ms Recoil) on scroll up
- Tap: scale 0.9 with Mechanical Snap (100ms)
- Use: primary action (accept new lead, start new order)

---

#### Lead Card (Incoming Bookings)

ASCII Diagram:

```
┌─────────────────────────────────────────┐
│ [40px Avatar] Customer Name (H3)        │
│ Service · Price (Mono Small)            │
│ Distance · Time (Mono Small)            │
├─────────────────────────────────────────┤
│ [Decline/Secondary 40px] [Accept/Primary 40px] │
└─────────────────────────────────────────┘
```

**Structure:**

- Container: bg `bg-surface` (#121212), border 1px `border-subtle` (#333333), radius `radius-md` (12px), padding 16px
- Top section (lead info):
  - Avatar: 40px circle, positioned left, margin-right 12px
  - Name: Heading 3 (20px Medium Outfit), text `text-primary`
  - Service line: Mono Small (12px), text `text-body`, format: "Service Name · $XX.XX"
  - Detail line: Mono Small (12px), text `text-muted`, format: "2.3 km · 12 min"
- Divider: 1px `border-subtle` margin 12px 0
- Button row: flex gap 8px, both buttons 40px height, width equal flex basis
  - Decline: Secondary 40px, text "Decline"
  - Accept: Primary 40px, text "Accept"

**Animation (Entrance):**

- Trigger: new lead arrives
- Motion: slideInFromRight 100% → 0, duration-nav (300ms), Mechanical Snap easing
- Haptic feedback (mobile): vibration heavy (UIImpactFeedbackGenerator.heavy on iOS, haptics amplitude 50% on Android)

**Auto-dismiss:**

- Timer: 60 seconds from appearance
- Visual: depleting progress bar 4px height, positioned at bottom of card, fill color `primary-main` (#FF4D00), remaining height bg `border-subtle`
- On dismiss: fade out + slide down, duration-fast (200ms)
- User action cancels timer (accept/decline or swipe)

**Urgent State (response deadline <5 minutes):**

- Glow effect: `box-shadow: 0 0 12px rgba(255, 77, 0, 0.4)` (primary-glow)
- Border animation: pulsing primary-main glow, scale 1.0 → 1.05 → 1.0, duration-breath (2000ms), infinite
- Visual indicator: small badge "URGENT" Mono Small, `status-error` color, positioned top-right
- Sound: optional notification chime (if app has sound on)

**States:**

- Idle: static position, full opacity
- Accepted: scale 0 + fade out (200ms), followed by queue item slide in
- Declined: slide down + fade out (200ms), queue shifts up
- Expired: auto-dismiss fade + slide (200ms)

---

#### Inventory Card

ASCII Layout:

```
┌─────────────────────────┐
│ [64x64 Image]           │
│ Service Name (H3)       │
│ $XX.XX - $YY.YY (Mono)  │
│ Status [Badge] | [≡]    │
├─────────────────────────┤
│ [Toggle 48x24] [✎ Edit] │
└─────────────────────────┘
```

**Structure:**

- Container: bg `bg-surface`, border 1px `border-subtle`, radius `radius-md`, padding 16px
- Image: 64×64px, radius `radius-sm` (8px), object-fit cover, positioned top-center
- Name: Heading 3 (20px Medium), text `text-primary`, margin-top 12px
- Price range: Mono Base (14px), text `text-body`, format "$XX.XX - $YY.YY", margin-top 4px
- Status badge: positioned inline with price, text `status-success` or `status-warning` depending on availability
- Toggle switch:
  - Dimensions: 48×24px (Foundation no override)
  - Inactive: bg `border-strong` (#555555), toggle circle 20px white left
  - Active: bg `primary-main` (#FF4D00), toggle circle 20px white right
  - Animation: slide toggle circle, duration-instant (100ms), Mechanical Snap
- Edit button: Ghost 40px, icon 20px pencil icon, positioned right of toggle
- Divider: 1px `border-subtle` above action row, margin 12px 0

**Inline Price Editing:**

- Trigger: tap on price range text
- Mode: field becomes input with focus state
- Input styling: border 1px `primary-main`, bg `bg-input`, Mono Base text, cursor active
- Validation: realtime, minimum price > $0, maximum reasonable (e.g., $9999)
- Save: tap outside field or press Enter
- Cancel: press Escape or tap cancel button if shown
- Toast feedback: "Price Updated" success toast, auto-hide 3000ms
- On error: "Invalid Price" error toast with red `status-error` bg, shake animation 200ms

---

#### Earnings/Stat Card

**Layout:**

- Container: bg `bg-surface`, border 1px `border-subtle`, radius `radius-md`, padding 24px
- Primary value: Display L (56px) or Heading 1 (32px) depending on context, text `text-primary`, lining nums (tabular)
- Label: Caption (12px ALL CAPS), text `text-muted`, margin-top 8px
- Trend section (optional): positioned bottom-right
  - Trend arrow icon: 16px Phosphor, color `status-success` or `status-error` (up/down)
  - Percentage: Body Small (14px), text `status-success` or `status-error`, format "+15.3%" or "-8.2%"
  - Time period: Caption (12px), text `text-muted`, format "vs. last 7 days"
- Sparkline (optional): 48px height, positioned bottom, primary-main stroke 2px, area fill `primary-dim`, no grid lines

**Variants:**

- Large number (56px): use Display L, for hero metrics (total earnings, lifetime rides)
- Standard number (32px): use Heading 1, for secondary stats (weekly earnings, cancellations)
- Compact (24px): use Heading 2, for dense dashboard layouts

**States:**

- Loading: skeleton shimmer 200ms, value area fades to `bg-input`
- Error: value shows "—" (em dash), label shows error text red `status-error`
- Updated: number animates scale 1.0 → 1.05 → 1.0, duration-instant (100ms)

---

#### Key-Value Pairs

**Horizontal Layout:**

```
LABEL          Value
CUSTOMER       Jane Doe
EMAIL          jane@example.com
DISTANCE       2.3 km
DURATION       12 minutes
```

**Structure:**

- Row container: flex row, align-items baseline
- Label: Caption (12px ALL CAPS Medium), text `text-muted`, width 120–160px, flex-shrink 0
- Divider: optional light border `border-subtle` between label and value
- Value: Body Base (16px) or Mono Base (14px) depending on type, text `text-primary`, flex-grow 1, text-align left
- Gap: 16px between label and value
- Row gap: 8px between pairs

**Stacked Layout (mobile):**

```
LABEL
Value
```

- Label: Caption, text `text-muted`, margin-bottom 4px
- Value: Body Base or Mono Base, text `text-primary`, margin-bottom 12px between pairs
- Trigger: mobile breakpoint (<600px)

**Data Type Variants:**

- Text (name, email): Body Base, text `text-primary`
- Numbers (distance, count): Mono Base, text `text-primary`, lining nums
- Status: text `status-success`, `status-warning`, etc.
- Date/time: Mono Small, text `text-muted`

---

#### Metric Tiles

**Layout: 2×2 Grid**

```
┌─────────┬─────────┐
│ Tile 1  │ Tile 2  │
├─────────┼─────────┤
│ Tile 3  │ Tile 4  │
└─────────┴─────────┘
```

**Tile Structure:**

- Container: bg `bg-surface`, border 1px `border-subtle`, radius `radius-md`, padding 16px
- Icon: 24px Phosphor Bold, text `text-muted`, positioned top-left
- Value: Heading 2 (24px Medium), text `text-primary`, positioned top-right, lining nums
- Label: Body Small (14px), text `text-muted`, positioned below value
- Trend: optional, positioned bottom-right
  - Arrow + percentage in `status-success` or `status-error`
- Interactions: hover adds border `border-strong`, cursor pointer if tappable

**Responsive:**

- Desktop (1024+): 2×2 grid, tile width auto, gap 16px
- Tablet (600–1023): 2×1 or full-width stacked, gap 16px
- Mobile (<600): 1×4 stacked, full width, gap 12px

**States:**

- Hover: border `border-strong`, subtle bg lightening (opacity +5%)
- Loading: skeleton shimmer, icon and value fade
- Updated: value count-up animation, duration Ease Out 800ms

---

#### Charts

**Line Chart (Earnings Trend):**

- Canvas: full width, height 200–240px
- Stroke: `primary-main` (#FF4D00), stroke-width 2px, line-cap round
- Area fill: `primary-dim` (rgba(77, 23, 0, 0.15)) below line
- Grid: optional light `border-subtle` gridlines, no labels by default
- Axes: Mono Small (12px), text `text-muted`
  - X-axis labels: dates or day names, 4–6 data points max
  - Y-axis labels: currency format ($), right-aligned
- Tooltip (hover): bg `bg-surface`, border 1px `border-strong`, shadow `shadow-md`, padding 12px, Mono Base text
  - Format: "Feb 8 · $342.50"
- Responsive: shrink or scroll horizontally on mobile

**Bar Chart (Orders):**

- Canvas: full width, height 200px
- Bars: `primary-main` (#FF4D00), width proportional to data
- Border radius (top only): `radius-xs` (4px)
- Gap between bars: 8px
- Hover: opacity 0.8, tooltip with value
- X-axis: category labels Mono Small, text `text-muted`
- Y-axis: count labels, right-aligned
- Empty state: "No data for selected period" centered, text `text-muted`

**Horizontal Bar Chart (Ratings):**

- Layout: category on left, bar on right
- Bar color: `primary-main`, filled proportional to rating (0–5 stars)
- Label positioning: value on right of bar, Mono Base
- Categories: "5 stars", "4 stars", etc., Body Small
- Responsive: stack vertically on mobile

**Time Selector Pills:**

- Container: flex row, gap 8px, margin-bottom 16px
- Pill dimensions: height 32px, padding 8px 16px
- Border radius: `radius-full` (9999px)
- States:
  - Inactive: bg `bg-input` (#1A1A1A), border 1px `border-subtle`, text `text-body`
  - Active: bg `primary-main`, border none, text `text-inverse`
- Typography: Body Small (14px SemiBold)
- Options: "Today", "7D", "30D", "90D", "1Y", "Custom"
- Interaction: toggle active state, duration-instant (100ms), reload chart data on change

**Chart Tooltips:**

- Trigger: hover on data point
- Appearance: bg `bg-surface`, border 1px `border-strong`, shadow `shadow-md`, radius `radius-sm`
- Padding: 8px 12px
- Typography: Mono Base (14px), text `text-primary`
- Content: "Date · Value", e.g., "Feb 8 · $342.50"
- Position: follow cursor or fixed to right of data point
- Hide: on mouse out, 200ms fade

---

### Navigation

#### Bottom Navigation Bar (Mobile)

**Specification:**

- Height: 80px (safe area included)
- Width: 100% full viewport width
- Position: fixed bottom, z-index `z-elevated` (100)
- Background: `bg-surface` (#121212)
- Border: 1px top `border-subtle` (#333333)
- Safe area: add 24px padding bottom on notched devices (iPhone)

**Tabs (5 total):**

1. Dashboard (home icon)
2. Orders (checklist icon)
3. Inventory (package icon)
4. Earnings (trending-up icon)
5. Profile (user icon)

**Tab Item Structure:**

- Width: 20% flex basis (5 tabs = 100%)
- Height: 56px (excluding safe area padding)
- Display: flex column, center items, justify-center
- Gap: 4px between icon and label
- Icon: 24px Phosphor Regular, text `text-body`
- Label: Caption (12px Medium), text `text-body`
- Padding: 8px 0 (label area only)

**Tab States:**

- Inactive: icon `text-body`, label `text-body`, no background
- Active: icon `primary-main` (#FF4D00) Bold 2.5px, label `text-primary`, background `primary-dim` (10% opacity) pill shape around icon+label
- Pressed: icon scale 0.92, duration-instant (100ms)

**Badge (Order count):**

- Size: 20px circle
- Position: top-right of Orders tab icon
- Background: `status-error` (#FF2D55)
- Text: Mono Small (12px) white, centered, number value
- Show if pending orders > 0
- Animation: pulse scale 1.0 → 1.15 → 1.0, duration-instant (100ms) on new order arrival

**Transition:**

- Active tab change: cross-fade colors, slide underline (if visible), duration-fast (200ms)

---

#### Sidebar Navigation (Web/Tablet)

**Desktop (1024+px):**

- Width: 260px
- Position: fixed left, height 100vh
- Background: `bg-surface` (#121212)
- Border right: 1px `border-subtle` (#333333)
- Overflow: auto (scrollable if content exceeds viewport)
- Z-index: `z-elevated` (100)

**Tablet (600–1023px):**

- Width: collapsed 64px by default
- On tap, expand to 260px full overlay with z-overlay (800)
- Hamburger toggle top-left of app bar

**Logo:**

- Height: 32px (desktop) or 24px (tablet)
- Positioned: top-left with 16px clearance
- Color: monochrome `text-primary` (#EDEDED)
- Click: navigate to home/dashboard

**Section Labels:**

- Typography: Caption (12px ALL CAPS Medium)
- Color: `text-muted` (#666666)
- Padding: 16px 16px 8px
- Example sections: "NAVIGATION", "REPORTS", "SETTINGS"

**Nav Items:**

- Height: 44px, padding 8px 16px
- Display: flex align-items center, gap 12px
- Icon: 20px Phosphor Regular, text `text-body`
- Label: Body Small (14px), text `text-body`
- Border-left: 3px transparent

**Nav Item States:**

- Inactive: bg transparent, icon `text-body`, label `text-body`
- Hover (desktop): bg `bg-input` (#1A1A1A), icon/label unchanged
- Active: bg `primary-dim` (rgba(77, 23, 0, 0.15)), icon `primary-main` Bold, label `text-primary`, border-left 3px `primary-main`
- Focus ring: 2px `border-strong` outline, radius `radius-xs`

**Sections (Vendor App):**

1. Dashboard (home icon)
2. Orders (checklist)
3. Inventory (package)
4. Services (wrench)
5. Earnings (trending-up)
6. Reviews (star)
7. Settings (gear)

**Collapse Toggle:**

- Position: bottom-left of sidebar
- Icon: chevron-left (32px), text `text-body`
- On collapse: sidebar shrinks 260px → 64px, labels hide, icons center, duration-nav (300ms) Mechanical Snap
- On expand: reverse, duration-nav (300ms)
- Tooltip on collapsed icons: label text, bg `bg-overlay`, Mono Small, positioned right 8px

---

#### Top Bar (Mobile/Desktop)

**Mobile (0–599px):**

- Height: 56px
- Background: `bg-surface` (#121212)
- Border-bottom: 1px `border-subtle` (#333333)
- Position: fixed top, z-index `z-sticky` (500)
- Padding: 8px 16px
- Safe area: add 8px top padding on notched devices

**Desktop (1024+px):**

- Height: 64px
- Padding: 8px 32px

**Layout:**

- Left: back arrow or hamburger menu icon (24px)
- Center: title text (Heading 3 20px)
- Right: notification bell + help icon (24px each)

**Back Button:**

- Appears on child pages (orders, inventory detail, etc.)
- Icon: arrow-left 24px Phosphor
- Tap: navigate back in stack
- Color: `text-body`, hover `text-primary`

**Hamburger Menu (mobile only):**

- Icon: list 24px Phosphor
- Tap: slide in side drawer with nav items
- Z-index: `z-overlay` (800)

**Title:**

- Typography: Heading 3 (20px Medium Outfit)
- Color: `text-primary` (#EDEDED)
- Content: current page name or section
- Example: "Orders", "Inventory", "My Earnings"

**Notification Bell:**

- Icon: bell 24px Phosphor, text `text-body`
- Badge: if unread notifications, show count badge (red dot or number)
- Tap: open notifications drawer from right
- Color: active `primary-main`

**Help Icon:**

- Icon: question-circle 24px Phosphor, text `text-body`
- Tap: show contextual help or open support chat
- Optional: only show if relevant to current page

---

### Order Management

#### Order Queue

**Layout: Vertical List**

```
┌──────────────────────────────────┐
│ ORDER-001234 · 2 min ago         │
│ Jane Doe · Service Name          │
│ $45.00 [Accept] [Decline]        │
├──────────────────────────────────┤
│ ORDER-001235 · 5 min ago         │
│ John Smith · Service Name        │
│ $60.00 [Accept] [Decline]        │
└──────────────────────────────────┘
```

**Card Structure:**

- Container: bg `bg-surface`, border 1px `border-subtle`, radius `radius-md`, padding 16px, margin-bottom 12px
- Top row (Order info):
  - Order ID: Mono Small (12px), text `text-muted`, format "ORDER-001234"
  - Time: Mono Small (12px), text `text-muted`, relative format "2 min ago"
  - Status badge: positioned right, height 20px, padding 4px 8px, radius `radius-full`
    - New: bg `status-info` (#2E93FA), text white
    - Accepted: bg `status-warning` (#FFC043), text `text-inverse`
    - In Progress: bg `primary-main` (#FF4D00), text white
    - Completed: bg `status-success` (#00E096), text `text-inverse`
    - Cancelled: bg `status-error` (#FF2D55), text white
- Middle row (Customer/service):
  - Customer name: Body Base (16px), text `text-primary`
  - Service: Body Small (14px), text `text-body`
  - Format: stacked, customer above service
- Bottom row (Price + actions):
  - Price: Heading 3 (20px SemiBold), text `text-primary`, positioned left
  - Action buttons: two Quick-Action buttons 40px, positioned right
    - Decline: Secondary 40px, icon + text or text only "Decline"
    - Accept: Primary 40px, text "Accept"
  - Gap between buttons: 8px

**Gesture Interactions (Mobile):**

- Swipe right: triggers accept action (slide left, fade to green success state)
- Swipe left: triggers decline action (slide right, fade to red/error state)
- Swipe animation: duration-fast (200ms), Mechanical Snap
- Visual feedback: background tint (green/red) during swipe preview

**Pull-to-Refresh:**

- Trigger: drag down from top of list, min 80px
- Visual: refresh icon rotates, changes to `primary-main` when threshold reached
- Release: snap to top, show loading state ("Syncing Orders...")
- Completion: 1s pause, list updates with new orders
- Duration: duration-nav (300ms) snap back

**Empty State:**

- Text: "No Pending Orders"
- Icon: 64px inbox icon, text `text-muted`
- Subtext: "New orders appear here", Caption, text `text-muted`
- Action: optional "Refresh" button Ghost, positioned below
- Background: full list height centered

**Loading State:**

- Skeleton cards: 3–5 shimmer rows, height 80px each
- Skeleton pulse: opacity 0.5 → 1.0, duration-breath (2000ms)

---

#### Order Detail

**Header:**

```
[< Back] Order #ORDER-001234 [Share]
Status: [ACCEPTED Badge] · 12:34 PM
```

- Back button: 24px arrow-left, positioned top-left
- Order ID: Heading 2 (24px), text `text-primary`, positioned center
- Share/more button: 24px share or more-vert icon, positioned top-right
- Status badge: below order ID, height 24px, radius `radius-full`
- Timestamp: Mono Small, text `text-muted`

**Customer Card Section:**

- Container: bg `primary-dim` (rgba(77, 23, 0, 0.15)), border-left 3px `primary-main`, padding 16px, radius `radius-sm`, margin 16px 0
- Avatar: 48px circle, positioned top-left
- Name: Body Base (16px), text `text-primary`
- Phone: Body Small (14px), text `text-primary`, underlined, tap-to-call functionality
- Chat button: Ghost 40px, icon message-circle, text "Chat", positioned right
- Rating: optional, star icon + count positioned below name

**Service Details (Key-Value Pairs):**

- Format: stacked layout (mobile) or two-column (desktop)
- Examples:
  - SERVICE: House Cleaning
  - DURATION: 2 hours
  - LOCATION: 123 Main St, Apt 4B
  - NOTES: "Please bring your own supplies"
- Label: Caption ALL CAPS text `text-muted`
- Value: Body Base text `text-primary`
- Gap: 12px between pairs

**Inline Map:**

- Height: 200px, width 100%
- Border radius: `radius-sm` (8px)
- Marker: customer location pin, color `status-info` (#2E93FA)
- Marker: vendor current location (if applicable), color `primary-main`
- No navigation controls on small map, tap to expand full map view
- Background: light gray (#1A1A1A in dark mode)

**Price Breakdown Table:**

- Container: bg `bg-input` (#1A1A1A), border 1px `border-subtle`, radius `radius-sm`, padding 16px
- Table: no visible grid, rows only
- Row format: [Service/Item] [Price aligned right]
  - Service name: Body Small (14px), text `text-primary`
  - Price: Mono Base (14px), text `text-primary`, tabular nums
- Divider rows: 1px `border-subtle` between items
- Subtotal row: Body Base (16px SemiBold), text `text-primary`
- Tax row (if applicable): Body Small, text `text-body`
- **Total row: bg `primary-dim`, padding 12px, border-radius `radius-xs`**
  - Label: Body Base SemiBold, text `text-primary`
  - Amount: Heading 2 (24px), text `primary-main`

**Action Bar (Sticky Bottom):**

- Position: fixed bottom, safe area padding
- Height: 60px (44px button + 8px gap + safe area)
- Background: `bg-surface`, border-top 1px `border-subtle`, padding 8px 16px
- Layout: flex, gap 8px, justify-space-between
- Button sizing:
  - One button: full width minus padding
  - Two buttons: equal width, gap 8px
  - Three buttons: equal width, gap 8px

**Action States:**

- Pending (new lead): [Decline Secondary 48px] [Accept Primary 48px]
- Accepted (vendor confirmed): [Start Service Primary 48px]
- In Progress: [Complete Primary 48px]
- Completed: [View Receipt Primary 48px]
- Cancelled: [Edit Primary] [Close Ghost] (if editable)

**Timeline (Vertical):**

- Container: padding 16px, border-left 2px `border-subtle`
- Dot: 8px circle, positioned on left border
  - Create event: dot `status-success` (#00E096)
  - Update event: dot `status-info` (#2E93FA)
  - Delete/cancel event: dot `status-error` (#FF2D55)
  - System event: dot `text-muted`
- Event item: margin-bottom 16px, padding-left 16px
  - Actor: Body Small (14px), text `text-primary`, bold
  - Action: Body Small (14px), text `text-body`
  - Timestamp: Mono Small, text `text-muted`
  - Format: "Jane Doe accepted order · 2 min ago"

**Status Controls (Optimistic Updates):**

- On action tap: immediately update UI (optimistic)
- Show toast "Syncing..." (bottom center, `bg-input` bg, no auto-hide)
- On success: toast disappears, UI confirmed
- On error: toast changes to "Update Failed — Retry?" Ghost button + close
- If user taps Retry: resend request, retry animation (pulse)

---

### Inventory Management

#### Grid/List Toggle

**Toggle Control:**

- Position: top-right of section, next to search
- Icons: grid (4 squares) and list (horizontal lines), 24px Phosphor
- State: active icon `primary-main`, inactive icon `text-body`
- Toggle: duration-instant (100ms), scale 0.9 on press

**Grid View:**

- Columns: 2 (mobile 0–599px), 3 (tablet 600–1023px), 4 (desktop 1024+px)
- Gap: 16px between columns and rows
- Card height: auto, aspect-ratio 1:1 (square)
- Card content: image 100% height, name below, price below name, actions bottom

**List View:**

- Rows: full width, height 56px per item (Foundation, no override)
- Row structure:
  - Col 1 (image): 56px square image, radius `radius-xs`, margin-right 12px
  - Col 2 (info): flex grow, name (Body Base) + price (Mono Base) stacked
  - Col 3 (status): badge 20px, positioned center
  - Col 4 (actions): 32px icon button (more or edit), positioned right
- Hover (desktop): bg `primary-dim` (10%), border-left 2px `primary-main`
- Row border: bottom 1px `border-subtle`, except last row

---

#### Sort & Filter

**Sort Menu:**

- Trigger: sort icon (24px) or "Sort" label, positioned in toolbar
- Dropdown menu: bg `bg-surface`, border 1px `border-strong`, shadow `shadow-md`, radius `radius-md`
- Options:
  - Name (A–Z)
  - Price (Low–High)
  - Price (High–Low)
  - Date Added (Newest)
  - Date Added (Oldest)
  - Status (Active first)
- Radio selection: active option marked with filled circle
- Close: tap option or outside menu
- Duration: pop-in duration-fast (200ms)

**Filter Panel:**

- Trigger: filter icon or "Filters" label
- Layout: slide-in sheet from bottom (mobile) or dropdown (desktop)
- Sections:
  1. **Category:** multi-select checkboxes
     - Cleaning, Maintenance, Consultation, etc.
     - Checkbox 20px + label Body Small
  2. **Status:** toggle buttons or checkboxes
     - Active, Inactive, Archived
  3. **Price Range:** dual slider or min/max inputs
     - Range slider: track `border-subtle`, thumb 16px `primary-main`, range fill `primary-main`
     - Inputs: two Body Base inputs, $ prefix, validation real-time
  4. **Apply Filters:** Primary button 48px, positioned bottom
  5. **Clear All:** Ghost button, positioned left of Apply

**Search Input:**

- Height: 48px
- Width: full width or 60% on desktop
- Padding: 12px 16px
- Border: 1px `border-subtle`, focus `primary-main`
- Icon: magnifying-glass 20px left, text `text-muted`
- Placeholder: "Search services...", text `text-muted`
- Clear button: X icon 20px right (appears when text entered)
- Background: `bg-input` (#1A1A1A)

**Instant Filter:**

- As user types, filter list in real-time
- No delay, immediate results
- Show "1 result found" or "5 results" below search
- Empty: "No services match your search"
- Clear search: tap X or backspace all text

---

#### Add/Edit Form

**Modal Overlay:**

- Full screen (mobile) or centered dialog (desktop, 500px wide)
- Background: `bg-overlay` (rgba(5, 5, 5, 0.85))
- Dialog: bg `bg-surface`, border 1px `border-subtle`, radius `radius-lg` (24px), padding 24px
- Modal entrance: fade in + slide up (mobile) or scale in + fade (desktop), duration-fast (200ms)

**Form Layout:**

- Title: Heading 2 (24px), text `text-primary`, margin-bottom 24px
- Form groups: stacked vertical, margin-bottom 24px
- Labels: Caption (12px ALL CAPS), text `text-muted`, margin-bottom 8px
- Helper text (optional): Mono Small, text `text-muted`, below input
- Last form group: margin-bottom 32px (space for button)

**Form Fields:**

1. **Service Name (text input):**
   - Height: 48px
   - Placeholder: "e.g., House Cleaning"
   - Background: `bg-input` (#1A1A1A)
   - Border: 1px `border-subtle`, focus `primary-main` 2px
   - Text: Body Base (16px), text `text-primary`

2. **Category (dropdown):**
   - Height: 48px
   - Trigger: dropdown open on tap
   - Menu: bg `bg-surface`, options as Button rows
   - Selected: text `primary-main`, icon checkmark
   - Scroll if >8 options

3. **Description (textarea):**
   - Height: 120px (auto-expand up to 200px)
   - Padding: 12px 16px
   - Border: 1px `border-subtle`, focus `primary-main`
   - Resize: none (fixed height or auto-expand only)
   - Character count: Mono Small, text `text-muted`, bottom-right, format "120/500 characters"

4. **Price (currency input):**
   - Height: 48px
   - Prefix: $ symbol positioned left inside input
   - Text align: right (numbers)
   - Validation: only numbers and one decimal point
   - Placeholder: "0.00"
   - On blur: format to 2 decimal places

5. **Duration (time input):**
   - Height: 48px
   - Layout: two-column (number + unit dropdown)
   - Number input: width 60%, Body Base, right-aligned
   - Unit dropdown: width 40%, options "min", "hours", "days"
   - Validation: integer > 0

6. **Images Upload Zone:**
   - Container: border 2px dashed `border-subtle`, radius `radius-md`, padding 24px
   - Center: upload icon 32px + text "Drag images or tap to upload"
   - Text: Body Small, text `text-muted`
   - Limit: max 5 images, show count "3/5 images"
   - Image preview: grid 2-col, 80px square, radius `radius-sm`, delete X button top-right
   - File validation: JPG/PNG only, max 5MB per image
   - Accepted: show green check `status-success` on thumbnail corner

7. **Availability Toggle:**
   - Switch 48×24px, positioned left of label
   - Label: "Available for Booking", positioned right of switch
   - ON: `primary-main` bg
   - OFF: `border-strong` bg

**Form Actions (Bottom Sticky Bar):**

- Position: fixed bottom, bg `bg-surface`, border-top 1px `border-subtle`, padding 16px
- Layout: flex gap 8px, justify-space-between
- Buttons:
  - Save: Primary 48px, text "Save Service"
  - Cancel: Ghost 48px, text "Cancel"

**Validation:**

- Real-time per field (no form-wide validation at save only)
- Invalid field: border `status-error` (#FF2D55)
- Error message: Caption, text `status-error`, below field
- Refusal Shake: field container shakes 200ms on invalid save attempt
  - `transform: translateX(-4px) → 4px → -4px → 0`, duration 200ms, Mechanical Snap easing

**Save Feedback:**

- On submit: button shows loading spinner (icon spin 100ms), text "Saving..."
- Success: toast "Service Saved" green `status-success`, auto-hide 3s, modal closes
- Error: toast "Save Failed — Try Again" red `status-error`, button re-enabled

---

#### Bulk Actions

**Selection Mode:**

- Trigger: long-press on item (mobile) or checkbox column (desktop)
- All items show checkbox 20px left, positioned before image
- Checkboxes: border 1px `border-strong`, checked bg `primary-main` with checkmark
- Checkbox interactions: tap to select/deselect, shift+click desktop for range

**Bulk Action Bar (appears when ≥1 item selected):**

- Position: sticky below toolbar (fixed top-right below app bar on mobile)
- Height: 56px
- Background: `primary-dim` (rgba(77, 23, 0, 0.15)), border-bottom 1px `primary-main`
- Left section: "X items selected", Body Base, text `text-primary`
- Right section: action buttons
  - Activate: Primary 40px, text "Activate"
  - Deactivate: Secondary 40px, text "Deactivate"
  - Delete: Destructive 40px, text "Delete"
- Close button: X icon 24px right, tap to deselect all

**Bulk Delete Confirmation:**

- Modal: "Delete X items?"
- Subtext: "This action cannot be undone.", red `status-error`
- Checkbox: "I understand these services will be deleted"
- Buttons: [Cancel Ghost] [Delete Destructive]
- On confirm: items fade out + slide up, duration-fast (200ms)

---

### Dashboard Patterns

#### Home Dashboard

**Layout:**

- Header section: greeting + date
- Metric tiles: 4-column grid
- Pending leads: horizontal scroll
- Recent orders: list (5 items)
- Earnings chart: 7-day line chart
- Quick action grid: 4-col (shortcuts to common tasks)

**Greeting Section:**

```
Good Morning, James!
Tuesday, February 8
```

- Greeting: Heading 2 (24px), text `text-primary`
- Date: Body Small (14px), text `text-muted`, format "Day, Month Date"
- Margin-bottom: 24px

**Metric Tiles (4-column, see section 5.8):**

- Total Earnings (today): Display L ($###)
- Rides Completed: Heading 1 (###)
- Rating: Heading 1 (4.8★)
- Response Time: Heading 1 (98%)

**Pending Leads Section:**

- Title: Heading 3 (20px), margin-bottom 12px
- Container: horizontal scroll, snap-align center
- Cards: 280px width (mobile), 320px (tablet), lead cards (see section 5.3)
- Padding: 0 16px (mobile safe area)
- Shows: 1–3 visible cards per viewport

**Recent Orders List:**

- Title: Heading 3 (20px), margin-bottom 12px
- Items: 5 most recent orders
- Order card: 56px height, row layout (see Order Queue)
- "View All Orders" Ghost link bottom-right

**Earnings Chart:**

- Title: Heading 3 (20px), margin-bottom 12px
- Chart: line chart 7 days (see section 5.10)
- Time selector pills below: Today/7D/30D/90D

**Quick Action Grid:**

- Title: "Quick Actions", Heading 3
- Grid: 4-col (mobile 2-col)
- Actions: each 120px square card
  - Icon: 32px centered
  - Label: Caption, centered below icon
  - Background: `bg-input`, border 1px `border-subtle`, radius `radius-sm`
  - Tap: navigate to section
  - Examples: "New Order", "My Inventory", "View Earnings", "Get Help"

---

#### Earnings Dashboard

**Hero Section:**

```
Total Earnings (Today)
$847.50
+12.5% vs. yesterday
```

- Amount: Display L (56px), text `primary-main`, lining nums
- Label: Caption ALL CAPS, text `text-muted`
- Trend: Body Small + arrow + % in `status-success` or `status-error`
- Padding: 24px, bg `primary-dim`, border-bottom 1px `primary-main`

**Time Period Pills:**

- Today / 7D / 30D / 90D / 1Y / Custom
- Selected: bg `primary-main`, text white
- Layout: flex row, gap 8px, horizontal scroll on mobile

**Line Chart (7-day earnings):**

- Height: 240px, full width
- Title: "Earnings Trend", Heading 3
- Stroke: `primary-main` 2px, area `primary-dim` fill
- Time selector: below chart (Today/7D/30D/90D)

**Breakdown Section:**

- Title: "Breakdown", Heading 3
- Donut chart: 200×200px center, labels outside
  - Segments: Service A ($###), Service B ($###), etc.
  - Center label: total amount or percentage
  - Colors: `primary-main`, `status-info`, `status-warning`, `status-success`
- Legend below: dot + label Body Small

**Transaction List:**

- Title: "Transactions", Heading 3
- Row items: 56px, layout [time/ID] [service] [amount] [status]
  - Time: Mono Small left, text `text-muted`
  - Service: Body Small center, text `text-primary`
  - Amount: Mono Base right, text `text-primary`, tabular nums
  - Status: badge mini (success/pending/error), positioned far right
- Scroll: vertical, show last 10 transactions
- "View All" link bottom

**Withdraw Section:**

- Card: bg `primary-dim`, border 1px `primary-main`, padding 16px, radius `radius-md`
- Title: Heading 3, text `text-primary`
- Available: Mono Base amount, text `text-primary`, format "$###.##"
- Button: Primary 48px, text "Withdraw Funds"
- Tap: open withdraw modal (bank account selection, amount input, confirm)

---

#### Performance Dashboard

**Rating Card:**

- Display L (56px) star rating: "4.8", text `primary-main`
- Total reviews: Body Small, text `text-muted`, format "from 1,247 reviews"
- Star icons (5×): 24px, filled primary-main (4 full + 0.8 partial)
- Breakdown below: 5★ (1200), 4★ (35), 3★ (10), 2★ (2), 1★ (0)
  - Format: horizontal bar per rating, caption label, count Mono Small

**Response Time Metric:**

- Display: Heading 1 (32px), text `text-primary`, format "4 min 32 sec"
- Label: Caption ALL CAPS, text `text-muted`
- Subtext: "Average response to new leads", Body Small, text `text-muted`
- Trend: arrow + time delta Body Small

**Completion Rate Metric:**

- Display: Heading 1 (32px), text `text-primary`, format "98.2%"
- Progress ring (semi-circle): 120px diameter
  - Track: `border-subtle`, stroke-width 8px
  - Fill: `primary-main`, stroke-width 8px, 98.2% arc
  - Center: percentage text
- Label: Caption ALL CAPS, text `text-muted`

**Recent Reviews List:**

- Title: Heading 3, "Recent Reviews"
- Items: last 5–10 reviews
- Review card: bg `bg-input`, padding 12px, radius `radius-sm`
  - Header: 5-star rating (24px icons) + date Mono Small
  - Body: review text Body Small, max 2 lines (truncate with "...")
  - Footer: reviewer name Body Small, text `text-body`
- Tap to expand: full review in sheet or modal
- Empty: "No reviews yet" centered, text `text-muted`

---

### Notifications

#### Push Notification Patterns

**New Lead Push:**

- Title: "New Lead!", status sound + vibration heavy
- Body: "Jane Doe · House Cleaning · 2.3 km · 12 min"
- Action buttons: [Accept] [Decline]
- Sound: system notification chime (high tone, 500ms)
- Vibration (iOS): UIImpactFeedbackGenerator.heavy (intensity 1.0)
- Vibration (Android): haptic amplitude 100%, duration 50ms
- Delivery: APNs (iOS), FCM (Android)

**Order Update Push:**

- Title: "Order Update"
- Body: "Order #001234 · [Status]"
- Action: tap to open order detail
- Sound: softer chime (system notification tone)
- Vibration: medium (iOS) or 75% amplitude (Android)

**Review Received Push:**

- Title: "New Review!"
- Body: "Customer left a 5★ review"
- Action: tap to view review
- No vibration (informational)

**Payout Processed Push:**

- Title: "Payment Processed"
- Body: "Your withdrawal of $###.## is on the way"
- No vibration

---

#### In-App Notifications

**Notification Drawer (mobile):**

- Trigger: tap bell icon in top bar
- Slide-in: from right, 100vw width, duration-nav (300ms)
- Position: fixed right, z-index `z-overlay` (800), height 100vh
- Header: "Notifications", Heading 3, close X button top-right
- Content: scrollable list, grouped by date
  - Date labels: "Today", "Yesterday", "Feb 7"
  - Unread items: bg `primary-dim` (10% opacity), fade on read

**Notification Item:**

- Height: auto, min 56px, padding 12px 16px
- Layout: icon (left) + content (grow) + close (right)
- Icon: 24px Phosphor, color status-based
  - Lead: `status-info`
  - Review: `primary-main`
  - Payout: `status-success`
- Content: title (Body Base) + timestamp (Mono Small text-muted)
- Close button: X icon 20px, tap to dismiss
- Tap item: navigate to related page (orders, reviews, etc.)
- Unread dot: 4px dot left of icon

**Notification Desktop (1024+px):**

- Drawer width: 400px
- Position: fixed right edge
- Header: "Notifications" + Bell icon
- Layout: same as mobile
- Close: click background or X button

**Header Badge (Bell Icon):**

- Size: 20px circle, positioned top-right of bell
- Background: `status-error` (#FF2D55)
- Text: Mono Small white, unread count
- Hide: when count is 0

**Mark as Read:**

- Tap item: automatically marks read
- Mark all read: button at bottom of drawer, text "Mark All as Read"
- Animation: fade background `primary-dim`

**Clear All:**

- Button: "Clear All", Ghost, positioned bottom drawer
- Tap: confirmation modal "Delete all notifications?"
- On confirm: all items fade out + slide down, duration-fast (200ms)

---

### Motion & Animation

#### Lead Arrival Animation

**Trigger:** New lead push received, app foregrounded

**Entrance (slide from right):**

- From: translateX(100%) off-screen right
- To: translateX(0) on-screen
- Duration: duration-nav (300ms)
- Easing: Mechanical Snap `cubic-bezier(0.2, 0, 0.38, 0.9)`
- Origin: right edge of screen
- Optional glow border: shadow pulse 0 0 12px rgba(255, 77, 0, 0.4), scale 1.0 → 1.05, infinite

**Haptic feedback on entrance:**

- iOS: UIImpactFeedbackGenerator.heavy (intensity 1.0)
- Android: haptics amplitude 100%, duration 50ms

---

#### Accept/Decline Animations

**Accept Action:**

- Card animates: scale 1.0 → 0.8 + fade out, duration-fast (200ms), Ease Out
- Followed by: new lead card slides in from right
- No delay between exit and entrance

**Decline Action:**

- Card animates: translateY(0) → 100px + fade out, duration-fast (200ms), Ease Out
- Removed from queue, list reflow
- Remaining cards translateY shift upward, duration-fast (200ms)

---

#### Status Change Animation

**Trigger:** Order status updates (pending → accepted → in-progress → completed)

**Badge color cross-fade:**

- Old color → new color, opacity transition, duration-instant (100ms)
- Followed by pulse: scale 1.0 → 1.1 → 1.0, duration-instant (100ms), Mechanical Snap

---

#### Stat Counter Animation

**Trigger:** Earnings metric updates (e.g., $342.50 → $387.30)

**Count-up animation:**

- From: 342.50
- To: 387.30
- Duration: Ease Out 800ms
- Easing: `cubic-bezier(0, 0, 0.2, 1)`
- Format: lining numbers (tabular)
- Tick: update display every 50ms

---

#### Earnings Morph Animation

**Trigger:** Time period change (Today → 7D → 30D)

**Old value exit:**

- Scale: 1.0 → 0.8
- Opacity: 1.0 → 0
- Duration: duration-fast (200ms)

**New value entrance:**

- Scale: 1.2 → 1.0
- Opacity: 0 → 1.0
- Duration: duration-fast (200ms)
- Easing: Recoil `cubic-bezier(0.175, 0.885, 0.32, 1.275)`
- Stagger: 100ms between exit and entrance start

---

#### Order Queue Reorder Animation

**Trigger:** Order accepted/declined, queue items shift

**Affected cards:**

- translateY(current) → translateY(new), duration-fast (200ms), Mechanical Snap
- No opacity change (cards remain visible during reflow)

---

#### FAB Scroll Animation

**Hide on scroll down:**

- Trigger: scroll down velocity > 50px/s
- Motion: translateY(0) → translateY(120px) (off-screen bottom)
- Duration: duration-fast (200ms)
- Easing: Mechanical Snap

**Show on scroll up:**

- Trigger: scroll up or reach top
- Motion: translateY(120px) → translateY(0)
- Duration: duration-fast (200ms)
- Easing: Recoil

---

### Platform Notes

#### iOS Implementation

**Framework:** SwiftUI with NavigationStack

**Navigation:**

- NavigationStack(path:) for deep linking
- NavigationView for back button auto-management
- Sheet modifier for modals, full-screen cover for overlays

**Haptics:**

- UIImpactFeedbackGenerator (heavy, medium, light) for interactions
  - New lead: `.heavy` (intensity 1.0)
  - Button press: `.light` (intensity 0.5)
  - State changes: `.medium` (intensity 0.7)
- HapticManager singleton for consistent haptic pattern dispatch

**Background Fetch:**

- UIApplication.shared.setMinimumBackgroundFetchInterval(30) for polling new leads
- Process in AppDelegate.application(_:performFetchWithCompletionHandler:)
- Limit network calls to 30s window

**Location Services:**

- CLLocationManager for vendor location tracking
- Update interval: 30s during active order, 5min idle
- Permissions: request "Always" for background location (when in use)
- Display: blue "Location Services Active" indicator in status bar

**Push Notifications:**

- APNs for new leads, order updates
- Register with application.registerUserNotificationSettings()
- Delegate: UNUserNotificationCenter.current().delegate = self
- Handle foreground notifications with UNNotificationPresentationOptions

**Performance:**

- Lazy loading for order list (VirtualizedList equivalent)
- Debounce network calls on rapid order acceptance
- Cache lead data locally with Core Data
- Memory warning: clear non-essential caches

---

#### Android Implementation

**Framework:** Jetpack Compose with Navigation Compose

**Navigation:**

- NavController with composable() destinations
- Navigation backstack auto-managed
- Deep link support via URI handling

**Haptics:**

- HapticFeedback.performHapticFeedback() for feedback
  - New lead: VibrationEffect.DEFAULT (amplitude 100%, duration 50ms)
  - Button: amplitude 60%, duration 30ms
  - State change: amplitude 75%, duration 40ms
- Vibration permission: <uses-permission android:name="android.permission.VIBRATE" />

**Background Service:**

- ForegroundService for active order tracking
- Notification requirement: display "Order in Progress" persistent notification
- Update interval: 30s during active order
- Cleanup: stopForeground(true) and stopService() when order completes

**Location Services:**

- FusedLocationProviderClient for vendor tracking
- LocationRequest.Builder().setInterval(30000).build() for active orders
- Priority: PRIORITY_HIGH_ACCURACY
- Permissions: REQUEST_PERMISSION for ACCESS_FINE_LOCATION (runtime)

**Push Notifications:**

- Firebase Cloud Messaging (FCM) for new leads, order updates
- Service: extends FirebaseMessagingService
- Override: onMessageReceived(RemoteMessage) for foreground handling
- Notification Channel: createNotificationChannel() with importance HIGH

**Performance:**

- LazyColumn for order queue (virtual scrolling)
- Coroutines debounce for rapid accept/decline
- Room database for local lead/order caching
- Configuration: disable heavy animations on low-end devices

---

#### Web Implementation

**Framework:** React + Tailwind CSS v4 + Framer Motion

**Libraries:**

- react-router for navigation (createBrowserRouter)
- Framer Motion for animations (motion.div, AnimatePresence)
- zustand for state management (lead queue, orders, earnings)
- axios for HTTP requests with retry logic

**Real-time Communication:**

- WebSocket (ws://) for live lead delivery
- Socket.IO alternative if fallback needed
- Auto-reconnect with exponential backoff (1s → 2s → 4s max)
- Message queue for offline/dropped connections

**Service Worker:**

- Offline-first strategy with workbox
- Cache lead queue and order history locally
- Sync on reconnect using Background Sync API
- Notification: show cached leads if offline

**Performance:**

- Code splitting: lazy load inventory, earnings, settings pages
- Virtual scroll library (react-window) for order queue >100 items
- Image optimization: lazy-load avatars, compress service images
- Debounce search input to 300ms

**Accessibility:**

- Semantic HTML (nav, main, section, article)
- aria-label on icons, aria-live for dynamic updates
- Keyboard nav: Tab order follows visual flow, Escape closes overlays
- Focus visible: 2px `border-strong` outline

---

**End of Mode 4 Section**

---

## Mode 5 — Product: Admin Dashboard

Internal admin panel for service oversight, vendor management, dispute resolution, and platform analytics. Inherits Foundation tokens with one targeted density adjustment: toolbar buttons compress to 40px, table rows to 44px for information-dense layouts. Page-level CTAs remain 48px for prominence.

### Inheritance Note

Admin Dashboard inherits 100% of Foundation design tokens. **Single density adjustment applies:**

| Component | Foundation | Admin Dense | Application |
|-----------|-----------|-----------|-----------|
| Page CTA button | 48px | 48px | Modal footers, page headers, primary actions |
| Toolbar button | 48px | 40px | Table toolbars, filter bars, quick actions |
| Icon-only button | 40px | 32px | Row action icons, toolbar controls |
| Table row | 56px | 44px | Data tables (user-selectable toggle per table) |
| Form input | 48px | 40px | Filter bars, inline editing, search |
| Badge | 24px | 20px | Table status badges, label pills |
| Body typography | 16px | 14px | Table cell text (Body Small in dense mode) |

All colors, spacing multiples, typography families remain Foundation standard. Density toggle per data table allows operators to switch between comfortable (56px rows) and dense (44px rows) viewing modes.

---

### Dense Mode Table (Reference)

Full specification for density toggle:

| Component | Foundation | Admin Dense | Context | CSS |
|-----------|-----------|-------------|---------|-----|
| Table cell padding | 12px 16px | 8px 12px | Height reduction via padding | `padding: 8px 12px` |
| Icon size | 24px | 20px | Row action icons | `width: 20px; height: 20px` |
| Font size | 16px (Body Base) | 14px (Body Small) | Table cell text | `font-size: 14px; font-family: Plus Jakarta Sans` |
| Badge height | 24px | 20px | Status badges | `height: 20px; padding: 2px 8px` |
| Border spacing | 1px | 1px | Dividers remain | `border-bottom: 1px solid --border-subtle` |

---

### Core Components

#### Data Table (Critical Component)

**Full Specification**

**Container:**

- Background: `bg-surface` (#121212)
- Border: 1px `border-subtle` (#333333)
- Border-radius: `radius-md` (12px)
- Overflow: hidden (rounded corners on all sides)
- Width: 100%
- Max-width: none (stretch to container)

**Header Row:**

- Position: sticky top, z-index `z-sticky` (500)
- Height: 44px (no density change for header)
- Background: `bg-input` (#1A1A1A)
- Padding: 8px 16px
- Border-bottom: 1px `border-subtle` (#333333)
- Display: flex, align-items center

**Header Cells (columns):**

- Typing: Caption (12px ALL CAPS Medium), text `text-muted` (#666666)
- Sort indicator: 16px arrow icon (chevron-up/down), positioned right of label, only visible if sortable column
- Sort interaction: click label to toggle asc/desc/clear, duration-instant (100ms)
- Resize handles: visible on right edge of draggable columns, cursor col-resize
- Padding: 0 8px, center-aligned vertically

**Data Rows:**

- Height: 56px (comfortable, default) or 44px (dense, togglable)
- Background: `bg-surface` (#121212)
- Border-bottom: 1px `border-subtle` (#333333), except last row
- Padding: 12px 16px (56px) or 8px 12px (44px)
- Display: flex, align-items center, gap 8px

**Row Cells (data columns):**

1. **Checkbox Column:**
   - Size: 20px × 20px
   - Border: 1px `border-strong` (#555555)
   - Unchecked: transparent bg
   - Checked: bg `primary-main` (#FF4D00), white checkmark icon 14px
   - Indeterminate (partial selection): bg `primary-dim`, white dash icon
   - Cursor: pointer

2. **Text Column:**
   - Typography: Body Small (14px) in dense mode, Body Base (16px) in comfortable
   - Color: `text-primary` (#EDEDED)
   - Overflow: text-overflow ellipsis, max-width applied per column
   - Tooltip on hover: full text in bg-surface popover
   - Example: customer name, email, order ID

3. **Number Column:**
   - Typography: Mono Base (14px), right-aligned
   - Color: `text-primary` (#EDEDED)
   - Lining numbers (tabular font variant for alignment)
   - Example: amounts, counts, percentages

4. **Status Badge Column:**
   - Height: 20px (dense) or 24px (comfortable)
   - Padding: 2px 8px (dense) or 4px 8px (comfortable)
   - Border-radius: `radius-full` (9999px)
   - Typography: Mono Small (12px)
   - Colors:
     - Approved: bg `status-success` (#00E096), text `text-inverse` (#111111)
     - Pending: bg `status-warning` (#FFC043), text `text-inverse`
     - Suspended: bg `status-error` (#FF2D55), text white
     - Active: bg `status-info` (#2E93FA), text white
   - Example: "Approved", "Pending Review", "Suspended"

5. **Date Column:**
   - Typography: Mono Small (12px), text `text-muted` (#666666)
   - Format: "Feb 8, 2026" or relative "2 days ago"
   - Tooltip: hover shows full timestamp "Feb 8, 2026 14:32:15"

6. **Avatar + Name Column:**
   - Avatar: 32px circle, positioned left, margin-right 8px
   - Name: Body Base (16px), text `text-primary`, positioned right of avatar
   - Layout: flex align-items center

7. **Action Icons Column:**
   - Icon buttons: 32px (dense) or 40px (comfortable)
   - Icons: 20px Phosphor (dense) or 24px (comfortable)
   - Background: transparent, hover `primary-dim`
   - Icons: edit, delete, more-vert (icon menu)
   - Gap between action icons: 4px
   - Positioned right-aligned

**Row States:**

- Idle: standard display
- Hover (desktop): bg `primary-dim` (rgba(77, 23, 0, 0.15)), 5% opacity
- Selected: bg `primary-dim` (12% opacity), border-left 3px `primary-main`, stays highlighted
- Focus: row outline 2px `border-strong`, radius `radius-xs`

**Optional Striping:**

- Alternate row backgrounds: odd rows `bg-surface`, even rows `bg-input` (10% lighter)
- Enable/disable per table configuration
- Improves readability in dense layouts

**Pagination Bar (bottom):**

- Position: sticky bottom, height 48px
- Background: `bg-input` (#1A1A1A)
- Border-top: 1px `border-subtle` (#333333)
- Padding: 8px 16px
- Display: flex, justify-content space-between, align-items center

**Pagination Components:**

- Left section: "Showing 1–25 of 1,247", Body Small, text `text-muted`
- Center section: page numbers
  - Display: 5 page buttons max (surrounding current page)
  - Active page: bg `primary-main`, text white, height 32px, min-width 32px, rounded
  - Inactive page: bg transparent, text `text-body`, hover bg `bg-surface`
  - Ellipsis: "…" if gap in pages
  - Prev/Next buttons: 32px, ghost style, disabled if at boundary
- Right section: rows per page dropdown
  - Label: "Rows per page:", Body Small, text `text-muted`
  - Dropdown: 40px height, options 10/25/50/100, selected displays current value

**Toolbar (above table):**

- Position: sticky above table header
- Height: 48px
- Background: `bg-surface` (#121212)
- Border-bottom: 1px `border-subtle` (#333333)
- Padding: 8px 16px
- Display: flex, gap 12px, align-items center

**Toolbar Items:**

1. **Search Input:**
   - Width: 300px, max-width 50% on mobile
   - Height: 40px (dense)
   - Padding: 8px 12px
   - Border: 1px `border-subtle`, focus `primary-main` 2px
   - Icon: magnifying-glass 20px left, text `text-muted`
   - Placeholder: "Search table...", text `text-muted`
   - Clear button: X icon 20px right (shown when text entered)
   - Real-time search with debounce 300ms

2. **Filter Buttons:**
   - Button: Secondary 40px (dense), text "Filters" + chevron-down icon
   - Tap: open filter panel (sheet on mobile, dropdown on desktop)
   - Badge: if filters active, show count badge on button (red dot or number)

3. **Density Toggle:**
   - Icons: two buttons, grid-sparse and grid-dense 24px
   - Active state: bg `primary-dim`, icon `primary-main`
   - Inactive: bg transparent, icon `text-body`
   - Toggle: comfortable ↔ dense, duration-instant (100ms)
   - Affect: row heights, padding, font sizes per table
   - Persist: localStorage per table ID

4. **Export CSV Button:**
   - Button: Ghost 40px, icon download, text "Export"
   - Tap: download table data as CSV file
   - Filename: "table-name-YYYY-MM-DD.csv"
   - Include: all columns, all visible rows (respect filtering)

5. **Spacer:** flex-grow 1, pushes next items right

6. **Refresh Button:**
   - Icon: refresh 24px Phosphor
   - Tap: reload table data from server
   - State: spinning icon during load, duration-breath (2000ms) linear
   - Success: toast "Data Refreshed"

**Bulk Action Bar (appears on selection):**

- Position: above table toolbar, sticky
- Height: 48px
- Background: `primary-dim` (rgba(77, 23, 0, 0.15))
- Border-bottom: 1px `primary-main` (#FF4D00)
- Padding: 8px 16px
- Display: flex, justify-content space-between, align-items center

**Bulk Bar Content:**

- Left: "N selected", Body Base, text `text-primary`
- Center: action buttons (context-specific)
  - Approve: Primary 40px, text "Approve"
  - Suspend: Secondary 40px, text "Suspend"
  - Delete: Destructive 40px, text "Delete"
- Right: close button (X icon 24px), tap to deselect all

**Inline Editing:**

- Trigger: double-click on cell
- Mode: cell becomes input field
- Styling: border 2px `primary-main`, bg `bg-input`, cursor active
- Input type: depends on cell data (text, number, email, select)
- Save: press Enter or click outside
- Cancel: press Escape
- Validation: real-time per field type
- Success feedback: cell flashes green `status-success` 200ms, update shows in data
- Error feedback: cell shake (Refusal Shake 200ms), error message below

**Sorting:**

- Click column header to sort
- First click: ascending (A→Z, 0→9)
- Second click: descending (Z→A, 9→0)
- Third click: clear sort (return to default order)
- Visual: arrow icon (chevron-up/down) appears in header, text `primary-main`
- Duration: instant (data re-renders, no animation)

**Multi-sort (with Shift+click):**

- Shift+click adds secondary sort column
- Show sort priority numbers in header (1, 2, 3…)
- Clear multi-sort: single click on sorted column to return to single sort

**Empty State:**

- Text: "No Data Detected", Heading 2, text `text-muted`
- Icon: 64px inbox icon, text `text-muted`
- Button: "Clear Filters", Ghost, below text (only if filters applied)
- Centered in table area, padding 64px

**Loading State:**

- Skeleton rows: 5–10 shimmer placeholder rows
- Height: match row height (56px/44px)
- Shimmer animation: opacity 0.5 → 1.0 → 0.5, duration-breath (2000ms) infinite
- Replace content while loading

**Virtual Scrolling (>100 rows):**

- Library: react-window (React), LazyColumn (Compose), or RecyclerView (Android native)
- Buffer: 20 rows (render 10 above + 10 below viewport)
- Frame rate: maintain 60fps on 10,000 row datasets
- Scroll smoothness: no jank, consistent velocity

---

#### Sidebar Navigation

**Desktop Layout (1024+px):**

- Width: 260px
- Position: fixed left, height 100vh
- Background: `bg-surface` (#121212)
- Border-right: 1px `border-subtle` (#333333)
- Overflow-y: auto, overflow-x: hidden
- Z-index: `z-sticky` (500)
- Safe area: top padding if notched device

**Logo (top):**

- Height: 32px, width auto
- Padding: 16px
- Color: monochrome `text-primary` (#EDEDED)
- Click: navigate to dashboard home

**Section Labels:**

- Typography: Caption (12px ALL CAPS Medium)
- Color: `text-muted` (#666666)
- Padding: 16px 16px 8px
- Example: "PLATFORM", "MANAGEMENT", "OPERATIONS", "SYSTEM"

**Nav Items:**

- Height: 44px
- Padding: 8px 16px
- Display: flex, align-items center, gap 12px
- Icon: 20px Phosphor Regular, text `text-body`
- Label: Body Small (14px), text `text-body`
- Border-left: 3px transparent

**Nav Item States:**

- Idle: bg transparent, icon/label `text-body`
- Hover: bg `bg-input` (#1A1A1A), cursor pointer
- Active (current page): bg `primary-dim` (rgba(77, 23, 0, 0.15)), icon `primary-main` Bold, label `text-primary`, border-left 3px `primary-main`
- Focus: ring 2px `border-strong`, offset 2px

**Sidebar Navigation Items:**

1. Dashboard (home)
2. User Management (users)
3. Vendor Management (briefcase)
4. Disputes (alert-circle)
5. Orders (package)
6. Transactions (credit-card)
7. Reports (bar-chart)
8. Settings (gear)
9. Audit Logs (clipboard)
10. Help & Support (help-circle)

**Collapse Toggle (bottom):**

- Position: bottom-left corner
- Icon: chevron-left 32px Phosphor
- Text: "Collapse" (optional)
- Tap: sidebar shrinks 260px → 64px (icons only)
- Collapsed state: labels hidden, icons centered, tooltips on hover
- Animation: duration-nav (300ms), Mechanical Snap
- Persist: localStorage per user session

**Tablet (600–1023px):**

- Sidebar hidden by default
- Hamburger toggle in top-left app bar
- On tap: slide-in drawer from left, z-overlay (800), full-height overlay
- Same nav items as desktop

---

#### Top Bar

**Desktop (1024+px):**

- Height: 64px
- Background: `bg-surface` (#121212)
- Border-bottom: 1px `border-subtle` (#333333)
- Position: sticky top, z-index `z-sticky` (500)
- Padding: 8px 32px
- Display: flex, justify-content space-between, align-items center

**Tablet/Mobile (<1024px):**

- Height: 56px
- Padding: 8px 16px
- Safe area: add 8px top on notched devices

**Left Section (Breadcrumbs):**

- Display: flex, gap 8px, align-items center
- Current page: text `text-primary` (#EDEDED), Body Small (14px)
- Parent pages: text `text-body` (#A1A1A1), Body Small, clickable (navigate back)
- Divider: "/" icon, text `text-muted`
- Example: "Platform > Vendors > Details" (parents clickable, "Details" current)

**Center Section (Global Search):**

- Optional, max-width 400px
- Input height: 40px
- Width: 300px, grows to 400px on desktop
- Border: 1px `border-subtle`, focus `primary-main`
- Icon: magnifying-glass 20px, text `text-muted`
- Placeholder: "Search users, vendors, orders...", text `text-muted`
- Results: dropdown below, bg `bg-surface`, shadow `shadow-md`
  - Show recent searches (if none typed)
  - Show results grouped by type (Users, Vendors, Orders)
  - Result item: body-small + small meta, hover bg `primary-dim`
  - Keyboard: arrow keys navigate, Enter select, Escape close

**Right Section:**

- Display: flex, gap 16px, align-items center

1. **Notification Bell:**
   - Icon: bell 24px Phosphor, text `text-body`
   - Badge: if unread, show count (20px circle, red bg, white text)
   - Tap: open notifications drawer from right
   - Position: z-overlay (800)

2. **User Avatar Dropdown:**
   - Avatar: 40px circle, image or initials
   - Tap: open menu
   - Menu items: bg `bg-surface`, shadow `shadow-md`, radius `radius-sm`
     - "Profile Settings" (navigate)
     - "Appearance" (dark/light toggle)
     - "Logout" (confirm logout)

**Responsive (Mobile <600px):**

- Hamburger icon replaces breadcrumbs
- Tap: slide-in sidebar navigation
- Center: title text (current page name)
- Right: bell icon + avatar

---

#### Stats/KPI Cards

**Grid Layout:**

- 4-column desktop (1024+px), 2-column tablet (600–1023px), 1-column mobile (<600px)
- Gap: 16px between cards
- Responsive: auto-adapt column count per breakpoint

**Card Styling:**

- Background: `bg-surface` (#121212)
- Border: 1px `border-subtle` (#333333)
- Border-radius: `radius-md` (12px)
- Padding: 24px
- States: hover adds border `border-strong`

**Card Layout:**

- Icon: 24px Phosphor Regular, positioned top-left, color `text-muted`
- Value: Heading 1 (32px), text `text-primary`, positioned top-right, lining nums
- Label: Body Small (14px), text `text-muted`, below icon
- Trend (optional): positioned bottom-right
  - Arrow: 16px up/down icon, color `status-success` or `status-error`
  - Percentage: Body Small, color matches arrow, format "+12.5%" or "-8.2%"
  - Period: Caption, text `text-muted`, "vs. last period"
- Sparkline (optional): 48px height × 120px width, positioned bottom, primary-main stroke 2px, area fill `primary-dim`, no grid

**Card Types:**

1. **Total Revenue (Hero):**
   - Icon: trending-up
   - Value: Display L (56px), color `primary-main`, format "$###,###.##"
   - Label: "Total Revenue"
   - Trend: always shown, critical metric
   - Sparkline: 30-day trend

2. **Active Vendors:**
   - Icon: briefcase
   - Value: Heading 1 (32px)
   - Label: "Active Vendors"
   - Trend: optional

3. **Pending Orders:**
   - Icon: package
   - Value: Heading 1 (32px)
   - Label: "Pending Orders"
   - Trend: show if significant change

4. **Average Rating:**
   - Icon: star
   - Value: Heading 1 (32px), format "4.7" (no $ or %)
   - Label: "Platform Rating"
   - Trend: optional

**Interaction:**

- Tap card: navigate to related detail page (e.g., tap "Active Vendors" → Vendor Management table)
- Cursor: pointer
- Focus: ring 2px `border-strong`, offset 2px

---

#### Charts

**Line Chart (Revenue Trend):**

- Canvas: full width, height 300px
- Stroke: `primary-main` (#FF4D00), stroke-width 2px, line-cap round
- Area fill: `primary-dim` (rgba(77, 23, 0, 0.15)) below line, opacity 0.4
- Grid: optional light `border-subtle` gridlines, no labels
- Axes: Mono Small (12px), text `text-muted`
  - X-axis: dates or day names, 8–12 data points max
  - Y-axis: currency format ($), right-aligned
- Tooltip (hover): bg `bg-surface`, border 1px `border-strong`, shadow `shadow-md`, padding 12px, radius `radius-sm`
  - Format: "Feb 8 · $47,293"
  - Position: follow cursor or fixed to data point
- Responsive: shrink or scroll horizontally on mobile
- Empty: "No data for this period", centered, text `text-muted`, 14px

**Bar Chart (Orders, Revenue by Category):**

- Canvas: full width, height 240px
- Bars: `primary-main` (#FF4D00), width proportional to data
- Border-radius (top corners): `radius-xs` (4px)
- Gap between bars: 12px
- Hover: opacity 0.8, show value tooltip Mono Base
- X-axis: category labels (e.g., service types), Mono Small, text `text-muted`
- Y-axis: count or amount, right-aligned, Mono Small
- Legend: optional dot + label Body Small, positioned above chart
- Empty: "No data for selected period"

**Pie/Donut Chart (Revenue Distribution by Category):**

- Canvas: 300×300px (or responsive)
- Segments: `primary-main`, `status-info`, `status-warning`, `status-success`, `status-error` (5 colors max)
- Center label (donut): value or percentage, Heading 2, text `text-primary`
- Legend: dot + label Body Small, positioned right or below
- Hover: segment opacity 0.8, tooltip with exact value + percentage
- Responsive: shrink on mobile, legend move below

**Time Selector Pills:**

- Position: above chart
- Container: flex row, gap 8px, margin-bottom 16px, overflow-x auto on mobile
- Pill: height 32px, padding 8px 16px, border-radius `radius-full` (9999px)
- States:
  - Inactive: bg `bg-input` (#1A1A1A), border 1px `border-subtle`, text `text-body`
  - Active: bg `primary-main` (#FF4D00), border none, text `text-inverse`
- Typography: Body Small (14px SemiBold)
- Options: "1D", "7D", "30D", "90D", "1Y", "Custom"
- Interaction: tap to select, reload chart data, duration-instant (100ms)
- Sticky: if chart scrollable, pills stay at top

**Custom Date Range:**

- Tap "Custom" pill: open date picker modal
- Modal: two date inputs (from/to) or calendar picker
- Buttons: [Cancel Ghost] [Apply Primary 48px]
- Apply: reload chart with custom range

---

### Admin Patterns

#### User Management

**Table Columns:**

1. Checkbox (select)
2. Avatar + Name (40px avatar, Body Base name)
3. Email (Body Base, clickable to compose email)
4. Role badge (24px pill: Admin=`primary-main`, Manager=`status-info`, Support=`status-warning`, Vendor=`status-success`, User=neutral)
5. Status badge (24px pill: Active=`status-success`, Suspended=`status-error`, Inactive=`text-muted`)
6. Join date (Mono Small, relative or absolute)
7. Actions (edit icon, delete icon, more menu)

**User Detail Page (on row click):**

- Header: user avatar 64px + name Heading 2 + email Body Base
- Tabs: Profile | Activity | Orders (if applicable) | Reviews (if vendor) | Permissions

**Profile Tab:**

- Key-value pairs: Name, Email, Phone, Role, Status, Joined, Last Active
- Edit button: Secondary, opens inline form for each field

**Activity Tab:**

- Timeline: login events, role changes, actions performed
- Timeline items: actor (system or admin), action, timestamp, IP address

**Orders Tab (if vendor/user):**

- Mini table: 5 recent orders, compact layout
- Link: "View All Orders"

**Permissions Tab (admin only):**

- Checkbox list: can create users, can suspend vendors, can view reports, etc.
- Save button: Primary 48px

**Suspend Modal (from row action or more menu):**

- Title: "Suspend User?"
- Text: "This user will lose access to the platform."
- Radio select: suspend reason (multiple choice)
- Toggle: "Send notification email"
- Buttons: [Cancel Ghost] [Suspend Destructive]

**Delete with Type-to-Confirm:**

- Modal: "Delete User?" (user name)
- Warning: red `status-error`, "This action cannot be undone."
- Instructions: "Type the user's email to confirm: [____]"
- Input: border grows red on mismatch, green on match
- Buttons: [Cancel Ghost] [Delete Destructive] (disabled until match)

**Bulk Actions (on selection):**

- Bulk bar: "N users selected" + [Suspend] [Activate] [Change Role] buttons
- Change Role: secondary modal with role dropdown
- Suspend: bulk confirmation modal

---

#### Vendor Management

**Table Columns:**

1. Checkbox
2. Business name + owner name (40px avatar, stacked text)
3. Category (Body Small, Business Type)
4. Status badge (24px: Pending=`status-warning`, Approved=`status-success`, Suspended=`status-error`, Rejected=`status-error`)
5. Rating (star icon 20px + value Mono Base, e.g., "4.8")
6. Revenue (Mono Base, format "$###,###.##")
7. Date joined (Mono Small)
8. Actions (edit, details, more menu)

**Vendor Detail Page:**

- Header: business logo 64px + business name Heading 2 + owner name Body Small
- Status badge: prominent position top-right
- Tabs: Business | Services | Orders | Earnings | Reviews | Documents

**Business Tab:**

- Key-value pairs: Business Name, Owner, Category, Tax ID, Address, Phone, Website, Registration Date, Status, Approval Date (if approved)
- Edit button: Secondary, inline form per field

**Services Tab:**

- Mini table: service name, price range, availability status, rating
- Link: "Manage Services" (navigate to inventory management for this vendor)

**Orders Tab:**

- Mini table: 10 recent orders, order ID, customer, amount, status, date
- Link: "View All Orders"

**Earnings Tab:**

- Hero stat: total earnings, Display L
- Chart: 30-day earnings trend, line chart
- Transaction list: 5 recent transactions

**Reviews Tab:**

- List: customer reviews, rating + text + date, newest first
- Empty: "No reviews yet"

**Documents Tab:**

- List: verification documents (business license, tax certificate, insurance)
- Document item: file name, upload date, expiration date (if applicable), status badge
- Actions: download, request new

**Approval Modal (new pending vendor):**

- Title: "Approve Vendor?"
- Business info displayed
- Checklist (admin verifies):
  - [ ] Business documents verified
  - [ ] Tax ID confirmed
  - [ ] Insurance valid
  - [ ] Background check passed
  - [ ] Payment method linked
- Notes textarea (optional)
- Buttons: [Reject] [Approve] (requires all checks marked)

**Reject with Reason:**

- Modal: "Reject Vendor?"
- Dropdown: reason list (documents invalid, tax issues, failed verification, other)
- Textarea: admin notes to send vendor
- Email option: "Send rejection email to vendor"
- Buttons: [Cancel Ghost] [Reject Destructive]

**Suspension/Reactivation:**

- Suspend: modal with reason dropdown (violation, non-responsive, payment issues, other)
- Email: "Notify vendor of suspension"
- Reactivate: modal with confirmation, no reason needed

---

#### Dispute Resolution

**Table Columns:**

1. Checkbox
2. Dispute ID (Mono Small)
3. Type (Body Small: payment, service quality, cancellation, refund, other)
4. Parties (2-column: customer name + vendor name)
5. Status badge (24px: Open=`status-info`, In Review=`status-warning`, Resolved=`status-success`, Escalated=`status-error`)
6. Priority badge (24px: High=`status-error`, Medium=`status-warning`, Low=`status-info`)
7. Assigned to (admin name or "Unassigned", clickable)
8. Date opened (Mono Small)
9. Actions (view, assign, more)

**Dispute Detail Page (2-column layout):**

**Left Column (Chat Thread):**

- Height: 400px, overflow-y auto
- Messages: bubble layout (customer = right, vendor = left, admin = center-aligned gray)
- Bubble styling: bg `bg-input`, border 1px `border-subtle`, radius `radius-md`, padding 12px 16px
- Sender name: Caption, text `text-muted`, above bubble
- Timestamp: Mono Small, text `text-muted`, below bubble
- Input: form at bottom, textarea + send button Primary 40px
- Scroll: auto-scroll to latest message on new message

**Right Column (Info & Actions):**

- Dispute header: ID Mono Small + Status badge + Priority badge
- Type: Caption label + Body Small value
- Opened: Caption + date Mono Small
- Assigned to: Caption + admin name (clickable), change button Ghost
- Customer card: name Body Base + email/phone Body Small + rating (if applicable)
- Vendor card: business name Body Base + owner + rating
- Order card (if dispute tied to order): order ID Mono Small + service + amount + date
- Timeline: vertical, events logged (opened, updated, assigned, etc.)

**Action Bar (bottom right):**

- Sticky bottom, bg `bg-surface`, border-top 1px `border-subtle`
- Buttons: context-dependent
  - Resolve: Primary 48px (disputes with settlement agreed)
  - Escalate: Secondary 48px (needs manager review)
  - Refund: Primary 48px (if refund resolution)
  - Deny Claim: Destructive 48px (rejected claim)

**Resolution Form (modal, on "Resolve" tap):**

- Title: "Resolve Dispute"
- Type dropdown: Full Refund, Partial Refund, Service Credit, No Action
- If refund: amount input (Mono Base, $ prefix, editable)
- Notes textarea: admin resolution notes
- Checkbox: "Notify both parties of resolution"
- Buttons: [Cancel Ghost] [Confirm Destructive]

---

#### Settings Forms

**Layout:**

- Page: full width, max-width 1000px, centered on desktop
- Sections: stacked vertical, each section a card bg `bg-surface`, padding 24px, border 1px `border-subtle`, radius `radius-md`

**Section Structure:**

- Header: Heading 2 (24px), text `text-primary`
- Description: Body Small (14px), text `text-body`, margin-top 8px
- Content: form groups below, margin-top 24px

**Form Group (per setting):**

- Layout: label left, control right (desktop), stacked mobile
- Label: Body Base (16px), text `text-primary`, margin-bottom 8px (mobile) or centered (desktop)
- Input/control: varies per setting type
- Helper text: Body Small, text `text-muted`, below control
- Gap between groups: 24px

**Toggle Setting:**

- Layout: label left, switch 48×24px right
- Label: Body Base, text `text-primary`
- Switch: active bg `primary-main`, inactive bg `border-strong`
- Description: Body Small below label, text `text-muted`
- No toggle animation on switch (instant state change)

**Dropdown Setting:**

- Height: 40px
- Trigger: shows current value
- Menu: bg `bg-surface`, shadow `shadow-md`, options as rows
- Selected: checkmark + highlighted
- Label above: Caption, text `text-muted`

**Text Input Setting:**

- Height: 40px
- Styling: border 1px `border-subtle`, focus `primary-main`
- Placeholder: body small, text `text-muted`

**Save Bar (sticky bottom, appears on form changes):**

- Position: fixed bottom, height 60px, bg `bg-surface`, border-top 1px `border-subtle`, padding 8px 32px
- Left: unsaved indicator (orange dot + "Unsaved Changes")
- Right: [Discard Ghost 48px] [Save Primary 48px]
- Animation: slide up from bottom, duration-fast (200ms)
- Buttons: disabled until form modified
- Save: toast "Settings Saved" on success
- Discard: confirmation modal if changes made

---

#### Audit Logs

**Table Columns:**

1. Timestamp (Mono Small, format "Feb 8, 14:32:15")
2. Actor (admin name or "System", Body Small)
3. Action (Body Small: created, updated, deleted, suspended, approved, refunded, etc.)
4. Resource (Body Small: User, Vendor, Order, Dispute, etc.)
5. Resource ID (Mono Small, clickable to jump to resource)
6. IP Address (Mono Small, text `text-muted`)
7. Details (Body Small, expandable to show full change log as JSON)

**Expandable Details:**

- Tap row or ">" icon to expand
- Shows: old value → new value for each field changed
- Format: JSON-like syntax, Mono Base, syntax highlighting
  - Keys: color `status-info`
  - Values: color `text-primary`
  - Removed: strikethrough, color `status-error`
  - Added: color `status-success`

**Filtering:**

- Toolbar: Search (actors), Date Range, Action Type (dropdown), Resource Type (dropdown)
- Real-time filter, table updates instantly
- "X filters active" indicator

**Sorting:**

- Click column header: Timestamp, Actor, Action, Resource
- Default: newest first (Timestamp descending)

**Data Retention Indicator:**

- Footer: "Showing last 90 days of logs. Older logs archived.", Caption, text `text-muted`

**Export:**

- Button: "Export CSV", Ghost, downloads all visible logs
- Filename: "audit-logs-YYYY-MM-DD.csv"

---

### Performance

**Target Metrics:**

- TTI (Time To Interactive): <3 seconds
- Table render (100 rows): <100ms
- Virtual scroll (10K rows): 60fps, no jank
- Chart render: <200ms
- Search filter: <300ms debounce response time
- Page load (cold cache): <4 seconds

**Optimization Strategies:**

- Code-split pages: dashboard, user management, vendor management, disputes
- Lazy-load images: vendors, user avatars, service images
- Cache API responses: 5min TTL on list queries, invalidate on mutations
- Memoize table rows: React.memo on expensive cell renders
- Virtual scroll: always enable for >100 row tables
- Debounce: search 300ms, sort/filter instant but debounced API call

---

### Keyboard Shortcuts

**Global:**

- `/` or `Cmd+K` (Mac) / `Ctrl+K` (Windows): open search
- `Esc`: close modals, overlays, popovers
- `Tab`: navigate focusable elements (breadth-first)
- `Shift+Tab`: reverse tab order

**Table Navigation:**

- `↑` / `↓`: move selection up/down rows
- `Space`: toggle selection on current row
- `Shift+↑` / `Shift+↓`: extend selection
- `Cmd/Ctrl+A`: select all visible rows
- `Enter`: open detail page for selected row

**Data Entry:**

- `Enter`: submit form, save changes
- `Esc`: cancel form, discard changes
- `Tab`: move to next field
- `Shift+Tab`: move to previous field

**Table Operations:**

- `Cmd/Ctrl+E`: export table to CSV
- `?`: show shortcut overlay (modal with all shortcuts)
- `Cmd+S` (Mac) / `Ctrl+S` (Windows): save form (custom implementation)

**Shortcut Overlay:**

- Trigger: tap `?` icon or press `?`
- Modal: full-screen on mobile, 600px centered on desktop
- Content: grouped shortcuts
  - Navigation
  - Tables
  - Forms
  - Data
- Display: keyboard icon + action name, monospace font
- Close: press `Esc` or click background

---

### Responsive Behavior

**Desktop (1024+px):**

- 2-column sidebar + main layout
- Tables full-width, horizontal scroll if needed
- All features visible
- Modals centered, 600px width
- Charts full size

**Tablet (600–1023px):**

- Sidebar collapses to hamburger drawer
- 2-column KPI cards, 1-column on narrow
- Tables: compact mode (44px rows, smaller padding)
- Modals: full-width minus safe area margins
- Charts: responsive width, legend repositions

**Mobile (<600px):**

- Single column layout
- Sidebar: bottom nav or hamburger drawer
- Tables: card view (vertical stacking of columns)
  - Example: name [value] format, one row per item
  - Actions: collapse under "More" menu or swipe-left reveal
- KPI cards: 1 per row, stacked
- Modals: full-screen, no padding outside safe area
- Charts: scrollable horizontally, legend below

**Card View for Tables (Mobile):**

- Each row becomes a card, bg `bg-input`, padding 16px, border 1px `border-subtle`, radius `radius-sm`
- Key-value layout: label (Caption) + value (Body Small/Mono Base) stacked
- Actions: bottom right, 32px icons or "More" menu
- Selection: checkbox top-left of card
- Spacing: 12px gap between cards

---

**End of Mode 5 Section**

---

---

## Part 6 — Transition Boundary: Marketing → Product Handoff

### Overview

The transition from Marketing (Mode 2) to Product modes (Modes 3/4/5) occurs during sign-up and onboarding. This is a **hybrid zone** where design decisions must be explicitly documented to prevent inconsistency.

### When the Transition Occurs

**Trigger Point:** When user clicks "Create Account" or "Get Started" CTA on marketing pages.

**Transition Flow:**

1. Marketing landing page (Mode 2 styling)
2. Sign-up form (Hybrid styling)
3. Onboarding screens (Hybrid styling)
4. Product dashboard (Mode 3/4/5 styling - full transition complete)

---

### Design Token Transitions

| Element | Marketing (Mode 2) | Transition Zone | Product (Mode 3/4/5) |
|---------|-------------------|-----------------|---------------------|
| **Button Shape** | `radius-full` (pill) | `radius-full` for primary CTA, `radius-sm` for secondary | `radius-sm` (8px) everywhere |
| **Button Easing** | Fluid `cubic-bezier(0.16, 1, 0.3, 1)` | Mechanical Snap `cubic-bezier(0.2, 0, 0.38, 0.9)` | Mechanical Snap everywhere |
| **Background** | `#050505` | `#050505` | `#050505` |
| **Typography (Headlines)** | Outfit (all sizes) | Outfit for hero, Plus Jakarta Sans for body | Outfit for headlines only |
| **Typography (Body)** | Plus Jakarta Sans | Plus Jakarta Sans | Plus Jakarta Sans |
| **Glassmorphism** | Active (navbar, cards) | Reduced (only on onboarding hero) | None (solid surfaces) |
| **Visual Effects** | Aurora, Orbs (active) | Fade out during transition | None (product is clean) |
| **Text Opacity** | `text-white/70`, `text-white/90` | Start using semantic tokens | Semantic tokens only |

---

### Button Morphing Behavior

**Sign-Up Form Primary Button:**

- Appears as: Pill button (`radius-full`)
- Background: `primary-main` (#FF4D00)
- Text: "Create Account" or "Sign Up"
- On submission success: Morphs to `radius-sm` (8px) for next screen

**Onboarding "Next" Buttons:**

- Shape: `radius-sm` (8px) - fully transitioned
- No more pill buttons after account creation

**Visual Effect Fade-Out:**

- Aurora/Orbs: Fade opacity from 100% → 0% over 800ms during "Create Account" button press
- Complete fade before dashboard loads

---

### Typography Transition

**Marketing Headlines:**

- Outfit Display XL (80px), Display L (56px)

**Onboarding Headlines:**

- Outfit Heading 1 (32px) - reduced from display sizes
- Used for: "Welcome to Genie", "Set up your profile"

**Product Headlines:**

- Outfit Heading 1 (32px) for page titles
- Plus Jakarta Sans for all body text, labels, UI elements

**Copy Voice Transition:**

| Context | Marketing Voice | Transition Voice | Product Voice |
|---------|----------------|------------------|---------------|
| Headlines | "Your Genie Awaits" (emotional) | "Welcome to Genie" (welcoming) | "Dashboard" (functional) |
| Body Text | "Transform your workflow with AI-powered efficiency" | "Let's set up your account" | "2 active bookings" |
| Buttons | "Get Started Free" | "Create Account" | "Save Changes" |

---

### Motion & Interaction

**Scroll Animations:**

- Marketing: Fluid easing for scroll-triggered reveals
- Transition: No scroll animations (static forms)
- Product: Mechanical snap for all interactions

**Page Transitions:**

- Marketing → Sign-up: Crossfade, 400ms
- Sign-up → Onboarding: Slide left, 300ms, mechanical snap
- Onboarding → Dashboard: Fade + scale, 500ms (feels significant)

---

### Implementation Checklist

**For Designers:**

- [ ] Sign-up form uses hybrid button styling (pill primary, 8px secondary)
- [ ] Onboarding screens have no glassmorphism (solid surfaces only)
- [ ] Visual effects (aurora/orbs) fade out before dashboard loads
- [ ] Copy transitions from emotional → welcoming → functional

**For Developers:**

- [ ] Button radius changes applied via CSS class swap on route change
- [ ] Easing function swapped from fluid → mechanical after account creation
- [ ] Opacity-based tokens replaced with semantic tokens in product routes
- [ ] Visual effect animations include `prefers-reduced-motion` check

---

## Cross-Mode Implementation Guide

### Recommended Charting Libraries

**Web (React):**

- **Primary: Recharts v2.x**
  - Rationale: React-native API, responsive by default, excellent dark mode support
  - Best for: Line charts, bar charts, area charts, pie charts, composed charts
  - Installation: `npm install recharts`
  - Pros: Declarative API, good documentation, TypeScript support
  - Cons: Limited customization for complex visualizations

- **Fallback: D3.js v7 + Custom React Wrappers**
  - Rationale: Full control, best for custom visualizations
  - Best for: Complex data viz, custom interactivity, force-directed graphs, geographic maps
  - Installation: `npm install d3`
  - Pros: Ultimate flexibility, massive ecosystem
  - Cons: Steep learning curve, requires manual React integration

**iOS (SwiftUI):**

- **Primary: Swift Charts (iOS 16+)**
  - Rationale: Native framework, automatic accessibility, consistent with platform
  - Best for: Standard chart types (line, bar, area, point)
  - Pros: Native performance, automatic dark mode, VoiceOver support
  - Cons: iOS 16+ only

- **Fallback: Charts by Daniel Gindi (iOS 15 support)**
  - Rationale: Mature library with broad OS support
  - Installation: Swift Package Manager or CocoaPods
  - Best for: Projects requiring iOS 13-15 compatibility

**Android (Compose/Kotlin):**

- **Primary: Vico v1.x**
  - Rationale: Compose-native, Material 3 compatible, excellent performance
  - Best for: Line, column, and composed charts in Jetpack Compose
  - Installation: `implementation("com.patrykandpatrick.vico:compose:1.x.x")`
  - Pros: Declarative API, smooth animations, customizable

- **Fallback: MPAndroidChart (for Compose interop)**
  - Rationale: View-based, mature library for complex charts
  - Best for: Projects with mixed View/Compose architecture

**Design System Integration:**

- Use semantic color tokens (`primary-main`, `status-success`, etc.) for chart colors
- Apply `radius-sm` (8px) to chart containers
- Use `text-body` color for axis labels, `text-muted` for grid lines
- Respect `duration-nav` (300ms) for chart transitions
- All charts must have accessible labels (ARIA/accessibility props)

### Technology Stack

| Platform | Framework | Animation | Forms | State |
|----------|-----------|-----------|-------|-------|
| **Web (Product)** | React 19+ · Tailwind CSS v4 | Framer Motion v11+ | React Hook Form + Zod | Context API (theme) · React Query (server) |
| **Web (Marketing)** | React/Next.js · Tailwind CSS v4 | Framer Motion v11+ | Native forms | Minimal (static pages) |
| **iOS** | SwiftUI | Built-in transitions | SwiftUI Form | @Observable / SwiftData |
| **Android** | Compose (Kotlin) | Compose Animation | Compose Forms | ViewModel + StateFlow |
| **Admin** | React 19+ · Tailwind CSS v4 | Framer Motion v11+ | React Hook Form + Zod | Zustand or Redux Toolkit |

### Theme Handling

**Storage:** `localStorage` key `genie-theme` with values `dark`, `light`, `system`.

**Default:** System preference via `window.matchMedia('(prefers-color-scheme: dark)')`.

**CSS Implementation:**

```css
:root {
  /* Light Mode defaults */
  --bg-default: #F4F5F7;
  --bg-surface: #FFFFFF;
  --primary-main: #FF4D00; /* constant across themes */
}

[data-theme="dark"] {
  --bg-default: #050505;
  --bg-surface: #121212;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg-default: #050505;
    --bg-surface: #121212;
  }
}
```

### CSS Reset (All Modes)

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; -webkit-font-smoothing: antialiased; }
body { font-family: var(--font-ui); color: var(--text-primary); background: var(--bg-default); }
```

### Font Loading Strategy

1. **Preload** Outfit and Plus Jakarta Sans variable fonts in `<head>`
2. **Fallback stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
3. **JetBrains Mono:** load on-demand (only when code/data UI is rendered)
4. Use `font-display: swap` to prevent FOIT

### Performance Targets (All Modes)

| Metric | Product Apps | Marketing | Admin |
|--------|-------------|-----------|-------|
| First Contentful Paint | < 1.5s | < 1.5s | < 2s |
| Time to Interactive | < 3.5s | < 3.5s | < 3s |
| Largest Contentful Paint | < 2.5s | < 2.5s | < 3s |
| Cumulative Layout Shift | < 0.1 | < 0.1 | < 0.1 |
| Bundle Size (gzipped) | < 200KB | < 150KB | < 250KB |
| Animation FPS | 60fps | 60fps | 60fps |

### Responsive Strategy

- **Mobile First:** Write base styles for 0–599px, enhance upward
- **Fluid Typography:** Use `clamp()` between breakpoints: `font-size: clamp(24px, 5vw, 32px)`
- **CSS-only animations:** Use `transform` and `opacity` only for GPU-accelerated 60fps

### Accessibility Checklist (All Modes)

- [ ] All interactive elements keyboard navigable (Tab, Enter, Space, Escape)
- [ ] Focus indicators visible: 2px outline using `primary-main` or `border-strong`
- [ ] ARIA labels on all icon-only buttons
- [ ] Skip navigation link for screen readers
- [ ] `prefers-reduced-motion` respected globally (see Foundation Section 7)
- [ ] Color contrast validated: 4.5:1 minimum for text (WCAG AA)
- [ ] Form inputs have associated `<label>` elements
- [ ] Error messages announced via `aria-live="polite"`
- [ ] Touch targets ≥ 44px on mobile, ≥ 40px on desktop
- [ ] Dynamic content updates use `role="status"` or `role="alert"`

### Testing Requirements

| Category | Tools | Scope |
|----------|-------|-------|
| Visual Regression | Percy / Chromatic | All components, dark + light mode |
| Accessibility | axe-core / Lighthouse | Automated scan on every PR |
| Cross-Browser | BrowserStack | Chrome, Safari, Firefox, Edge (last 2 versions) |
| Device Testing | Physical devices | iPhone 13+, Samsung Galaxy S22+, iPad Pro |
| Performance | Lighthouse CI | Score ≥ 90 (mobile) on every deploy |

### Code Conventions

- **CSS:** Always use semantic tokens, never raw hex: `background: var(--bg-surface)` not `background: #121212`
- **Naming:** BEM methodology: `.card {}`, `.card__header {}`, `.card__header--highlighted {}`
- **File Structure:**

  ```
  /styles
    /tokens     → colors, spacing, typography, motion
    /components → button, card, input, table
    /layouts    → grid, sidebar, page
    /utilities  → helpers, animations, breakpoints
  ```

---

## Appendix

### A. Design Token Export Summary

All tokens are available as CSS Custom Properties (see Foundation Section 12) and JSON format for design tools.

**Figma Setup:**

- Create "Light" and "Dark" mode collections
- Use slash notation: `color/bg/default`, `space/2`
- Set appropriate scopes (Background, Text, Border)
- Export via Figma Tokens plugin for automated sync

### B. Mode Decision Flowchart

```
Is this a marketing/landing page?
  → YES → Use Mode 2 (Marketing). Check Sanctioned Overrides table.
  → NO →
    Is this the admin dashboard?
      → YES → Use Mode 5 (Admin). Apply dense adjustments.
      → NO →
        Is this the vendor/business app?
          → YES → Use Mode 4 (Vendor). Foundation strict.
          → NO → Use Mode 3 (User App). Foundation strict.
```

### C. Version History

| Version | Date | Changes |
|---------|------|---------|

| v5.0 (Corrected) | 2026-02-08 | Applied comprehensive review corrections. Removed 2 sanctioned overrides (Hero Background, Body Typography). Standardized badge opacity to 15% in dark mode. Removed vendor button shadows. Added Transition Boundary section. Added OpenType features. Documented dark-only marketing constraint. Added Refusal Shake, Empty State icons, Toast timing, and charting library recommendations. |
| 4.0 (Unified) | 2026-02-08 | Unified document. Foundation + Mode architecture. Separated Marketing, User, Vendor, Admin. Sanctioned overrides documented. |
| 3.0 (Complete) | 2026-01 | Complete component specs, loading states, badges, modals, toasts, platform adaptations, token exports. |
| 2.6 (Accessibility) | — | WCAG 2.1 contrast documentation, error recovery patterns, Refusal Shake. |
| 2.0 (Foundation) | — | Core color system, typography, grid, motion, base components. |

### D. Resources & Links

- **Icon Library:** [Phosphor Icons](https://phosphoricons.com)
- **Font Downloads:** Google Fonts (Outfit, Plus Jakarta Sans), JetBrains Mono
- **WCAG Guidelines:** WCAG 2.1 Level AA
- **Design System Team:** <design-system@findmygenie.com>
- **Slack Channel:** #genie-design-system

---

**End of Genie UI Design System v5.0 (Corrected Edition) — Unified Specification**

*Maintained by: Genie Design Systems Team*
*Next Review: 2026-05-08*
