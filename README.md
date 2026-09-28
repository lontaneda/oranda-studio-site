# Oranda Studio 2.0.2

Responsive static website, reconciled on 2026-09-28.

## Preview and publish

Open `index.html`, or run `python -m http.server 8080` in this folder and visit http://localhost:8080. Upload index.html, styles.css, script.js and assets/ together to your static host or GitHub Pages. No build dependencies.

## Reconciliation decisions

The supplied Oranda movil.svg and Oranda movil.pdf are both 402 × 2555 mobile compositions. No separate revised desktop design was attached. Desktop therefore retains the existing navigation and three-column project grid, with the updated mobile design language applied consistently. This is a responsive interpretation, not verification against an unseen desktop reference.

- Original Spanish introduction and about copy preserved.
- Mobile navigation hidden to match the design. Desktop navigation retained.
- Logo replaced by crisp paths extracted from the updated SVG.
- Mobile pond, fish and contact foliage extracted directly from that SVG, including water contours.
- Centered mobile headings and body copy; desktop retains wider, left-aligned reading layout.
- Project titles added: SAILTRIM, SUNNE and PARKE NATURA. Corrected the old Sunnie name to Sunne as shown in the reference.
- Three project columns on desktop; stacked 402:283 cards on mobile. Existing optimized project photos retained with green overlays.
- Contact introduction removed and separate name fields combined into Nombre y apellido on all sizes.
- Translucent contact fields over the illustrated foliage.
- Dark text on the pale teal submit button and footer improves contrast compared with the reference's white text.
- Responsive typography and flexible content heights allow text wrapping rather than forcing the exact PDF height.
- Keyboard focus, skip link, reduced-motion preference, native form validation and live submission status supported.
- Figtree is bundled locally with its OFL license; no external font request is required.

## Contact service (required before accepting messages)

No recipient or backend was provided in the original files. Send is disabled and an honest availability note is visible until configured.

Set `data-endpoint="https://YOUR-ENDPOINT"` on the form in index.html. The endpoint must accept a POST with JSON keys `nombre`, `email`, `mensaje`; support CORS for your site's origin; and return a 2xx status only after accepting the message. Configure server-side validation and abuse protection with your provider. Do not place API secrets in this site. The script enables sending when configured, validates fields, prevents duplicate submission, times out after 15 seconds, and preserves input after errors.

Project images are portfolio cards, not links: no project destination URLs were supplied.

## Files

- index.html — accessible Spanish content and form
- styles.css — desktop, tablet and mobile presentation
- script.js — navigation state and configurable form submission
- assets/ — existing images and extracted vector artwork


## Validation

Local asset paths, internal anchors, unique IDs and JavaScript syntax passed checks. Chromium rendering checked at widths 320, 402, 700, 701, 768, 980, 981, 1440 and 1920 pixels. All images loaded, no horizontal overflow, and no JavaScript page errors. Full-page screenshots visually reviewed on phone, tablet and desktop. Contact submission remains unconfigured and was not sent. Other browser engines were not tested.

## 2.0.1 correction

Restored the original right-side leaf artwork on desktop and tablet, with responsive edge positioning. Mobile continues to use the supplied SVG composition.

## 2.0.2 visual correction

Replaced the rotated low-resolution desktop fish with the exact transformed artwork and shadow extracted from the mobile SVG. Preserved its orientation, increased the desktop size to 350–440 pixels, and removed the 250-pixel tablet override. Reserved space for the right leaves beside the About text and kept navigation clear of the top artwork. Included browser screenshots in previews/.
