/**
 * Tricot Facile - Traducteur de Modèles
 * Traduction automatique des patrons avec termes techniques, dimensions et aiguilles
 */

// ============================================
// Patterns pour détecter les dimensions
// ============================================

// Pattern pour les aiguilles US
const NEEDLE_US_PATTERN = /\b(?:US|U\.S\.)\s*(?:size\s*)?(\d+(?:\.\d+)?)\b/gi;

// Pattern pour les aiguilles UK
const NEEDLE_UK_PATTERN = /\bUK\s*(?:size\s*)?(\d+)\b/gi;

// Pattern pour les pouces (diverses notations)
const INCHES_PATTERN = /(\d+(?:\.\d+)?)\s*(?:"|''|inches?|in\.?|inch\s+circular|inch)/gi;

// Pattern pour les fractions de pouces
const INCHES_FRACTION_PATTERN = /(\d+)\s*([½¼¾⅓⅔⅛⅜⅝⅞])\s*(?:"|''|inches?|in\.?)?/gi;

// Pattern pour les fractions écrites
const INCHES_WRITTEN_FRACTION = /(\d+)\s+(\d+)\/(\d+)\s*(?:"|''|inches?|in\.?)?/gi;

// ============================================
// Données de conversion (depuis convertisseurs.js)
// ============================================

const US_TO_METRIC = {
    '0': 2, '1': 2.25, '1.5': 2.5, '2': 2.75, '2.5': 3,
    '3': 3.25, '4': 3.5, '5': 3.75, '6': 4, '7': 4.5,
    '8': 5, '9': 5.5, '10': 6, '10.5': 6.5, '10.75': 7,
    '11': 8, '13': 9, '15': 10, '17': 12, '19': 15,
    '35': 19, '50': 25
};

const UK_TO_METRIC = {
    '14': 2, '13': 2.25, '12': 2.75, '11': 3, '10': 3.25,
    '9': 3.75, '8': 4, '7': 4.5, '6': 5, '5': 5.5,
    '4': 6, '3': 6.5, '2': 7, '1': 7.5, '0': 8,
    '00': 9, '000': 10
};

// ============================================
// Fonctions de traduction
// ============================================

/**
 * Charge un script publiquement de manière dynamique pour les performances
 */
function loadScript(src) {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

/**
 * Convertit une valeur en pouces en centimètres
 */
function inchToCm(inches) {
    return (inches * 2.54).toFixed(1);
}

/**
 * Parse une fraction Unicode en nombre
 */
function parseFraction(char) {
    const fractions = {
        '½': 0.5, '¼': 0.25, '¾': 0.75,
        '⅓': 0.333, '⅔': 0.667,
        '⅛': 0.125, '⅜': 0.375, '⅝': 0.625, '⅞': 0.875
    };
    return fractions[char] || 0;
}

/**
 * Échappe les caractères spéciaux HTML pour éviter les failles XSS
 */
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

/**
 * Traduit un texte complet
 */
function translatePattern(text, options = {}) {
    const {
        translateTechnical = true,
        convertNeedles = true,
        convertDimensions = true,
        highlight = true
    } = options;

    let result = escapeHTML(text);
    const stats = {
        termsTranslated: 0,
        needlesConverted: 0,
        dimensionsConverted: 0
    };
    const foundTerms = [];
    const replacements = [];

    // 1. Convertir les aiguilles US
    if (convertNeedles) {
        result = result.replace(NEEDLE_US_PATTERN, (match, size) => {
            const metric = US_TO_METRIC[size];
            if (metric) {
                stats.needlesConverted++;
                const replacement = highlight
                    ? `<span class="highlight-dimension">${metric} mm</span>`
                    : `${metric} mm`;
                return replacement;
            }
            return match;
        });

        // Convertir les aiguilles UK
        result = result.replace(NEEDLE_UK_PATTERN, (match, size) => {
            const metric = UK_TO_METRIC[size];
            if (metric) {
                stats.needlesConverted++;
                const replacement = highlight
                    ? `<span class="highlight-dimension">${metric} mm</span>`
                    : `${metric} mm`;
                return replacement;
            }
            return match;
        });
    }

    // 2. Convertir les dimensions (pouces → cm)
    if (convertDimensions) {
        // Format: 24", 24 inches, etc.
        result = result.replace(INCHES_PATTERN, (match, value) => {
            const inches = parseFloat(value);
            if (!isNaN(inches)) {
                stats.dimensionsConverted++;
                const cm = inchToCm(inches);
                const replacement = highlight
                    ? `<span class="highlight-dimension">${cm} cm</span>`
                    : `${cm} cm`;
                return replacement;
            }
            return match;
        });

        // Format: 34½"
        result = result.replace(INCHES_FRACTION_PATTERN, (match, whole, frac) => {
            const inches = parseInt(whole) + parseFraction(frac);
            stats.dimensionsConverted++;
            const cm = inchToCm(inches);
            const replacement = highlight
                ? `<span class="highlight-dimension">${cm} cm</span>`
                : `${cm} cm`;
            return replacement;
        });

        // Format: 34 1/4"
        result = result.replace(INCHES_WRITTEN_FRACTION, (match, whole, num, denom) => {
            const inches = parseInt(whole) + (parseInt(num) / parseInt(denom));
            stats.dimensionsConverted++;
            const cm = inchToCm(inches);
            const replacement = highlight
                ? `<span class="highlight-dimension">${cm} cm</span>`
                : `${cm} cm`;
            return replacement;
        });
    }

    // 3. Traduire les termes techniques
    if (translateTechnical && typeof DICTIONARY_NORMALIZED !== 'undefined') {
        // Trier par longueur décroissante pour matcher les termes longs d'abord
        const sortedKeys = Object.keys(DICTIONARY_NORMALIZED).sort((a, b) => b.length - a.length);

        for (const key of sortedKeys) {
            const regex = new RegExp(`\\b${escapeRegex(key)}\\b`, 'gi');

            result = result.replace(regex, (match) => {
                const term = DICTIONARY_NORMALIZED[key.toLowerCase()];
                if (term && !foundTerms.find(t => t.original.toLowerCase() === key.toLowerCase())) {
                    foundTerms.push({
                        original: match,
                        translation: term.fr,
                        note: term.note || ''
                    });
                }
                stats.termsTranslated++;

                const replacement = highlight
                    ? `<span class="highlight-term" title="${match}">${term.fr}</span>`
                    : term.fr;
                return replacement;
            });
        }
    }

    return {
        translatedText: result,
        stats,
        foundTerms: [...new Map(foundTerms.map(t => [t.original.toLowerCase(), t])).values()]
    };
}

/**
 * Échappe les caractères spéciaux regex
 */
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Extrait le texte d'une image via OCR
 */
async function extractTextFromImage(imageFile) {
    document.getElementById('loading').innerHTML = '<div class="spinner" style="margin: 0 auto;"></div><p class="mt-2">Chargement du moteur de reconnaissance visuelle (1-2s)...</p>';
    await loadScript('https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js');
    document.getElementById('loading').innerHTML = '<div class="spinner" style="margin: 0 auto;"></div><p class="mt-2">Analyse de l\'image en cours...</p>';

    const { createWorker } = Tesseract;
    const worker = await createWorker('eng');

    const imageUrl = URL.createObjectURL(imageFile);
    const { data: { text } } = await worker.recognize(imageUrl);

    await worker.terminate();
    URL.revokeObjectURL(imageUrl);

    return text;
}

/**
 * Extrait le texte d'un PDF
 */
async function extractTextFromPDF(pdfFile) {
    document.getElementById('loading').innerHTML = '<div class="spinner" style="margin: 0 auto;"></div><p class="mt-2">Chargement du moteur PDF (1-2s)...</p>';
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');
    document.getElementById('loading').innerHTML = '<div class="spinner" style="margin: 0 auto;"></div><p class="mt-2">Lecture du PDF en cours...</p>';

    const arrayBuffer = await pdfFile.arrayBuffer();

    // Charger le PDF
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
    let fullText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + '\n\n';
    }

    return fullText;
}

/**
 * Recherche dans le dictionnaire
 */
function searchDictionary(query) {
    if (!query || query.length < 2) return [];

    const queryLower = query.toLowerCase();
    const results = [];

    for (const [key, value] of Object.entries(DICTIONARY_NORMALIZED)) {
        // Chercher dans la clé anglaise
        if (key.includes(queryLower)) {
            results.push({ en: value.original || key, fr: value.fr, note: value.note, alt: value.alt });
        }
        // Chercher dans la traduction française
        else if (value.fr.toLowerCase().includes(queryLower)) {
            results.push({ en: value.original || key, fr: value.fr, note: value.note, alt: value.alt });
        }
        // Chercher dans les alternatives
        else if (value.alt && value.alt.some(a => a.toLowerCase().includes(queryLower))) {
            results.push({ en: value.original || key, fr: value.fr, note: value.note, alt: value.alt });
        }
    }

    // Supprimer les doublons et limiter
    const unique = [...new Map(results.map(r => [r.en, r])).values()];
    return unique.slice(0, 20);
}

// ============================================
// Gestionnaires d'événements
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Tabs
    initTabs();

    // File input display
    const fileInput = document.getElementById('file-input');
    const fileNameDisplay = document.getElementById('file-name');
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                fileNameDisplay.textContent = `📄 ${e.target.files[0].name}`;
                fileNameDisplay.style.display = 'block';
            }
        });
    }

    // Image preview
    const imageInput = document.getElementById('image-input');
    const imagePreview = document.getElementById('image-preview');
    const previewImg = document.getElementById('preview-img');
    if (imageInput) {
        imageInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const file = e.target.files[0];
                const url = URL.createObjectURL(file);
                previewImg.src = url;
                imagePreview.style.display = 'block';
            }
        });
    }

    // Translate button
    const translateBtn = document.getElementById('translate-btn');
    if (translateBtn) {
        translateBtn.addEventListener('click', handleTranslate);
    }

    // Clear button
    const clearBtn = document.getElementById('clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            document.getElementById('text-input').value = '';
            document.getElementById('url-input').value = '';
            document.getElementById('file-input').value = '';
            document.getElementById('image-input').value = '';
            document.getElementById('file-name').style.display = 'none';
            document.getElementById('image-preview').style.display = 'none';
            document.getElementById('results').style.display = 'none';
        });
    }

    // Copy button
    const copyBtn = document.getElementById('copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const output = document.getElementById('translation-output');
            const text = output.textContent || output.innerText;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = '✓ Copié !';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                }, 2000);
            });
        });
    }

    // Dictionary search
    const dictSearch = document.getElementById('dict-search');
    if (dictSearch) {
        dictSearch.addEventListener('input', (e) => {
            const results = searchDictionary(e.target.value);
            displayDictionaryResults(results);
        });
    }
});

/**
 * Gère la traduction
 */
async function handleTranslate() {
    const loading = document.getElementById('loading');
    const results = document.getElementById('results');

    // Récupérer le texte source
    let sourceText = '';
    const activeTab = document.querySelector('.tab-btn.active').dataset.tab;

    loading.style.display = 'block';
    results.style.display = 'none';

    try {
        switch (activeTab) {
            case 'text':
                sourceText = document.getElementById('text-input').value;
                break;

            case 'file':
                const file = document.getElementById('file-input').files[0];
                if (!file) throw new Error('Veuillez sélectionner un fichier');
                if (file.type === 'application/pdf') {
                    sourceText = await extractTextFromPDF(file);
                } else {
                    sourceText = await file.text();
                }
                break;
            case 'image':
                const imageFile = document.getElementById('image-input').files[0];
                if (!imageFile) throw new Error('Veuillez sélectionner une image');
                sourceText = await extractTextFromImage(imageFile);
                break;
        }

        if (!sourceText.trim()) {
            throw new Error('Aucun texte à traduire');
        }

        // Options de traduction
        const options = {
            translateTechnical: document.getElementById('opt-technical').checked,
            convertNeedles: document.getElementById('opt-needles').checked,
            convertDimensions: document.getElementById('opt-dimensions').checked,
            highlight: document.getElementById('opt-highlight').checked
        };

        // Traduire
        const { translatedText, stats, foundTerms } = translatePattern(sourceText, options);

        // Afficher les résultats
        document.getElementById('translation-output').innerHTML = translatedText;
        document.getElementById('stat-terms').textContent = stats.termsTranslated;
        document.getElementById('stat-needles').textContent = stats.needlesConverted;
        document.getElementById('stat-dimensions').textContent = stats.dimensionsConverted;

        // Afficher le glossaire si des termes ont été trouvés
        const glossarySection = document.getElementById('glossary-section');
        const glossaryBody = document.getElementById('glossary-body');
        if (foundTerms.length > 0) {
            glossaryBody.innerHTML = foundTerms.map(term => `
                <tr>
                    <td><strong>${term.original}</strong></td>
                    <td>${term.translation}</td>
                    <td class="text-muted">${term.note || '-'}</td>
                </tr>
            `).join('');
            glossarySection.style.display = 'block';
        } else {
            glossarySection.style.display = 'none';
        }

        results.style.display = 'block';

    } catch (error) {
        alert(error.message);
    } finally {
        loading.style.display = 'none';
    }
}

/**
 * Affiche les résultats de recherche du dictionnaire
 */
function displayDictionaryResults(results) {
    const container = document.getElementById('dict-results');

    if (results.length === 0) {
        container.innerHTML = '<p class="text-muted">Aucun résultat</p>';
        return;
    }

    container.innerHTML = results.map(r => `
        <div class="panel mb-2" style="padding: 0.75rem 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 1rem;">
                <div>
                    <strong style="color: var(--color-terracotta);">${r.en}</strong>
                    <span style="color: var(--color-charcoal-light);">→</span>
                    <strong>${r.fr}</strong>
                </div>
                ${r.note ? `<span class="badge badge-beige">${r.note}</span>` : ''}
            </div>
            ${r.alt && r.alt.length > 0 ? `
                <div style="font-size: 0.875rem; color: var(--color-charcoal-light); margin-top: 0.25rem;">
                    Alternatives : ${r.alt.join(', ')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

/**
 * Initialise les onglets
 */
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(`tab-${tabId}`)?.classList.add('active');
        });
    });
}
