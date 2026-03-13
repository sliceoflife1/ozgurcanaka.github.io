/**
 * script.js - Portfolio Security & Logic Layer
 * Centrally handles icons, dynamic UI and image fallbacks.
 */

// 1. Tailwind Config (Moved from inline for CSP compliance)
window.tailwind.config = {
    theme: {
        extend: {
            colors: {
                cyber: {
                    light: '#f8fafc',
                    surface: '#ffffff',
                    border: '#e2e8f0',
                    text: '#0f172a',
                    muted: '#64748b'
                },
                accent: {
                    orange: '#ff4d00',
                    cyan: '#06b6d4',
                    indigo: '#4f46e5'
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'monospace']
            }
        }
    }
};

// 2. Image Error Handling (Secure Event Delegation)
document.addEventListener('error', function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        const img = event.target;
        // Check if we already tried the fallback to avoid infinite loops
        if (!img.dataset.fallbackApplied) {
            img.dataset.fallbackApplied = 'true';
            
            // Determine fallback based on image type
            if (img.alt.toLowerCase().includes('icon')) {
                img.src = 'https://placehold.co/128/ffffff/0f172a?text=OX';
            } else {
                img.src = 'https://placehold.co/800x600/e2e8f0/0f172a?text=App+Preview';
            }
        }
    }
}, true); // Capture phase to catch error events which don't bubble

// 3. i18n Language Management
const i18n = {
    current: localStorage.getItem('portfolio-lang') || 'en',
    
    init() {
        this.updateDOM();
        this.attachListeners();
    },
    
    attachListeners() {
        const switcher = document.getElementById('lang-switcher');
        if (switcher) {
            switcher.addEventListener('click', () => this.toggle());
        }
    },
    
    toggle() {
        this.current = this.current === 'en' ? 'tr' : 'en';
        localStorage.setItem('portfolio-lang', this.current);
        this.updateDOM();
    },
    
    updateDOM() {
        // Update all elements with data-en/data-tr attributes
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = el.getAttribute(`data-${this.current}`);
        });
        
        // Update language switcher label
        const label = document.getElementById('current-lang');
        if (label) {
            label.textContent = this.current === 'en' ? 'TR' : 'EN';
        }
        
        // Update HTML lang attribute
        document.documentElement.lang = this.current === 'en' ? 'en' : 'tr';
    }
};

// 4. Initialize Icons & Interactive Elements
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }
    i18n.init();
});
