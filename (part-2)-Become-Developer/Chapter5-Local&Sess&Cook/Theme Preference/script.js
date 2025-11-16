// Safe localStorage wrapper (works even if Brave blocks or in private mode)
const safeStore = {
    get(key) {
      try { return localStorage.getItem(key); }
      catch { return null; }
    },
    set(key, value) {
      try { localStorage.setItem(key, value); }
      catch { /* ignore if blocked */ }
    }
  };
  
  // Apply theme to body
  function applyTheme(theme) {
      document.body.classList.remove("light", "dark");
      document.body.classList.add(theme);
  }
  
  // Detect system theme
  function detectSystemTheme() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
  }
  
  // Apply theme on load
  (function initTheme() {
      const saved = safeStore.get("theme");
      applyTheme(saved || detectSystemTheme());
  })();
  
  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      const saved = safeStore.get("theme");
      if (!saved) { 
          // only auto apply if user didn't choose manually
          applyTheme(detectSystemTheme());
      }
  });
  
  // Toggle button
  document.querySelector(".button").addEventListener("click", () => {
      const current = document.body.classList.contains("dark") ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
  
      applyTheme(next);
      safeStore.set("theme", next); // safe for Brave
  });