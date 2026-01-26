// DOM Elements
const bookSelector = document.getElementById('book-selector');
const startBtn = document.getElementById('start-btn');
const finishBtn = document.getElementById('finish-btn');
const readingArea = document.getElementById('reading-area');
const readingContent = document.getElementById('reading-content');
const welcomeScreen = document.getElementById('welcome-screen');
const resultsOverlay = document.getElementById('results-overlay');
const wpmDisplay = document.getElementById('wpm-val');
const timeVal = document.getElementById('time-val');
const wordsVal = document.getElementById('words-val');
const restartBtn = document.getElementById('restart-btn');

let startTime = 0;
let timerInterval = null;

// Initialize
function init() {
    // Populate selector
    // Use global variable cosmereData
    if (typeof cosmereData !== 'undefined') {
        cosmereData.forEach(book => {
            const option = document.createElement('option');
            option.value = book.id;
            option.textContent = book.title;
            bookSelector.appendChild(option);
        });
    }

    // Event Listeners
    startBtn.addEventListener('click', startTest);
    finishBtn.addEventListener('click', finishTest);
    restartBtn.addEventListener('click', resetTest);
}

function startTest() {
    const selectedId = bookSelector.value;
    const book = cosmereData.find(b => b.id == selectedId);

    if (!book) return;

    // Load content
    // Format text with paragraph tags for better reading
    const paragraphs = book.fragment.split('\n\n').map(p => `<p style="margin-bottom: 1.5em;">${p}</p>`).join('');
    readingContent.innerHTML = paragraphs;

    // UI Transition
    welcomeScreen.classList.add('hidden');
    readingArea.style.display = 'flex';
    readingArea.classList.add('fade-in');

    // Controls
    startBtn.style.display = 'none';
    bookSelector.disabled = true;

    // Add floating finish button to bottom right or keep sticky header?
    // For now, let's inject a finish button at the bottom of the text as well for convenience
    const bottomBtn = document.createElement('button');
    bottomBtn.textContent = 'Terminar Lectura';
    bottomBtn.style.cssText = "display: block; margin: 2rem auto; width: 100%; max-width: 300px;";
    bottomBtn.onclick = finishTest;
    readingContent.appendChild(bottomBtn);

    // Start Timer
    startTime = performance.now();

    // Reset scroll
    readingArea.scrollTop = 0;
}

function finishTest() {
    const endTime = performance.now();
    const timeInSeconds = (endTime - startTime) / 1000;
    const timeInMinutes = timeInSeconds / 60;

    // Word Count
    // Use a robust split but exclude empty strings
    const text = readingContent.innerText; // Get text without HTML tags
    // Remove the button text from the count check logic if needed,
    // but readingContent.innerText might include 'Terminar Lectura' if we are not careful.
    // Let's count from the source data instead to be accurate.
    const selectedId = bookSelector.value;
    const book = cosmereData.find(b => b.id == selectedId);
    const wordCount = book.fragment.trim().split(/\s+/).length;

    // Validate sane reading time (e.g. if instant click)
    if (timeInSeconds < 5) {
        alert("¡Has ido demasiado rápido! Lee el texto de verdad.");
        return;
    }

    const wpm = Math.round(wordCount / timeInMinutes);

    // Save to local storage (Simple history)
    const history = JSON.parse(localStorage.getItem('readingHistory') || '[]');
    history.push({ date: new Date().toISOString(), wpm: wpm, book: book.title });
    localStorage.setItem('readingHistory', JSON.stringify(history));

    // Show Results
    wpmDisplay.textContent = wpm;
    timeVal.textContent = `${Math.round(timeInSeconds)}s`;
    wordsVal.textContent = wordCount;

    resultsOverlay.style.display = 'flex';
}

function resetTest() {
    resultsOverlay.style.display = 'none';
    readingArea.style.display = 'none';
    welcomeScreen.classList.remove('hidden');

    startBtn.style.display = 'block';
    bookSelector.disabled = false;

    // Clear dynamic content
    readingContent.innerHTML = '';
}

// Run
init();
