/**
 * Tricot Facile - Répertoire
 * Filtrage et recherche des sites
 */

document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
    const langBtns = document.querySelectorAll('.filter-btn[data-lang]');
    const searchInput = document.getElementById('search-sites');
    const sitesGrid = document.getElementById('sites-grid');
    const cards = sitesGrid.querySelectorAll('.resource-card');
    const noResults = document.getElementById('no-results');

    let currentFilter = 'all';
    let currentLang = 'all';
    let searchQuery = '';

    // Filtre par catégorie
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            applyFilters();
        });
    });

    // Filtre par langue
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.dataset.lang;
            applyFilters();
        });
    });

    // Recherche
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            applyFilters();
        });
    }

    function applyFilters() {
        let visibleCount = 0;

        cards.forEach(card => {
            const category = card.dataset.category || '';
            const lang = card.dataset.lang || '';
            const title = card.querySelector('.resource-card-title')?.textContent.toLowerCase() || '';
            const desc = card.querySelector('.resource-card-desc')?.textContent.toLowerCase() || '';

            // Vérifier le filtre de catégorie
            const matchesCategory = currentFilter === 'all' || category.includes(currentFilter);

            // Vérifier le filtre de langue
            const matchesLang = currentLang === 'all' || lang === currentLang;

            // Vérifier la recherche
            const matchesSearch = !searchQuery ||
                title.includes(searchQuery) ||
                desc.includes(searchQuery);

            if (matchesCategory && matchesLang && matchesSearch) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Afficher "aucun résultat" si nécessaire
        if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }
});
