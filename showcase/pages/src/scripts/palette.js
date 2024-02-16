document.addEventListener('DOMContentLoaded', () => {
    function applyPalette(paletteName) {
        const paletteColors = {
            // Define your palettes here
            palette1: ['#76453B', '#B19470', '#43766C', '#F8FAE5', '#F1E4C3'],
            palette2: ['#324371', '#9b3b6d', '#f53d75', '#faf2d8', '#f6ef94'],
            palette3: ['#113946', '#BCA37F', '#EAD7BB', '#FFF2D8'],
            defaultPalette: ['#113946', '#BCA37F', '#EAD7BB', '#FFF2D8']// Example default colors
        }[paletteName || 'defaultPalette']; // Use 'defaultPalette' if no paletteName is provided
 // Use 'defaultPalette' if no paletteName is provided

        if (paletteColors) {
            document.documentElement.style.setProperty('--primary-color', paletteColors[0]);
            document.documentElement.style.setProperty('--secondary-color', paletteColors[1]);
            document.documentElement.style.setProperty('--tertiary-color', paletteColors[2]);
            document.documentElement.style.setProperty('--quaternary-color', paletteColors[3]);
            document.documentElement.style.setProperty('--quinary-color', paletteColors[4]);
            // Update body background and text color based on the selected or default palette
            document.documentElement.style.setProperty('--body-bg-color', paletteColors[0]);
            document.documentElement.style.setProperty('--text-color', paletteColors[4]);
            
            // Save the selected or default palette name for persistence
            localStorage.setItem('selectedPalette', paletteName || 'defaultPalette');
        }
    }

    // Attempt to apply a saved theme or the default on page load
    const savedPalette = localStorage.getItem('selectedPalette');
    applyPalette(savedPalette);

    document.querySelectorAll('.palette').forEach(palette => {
        palette.addEventListener('click', function() {
            const paletteName = this.getAttribute('data-palette');
            applyPalette(paletteName);
        });
    });
});
