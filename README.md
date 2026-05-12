# My Portfolio

Personal portfolio built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).

## Tech Stack

- **Vite** - Fast, modern build tool
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Pages** - Hosting

## Installation

```bash
npm install
```

## Available Scripts

### `npm run dev`

Starts the development server at [http://localhost:5173](http://localhost:5173).

```bash
npm run dev
```

### `npm run build`

Builds the app for production into the `dist` folder.

```bash
npm run build
```

### `npm run preview`

Previews the production build locally.

```bash
npm run preview
```

### `npm run deploy`

Builds and deploys to GitHub Pages.

```bash
npm run deploy
```

## Project Structure

```
.
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies and scripts
├── public/             # Static assets
│   └── code.ico        # Favicon
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # Main component
│   └── index.css       # Tailwind CSS import
└── dist/               # Production build output (generated)
```

## Deployment

The portfolio is deployed to [https://thisisitz.github.io](https://thisisitz.github.io) with:

```bash
npm run deploy
```

## License

Free to use and modify.
