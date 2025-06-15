/* --------- DOM ELEMENTS --------- */
const html = document.getElementById("html");
const css  = document.getElementById("css");
const js   = document.getElementById("js");
const preview     = document.getElementById("preview");
const themeToggle = document.getElementById("theme-toggle");

/* --------- LIVE PREVIEW --------- */
let timeout;
function updatePreview() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    preview.srcdoc = `
      <html>
        <head><style>${css.value}</style></head>
        <body>
          ${html.value}
          <script>${js.value}<\/script>
        </body>
      </html>
    `;
  }, 300);           // debounce for smoother typing
}

[html, css, js].forEach(el => el.addEventListener("input", updatePreview));

/* starter demo */
html.value = "<h1>Hello, dude!</h1>";
css.value  = `
  body {
    background-color: #121212;
    color: #00f7ff;
    text-align: center;
    font-size: 2.5rem;
    font-family: 'Segoe UI', sans-serif;
    margin-top: 10vh;
  }
`;
js.value   = "console.log('Hello from your custom code editor!');";
updatePreview();

/* --------- THEME TOGGLE --------- */
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
