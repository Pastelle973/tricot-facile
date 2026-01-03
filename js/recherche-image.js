/**
 * Tricot Facile - Recherche Image
 * Recherche inversée d'image via services externes
 */

document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('image-input');
    const imagePreview = document.getElementById('image-preview');
    const previewImg = document.getElementById('preview-img');
    const dropZone = document.getElementById('drop-zone');
    const imageUrlInput = document.getElementById('image-url');

    let uploadedImageDataUrl = null;

    // ============================================
    // Upload d'image
    // ============================================

    if (imageInput) {
        imageInput.addEventListener('change', (e) => {
            handleImageUpload(e.target.files[0]);
        });
    }

    // Drag and drop
    if (dropZone) {
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = 'var(--color-terracotta)';
            dropZone.style.background = 'var(--color-cream-dark)';
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.style.borderColor = '';
            dropZone.style.background = '';
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = '';
            dropZone.style.background = '';

            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                handleImageUpload(file);
            }
        });
    }

    function handleImageUpload(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedImageDataUrl = e.target.result;
            previewImg.src = uploadedImageDataUrl;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }

    // ============================================
    // Boutons de recherche (image uploadée)
    // ============================================

    // Note: Pour les images uploadées, on ne peut pas directement les envoyer aux moteurs de recherche
    // car ils n'acceptent pas les data URLs. On doit donc ouvrir leur interface et demander à l'utilisateur
    // de faire un copier-coller ou de re-uploader.

    document.getElementById('search-google')?.addEventListener('click', () => {
        // Google Lens n'accepte pas les images directement par URL
        // On ouvre Google Images avec l'option recherche par image
        window.open('https://lens.google.com/', '_blank');
        showUploadInstructions('Google Lens');
    });

    document.getElementById('search-tineye')?.addEventListener('click', () => {
        window.open('https://tineye.com/', '_blank');
        showUploadInstructions('TinEye');
    });

    document.getElementById('search-bing')?.addEventListener('click', () => {
        window.open('https://www.bing.com/visualsearch', '_blank');
        showUploadInstructions('Bing Visual Search');
    });

    document.getElementById('search-yandex')?.addEventListener('click', () => {
        window.open('https://yandex.com/images/', '_blank');
        showUploadInstructions('Yandex Images');
    });

    function showUploadInstructions(service) {
        alert(`${service} va s'ouvrir dans un nouvel onglet.\n\nCliquez sur l'icône d'appareil photo ou "Rechercher par image" et téléchargez votre image.`);
    }

    // ============================================
    // Recherche par URL
    // ============================================

    if (imageUrlInput) {
        imageUrlInput.addEventListener('input', (e) => {
            const url = e.target.value.trim();
            const googleBtn = document.getElementById('url-google');
            const tineyeBtn = document.getElementById('url-tineye');
            const bingBtn = document.getElementById('url-bing');

            if (isValidUrl(url)) {
                // Activer les boutons
                [googleBtn, tineyeBtn, bingBtn].forEach(btn => {
                    btn.style.pointerEvents = '';
                    btn.style.opacity = '';
                });

                // Mettre à jour les liens
                const encodedUrl = encodeURIComponent(url);
                googleBtn.href = `https://lens.google.com/uploadbyurl?url=${encodedUrl}`;
                tineyeBtn.href = `https://tineye.com/search?url=${encodedUrl}`;
                bingBtn.href = `https://www.bing.com/images/search?view=detailv2&iss=sbi&form=SBIVSP&sbisrc=UrlPaste&q=imgurl:${encodedUrl}`;
            } else {
                // Désactiver les boutons
                [googleBtn, tineyeBtn, bingBtn].forEach(btn => {
                    btn.style.pointerEvents = 'none';
                    btn.style.opacity = '0.5';
                    btn.href = '#';
                });
            }
        });
    }

    function isValidUrl(string) {
        try {
            const url = new URL(string);
            return url.protocol === 'http:' || url.protocol === 'https:';
        } catch {
            return false;
        }
    }
});
