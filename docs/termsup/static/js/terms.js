async function loadTerms(lang) {
    try {
        // Percorso corretto relativo al file terms.js
        const response = await fetch(`./static/js/terms_${lang}.json`);
        const data = await response.json();
        document.getElementById("terms-content").innerText = data.terms;
    } catch (error) {
        console.error("Error loading terms:", error);
    }
}

function changeLanguage(lang) {
    localStorage.setItem("preferredLanguage", lang);
    loadTerms(lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const defaultLang = localStorage.getItem("preferredLanguage") || navigator.language.slice(0, 2) || "en";
    document.getElementById("language-select").value = defaultLang;
    loadTerms(defaultLang);
});
