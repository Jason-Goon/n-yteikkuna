document.addEventListener('DOMContentLoaded', () => {
    function applyPalette(paletteName) {
        const paletteColors = {
            // Define your palettes here
            palette1: ['#186F65', '#B5CB99', '#FCE09B', '#3D0C11', '#3B2533E'],
            palette2: ['#1D2B53', '#7E2553', '#FF004D', '#F6D776', '#FAEF5D'],
            palette3: ['#FF8080', '#FFCF96', '#F6FDC3', '#CDFADB', '#0D9276'],
            // Default palette
            defaultPalette:  ['#1D2B53', '#7E2553', '#FF004D', '#F6D776', '#FAEF5D']
        }[paletteName || 'defaultPalette']; // Use 'defaultPalette' if no paletteName is provided

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
