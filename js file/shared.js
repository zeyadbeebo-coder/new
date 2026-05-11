(function () {
  var html = document.documentElement;

  window.applyTheme = function (theme) {
    html.setAttribute("data-theme", theme);
    var lbl = document.getElementById("theme-label");
    var thm = document.getElementById("toggle-thumb");
    if (lbl) lbl.textContent = theme === "dark" ? "Dark" : "Light";
    if (thm) thm.textContent = theme === "dark" ? "🌙" : "☀️";
    localStorage.setItem("NileMarket-theme", theme);
  };

  window.toggleTheme = function () {
    var current = html.getAttribute("data-theme") || "light";
    applyTheme(current === "dark" ? "light" : "dark");
  };

  // Build the toggle element
  var themeToggle = document.createElement("label");
  themeToggle.className = "theme1";
  themeToggle.style.cssText =
    "cursor:pointer; align-self:center; margin-right:12px;";
  themeToggle.onclick = function () {
    toggleTheme();
  };
  themeToggle.title = "Toggle theme";
  themeToggle.innerHTML =
    '<span id="theme-label">Light</span>' +
    '<div class="t"><div class="atheme" id="toggle-thumb">☀️</div></div>';

  function inject() {
    var btn = document.querySelector("header .btn");
    var toppage = document.querySelector(".toppage");
    if (btn) {
      btn.prepend(themeToggle);
    } else if (toppage) {
      toppage.appendChild(themeToggle);
    }
    applyTheme(localStorage.getItem("NileMarket-theme") || "light");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
