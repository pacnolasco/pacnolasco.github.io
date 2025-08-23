// Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initSmoothScrolling();
    initContactForm();
    initScrollEffects();
    initTypingEffect();
    initProjectFilters();
    initSkillAnimations();
    initLazyLoading();
    initProgressBar();
    initRegionFilter();
    
    console.log('All functionality initialized');
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.99)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.99)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            showNotification('Sending message...', 'info');
            
            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            }, 2000);
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#4299e1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Lightweight scroll effects and animations
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .about-content, .contact-content, .testimonial-card');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Add lightweight CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.4s ease, transform 0.4s ease;
        }
        
        .fade-in.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Typing effect for hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const originalText = heroTitle.innerHTML;
    const highlightSpan = heroTitle.querySelector('.highlight');
    
    if (highlightSpan) {
        const highlightText = highlightSpan.textContent;
        highlightSpan.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < highlightText.length) {
                highlightSpan.textContent += highlightText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
}

// Project filtering functionality
function initProjectFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    console.log('Project filter buttons found:', categoryButtons.length);
    console.log('Project cards found:', projectCards.length);
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const selectedCategory = this.getAttribute('data-category');
            console.log('Selected category:', selectedCategory);
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter project cards with animation
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    // Show card with fade-in animation
                    card.classList.remove('hidden');
                    card.classList.add('fade-in');
                    setTimeout(() => {
                        card.classList.remove('fade-out');
                    }, 50);
                } else {
                    // Hide card with fade-out animation
                    card.classList.add('fade-out');
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
}

// Skill animations
function initSkillAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Lazy loading for images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Parallax effect for hero section
function initParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Initialize parallax if needed
// initParallaxEffect();

/* Removed particle effects for better performance */

// Progress bar effect
function initProgressBar() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

/* Removed custom cursor for better performance */

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: Throttle scroll events
const throttledScrollHandler = debounce(function() {
    // Handle scroll events here if needed
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Add loading state to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') && !e.target.classList.contains('filter-btn')) {
        const button = e.target;
        const originalText = button.textContent;
        
        button.textContent = 'Loading...';
        button.disabled = true;
        
        // Reset button after a delay (replace with actual async operation)
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    }
});

// Experience card toggle functionality
function toggleExperience(header) {
    const card = header.closest('.experience-card');
    const isExpanded = card.classList.contains('expanded');
    
    // Close all other cards
    const allCards = document.querySelectorAll('.experience-card');
    allCards.forEach(otherCard => {
        if (otherCard !== card) {
            otherCard.classList.remove('expanded');
        }
    });
    
    // Toggle current card
    if (isExpanded) {
        card.classList.remove('expanded');
    } else {
        card.classList.add('expanded');
    }
}

// Region filter functionality
function initRegionFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    console.log('Filter buttons found:', filterButtons.length);
    console.log('Timeline items found:', timelineItems.length);
    
    // Method 1: Direct event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const selectedRegion = this.getAttribute('data-region');
            console.log('Selected region:', selectedRegion);
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter timeline items
            timelineItems.forEach(item => {
                const itemRegion = item.getAttribute('data-region');
                console.log('Item region:', itemRegion, 'Selected:', selectedRegion);
                
                if (selectedRegion === 'all' || itemRegion === selectedRegion) {
                    item.classList.remove('filtered-out');
                    console.log('Showing item:', itemRegion);
                } else {
                    item.classList.add('filtered-out');
                    console.log('Hiding item:', itemRegion);
                }
            });
            
            // Animate timeline line
            animateTimelineLine();
        });
    });
    
    // Method 2: Event delegation as fallback
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn') || e.target.closest('.filter-btn')) {
            const button = e.target.classList.contains('filter-btn') ? e.target : e.target.closest('.filter-btn');
            const selectedRegion = button.getAttribute('data-region');
            
            console.log('Event delegation - Selected region:', selectedRegion);
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter timeline items
            timelineItems.forEach(item => {
                const itemRegion = item.getAttribute('data-region');
                
                if (selectedRegion === 'all' || itemRegion === selectedRegion) {
                    item.classList.remove('filtered-out');
                } else {
                    item.classList.add('filtered-out');
                }
            });
            
            // Animate timeline line
            animateTimelineLine();
        }
    });
}

// Animate timeline line based on visible items
function animateTimelineLine() {
    const timelineLine = document.querySelector('.timeline-line');
    const visibleItems = document.querySelectorAll('.timeline-item:not(.filtered-out)');
    
    if (visibleItems.length > 0) {
        timelineLine.style.opacity = '1';
        timelineLine.style.transform = 'translateX(-50%) scaleY(1)';
    } else {
        timelineLine.style.opacity = '0.3';
        timelineLine.style.transform = 'translateX(-50%) scaleY(0.5)';
    }
}

// Console welcome message
console.log(`
%cWelcome to Pac Nolasco's Portfolio! 🚀
%c
%cThis website was built with modern web technologies and best practices.
%cFeel free to explore the code and get in touch!
%c
%cGitHub: https://github.com/pacnolasco
%cPortfolio: https://pacnolasco.github.io
`,
'color: #667eea; font-size: 18px; font-weight: bold;',
'',
'color: #4a5568; font-size: 14px;',
'color: #4a5568; font-size: 14px;',
'',
'color: #667eea; font-size: 12px;',
'color: #667eea; font-size: 12px;'
);
