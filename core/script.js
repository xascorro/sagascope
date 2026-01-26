// Core SagaScope Logic

// i18n Dictionary
const TRANSLATIONS = {
    es: {
        selectUniverse: "Selecciona un Universo",
        startReading: "Comenzar Lectura",
        finishReading: "Terminar Lectura",
        results: "Resultados",
        time: "Tiempo",
        words: "Palabras",
        projections: "Proyecciones de Tiempo",
        restart: "Reiniciar",
        changeSaga: "Cambiar Saga",
        tooFast: "Demasiado rápido, ¿seguro que has leído?",
        hours: "horas",
        wpm: "P/M"
    },
    en: {
        selectUniverse: "Select a Universe",
        startReading: "Start Reading",
        finishReading: "Finish Reading",
        results: "Results",
        time: "Time",
        words: "Words",
        projections: "Time Projections",
        restart: "Restart",
        changeSaga: "Change Saga",
        tooFast: "Too fast, did you actually read this?",
        hours: "hours",
        wpm: "WPM"
    }
};

// Configuration
const AVAILABLE_SAGAS = [
    { id: 'cosmere', name: { es: 'El Cosmere', en: 'The Cosmere' } },
    { id: 'harry_potter', name: { es: 'Mundo Mágico', en: 'Wizarding World' } },
    { id: 'lotr', name: { es: 'Señor de los Anillos', en: 'Lord of the Rings' } },
    { id: 'reina_roja', name: { es: 'Reina Roja', en: 'Red Queen' } },
    { id: 'got', name: { es: 'Juego de Tronos', en: 'Game of Thrones' } },
    { id: 'dune', name: { es: 'Dune', en: 'Dune' } },
    { id: 'hunger_games', name: { es: 'Juegos del Hambre', en: 'Hunger Games' } }
];

// Global State
let currentSagaData = null;
let currentLang = 'es';
let readingStartTime = 0;

// DOM Elements
const sagaSelectorContainer = document.getElementById('saga-selector-container');
const sagaTitle = document.getElementById('saga-title');
const bookSelector = document.getElementById('book-selector');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const langSelector = document.getElementById('lang-selector');
const readingArea = document.getElementById('reading-area');
const readingContent = document.getElementById('reading-content');
const resultsOverlay = document.getElementById('results-overlay');
const themeLink = document.getElementById('theme-style');
const dataScript = document.getElementById('data-script');
const mainUI = document.getElementById('main-ui');

// Initialization
function init() {
    // Determine user lang if desired, default to ES
    currentLang = 'es';
    langSelector.value = currentLang;

    // Bind global events
    langSelector.addEventListener('change', (e) => setLanguage(e.target.value));
    backBtn.addEventListener('click', closeSaga);

    renderUI();
}

function setLanguage(lang) {
    currentLang = lang;
    renderUI();

    // If inside a saga, re-render saga content
    if (currentSagaData) {
        setupSaga(currentSagaData);
    }
}

function getText(key) {
    return TRANSLATIONS[currentLang][key] || key;
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
        const name = currentSagaData.names ? currentSagaData.names[currentLang] : currentSagaData.name;
        sagaTitle.textContent = name;
    }
}

function renderSagaSelector() {
    sagaSelectorContainer.innerHTML = '';
    AVAILABLE_SAGAS.forEach(saga => {
        const card = document.createElement('div');
        card.className = 'saga-card';
        // Use localized name
        card.innerHTML = `<span>${saga.name[currentLang] || saga.name.es || saga.name}</span>`;
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
    newScript.src = `sagas/${sagaId}/data.js`;
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

    // Update Header
    const name = data.names ? data.names[currentLang] : data.name;
    sagaTitle.textContent = name;
    document.body.style.backgroundImage = `url('sagas/${data.id}/assets/bg.png')`;

    // Toggle Views
    sagaSelectorContainer.classList.add('hidden');
    sagaSelectorContainer.style.display = 'none'; // Ensure hidden logic works with flex
    mainUI.style.display = 'flex';
    backBtn.style.visibility = 'visible'; // Show back button

    // Populate Books (localized titles)
    bookSelector.innerHTML = '';

    // Check if fragments are localized (object) or plain array (legacy/fallback)
    let fragments = [];
    if (Array.isArray(data.fragments)) {
        fragments = data.fragments;
    } else if (data.fragments[currentLang]) {
        fragments = data.fragments[currentLang];
    } else {
        fragments = data.fragments['es']; // Fallback
    }

    fragments.forEach((frag, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.textContent = frag.title;
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

    // Reset Theme to base? keeping last theme is kinda cool or maybe reset to neutral?
    // Let's keep the theme but remove data context for smooth transition

    sagaSelectorContainer.style.display = 'grid'; // Restore grid
    sagaSelectorContainer.classList.remove('hidden');
    mainUI.style.display = 'none';
    backBtn.style.visibility = 'hidden';

    renderUI(); // Restore title
}

window.startTest = function () {
    if (!currentSagaData) return;

    const selectedIndex = bookSelector.value;

    // Retrieve correct fragment list again
    let fragments = Array.isArray(currentSagaData.fragments) ? currentSagaData.fragments : currentSagaData.fragments[currentLang];
    const fragment = fragments[selectedIndex];

    // Format text
    readingContent.innerHTML = fragment.text.split('\n\n').map(p => `<p>${p}</p>`).join('');

    // Append Finish Button
    const btnContainer = document.createElement('div');
    btnContainer.className = 'finish-btn-container';

    const btn = document.createElement('button');
    btn.textContent = getText('finishReading');
    btn.className = "primary-action finish-btn";
    btn.onclick = finishTest;

    btnContainer.appendChild(btn);
    readingContent.appendChild(btnContainer);

    // UI Updates
    readingArea.style.display = 'flex';
    readingArea.scrollTop = 0;
    startBtn.style.display = 'none';
    bookSelector.disabled = true;

    readingStartTime = performance.now();
}

window.finishTest = function () {
    const timeSec = (performance.now() - readingStartTime) / 1000;
    const timeMin = timeSec / 60;

    // Word Count
    const text = readingContent.innerText;
    const wordCount = text.trim().split(/\s+/).length; // Approximate, usually good enough

    if (timeSec < 3) {
        alert(getText('tooFast'));
        return;
    }

    const wpm = Math.round(wordCount / timeMin);

    // Calculate Projections
    // Handle localized book titles
    const projections = currentSagaData.books.map(book => {
        // Title logic: object (es/en) or string
        const title = (typeof book.title === 'object') ? (book.title[currentLang] || book.title.es) : book.title;

        const minutes = book.words / wpm;
        const hours = (minutes / 60).toFixed(1);
        return `<li><span>${title}</span> <strong>${hours} ${getText('hours')}</strong></li>`;
    }).join('');

    // Show Results
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

window.resetTest = function () {
    resultsOverlay.style.display = 'none';
    setupSaga(currentSagaData);
}

// Start
init();
