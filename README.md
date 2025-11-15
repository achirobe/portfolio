# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Sections for About, Education, Experience, Research, Publications, Teaching, and Contact
- Easy to customize and deploy

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Customization

1. **Update Personal Information**: Edit the component files in `src/components/` to add your specific details
2. **Add Your CV**: Place your CV PDF in the `public/` folder
3. **Update Colors**: Modify the color scheme in `tailwind.config.js`
4. **Add Photos**: Place images in the `public/images/` folder

## Deployment

### GitHub Pages (with .me domain)

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Configure your .me domain in GitHub repository settings

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM

## License

MIT