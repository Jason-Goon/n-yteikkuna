document.addEventListener('DOMContentLoaded', () => {
    function applyPalette(paletteName) {
        const paletteColors = {
            palette1: ['#186F65', '#B5CB99', '#FCE09B', '#3D0C11', '#3B2533E'],
            palette2: ['#1D2B53', '#7E2553', '#FF004D', '#F6D776', '#FAEF5D'],
            palette3: ['#FF8080', '#FFCF96', '#F6FDC3', '#CDFADB', '#0D9276'],
            // Default palette
            defaultPalette:  ['#186F65', '#B5CB99', '#FCE09B', '#B2533E', '#3D0C11']
        }[paletteName || 'defaultPalette']; 

        if (paletteColors) {
            document.documentElement.style.setProperty('--primary-color', paletteColors[0]);
            document.documentElement.style.setProperty('--secondary-color', paletteColors[1]);
            document.documentElement.style.setProperty('--tertiary-color', paletteColors[2]);
            document.documentElement.style.setProperty('--quaternary-color', paletteColors[3]);
            document.documentElement.style.setProperty('--quinary-color', paletteColors[4]);
            document.documentElement.style.setProperty('--body-bg-color', paletteColors[0]);
            document.documentElement.style.setProperty('--text-color', paletteColors[4]);
            localStorage.setItem('selectedPalette', paletteName || 'defaultPalette');
        }
    }

    const savedPalette = localStorage.getItem('selectedPalette');
    applyPalette(savedPalette);

    document.querySelectorAll('.palette').forEach(palette => {
        palette.addEventListener('click', function() {
            const paletteName = this.getAttribute('data-palette');
            applyPalette(paletteName);
        });
    });
});
