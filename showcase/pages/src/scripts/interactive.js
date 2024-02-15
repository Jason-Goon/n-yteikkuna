document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.circle').forEach(circle => {
        circle.addEventListener('click', function() {
            this.classList.toggle('grow');
            let text = this.getAttribute('data-text');
            this.textContent = this.classList.contains('grow') ? text : '';
        });
    });
});
