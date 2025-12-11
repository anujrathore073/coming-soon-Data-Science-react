# Anuj Rathore - Portfolio

A modern, futuristic portfolio website built with React showcasing Data Science & AI expertise.

## Features

- ⚡ **Modern Design** - Futuristic glassmorphism UI with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎨 **Beautiful Animations** - Smooth transitions and blinking elements
- 🚀 **React Components** - Modular and maintainable component structure
- 💻 **Data Science Focus** - Showcases ML, Data Science, AI, and Data Visualization

## Project Structure

```
react-app/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   ├── Header.js       # Header with name badge and title
│   │   ├── Features.js     # Feature boxes component
│   │   ├── CallToAction.js # Email signup form
│   │   ├── SocialLinks.js  # Social media links
│   │   └── Footer.js       # Footer component
│   ├── App.js              # Main App component
│   ├── App.css             # App styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
└── package.json            # Dependencies
```

## Installation

1. Navigate to the project directory:
```bash
cd react-app
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## Building for Production

Create an optimized production build:
```bash
npm build
```

## Components

- **Header** - Displays name badge, title with blinking dots, and subtitle
- **Features** - Showcase 4 feature boxes (Machine Learning, Data Science, AI Innovation, Data Visualization)
- **CallToAction** - Email signup form with validation
- **SocialLinks** - Links to GitHub, LinkedIn, Twitter, Email
- **Footer** - Copyright and tagline

## Styling

All styles are in `src/index.css` with:
- CSS variables for theming
- Responsive breakpoints
- Smooth animations and transitions
- Glassmorphism effects with backdrop blur

## Customization

To customize the content:

1. Edit `src/components/Header.js` for the header text
2. Update feature list in `src/components/Features.js`
3. Modify social links in `src/components/SocialLinks.js`
4. Change colors in the `:root` section of `src/index.css`

## Technologies

- React 18
- CSS3 with animations
- Responsive design

Enjoy your new React portfolio!
