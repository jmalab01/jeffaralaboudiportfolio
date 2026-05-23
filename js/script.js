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

// ── Resume Viewer ─────────────────────────────────────────
const RESUME_PDF_URL = 'https://jmalab01.github.io/jeffaralaboudiportfolio/files/resume.html';

function openResumeModal() {
    // On mobile open directly in new tab — most reliable experience
    if (window.innerWidth <= 768 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.open(RESUME_PDF_URL, '_blank', 'noopener,noreferrer');
        return;
    }

    // Remove stale overlay if present
    const existing = document.getElementById('resumeViewerOverlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'resumeViewerOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.78);backdrop-filter:blur(4px);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px';

    overlay.innerHTML = `
        <div id="resumeModalBox" style="width:100%;max-width:860px;height:90vh;background:#fff;border-radius:14px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 24px 60px rgba(0,0,0,0.5);">
            <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 18px;background:#101D42;flex-shrink:0;">
                <span style="color:#fff;font-weight:600;font-size:0.95rem;letter-spacing:0.02em;">📄 Resume — Jeffar Alaboudi</span>
                <div style="display:flex;gap:10px;align-items:center;">
                    <a href="${RESUME_PDF_URL}" download="Jeffar_Alaboudi_Resume.html"
                       style="color:#89D2DC;font-size:0.82rem;text-decoration:none;padding:5px 12px;border:1px solid #89D2DC;border-radius:6px;"
                       onmouseover="this.style.background='rgba(137,210,220,0.15)'" onmouseout="this.style.background='transparent'">
                        ⬇ Download
                    </a>
                    <button onclick="closeResumeModal()"
                        style="background:none;border:none;color:#aaa;font-size:22px;cursor:pointer;line-height:1;padding:2px 6px;border-radius:6px;"
                        onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#aaa'"
                        aria-label="Close resume">✕</button>
                </div>
            </div>
            <!-- Loading spinner shown while iframe loads -->
            <div id="resumeSpinner" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:#f8f9ff;">
                <div style="width:44px;height:44px;border:4px solid #e0e0f0;border-top-color:#6564DB;border-radius:50%;animation:resumeSpin 0.8s linear infinite;"></div>
                <p style="color:#666;font-size:0.9rem;margin:0;">Loading resume…</p>
            </div>
            <iframe id="resumeIframe"
                style="flex:1;border:none;width:100%;display:none;"
                title="Resume"></iframe>
            <!-- Fallback shown if loading fails -->
            <div id="resumeFallback" style="flex:1;display:none;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:#f8f9ff;padding:32px;text-align:center;">
                <span style="font-size:3rem;">📄</span>
                <p style="color:#333;font-size:1rem;margin:0;font-weight:600;">Couldn\u0027t load the preview</p>
                <p style="color:#888;font-size:0.85rem;margin:0;">Try downloading it directly instead.</p>
                <a href="${RESUME_PDF_URL}" download="Jeffar_Alaboudi_Resume.html"
                   style="background:#6564DB;color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.9rem;">
                    ⬇ Download Resume
                </a>
                <button onclick="resumeRetry()" style="background:none;border:1px solid #6564DB;color:#6564DB;padding:8px 20px;border-radius:8px;cursor:pointer;font-size:0.85rem;">
                    ↻ Try Again
                </button>
            </div>
        </div>
        <style>@keyframes resumeSpin { to { transform: rotate(360deg); } }</style>`;

    overlay.addEventListener('click', e => { if (e.target === overlay) closeResumeModal(); });
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    resumeLoadIframe(1);
}

function resumeLoadIframe(attempt) {
    const iframe  = document.getElementById('resumeIframe');
    const spinner = document.getElementById('resumeSpinner');
    const fallback = document.getElementById('resumeFallback');
    if (!iframe) return;

    // Reset to spinner state
    spinner.style.display  = 'flex';
    iframe.style.display   = 'none';
    fallback.style.display = 'none';

    // Load HTML resume directly — no Google Docs Viewer needed
    const cacheBust = attempt > 1 ? '?t=' + Date.now() : '';
    const url = RESUME_PDF_URL + cacheBust;

    // Timeout — if iframe hasn't loaded in 10 s, retry or show fallback
    const timer = setTimeout(() => {
        if (attempt < 3) {
            resumeLoadIframe(attempt + 1);
        } else {
            spinner.style.display  = 'none';
            fallback.style.display = 'flex';
        }
    }, 10000);

    iframe.onload = () => {
        clearTimeout(timer);
        spinner.style.display = 'none';
        iframe.style.display  = 'flex';
    };

    iframe.src = url;
}

function resumeRetry() {
    resumeLoadIframe(1);
}

function closeResumeModal() {
    const overlay = document.getElementById('resumeViewerOverlay');
    if (overlay) {
        // Clear iframe src to stop any ongoing network request
        const iframe = document.getElementById('resumeIframe');
        if (iframe) iframe.src = '';
        overlay.remove();
    }
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeResumeModal(); });
// ─────────────────────────────────────────────────────────

console.log('Portfolio website loaded successfully!');
