document.addEventListener('DOMContentLoaded', function() {
    const map = document.querySelector('map[name="painting-map"]');
    const img = document.querySelector('img[usemap="#painting-map"]');
    
    function updateAreas() {
        // Remove old overlay if it exists
        const oldOverlay = document.querySelector('.map-overlay');
        if (oldOverlay) oldOverlay.remove();

        // Create new overlay
        const overlay = document.createElement('div');
        overlay.className = 'map-overlay';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.pointerEvents = 'none';
        img.parentElement.appendChild(overlay);

        // Get current image dimensions
        const displayRatio = img.width / img.height;
        const naturalRatio = img.naturalWidth / img.naturalHeight;
        
        map.querySelectorAll('area').forEach(area => {
            if (area.shape === 'circle') {
                const [x, y, r] = area.coords.split(',').map(Number);
                const circle = document.createElement('div');
                
                // Adjust coordinates based on current aspect ratio
                let adjustedX = x;
                let adjustedY = y;
                
                if (displayRatio !== naturalRatio) {
                    if (displayRatio < naturalRatio) {
                        // Portrait mode
                        adjustedX = x * (displayRatio / naturalRatio);
                    } else {
                        // Landscape mode
                        adjustedY = y * (naturalRatio / displayRatio);
                    }
                }
                
                circle.style.position = 'absolute';
                circle.style.left = (adjustedX / img.naturalWidth * 100) + '%';
                circle.style.top = (adjustedY / img.naturalHeight * 100) + '%';
                circle.style.width = (r * 2 / img.naturalWidth * 100) + '%';
                circle.style.height = (r * 2 / img.naturalHeight * 100) + '%';
                circle.style.border = `2px dashed ${area.href.includes('contact') || area.href.includes('gallery') ? 'blue' : 'green'}`;
                circle.style.borderRadius = '50%';
                circle.style.transform = 'translate(-50%, -50%)';
                circle.style.pointerEvents = 'none';
                
                overlay.appendChild(circle);
            }
        });
    }

    // Update on load and resize
    img.onload = updateAreas;
    window.addEventListener('resize', updateAreas);
});
