async function loadTerms(lang) {
    try {
        // Carica direttamente il file JSON dalla stessa cartella
        const response = await fetch(`terms_${lang}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById("terms-content").innerText = data.terms;
    } catch (error) {
        console.error("Error loading terms:", error);
        document.getElementById("terms-content").innerText = "Error loading terms.";
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
