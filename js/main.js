document.addEventListener('DOMContentLoaded', function() {
    const map = document.querySelector('map[name="painting-map"]');
    const img = document.querySelector('img[usemap="#painting-map"]');
    
    // Log dimensions to help debug
    console.log('Natural dimensions:', img.naturalWidth, img.naturalHeight);
    console.log('Display dimensions:', img.offsetWidth, img.offsetHeight);

    // Wait for image to load before creating overlay
    img.onload = function() {
        // Create overlay for visualization
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.pointerEvents = 'none';
        img.parentElement.appendChild(overlay);
        
        // Draw circles for each area
        map.querySelectorAll('area').forEach(area => {
            if (area.shape === 'circle') {
                const [x, y, r] = area.coords.split(',').map(Number);
                const circle = document.createElement('div');
                
                circle.style.position = 'absolute';
                circle.style.left = (x / img.naturalWidth * 100) + '%';
                circle.style.top = (y / img.naturalHeight * 100) + '%';
                circle.style.width = (r * 2 / img.naturalWidth * 100) + '%';
                circle.style.height = (r * 2 / img.naturalHeight * 100) + '%';
                circle.style.border = `2px dashed ${area.href.includes('contact') || area.href.includes('gallery') ? 'blue' : 'green'}`;
                circle.style.borderRadius = '50%';
                circle.style.transform = 'translate(-50%, -50%)';
                circle.style.pointerEvents = 'none';
                
                overlay.appendChild(circle);
            }
        });
    };
});
