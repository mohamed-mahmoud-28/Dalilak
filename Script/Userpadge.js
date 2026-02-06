// ==========================================
// DALILAK - User Trip Planner Page JavaScript
// ==========================================

(function() {
    'use strict';

    // =================== STORAGE KEYS ===================
    const STORAGE = {
        LANGUAGE: 'dalilak_language',
        THEME: 'dalilak_theme'
    };

    // =================== STATE ===================
    let currentLang = localStorage.getItem(STORAGE.LANGUAGE) || 'en'; // Changed default from 'ar' to 'en'
    let map = null;
    let markers = [];

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
            const html = document.documentElement;
            html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            html.setAttribute('lang', currentLang);

            this.updateContent();
            this.displayConsoleMessage();
        },

        toggle() {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            localStorage.setItem(STORAGE.LANGUAGE, currentLang);
            this.apply();

            // Invalidate map size after layout change
            if (map) {
                setTimeout(() => {
                    map.invalidateSize();
                }, 300);
            }

            // Update marker popups
            MapManager.updateMarkerPopups();
        },

        displayConsoleMessage() {
            console.clear();
            if (currentLang === 'ar') {
                console.log('%c🇪🇬 مرحباً بك في Dalilak! ', 'font-size: 20px; font-weight: bold; color: #136dec;');
                console.log('%cمنصة السفر والسياحة المصرية الذكية', 'font-size: 14px; color: #60a5fa;');
            } else {
                console.log('%c🇪🇬 Welcome to Dalilak! ', 'font-size: 20px; font-weight: bold; color: #136dec;');
                console.log('%cSmart Egyptian Travel & Tourism Platform', 'font-size: 14px; color: #60a5fa;');
            }
        },

        init() {
            this.apply();
        }
    };

    // =================== THEME MANAGEMENT ===================
    const ThemeManager = {
        toggle() {
            const html = document.documentElement;
            html.classList.toggle('dark');
            const theme = html.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem(STORAGE.THEME, theme);
        },

        load() {
            const savedTheme = localStorage.getItem(STORAGE.THEME) || 'light';
            const html = document.documentElement;

            if (savedTheme === 'dark') {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }
        },

        init() {
            this.load();
        }
    };

    // =================== SIDEBAR MANAGEMENT ===================
    const SidebarManager = {
        toggle() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            const hamburger = document.getElementById('hamburger');

            if (sidebar && overlay && hamburger) {
                sidebar.classList.toggle('active');
                overlay.classList.toggle('active');
                hamburger.classList.toggle('active');

                // Prevent body scroll when sidebar is open
                document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
            }
        },

        close() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            const hamburger = document.getElementById('hamburger');

            if (sidebar && overlay && hamburger) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    };

    // =================== DROPDOWN MANAGEMENT ===================
    const DropdownManager = {
        toggleProfile() {
            const profileDropdown = document.getElementById('profileDropdown');
            const notifDropdown = document.getElementById('notificationDropdown');

            // Close notifications if open
            if (notifDropdown) {
                notifDropdown.classList.remove('active');
            }

            // Toggle profile
            if (profileDropdown) {
                profileDropdown.classList.toggle('active');
            }
        },

        closeProfile() {
            const profileDropdown = document.getElementById('profileDropdown');
            if (profileDropdown) {
                profileDropdown.classList.remove('active');
            }
        },

        toggleNotifications() {
            const notifDropdown = document.getElementById('notificationDropdown');
            const profileDropdown = document.getElementById('profileDropdown');

            // Close profile if open
            if (profileDropdown) {
                profileDropdown.classList.remove('active');
            }

            // Toggle notifications
            if (notifDropdown) {
                notifDropdown.classList.toggle('active');
            }
        },

        init() {
            // Close dropdowns when clicking outside
            document.addEventListener('click', (event) => {
                const notifBtn = document.getElementById('notificationBtn');
                const profileBtn = document.getElementById('profileBtn');
                const notifDropdown = document.getElementById('notificationDropdown');
                const profileDropdown = document.getElementById('profileDropdown');

                // Close notifications if clicking outside
                if (notifDropdown && notifBtn && 
                    !notifBtn.contains(event.target) && 
                    !notifDropdown.contains(event.target)) {
                    notifDropdown.classList.remove('active');
                }

                // Close profile if clicking outside
                if (profileDropdown && profileBtn && 
                    !profileBtn.contains(event.target) && 
                    !profileDropdown.contains(event.target)) {
                    profileDropdown.classList.remove('active');
                }
            });
        }
    };

    // =================== MAP MANAGEMENT ===================
    const MapManager = {
        attractions: [
            { 
                pos: [29.9792, 31.1342], 
                nameAr: 'أهرامات الجيزة 🏛️', 
                nameEn: 'Giza Pyramids 🏛️', 
                descAr: 'أحد عجائب الدنيا السبع', 
                descEn: 'One of Seven Wonders' 
            },
            { 
                pos: [30.0131, 31.2089], 
                nameAr: 'المتحف المصري 🏛️', 
                nameEn: 'Egyptian Museum 🏛️', 
                descAr: 'أكبر متحف للآثار المصرية', 
                descEn: 'Largest Egyptian artifacts museum' 
            },
            { 
                pos: [30.0626, 31.2497], 
                nameAr: 'خان الخليلي 🕌', 
                nameEn: 'Khan El Khalili 🕌', 
                descAr: 'سوق تقليدي عريق', 
                descEn: 'Historic traditional market' 
            },
            { 
                pos: [30.0282, 31.2217], 
                nameAr: 'القلعة 🏰', 
                nameEn: 'The Citadel 🏰', 
                descAr: 'قلعة صلاح الدين الأيوبي', 
                descEn: 'Salah El-Din Citadel' 
            }
        ],

        initMap() {
            // Initialize map centered on Cairo
            map = L.map('map', {
                zoomControl: false
            }).setView([30.0444, 31.2357], 13);

            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            // Add custom zoom control
            L.control.zoom({
                position: 'bottomright' // Changed from 'bottomleft' to 'bottomright' for LTR
            }).addTo(map);

            // Current location marker (Cairo Tower area)
            const currentMarker = L.marker([30.0444, 31.2357], {
                icon: L.divIcon({
                    className: 'custom-marker',
                    html: '<div style="background: #136dec; width: 30px; height: 30px; border-radius: 50%; border: 4px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);"></div>',
                    iconSize: [30, 30],
                    iconAnchor: [15, 15]
                })
            }).addTo(map);

            this.updateMarkerPopup(currentMarker, {
                ar: '<b>موقعك الحالي</b><br>برج القاهرة',
                en: '<b>Your Location</b><br>Cairo Tower'
            });

            // Add attraction markers
            this.attractions.forEach(attr => {
                const marker = L.marker(attr.pos, {
                    icon: L.divIcon({
                        className: 'attraction-marker',
                        html: '<div style="background: #60a5fa; width: 20px; height: 20px; border-radius: 50%; border: 3px solid #136dec; box-shadow: 0 2px 8px rgba(0,0,0,0.2);"></div>',
                        iconSize: [20, 20],
                        iconAnchor: [10, 10]
                    })
                }).addTo(map);

                this.updateMarkerPopup(marker, {
                    ar: `<b>${attr.nameAr}</b><br>${attr.descAr}`,
                    en: `<b>${attr.nameEn}</b><br>${attr.descEn}`
                });

                markers.push({ marker, pos: attr.pos, attr });
            });
        },

        updateMarkerPopup(marker, content) {
            const popupContent = currentLang === 'ar' ? content.ar : content.en;
            marker.bindPopup(popupContent);
        },

        updateMarkerPopups() {
            markers.forEach(m => {
                const popupContent = currentLang === 'ar'
                    ? `<b>${m.attr.nameAr}</b><br>${m.attr.descAr}`
                    : `<b>${m.attr.nameEn}</b><br>${m.attr.descEn}`;
                m.marker.setPopupContent(popupContent);
            });
        },

        focusOn(lat, lng) {
            if (map) {
                map.setView([lat, lng], 15, {
                    animate: true,
                    duration: 1
                });

                // Find and open popup for this location
                markers.forEach(m => {
                    if (m.pos[0] === lat && m.pos[1] === lng) {
                        const popupContent = currentLang === 'ar'
                            ? `<b>${m.attr.nameAr}</b><br>${m.attr.descAr}`
                            : `<b>${m.attr.nameEn}</b><br>${m.attr.descEn}`;
                        m.marker.setPopupContent(popupContent).openPopup();
                    }
                });
            }
        },

        init() {
            // Initialize map after page loads
            window.addEventListener('load', () => {
                setTimeout(() => this.initMap(), 500);
            });

            // Handle window resize
            window.addEventListener('resize', () => {
                if (map) {
                    map.invalidateSize();
                }
            });
        }
    };

    // =================== INTERACTIVE FUNCTIONS ===================
    const InteractionManager = {
        addExpense() {
            const msg = currentLang === 'ar'
                ? 'إضافة مصروف جديد - سيتم فتح نموذج الإدخال! 💰'
                : 'Add new expense - Input form will open! 💰';
            alert(msg);

                window.open('PaymentMethods.html', '_self');
        },

            bookGuide() {
                const msg = currentLang === 'ar'
                    ? 'حجز دليل سياحي - سيتم توجيهك إلى صفحة الحجز! 👨‍🏫'
                    : 'Book tour guide - You will be redirected to booking page! 👨‍🏫';
                alert(msg);

                window.open('guide.html', '_self');
            },

        editPlan() {
            const msg = currentLang === 'ar'
                ? 'تعديل خطة اليوم - يمكنك إضافة أو حذف الأنشطة! ✏️'
                : 'Edit today\'s plan - You can add or remove activities! ✏️';
            alert(msg);
        },

        getTickets() {
            const msg = currentLang === 'ar'
                ? 'الحصول على تذاكر الأهرامات - جاري التوجيه للدفع! 🎫'
                : 'Get Pyramids tickets - Redirecting to payment! 🎫';
            alert(msg);
        },

        viewDetails() {
            const msg = currentLang === 'ar'
                ? 'عرض تفاصيل الزيارة - معلومات كاملة عن المكان! 📋'
                : 'View visit details - Complete place information! 📋';
            alert(msg);
        },

        bookTransport() {
            const msg = currentLang === 'ar'
                ? 'حجز مواصلات — سيتم فتح صفحة الحجز الآن 🚕'
               : 'Book transport — page will open now 🚕';
            alert(msg);

            window.open('Transportation.html');
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
            console.log('🗺️ Dalilak User Trip Page Initialized');

            // Initialize all modules
            ThemeManager.init();
            LanguageManager.init();
            DropdownManager.init();
            MapManager.init();

            // Expose functions to global scope for onclick handlers
            window.toggleLanguage = () => LanguageManager.toggle();
            window.toggleTheme = () => ThemeManager.toggle();
            window.toggleSidebar = () => SidebarManager.toggle();
            window.closeSidebar = () => SidebarManager.close();
            window.toggleProfile = () => DropdownManager.toggleProfile();
            window.closeProfile = () => DropdownManager.closeProfile();
            window.toggleNotifications = () => DropdownManager.toggleNotifications();
            window.focusOnMap = (lat, lng) => MapManager.focusOn(lat, lng);
            window.addExpense = () => InteractionManager.addExpense();
            window.bookGuide = () => InteractionManager.bookGuide();
            window.editPlan = () => InteractionManager.editPlan();
            window.getTickets = () => InteractionManager.getTickets();
            window.viewDetails = () => InteractionManager.viewDetails();
            window.bookTransport = () => InteractionManager.bookTransport();
        }
    };

    // Start the application
    App.init();

})();