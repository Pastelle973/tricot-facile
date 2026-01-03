/**
 * Tricot Facile - Convertisseurs
 * Conversion d'aiguilles, dimensions et tailles de vêtements
 */

// ============================================
// Données de conversion
// ============================================

const NEEDLE_US_TO_METRIC = {
    '0': 2,
    '1': 2.25,
    '1.5': 2.5,
    '2': 2.75,
    '2.5': 3,
    '3': 3.25,
    '4': 3.5,
    '5': 3.75,
    '6': 4,
    '7': 4.5,
    '8': 5,
    '9': 5.5,
    '10': 6,
    '10.5': 6.5,
    '10.75': 7,
    '11': 8,
    '13': 9,
    '15': 10,
    '17': 12,
    '19': 15,
    '35': 19,
    '50': 25
};

const NEEDLE_UK_TO_METRIC = {
    '14': 2,
    '13': 2.25,
    '12': 2.75,
    '11': 3,
    '10': 3.25,
    '9': 3.75,
    '8': 4,
    '7': 4.5,
    '6': 5,
    '5': 5.5,
    '4': 6,
    '3': 6.5,
    '2': 7,
    '1': 7.5,
    '0': 8,
    '00': 9,
    '000': 10
};

const NEEDLE_METRIC_TO_USUK = {
    '2': { us: '0', uk: '14' },
    '2.25': { us: '1', uk: '13' },
    '2.5': { us: '1.5', uk: '12-13' },
    '2.75': { us: '2', uk: '12' },
    '3': { us: '2.5', uk: '11' },
    '3.25': { us: '3', uk: '10' },
    '3.5': { us: '4', uk: '9-10' },
    '3.75': { us: '5', uk: '9' },
    '4': { us: '6', uk: '8' },
    '4.5': { us: '7', uk: '7' },
    '5': { us: '8', uk: '6' },
    '5.5': { us: '9', uk: '5' },
    '6': { us: '10', uk: '4' },
    '6.5': { us: '10.5', uk: '3' },
    '7': { us: '10.75', uk: '2' },
    '8': { us: '11', uk: '0' },
    '9': { us: '13', uk: '00' },
    '10': { us: '15', uk: '000' },
    '12': { us: '17', uk: '-' },
    '15': { us: '19', uk: '-' },
    '19': { us: '35', uk: '-' },
    '25': { us: '50', uk: '-' }
};

// Tailles de vêtements (basées sur tour de poitrine en pouces)
const SIZE_CHART = [
    { minInches: 28, maxInches: 30, letter: 'XXS', fr: '32-34', us: '0-2', uk: '4-6' },
    { minInches: 30, maxInches: 32, letter: 'XS', fr: '34-36', us: '2-4', uk: '6-8' },
    { minInches: 32, maxInches: 34, letter: 'S', fr: '36-38', us: '4-6', uk: '8-10' },
    { minInches: 34, maxInches: 36, letter: 'M', fr: '38-40', us: '6-8', uk: '10-12' },
    { minInches: 36, maxInches: 38, letter: 'M/L', fr: '40-42', us: '8-10', uk: '12-14' },
    { minInches: 38, maxInches: 40, letter: 'L', fr: '42-44', us: '10-12', uk: '14-16' },
    { minInches: 40, maxInches: 42, letter: 'L/XL', fr: '44-46', us: '12-14', uk: '16-18' },
    { minInches: 42, maxInches: 44, letter: 'XL', fr: '46-48', us: '14-16', uk: '18-20' },
    { minInches: 44, maxInches: 46, letter: 'XL/2XL', fr: '48-50', us: '16-18', uk: '20-22' },
    { minInches: 46, maxInches: 48, letter: '2XL', fr: '50-52', us: '18-20', uk: '22-24' },
    { minInches: 48, maxInches: 50, letter: '2XL/3XL', fr: '52-54', us: '20-22', uk: '24-26' },
    { minInches: 50, maxInches: 52, letter: '3XL', fr: '54-56', us: '22-24', uk: '26-28' },
    { minInches: 52, maxInches: 54, letter: '3XL/4XL', fr: '56-58', us: '24-26', uk: '28-30' },
    { minInches: 54, maxInches: 56, letter: '4XL', fr: '58-60', us: '26-28', uk: '30-32' }
];

// ============================================
// Fonctions de conversion
// ============================================

/**
 * Parse une valeur en pouces (supporte fractions)
 * @param {string} value - Ex: "34", "34.5", "34 1/4", "34½"
 * @returns {number|null}
 */
function parseInches(value) {
    if (!value || value.trim() === '') return null;
    
    value = value.trim();
    
    // Remplacer les fractions Unicode
    const fractionMap = {
        '½': '.5',
        '¼': '.25',
        '¾': '.75',
        '⅓': '.333',
        '⅔': '.667',
        '⅛': '.125',
        '⅜': '.375',
        '⅝': '.625',
        '⅞': '.875'
    };
    
    for (const [frac, dec] of Object.entries(fractionMap)) {
        if (value.includes(frac)) {
            const parts = value.split(frac);
            const whole = parseFloat(parts[0].trim()) || 0;
            return whole + parseFloat(dec);
        }
    }
    
    // Format "34 1/4"
    const fractionMatch = value.match(/(\d+)\s+(\d+)\/(\d+)/);
    if (fractionMatch) {
        const whole = parseFloat(fractionMatch[1]);
        const num = parseFloat(fractionMatch[2]);
        const denom = parseFloat(fractionMatch[3]);
        return whole + (num / denom);
    }
    
    // Format simple "34" ou "34.5"
    const simple = parseFloat(value);
    return isNaN(simple) ? null : simple;
}

/**
 * Convertit pouces en centimètres
 */
function inchesToCm(inches) {
    return inches * 2.54;
}

/**
 * Convertit centimètres en pouces
 */
function cmToInches(cm) {
    return cm / 2.54;
}

/**
 * Trouve la taille correspondante
 */
function findSize(inches) {
    for (const size of SIZE_CHART) {
        if (inches >= size.minInches && inches < size.maxInches) {
            return size;
        }
    }
    // Si au-dessus du max
    if (inches >= SIZE_CHART[SIZE_CHART.length - 1].maxInches) {
        return SIZE_CHART[SIZE_CHART.length - 1];
    }
    // Si en-dessous du min
    if (inches < SIZE_CHART[0].minInches) {
        return SIZE_CHART[0];
    }
    return null;
}

// ============================================
// Gestionnaires d'événements
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Tabs
    initTabs();
    
    // Convertisseur d'aiguilles US
    const needleUsInput = document.getElementById('needle-us-input');
    if (needleUsInput) {
        needleUsInput.addEventListener('change', (e) => {
            const value = e.target.value;
            const result = document.getElementById('needle-us-result');
            if (value && NEEDLE_US_TO_METRIC[value]) {
                result.textContent = NEEDLE_US_TO_METRIC[value];
            } else {
                result.textContent = '--';
            }
        });
    }
    
    // Convertisseur d'aiguilles UK
    const needleUkInput = document.getElementById('needle-uk-input');
    if (needleUkInput) {
        needleUkInput.addEventListener('change', (e) => {
            const value = e.target.value;
            const result = document.getElementById('needle-uk-result');
            if (value && NEEDLE_UK_TO_METRIC[value]) {
                result.textContent = NEEDLE_UK_TO_METRIC[value];
            } else {
                result.textContent = '--';
            }
        });
    }
    
    // Convertisseur d'aiguilles Métrique
    const needleMetricInput = document.getElementById('needle-metric-input');
    if (needleMetricInput) {
        needleMetricInput.addEventListener('change', (e) => {
            const value = e.target.value;
            const resultUs = document.getElementById('needle-metric-result-us');
            const resultUk = document.getElementById('needle-metric-result-uk');
            if (value && NEEDLE_METRIC_TO_USUK[value]) {
                const data = NEEDLE_METRIC_TO_USUK[value];
                resultUs.textContent = `US ${data.us}`;
                resultUk.textContent = `UK ${data.uk}`;
            } else {
                resultUs.textContent = '--';
                resultUk.textContent = '--';
            }
        });
    }
    
    // Convertisseur de longueur de câble
    const cableInput = document.getElementById('cable-input');
    if (cableInput) {
        cableInput.addEventListener('change', (e) => {
            const value = parseFloat(e.target.value);
            const result = document.getElementById('cable-result');
            if (!isNaN(value)) {
                result.textContent = Math.round(inchesToCm(value));
            } else {
                result.textContent = '--';
            }
        });
    }
    
    // Convertisseur pouces → cm
    const inchesInput = document.getElementById('inches-input');
    if (inchesInput) {
        inchesInput.addEventListener('input', (e) => {
            const inches = parseInches(e.target.value);
            const result = document.getElementById('cm-result');
            if (inches !== null) {
                result.textContent = inchesToCm(inches).toFixed(2);
            } else {
                result.textContent = '--';
            }
        });
    }
    
    // Convertisseur cm → pouces
    const cmInput = document.getElementById('cm-input');
    if (cmInput) {
        cmInput.addEventListener('input', (e) => {
            const cm = parseFloat(e.target.value);
            const result = document.getElementById('inches-result');
            if (!isNaN(cm)) {
                result.textContent = cmToInches(cm).toFixed(2);
            } else {
                result.textContent = '--';
            }
        });
    }
    
    // Convertisseur de tailles
    const sizeInchesInput = document.getElementById('size-inches-input');
    if (sizeInchesInput) {
        sizeInchesInput.addEventListener('input', (e) => {
            const inches = parseInches(e.target.value);
            const sizeCmResult = document.getElementById('size-cm-result');
            const sizeDetails = document.getElementById('size-details');
            const sizeFr = document.getElementById('size-fr');
            const sizeUs = document.getElementById('size-us');
            const sizeUk = document.getElementById('size-uk');
            const sizeLetter = document.getElementById('size-letter');
            
            if (inches !== null) {
                const cm = inchesToCm(inches);
                sizeCmResult.textContent = `${cm.toFixed(1)} cm`;
                
                const size = findSize(inches);
                if (size) {
                    sizeDetails.style.display = 'block';
                    sizeFr.textContent = size.fr;
                    sizeUs.textContent = size.us;
                    sizeUk.textContent = size.uk;
                    sizeLetter.textContent = size.letter;
                } else {
                    sizeDetails.style.display = 'none';
                }
            } else {
                sizeCmResult.textContent = '-- cm';
                sizeDetails.style.display = 'none';
            }
        });
    }
});

/**
 * Initialise les onglets
 */
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            // Retirer active de tous les boutons et contenus
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Ajouter active au bouton cliqué et au contenu correspondant
            btn.classList.add('active');
            document.getElementById(`tab-${tabId}`)?.classList.add('active');
        });
    });
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        parseInches,
        inchesToCm,
        cmToInches,
        findSize,
        NEEDLE_US_TO_METRIC,
        NEEDLE_UK_TO_METRIC,
        NEEDLE_METRIC_TO_USUK,
        SIZE_CHART
    };
}
