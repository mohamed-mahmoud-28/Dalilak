// ==========================================
// DALILAK - Sign Up Page JavaScript
// ==========================================

(function() {
    'use strict';

    // =================== STORAGE KEYS ===================
    const STORAGE = {
        LANGUAGE: 'dalilak_language',
        THEME: 'dalilak_theme',
        USER_DATA: 'dalilak_user_data'
    };

    // =================== STATE ===================
    let currentLang = localStorage.getItem(STORAGE.LANGUAGE) || 'en';

    // =================== ELEMENTS ===================
    const elements = {
        html: document.documentElement,
        langToggle: document.getElementById('lang-toggle'),
        langToggleMobile: document.getElementById('lang-toggle-mobile'),
        themeToggle: document.getElementById('theme-toggle'),
        themeToggleMobile: document.getElementById('theme-toggle-mobile'),
        form: document.getElementById('signup-form'),
        fullnameInput: document.getElementById('fullname'),
        emailInput: document.getElementById('email'),
        passwordInput: document.getElementById('password'),
        togglePassword: document.getElementById('toggle-password'),
        eyeIcon: document.getElementById('eye-icon'),
        errorFullname: document.getElementById('error-fullname'),
        errorEmail: document.getElementById('error-email'),
        errorPassword: document.getElementById('error-password')
    };

    // =================== ERROR MESSAGES ===================
    const errorMessages = {
        en: {
            nameRequired: '* Please enter your full name.',
            emailRequired: '* Please enter your email address.',
            emailInvalid: '* Please enter a valid email address.',
            passwordRequired: '* Please enter your password.'
        },
        ar: {
            nameRequired: '* الرجاء إدخال اسمك الكامل.',
            emailRequired: '* الرجاء إدخال بريدك الإلكتروني.',
            emailInvalid: '* الرجاء إدخال بريد إلكتروني صحيح.',
            passwordRequired: '* الرجاء إدخال كلمة المرور.'
        }
    };

    // =================== LANGUAGE MANAGEMENT ===================
    const LanguageManager = {
        updateContent() {
            // Update all elements with data-en and data-ar attributes
            document.querySelectorAll('[data-en][data-ar]').forEach(el => {
                const text = el.getAttribute(`data-${currentLang}`);
                if (text) {
                    if (el.tagName === 'INPUT') {
                        el.placeholder = text;
                    } else {
                        el.textContent = text;
                    }
                }
            });

            // Update placeholders
            document.querySelectorAll('[data-placeholder-en]').forEach(el => {
                const placeholder = el.getAttribute(`data-placeholder-${currentLang}`);
                if (placeholder) {
                    el.placeholder = placeholder;
                }
            });

            // Update arrow flip for RTL
            elements.html.style.setProperty('--flip', currentLang === 'ar' ? '-1' : '1');
        },

        apply() {
            elements.html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            elements.html.setAttribute('lang', currentLang);
            
            // Update both language toggle buttons
            const langText = currentLang === 'en' ? 'EN' : 'ع';
            if (elements.langToggle) elements.langToggle.textContent = langText;
            if (elements.langToggleMobile) elements.langToggleMobile.textContent = langText;
            
            this.updateContent();
        },

        toggle() {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            localStorage.setItem(STORAGE.LANGUAGE, currentLang);
            this.apply();
        },

        init() {
            this.apply();
            
            // Add event listeners to both toggle buttons
            if (elements.langToggle) {
                elements.langToggle.addEventListener('click', () => this.toggle());
            }
            if (elements.langToggleMobile) {
                elements.langToggleMobile.addEventListener('click', () => this.toggle());
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
            
            // Add event listeners to both toggle buttons
            if (elements.themeToggle) {
                elements.themeToggle.addEventListener('click', () => this.toggle());
            }
            if (elements.themeToggleMobile) {
                elements.themeToggleMobile.addEventListener('click', () => this.toggle());
            }
        }
    };

    // =================== FORM VALIDATION ===================
    const FormValidator = {
        validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },

        clearErrors() {
            if (elements.errorFullname) elements.errorFullname.textContent = '';
            if (elements.errorEmail) elements.errorEmail.textContent = '';
            if (elements.errorPassword) elements.errorPassword.textContent = '';
        },

        validateForm(fullname, email, password) {
            const msgs = errorMessages[currentLang];
            let isValid = true;

            this.clearErrors();

            // Validate fullname
            if (!fullname) {
                if (elements.errorFullname) {
                    elements.errorFullname.textContent = msgs.nameRequired;
                }
                isValid = false;
            }

            // Validate email
            if (!email) {
                if (elements.errorEmail) {
                    elements.errorEmail.textContent = msgs.emailRequired;
                }
                isValid = false;
            } else if (!this.validateEmail(email)) {
                if (elements.errorEmail) {
                    elements.errorEmail.textContent = msgs.emailInvalid;
                }
                isValid = false;
            }

            // Validate password
            if (!password) {
                if (elements.errorPassword) {
                    elements.errorPassword.textContent = msgs.passwordRequired;
                }
                isValid = false;
            }

            return isValid;
        },

        init() {
            if (elements.form) {
                elements.form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const fullname = elements.fullnameInput?.value.trim() || '';
                    const email = elements.emailInput?.value.trim() || '';
                    const password = elements.passwordInput?.value.trim() || '';

                    if (this.validateForm(fullname, email, password)) {
                        // Save user data
                        const userData = {
                            fullname: fullname,
                            email: email,
                            registrationTime: new Date().toISOString()
                        };
                        localStorage.setItem(STORAGE.USER_DATA, JSON.stringify(userData));

                        // Navigate to interests page
                        window.location.href = "Interests.html";
                    }
                });
            }
        }
    };

    // =================== PASSWORD TOGGLE ===================
    const PasswordToggle = {
        init() {
            if (elements.togglePassword && elements.passwordInput && elements.eyeIcon) {
                elements.togglePassword.addEventListener('click', () => {
                    const type = elements.passwordInput.type === 'password' ? 'text' : 'password';
                    elements.passwordInput.type = type;
                    elements.eyeIcon.textContent = type === 'password' ? 'visibility' : 'visibility_off';
                });
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
            console.log('📝 Dalilak Sign Up Page Initialized');

            // Initialize all modules
            ThemeManager.init();
            LanguageManager.init();
            FormValidator.init();
            PasswordToggle.init();
        }
    };

    // Start the application
    App.init();

})();