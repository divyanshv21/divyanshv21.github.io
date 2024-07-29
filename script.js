const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load the theme preference from local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-theme') {
        themeToggle.classList.add('active');
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggle.classList.toggle('active');

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.removeItem('theme');
    }
});