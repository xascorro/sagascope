// Core SagaScope Logic

// i18n Dictionary
const TRANSLATIONS = {
    es: {
        selectUniverse: "Selecciona un Universo",
        startReading: "Comenzar Lectura",
        finishReading: "Terminar Lectura",
        cancelReading: "Cancelar",
        results: "Resultados",
        time: "Tiempo",
        words: "Palabras",
        projections: "Proyecciones de Tiempo",
        restart: "Cerrar",
        changeSaga: "Cambiar Saga",
        tooFast: "Demasiado rápido, ¿seguro que has leído?",
        hours: "horas",
        wpm: "P/M",
        confirmDelete: "¿Borrar este registro?",
        deleted: "Registro eliminado",
        textShort: "Corto (~300 pal)",
        textMedium: "Medio (~500 pal)",
        textLong: "Largo (~1000 pal)",
        selectLength: "Longitud del texto:"
    },
    en: {
        selectUniverse: "Select a Universe",
        startReading: "Start Reading",
        finishReading: "Finish Reading",
        cancelReading: "Cancel",
        results: "Results",
        time: "Time",
        words: "Words",
        projections: "Time Projections",
        restart: "Restart",
        changeSaga: "Change Saga",
        tooFast: "Too fast, did you actually read this?",
        hours: "hours",
        wpm: "WPM",
        confirmDelete: "Delete this record?",
        deleted: "Record deleted",
        textShort: "Short (~300 w)",
        textMedium: "Medium (~500 w)",
        textLong: "Long (~1000 w)",
        selectLength: "Text Length:"
    },
    zh: {
        selectUniverse: "选择宇宙",
        startReading: "开始阅读",
        finishReading: "完成阅读",
        cancelReading: "取消",
        results: "结果",
        time: "时间",
        words: "字数",
        projections: "预计时间",
        restart: "重新开始",
        changeSaga: "更换系列",
        tooFast: "太快了，你真的读了吗？",
        hours: "小时",
        wpm: "字/分",
        confirmDelete: "删除此记录？",
        deleted: "记录已删除",
        textShort: "短 (~300 字)",
        textMedium: "中 (~500 字)",
        textLong: "长 (~1000 字)",
        selectLength: "文本长度:"
    },
    hi: {
        selectUniverse: "एक ब्रह्मांड चुनें",
        startReading: "पढ़ना शुरू करें",
        finishReading: "पढ़ना समाप्त करें",
        cancelReading: "रद्द करें",
        results: "परिणाम",
        time: "समय",
        words: "शब्द",
        projections: "समय अनुमान",
        restart: "पुनः आरंभ करें",
        changeSaga: "गाथा बदलें",
        tooFast: "बहुत तेज़! क्या आपने वास्तव में पढ़ा?",
        hours: "घंटे",
        wpm: "शब्द/मिनट",
        confirmDelete: "यह रिकॉर्ड हटाएं?",
        deleted: "रिकॉर्ड हटा दिया गया",
        textShort: "छोटा (~300 शब्द)",
        textMedium: "मध्यम (~500 शब्द)",
        textLong: "लंबा (~1000 शब्द)",
        selectLength: "पाठ की लंबाई:"
    },
    fr: {
        selectUniverse: "Sélectionnez un Univers",
        startReading: "Commencer la Lecture",
        finishReading: "Terminer la Lecture",
        cancelReading: "Annuler",
        results: "Résultats",
        time: "Temps",
        words: "Mots",
        projections: "Projections de Temps",
        restart: "Recommencer",
        changeSaga: "Changer de Saga",
        tooFast: "Trop rapide, avez-vous vraiment lu ?",
        hours: "heures",
        wpm: "M/M",
        confirmDelete: "Supprimer cet enregistrement ?",
        deleted: "Enregistrement supprimé",
        textShort: "Court (~300 mots)",
        textMedium: "Moyen (~500 mots)",
        textLong: "Long (~1000 mots)",
        selectLength: "Longueur du texte :"
    },
    ar: {
        selectUniverse: "اختر عالمًا",
        startReading: "ابدأ القراءة",
        finishReading: "إنهاء القراءة",
        cancelReading: "إلغاء",
        results: "النتائج",
        time: "الوقت",
        words: "الكلمات",
        projections: "توقعات الوقت",
        restart: "إعادة التشغيل",
        changeSaga: "تغيير الملحمة",
        tooFast: "سريع جدًا، هل قرأت حقًا؟",
        hours: "ساعات",
        wpm: "كلمة/دقيقة",
        confirmDelete: "حذف هذا السجل؟",
        deleted: "تم حذف السجل",
        textShort: "قصير (~300 كلمة)",
        textMedium: "متوسط (~500 كلمة)",
        textLong: "طويل (~1000 كلمة)",
        selectLength: "طول النص:"
    },
    bn: {
        selectUniverse: "একটি মহাবিশ্ব নির্বাচন করুন",
        startReading: "পড়া শুরু করুন",
        finishReading: "পড়া শেষ করুন",
        cancelReading: "বাতিল",
        results: "ফলাফল",
        time: "সময়",
        words: "শব্দ",
        projections: "সময়ের পূর্বাভাস",
        restart: "পুনরায় শুরু",
        changeSaga: "সাঘা পরিবর্তন",
        tooFast: "খুব দ্রুত! আপনি কি সত্যিই পড়েছেন?",
        hours: "ঘন্টা",
        wpm: "শব্দ/মিনিট",
        confirmDelete: "এই রেকর্ড মুছবেন?",
        deleted: "রেকর্ড মুছে ফেলা হয়েছে",
        textShort: "ছোট (~300 শব্দ)",
        textMedium: "মাঝারি (~500 শব্দ)",
        textLong: "দীর্ঘ (~1000 শব্দ)",
        selectLength: "পাঠ্যের দৈর্ঘ্য:"
    },
    ru: {
        selectUniverse: "Выберите вселенную",
        startReading: "Начать чтение",
        finishReading: "Закончить чтение",
        cancelReading: "Отмена",
        results: "Результаты",
        time: "Время",
        words: "Слова",
        projections: "Прогноз времени",
        restart: "Заново",
        changeSaga: "Сменить сагу",
        tooFast: "Слишком быстро, вы правда читали?",
        hours: "ч",
        wpm: "Слова/мин",
        confirmDelete: "Удалить эту запись?",
        deleted: "Запись удалена",
        textShort: "Короткий (~300 слов)",
        textMedium: "Средний (~500 слов)",
        textLong: "Длинный (~1000 слов)",
        selectLength: "Длина текста:"
    },
    pt: {
        selectUniverse: "Selecione um Universo",
        startReading: "Começar Leitura",
        finishReading: "Terminar Leitura",
        cancelReading: "Cancelar",
        results: "Resultados",
        time: "Tempo",
        words: "Palavras",
        projections: "Projeções de Tempo",
        restart: "Reiniciar",
        changeSaga: "Mudar Saga",
        tooFast: "Muito rápido, você leu mesmo?",
        hours: "horas",
        wpm: "P/M",
        confirmDelete: "Excluir este registro?",
        deleted: "Registro excluído",
        textShort: "Curto (~300 palavras)",
        textMedium: "Médio (~500 palavras)",
        textLong: "Longo (~1000 palavras)",
        selectLength: "Comprimento do texto:"
    },
    ur: {
        selectUniverse: "ایک کائنات منتخب کریں",
        startReading: "پڑھنا شروع کریں",
        finishReading: "پڑھنا ختم کریں",
        cancelReading: "منسوخ",
        results: "نتائج",
        time: "وقت",
        words: "الفاظ",
        projections: "وقت کا اندازہ",
        restart: "دوبارہ شروع کریں",
        changeSaga: "ساگا تبدیل کریں",
        tooFast: "بہت تیز، کیا آپ نے واقعی پڑھا ہے؟",
        hours: "گھنٹے",
        wpm: "الفاظ/منٹ",
        confirmDelete: "کیا یہ ریکارڈ حذف کریں؟",
        deleted: "ریکارڈ حذف کر دیا گیا",
        textShort: "مختصر (~300 الفاظ)",
        textMedium: "درمیانہ (~500 الفاظ)",
        textLong: "طویل (~1000 الفاظ)",
        selectLength: "متن کی لمبائی:"
    }
};

// Configuration
// Only minimal names needed here as they will be fully populated in data files per language
// Configuration
// Fully populated names for the main registered menu
const AVAILABLE_SAGAS = [
    {
        id: 'cosmere',
        name: {
            es: 'El Cosmere', en: 'The Cosmere', zh: '卡西米尔 (Cosmere)', hi: 'कॉस्मियर (Cosmere)',
            fr: 'Le Cosmere', ar: 'كوزمير (Cosmere)', bn: 'কসমিয়ার (Cosmere)', ru: 'Космер',
            pt: 'O Cosmere', ur: 'کوسمیر (Cosmere)'
        }
    },
    {
        id: 'harry_potter',
        name: {
            es: 'Mundo Mágico', en: 'Wizarding World', zh: '魔法世界', hi: 'जादूई दुनिया',
            fr: 'Monde des Sorciers', ar: 'عالم السحرة', bn: 'জাদু দুনিয়া', ru: 'Волшебный мир',
            pt: 'Mundo Mágico', ur: 'جادوئی دنیا'
        }
    },
    {
        id: 'lotr',
        name: {
            es: 'Señor de los Anillos', en: 'Lord of the Rings', zh: '指环王', hi: 'लॉर्ड ऑफ द रिंग्स',
            fr: 'Le Seigneur des Anneaux', ar: 'سيد الخواتم', bn: 'লর্ড অফ দ্য রিং', ru: 'Властелин колец',
            pt: 'Senhor dos Anéis', ur: 'لارڈ آف دی رِنگز'
        }
    },
    {
        id: 'reina_roja',
        name: {
            es: 'Reina Roja', en: 'Red Queen', zh: '红皇后', hi: 'लाल रानी',
            fr: 'Reine Rouge', ar: 'الملكة الحمراء', bn: 'লাল রানী', ru: 'Красная королева',
            pt: 'Rainha Vermelha', ur: 'سرخ ملکہ'
        }
    },
    {
        id: 'got',
        name: {
            es: 'Juego de Tronos', en: 'Game of Thrones', zh: '权力的游戏', hi: 'गेम ऑफ थ्रोन्स',
            fr: 'Game of Thrones', ar: 'صراع العروش', bn: 'গেম অফ থ্রোনস', ru: 'Игра престолов',
            pt: 'Guerra dos Tronos', ur: 'گیم آف تھرونز'
        }
    },
    {
        id: 'dune',
        name: {
            es: 'Dune', en: 'Dune', zh: '沙丘', hi: 'ड्यून',
            fr: 'Dune', ar: 'كثيب', bn: 'ডিউন', ru: 'Дюна',
            pt: 'Duna', ur: 'ڈیून'
        }
    },
    {
        id: 'hunger_games',
        name: {
            es: 'Juegos del Hambre', en: 'Hunger Games', zh: '饥饿游戏', hi: 'द हंगर गेम्स',
            fr: 'Hunger Games', ar: 'مباريات الجوع', bn: 'হাঙ্গার গেমস', ru: 'Голодные игры',
            pt: 'Jogos Vorazes', ur: 'دی ہنگر گیمز'
        }
    }
];



// Global State
let currentSagaData = null;
let currentLang = 'es';
let readingStartTime = 0;

// Helper for data files (globally available)
window.repeat = (str, times) => Array(times).fill(str).join('\n\n');

// DOM Elements
const sagaSelectorContainer = document.getElementById('saga-selector-container');
const sagaTitle = document.getElementById('saga-title');
const bookSelector = document.getElementById('book-selector'); // Will be reused for length selector maybe?
// Let's repurpose or find the new custom UI for length
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const langSelector = document.getElementById('lang-selector'); // No longer exists in HTML, handled by custom class
const readingArea = document.getElementById('reading-area');
const readingContent = document.getElementById('reading-content');
const resultsOverlay = document.getElementById('results-overlay');
const themeLink = document.getElementById('theme-style');
const dataScript = document.getElementById('data-script');
const mainUI = document.getElementById('main-ui');

// Initialization
function init() {
    initCustomLanguageSelector();

    // Detect user language
    const browserLang = navigator.language || navigator.userLanguage || 'es';
    const langCode = browserLang.split('-')[0].toLowerCase();

    currentLang = TRANSLATIONS[langCode] ? langCode : 'es';
    // Update Custom Selector Visual
    updateLanguageSelectorVisual(currentLang);

    setLanguage(currentLang);

    // Bind global events
    backBtn.addEventListener('click', closeSaga);
    document.getElementById('theme-toggle').addEventListener('click', cycleTheme);

    // Load Saved Theme
    const savedTheme = localStorage.getItem('sagascope_theme') || 'dynamic';
    applyTheme(savedTheme);

    renderUI();
}

// Theme Handling
const THEMES = ['dynamic', 'light', 'dark', 'sepia'];
let currentThemeIndex = 0; // Starts at Dynamic

function cycleTheme() {
    // Determine next theme
    currentThemeIndex = (currentThemeIndex + 1) % THEMES.length;
    const newTheme = THEMES[currentThemeIndex];

    applyTheme(newTheme);

    // Save to LocalStorage
    localStorage.setItem('sagascope_theme', newTheme);
}

function applyTheme(themeName) {
    // Update Index if set directly
    const idx = THEMES.indexOf(themeName);
    if (idx !== -1) currentThemeIndex = idx;

    // Remove all theme classes first
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-sepia');

    // Apply new theme class (if not dynamic)
    if (themeName !== 'dynamic') {
        document.body.classList.add(`theme-${themeName}`);
    }

    // Update Icon
    updateThemeIcon(themeName);
}

function updateThemeIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    let svgPath = '';

    // SVGs for each state
    switch (theme) {
        case 'dynamic':
            // Sparkles/Magic (Default SVG already there is close, let's use a nice sparkle)
            svgPath = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />';
            break;
        case 'light':
            // Sun ☀️
            svgPath = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
            break;
        case 'dark':
            // Moon 🌙
            svgPath = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
            break;
        case 'sepia':
            // Book/Read 📖
            svgPath = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />';
            break;
    }

    btn.innerHTML = `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">${svgPath}</svg>`;
}

// Custom Language Selector Logic
function initCustomLanguageSelector() {
    const langs = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'ur', name: 'اردو', flag: '🇵🇰' }
    ];

    const wrapper = document.querySelector('.custom-select-wrapper');
    const select = wrapper.querySelector('.custom-select');
    const optionsContainer = select.querySelector('.custom-options');

    // Populate options
    optionsContainer.innerHTML = '';
    langs.forEach(l => {
        const option = document.createElement('div');
        option.className = 'custom-option';
        option.dataset.value = l.code;
        option.innerHTML = `<span class="flag-icon">${l.flag}</span> <span class="lang-name">${l.name}</span>`;
        if (l.code === currentLang) option.classList.add('selected');

        option.addEventListener('click', () => {
            setLanguage(l.code);
            updateLanguageSelectorVisual(l.code);
            select.classList.remove('open');
            // Update selected class
            select.querySelectorAll('.custom-option').forEach(el => el.classList.remove('selected'));
            option.classList.add('selected');
        });

        optionsContainer.appendChild(option);
    });

    // Toggle event
    select.querySelector('.custom-select__trigger').addEventListener('click', () => {
        select.classList.toggle('open');
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    });
}

function updateLanguageSelectorVisual(langCode) {
    const langs = {
        'en': { name: 'English', flag: '🇬🇧' },
        'es': { name: 'Español', flag: '🇪🇸' },
        'zh': { name: '中文', flag: '🇨🇳' },
        'hi': { name: 'हिन्दी', flag: '🇮🇳' },
        'fr': { name: 'Français', flag: '🇫🇷' },
        'ar': { name: 'العربية', flag: '🇸🇦' },
        'bn': { name: 'বাংলা', flag: '🇧🇩' },
        'ru': { name: 'Русский', flag: '🇷🇺' },
        'pt': { name: 'Português', flag: '🇵🇹' },
        'ur': { name: 'اردو', flag: '🇵🇰' }
    };

    const trigger = document.querySelector('.custom-select__trigger span');
    const l = langs[langCode];
    if (l && trigger) {
        trigger.innerHTML = `<span class="flag-icon">${l.flag}</span> ${l.name}`;
    }
}

function setLanguage(lang) {
    currentLang = lang;

    // RTL Handling
    const rtlLangs = ['ar', 'ur'];
    if (rtlLangs.includes(lang)) {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('rtl');
    }

    renderUI();

    // If inside a saga, re-render saga content
    if (currentSagaData) {
        setupSaga(currentSagaData);
    }
}

function getText(key) {
    return TRANSLATIONS[currentLang][key] || key;
}

function getSagaName(data) {
    if (!data) return "";
    // Handle "names" (plural) property
    if (data.names && data.names[currentLang]) {
        return data.names[currentLang];
    }
    // Handle "name" (singular) property if it is an object
    if (data.name && typeof data.name === 'object') {
        return data.name[currentLang] || data.name['es'];
    }
    // Handle "name" property if it is a simple string
    return data.name || "";
}

function renderUI() {
    // Update Static UI Text
    document.getElementById('header-title').textContent = "SagaScope";
    startBtn.textContent = getText('startReading');

    if (!currentSagaData) {
        sagaTitle.textContent = getText('selectUniverse');
        renderSagaSelector();
    } else {
        // We are in a saga, update title
        sagaTitle.textContent = getSagaName(currentSagaData);
    }
}

function renderSagaSelector() {
    sagaSelectorContainer.innerHTML = '';
    AVAILABLE_SAGAS.forEach(saga => {
        const card = document.createElement('div');
        card.className = 'saga-card';
        // Use localized name via the robust helper
        card.innerHTML = `<span>${getSagaName(saga)}</span>`;
        card.onclick = () => loadSaga(saga.id);
        sagaSelectorContainer.appendChild(card);
    });
}

// Saga Loader
window.loadSaga = function (sagaId) {
    themeLink.href = `sagas/${sagaId}/style.css`;

    // Clear previous content to avoid confusion
    window.SagaContent = null;

    // Find the current script tag (it changes on every load)
    const currentScript = document.getElementById('data-script');

    const newScript = document.createElement('script');
    newScript.src = `sagas/${sagaId}/data.js?t=${Date.now()}`;
    newScript.id = 'data-script'; // Ensure ID is preserved for next time

    newScript.onload = () => {
        if (window.SagaContent) {
            setupSaga(window.SagaContent);
        } else {
            console.error("Failed to load saga content for: " + sagaId);
        }
    };

    // Replace current script with new one
    if (currentScript) {
        currentScript.replaceWith(newScript);
    } else {
        document.body.appendChild(newScript);
    }
}

function setupSaga(data) {
    currentSagaData = data;

    // Initial Chart Render
    setTimeout(() => renderCharts(data), 100); // Slight delay to ensure DOM is ready/visible

    // Update Header
    sagaTitle.textContent = getSagaName(data);
    document.body.style.backgroundImage = `url('sagas/${data.id}/assets/bg.png')`;

    // Toggle Views
    sagaSelectorContainer.classList.add('hidden');
    sagaSelectorContainer.style.display = 'none'; // Ensure hidden logic works with flex
    mainUI.style.display = 'flex';
    backBtn.style.visibility = 'visible'; // Show back button

    // Populate Length Selector (Instead of Books)
    bookSelector.innerHTML = ''; // Reuse the select for text length

    // Add Options: Short, Medium, Long
    const lengths = [
        { id: 'short', label: getText('textShort') },
        { id: 'medium', label: getText('textMedium') },
        { id: 'long', label: getText('textLong') }
    ];

    lengths.forEach(len => {
        const opt = document.createElement('option');
        opt.value = len.id;
        opt.textContent = len.label;
        bookSelector.appendChild(opt);
    });

    // Reset Reading State
    readingArea.style.display = 'none';
    startBtn.style.display = 'block';
    bookSelector.disabled = false;
    readingContent.innerHTML = '';
}

window.closeSaga = function () {
    currentSagaData = null;
    sagaSelectorContainer.style.display = 'grid'; // Restore grid
    sagaSelectorContainer.classList.remove('hidden');
    mainUI.style.display = 'none';
    backBtn.style.visibility = 'hidden';

    renderUI(); // Restore title
}

window.startTest = function () {
    if (!currentSagaData) return;

    const selectedLength = bookSelector.value; // 'short', 'medium', 'long'

    // Retrieve correct fragment list
    const savedFragments = currentSagaData.fragments[currentLang] || currentSagaData.fragments['es'];

    // Fallback if data structure is old or missing
    let text = "Text not available.";
    if (savedFragments && savedFragments[selectedLength]) {
        // If we have array for random variation, pick one, for now assume 1 per length
        // Or if the structure is direct text?
        // Proposed Data Structure: fragments: { es: { short: '...', medium: '...', long: '...' } }
        text = savedFragments[selectedLength];
    } else {
        text = "Content missing for this language/length.";
    }

    // Format text
    readingContent.innerHTML = text.split('\n\n').map(p => `<p>${p}</p>`).join('');

    // Append Buttons Container
    const btnContainer = document.createElement('div');
    btnContainer.className = 'finish-btn-container';
    btnContainer.style.gap = '20px';

    // Cancel Button
    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = getText('cancelReading');
    cancelBtn.className = "icon-btn-text"; // Add class for easy styling if needed
    cancelBtn.style.background = 'transparent';
    cancelBtn.style.border = '1px solid currentColor';
    cancelBtn.style.color = 'var(--text-secondary)';
    cancelBtn.style.padding = '12px 24px';
    cancelBtn.style.borderRadius = '30px';
    cancelBtn.style.cursor = 'pointer';
    cancelBtn.onclick = cancelTest;

    // Finish Button
    const finishBtn = document.createElement('button');
    finishBtn.textContent = getText('finishReading');
    finishBtn.className = "primary-action finish-btn";
    finishBtn.onclick = finishTest;

    btnContainer.appendChild(cancelBtn);
    btnContainer.appendChild(finishBtn);
    readingContent.appendChild(btnContainer);

    // UI Updates
    readingArea.style.display = 'flex';
    readingArea.scrollTop = 0;
    startBtn.style.display = 'none';
    bookSelector.disabled = true;

    readingStartTime = performance.now();
}

window.resetTest = function () {
    readingArea.style.display = 'none';
    readingContent.innerHTML = '';
    startBtn.style.display = 'block';
    bookSelector.disabled = false;
    resultsOverlay.style.display = 'none';
    readingStartTime = 0;
}

window.cancelTest = function () {
    resetTest();
}

window.finishTest = function () {
    const timeSec = (performance.now() - readingStartTime) / 1000;
    const timeMin = timeSec / 60;

    // Word Count from actual text
    const text = readingContent.innerText.replace(getText('finishReading'), '').replace(getText('cancelReading'), ''); // Remove button text if captured
    const wordCount = text.trim().split(/\s+/).length;

    if (timeSec < 3) {
        alert(getText('tooFast'));
        return;
    }

    const wpm = Math.round(wordCount / timeMin);

    // Save Result
    StorageManager.saveResult(wpm, currentSagaData.id);

    // Update Charts
    renderCharts(currentSagaData, wpm);

    // Show Results
    renderResultsModal(wpm, timeSec, wordCount);
}

function renderResultsModal(wpm, timeSec, wordCount) {
    // Helper to keep main function clean
    const projections = currentSagaData.books.map(book => {
        const title = (typeof book.title === 'object') ? (book.title[currentLang] || book.title.es) : book.title;
        const minutes = book.words / wpm;
        const hours = (minutes / 60).toFixed(1);
        return `<li><span>${title}</span> <strong>${hours} ${getText('hours')}</strong></li>`;
    }).join('');

    const resultsHTML = `
        <h2 style="text-transform:uppercase; color:var(--text-secondary); font-size: 0.9rem; letter-spacing:2px;">${getText('results')}</h2>
        <div class="wpm-big">${wpm} <small style="font-size:1.5rem">${getText('wpm')}</small></div>
        <div class="stats-row">${Math.round(timeSec)}s &bull; ${wordCount} ${getText('words')}</div>
        <hr style="border-color:rgba(255,255,255,0.1)">
        
        <h3 style="margin-top:20px; font-size:1.1rem">${getText('projections')}</h3>
        <ul class="projection-list">
            ${projections}
        </ul>
        <div style="display:flex; gap:10px; justify-content:center; margin-top:20px;">
            <button onclick="resetTest()" class="primary-action">${getText('restart')}</button>
            <button onclick="closeSaga(); document.getElementById('results-overlay').style.display='none'" style="background:transparent; border:1px solid #555; padding:10px 20px; color:#aaa; border-radius:20px; cursor:pointer;">${getText('changeSaga')}</button>
        </div>
    `;

    document.getElementById('results-content').innerHTML = resultsHTML;
    resultsOverlay.style.display = 'flex';
}

// Stats & Storage Logic
const StorageManager = {
    KEY: 'sagaScope_history',
    getHistory() {
        return JSON.parse(localStorage.getItem(this.KEY) || '[]');
    },
    saveResult(wpm, sagaId) {
        const history = this.getHistory();
        history.push({
            date: Date.now(),
            wpm: wpm,
            sagaId: sagaId
        });
        localStorage.setItem(this.KEY, JSON.stringify(history));
    },
    deleteByIndex(index) {
        const history = this.getHistory();
        const count = history.length;
        const recentCount = Math.min(count, 10);
        const startIndex = count - recentCount;

        const actualIndex = startIndex + index;

        if (actualIndex >= 0 && actualIndex < history.length) {
            history.splice(actualIndex, 1);
            localStorage.setItem(this.KEY, JSON.stringify(history));
            return true;
        }
        return false;
    },
    getAverageWPM() {
        const history = this.getHistory();
        if (history.length === 0) return 200; // Default average
        const total = history.reduce((sum, item) => sum + item.wpm, 0);
        return Math.round(total / history.length);
    }
};

let booksChartInstance = null;
let progressChartInstance = null;

function renderCharts(sagaData, currentWpm = null) {
    const statsContainer = document.getElementById('saga-stats');
    if (statsContainer) statsContainer.style.display = 'block';

    const wpm = currentWpm || StorageManager.getAverageWPM();
    const history = StorageManager.getHistory();

    // 1. Books Chart (Bar)
    const ctxBooksElement = document.getElementById('booksChart');
    if (!ctxBooksElement) return;
    const ctxBooks = ctxBooksElement.getContext('2d');

    // Handle titles safely
    const bookLabels = sagaData.books.map(b => (typeof b.title === 'object') ? (b.title[currentLang] || b.title.es) : b.title);
    const bookHours = sagaData.books.map(b => (b.words / wpm / 60).toFixed(1));
    const totalHours = bookHours.reduce((a, b) => parseFloat(a) + parseFloat(b), 0).toFixed(1);

    // Dynamic Height
    const neededHeight = Math.max(400, bookLabels.length * 35);
    const chartBox = document.getElementById('booksChart').parentElement;
    chartBox.style.height = `${neededHeight}px`;

    document.getElementById('stats-summary').innerHTML = `
        Tiempo estimado para toda la saga: <strong style="color:var(--text-primary); font-size:1.4rem">${totalHours} ${getText('hours')}</strong>
        <br><small style="opacity:0.7">Basado en tu velocidad: ${wpm} WPM</small>
    `;

    if (booksChartInstance) booksChartInstance.destroy();

    booksChartInstance = new Chart(ctxBooks, {
        type: 'bar',
        data: {
            labels: bookLabels,
            datasets: [{
                label: getText('hours'),
                data: bookHours,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderColor: 'rgba(255, 255, 255, 0.6)',
                borderWidth: 1,
                barThickness: 'flex',
                maxBarThickness: 30
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: { display: true, text: 'Tiempo por Libro (Horas)', color: '#aaa', font: { size: 14 } }
            },
            layout: {
                padding: { left: 10, right: 20 }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#888' }
                },
                y: {
                    ticks: {
                        color: '#ddd',
                        autoSkip: false,
                        font: { size: 11 }
                    },
                    grid: { display: false }
                }
            }
        }
    });

    // 2. Progress Chart (Line)
    const ctxProgressElement = document.getElementById('progressChart');
    if (!ctxProgressElement) return;
    const ctxProgress = ctxProgressElement.getContext('2d');

    const recentHistory = history.slice(-10);
    const progressLabels = recentHistory.map((h, i) => i + 1);
    const progressData = recentHistory.map(h => h.wpm);

    if (progressChartInstance) progressChartInstance.destroy();

    progressChartInstance = new Chart(ctxProgress, {
        type: 'line',
        data: {
            labels: progressLabels,
            datasets: [{
                label: 'WPM',
                data: progressData,
                borderColor: '#4caf50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                tension: 0.4,
                fill: true,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: { display: true, text: 'Tu Progreso (WPM)', color: '#aaa' },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.parsed.y + ' WPM (Click to delete)';
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: false, grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#aaa' } },
                x: { display: false }
            },
            onClick: (e) => {
                const points = progressChartInstance.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
                if (points.length) {
                    const firstPoint = points[0];
                    const index = firstPoint.index;
                    // Logic to delete
                    if (confirm(getText('confirmDelete'))) {
                        StorageManager.deleteByIndex(index);
                        // Re-render
                        renderCharts(sagaData);
                    }
                }
            }
        }
    });
}


// Start
init();
