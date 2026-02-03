/* =========================================================
   GLOBAL SHARED STORAGE
========================================================= */
const STORAGE = {
    LANGUAGE: 'dalilak_language',
    THEME: 'dalilak_theme',
    SAVED_TRIPS: 'dalilak_saved_trips',
    USER_BUDGET: 'dalilak_user_budget',
    TRANSACTIONS: 'dalilak_transactions'
};

// =============================================
// STATE MANAGEMENT
// =============================================
let currentLanguage = 'en';
let currentTheme = 'light';

// Budget Categories Data
const categories = [
    {
        id: 1,
        nameEn: "Accommodation",
        nameAr: "الإقامة",
        icon: "hotel",
        color: "#3b82f6",
        budget: 1500,
        spent: 750,
        percentage: 50
    },
    {
        id: 2,
        nameEn: "Food & Dining",
        nameAr: "الطعام والمطاعم",
        icon: "restaurant",
        color: "#ef4444",
        budget: 1200,
        spent: 680,
        percentage: 57
    },
    {
        id: 3,
        nameEn: "Transportation",
        nameAr: "المواصلات",
        icon: "directions_car",
        color: "#f59e0b",
        budget: 800,
        spent: 420,
        percentage: 53
    },
    {
        id: 4,
        nameEn: "Activities",
        nameAr: "الأنشطة",
        icon: "local_activity",
        color: "#8b5cf6",
        budget: 1000,
        spent: 400,
        percentage: 40
    },
    {
        id: 5,
        nameEn: "Shopping",
        nameAr: "التسوق",
        icon: "shopping_bag",
        color: "#10b981",
        budget: 500,
        spent: 200,
        percentage: 40
    }
];

// Recent Transactions Data
const transactions = [
    {
        id: 1,
        nameEn: "Burj Khalifa Tickets",
        nameAr: "تذاكر برج خليفة",
        category: "Activities",
        categoryAr: "الأنشطة",
        amount: 250,
        date: "2023-10-15",
        icon: "confirmation_number",
        color: "#8b5cf6"
    },
    {
        id: 2,
        nameEn: "Al Mahara Dinner",
        nameAr: "عشاء المحارة",
        category: "Food & Dining",
        categoryAr: "الطعام والمطاعم",
        amount: 450,
        date: "2023-10-14",
        icon: "restaurant",
        color: "#ef4444"
    },
    {
        id: 3,
        nameEn: "Dubai Mall Shopping",
        nameAr: "تسوق في دبي مول",
        category: "Shopping",
        categoryAr: "التسوق",
        amount: 180,
        date: "2023-10-14",
        icon: "shopping_bag",
        color: "#10b981"
    },
    {
        id: 4,
        nameEn: "Taxi to Marina",
        nameAr: "تاكسي إلى المارينا",
        category: "Transportation",
        categoryAr: "المواصلات",
        amount: 45,
        date: "2023-10-13",
        icon: "local_taxi",
        color: "#f59e0b"
    },
    {
        id: 5,
        nameEn: "Atlantis Hotel - Night 2",
        nameAr: "فندق أتلانتس - الليلة 2",
        category: "Accommodation",
        categoryAr: "الإقامة",
        amount: 375,
        date: "2023-10-13",
        icon: "hotel",
        color: "#3b82f6"
    }
];

// =============================================
// INITIALIZATION
// =============================================
document.addEventListener('DOMContentLoaded', function () {
    loadSettings();
    updateAllTranslations();
    renderCategoryBreakdown();
    renderTransactions();
    animateProgressBars();
    animateCircularProgress();
});

// =============================================
// SETTINGS MANAGEMENT
// =============================================
function loadSettings() {
    const savedLang = localStorage.getItem(STORAGE.LANGUAGE) || 'en';
    const savedTheme = localStorage.getItem(STORAGE.THEME) || 'light';

    currentLanguage = savedLang;
    currentTheme = savedTheme;

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
}

function saveSettings() {
    localStorage.setItem(STORAGE.LANGUAGE, currentLanguage);
    localStorage.setItem(STORAGE.THEME, currentTheme);
}

// =============================================
// TOAST NOTIFICATIONS
// =============================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icon = type === 'success' ? 'check_circle' : 'cancel';

    toast.innerHTML = `
        <div class="toast-icon">
            <span class="material-symbols-outlined text-lg">${icon}</span>
        </div>
        <div class="flex-1">
            <p class="font-semibold text-sm">${message}</p>
        </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            container.removeChild(toast);
        }, 400);
    }, 3000);
}

// =============================================
// THEME TOGGLE
// =============================================
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark');
    saveSettings();
}

// =============================================
// LANGUAGE TOGGLE
// =============================================
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    updateAllTranslations();
    renderCategoryBreakdown();
    renderTransactions();
    saveSettings();
}

function updateAllTranslations() {
    document.querySelectorAll('[data-en], [data-ar]').forEach(el => {
        const key = currentLanguage === 'ar' ? 'data-ar' : 'data-en';
        if (el.hasAttribute(key)) {
            el.textContent = el.getAttribute(key);
        }
    });
}

// =============================================
// STORAGE LISTENER
// =============================================
window.addEventListener('storage', function (event) {
    if (event.key === STORAGE.LANGUAGE) {
        currentLanguage = event.newValue || 'en';
        document.documentElement.lang = currentLanguage;
        document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
        updateAllTranslations();
        renderCategoryBreakdown();
        renderTransactions();
    }

    if (event.key === STORAGE.THEME) {
        currentTheme = event.newValue || 'light';
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }
});

// =============================================
// MENU & DROPDOWN FUNCTIONS
// =============================================
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('hamburgerIcon');

    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('hamburgerIcon');

    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function toggleNotifications() {
    const dropdown = document.getElementById('notificationDropdown');
    const profileDropdown = document.getElementById('profileDropdown');

    if (profileDropdown) profileDropdown.classList.remove('active');
    dropdown.classList.toggle('active');
}

function toggleProfile() {
    const dropdown = document.getElementById('profileDropdown');
    const notificationDropdown = document.getElementById('notificationDropdown');

    if (notificationDropdown) notificationDropdown.classList.remove('active');
    dropdown.classList.toggle('active');
}

function closeProfile() {
    document.getElementById('profileDropdown').classList.remove('active');
}

function closeSidebar() {
    const overlay = document.getElementById('sidebarOverlay');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburgerIcon');

    if (overlay) overlay.classList.remove('active');
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (hamburger) hamburger.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// =============================================
// CLICK OUTSIDE HANDLER - محدث
// =============================================
document.addEventListener('click', function (event) {
    // إغلاق القوائم المنسدلة
    const notifBtn = document.getElementById('notificationBtn');
    const profileBtn = document.getElementById('profileBtn');
    const notificationDropdown = document.getElementById('notificationDropdown');
    const profileDropdown = document.getElementById('profileDropdown');

    if (notifBtn && notificationDropdown && !notifBtn.contains(event.target) && !notificationDropdown.contains(event.target)) {
        notificationDropdown.classList.remove('active');
    }

    if (profileBtn && profileDropdown && !profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
        profileDropdown.classList.remove('active');
    }

    // إغلاق القائمة المحمولة عند الضغط خارجها
    const overlay = document.getElementById('sidebarOverlay');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburgerIcon');

    // إغلاق عند الضغط على الـ overlay
    if (overlay && overlay.classList.contains('active') && event.target === overlay) {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    }

    // إغلاق القائمة المحمولة عند الضغط خارجها (ماعدا زر الهامبورجر)
    if (mobileMenu && hamburger) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnHamburger && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    }
});

// منع الإغلاق عند الضغط داخل القائمة نفسها
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

// =============================================
// RENDER CATEGORY BREAKDOWN
// =============================================
function renderCategoryBreakdown() {
    const container = document.getElementById('categoryBreakdown');
    container.innerHTML = '';

    categories.forEach((category, index) => {
        const name = currentLanguage === 'ar' ? category.nameAr : category.nameEn;
        
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category-item';
        categoryDiv.style.animationDelay = `${index * 0.1}s`;

        const statusClass = category.percentage > 80 ? 'text-red-500' : category.percentage > 60 ? 'text-yellow-500' : 'text-green-500';

        categoryDiv.innerHTML = `
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                    <div class="size-10 rounded-lg flex items-center justify-center" style="background-color: ${category.color}20;">
                        <span class="material-symbols-outlined" style="color: ${category.color};">${category.icon}</span>
                    </div>
                    <div>
                        <h3 class="text-[#0d131b] dark:text-white font-bold text-base">${name}</h3>
                        <p class="text-[#4c6c9a] text-sm">$${category.spent.toLocaleString()} / $${category.budget.toLocaleString()}</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="font-bold ${statusClass}">${category.percentage}%</p>
                </div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="background-color: ${category.color}; width: ${category.percentage}%;" data-width="${category.percentage}"></div>
            </div>
        `;

        container.appendChild(categoryDiv);
    });

    // Re-animate progress bars
    setTimeout(() => animateProgressBars(), 100);
}

// =============================================
// RENDER TRANSACTIONS
// =============================================
function renderTransactions() {
    const container = document.getElementById('transactionsContainer');
    container.innerHTML = '';

    transactions.slice(0, 5).forEach((transaction, index) => {
        const name = currentLanguage === 'ar' ? transaction.nameAr : transaction.nameEn;
        const category = currentLanguage === 'ar' ? transaction.categoryAr : transaction.category;
        const date = new Date(transaction.date).toLocaleDateString(currentLanguage === 'ar' ? 'ar-EG' : 'en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        const transactionDiv = document.createElement('div');
        transactionDiv.className = 'transaction-item';
        transactionDiv.style.animationDelay = `${index * 0.05}s`;

        transactionDiv.innerHTML = `
            <div class="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-[#e7ecf3] dark:border-slate-800 hover:shadow-md transition-all">
                <div class="flex items-center gap-4 flex-1">
                    <div class="size-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background-color: ${transaction.color}20;">
                        <span class="material-symbols-outlined text-xl" style="color: ${transaction.color};">${transaction.icon}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="text-[#0d131b] dark:text-white font-bold text-sm truncate">${name}</h4>
                        <div class="flex items-center gap-2 mt-1">
                            <span class="text-[#4c6c9a] text-xs">${category}</span>
                            <span class="text-[#4c6c9a] text-xs">•</span>
                            <span class="text-[#4c6c9a] text-xs">${date}</span>
                        </div>
                    </div>
                </div>
                <div class="text-right ml-4">
                    <p class="text-[#0d131b] dark:text-white font-bold text-lg">$${transaction.amount}</p>
                </div>
            </div>
        `;

        container.appendChild(transactionDiv);
    });
}

// =============================================
// ANIMATIONS
// =============================================
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 100);
    });
}

function animateCircularProgress() {
    const circle = document.querySelector('.progress-circle');
    if (circle) {
        const percentage = 49;
        const circumference = 2 * Math.PI * 70;
        const offset = circumference - (percentage / 100) * circumference;
        
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 300);
    }
}

// =============================================
// BUDGET FUNCTIONS
// =============================================
function downloadReport() {
    const message = currentLanguage === 'ar' 
        ? 'جاري تحميل التقرير...' 
        : 'Downloading report...';
    showToast(message, 'success');
}

function addTransaction() {
    const message = currentLanguage === 'ar' 
        ? 'فتح نموذج إضافة معاملة جديدة...' 
        : 'Opening add transaction form...';
    showToast(message, 'success');
}

function viewAllTransactions() {
    const message = currentLanguage === 'ar' 
        ? 'عرض جميع المعاملات...' 
        : 'Viewing all transactions...';
    showToast(message, 'success');
}

function toggleFilterDropdown() {
    const message = currentLanguage === 'ar' 
        ? 'فتح خيارات التصفية...' 
        : 'Opening filter options...';
    showToast(message, 'success');
}

// =============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// =============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in-up, .fade-in-scale').forEach(el => {
        observer.observe(el);
    });
});