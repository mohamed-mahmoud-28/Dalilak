// ==========================================
// DALILAK - Budget Selection Page JavaScript
// ==========================================

(function() {
    'use strict';

    // =================== STORAGE KEYS ===================
    const STORAGE = {
        LANGUAGE: 'dalilak_language',
        THEME: 'dalilak_theme',
        USER_BUDGET: 'dalilak_user_budget'
    };

    // =================== STATE ===================
    let currentLang = localStorage.getItem(STORAGE.LANGUAGE) || 'en';

    // =================== ELEMENTS ===================
    const elements = {
        html: document.documentElement,
        langToggle: document.getElementById('lang-toggle'),
        themeToggle: document.getElementById('theme-toggle'),
        budgetSlider: document.getElementById('budget-slider'),
        budgetValue: document.getElementById('budget-value'),
        completeBtn: document.getElementById('completeBtn'),
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
            
            if (elements.langToggle) {
                elements.langToggle.textContent = currentLang === 'en' ? 'EN' : 'ع';
            }
            
            this.updateContent();
            
            // Update slider value display after language change
            if (BudgetManager) {
                BudgetManager.updateDisplay();
            }
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
            const theme = elements.html.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem(STORAGE.THEME, theme);
        },

        load() {
            const savedTheme = localStorage.getItem(STORAGE.THEME) || 'light';
            
            if (savedTheme === 'dark') {
                elements.html.classList.add('dark');
            } else {
                elements.html.classList.remove('dark');
            }
        },

        init() {
            this.load();
            
            if (elements.themeToggle) {
                elements.themeToggle.addEventListener('click', () => this.toggle());
            }
        }
    };

    // =================== BUDGET MANAGEMENT ===================
    const BudgetManager = {
        updateDisplay() {
            if (!elements.budgetSlider || !elements.budgetValue) return;

            const value = elements.budgetSlider.value;
            const min = elements.budgetSlider.min;
            const max = elements.budgetSlider.max;
            const percentage = ((value - min) / (max - min)) * 100;

            // Update slider visual
            elements.budgetSlider.style.setProperty('--value', percentage + '%');

            // Format number based on language
            const formattedNumber = currentLang === 'ar' 
                ? Number(value).toLocaleString('ar-EG')
                : Number(value).toLocaleString('en-US');

            elements.budgetValue.textContent = `$${formattedNumber}`;
        },

        saveBudget() {
            if (!elements.budgetSlider) return;
            
            const budget = elements.budgetSlider.value;
            localStorage.setItem(STORAGE.USER_BUDGET, budget);
            
            return budget;
        },

        loadSavedBudget() {
            const savedBudget = localStorage.getItem(STORAGE.USER_BUDGET);
            
            if (savedBudget && elements.budgetSlider) {
                elements.budgetSlider.value = savedBudget;
                this.updateDisplay();
            }
        },

        handleComplete() {
            const budget = this.saveBudget();
            
            if (budget) {
                const formattedBudget = currentLang === 'ar'
                    ? Number(budget).toLocaleString('ar-EG')
                    : Number(budget).toLocaleString('en-US');

                const message = currentLang === 'en'
                    ? `Budget set to $${formattedBudget}. Setup complete!`
                    : `تم تحديد الميزانية إلى $${formattedBudget}. اكتمل الإعداد!`;

                console.log(message);
                
                // Navigate to user page
                window.location.href = "Userpadge.html";
            }
        },

        handleBack() {
            window.location.href = "Interests.html";
        },

        init() {
            // Load saved budget if exists
            this.loadSavedBudget();

            // Update display on slider change
            if (elements.budgetSlider) {
                elements.budgetSlider.addEventListener('input', () => this.updateDisplay());
                
                // Initialize display
                this.updateDisplay();
            }

            // Complete button
            if (elements.completeBtn) {
                elements.completeBtn.addEventListener('click', () => this.handleComplete());
            }

            // Back button
            if (elements.backBtn) {
                elements.backBtn.addEventListener('click', () => this.handleBack());
            }
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
            console.log('💰 Dalilak Budget Page Initialized');

            // Initialize all modules
            ThemeManager.init();
            LanguageManager.init();
            BudgetManager.init();
        }
    };

    // Start the application
    App.init();

})();