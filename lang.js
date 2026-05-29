function setLang(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        el.style.display = (el.dataset.lang === lang) ? "block" : "none";
    });
    localStorage.setItem("lang", lang);
}

window.onload = () => {
    const saved = localStorage.getItem("lang") || "fr";
    setLang(saved);
};
