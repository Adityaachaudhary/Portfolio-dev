# Side Projects stacked-card carousel

## Goal
Replace the current four-card Side Projects grid with a six-project, infinitely looping Swiper deck that matches the portfolio’s macOS-window styling and both themes.

## Changes
- Add the `swiper` package and use its React `EffectCards` and `Navigation` modules.
- Expand the editable side-project data to six entries while preserving the existing title, description, stack, GitHub, and optional demo fields.
- Rebuild the Side Projects section as a centered stacked deck:
  - front card fully visible;
  - trailing cards visibly layered with Swiper’s cards effect;
  - touch and pointer dragging enabled;
  - infinite looping enabled;
  - accessible previous/next icon controls outside the card on larger screens.
- Give every slide the same macOS window chrome used by Client Projects, including traffic-light dots and a compact project-name label.
- Keep project details and action links inside each card, with clear disabled states when placeholder links are not yet supplied.
- Add only the small global styles Swiper needs for stable sizing, stacking, and reduced-motion behavior.

## Verification
- Confirm all six slides cycle continuously in both directions.
- Test mouse navigation, drag/swipe behavior, theme switching, mobile sizing, link states, and card text overflow.
- Check the current build and browser console after implementation.

## Technical details
- Import `Swiper` and `SwiperSlide` from `swiper/react`.
- Import `EffectCards` and `Navigation` from `swiper/modules`, plus Swiper’s cards-effect CSS.
- Keep the data-driven `SideProjectCard` reusable and avoid loading images because these cards contain only lightweight text and icons.
