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
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ── Resume Modal ──────────────────────────────────────────
const RESUME_PDF_URL = 'https://jmalab01.github.io/jeffaralaboudiportfolio/resume.pdf';

function openResumeModal() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'resumeViewerOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(10,15,35,0.92);display:flex;align-items:center;justify-content:center;padding:1rem;';

    // Modal box
    const box = document.createElement('div');
    box.style.cssText = 'width:100%;max-width:900px;height:92vh;display:flex;flex-direction:column;border-radius:16px;overflow:hidden;box-shadow:0 32px 80px rgba(0,0,0,0.6);';

    // Header bar
    const header = document.createElement('div');
    header.style.cssText = 'background:linear-gradient(135deg,#101D42 0%,#1a2a5e 100%);padding:14px 20px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;border-bottom:1px solid rgba(101,100,219,0.3);';
    header.innerHTML = `
        <span style="color:#fff;font-weight:700;font-size:1rem;display:flex;align-items:center;gap:10px;">
            <i class="fas fa-file-alt" style="color:#89D2DC"></i> Jeffar Alaboudi — Resume
        </span>
        <div style="display:flex;gap:10px;align-items:center;">
            <a href="${RESUME_PDF_URL}" download="Jeffar_Alaboudi_Resume.pdf"
               style="background:#6564DB;color:#fff;border:none;padding:8px 18px;border-radius:8px;cursor:pointer;font-size:0.85rem;font-weight:600;display:flex;align-items:center;gap:7px;text-decoration:none;">
                <i class="fas fa-download"></i> Download
            </a>
            <button onclick="closeResumeModal()" style="background:rgba(255,255,255,0.1);border:none;color:#fff;width:34px;height:34px;border-radius:8px;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;">
                <i class="fas fa-times"></i>
            </button>
        </div>`;

    // iframe using Google Docs Viewer
    const frame = document.createElement('iframe');
    frame.src = 'https://docs.google.com/viewer?url=' + encodeURIComponent(RESUME_PDF_URL) + '&embedded=true';
    frame.style.cssText = 'flex:1;width:100%;border:none;background:#525659;';
    frame.title = 'Jeffar Alaboudi Resume';

    box.appendChild(header);
    box.appendChild(frame);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    // Close on backdrop click
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeResumeModal();
    });
}

function closeResumeModal() {
    const overlay = document.getElementById('resumeViewerOverlay');
    if (overlay) overlay.remove();
    document.body.style.overflow = '';
}

// Close resume modal on overlay click or Escape key
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('resumeModal');
    if (!modal) return;
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeResumeModal();
    });
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeResumeModal();
});
// ─────────────────────────────────────────────────────────

console.log('Portfolio website loaded successfully!');
