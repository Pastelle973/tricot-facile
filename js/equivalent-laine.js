/**
 * Tricot Facile - Équivalent Laine
 * Calculateur de quantité et suggestions d'alternatives
 */

// ============================================
// Données des fibres et alternatives
// ============================================

const FIBER_ALTERNATIVES = {
    cashmere: {
        name: 'Cachemire',
        description: 'Fibre de luxe très douce et légère',
        priceLevel: 'Très élevé (30-80€/50g)',
        alternatives: [
            {
                fiber: 'Mérinos superfin',
                similarity: 85,
                priceReduction: '50-70%',
                description: 'Doux et chaud, excellente alternative',
                shops: [
                    { name: 'DROPS Baby Merino', url: 'https://www.garnstudio.com/lang/fr/' },
                    { name: 'Hobbii Friends Merino', url: 'https://hobbii.fr' }
                ]
            },
            {
                fiber: 'Alpaga Baby',
                similarity: 80,
                priceReduction: '30-50%',
                description: 'Encore plus doux, léger et hypoallergénique',
                shops: [
                    { name: 'DROPS Alpaca', url: 'https://www.garnstudio.com/lang/fr/' },
                    { name: 'Bergère de France Alpaga', url: 'https://www.bergeredefrance.fr' }
                ]
            },
            {
                fiber: 'Mélange laine/soie',
                similarity: 75,
                priceReduction: '30-50%',
                description: 'Brillance et douceur avec plus de durabilité',
                shops: [
                    { name: 'DROPS Fabel', url: 'https://www.garnstudio.com/lang/fr/' }
                ]
            },
            {
                fiber: 'Yak',
                similarity: 90,
                priceReduction: '20-30%',
                description: 'Propriétés similaires au cachemire, plus résistant',
                shops: [
                    { name: 'De Rerum Natura Ulysse', url: 'https://www.dererumnatura.fr' }
                ]
            }
        ]
    },
    silk: {
        name: 'Soie',
        description: 'Fibre brillante et luxueuse',
        priceLevel: 'Élevé (15-40€/50g)',
        alternatives: [
            {
                fiber: 'Viscose/Rayon',
                similarity: 70,
                priceReduction: '60-80%',
                description: 'Brillance similaire, plus économique',
                shops: [
                    { name: 'Lammy Yarns', url: 'https://www.lammyyarns.com' }
                ]
            },
            {
                fiber: 'Mérinos/Soie blend',
                similarity: 85,
                priceReduction: '30-40%',
                description: 'Combine douceur et brillance',
                shops: [
                    { name: 'DROPS Silk Tweed', url: 'https://www.garnstudio.com/lang/fr/' }
                ]
            },
            {
                fiber: 'Coton mercerisé',
                similarity: 60,
                priceReduction: '50-70%',
                description: 'Brillance naturelle, idéal pour l\'été',
                shops: [
                    { name: 'Phildar Phil Coton', url: 'https://www.phildar.fr' }
                ]
            }
        ]
    },
    alpaca: {
        name: 'Alpaga',
        description: 'Fibre douce, chaude et légère',
        priceLevel: 'Moyen-élevé (10-25€/50g)',
        alternatives: [
            {
                fiber: 'Mérinos',
                similarity: 75,
                priceReduction: '30-50%',
                description: 'Bonne alternative, un peu moins léger',
                shops: [
                    { name: 'DROPS Merino Extra Fine', url: 'https://www.garnstudio.com/lang/fr/' },
                    { name: 'Bergère de France Idéal', url: 'https://www.bergeredefrance.fr' }
                ]
            },
            {
                fiber: 'Mohair-laine blend',
                similarity: 70,
                priceReduction: '20-40%',
                description: 'Légèreté et douceur comparable',
                shops: [
                    { name: 'DROPS Kid Silk', url: 'https://www.garnstudio.com/lang/fr/' }
                ]
            },
            {
                fiber: 'Acrylique soft touch',
                similarity: 50,
                priceReduction: '70-90%',
                description: 'Option très économique, facile d\'entretien',
                shops: [
                    { name: 'Hobbii Baby Snuggle', url: 'https://hobbii.fr' }
                ]
            }
        ]
    },
    mohair: {
        name: 'Mohair',
        description: 'Fibre brillante et duveteuse',
        priceLevel: 'Moyen-élevé (12-30€/25g)',
        alternatives: [
            {
                fiber: 'Kidsilk-style acrylique',
                similarity: 60,
                priceReduction: '70-80%',
                description: 'Effet duveteux similaire, très économique',
                shops: [
                    { name: 'Hobbii Diablo', url: 'https://hobbii.fr' }
                ]
            },
            {
                fiber: 'Alpaga brossé',
                similarity: 75,
                priceReduction: '20-40%',
                description: 'Douceur similaire, moins de halo',
                shops: [
                    { name: 'DROPS Brushed Alpaca Silk', url: 'https://www.garnstudio.com/lang/fr/' }
                ]
            }
        ]
    },
    merino: {
        name: 'Mérinos',
        description: 'Laine douce et polyvalente',
        priceLevel: 'Moyen (8-18€/50g)',
        alternatives: [
            {
                fiber: 'Mélange mérinos/acrylique',
                similarity: 80,
                priceReduction: '30-50%',
                description: 'Plus économique avec bonnes propriétés',
                shops: [
                    { name: 'Phildar Partner', url: 'https://www.phildar.fr' }
                ]
            },
            {
                fiber: 'Laine superwash standard',
                similarity: 70,
                priceReduction: '40-60%',
                description: 'Facile d\'entretien, moins doux',
                shops: [
                    { name: 'DROPS Nepal', url: 'https://www.garnstudio.com/lang/fr/' }
                ]
            },
            {
                fiber: 'Acrylique premium',
                similarity: 50,
                priceReduction: '60-80%',
                description: 'Très économique, facile d\'entretien',
                shops: [
                    { name: 'Hobbii Rainbow Cotton', url: 'https://hobbii.fr' }
                ]
            }
        ]
    },
    wool: {
        name: 'Laine standard',
        description: 'Laine de mouton classique',
        priceLevel: 'Économique (5-12€/50g)',
        alternatives: [
            {
                fiber: 'Acrylique',
                similarity: 60,
                priceReduction: '50-70%',
                description: 'Très économique, facile d\'entretien',
                shops: [
                    { name: 'Hobbii', url: 'https://hobbii.fr' },
                    { name: 'Bergère de France', url: 'https://www.bergeredefrance.fr' }
                ]
            },
            {
                fiber: 'Laine/acrylique blend',
                similarity: 80,
                priceReduction: '30-40%',
                description: 'Bon compromis entre qualité et prix',
                shops: [
                    { name: 'DROPS Alaska', url: 'https://www.garnstudio.com/lang/fr/' }
                ]
            }
        ]
    }
};

// Catégories de laine avec métrage typique
const YARN_WEIGHTS = {
    0: { name: 'Lace', typicalMeters: 400, gaugeRange: '33-40' },
    1: { name: 'Fingering', typicalMeters: 350, gaugeRange: '27-32' },
    2: { name: 'Sport', typicalMeters: 250, gaugeRange: '23-26' },
    3: { name: 'DK', typicalMeters: 200, gaugeRange: '21-24' },
    4: { name: 'Worsted', typicalMeters: 150, gaugeRange: '16-20' },
    5: { name: 'Bulky', typicalMeters: 100, gaugeRange: '12-15' },
    6: { name: 'Super Bulky', typicalMeters: 75, gaugeRange: '7-11' },
    7: { name: 'Jumbo', typicalMeters: 50, gaugeRange: '1-6' }
};

// ============================================
// Fonctions de calcul
// ============================================

/**
 * Calcule le nombre de pelotes nécessaires
 */
function calculateSkeins(originalMeters, originalSkeins, replacementMeters) {
    const totalMeters = originalMeters * originalSkeins;
    const neededSkeins = Math.ceil(totalMeters / replacementMeters);
    return {
        totalMeters,
        neededSkeins,
        exactSkeins: (totalMeters / replacementMeters).toFixed(2)
    };
}

/**
 * Génère le HTML des alternatives
 */
function generateAlternativesHTML(fiberType) {
    const data = FIBER_ALTERNATIVES[fiberType];
    if (!data) return '';

    let html = `
        <div class="alert alert-info mb-3">
            <strong>${data.name}</strong> - ${data.description}<br>
            <span class="text-muted">Prix moyen : ${data.priceLevel}</span>
        </div>
        <h4 class="mb-2">Alternatives recommandées :</h4>
    `;

    html += '<div class="resource-grid">';

    data.alternatives.forEach(alt => {
        html += `
            <div class="resource-card">
                <div class="resource-card-image" style="height: 80px; font-size: 1.5rem;">
                    ${alt.similarity >= 80 ? '⭐⭐⭐' : alt.similarity >= 65 ? '⭐⭐' : '⭐'}
                </div>
                <div class="resource-card-content">
                    <h4 class="resource-card-title">${alt.fiber}</h4>
                    <div class="resource-card-tags mb-2">
                        <span class="badge badge-sage">Similarité : ${alt.similarity}%</span>
                        <span class="badge badge-terracotta">-${alt.priceReduction}</span>
                    </div>
                    <p class="resource-card-desc">${alt.description}</p>
                    <div style="font-size: 0.875rem; margin-top: 0.5rem;">
                        <strong>Où acheter :</strong>
                        <ul style="margin-top: 0.25rem; padding-left: 1.5rem;">
                            ${alt.shops.map(shop => `
                                <li><a href="${shop.url}" target="_blank" style="color: var(--color-terracotta);">${shop.name}</a></li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });

    html += '</div>';
    return html;
}

// ============================================
// Gestionnaires d'événements
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Calculateur
    const calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            const originalMeters = parseFloat(document.getElementById('original-meters').value);
            const originalSkeins = parseInt(document.getElementById('original-skeins').value);
            const replacementMeters = parseFloat(document.getElementById('replacement-meters').value);
            const originalWeight = document.getElementById('original-weight').value;
            const replacementWeight = document.getElementById('replacement-weight').value;

            if (!originalMeters || !originalSkeins || !replacementMeters) {
                alert('Veuillez remplir tous les champs.');
                return;
            }

            const result = calculateSkeins(originalMeters, originalSkeins, replacementMeters);

            document.getElementById('result-skeins').textContent = result.neededSkeins;

            // Détails du calcul
            const details = document.getElementById('calculation-details');
            const detailsText = document.getElementById('calculation-text');

            let warning = '';
            if (originalWeight && replacementWeight && originalWeight !== replacementWeight) {
                warning = `
                    <div class="alert alert-warning mt-2">
                        <strong>⚠️ Attention :</strong> Vous changez de catégorie de laine. 
                        Pensez à refaire un échantillon et à adapter vos aiguilles.
                    </div>
                `;
            }

            detailsText.innerHTML = `
                <p>
                    <strong>Métrage total nécessaire :</strong> ${result.totalMeters} m<br>
                    <strong>Pelotes originales :</strong> ${originalSkeins} × ${originalMeters} m = ${result.totalMeters} m<br>
                    <strong>Pelotes de remplacement :</strong> ${result.totalMeters} m ÷ ${replacementMeters} m = ${result.exactSkeins} pelotes<br>
                    <strong>Arrondi :</strong> ${result.neededSkeins} pelotes (toujours arrondir au supérieur)
                </p>
                ${warning}
            `;
            details.style.display = 'block';
        });
    }

    // Auto-remplir le métrage typique quand on change de catégorie
    ['original-weight', 'replacement-weight'].forEach(id => {
        const select = document.getElementById(id);
        const metersInput = document.getElementById(id.replace('weight', 'meters'));

        if (select && metersInput) {
            select.addEventListener('change', (e) => {
                const weight = e.target.value;
                if (weight && YARN_WEIGHTS[weight] && !metersInput.value) {
                    metersInput.placeholder = `Typique: ${YARN_WEIGHTS[weight].typicalMeters}m`;
                }
            });
        }
    });

    // Sélecteur de type de fibre pour les alternatives
    const fiberSelect = document.getElementById('fiber-type');
    const alternativesList = document.getElementById('alternatives-list');

    if (fiberSelect && alternativesList) {
        fiberSelect.addEventListener('change', (e) => {
            const fiberType = e.target.value;
            if (fiberType) {
                alternativesList.innerHTML = generateAlternativesHTML(fiberType);
                alternativesList.style.display = 'block';
            } else {
                alternativesList.style.display = 'none';
            }
        });
    }
});
