# Remove Hover Effects

## Goal
Make every element keep the same appearance and position when the pointer moves over it.

## Changes
- Remove hover-based color, opacity, underline, border, shadow, movement, and visibility changes from the portfolio and shared controls.
- Remove the card lift animation while preserving the existing card layout.
- Keep click behavior, keyboard focus indicators, theme selection, navigation, scrolling, and swipe animations unchanged.
- Verify no hover selectors remain and check the portfolio in the browser.

## Technical details
- Remove Tailwind `hover:`, `group-hover:`, and `peer-hover:` variants throughout `src`.
- Remove the CSS `:hover` state from the shared tile utility.
- Preserve state-driven effects such as selected/open controls and accessibility focus styles.
