# Multi-palette theme picker

## What will change
- Replace the single light/dark theme button with a compact glass popup anchored to the navbar.
- Add four selectable color families: Ocean Blue, Emerald Mint, Crimson Rose, and Amber Graphite.
- Give every family both light and dark appearances, with a clear light/dark control inside the popup.
- Show a small color preview and selected state for each palette.
- Save both the chosen palette and appearance for the current browser session.
- Keep the current glass navbar, mobile menu, accessibility labels, and responsive behavior.

## Technical details
- Expand the theme hook to manage palette and appearance, applying semantic theme attributes/classes to the document.
- Define complete semantic color-token overrides for all eight palette/appearance combinations.
- Build the picker from the existing button and popover controls, with keyboard-accessible selections and click-outside closing.
- Verify theme changes, session restoration, mobile fit, and the production preview build.
