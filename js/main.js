function updateScale() {
    const container = document.querySelector('.painting-container');
    const navAreas = document.querySelector('.nav-areas');
    
    // Get the actual width of the container
    const containerWidth = container.offsetWidth;
    
    // Calculate scale ratio (based on our 800px reference)
    const scale = containerWidth / 800;
    
    // Apply the scale transform
    navAreas.style.transform = `scale(${scale})`;
}

// Run on load and resize
window.addEventListener('load', updateScale);
window.addEventListener('resize', updateScale);
