# Learnspace — React learning dashboard

A course dashboard for practicing reusable cards, progress indicators, component composition, and React state. Filter courses and mark them complete or restart them.

## Run it on your computer

1. Install [Node.js](https://nodejs.org/).
2. Open a terminal in this repository.
3. Run `npm install` once.
4. Run `npm run dev`, then open the local address printed in the terminal.
5. Press `Ctrl+C` to stop the server.

## Learn the project structure

- `src/App.jsx` stores course data, calculates summary numbers, filters courses, and combines the page components.
- `src/components/CourseCard.jsx` displays one course and a progress bar.
- `src/components/MetricCard.jsx` reuses the same structure for dashboard numbers.
- `src/theme.css` styles the sidebar, dashboard, and mobile layouts.

Try choosing a course filter or clicking Continue/Restart. Add a course to `starterCourses` to see the list update.

## Scripts

- `npm run dev` — start development.
- `npm run build` — create the production app in `dist/`.
- `npm run preview` — preview the production build.
