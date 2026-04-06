const CACHE_NAME = 'tricot-facile-v1';

// Liste des ressources à mettre en cache pour un fonctionnement hors-ligne
const urlsToCache = [
  './',
  './index.html',
  './convertisseurs.html',
  './traducteur.html',
  './equivalent-laine.html',
  './repertoire.html',
  './recherche-image.html',
  './css/style.css',
  './js/main.js',
  './js/convertisseurs.js',
  './js/traducteur.js',
  './js/dictionnaire.js',
  './js/equivalent-laine.js',
  './js/repertoire.js',
  './js/recherche-image.js',
  './manifest.json',
  './icons/icon.svg',
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap'
];

// Événement d'installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
});

// Événement de récupération (fetch)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si la ressource est dans le cache, on la retourne
        if (response) {
          return response;
        }
        
        // Sinon on fait la requête réseau
        return fetch(event.request).then(
          (response) => {
            // On vérifie si la réponse est valide
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // On clone la réponse car elle ne peut être consommée qu'une fois
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Événement d'activation (pour nettoyer les anciens caches)
self.addEventListener('activate', (event) => {
  const cacheAllowlist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
