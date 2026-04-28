(() => {
  const STORAGE_KEY = "jad-theme";
  const LIGHT = "light";
  const DARK = "dark";

  const applyTheme = (theme) => {
    const isLight = theme === LIGHT;
    document.body.classList.toggle("light-mode", isLight);
    const toggleBtn = document.querySelector(".theme-toggle-btn");
    if (toggleBtn) {
      toggleBtn.textContent = isLight ? "🌙" : "☀";
      toggleBtn.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
      toggleBtn.setAttribute("title", isLight ? "Switch to dark mode" : "Switch to light mode");
    }
  };

  const savedTheme = localStorage.getItem(STORAGE_KEY);
  applyTheme(savedTheme === LIGHT ? LIGHT : DARK);

  const toggleBtn = document.querySelector(".theme-toggle-btn");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-mode") ? DARK : LIGHT;
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  });
})();
