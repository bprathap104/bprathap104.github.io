document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');
    const toggleButton = document.getElementById('dark-mode-toggle');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        console.log('Dark mode toggled');
    });
});
