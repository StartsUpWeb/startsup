async function loadTranslation(lang) {
    try {
        const response = await fetch(`static/js/translations/${lang}.json`);
        const data = await response.json();
        document.getElementById("welcome-text").innerText = data.welcome;
        document.getElementById("tagline").innerText = data.tagline;
        document.getElementById("description").innerText = data.description;
        document.getElementById("notify-text").innerText = data.notify;
        document.getElementById("notify-button").innerText = data.button;

        // Set text for new sections if available
        const featuresTitleEl = document.getElementById("features-title");
        if (featuresTitleEl && data.features_title) featuresTitleEl.innerText = data.features_title;
        const feature1El = document.getElementById("feature1");
        if (feature1El && data.feature1) feature1El.innerText = data.feature1;
        const feature2El = document.getElementById("feature2");
        if (feature2El && data.feature2) feature2El.innerText = data.feature2;
        const feature3El = document.getElementById("feature3");
        if (feature3El && data.feature3) feature3El.innerText = data.feature3;
        const missionTitleEl = document.getElementById("mission-title");
        if (missionTitleEl && data.mission_title) missionTitleEl.innerText = data.mission_title;
        const missionDescEl = document.getElementById("mission-desc");
        if (missionDescEl && data.mission_desc) missionDescEl.innerText = data.mission_desc;

        // Update nav link labels if translation provided
        const termsLinkEl = document.getElementById("terms-link");
        if (termsLinkEl && data.nav_terms) termsLinkEl.innerText = data.nav_terms;
        const privacyLinkEl = document.getElementById("privacy-link");
        if (privacyLinkEl && data.nav_privacy) privacyLinkEl.innerText = data.nav_privacy;

        // Update email placeholder if translation provided
        const emailInput = document.querySelector(".email-input");
        if (emailInput && data.email_placeholder) emailInput.placeholder = data.email_placeholder;
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
    const langSelect = document.getElementById("language-select");
    if (langSelect) langSelect.value = lang;
    loadTranslation(lang);
});
