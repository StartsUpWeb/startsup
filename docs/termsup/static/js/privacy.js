function loadPrivacy(lang) {
    fetch('static/js/privacy_' + lang + '.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('privacy-content').innerText = data.privacy;
        })
        .catch(error => console.error('Error loading privacy:', error));
}

function changeLanguage() {
    const selectedLang = document.getElementById('language-select').value;
    localStorage.setItem('selected-language', selectedLang);
    loadPrivacy(selectedLang);
}

document.addEventListener('DOMContentLoaded', () => {
    const selectedLang = localStorage.getItem('selected-language') || 'en';
    document.getElementById('language-select').value = selectedLang;
    loadPrivacy(selectedLang);
});
