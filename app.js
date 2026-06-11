// ==========================================================================
// ASTRO BY NEETU - ENGINE & STATE CONTROLLER (HIGHLY ENHANCED & COMPLETE CATALOG)
// ==========================================================================

// 1. POPULATE COMPREHENSIVE STUDY CATEGORIES
const categories = [
    "Beginner Astrology",
    "Advanced Astrology",
    "Numerology",
    "Nakshatras",
    "Predictive Astrology",
    "Career Astrology",
    "Relationship Astrology",
    "Remedies",
    "Tarot"
];

// 2. SEED ACTIVE LIVE COURSES (Current Courses)
let courses = {
    1: {
        id: 1,
        title: "Jyotish Bodh (Beginner Astrology Course)",
        price: 4999,
        rating: 4.9,
        lessonsCount: 10,
        category: "Beginner Astrology",
        instructor: "Neetu",
        level: "Beginner",
        duration: "6 Weeks",
        enrollmentCount: 1248,
        desc: "Learn Basics of Astrology, 12 Houses & Predictions, 12 Zodiac Signs & Predictions, 9 Planets & Their Significations, Results of Each Planet in 12 Houses, Ascendant (Lagna) Fundamentals, Planetary Aspects, Yogas in Astrology, Introduction to Dashas, and Practical Chart Reading."
    },
    2: {
        id: 2,
        title: "Numerology Fundamentals",
        price: 2499,
        rating: 4.8,
        lessonsCount: 7,
        category: "Numerology",
        instructor: "Neetu",
        level: "Beginner",
        duration: "4 Weeks",
        enrollmentCount: 852,
        desc: "Comprehensive guide to Introduction to Numerology, Life Path Number, Destiny Number, Soul Number, Personality Number, Name Numerology, and Practical Numerology Analysis."
    },
    3: {
        id: 3,
        title: "Nakshatra Foundations",
        price: 3499,
        rating: 4.9,
        lessonsCount: 5,
        category: "Nakshatras",
        instructor: "Neetu",
        level: "Intermediate",
        duration: "5 Weeks",
        enrollmentCount: 614,
        desc: "Learn 27 Nakshatras, Nakshatra Characteristics, Nakshatra Compatibility, Nakshatra Predictions, and Nakshatra-Based Remedies."
    }
};

// 3. SEED LESSONS IN STRUCTURED CURRICULUM
const lessons = {
    // Jyotish Bodh
    "1.1": { id: "1.1", courseId: 1, title: "Basics of Astrology & Cosmic Principles", duration: "53 mins", pdf: "L1_Astro_ProfCourse_Class1.pdf", pdfUrl:"/pdfs/L1_Astro_ProfCourse_Class1.pdf", youtubeEmbedId:"N_W-SOMNJ_4", videoLength: 900 },
    "1.2": { id: "1.2", courseId: 1, title: "The 12 Houses & Predictions", duration: "22 mins", pdf: "Planet_Dignities.pdf", videoLength: 1320 },
    "1.3": { id: "1.3", courseId: 1, title: "12 Zodiac Signs & Predictions", duration: "30 mins", pdf: "Dasha_Calculation_Guide.pdf", videoLength: 1800 },
    "1.4": { id: "1.4", courseId: 1, title: "9 Planets & Their Significations", duration: "20 mins", pdf: "Planets_Significations.pdf", videoLength: 1200 },
    "1.5": { id: "1.5", courseId: 1, title: "Results of Each Planet in 12 Houses", duration: "28 mins", pdf: "Planets_In_Houses.pdf", videoLength: 1680 },
    "1.6": { id: "1.6", courseId: 1, title: "Ascendant (Lagna) Fundamentals", duration: "18 mins", pdf: "Lagna_Personality_Chart.pdf", videoLength: 1080 },
    "1.7": { id: "1.7", courseId: 1, title: "Planetary Aspects & Aspects Meanings", duration: "25 mins", pdf: "Aspects_Guide.pdf", videoLength: 1500 },
    "1.8": { id: "1.8", courseId: 1, title: "Yogas in Astrology (Raj Yoga, Dhan Yoga)", duration: "26 mins", pdf: "Yogas_Workbook.pdf", videoLength: 1560 },
    "1.9": { id: "1.9", courseId: 1, title: "Introduction to Mahadasha & Antardasha", duration: "32 mins", pdf: "Dasha_Cycles_Table.pdf", videoLength: 1920 },
    "1.10": { id: "1.10", courseId: 1, title: "Practical Chart Reading & Birth Chart Analysis", duration: "40 mins", pdf: "Chart_Reading_Handout.pdf", videoLength: 2400 },
    
    // Numerology
    "2.1": { id: "2.1", courseId: 2, title: "Introduction to Numerology & Pythagorean Grid", duration: "18 mins", pdf: "Core_Numbers_Workbook.pdf", videoLength: 1080 },
    "2.2": { id: "2.2", courseId: 2, title: "Calculating & Analyzing Life Path Number", duration: "25 mins", pdf: "Life_Path_Workbook.pdf", videoLength: 1500 },
    "2.3": { id: "2.3", courseId: 2, title: "Understanding Destiny Number Calculations", duration: "20 mins", pdf: "Destiny_Calculators.pdf", videoLength: 1200 },
    "2.4": { id: "2.4", courseId: 2, title: "Soul Number & Inner Desires Mappings", duration: "19 mins", pdf: "Soul_Urges_Guide.pdf", videoLength: 1140 },
    "2.5": { id: "2.5", courseId: 2, title: "Personality Number & External Perceptions", duration: "21 mins", pdf: "Personality_Guide.pdf", videoLength: 1260 },
    "2.6": { id: "2.6", courseId: 2, title: "Name Numerology & Balancing Name Spells", duration: "24 mins", pdf: "Name_Numerology_Remedy.pdf", videoLength: 1440 },
    "2.7": { id: "2.7", courseId: 2, title: "Practical Numerology Analysis & Case Studies", duration: "30 mins", pdf: "Numerology_Workbook.pdf", videoLength: 1800 },
    
    // Nakshatras
    "3.1": { id: "3.1", courseId: 3, title: "The 27 Nakshatras & Stellar Quarters Overview", duration: "15 mins", pdf: "Stellar_Nakshatra_Map.pdf", videoLength: 900 },
    "3.2": { id: "3.2", courseId: 3, title: "Nakshatra Characteristics & Behavioral Mappings", duration: "24 mins", pdf: "Nakshatras_Table.pdf", videoLength: 1440 },
    "3.3": { id: "3.3", courseId: 3, title: "Nakshatra Compatibility for Marriages & Business", duration: "22 mins", pdf: "Stellar_Compatibility_Grid.pdf", videoLength: 1320 },
    "3.4": { id: "3.4", courseId: 3, title: "Stellar Nakshatra-Based Predictions Methods", duration: "28 mins", pdf: "Stellar_Prediction_Handout.pdf", videoLength: 1680 },
    "3.5": { id: "3.5", courseId: 3, title: "Nakshatra-Based Remedial Measures & Chants", duration: "30 mins", pdf: "Nakshatra_Remedies_Manual.pdf", videoLength: 1800 }
};

const nakshatras = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", 
    "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", 
    "Poorva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", 
    "Vishakha", "Anuradha", "Jyeshtha", "Moola", "Poorva Ashadha", 
    "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Poorva Bhadrapada", 
    "Uttara Bhadrapada", "Revati"
];

// Reactive Local State Engine with relational tables (databases)
const state = {
    theme: 'light',
    framedMode: true,
    activeTab: 'Home',
    activeCourseId: 1,
    activeLessonId: '1.1',
    selectedCategoryFilter: null,
    
    // User Session
    studentName: 'Aditya Sharma',
    wishlist: [],
    
    // Ongoing Courses Table
    enrolledCourses: [1], // Course 1 pre-enrolled
    enrolledCoursesMetadata: {
        1: { lastAccessed: "2026-05-29T17:40:00", completedCount: 1, timeRemaining: "5h 12m" },
    },
    
    // Relational Tables/Databases (Populated with 12 Upcoming courses)
    upcoming_courses: [
        { id: 101, title: "Advanced Vedic Astrology", instructor: "Neetu", duration: "8 Weeks", syllabus: "Sade Sati, transit dynamics, Ashtakavarga, and division charts.", launchDate: "2026-06-15T18:00:00", desc: "Go beyond birth charts and interpret divisions.", banner: "🕉️", category: "Advanced Astrology", level: "Advanced" },
        { id: 102, title: "Predictive Astrology Masterclass", instructor: "Neetu", duration: "6 Weeks", syllabus: "Planetary combinations, Mahadasha cycles, and precision timelines.", launchDate: "2026-06-25T10:00:00", desc: "Formulate event predictions down to exact dates.", banner: "🧭", category: "Predictive Astrology", level: "Advanced" },
        { id: 103, title: "Relationship & Marriage Astrology", instructor: "Neetu", duration: "5 Weeks", syllabus: "Kundali Milan, 7th house planetary aspects, and marital harmony.", launchDate: "2026-07-05T09:00:00", desc: "Interpret compatibility matches and marital cycles.", banner: "💖", category: "Relationship Astrology", level: "Intermediate" },
        { id: 104, title: "Career & Finance Astrology", instructor: "Neetu", duration: "4 Weeks", syllabus: "10th house parameters, second/eleventh wealth houses, and occupational predictions.", launchDate: "2026-07-15T12:00:00", desc: "Unlock corporate wealth timings and job shifts.", banner: "💼", category: "Career Astrology", level: "Intermediate" },
        { id: 105, title: "Medical Astrology", instructor: "Neetu", duration: "6 Weeks", syllabus: "Planetary houses of health, diagnosing organs, and stellar remedies.", launchDate: "2026-07-28T15:00:00", desc: "Diagnose anatomical elements from birth charts.", banner: "🩺", category: "Advanced Astrology", level: "Advanced" },
        { id: 106, title: "Transit & Dasha Interpretation", instructor: "Neetu", duration: "5 Weeks", syllabus: "Gochara transitions, Vimshottari dasha calculations, and triggers.", launchDate: "2026-08-10T17:00:00", desc: "Calculate planetary transits and dasha crossings.", banner: "🌀", category: "Predictive Astrology", level: "Intermediate" },
        { id: 107, title: "KP Astrology Fundamentals", instructor: "Neetu", duration: "6 Weeks", syllabus: "Krishnamurti Paddhati principles, cuspal sub-lords, and event timings.", launchDate: "2026-08-20T12:00:00", desc: "Learn KP sub-lords for pinpoint predictive accuracy.", banner: "📖", category: "Advanced Astrology", level: "Intermediate" },
        { id: 108, title: "Lal Kitab Astrology", instructor: "Neetu", duration: "8 Weeks", syllabus: "Ghar aspect alignments, unique predictions, and household remedies.", launchDate: "2026-09-02T16:00:00", desc: "Study remedies and planetary charts of Lal Kitab.", banner: "📕", category: "Remedies", level: "Intermediate" },
        { id: 109, title: "Numerology Mastery Program", instructor: "Neetu", duration: "6 Weeks", syllabus: "Name grid alignment, destiny formulas, and planetary number codes.", launchDate: "2026-09-15T10:00:00", desc: "Perfect name corrections and Loshu grids.", banner: "🔢", category: "Numerology", level: "Advanced" },
        { id: 110, title: "Advanced Nakshatra Analysis", instructor: "Neetu", duration: "6 Weeks", syllabus: "Nakshatra lords, Gandanta degrees, and deep psychological charts.", launchDate: "2026-10-01T15:00:00", desc: "Explore behavioral stellar patterns and quarters.", banner: "🌌", category: "Nakshatras", level: "Advanced" },
        { id: 111, title: "Astro Remedial Measures", instructor: "Neetu", duration: "4 Weeks", syllabus: "Gemstones analysis, mantra frequencies, charitable donations, and worship.", launchDate: "2026-10-18T18:00:00", desc: "Discover powerful Vedic cures for planet blockages.", banner: "🌟", category: "Remedies", level: "Beginner" },
        { id: 112, title: "Tarot & Intuitive Guidance", instructor: "Neetu", duration: "4 Weeks", syllabus: "Major and Minor Arcana cards interpretation, spreads, and intuitive triggers.", launchDate: "2026-11-05T14:00:00", desc: "Master Tarot layouts and unlock your psychic guide.", banner: "🃏", category: "Tarot", level: "Beginner" }
    ],
    
    course_notifications: [
        { id: 1, title: "Welcome Offer", text: "Namaste! Use SHIVA15 for 15% discount on checkout.", date: "2026-05-29" }
    ],
    
    user_course_interests: {}, 
    course_launch_alerts: {}, 
    
    completedLessons: {
        "1.1": true, // Jyotish Bodh lesson 1 completed initially (10% progress)
        "1.2": false,
        "1.3": false,
        "1.4": false,
        "1.5": false,
        "1.6": false,
        "1.7": false,
        "1.8": false,
        "1.9": false,
        "1.10": false,
        
        "2.1": false,
        "2.2": false,
        "2.3": false,
        "2.4": false,
        "2.5": false,
        "2.6": false,
        "2.7": false,
        
        "3.1": false,
        "3.2": false,
        "3.3": false,
        "3.4": false,
        "3.5": false
    },
    savedNotes: [],
    archivedReportsCount: 3,

    // Simulated Video Controls State
    videoPlaying: false,
    videoTime: 312,
    videoVolumeHigh: true,
    videoTab: 'resources',
    
    // Checkout State
    currentCheckoutCourseId: null,
    couponApplied: false,
    discountRate: 0.0,
    
    // Admin state
    adminPanelActive: false,
    adminRevenue: 4999,
    adminStudentsCount: 148,
    adminRoster: [
        { name: "Aditya Sharma", course: "Jyotish Bodh" }
    ],
    
    // Interactive chat state
    chatHistory: [
        { sender: 'guru', text: 'Hari Om! 🙏 I am your personal <strong>AI Astrology Guru</strong>. Ask me anything about your planetary houses, Vedic charts, Numerology ratios, or Mahadasha cycles.' }
    ],
    
    // Carousel Slide Tracking
    upcomingSlideIndex: 0,
    
    // Filter & Sort defaults
    ongoingFilter: 'All',
    ongoingSort: 'RecentlyViewed',
    
    // Admin Edit state variables
    editingCourseId: null
};

// ==========================================================================
// A. CORE BOOTSTRAP INITIALIZER
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    syncTime();
    setInterval(syncTime, 60000);
    
    // Dynamic component rendering
    renderStudyTrackChips();
    renderCourseCatalogGrid();
    renderCurriculumAccordion();
    calculateNavatara();
    
    // Enhanced catalog layouts
    renderUpcomingCoursesCarousel();
    renderUpcomingCoursesPage();
    renderOngoingCoursesDashboard();
    renderOngoingCoursesFullPage();
    updateNotificationsBell();
    
    // Auto timer tickers every second
    setInterval(updateUpcomingSlideTimers, 1000);
    
    switchNavTab('Home');
    
    const bar = document.getElementById("adminLiveBar");
    if(bar) bar.style.height = "55px";
});

function syncTime() {
    const timeSpan = document.getElementById("phoneTime");
    if (timeSpan) {
        const now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let mins = now.getMinutes().toString().padStart(2, '0');
        timeSpan.textContent = `${hours}:${mins}`;
    }
}

function showToast(msg, isSuccess = true) {
    const toast = document.getElementById("appToast");
    const icon = document.getElementById("toastIcon");
    const label = document.getElementById("toastMsg");
    
    if (toast && icon && label) {
        label.textContent = msg;
        if (isSuccess) {
            icon.className = "fa-solid fa-circle-check toast-icon";
            icon.style.color = "var(--color-secondary)";
        } else {
            icon.className = "fa-solid fa-triangle-exclamation toast-icon";
            icon.style.color = "var(--color-error)";
        }
        
        toast.classList.add("active");
        setTimeout(() => {
            toast.classList.remove("active");
        }, 3000);
    }
}

// ==========================================================================
// B. VIEW ROUTING CONTROLLERS
// ==========================================================================
function switchNavTab(tabName) {
    state.activeTab = tabName;
    
    const tabs = ['Home', 'Ongoing', 'Tools', 'Guru', 'Profile'];
    tabs.forEach(t => {
        const tabEl = document.getElementById(`tab${t}`);
        const viewEl = document.getElementById(`view${t}`);
        
        if (tabEl) tabEl.classList.remove('active');
        if (viewEl) viewEl.classList.remove('active');
    });
    
    document.getElementById("viewVideoLearning").classList.remove('active');
    
    const activeTabEl = document.getElementById(`tab${tabName}`);
    if (activeTabEl) activeTabEl.classList.add('active');
    
    const activeViewEl = document.getElementById(`view${tabName}`);
    if (activeViewEl) activeViewEl.classList.add('active');
    
    if (tabName === 'Home') {
        renderCourseCatalogGrid();
        renderOngoingCoursesDashboard();
        renderUpcomingCoursesCarousel();
        updateHomeProgressCard();
    } else if (tabName === 'Ongoing') {
        renderOngoingCoursesFullPage();
    } else if (tabName === 'Profile') {
        updateWishlistDisplay();
        updateAnalyticsTiles();
    }
    
    document.getElementById("viewCanvas").scrollTop = 0;
}

function toggleFrameMode() {
    state.framedMode = !state.framedMode;
    const frame = document.getElementById("appFrame");
    if (frame) {
        if (state.framedMode) {
            frame.classList.add("framed-mode");
        } else {
            frame.classList.remove("framed-mode");
        }
        showToast(state.framedMode ? "Device frame enabled" : "Full responsive layout enabled");
    }
}

function toggleThemeMode() {
    const html = document.documentElement;
    const btn = document.getElementById("themeToggleBtn");
    const currentTheme = html.getAttribute("data-theme");
    
    if (currentTheme === "light") {
        html.setAttribute("data-theme", "dark");
        state.theme = 'dark';
        if (btn) btn.innerHTML = `<i class="fa-regular fa-sun" style="color: var(--color-secondary);"></i>`;
        showToast("Switched to Cosmic Midnight");
    } else {
        html.setAttribute("data-theme", "light");
        state.theme = 'light';
        if (btn) btn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
        showToast("Switched to Soft Pearl Ivory");
    }
}

function toggleAdminPanel() {
    state.adminPanelActive = !state.adminPanelActive;
    const viewAdmin = document.getElementById("viewAdmin");
    
    if (viewAdmin) {
        if (state.adminPanelActive) {
            document.querySelectorAll(".nav-view").forEach(v => v.classList.remove("active"));
            viewAdmin.classList.add("active");
            document.getElementById("adminToggle").innerHTML = `<i class="fa-solid fa-xmark"></i> Exit Admin`;
            document.getElementById("adminToggle").style.background = "rgba(201, 59, 59, 0.15)";
            document.getElementById("adminToggle").style.color = "var(--color-error)";
            document.getElementById("adminToggle").style.borderColor = "var(--color-error)";
            
            // Sync Admin analytica
            document.getElementById("adminRevenue").textContent = `₹${state.adminRevenue}`;
            document.getElementById("adminStudents").textContent = state.adminStudentsCount;
            document.getElementById("adminSignups").textContent = state.enrolledCourses.length - 1; 
            
            renderAdminRoster();
            renderAdminUpcomingCoursesList();
            renderAdminActiveCoursesList();
        } else {
            document.getElementById("adminToggle").innerHTML = `<i class="fa-solid fa-user-gear"></i> Admin Panel`;
            document.getElementById("adminToggle").style.background = "rgba(212, 175, 55, 0.15)";
            document.getElementById("adminToggle").style.color = "var(--color-secondary)";
            document.getElementById("adminToggle").style.borderColor = "var(--color-secondary)";
            switchNavTab('Home');
        }
    }
}

// ==========================================================================
// C. HOMEPAGE UPCOMING SLIDESHOW CAROUSEL (TICK EVERY 5 SECONDS)
// ==========================================================================
function renderUpcomingCoursesCarousel() {
    const container = document.getElementById("upcomingSlidesContainer");
    if (!container) return;
    
    if (state.upcoming_courses.length === 0) {
        container.innerHTML = `<div style="padding:20px; text-align:center; font-size:11px; color:var(--color-text-muted);">No upcoming courses registered.</div>`;
        return;
    }
    
    let html = "";
    state.upcoming_courses.forEach((uc) => {
        const isNotified = state.user_course_interests[uc.id] === true;
        
        html += `
        <div class="upcoming-slide" id="upSlide-${uc.id}">
            <div class="up-card-banner">
                <span class="up-card-symbol">${uc.banner}</span>
                <span class="up-card-badge"><i class="fa-regular fa-clock"></i> COMING SOON</span>
                <div class="up-countdown-box" id="upCountdown-${uc.id}">
                    <div class="time-node"><span class="val">00</span><span class="lbl">Days</span></div>
                    <div class="time-node"><span class="val">00</span><span class="lbl">Hrs</span></div>
                    <div class="time-node"><span class="val">00</span><span class="lbl">Mins</span></div>
                    <div class="time-node"><span class="val">00</span><span class="lbl">Secs</span></div>
                </div>
            </div>
            <div class="up-card-body">
                <!-- VIBRANT COURSE TITLE (CINZEL SERIF TYPE) -->
                <h4 class="up-card-title">${uc.title}</h4>
                <p class="up-card-desc">${uc.desc}</p>
                <div style="font-size:10px; color:var(--color-text-muted); margin-bottom:8px;">
                    <span><i class="fa-solid fa-graduation-cap"></i> ${uc.instructor}</span> • 
                    <span><i class="fa-regular fa-calendar-days"></i> Starts: ${new Date(uc.launchDate).toLocaleDateString()}</span>
                </div>
                <div class="up-card-actions">
                    <button class="notify-action-btn ${isNotified ? 'notified' : ''}" onclick="toggleNotificationInterest(event, ${uc.id})">
                        <i class="fa-${isNotified ? 'solid fa-bell-slash' : 'regular fa-bell'}"></i> 
                        ${isNotified ? 'Notified' : 'Notify Me'}
                    </button>
                    <button class="up-syllabus-btn" onclick="openUpcomingSyllabusPreview(${uc.id})">
                        <i class="fa-solid fa-circle-info"></i> Syllabus
                    </button>
                </div>
            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
    updateUpcomingSlideTimers();
    adjustCarouselPosition();
}

function adjustCarouselPosition() {
    const slider = document.getElementById("upcomingSlidesContainer");
    if(slider) {
        slider.style.transform = `translateX(-${state.upcomingSlideIndex * 100}%)`;
    }
    
    const dotsContainer = document.getElementById("upcomingDotsContainer");
    if (dotsContainer) {
        let dotsHtml = "";
        state.upcoming_courses.forEach((_, idx) => {
            dotsHtml += `<div class="upcoming-nav-dot ${idx === state.upcomingSlideIndex ? 'active' : ''}" onclick="moveUpcomingSlide(${idx})"></div>`;
        });
        dotsContainer.innerHTML = dotsHtml;
    }
}

function moveUpcomingSlide(idx) {
    if (idx < 0) idx = state.upcoming_courses.length - 1;
    if (idx >= state.upcoming_courses.length) idx = 0;
    
    state.upcomingSlideIndex = idx;
    adjustCarouselPosition();
}

function slideUpcomingNext() {
    moveUpcomingSlide(state.upcomingSlideIndex + 1);
}

function slideUpcomingPrev() {
    moveUpcomingSlide(state.upcomingSlideIndex - 1);
}

// Auto slider ticker set exactly to 5 seconds
setInterval(() => {
    if (state.activeTab === 'Home' && !state.adminPanelActive && state.upcoming_courses.length > 1) {
        slideUpcomingNext();
    }
}, 5000);

function updateUpcomingSlideTimers() {
    state.upcoming_courses.forEach(uc => {
        const timerBox = document.getElementById(`upCountdown-${uc.id}`);
        const cardTimer = document.getElementById(`cardTimer-${uc.id}`);
        if (!timerBox && !cardTimer) return;
        
        const launchTime = new Date(uc.launchDate).getTime();
        const now = new Date().getTime();
        const diff = launchTime - now;
        
        let days = 0, hours = 0, mins = 0, secs = 0;
        
        if (diff > 0) {
            days = Math.floor(diff / (1000 * 60 * 60 * 24));
            hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            secs = Math.floor((diff % (1000 * 60)) / 1000);
        }
        
        const dStr = days.toString().padStart(2, '0');
        const hStr = hours.toString().padStart(2, '0');
        const mStr = mins.toString().padStart(2, '0');
        const sStr = secs.toString().padStart(2, '0');
        
        if (timerBox) {
            timerBox.innerHTML = `
                <div class="time-node"><span class="val">${dStr}</span><span class="lbl">Days</span></div>
                <div class="time-node"><span class="val">${hStr}</span><span class="lbl">Hrs</span></div>
                <div class="time-node"><span class="val">${mStr}</span><span class="lbl">Mins</span></div>
                <div class="time-node"><span class="val">${sStr}</span><span class="lbl">Secs</span></div>
            `;
        }
        
        if (cardTimer) {
            cardTimer.textContent = `${dStr}d ${hStr}h ${mStr}m ${sStr}s`;
        }
    });
}

// ==========================================================================
// D. NOTIFICATION LOGIC
// ==========================================================================
function toggleNotificationInterest(event, courseId) {
    if(event) event.stopPropagation();
    
    const isInterested = state.user_course_interests[courseId] === true;
    const uCourse = state.upcoming_courses.find(c => c.id === courseId) || courses[courseId];
    if(!uCourse) return;
    
    if (isInterested) {
        delete state.user_course_interests[courseId];
        showToast(`Cancelled launch notifications for ${uCourse.title}`);
    } else {
        state.user_course_interests[courseId] = true;
        
        const alertId = Object.keys(state.course_notifications).length + 1;
        state.course_notifications.push({
            id: alertId,
            title: "Interest Registered",
            text: `We will notify you immediately when "${uCourse.title}" launches!`,
            date: new Date().toISOString().split('T')[0]
        });
        
        console.log(`[Astral Notification Service] Sent launch confirmation email successfully to aditya.sharma@astro.com regarding "${uCourse.title}"!`);
        showToast(`Notifications active for "${uCourse.title.substring(0, 15)}..."!`, true);
        updateNotificationsBell();
    }
    
    renderUpcomingCoursesCarousel();
    renderUpcomingCoursesPage();
}

function updateNotificationsBell() {
    const badge = document.getElementById("bellBadge");
    if(badge) {
        badge.style.display = "block";
    }
}

function showNotificationCenter() {
    const list = state.course_notifications;
    if (list.length === 0) {
        showToast("No notifications archived.");
        return;
    }
    
    const lastNotif = list[list.length - 1];
    showToast(`Latest: ${lastNotif.text}`, true);
    
    const badge = document.getElementById("bellBadge");
    if(badge) badge.style.display = "none";
}

// ==========================================================================
// E. CURRENT ACTIVE COURSES GRID (POPULATE EVERY DETAIL BLOCK)
// ==========================================================================
function renderStudyTrackChips() {
    const container = document.getElementById("categoriesContainer");
    if (!container) return;
    
    let html = `<div class="category-chip ${state.selectedCategoryFilter === null ? 'active' : ''}" onclick="filterCategory(null)">
                    <i class="fa-solid fa-dharmachakra"></i> All Categories
                </div>`;
                
    categories.forEach(cat => {
        const isActive = state.selectedCategoryFilter === cat;
        let icon = "fa-star";
        if (cat.includes("Beginner")) icon = "fa-om";
        if (cat.includes("Advanced")) icon = "fa-compass";
        if (cat.includes("Numerology")) icon = "fa-calculator";
        if (cat.includes("Nakshatras")) icon = "fa-chess-board";
        if (cat.includes("Predictive")) icon = "fa-star-of-david";
        if (cat.includes("Career")) icon = "fa-briefcase";
        if (cat.includes("Relationship")) icon = "fa-heart";
        if (cat.includes("Remedies")) icon = "fa-wand-magic-sparkles";
        if (cat.includes("Tarot")) icon = "fa-clone";
        
        html += `<div class="category-chip ${isActive ? 'active' : ''}" onclick="filterCategory('${cat}')">
                    <i class="fa-solid ${icon}"></i> ${cat}
                 </div>`;
    });
    
    container.innerHTML = html;
}

function filterCategory(cat) {
    state.selectedCategoryFilter = cat;
    renderStudyTrackChips();
    renderCourseCatalogGrid();
}

function clearCatalogFilter() {
    filterCategory(null);
}

function renderCourseCatalogGrid() {
    const grid = document.getElementById("courseCatalogGrid");
    if (!grid) return;
    
    let html = "";
    const filter = state.selectedCategoryFilter;
    
    Object.values(courses).forEach(c => {
        if (filter && c.category !== filter) return;
        
        const isWishlisted = state.wishlist.includes(c.id);
        const isEnrolled = state.enrolledCourses.includes(c.id);
        
        let symbol = "🕉️";
        let cardGradient = "linear-gradient(135deg, #4A154B 0%, #762A78 100%)";
        if (c.category.includes("Numerology")) {
            symbol = "🔢";
            cardGradient = "linear-gradient(135deg, #762A78 0%, var(--color-secondary) 100%)";
        }
        if (c.category.includes("Nakshatras")) {
            symbol = "🌌";
            cardGradient = "linear-gradient(135deg, #1e112d 0%, #4A154B 100%)";
        }
        
        const progress = calculateCourseProgress(c.id);
        
        html += `
        <div class="course-card" id="courseCard-${c.id}">
            <div class="course-image-wrapper" style="background: ${cardGradient}">
                <div class="course-symbol-icon">${symbol}</div>
                <button class="wishlist-heart-btn ${isWishlisted ? 'liked' : ''}" onclick="toggleWishlist(event, ${c.id})">
                    <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <span class="course-tag">${c.category}</span>
                <span class="course-level-badge level-${c.level.toLowerCase()}">${c.level}</span>
            </div>
            <div class="course-body">
                <span class="course-instructor">Instructor: ${c.instructor}</span>
                
                <!-- BOLD EXPLICIT COURSE NAME VISIBILITY -->
                <h4 class="course-card-title" style="font-family: var(--font-serif); font-weight: 800; font-size:15px; color: var(--color-primary);">${c.title}</h4>
                <p class="course-card-desc">${c.desc}</p>
                
                <!-- E-LEARNING SPECIFIC METADATA BLOCKS -->
                <div class="course-meta-tags-row">
                    <span><i class="fa-regular fa-clock"></i> ${c.duration}</span>
                    <span><i class="fa-solid fa-book-open"></i> ${c.lessonsCount} lessons</span>
                    <span><i class="fa-solid fa-user-group"></i> ${c.enrollmentCount} Enrolled</span>
                </div>
                
                <div class="course-rating-row">
                    <span class="star-icon-rating">★</span>
                    <span style="font-weight:700;">${c.rating}</span>
                    <span style="color:var(--color-text-muted); font-size:10px;">(124 reviews)</span>
                </div>
                
                ${isEnrolled ? `
                <div class="ongoing-bar-grp" style="margin-top: 4px;">
                    <div class="ongoing-bar-timeline"><div class="fill" style="width: ${progress}%;"></div></div>
                    <span class="ongoing-percent">${progress}% Complete</span>
                </div>` : ''}

                <div class="course-meta-footer">
                    <span class="course-price-label">₹${c.price.toLocaleString('en-IN')}</span>
                    ${isEnrolled ? 
                        `<button class="enroll-action-btn" onclick="openCourseView(${c.id})" style="background: var(--color-secondary); color: var(--color-primary); font-weight:700;">Resume <i class="fa-solid fa-chevron-right"></i></button>` : 
                        `<button class="enroll-action-btn" onclick="openCheckoutModal(${c.id})">Enroll Now</button>`
                    }
                </div>
            </div>
        </div>
        `;
    });
    
    if (html === "") {
        html = `<div style="text-align:center; padding: 20px; font-size:12px; color:var(--color-text-muted);">No courses published in this study track yet. Check out the Upcoming list!</div>`;
    }
    
    grid.innerHTML = html;
}

function handleCatalogSearch() {
    const val = document.getElementById("courseSearch").value.toLowerCase();
    const grid = document.getElementById("courseCatalogGrid");
    if (!grid) return;
    
    if(val.length > 0) {
        state.selectedCategoryFilter = null;
        renderStudyTrackChips();
    }
    
    let html = "";
    Object.values(courses).forEach(c => {
        if (c.title.toLowerCase().includes(val) || c.desc.toLowerCase().includes(val) || c.category.toLowerCase().includes(val)) {
            const isWishlisted = state.wishlist.includes(c.id);
            const isEnrolled = state.enrolledCourses.includes(c.id);
            let symbol = "🕉️";
            if (c.category.includes("Numerology")) symbol = "🔢";
            if (c.category.includes("Nakshatras")) symbol = "🌌";
            
            html += `
            <div class="course-card">
                <div class="course-image-wrapper">
                    <div class="course-symbol-icon">${symbol}</div>
                    <button class="wishlist-heart-btn ${isWishlisted ? 'liked' : ''}" onclick="toggleWishlist(event, ${c.id})">
                        <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                    <span class="course-tag">${c.category}</span>
                </div>
                <div class="course-body">
                    <span class="course-instructor">Instructor: ${c.instructor}</span>
                    <h4 class="course-card-title">${c.title}</h4>
                    <p class="course-card-desc">${c.desc}</p>
                    <div class="course-meta-tags-row">
                        <span><i class="fa-regular fa-clock"></i> ${c.duration}</span>
                        <span><i class="fa-solid fa-book-open"></i> ${c.lessonsCount} lessons</span>
                    </div>
                    <div class="course-rating-row">
                        <span class="star-icon-rating">★</span>
                        <span>${c.rating}</span>
                    </div>
                    <div class="course-meta-footer">
                        <span class="course-price-label">₹${c.price.toLocaleString('en-IN')}</span>
                        ${isEnrolled ? 
                            `<button class="enroll-action-btn" onclick="openCourseView(${c.id})" style="background: var(--color-secondary); color: var(--color-primary);">Resume</button>` : 
                            `<button class="enroll-action-btn" onclick="openCheckoutModal(${c.id})">Enroll Now</button>`
                        }
                    </div>
                </div>
            </div>
            `;
        }
    });
    
    grid.innerHTML = html === "" ? `<div style="text-align:center; padding: 20px; font-size:12px; color:var(--color-text-muted);">No results found. Try searching for "Jyotish" or "Nakshatra".</div>` : html;
}

function toggleWishlist(event, courseId) {
    if(event) event.stopPropagation();
    
    const index = state.wishlist.indexOf(courseId);
    const course = courses[courseId] || state.upcoming_courses.find(u => u.id === courseId);
    if (!course) return;
    
    if (index === -1) {
        state.wishlist.push(courseId);
        showToast(`Added "${course.title.substring(0, 15)}..." to Favorites`);
    } else {
        state.wishlist.splice(index, 1);
        showToast(`Removed from Favorites`);
    }
    
    renderCourseCatalogGrid();
    updateWishlistDisplay();
}

function updateHomeProgressCard() {
    const section = document.getElementById("continueLearningSection");
    if (!section) return;
    
    const activeId = state.activeCourseId;
    const course = courses[activeId];
    
    if (!course || !state.enrolledCourses.includes(activeId)) {
        section.style.display = "none";
        return;
    }
    
    section.style.display = "block";
    
    // Display Course Name Boldly
    document.getElementById("contCourseTitle").textContent = course.title;
    
    const percent = calculateCourseProgress(activeId);
    document.getElementById("contCoursePercent").textContent = `${percent}%`;
    document.getElementById("contCourseBar").style.width = `${percent}%`;
    
    let nextUpText = "Course Assessment Complete! 🏆";
    let nextUpLesson = null;
    
    const courseLessons = Object.values(lessons).filter(l => l.courseId === activeId);
    for (let i = 0; i < courseLessons.length; i++) {
        if (!state.completedLessons[courseLessons[i].id]) {
            nextUpLesson = courseLessons[i];
            break;
        }
    }
    
    if (nextUpLesson) {
        nextUpText = `Next Up: Lesson ${nextUpLesson.id} - ${nextUpLesson.title}`;
    }
    document.getElementById("contCourseNextUp").textContent = nextUpText;
}

function calculateCourseProgress(courseId) {
    const courseLessons = Object.values(lessons).filter(l => l.courseId === courseId);
    if (courseLessons.length === 0) return 0;
    
    const completedCount = courseLessons.filter(l => state.completedLessons[l.id] === true).length;
    return Math.round((completedCount / courseLessons.length) * 100);
}

function openActiveCourseLearning() {
    openCourseView(state.activeCourseId);
}

// ==========================================================================
// F. VIDEO VIEW & CHECKLIST ACCORDIONS
// ==========================================================================
function openCourseView(courseId) {
    state.activeCourseId = courseId;
    
    // Track Last Accessed Timestamps
    if (!state.enrolledCoursesMetadata[courseId]) {
        state.enrolledCoursesMetadata[courseId] = {};
    }
    state.enrolledCoursesMetadata[courseId].lastAccessed = new Date().toISOString();
    
    document.querySelectorAll(".nav-view").forEach(v => v.classList.remove("active"));
    document.getElementById("viewVideoLearning").classList.add("active");
    
    const course = courses[courseId];
    document.getElementById("courseViewSubject").textContent = course.category;
    
    const courseLessons = Object.values(lessons).filter(l => l.courseId === courseId);
    if (courseLessons.length > 0) {
        let lessonToLoad = courseLessons[0];
        for (let l of courseLessons) {
            if (!state.completedLessons[l.id]) {
                lessonToLoad = l;
                break;
            }
        }
        loadLessonVideo(lessonToLoad.id);
    }
    
    renderCurriculumAccordion();
    
    document.getElementById("appHeader").style.display = "none";
    document.getElementById("appBottomNav").style.display = "none";
    
    checkCertificateThreshold();
}

function backToHomeView() {
    document.getElementById("appHeader").style.display = "flex";
    document.getElementById("appBottomNav").style.display = "grid";
    
    if (state.videoPlaying) {
        toggleSimVideoPlayback();
    }
    
    switchNavTab('Home');
}

function renderCurriculumAccordion() {
    const container = document.getElementById("curriculumListContainer");
    if (!container) return;
    
    const courseId = state.activeCourseId;
    const courseLessons = Object.values(lessons).filter(l => l.courseId === courseId);
    
    let html = "";
    courseLessons.forEach(l => {
        const isChecked = state.completedLessons[l.id] === true;
        const isActive = state.activeLessonId === l.id;
        
        html += `
        <div class="curriculum-lesson-item ${isActive ? 'active-playing' : ''}">
            <input type="checkbox" class="lesson-checkbox" ${isChecked ? 'checked' : ''} onchange="handleLessonCheckboxToggle(event, '${l.id}')">
            <div class="lesson-info-col" onclick="loadLessonVideo('${l.id}')">
                <span class="lesson-name-text">Lesson ${l.id}: ${l.title}</span>
                <span class="lesson-duration-badge"><i class="fa-regular fa-clock"></i> ${l.duration}</span>
            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
}

function toggleCurriculumAccordion() {
    const body = document.getElementById("curriculumListContainer");
    const chevron = document.getElementById("accordionChevron");
    if (body && chevron) {
        if (body.style.display === "none") {
            body.style.display = "flex";
            chevron.className = "fa-solid fa-chevron-down";
        } else {
            body.style.display = "none";
            chevron.className = "fa-solid fa-chevron-up";
        }
    }
}

function loadLessonVideo(lessonId) {
    state.activeLessonId = lessonId;
    const lesson = lessons[lessonId];
    if (!lesson) return;

    state.videoPlaying = false;
    state.videoTime = 0;

    document.getElementById("courseViewLessonTitle").textContent =
        `${lessonId} ${lesson.title}`;

    updateSimVideoTimeline();

    // =========================
    // LOAD YOUTUBE VIDEO
    // =========================
    const ytPlayer = document.getElementById("youtubePlayer");

    if (ytPlayer) {
        if (lesson.youtubeEmbedId) {
            ytPlayer.src =
                `https://www.youtube.com/embed/${lesson.youtubeEmbedId}`;
        } else {
            ytPlayer.src = "";
        }
    }

    // =========================
    // LOAD PDF
    // =========================
    const pdfViewer = document.getElementById("pdfViewer");

if (pdfViewer) {
    pdfViewer.style.display = "none";
}

    // Resources section
    const resPdf = document.getElementById("resPdfLabel");

    if (resPdf) {
        resPdf.textContent =
            lesson.pdf || "No PDF available";
    }

    renderSavedNotes();
    renderCurriculumAccordion();
}

let videoTicker = null;
function toggleSimVideoPlayback() {
    state.videoPlaying = !state.videoPlaying;
    
    const playIconCenter = document.getElementById("centerPlayIcon");
    const playIconControls = document.getElementById("controlsPlayIcon");
    const statusLbl = document.getElementById("simVideoStatusLabel");
    const overlay = document.getElementById("videoCanvasOverlay");
    
    if (state.videoPlaying) {
        if(playIconCenter) playIconCenter.className = "fa-solid fa-pause";
        if(playIconControls) playIconControls.className = "fa-solid fa-pause";
        if(statusLbl) statusLbl.textContent = "Simulating Streaming Stream...";
        if(overlay) overlay.style.opacity = "0.2";
        
        videoTicker = setInterval(() => {
            const lesson = lessons[state.activeLessonId];
            if (state.videoTime < lesson.videoLength) {
                state.videoTime += 2; 
                updateSimVideoTimeline();
            } else {
                clearInterval(videoTicker);
                state.videoPlaying = false;
                if(playIconCenter) playIconCenter.className = "fa-solid fa-rotate-left";
                if(playIconControls) playIconControls.className = "fa-solid fa-play";
                if(statusLbl) statusLbl.textContent = "Lesson Complete!";
                if(overlay) overlay.style.opacity = "0.9";
                
                autoCompleteCurrentLesson();
            }
        }, 1000);
    } else {
        clearInterval(videoTicker);
        if(playIconCenter) playIconCenter.className = "fa-solid fa-play";
        if(playIconControls) playIconControls.className = "fa-solid fa-play";
        if(statusLbl) statusLbl.textContent = "Video Paused";
        if(overlay) overlay.style.opacity = "0.9";
    }
}

function skipSimVideo(seconds) {
    const lesson = lessons[state.activeLessonId];
    state.videoTime += seconds;
    if (state.videoTime < 0) state.videoTime = 0;
    if (state.videoTime > lesson.videoLength) state.videoTime = lesson.videoLength;
    updateSimVideoTimeline();
}

function updateSimVideoTimeline() {
    const lesson = lessons[state.activeLessonId];
    const fill = document.getElementById("simProgressFill");
    const label = document.getElementById("simVideoTimeLabel");
    const notesTimestamp = document.getElementById("noteTimestampLabel");
    
    if (fill && label) {
        const percent = (state.videoTime / lesson.videoLength) * 100;
        fill.style.width = `${percent}%`;
        
        const curMins = Math.floor(state.videoTime / 60).toString().padStart(2, '0');
        const curSecs = (state.videoTime % 60).toString().padStart(2, '0');
        
        const totMins = Math.floor(lesson.videoLength / 60).toString().padStart(2, '0');
        const totSecs = (lesson.videoLength % 60).toString().padStart(2, '0');
        
        label.textContent = `${curMins}:${curSecs} / ${totMins}:${totSecs}`;
        if(notesTimestamp) {
            notesTimestamp.textContent = `Anchored Timestamp: ${curMins}:${curSecs}`;
        }
    }
}

function seekSimVideo(event) {
    const timeline = event.currentTarget;
    const rect = timeline.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    const clickRatio = clickX / width;
    
    const lesson = lessons[state.activeLessonId];
    state.videoTime = Math.round(clickRatio * lesson.videoLength);
    updateSimVideoTimeline();
}

function toggleSimVolume() {
    state.videoVolumeHigh = !state.videoVolumeHigh;
    const icon = document.getElementById("volumeIcon");
    if(icon) {
        icon.className = state.videoVolumeHigh ? "fa-solid fa-volume-high" : "fa-solid fa-volume-xmark";
    }
    showToast(state.videoVolumeHigh ? "Audio enabled" : "Muted audio");
}

function switchVideoTabs(tab) {
    state.videoTab = tab;
    
    const btnRes = document.getElementById("tabBtnResources");
    const btnNts = document.getElementById("tabBtnNotes");
    const panelRes = document.getElementById("videoResourcesPanel");
    const panelNts = document.getElementById("videoNotesPanel");
    
    if (tab === 'resources') {
        if(btnRes) btnRes.classList.add("active");
        if(btnNts) btnNts.classList.remove("active");
        if(panelRes) panelRes.style.display = "block";
        if(panelNts) panelNts.style.display = "none";
    } else {
        if(btnRes) btnRes.classList.remove("active");
        if(btnNts) btnNts.classList.add("active");
        if(panelRes) panelRes.style.display = "none";
        if(panelNts) panelNts.style.display = "block";
        renderSavedNotes();
    }
}

function triggerResourceDownload() {
    const lesson = lessons[state.activeLessonId];

    if (lesson && lesson.pdfUrl) {
        openPdfModal(lesson.pdfUrl);
    } else {
        showToast("PDF not available", false);
    }
}

function handleLessonCheckboxToggle(event, lessonId) {
    state.completedLessons[lessonId] = event.target.checked;
    
    checkCertificateThreshold();
    updateHomeProgressCard();
    renderOngoingCoursesFullPage();
}

function autoCompleteCurrentLesson() {
    state.completedLessons[state.activeLessonId] = true;
    renderCurriculumAccordion();
    updateHomeProgressCard();
    checkCertificateThreshold();
    renderOngoingCoursesFullPage();
}

function savePersonalNote() {
    const text = document.getElementById("noteInput").value.trim();
    if (text === "") return;
    
    const mins = Math.floor(state.videoTime / 60).toString().padStart(2, '0');
    const secs = (state.videoTime % 60).toString().padStart(2, '0');
    const timeStr = `${mins}:${secs}`;
    
    state.savedNotes.push({
        lessonId: state.activeLessonId,
        time: timeStr,
        text: text
    });
    
    document.getElementById("noteInput").value = "";
    showToast("Interactive Note saved locally!");
    renderSavedNotes();
}

function renderSavedNotes() {
    const container = document.getElementById("notesFeedContainer");
    if (!container) return;
    
    const feedNotes = state.savedNotes.filter(n => n.lessonId === state.activeLessonId);
    
    if (feedNotes.length === 0) {
        container.innerHTML = `<div style="font-size: 10px; color:var(--color-text-muted); font-style:italic;">No notes compiled for this lesson yet.</div>`;
        return;
    }
    
    let html = "";
    feedNotes.forEach(n => {
        html += `
        <div class="saved-note-card">
            <div class="note-card-time"><i class="fa-regular fa-clock"></i> Timestamp: ${n.time}</div>
            <div class="note-card-text">${n.text}</div>
        </div>
        `;
    });
    
    container.innerHTML = html;
}

function checkCertificateThreshold() {
    const courseId = state.activeCourseId;
    const progress = calculateCourseProgress(courseId);
    const overlay = document.getElementById("certificateOverlay");
    
    if (progress === 100) {
        if (state.videoPlaying) toggleSimVideoPlayback();
        
        const course = courses[courseId];
        document.getElementById("certCourseTitle").textContent = course.title;
        document.getElementById("certStudentName").textContent = state.studentName;
        
        if(overlay) overlay.style.display = "block";
        showToast("Congratulations! 🏆 Course Completed. Certificate ready.");
    } else {
        if(overlay) overlay.style.display = "none";
    }
}

function closeCertificateOverlay() {
    const overlay = document.getElementById("certificateOverlay");
    if(overlay) overlay.style.display = "none";
}

function printCertificate() {
    showToast("PDF generation complete! Opening print dialog...", true);
    window.print();
}

// ==========================================================================
// G. ONGOING COURSES TAB & FILTER CONTROLS
// ==========================================================================
function renderOngoingCoursesDashboard() {
    const container = document.getElementById("ongoingPreviewContainer");
    if (!container) return;
    
    if (state.enrolledCourses.length === 0) {
        container.innerHTML = `<div style="font-size:11px; text-align:center; padding:10px; color:var(--color-text-muted);">You have not enrolled in any ongoing courses.</div>`;
        return;
    }
    
    let html = "";
    const sortedEnrolled = [...state.enrolledCourses].sort((a, b) => {
        const timeA = state.enrolledCoursesMetadata[a]?.lastAccessed || "";
        const timeB = state.enrolledCoursesMetadata[b]?.lastAccessed || "";
        return timeB.localeCompare(timeA);
    });
    
    sortedEnrolled.forEach(cid => {
        const c = courses[cid];
        if(!c) return;
        
        const progress = calculateCourseProgress(cid);
        
        let symbol = "🕉️";
        if (c.category.includes("Numerology")) symbol = "🔢";
        if (c.category.includes("Nakshatras")) symbol = "🌌";
        
        let nextLessonStr = "Course Complete! 🏆";
        const courseLessons = Object.values(lessons).filter(l => l.courseId === cid);
        const incomplete = courseLessons.find(l => !state.completedLessons[l.id]);
        if(incomplete) {
            nextLessonStr = `Next: Lesson ${incomplete.id}`;
        }
        
        html += `
        <div class="ongoing-horizontal-card" onclick="openCourseView(${c.id})">
            <div class="ongoing-card-symbol">${symbol}</div>
            <div style="flex:1;">
                <h5 class="ongoing-card-title">${c.title}</h5>
                <span style="font-size:10px; color:var(--color-text-muted); display:block; margin:2px 0;">
                    Guru: ${c.instructor} • ${nextLessonStr}
                </span>
                <div class="ongoing-bar-grp">
                    <div class="ongoing-bar-timeline"><div class="fill" style="width: ${progress}%;"></div></div>
                    <span class="ongoing-percent">${progress}%</span>
                </div>
            </div>
            <button class="ongoing-continue-btn"><i class="fa-solid fa-play"></i></button>
        </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderOngoingCoursesFullPage() {
    const listContainer = document.getElementById("ongoingFullList");
    if (!listContainer) return;
    
    const filter = state.ongoingFilter;
    const sort = state.ongoingSort;
    
    let filteredIds = state.enrolledCourses.filter(cid => {
        const c = courses[cid];
        if(!c) return false;
        
        const progress = calculateCourseProgress(cid);
        const isCompleted = progress === 100;
        
        if (filter === 'All') return true;
        if (filter === 'Completed' && isCompleted) return true;
        if (filter === 'Astrology' && c.category.includes("Astrology") && !isCompleted) return true;
        if (filter === 'Numerology' && c.category.includes("Numerology") && !isCompleted) return true;
        
        return false;
    });
    
    filteredIds.sort((a, b) => {
        const cA = courses[a];
        const cB = courses[b];
        const metaA = state.enrolledCoursesMetadata[a] || {};
        const metaB = state.enrolledCoursesMetadata[b] || {};
        
        const progressA = calculateCourseProgress(a);
        const progressB = calculateCourseProgress(b);
        
        if (sort === 'RecentlyViewed') {
            const timeA = metaA.lastAccessed || "";
            const timeB = metaB.lastAccessed || "";
            return timeB.localeCompare(timeA);
        }
        if (sort === 'HighestProgress') {
            return progressB - progressA;
        }
        if (sort === 'NewlyEnrolled') {
            return b - a; 
        }
        if (sort === 'Alphabetical') {
            return cA.title.localeCompare(cB.title);
        }
        return 0;
    });
    
    if (filteredIds.length === 0) {
        listContainer.innerHTML = `<div style="text-align:center; padding: 40px 20px; font-size:12px; color:var(--color-text-muted);">No ongoing courses match these filters. Visit Home to enroll in new study tracks!</div>`;
        return;
    }
    
    let html = "";
    filteredIds.forEach(cid => {
        const c = courses[cid];
        const progress = calculateCourseProgress(cid);
        const meta = state.enrolledCoursesMetadata[cid] || { lastAccessed: new Date().toISOString() };
        
        let symbol = "🕉️";
        if (c.category.includes("Numerology")) symbol = "🔢";
        if (c.category.includes("Nakshatras")) symbol = "🌌";
        
        const formattedDate = new Date(meta.lastAccessed).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
        
        html += `
        <div class="course-card">
            <div class="course-image-wrapper" style="height:100px;">
                <div class="course-symbol-icon" style="font-size:36px;">${symbol}</div>
                <span class="course-tag">${c.category}</span>
                <span class="course-level-badge level-${c.level.toLowerCase()}">${c.level}</span>
            </div>
            <div class="course-body">
                <span class="course-instructor">Instructor: ${c.instructor}</span>
                <h4 class="course-card-title" style="font-family:var(--font-serif); font-weight:800; font-size:14px;">${c.title}</h4>
                <div class="ongoing-bar-grp" style="margin: 4px 0 8px 0;">
                    <div class="ongoing-bar-timeline" style="height:6px;"><div class="fill" style="width: ${progress}%;"></div></div>
                    <span class="ongoing-percent" style="font-size:10px;">${progress}%</span>
                </div>
                <div style="font-size:10px; color:var(--color-text-muted); display:flex; justify-content:space-between; align-items:center;">
                    <span>Last Accessed: ${formattedDate}</span>
                    <span>Lessons Complete: ${progress === 100 ? 'All' : 'Resume'}</span>
                </div>
                <div class="course-meta-footer" style="margin-top:8px; padding-top:8px;">
                    <span class="course-price-label" style="font-size:12px;">Enrolled</span>
                    <button class="enroll-action-btn" onclick="openCourseView(${c.id})" style="background: var(--color-primary); padding: 6px 12px; font-size:10px;">
                        Continue Learning <i class="fa-solid fa-arrow-right" style="margin-left:4px;"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
    });
    
    listContainer.innerHTML = html;
}

function handleOngoingFilterChange(filterVal) {
    state.ongoingFilter = filterVal;
    
    const filters = ['All', 'Astrology', 'Numerology', 'Completed'];
    filters.forEach(f => {
        const btn = document.getElementById(`ongoingPill-${f}`);
        if(btn) btn.classList.remove('active');
    });
    
    const activeBtn = document.getElementById(`ongoingPill-${filterVal}`);
    if(activeBtn) activeBtn.classList.add('active');
    
    renderOngoingCoursesFullPage();
}

function handleOngoingSortChange() {
    const sel = document.getElementById("ongoingSortSelector");
    if(sel) {
        state.ongoingSort = sel.value;
        renderOngoingCoursesFullPage();
    }
}

// ==========================================================================
// H. UPCOMING COURSES LISTING PAGE
// ==========================================================================
function renderUpcomingCoursesPage() {
    const container = document.getElementById("upcomingCoursesFullList");
    if (!container) return;
    
    let html = "";
    state.upcoming_courses.forEach(uc => {
        const isNotified = state.user_course_interests[uc.id] === true;
        const isWishlisted = state.wishlist.includes(uc.id);
        
        html += `
        <div class="upcoming-full-card">
            <div class="up-full-badge-row">
                <span class="up-full-symbol-decor">${uc.banner}</span>
                <span class="coming-soon-badge-sm">COMING SOON</span>
            </div>
            <h4 class="up-full-title">${uc.title}</h4>
            <p class="up-full-desc">${uc.desc}</p>
            
            <div class="up-info-metrics-row">
                <div class="metric"><i class="fa-solid fa-user-tie"></i> <span>Neetu</span></div>
                <div class="metric"><i class="fa-regular fa-clock"></i> <span>${uc.duration}</span></div>
                <div class="metric"><i class="fa-regular fa-calendar-days"></i> <span>Launch Date:</span> <strong style="color:var(--color-secondary);">${new Date(uc.launchDate).toLocaleDateString()}</strong></div>
            </div>

            <div class="up-syllabus-collapsible">
                <strong style="color:var(--color-primary); font-size:11px;">Preview Course Syllabus:</strong>
                <p style="margin-top:4px;">${uc.syllabus}</p>
            </div>

            <div class="up-card-timer-row">
                <span>Countdown until launch:</span>
                <span class="up-card-timer-clock" id="cardTimer-${uc.id}">00d 00h 00m 00s</span>
            </div>

            <div class="up-full-card-actions">
                <button class="notify-action-btn ${isNotified ? 'notified' : ''}" onclick="toggleNotificationInterest(event, ${uc.id})">
                    <i class="fa-${isNotified ? 'solid fa-bell-slash' : 'regular fa-bell'}"></i> 
                    ${isNotified ? 'Notified' : 'Notify Me'}
                </button>
                <button class="up-wishlist-toggle" onclick="toggleWishlist(event, ${uc.id})">
                    <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i> Add to Wishlist
                </button>
            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
}

function openUpcomingSyllabusPreview(courseId) {
    const uc = state.upcoming_courses.find(c => c.id === courseId);
    if (!uc) return;
    
    const modalHtml = `
        <div class="checkout-sheet" style="border-top-color:var(--color-primary); transform:translateY(0); animation:none;">
            <div class="checkout-sheet-header">
                <h4 class="checkout-sheet-title"><i class="fa-solid fa-graduation-cap"></i> ${uc.title} Syllabus</h4>
                <button class="checkout-close-btn" onclick="closeCheckoutModal()"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div style="font-size:12px; color:var(--color-text); line-height:1.4; display:flex; flex-direction:column; gap:10px;">
                <p><strong>Instructor:</strong> ${uc.instructor}</p>
                <p><strong>Course Duration:</strong> ${uc.duration}</p>
                <p><strong>Course Level:</strong> ${uc.level}</p>
                <p><strong>Estimated Launch:</strong> ${new Date(uc.launchDate).toLocaleString()}</p>
                <div style="background:var(--bg-app); border:1px solid var(--color-border); padding:10px; border-radius:var(--border-radius-sm);">
                    <strong style="color:var(--color-primary); display:block; margin-bottom:4px;">Structured Curriculum Outline:</strong>
                    <span>${uc.syllabus}</span>
                </div>
            </div>
            <button class="action-submit-btn" onclick="toggleNotificationInterest(null, ${uc.id}); closeCheckoutModal();">
                <i class="fa-solid fa-bell"></i> Notify Me On Launch
            </button>
        </div>
    `;
    
    const checkoutModal = document.getElementById("checkoutModal");
    if (checkoutModal) {
        checkoutModal.innerHTML = modalHtml;
        checkoutModal.style.display = "flex";
    }
}

// ==========================================================================
// I. SECURED CHECKOUT TRANSACTIONS & WISHLIST SYNCS
// ==========================================================================
function openCheckoutModal(courseId) {
    state.currentCheckoutCourseId = courseId;
    const course = courses[courseId];
    if (!course) return;
    
    state.couponApplied = false;
    state.discountRate = 0.0;
    
    const modalHtml = `
        <div class="checkout-sheet">
            <div class="checkout-sheet-header">
                <h4 class="checkout-sheet-title"><i class="fa-solid fa-cart-shopping" style="color:var(--color-secondary); margin-right:4px;"></i> Secure Platform Checkout</h4>
                <button class="checkout-close-btn" onclick="closeCheckoutModal()"><i class="fa-solid fa-xmark"></i></button>
            </div>

            <div class="checkout-item-summary">
                <div>
                    <div class="checkout-item-title" id="chkItemTitle">${course.title}</div>
                    <div style="font-size:10px; color:var(--color-text-muted);">Instructor: Neetu • Level: ${course.level}</div>
                </div>
                <div class="checkout-item-price" id="chkItemBasePrice">₹${course.price.toLocaleString('en-IN')}</div>
            </div>

            <div class="coupon-field-row">
                <input type="text" class="coupon-input" id="couponInput" placeholder="Enter coupon (e.g. SHIVA15)">
                <button class="coupon-apply-btn" onclick="applyCouponCode()">Apply</button>
            </div>

            <div class="checkout-calculation-list">
                <div class="calc-row">
                    <span>Subtotal Price</span>
                    <span id="chkSubtotal">₹${course.price.toLocaleString('en-IN')}</span>
                </div>
                <div class="calc-row" style="color: var(--color-success);">
                    <span>Cosmic Discount Applied</span>
                    <span id="chkDiscount">-₹0</span>
                </div>
                <div class="calc-row total-row">
                    <span>Final Total Payable</span>
                    <span id="chkTotalPayable">₹${course.price.toLocaleString('en-IN')}</span>
                </div>
            </div>

            <div style="font-size: 10px; text-transform:uppercase; font-weight:700; color:var(--color-text-muted); text-align:center;">SIMULATE SECURE GATEWAY TRANSACTION</div>
            <div class="gateway-simulators-row">
                <button class="gateway-btn gateway-success" onclick="executeSimulatedTransaction(true)">
                    <i class="fa-solid fa-circle-check"></i> Simulate Success
                </button>
                <button class="gateway-btn gateway-failure" onclick="executeSimulatedTransaction(false)">
                    <i class="fa-solid fa-triangle-exclamation"></i> Simulate Failure
                </button>
            </div>
        </div>
    `;
    
    const checkoutModal = document.getElementById("checkoutModal");
    if (checkoutModal) {
        checkoutModal.innerHTML = modalHtml;
        checkoutModal.style.display = "flex";
    }
}

function closeCheckoutModal() {
    document.getElementById("checkoutModal").style.display = "none";
}

function applyCouponCode() {
    const val = document.getElementById("couponInput").value.trim().toUpperCase();
    
    if (val === "SHIVA15") {
        state.couponApplied = true;
        state.discountRate = 0.15;
        showToast("Cosmic Coupon applied: 15% discount!", true);
    } else if (val === "") {
        showToast("Enter a coupon code first", false);
    } else {
        showToast("Invalid Coupon. Use code SHIVA15", false);
    }
    
    updateCheckoutPrices();
}

function updateCheckoutPrices() {
    const course = courses[state.currentCheckoutCourseId];
    if (!course) return;
    
    const subtotal = course.price;
    const discount = state.couponApplied ? Math.round(subtotal * state.discountRate) : 0;
    const finalTotal = subtotal - discount;
    
    document.getElementById("chkSubtotal").textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    document.getElementById("chkDiscount").textContent = `-₹${discount.toLocaleString('en-IN')}`;
    document.getElementById("chkTotalPayable").textContent = `₹${finalTotal.toLocaleString('en-IN')}`;
}

function executeSimulatedTransaction(isSuccess) {
    closeCheckoutModal();
    const course = courses[state.currentCheckoutCourseId];
    
    if (isSuccess) {
        state.enrolledCourses.push(state.currentCheckoutCourseId);
        
        state.enrolledCoursesMetadata[state.currentCheckoutCourseId] = {
            lastAccessed: new Date().toISOString(),
            completedCount: 0,
            timeRemaining: "8h 15m"
        };
        
        const price = course.price;
        const discount = state.couponApplied ? Math.round(price * state.discountRate) : 0;
        state.adminRevenue += (price - discount);
        state.adminStudentsCount++;
        
        state.adminRoster.push({
            name: state.studentName,
            course: course.title.substring(0, 15) + "..."
        });
        
        showToast(`Enrollment Successful! Welcome to "${course.title.substring(0, 20)}..."`, true);
        openCourseView(state.currentCheckoutCourseId);
    } else {
        showToast("Payment Rejected by Bank. Please retry transaction.", false);
    }
}

function updateWishlistDisplay() {
    const container = document.getElementById("wishlistContainer");
    if (!container) return;
    
    if (state.wishlist.length === 0) {
        container.innerHTML = `<div class="wishlist-empty-tag">Your favorites list is currently empty. Heart a course on the catalog feed.</div>`;
        return;
    }
    
    let html = "";
    state.wishlist.forEach(cid => {
        const c = courses[cid] || state.upcoming_courses.find(u => u.id === cid);
        if(!c) return;
        
        html += `
        <div style="display:flex; justify-content:space-between; align-items:center; padding: 6px 0; border-bottom: 1px dashed var(--color-border);">
            <span style="font-size:11px; font-weight:600;"><i class="fa-solid fa-graduation-cap" style="color:var(--color-primary); margin-right:4px;"></i> ${c.title.substring(0, 25)}...</span>
            <button class="save-note-btn" onclick="${c.price ? `openCheckoutModal(${c.id})` : `toggleNotificationInterest(null, ${c.id})`}" style="padding: 4px 8px; font-size:10px;">
                ${c.price ? 'Buy' : 'Notify'}
            </button>
        </div>
        `;
    });
    
    container.innerHTML = html;
}

function updateAnalyticsTiles() {
    const coursesCount = document.getElementById("profPurchasedCount");
    const reportsCount = document.getElementById("profReportsArchived");
    
    if(coursesCount) coursesCount.textContent = state.enrolledCourses.length;
    if(reportsCount) reportsCount.textContent = state.archivedReportsCount;
}

function simLogout() {
    showToast("Simulating logout... Namaste!");
}

// ==========================================================================
// J. WEBADMIN UPCOMING/LIVE CONVERSION & CRUD CONTROLS (FULL CRUD OPERATIONS)
// ==========================================================================
function renderAdminRoster() {
    const roster = document.getElementById("adminRosterContainer");
    if (!roster) return;
    
    let html = "";
    state.adminRoster.forEach(r => {
        html += `
        <div class="roster-row">
            <span class="roster-name">${r.name}</span>
            <span class="roster-status">Enrolled in ${r.course}</span>
        </div>
        `;
    });
    
    roster.innerHTML = html;
}

// Render active live courses inside Admin view for CRUD Edit/Delete operations
function renderAdminActiveCoursesList() {
    const container = document.getElementById("adminActiveList");
    if(!container) return;
    
    let html = "";
    Object.values(courses).forEach(c => {
        html += `
        <div class="roster-row" style="align-items:center;">
            <div style="flex:1;">
                <span class="roster-name" style="display:block; font-weight:700;">${c.title}</span>
                <span style="font-size:8px; color:var(--color-text-muted);">Price: ₹${c.price} • Level: ${c.level} • Category: ${c.category}</span>
            </div>
            <div style="display:flex; gap:6px;">
                <button class="save-note-btn" onclick="openAdminEditCourse(${c.id})" style="background:var(--color-secondary); color:var(--color-primary); padding: 4px 8px; font-size:9px;">
                    <i class="fa-solid fa-pen"></i> Edit
                </button>
                <button class="save-note-btn" onclick="deleteActiveCourse(${c.id})" style="background:var(--color-error); padding: 4px 8px; font-size:9px;">
                    <i class="fa-solid fa-trash"></i> Delete
                </button>
            </div>
        </div>
        `;
    });
    container.innerHTML = html;
}

function adminAddNewCourse(event) {
    event.preventDefault();
    
    const title = document.getElementById("acTitle").value.trim();
    const price = parseInt(document.getElementById("acPrice").value) || 2999;
    const cat = document.getElementById("acCategory").value;
    const desc = document.getElementById("acDesc").value.trim();
    const level = document.getElementById("acLevel").value;
    const duration = document.getElementById("acDuration").value;
    
    // CRUD Create / Edit
    if (state.editingCourseId) {
        // EDIT MODE
        const id = state.editingCourseId;
        courses[id].title = title;
        courses[id].price = price;
        courses[id].category = cat;
        courses[id].desc = desc;
        courses[id].level = level;
        courses[id].duration = duration;
        
        state.editingCourseId = null;
        document.getElementById("adminPublishSubmitBtn").innerHTML = `<i class="fa-solid fa-plus"></i> Publish Live Catalog`;
        document.getElementById("acFormTitle").textContent = "Create Live Active Course";
        
        showToast(`Successfully updated "${title}"!`, true);
    } else {
        // CREATE MODE
        const nextId = Object.keys(courses).length + 1;
        courses[nextId] = {
            id: nextId,
            title: title,
            price: price,
            rating: 5.0,
            lessonsCount: 3,
            category: cat,
            instructor: "Neetu",
            level: level,
            duration: duration,
            enrollmentCount: 1,
            desc: desc
        };
        
        lessons[`${nextId}.1`] = { id: `${nextId}.1`, courseId: nextId, title: "Module A Basics Introduction", duration: "15 mins", pdf: "Workbook.pdf", videoLength: 900 };
        lessons[`${nextId}.2`] = { id: `${nextId}.2`, courseId: nextId, title: "Module B Master alignments", duration: "20 mins", pdf: null, videoLength: 1200 };
        lessons[`${nextId}.3`] = { id: `${nextId}.3`, courseId: nextId, title: "Module C Core interpretations", duration: "25 mins", pdf: null, videoLength: 1500 };
        
        state.completedLessons[`${nextId}.1`] = false;
        state.completedLessons[`${nextId}.2`] = false;
        state.completedLessons[`${nextId}.3`] = false;
        
        showToast(`Successfully published "${title}" live!`, true);
    }
    
    document.getElementById("adminCourseForm").reset();
    
    // Sync feeds
    renderCourseCatalogGrid();
    renderAdminActiveCoursesList();
    renderOngoingCoursesDashboard();
    renderOngoingCoursesFullPage();
}

function openAdminEditCourse(courseId) {
    const c = courses[courseId];
    if(!c) return;
    
    state.editingCourseId = courseId;
    
    // Populate form fields
    document.getElementById("acTitle").value = c.title;
    document.getElementById("acPrice").value = c.price;
    document.getElementById("acCategory").value = c.category;
    document.getElementById("acDesc").value = c.desc;
    document.getElementById("acLevel").value = c.level;
    document.getElementById("acDuration").value = c.duration;
    
    // Swap header text
    document.getElementById("acFormTitle").textContent = `Edit Course: ${c.title}`;
    document.getElementById("adminPublishSubmitBtn").innerHTML = `<i class="fa-solid fa-floppy-disk"></i> Save Edited Metadata`;
    
    showToast(`Loaded metadata for "${c.title}"`);
    document.getElementById("acTitle").focus();
}

function deleteActiveCourse(courseId) {
    const c = courses[courseId];
    if(!c) return;
    
    // Confirm delete trigger
    const confirmDelete = confirm(`Are you sure you want to completely delete "${c.title}"?`);
    if(confirmDelete) {
        delete courses[courseId];
        
        // Remove from enrolled list if present
        const idx = state.enrolledCourses.indexOf(courseId);
        if(idx !== -1) {
            state.enrolledCourses.splice(idx, 1);
        }
        
        showToast(`Deleted course: "${c.title}"`, false);
        
        // Sync layout
        renderCourseCatalogGrid();
        renderAdminActiveCoursesList();
        renderOngoingCoursesDashboard();
        renderOngoingCoursesFullPage();
    }
}

function renderAdminUpcomingCoursesList() {
    const container = document.getElementById("adminUpcomingList");
    if (!container) return;
    
    if (state.upcoming_courses.length === 0) {
        container.innerHTML = `<div style="font-size:10px; color:var(--color-text-muted); padding:10px 0;">No upcoming courses registered.</div>`;
        return;
    }
    
    let html = "";
    state.upcoming_courses.forEach(uc => {
        html += `
        <div class="roster-row" style="align-items:center;">
            <div style="flex:1;">
                <span class="roster-name" style="display:block;">${uc.title}</span>
                <span style="font-size:8px; color:var(--color-text-muted);">Starts: ${new Date(uc.launchDate).toLocaleDateString()} • Level: ${uc.level}</span>
            </div>
            <div style="display:flex; gap:4px;">
                <button class="save-note-btn" onclick="convertUpcomingToLive(${uc.id})" style="background:var(--color-secondary); color:var(--color-primary); padding: 4px 8px; font-size:9px; font-weight:700;">
                    <i class="fa-solid fa-rocket"></i> Launch
                </button>
                <button class="save-note-btn" onclick="deleteUpcomingCourse(${uc.id})" style="background:var(--color-error); padding: 4px 8px; font-size:9px;">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
}

function adminCreateUpcomingCourse(event) {
    event.preventDefault();
    
    const title = document.getElementById("aucTitle").value.trim();
    const lDate = document.getElementById("aucDate").value;
    const desc = document.getElementById("aucDesc").value.trim();
    const category = document.getElementById("aucCategory").value;
    const duration = document.getElementById("aucDuration").value;
    const syllabus = document.getElementById("aucSyllabus").value.trim();
    const level = document.getElementById("aucLevel").value;
    
    if (!lDate) return;
    
    const nextId = 100 + state.upcoming_courses.length + 1;
    
    state.upcoming_courses.push({
        id: nextId,
        title: title,
        instructor: "Neetu",
        duration: duration,
        syllabus: syllabus,
        launchDate: `${lDate}T12:00:00`,
        desc: desc,
        banner: "🔮",
        category: category,
        level: level
    });
    
    document.getElementById("adminUpcomingForm").reset();
    showToast(`Registered Upcoming Course: "${title}"`, true);
    
    renderUpcomingCoursesCarousel();
    renderUpcomingCoursesPage();
    renderAdminUpcomingCoursesList();
}

function deleteUpcomingCourse(upcomingId) {
    const idx = state.upcoming_courses.findIndex(u => u.id === upcomingId);
    if(idx === -1) return;
    
    const uc = state.upcoming_courses[idx];
    const confirmDelete = confirm(`Delete upcoming course "${uc.title}"?`);
    
    if(confirmDelete) {
        state.upcoming_courses.splice(idx, 1);
        showToast(`Deleted upcoming: "${uc.title}"`, false);
        
        renderUpcomingCoursesCarousel();
        renderUpcomingCoursesPage();
        renderAdminUpcomingCoursesList();
    }
}

// Convert upcoming course to live active catalog (1-click launch)
function convertUpcomingToLive(upcomingId) {
    const idx = state.upcoming_courses.findIndex(c => c.id === upcomingId);
    if (idx === -1) return;
    
    const uc = state.upcoming_courses[idx];
    
    const liveId = Object.keys(courses).length + 1;
    courses[liveId] = {
        id: liveId,
        title: uc.title,
        price: 2999, 
        rating: 5.0,
        lessonsCount: 3,
        category: uc.category,
        instructor: uc.instructor,
        level: uc.level,
        duration: uc.duration,
        enrollmentCount: 154,
        desc: uc.desc
    };
    
    lessons[`${liveId}.1`] = { id: `${liveId}.1`, courseId: liveId, title: "Lecture 1: Cosmic principles introduction", duration: "15 mins", pdf: "L1_Handout.pdf", videoLength: 900 };
    lessons[`${liveId}.2`] = { id: `${liveId}.2`, courseId: liveId, title: "Lecture 2: Degrees and calculations charts", duration: "20 mins", pdf: "L2_Degrees.pdf", videoLength: 1200 };
    lessons[`${liveId}.3`] = { id: `${liveId}.3`, courseId: liveId, title: "Lecture 3: Kundali predictions rules", duration: "25 mins", pdf: null, videoLength: 1500 };
    
    state.completedLessons[`${liveId}.1`] = false;
    state.completedLessons[`${liveId}.2`] = false;
    state.completedLessons[`${liveId}.3`] = false;
    
    state.upcoming_courses.splice(idx, 1);
    
    // Alert system
    const alertId = Object.keys(state.course_notifications).length + 1;
    state.course_notifications.push({
        id: alertId,
        title: "Course Launched Live!",
        text: `The highly anticipated "${uc.title}" is now LIVE! Enroll now to unlock your cosmic blueprint.`,
        date: new Date().toISOString().split('T')[0]
    });
    
    document.getElementById("bellBadge").style.display = "block";
    showToast(`Successfully launched "${uc.title}" live! Notification broadcasted.`, true);
    
    renderUpcomingCoursesCarousel();
    renderUpcomingCoursesPage();
    renderCourseCatalogGrid();
    renderAdminUpcomingCoursesList();
    renderAdminActiveCoursesList();
}

// Helpers
function openUpcomingTabDirect() {
    switchNavTab('Home');
    const el = document.getElementById("upcomingViewportFrame");
    if(el) el.scrollIntoView({ behavior: 'smooth' });
}

function openToolsTabDirect() {
    switchNavTab('Tools');
}

function openGuruTabDirect() {
    switchNavTab('Guru');
}

// ==========================================================================
// K. OTHER CALCULATION ENGINES
// ==========================================================================
function calculateNavatara() {
    const dropdown = document.getElementById("nakshatraDropdown");
    if (!dropdown) return;
    
    const birthNak = dropdown.value;
    const birthIndex = nakshatras.indexOf(birthNak);
    
    const container = document.getElementById("navataraGrid");
    if (!container) return;
    
    const taraClasses = [
        { name: "Janma (Birth)", nature: "Malefic", class: "tara-malefic" },
        { name: "Sampat (Wealth)", nature: "Benefic", class: "tara-benefic" },
        { name: "Vipat (Danger)", nature: "Malefic", class: "tara-malefic" },
        { name: "Kshema (Safety)", nature: "Benefic", class: "tara-benefic" },
        { name: "Pratyak (Obstacles)", nature: "Malefic", class: "tara-malefic" },
        { name: "Sadhaka (Success)", nature: "Benefic", class: "tara-benefic" },
        { name: "Naidhana (Death)", nature: "Malefic", class: "tara-malefic" },
        { name: "Mitra (Friend)", nature: "Benefic", class: "tara-benefic" },
        { name: "Param Mitra (Best Friend)", nature: "Benefic", class: "tara-benefic" }
    ];
    
    let html = "";
    for (let i = 0; i < 9; i++) {
        const targetNakIndex = (birthIndex + i) % 27;
        const targetNak = nakshatras[targetNakIndex];
        const tClass = taraClasses[i];
        
        html += `
        <div class="navatara-cell">
            <span class="nv-index">Tara ${i + 1}</span>
            <span class="nv-tara-name">${tClass.name.split(" ")[0]}</span>
            <span class="nv-nakshatra">${targetNak}</span>
            <span class="tara-badge ${tClass.class}" style="margin-top:4px; font-size:8px;">${tClass.nature}</span>
        </div>
        `;
    }
    
    container.innerHTML = html;
}

function handleChatEnter(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function sendChatMessage() {
    const input = document.getElementById("chatInput");
    const query = input.value.trim();
    if (query === "") return;
    
    insertChatBubble(query, 'student');
    input.value = "";
    
    const typing = document.getElementById("chatTyping");
    const stream = document.getElementById("chatStream");
    
    if (typing) {
        typing.style.display = "flex";
        if(stream) stream.scrollTop = stream.scrollHeight;
        
        setTimeout(() => {
            typing.style.display = "none";
            const responseText = getGuruResponse(query);
            insertChatBubble(responseText, 'guru');
        }, 1200);
    }
}

function quickChatChipClick(question) {
    insertChatBubble(question, 'student');
    const typing = document.getElementById("chatTyping");
    const stream = document.getElementById("chatStream");
    
    if (typing) {
        typing.style.display = "flex";
        if(stream) stream.scrollTop = stream.scrollHeight;
        
        setTimeout(() => {
            typing.style.display = "none";
            const responseText = getGuruResponse(question);
            insertChatBubble(responseText, 'guru');
        }, 1200);
    }
}

function insertChatBubble(text, sender) {
    const stream = document.getElementById("chatStream");
    if (!stream) return;
    
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender === 'guru' ? 'guru' : 'student'}`;
    bubble.innerHTML = `<p>${text}</p>`;
    
    stream.appendChild(bubble);
    stream.scrollTop = stream.scrollHeight;
    
    state.chatHistory.push({ sender, text });
}

function getGuruResponse(query) {
    const q = query.toLowerCase();
    
    if (q.includes("7th house") || q.includes("indicates") || q.includes("7th")) {
        return "The <strong>7th House</strong> of a Kundali represents marriages, partnerships, client associations, and legal unions. If benefic planets like Jupiter or Venus reside there, it signifies supportive relationships. If malefic aspects exist, we suggest spiritual remedies like chanting the Maha Mrityunjaya mantra. 🕉️";
    }
    
    if (q.includes("calculate") || q.includes("destiny") || q.includes("numerology")) {
        return "In <strong>Numerology</strong>, your <strong>Destiny Number</strong> is calculated by converting the letters of your full name into numbers using Pythagorean values (A=1, B=2, etc.) and reducing them to a single digit (1-9), or Master Numbers (11, 22, 33). You can use our customized calculator tab in <strong>Astro Tools</strong>! 🔢";
    }
    
    if (q.includes("mahadasha") || q.includes("antardasha") || q.includes("dasha")) {
        return "A <strong>Mahadasha</strong> is the primary planetary ruler cycle governing your life for extended periods (ranging from 6 to 20 years). The <strong>Antardasha</strong> is the sub-planetary cycle. Together, they trigger major events. During a Jupiter Dasha, knowledge, wisdom, and expansions manifest strongly! 🪐";
    }
    
    return "Your query resonates with cosmic frequencies. In spiritual wisdom, every planetary alignment teaches us a karmic lesson. To see your planetary positions in detail, utilize our <strong>Kundali Calculator</strong> or enroll in our comprehensive courses! Let me know if you need specific advice. 🙏";
}

// Existing code...

function triggerResourceDownload() {
    const lesson = lessons[state.activeLessonId];

    if (lesson && lesson.pdfUrl) {
        openPdfModal(lesson.pdfUrl);
    } else {
        showToast("PDF not available", false);
    }
}

// PASTE HERE ↓↓↓

function openPdfModal(pdfUrl) {
    document.getElementById("pdfModalFrame").src = pdfUrl;
    document.getElementById("pdfModal").style.display = "block";
}

function closePdfModal() {
    document.getElementById("pdfModal").style.display = "none";
    document.getElementById("pdfModalFrame").src = "";
}
