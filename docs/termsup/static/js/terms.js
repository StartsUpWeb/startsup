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
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    const savedLang = localStorage.getItem("preferredLanguage") || browserLang || "en";
    document.getElementById("language-select").value = savedLang;
    loadTerms(savedLang);
});
