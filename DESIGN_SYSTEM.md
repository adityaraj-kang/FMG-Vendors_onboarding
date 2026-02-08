# Genie UI Design System — Vendor Onboarding Specification

**Version:** 5.0 (Project Edition)
**Status:** Active
**Philosophy:** Industrial Precision & Mechanical Snapping

This document specifies the design tokens and structural patterns used in the FMG Vendor Onboarding portal. It is extracted from the Genie Master Specification and tailored for high-performance vendor-facing applications.

---

## 1. Design Philosophy

Genie is designed for high-stakes, data-intensive environments. The goal is to create interfaces that feel **engineered, not organic**.

- **Black Ops Aesthetics:** Deep charcoal foundations with surgical use of primary accents.
- **Precision Over Decoration:** Every pixel fulfills a functional purpose.
- **Mechanical Physics:** Interactions snap into place with confidence.

---

## 2. Color System

The system uses a variable-based implementation allowing for seamless Light/Dark mode switching while maintaining WCAG AA compliance.

### 2.1 Surfaces & Backgrounds

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|-----------|-------|
| `--bg-default` | `#050505` | `#F4F5F7` | Overall page canvas |
| `--bg-surface` | `#121212` | `#FFFFFF` | Elevated cards, panels |
| `--bg-input` | `#1A1A1A` | `#F0F2F5` | Form fields, shallow containers |
| `--border-subtle` | `#333333` | `#E2E4E8` | Dividers, inactive states |
| `--border-strong` | `#555555` | `#C4C8D0` | Input focus, interactive borders |

### 2.2 Brand & Status

| Token | Value | Usage |
|-------|-------|-------|
| `--primary-main` | `#FF4D00` | Primary CTAs, active states |
| `--status-success` | `#00E096` | Checkmarks, positive confirmation |
| `--status-error` | `#FF2D55` | Validation errors, destructive actions |

### 2.3 Typography Contrast

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|-----------|-------|
| `--text-primary` | `#EDEDED` | `#111111` | Headings, primary labels |
| `--text-body` | `#A1A1A1` | `#4A5568` | Paragraphs, secondary labels |
| `--text-muted` | `#666666` | `#64748B` | Helper text, disabled states |

---

## 3. Typography Tokens

We use a specific cross-font hierarchy to balance character with technical utility.

| Layer | Font Family | Weight | Purpose |
|-------|-------------|--------|---------|
| **Headlines** | `Outfit` | 600-700 | Branding, Page titles |
| **UI Text** | `Plus Jakarta Sans` | 400-600 | Forms, Paragraphs, Buttons |
| **Mono** | `JetBrains Mono` | 400-500 | Step counters, technical labels |

### Utilities

- **Display XL:** 80px, Bold (Marketing)
- **Heading 1:** 32px, SemiBold (Product Titles)
- **Heading 2:** 24px, Medium (Section Headers)
- **Body Base:** 16px, Regular (Standard Text)
- **Caption:** 12px, Medium (Form Helper Text)

---

## 4. Components & Patterns

### 4.1 Buttons

All buttons support standard (48px) and dense (40px) sizes.

- **Primary:** Filled `primary-main`, text `text-inverse` (#111111).
- **Secondary:** Outlined `border-strong`, transparent background.
- **Ghost:** No border/background, `primary-dim` hover tint.
- **States:** All buttons use a `scale(0.98)` transformation on `active` for physical feedback.

### 4.2 Form Inputs

- **Height:** 48px
- **Interactive State:** Focus triggers a `border-primary` ring and subtle interior glow.
- **Vertical Spacing:** 8px (`var(--space-1)`) between label and input.

### 4.3 Searchable Select (New)

- **Integrated Search:** 40px search field at the top of the dropdown when `searchable` is true.
- **Filtering:** Instant results with a "No results found" fallback state in Mono uppercase.
- **Keyboard navigation:** Escape to close, focus on open.

---

## 5. Motion & Physics

The system's distinct feel comes from its specialized easing functions.

- **Mechanical Snap:** `cubic-bezier(0.2, 0, 0.38, 0.9)`
  - Used for: Page transitions, modal appearances, dropdown expansions.
- **Recoil:** `cubic-bezier(0.175, 0.885, 0.32, 1.275)`
  - Used for: Success checkmarks, scale entrance of icons.
- **Duration:**
  - Instant (100ms) for micro-interactions.
  - Fast (200ms) for standard UI transitions.
  - Nav (300ms) for large page-level shifts.

---

## 6. Layout Grid

The system is built on an **8px grid system**.

- **Card Padding:** 24px-32px (`--space-3` to `--space-4`).
- **Section Spacing:** 48px-64px (`--space-6` to `--space-8`).
- **Max Content Width:** 800px (centered) for onboarding forms to maintain readability.
