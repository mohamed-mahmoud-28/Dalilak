// ==========================================
// DALILAK - Login Page JavaScript
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
        themeToggle: document.getElementById('theme-toggle'),
        form: document.getElementById('login-form'),
        emailInput: document.getElementById('email'),
        passwordInput: document.getElementById('password'),
        togglePassword: document.getElementById('toggle-password'),
        eyeIcon: document.getElementById('eye-icon'),
        errorEmail: document.getElementById('error-email'),
        errorPassword: document.getElementById('error-password'),
        googleLogin: document.getElementById('google-login'),
        appleLogin: document.getElementById('apple-login')
    };

    // =================== ERROR MESSAGES ===================
    const errorMessages = {
        en: {
            emailRequired: 'Please enter your email address',
            emailInvalid: 'Please enter a valid email address',
            passwordRequired: 'Please enter your password',
            passwordShort: 'Password must be at least 6 characters'
        },
        ar: {
            emailRequired: 'الرجاء إدخال بريدك الإلكتروني',
            emailInvalid: 'الرجاء إدخال بريد إلكتروني صحيح',
            passwordRequired: 'الرجاء إدخال كلمة المرور',
            passwordShort: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'
        }
    };

    // =================== LANGUAGE MANAGEMENT ===================
    const LanguageManager = {
        updateContent() {
            // Update all elements with data-en and data-ar attributes
            document.querySelectorAll('[data-en][data-ar]').forEach(el => {
                const text = el.getAttribute(`data-${currentLang}`);
                if (text) {
                    if (el.hasAttribute('placeholder')) {
                        el.setAttribute('placeholder', text);
                    } else {
                        el.textContent = text;
                    }
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

    // =================== FORM VALIDATION ===================
    const FormValidator = {
        showError(element, message) {
            if (element) {
                element.textContent = message;
                element.classList.remove('hidden');
                element.previousElementSibling?.classList.add('border-red-500');
            }
        },

        hideError(element) {
            if (element) {
                element.textContent = '';
                element.classList.add('hidden');
                element.previousElementSibling?.classList.remove('border-red-500');
            }
        },

        validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },

        validateForm(email, password) {
            const msgs = errorMessages[currentLang];
            let isValid = true;

            // Clear previous errors
            this.hideError(elements.errorEmail);
            this.hideError(elements.errorPassword);

            // Email validation
            if (!email) {
                this.showError(elements.errorEmail, msgs.emailRequired);
                isValid = false;
            } else if (!this.validateEmail(email)) {
                this.showError(elements.errorEmail, msgs.emailInvalid);
                isValid = false;
            }

            // Password validation
            if (!password) {
                this.showError(elements.errorPassword, msgs.passwordRequired);
                isValid = false;
            } else if (password.length < 6) {
                this.showError(elements.errorPassword, msgs.passwordShort);
                isValid = false;
            }

            return isValid;
        },

        init() {
            // Form submission
            if (elements.form) {
                elements.form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const email = elements.emailInput?.value.trim() || '';
                    const password = elements.passwordInput?.value.trim() || '';

                    if (this.validateForm(email, password)) {
                        // Save user data
                        const userData = {
                            email: email,
                            loginTime: new Date().toISOString()
                        };
                        localStorage.setItem(STORAGE.USER_DATA, JSON.stringify(userData));

                        // Redirect to home
                        window.location.href = "home.html";
                    }
                });
            }

            // Real-time email validation
            if (elements.emailInput) {
                elements.emailInput.addEventListener('blur', () => {
                    const email = elements.emailInput.value.trim();
                    if (email && !this.validateEmail(email)) {
                        this.showError(elements.errorEmail, errorMessages[currentLang].emailInvalid);
                    } else if (email) {
                        this.hideError(elements.errorEmail);
                    }
                });
            }

            // Real-time password validation
            if (elements.passwordInput) {
                elements.passwordInput.addEventListener('blur', () => {
                    const password = elements.passwordInput.value.trim();
                    if (password && password.length < 6) {
                        this.showError(elements.errorPassword, errorMessages[currentLang].passwordShort);
                    } else if (password) {
                        this.hideError(elements.errorPassword);
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

    // =================== SOCIAL LOGIN ===================
    const SocialLogin = {
        init() {
            if (elements.googleLogin) {
                elements.googleLogin.addEventListener('click', () => {
                    const msg = currentLang === 'en'
                        ? 'Google login would be initiated here'
                        : 'سيتم بدء تسجيل الدخول عبر جوجل هنا';
                    alert(msg);
                });
            }

            if (elements.appleLogin) {
                elements.appleLogin.addEventListener('click', () => {
                    const msg = currentLang === 'en'
                        ? 'Apple login would be initiated here'
                        : 'سيتم بدء تسجيل الدخول عبر أبل هنا';
                    alert(msg);
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
            console.log('🔐 Dalilak Login Page Initialized');

            // Initialize all modules
            ThemeManager.init();
            LanguageManager.init();
            FormValidator.init();
            PasswordToggle.init();
            SocialLogin.init();
        }
    };

    // Start the application
    App.init();

})();