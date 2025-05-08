
async function loadTranslation(lang) {
    try {
        const response = await fetch(`static/js/translations/${lang}.json`);
        const data = await response.json();
        document.getElementById("welcome-text").innerText = data.welcome;
        document.getElementById("tagline").innerText = data.tagline;
        document.getElementById("description").innerText = data.description;
        document.getElementById("notify-text").innerText = data.notify;
        document.getElementById("notify-button").innerText = data.button;
    } catch (error) {
        console.error("Error loading translation:", error);
    }
}

function changeLanguage(lang) {
    localStorage.setItem("language", lang);
    loadTranslation(lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("language") || "en";
    document.getElementById("language-select").value = lang;
    loadTranslation(lang);
});
