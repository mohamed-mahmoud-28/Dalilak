// ==========================================
// DALILAK - Main JavaScript File (Home/Attractions Page)
// ==========================================

(function() {
    'use strict';

    // =================== CONSTANTS & ELEMENTS ===================
    const elements = {
        // Mobile Menu
        hamburgerBtn: document.getElementById('hamburgerBtn'),
        mobileMenu: document.getElementById('mobileMenu'),
        mobileMenuOverlay: document.getElementById('mobileMenuOverlay'),
        
        // Theme
        themeToggle: document.getElementById('theme-toggle'),
        html: document.documentElement,
        
        // Language
        langToggle: document.getElementById('lang-toggle'),
        
        // Dropdowns
        notificationBtn: document.getElementById('notificationBtn'),
        notificationDropdown: document.getElementById('notificationDropdown'),
        profileBtn: document.getElementById('profileBtn'),
        profileDropdown: document.getElementById('profileDropdown'),
        
        // Search
        searchContainer: document.getElementById('searchContainer'),
        
        // Navigation
        navLinks: document.querySelectorAll('.nav-link')
    };

    // =================== MOBILE MENU ===================
    const MobileMenu = {
        toggle() {
            elements.hamburgerBtn?.classList.toggle('active');
            elements.mobileMenu?.classList.toggle('active');
            elements.mobileMenuOverlay?.classList.toggle('active');
            
            const isActive = elements.mobileMenu?.classList.contains('active');
            document.body.style.overflow = isActive ? 'hidden' : '';
        },

        close() {
            elements.hamburgerBtn?.classList.remove('active');
            elements.mobileMenu?.classList.remove('active');
            elements.mobileMenuOverlay?.classList.remove('active');
            document.body.style.overflow = '';
        },

        init() {
            if (elements.hamburgerBtn) {
                elements.hamburgerBtn.addEventListener('click', this.toggle.bind(this));
            }
            
            if (elements.mobileMenuOverlay) {
                elements.mobileMenuOverlay.addEventListener('click', this.close.bind(this));
            }

            // Close menu when clicking on menu links
            if (elements.mobileMenu) {
                const menuLinks = elements.mobileMenu.querySelectorAll('a');
                menuLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        if (elements.mobileMenu?.classList.contains('active')) {
                            this.close();
                        }
                    });
                });
            }
        }
    };

    // =================== THEME MANAGEMENT ===================
    const ThemeManager = {
        toggle() {
            elements.html?.classList.toggle('dark');
            const theme = elements.html?.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('dalilak_theme', theme); // نفس الـ key في كل الصفحات
        },

        load() {
            const savedTheme = localStorage.getItem('dalilak_theme'); // نفس الـ key في كل الصفحات
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                elements.html?.classList.add('dark');
            } else {
                elements.html?.classList.remove('dark');
            }
        },

        init() {
            this.load();
            
            if (elements.themeToggle) {
                elements.themeToggle.addEventListener('click', this.toggle.bind(this));
            }
        }
    };

    // =================== LANGUAGE MANAGEMENT ===================
    const LanguageManager = {
        currentLang: localStorage.getItem('dalilak_language') || 'ar', // نفس الـ key في كل الصفحات

        updateContent() {
            // Update text content
            document.querySelectorAll('[data-en]').forEach(el => {
                const text = el.getAttribute(`data-${this.currentLang}`);
                if (text) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = text;
                    } else {
                        el.textContent = text;
                    }
                }
            });

            // Update placeholders
            document.querySelectorAll('[data-placeholder-en]').forEach(el => {
                const placeholder = el.getAttribute(`data-placeholder-${this.currentLang}`);
                if (placeholder) {
                    el.placeholder = placeholder;
                }
            });
        },

        apply() {
            elements.html?.setAttribute('dir', this.currentLang === 'ar' ? 'rtl' : 'ltr');
            elements.html?.setAttribute('lang', this.currentLang);
            
            if (elements.langToggle) {
                elements.langToggle.textContent = this.currentLang === 'en' ? 'EN' : 'ع';
            }
            
            this.updateContent();
            
            // Display console message
            this.displayConsoleMessage();
        },

        toggle() {
            this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
            localStorage.setItem('dalilak_language', this.currentLang); // نفس الـ key في كل الصفحات
            this.apply();
        },

        displayConsoleMessage() {
            console.clear();
            if (this.currentLang === 'ar') {
                console.log('%c🇪🇬 مرحباً بك في Dalilak! ', 'font-size: 20px; font-weight: bold; color: #136dec;');
                console.log('%cمنصة السفر والسياحة المصرية الذكية', 'font-size: 14px; color: #60a5fa;');
            } else {
                console.log('%c🇪🇬 Welcome to Dalilak! ', 'font-size: 20px; font-weight: bold; color: #136dec;');
                console.log('%cSmart Egyptian Travel & Tourism Platform', 'font-size: 14px; color: #60a5fa;');
            }
        },

        init() {
            this.apply();
            
            if (elements.langToggle) {
                elements.langToggle.addEventListener('click', this.toggle.bind(this));
            }
        }
    };

    // =================== DROPDOWN MANAGEMENT ===================
    const DropdownManager = {
        closeAll() {
            elements.notificationDropdown?.classList.remove('active');
            elements.profileDropdown?.classList.remove('active');
        },

        toggleNotification(e) {
            e?.stopPropagation();
            elements.notificationDropdown?.classList.toggle('active');
            elements.profileDropdown?.classList.remove('active');
        },

        toggleProfile(e) {
            e?.stopPropagation();
            elements.profileDropdown?.classList.toggle('active');
            elements.notificationDropdown?.classList.remove('active');
        },

        init() {
            // Notification dropdown
            if (elements.notificationBtn) {
                elements.notificationBtn.addEventListener('click', this.toggleNotification.bind(this));
            }

            // Profile dropdown
            if (elements.profileBtn) {
                elements.profileBtn.addEventListener('click', this.toggleProfile.bind(this));
            }

            // Close dropdowns when clicking outside
            document.addEventListener('click', (e) => {
                if (!elements.notificationBtn?.contains(e.target) && 
                    !elements.notificationDropdown?.contains(e.target) &&
                    !elements.profileBtn?.contains(e.target) && 
                    !elements.profileDropdown?.contains(e.target)) {
                    this.closeAll();
                }
            });

            // Prevent dropdown from closing when clicking inside
            [elements.notificationDropdown, elements.profileDropdown].forEach(dropdown => {
                dropdown?.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            });
        }
    };

    // =================== NAVIGATION ===================
    const Navigation = {

        init() {
            // Handle nav link clicks
            elements.navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    Navigation.setActive(this);
                });
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        
                        // Close mobile menu after clicking link
                        MobileMenu.close();
                    }
                });
            });
        }
    };

    // =================== SCROLL ANIMATIONS ===================
    const ScrollAnimations = {
        observerOptions: {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        },

        handleIntersection(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('animate-on-scroll')) {
                        entry.target.classList.add('animated');
                        
                        // Stagger child items
                        const staggerItems = entry.target.querySelectorAll('.stagger-item');
                        staggerItems.forEach((item, i) => {
                            setTimeout(() => {
                                item.classList.add('animated');
                            }, i * 150);
                        });
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        },

        init() {
            const observer = new IntersectionObserver(
                this.handleIntersection.bind(this),
                this.observerOptions
            );

            const animatedSections = document.querySelectorAll('.animate-on-scroll');
            animatedSections.forEach(section => observer.observe(section));
        }
    };

    // =================== SEARCH ===================
    const Search = {
        toggle() {
            elements.searchContainer?.classList.toggle('active');
        },

        init() {
            // Add search toggle functionality if needed
            // This can be expanded based on requirements
        }
    };

    // =================== UTILITY FUNCTIONS ===================
    const Utils = {
        // Debounce function for performance optimization
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Check if element is in viewport
        isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    };

    // =================== INITIALIZATION ===================
    const App = {
        init() {
            // Wait for DOM to be fully loaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', this.start.bind(this));
            } else {
                this.start();
            }
        },

        start() {
            console.log('🚀 Dalilak App Initialized');

            // Initialize all modules
            ThemeManager.init();
            LanguageManager.init();
            MobileMenu.init();
            DropdownManager.init();
            Navigation.init();
            ScrollAnimations.init();
            Search.init();

            // Add smooth scrolling behavior
            document.documentElement.style.scrollBehavior = 'smooth';

            // Handle window resize
            window.addEventListener('resize', Utils.debounce(() => {
                if (window.innerWidth > 1024) {
                    MobileMenu.close();
                }
            }, 250));

            // Close mobile menu on orientation change
            window.addEventListener('orientationchange', () => {
                MobileMenu.close();
            });
        }
    };

    // Start the application
    App.init();

    // Expose utilities to global scope if needed
    window.DalilakApp = {
        theme: ThemeManager,
        language: LanguageManager,
        menu: MobileMenu,
        utils: Utils
    };

})();

function logout() {
    alert('Logging out.....');
}