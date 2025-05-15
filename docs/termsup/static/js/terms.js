async function loadTerms(lang) {
    try {
        const response = await fetch(`./static/js/terms_${lang}.json`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        document.getElementById("terms-content").innerText = data.terms;
    } catch (error) {
        document.getElementById("terms-content").innerText = "Error loading terms.";
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
