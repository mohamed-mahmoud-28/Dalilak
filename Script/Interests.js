// ==========================================
// DALILAK - Interests Selection Page JavaScript
// ==========================================

(function() {
    'use strict';

    // =================== STORAGE KEYS ===================
    const STORAGE = {
        LANGUAGE: 'dalilak_language',
        THEME: 'dalilak_theme',
        USER_INTERESTS: 'dalilak_user_interests'
    };

    // =================== STATE ===================
    let currentLang = localStorage.getItem(STORAGE.LANGUAGE) || 'en';
    let selectedInterests = new Set();

    // =================== ELEMENTS ===================
    const elements = {
        html: document.documentElement,
        langToggle: document.getElementById('lang-toggle'),
        langLabel: document.getElementById('lang-label'),
        themeToggle: document.getElementById('theme-toggle'),
        themeIcon: document.getElementById('theme-icon'),
        interestCards: document.querySelectorAll('.interest-card'),
        selectedCount: document.getElementById('selected-count'),
        continueBtn: document.getElementById('continueBtn'),
        backBtn: document.getElementById('backBtn')
    };

    // =================== LANGUAGE MANAGEMENT ===================
    const LanguageManager = {
        updateContent() {
            document.querySelectorAll('[data-en][data-ar]').forEach(el => {
                const text = el.getAttribute(`data-${currentLang}`);
                if (text) {
                    el.textContent = text;
                }
            });
        },

        apply() {
            elements.html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            elements.html.setAttribute('lang', currentLang);
            
            if (elements.langLabel) {
                elements.langLabel.textContent = currentLang === 'en' ? 'EN' : 'ع';
            }
            
            this.updateContent();
        },

        toggle() {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            localStorage.setItem(STORAGE.LANGUAGE, currentLang);
            this.apply();
        },

        init() {
            this.apply();
            
            if (elements.langToggle) {
                elements.langToggle.addEventListener('click', () => this.toggle());
            }
        }
    };

    // =================== THEME MANAGEMENT ===================
    const ThemeManager = {
        toggle() {
            elements.html.classList.toggle('dark');
            const isDark = elements.html.classList.contains('dark');
            const theme = isDark ? 'dark' : 'light';
            
            localStorage.setItem(STORAGE.THEME, theme);
            
            if (elements.themeIcon) {
                elements.themeIcon.textContent = isDark ? 'dark_mode' : 'light_mode';
            }
        },

        load() {
            const savedTheme = localStorage.getItem(STORAGE.THEME) || 'light';
            
            if (savedTheme === 'dark') {
                elements.html.classList.add('dark');
                if (elements.themeIcon) {
                    elements.themeIcon.textContent = 'dark_mode';
                }
            } else {
                elements.html.classList.remove('dark');
                if (elements.themeIcon) {
                    elements.themeIcon.textContent = 'light_mode';
                }
            }
        },

        init() {
            this.load();
            
            if (elements.themeToggle) {
                elements.themeToggle.addEventListener('click', () => this.toggle());
            }
        }
    };

    // =================== INTERESTS SELECTION ===================
    const InterestsManager = {
        updateUI() {
            // Update counter
            if (elements.selectedCount) {
                elements.selectedCount.textContent = selectedInterests.size;
            }

            // Enable/disable continue button
            if (elements.continueBtn) {
                elements.continueBtn.disabled = selectedInterests.size < 3;
            }
        },

        toggleInterest(interest, card) {
            if (selectedInterests.has(interest)) {
                selectedInterests.delete(interest);
                card.classList.remove('selected');
            } else {
                selectedInterests.add(interest);
                card.classList.add('selected');
            }

            this.updateUI();
        },

        saveInterests() {
            const interestsArray = Array.from(selectedInterests);
            localStorage.setItem(STORAGE.USER_INTERESTS, JSON.stringify(interestsArray));
        },

        handleContinue() {
            if (selectedInterests.size >= 3) {
                this.saveInterests();
                
                const message = currentLang === 'en'
                    ? `Great! You selected ${selectedInterests.size} interests.`
                    : `رائع! لقد اخترت ${selectedInterests.size} اهتمامات.`;
                
                console.log(message);
                window.location.href = "BudgetSin.html";
            }
        },

        handleBack() {
            window.location.href = "index.html";
        },

        init() {
            // Add click handlers to interest cards
            if (elements.interestCards) {
                elements.interestCards.forEach(card => {
                    card.addEventListener('click', () => {
                        const interest = card.dataset.interest;
                        if (interest) {
                            this.toggleInterest(interest, card);
                        }
                    });
                });
            }

            // Continue button
            if (elements.continueBtn) {
                elements.continueBtn.addEventListener('click', () => this.handleContinue());
            }

            // Back button
            if (elements.backBtn) {
                elements.backBtn.addEventListener('click', () => this.handleBack());
            }

            // Initialize UI
            this.updateUI();
        }
    };

    // =================== INITIALIZATION ===================
    const App = {
        init() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.start());
            } else {
                this.start();
            }
        },

        start() {
            console.log('🎯 Dalilak Interests Page Initialized');

            // Initialize all modules
            ThemeManager.init();
            LanguageManager.init();
            InterestsManager.init();
        }
    };

    // Start the application
    App.init();

})();