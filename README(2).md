# Aurelia Hospital

A responsive frontend demonstration for a modern hospital website and patient portal, with a premium depth-first visual direction.

## Features

- Hospital landing page with responsive navigation
- Medical services and specialist doctor directory
- Doctor search and specialty filtering
- Appointment scheduling interface
- Hospital bed availability and occupancy summaries
- Patient, doctor, and administrator dashboard views
- Billing, reports, notifications, modals, and toast messages
- 3D-tilted hero scene with layered hospital imagery
- Multi-facility care network section for the flagship hospital, specialist offices, diagnostics lab, and virtual-care studio
- Glassmorphism telemetry panels, animated gradient orbs, and perspective hover cards
- Pointer parallax on capable devices with reduced-motion and touch fallbacks
- Responsive layouts for desktop, tablet, and mobile screens

## Project Structure

```text
Aurelia-Hospital/
|-- index(5).html Page structure and content
|-- styles.css   Layout, responsive styles, and visual design
|-- script.js    Interactive behavior and demo data
|-- README(2).md Project documentation
```

## Run Locally

No build tools or dependencies are required.

1. Open `index(5).html` directly in a browser, or
2. Serve the folder with a local static server and open the provided URL.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Important Note

This is a frontend-only demonstration. Services, doctors, bed availability, dashboard values, and billing information are stored in `script.js`. There is currently no backend, database, authentication, or real-time hospital integration.

## Customization

- Update page content in `index(5).html`.
- Update colors, layout, and responsive rules in `styles.css`.
- Update demo records and interactions in `script.js`.

## Notes on the visual layer

The homepage uses remote Unsplash image URLs for the hero and doctor directory, so an internet connection is needed to display those photos. The interface remains usable if the photos are unavailable, and all motion is automatically minimized when the user enables reduced motion.
