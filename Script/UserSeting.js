/* =========================================================
           GLOBAL SHARED STORAGE
        ========================================================= */
const STORAGE = {
    LANGUAGE: 'dalilak_language',
    THEME: 'dalilak_theme',
    USER_DATA: 'dalilak_user_data'
};

// =============================================
// USER DATA
// =============================================
const userData = {
    firstName: 'Ahmed',
    lastName: 'Hassan',
    email: 'ahmed@example.com',
    phone: '+20 123 456 7890',
    birthdate: '1995-05-15',
    gender: 'male',
    street: '123 Tahrir Square',
    city: 'Cairo',
    postalCode: '11511',
    country: 'egypt',
    travelClass: 'business',
    accommodationType: 'hotel',
    dietaryPreference: 'none'
};

// =============================================
// STATE MANAGEMENT
// =============================================
let currentLanguage = 'en';
let currentTheme = 'light';

// =============================================
// INITIALIZATION
// =============================================
document.addEventListener('DOMContentLoaded', function () {
    loadSettings();
    loadUserData();
    updateAllTranslations();
    setupFormHandlers();
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

function loadUserData() {
    const saved = localStorage.getItem(STORAGE.USER_DATA);
    if (saved) {
        const data = JSON.parse(saved);
        Object.assign(userData, data);
        updateFormFields();
    }
}

function saveUserData() {
    localStorage.setItem(STORAGE.USER_DATA, JSON.stringify(userData));
}

function updateFormFields() {
    document.getElementById('firstName').value = userData.firstName;
    document.getElementById('lastName').value = userData.lastName;
    document.getElementById('email').value = userData.email;
    document.getElementById('phone').value = userData.phone;
    document.getElementById('birthdate').value = userData.birthdate;
    document.getElementById('gender').value = userData.gender;
    document.getElementById('street').value = userData.street;
    document.getElementById('city').value = userData.city;
    document.getElementById('postalCode').value = userData.postalCode;
    document.getElementById('country').value = userData.country;
    document.getElementById('travelClass').value = userData.travelClass;
    document.getElementById('accommodationType').value = userData.accommodationType;
    document.getElementById('dietaryPreference').value = userData.dietaryPreference;
}

// =============================================
// FORM HANDLERS
// =============================================
function setupFormHandlers() {
    // Personal Info Form
    document.getElementById('personalInfoForm').addEventListener('submit', function (e) {
        e.preventDefault();

        userData.firstName = document.getElementById('firstName').value;
        userData.lastName = document.getElementById('lastName').value;
        userData.email = document.getElementById('email').value;
        userData.phone = document.getElementById('phone').value;
        userData.birthdate = document.getElementById('birthdate').value;
        userData.gender = document.getElementById('gender').value;

        saveUserData();

        const message = currentLanguage === 'ar'
            ? 'تم حفظ المعلومات الشخصية بنجاح!'
            : 'Personal information saved successfully!';
        showToast(message, 'success');
    });

    // Address Form
    document.getElementById('addressForm').addEventListener('submit', function (e) {
        e.preventDefault();

        userData.street = document.getElementById('street').value;
        userData.city = document.getElementById('city').value;
        userData.postalCode = document.getElementById('postalCode').value;
        userData.country = document.getElementById('country').value;

        saveUserData();

        const message = currentLanguage === 'ar'
            ? 'تم حفظ معلومات العنوان بنجاح!'
            : 'Address information saved successfully!';
        showToast(message, 'success');
    });

    // Change Password Form
    document.getElementById('changePasswordForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword !== confirmPassword) {
            const message = currentLanguage === 'ar'
                ? 'كلمات المرور الجديدة غير متطابقة!'
                : 'New passwords do not match!';
            showToast(message, 'error');
            return;
        }

        if (newPassword.length < 8) {
            const message = currentLanguage === 'ar'
                ? 'كلمة المرور يجب أن تكون 8 أحرف على الأقل!'
                : 'Password must be at least 8 characters!';
            showToast(message, 'error');
            return;
        }

        closeChangePasswordModal();

        const message = currentLanguage === 'ar'
            ? 'تم تغيير كلمة المرور بنجاح!'
            : 'Password changed successfully!';
        showToast(message, 'success');

        document.getElementById('changePasswordForm').reset();
    });

    // Delete Account Form
    document.getElementById('deleteAccountForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const confirmation = document.getElementById('deleteConfirmation').value;

        if (confirmation !== 'DELETE') {
            const message = currentLanguage === 'ar'
                ? 'يرجى كتابة DELETE للتأكيد!'
                : 'Please type DELETE to confirm!';
            showToast(message, 'error');
            return;
        }

        closeDeleteAccountModal();

        const message = currentLanguage === 'ar'
            ? 'تم جدولة حذف الحساب. سيتم حذف حسابك خلال 30 يوماً.'
            : 'Account deletion scheduled. Your account will be deleted in 30 days.';
        showToast(message, 'success');

        document.getElementById('deleteAccountForm').reset();
    });
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
    saveSettings();

}

function updateAllTranslations() {
    document.querySelectorAll('[data-en], [data-ar]').forEach(el => {
        const key = currentLanguage === 'ar' ? 'data-ar' : 'data-en';
        if (el.hasAttribute(key)) {
            if (el.tagName === 'INPUT' && el.type === 'submit') {
                el.value = el.getAttribute(key);
            } else if (el.tagName === 'OPTION') {
                el.textContent = el.getAttribute(key);
            } else {
                el.textContent = el.getAttribute(key);
            }
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
    }

    if (event.key === STORAGE.THEME) {
        currentTheme = event.newValue || 'light';
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }
});

// =============================================
// MENU & SIDEBAR FUNCTIONS
// =============================================
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('hamburgerIcon');
    const settingsSidebar = document.getElementById('settingsSidebar');

    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (settingsSidebar.classList.contains('active')) {
        settingsSidebar.classList.remove('active');
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('hamburgerIcon');

    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
}

function toggleSettingsSidebar() {
    const settingsSidebar = document.getElementById('settingsSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const mobileMenu = document.getElementById('mobileMenu');

    settingsSidebar.classList.toggle('active');
    overlay.classList.toggle('active');

    if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
}

function closeSettingsSidebar() {
    const settingsSidebar = document.getElementById('settingsSidebar');
    const overlay = document.getElementById('sidebarOverlay');

    settingsSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

function closeSidebar() {
    const overlay = document.getElementById('sidebarOverlay');
    const mobileMenu = document.getElementById('mobileMenu');
    const settingsSidebar = document.getElementById('settingsSidebar');
    const hamburger = document.getElementById('hamburgerIcon');

    overlay.classList.remove('active');
    mobileMenu.classList.remove('active');
    settingsSidebar.classList.remove('active');
    hamburger.classList.remove('active');
}

function toggleProfile() {
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) dropdown.classList.toggle('active');
}

function closeProfile() {
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) dropdown.classList.remove('active');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');

    if (profileBtn && profileDropdown && !profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
        profileDropdown.classList.remove('active');
    }
});

// =============================================
// IMAGE UPLOAD
// =============================================
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profileImage').src = e.target.result;
            const message = currentLanguage === 'ar'
                ? 'تم تحديث صورة الملف الشخصي!'
                : 'Profile picture updated!';
            showToast(message, 'success');
        };
        reader.readAsDataURL(file);
    }
}

// =============================================
// FORM RESET FUNCTIONS
// =============================================
function resetPersonalInfo() {
    updateFormFields();
    const message = currentLanguage === 'ar'
        ? 'تم إلغاء التغييرات'
        : 'Changes cancelled';
    showToast(message, 'success');
}

function resetAddress() {
    updateFormFields();
    const message = currentLanguage === 'ar'
        ? 'تم إلغاء التغييرات'
        : 'Changes cancelled';
    showToast(message, 'success');
}

// =============================================
// TRAVEL PREFERENCES
// =============================================
function saveTravelPreference(key, value) {
    userData[key] = value;
    saveUserData();

    const message = currentLanguage === 'ar'
        ? 'تم حفظ التفضيل!'
        : 'Preference saved!';
    showToast(message, 'success');
}

// =============================================
// MODAL FUNCTIONS
// =============================================
function openChangePasswordModal() {
    document.getElementById('changePasswordModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeChangePasswordModal() {
    document.getElementById('changePasswordModal').classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('changePasswordForm').reset();
}

function openDeleteAccountModal() {
    document.getElementById('deleteAccountModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDeleteAccountModal() {
    document.getElementById('deleteAccountModal').classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('deleteAccountForm').reset();
}

// Close modal when clicking outside
document.addEventListener('click', function (event) {
    const changePasswordModal = document.getElementById('changePasswordModal');
    const deleteAccountModal = document.getElementById('deleteAccountModal');

    if (event.target === changePasswordModal) {
        closeChangePasswordModal();
    }

    if (event.target === deleteAccountModal) {
        closeDeleteAccountModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeChangePasswordModal();
        closeDeleteAccountModal();
    }
});


// =============================================
// LOGOUT
// =============================================
function handleLogout() {
    closeProfile();

    const confirmMessage = currentLanguage === 'ar'
        ? 'هل أنت متأكد أنك تريد تسجيل الخروج؟'
        : 'Are you sure you want to logout?';

    if (confirm(confirmMessage)) {
        const message = currentLanguage === 'ar'
            ? 'جاري تسجيل الخروج...'
            : 'Logging out...';
        showToast(message, 'success');

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    }
}