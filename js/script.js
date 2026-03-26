// Typing animation for home page
function typeWriter() {
    const textElement = document.querySelector('.typing-text');
    const cursorElement = document.querySelector('.cursor');
    if (!textElement || !cursorElement) return; // Only run on home page
    
    const part1 = "Hello, I'm ";
    const part2 = "Jeffar Alaboudi";
    let currentIndex = 0;
    let typingPart2 = false;
    
    // Clear initial content
    textElement.innerHTML = '';
    
    function type() {
        if (!typingPart2) {
            // Typing first part in white
            if (currentIndex < part1.length) {
                textElement.innerHTML += part1.charAt(currentIndex);
                currentIndex++;
                
                const typingSpeed = Math.random() * 40 + 80;
                setTimeout(type, typingSpeed);
            } else {
                // Finished part 1, pause and switch cursor color
                currentIndex = 0;
                typingPart2 = true;
                
                // Change cursor color to blue
                cursorElement.style.color = 'var(--light-blue)';
                
                // Pause before typing part 2
                setTimeout(type, 300);
            }
        } else {
            // Typing second part in blue
            if (currentIndex < part2.length) {
                // Add to highlight span
                if (currentIndex === 0) {
                    textElement.innerHTML += '<span class="highlight">';
                }
                
                const highlightSpan = textElement.querySelector('.highlight');
                if (highlightSpan) {
                    highlightSpan.innerHTML += part2.charAt(currentIndex);
                }
                
                currentIndex++;
                
                const typingSpeed = Math.random() * 40 + 80;
                setTimeout(type, typingSpeed);
            } else {
                // Finished typing, remove cursor after delay
                setTimeout(() => {
                    if (cursorElement) {
                        cursorElement.style.display = 'none';
                    }
                }, 1000);
            }
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 500);
}

// Run typing animation on page load
document.addEventListener('DOMContentLoaded', typeWriter);

// Page title typing animation for all pages
function pageTitleTyping() {
    const pageTitle = document.querySelector('.page-title');
    if (!pageTitle || pageTitle.classList.contains('typing-complete')) return;
    
    const originalText = pageTitle.textContent;
    pageTitle.textContent = '';
    
    let index = 0;
    
    function typeChar() {
        if (index < originalText.length) {
            pageTitle.textContent += originalText.charAt(index);
            index++;
            
            const speed = Math.random() * 50 + 50;
            setTimeout(typeChar, speed);
        } else {
            // Typing complete, hide cursor after a delay
            setTimeout(() => {
                pageTitle.classList.add('typed');
                pageTitle.classList.add('typing-complete');
            }, 500);
        }
    }
    
    setTimeout(typeChar, 200);
}

// Run page title animation on all pages
document.addEventListener('DOMContentLoaded', pageTitleTyping);

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const menu   = document.querySelector('.nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
        const isOpen = menu.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    menu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Active nav link highlighting based on current page
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

console.log('Portfolio website loaded successfully!');
