# Portfolio Website Setup Guide

This guide will walk you through setting up and deploying your portfolio website step by step.

## 🚀 Quick Setup (5 minutes)

### 1. Prepare Your Images
First, you need to add your personal images to the website:

```
assets/images/
├── profile-photo.jpg     ← Your professional headshot
├── about-photo.jpg       ← Photo for about section
├── favicon.ico          ← Website icon
└── projects/
    ├── project1.jpg     ← E-commerce project screenshot
    ├── project2.jpg     ← Task management app screenshot
    └── project3.jpg     ← Weather app screenshot
```

**Image Requirements:**
- **Profile Photo**: 300x300px, professional headshot
- **About Photo**: 600x400px, work environment photo
- **Project Images**: 800x600px, project screenshots/mockups
- **Favicon**: 32x32px, ICO format

### 2. Customize Content
Edit `index.html` to update your personal information:

- **Name**: Replace "Pac Nolasco" with your name
- **Title**: Update your professional title
- **Description**: Write your personal bio
- **Experience**: Add your work history
- **Projects**: Update with your actual projects
- **Skills**: List your technical skills
- **Contact**: Add your real contact information

### 3. Deploy to GitHub Pages

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

# Push to GitHub
git push -u origin main

# Enable GitHub Pages in repository settings
# Go to Settings > Pages > Source: Deploy from branch > main
```

Your website will be live at: `https://YOUR_USERNAME.github.io`

## 🎨 Customization Guide

### Colors and Theme
Edit `assets/css/style.css` to change the color scheme:

```css
/* Primary colors */
.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Secondary colors */
.btn-secondary {
    color: #667eea;
    border: 2px solid #667eea;
}

/* Text colors */
.section-title {
    color: #2d3748;
}
```

### Typography
Change fonts in `assets/css/style.css`:

```css
/* Import new fonts from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap');

/* Apply to body */
body {
    font-family: 'Your Font', sans-serif;
}
```

### Layout and Spacing
Adjust spacing and layout:

```css
/* Section padding */
.about, .experience, .projects, .skills, .contact {
    padding: 100px 0; /* Increase/decrease as needed */
}

/* Container width */
.container {
    max-width: 1200px; /* Adjust for different layouts */
}
```

## 📱 Mobile Optimization

The website is already mobile-responsive, but you can customize:

```css
/* Mobile breakpoints */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem; /* Adjust mobile font sizes */
    }
}
```

## 🔧 Advanced Customization

### Adding New Sections
To add a new section (e.g., "Blog" or "Testimonials"):

1. **Add HTML** in `index.html`:
```html
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">Blog</h2>
        <!-- Your content here -->
    </div>
</section>
```

2. **Add CSS** in `assets/css/style.css`:
```css
.blog {
    padding: 100px 0;
    background: #f7fafc;
}
```

3. **Add navigation link**:
```html
<li class="nav-item">
    <a href="#blog" class="nav-link">Blog</a>
</li>
```

### Adding Animations
Customize animations in `assets/js/main.js`:

```javascript
// Add new animation
function initCustomAnimation() {
    const elements = document.querySelectorAll('.custom-element');
    elements.forEach(el => {
        el.classList.add('fade-in');
    });
}
```

### Form Integration
Replace the contact form with a real backend:

```javascript
// Replace in initContactForm()
fetch('/api/contact', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => {
    showNotification('Message sent successfully!', 'success');
});
```

## 🌐 Deployment Options

### GitHub Pages (Recommended)
- **Pros**: Free, easy, integrated with GitHub
- **Cons**: Limited to static content
- **Best for**: Portfolios, documentation, simple websites

### Netlify
- **Pros**: Free tier, form handling, continuous deployment
- **Cons**: Limited bandwidth on free tier
- **Best for**: Dynamic forms, larger projects

### Vercel
- **Pros**: Free tier, excellent performance, easy deployment
- **Cons**: Limited serverless functions on free tier
- **Best for**: React/Next.js projects, API integration

### Traditional Hosting
- **Pros**: Full control, custom domains, databases
- **Cons**: Cost, maintenance required
- **Best for**: Complex applications, e-commerce

## 📊 Performance Optimization

### Image Optimization
```bash
# Install image optimization tools
npm install -g imagemin-cli

# Optimize images
imagemin assets/images/* --out-dir=assets/images/optimized
```

### CSS/JS Minification
```bash
# Install minification tools
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o assets/css/style.min.css assets/css/style.css

# Minify JavaScript
uglifyjs assets/js/main.js -o assets/js/main.min.js
```

### Lazy Loading
Images are already set up with lazy loading. Add to new images:

```html
<img data-src="your-image.jpg" alt="Description" class="lazy">
```

## 🔍 SEO Optimization

### Meta Tags
Update meta tags in `index.html`:

```html
<meta name="description" content="Your personal description">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">
```

### Structured Data
Add JSON-LD for better search results:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Your Title",
  "url": "https://yoursite.com"
}
</script>
```

## 🧪 Testing

### Cross-Browser Testing
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Testing
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/

### Accessibility Testing
- **WAVE**: https://wave.webaim.org/
- **axe DevTools**: Browser extension
- **Screen reader testing**: NVDA, JAWS, VoiceOver

## 🚨 Troubleshooting

### Common Issues

**Images not loading:**
- Check file paths and names
- Ensure images are in correct directories
- Verify file permissions

**CSS not applying:**
- Check file paths in HTML
- Clear browser cache
- Verify CSS syntax

**JavaScript errors:**
- Check browser console for errors
- Verify file paths
- Test in different browsers

**Mobile issues:**
- Test responsive breakpoints
- Check viewport meta tag
- Verify touch interactions

### Getting Help

1. **Check the console**: Look for JavaScript errors
2. **Validate HTML**: Use W3C validator
3. **Validate CSS**: Use W3C CSS validator
4. **Search issues**: Check GitHub issues
5. **Ask for help**: Create a GitHub issue

## 📚 Additional Resources

- **HTML5**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS3**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **GitHub Pages**: https://pages.github.com/
- **Web Performance**: https://web.dev/performance/

## 🎯 Next Steps

After setting up your portfolio:

1. **Add real projects** with actual screenshots
2. **Update content** regularly
3. **Add blog posts** if desired
4. **Integrate analytics** (Google Analytics)
5. **Set up custom domain** if needed
6. **Add more interactive features**
7. **Optimize for search engines**
8. **Test on various devices**

---

**Need help?** Create an issue on GitHub or contact the maintainer.

*Happy coding! 🚀*
