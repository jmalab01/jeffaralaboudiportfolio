# Jeffar Alaboudi - College Portfolio (Multi-Page)

A modern, responsive multi-page portfolio website showcasing college projects and achievements.

## 📁 File Structure

```
portfolio/
├── index.html          # Home page with hero section
├── about.html          # About page with bio and interests
├── projects.html       # Projects showcase page
├── skills.html         # Skills and technologies page
├── education.html      # Education and coursework page
├── contact.html        # Contact form and information
├── css/
│   └── styles.css      # All styling for the website
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # This file
```

## 🎯 Pages Overview

### 1. Home (index.html)
- Hero section with your name and title
- Call-to-action buttons
- Navigation to all sections

### 2. About (about.html)
- Personal bio and journey
- Statistics (projects, technologies, commitment)
- Areas of interest grid
- Professional photo placeholder

### 3. Projects (projects.html)
- Grid of 6 sample projects
- Project cards with icons, descriptions, and tags
- Links to demos and code repositories

### 4. Skills (skills.html)
- Four categories of skills:
  - Programming Languages
  - Web Development
  - Database & Tools
  - Data Science & ML
- Visual progress bars for each skill

### 5. Education (education.html)
- Timeline of academic achievements
- University information
- Coursework badges
- Key achievements list

### 6. Contact (contact.html)
- Contact information (email, phone, location)
- Social media links
- Contact form
- Interactive elements

## 🎨 Features

- **Multi-page Navigation**: Each section is on its own page
- **Active Page Indicator**: Current page highlighted in navigation
- **Responsive Design**: Works on all device sizes
- **Consistent Navigation**: Same navbar on every page
- **Modern UI**: Clean, professional design
- **Font Awesome Icons**: Beautiful icons throughout
- **Smooth Animations**: Hover effects and transitions

## ✏️ Customization Guide

### Update Your Information

1. **Personal Details**: Search and replace "Jeffar Alaboudi" with your name
2. **Contact Info**: Edit `contact.html` with your real contact details
3. **Projects**: Update project cards in `projects.html`
4. **Skills**: Adjust skill levels in `skills.html`
5. **Education**: Update university and dates in `education.html`

### Change Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #3498db;    /* Main brand color */
    --secondary-color: #2c3e50;  /* Dark text color */
    --accent-color: #e74c3c;     /* Accent highlights */
}
```

### Add Your Photo

Replace the placeholder in `about.html`:

```html
<div class="about-image">
    <img src="path/to/your/photo.jpg" alt="Your Name">
</div>
```

### Update Projects

Each project card follows this structure:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Description here</p>
        <div class="project-tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
        </div>
        <div class="project-links">
            <a href="demo-url" class="project-link">Demo</a>
            <a href="github-url" class="project-link">Code</a>
        </div>
    </div>
</div>
```

## 🚀 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push all files
3. Go to Settings → Pages
4. Select main branch
5. Your site: `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the entire folder to Netlify
2. Site goes live immediately

### Other Options
- Vercel
- Cloudflare Pages
- Firebase Hosting

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid and Flexbox
- **JavaScript**: Interactive features
- **Font Awesome**: Icon library

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🎓 Tips for College Portfolio

1. **Keep it Updated**: Add new projects as you complete them
2. **Real Content**: Replace all placeholder text
3. **GitHub Links**: Link to your actual GitHub repositories
4. **Resume Download**: Add a downloadable PDF resume
5. **Analytics**: Add Google Analytics to track visitors
6. **SEO**: Update meta descriptions in each HTML file

## 📝 To-Do Checklist

- [ ] Replace placeholder name with your name
- [ ] Add your photo to About page
- [ ] Update contact information
- [ ] Add real project descriptions and links
- [ ] Adjust skill percentages to match reality
- [ ] Update education details
- [ ] Add social media links
- [ ] Test all navigation links
- [ ] Test responsive design on mobile
- [ ] Deploy to hosting platform

## 🆘 Need Help?

- Font Awesome icons: https://fontawesome.com/icons
- Color schemes: https://coolors.co
- Free images: https://unsplash.com

## 📄 License

Feel free to use this template for your personal portfolio!

---

**Built with ❤️ for showcasing college achievements**

Last Updated: February 2026
