function toggleTheme() {
    document.body.classList.toggle('dark');
    const button = document.querySelector('.themeButton');
    if (document.body.classList.contains('dark')) {
        button.textContent = 'Light Mode';
    } else {
        button.textContent = 'Dark Mode';
    }
}