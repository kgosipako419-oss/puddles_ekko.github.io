/* =========================================================================
   CONFIG — edit these values to personalise your portfolio
   ========================================================================= */
const CONFIG = {
  username: "kgosipako419-oss",   // your GitHub username
  tagline: "Software & Engineering Projects",
  // Repos you don't want listed (e.g. the portfolio repo itself). Case-insensitive.
  hide: ["puddles_ekko.github.io"],
  hideForks: true,   // hide repositories you forked from others
};

/* =========================================================================
   GitHub language colours (subset — falls back to grey)
   ========================================================================= */
const LANG_COLORS = {
  JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5",
  HTML: "#e34c26", CSS: "#563d7c", Java: "#b07219", C: "#555555",
  "C++": "#f34b7d", "C#": "#178600", Go: "#00ADD8", Rust: "#dea584",
  Ruby: "#701516", PHP: "#4F5D95", Swift: "#F05138", Kotlin: "#A97BFF",
  Dart: "#00B4AB", Shell: "#89e051", Vue: "#41b883", Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B", Arduino: "#00979D", Dockerfile: "#384d54",
};

/* =========================================================================
   DOM helpers
   ========================================================================= */
const $ = (id) => document.getElementById(id);
const statusEl = $("status");
const reposEl = $("repos");

let allRepos = [];

/* =========================================================================
   Boot
   ========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  wireControls();
  loadEverything();
});

/* ---------- Theme ---------- */
function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved || (prefersDark ? "dark" : "light"));
  $("themeToggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  });
}
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  $("themeToggle").textContent = theme === "dark" ? "☀️" : "🌙";
}

/* ---------- Controls ---------- */
function wireControls() {
  $("search").addEventListener("input", render);
  $("sort").addEventListener("change", render);
  $("tagline").textContent = CONFIG.tagline;
}

/* =========================================================================
   Data loading
   ========================================================================= */
async function loadEverything() {
  showSkeletons();
  try {
    const [profile, repos] = await Promise.all([fetchProfile(), fetchRepos()]);
    renderProfile(profile);
    allRepos = repos
      .filter((r) => !CONFIG.hide.some((h) => h.toLowerCase() === r.name.toLowerCase()))
      .filter((r) => !(CONFIG.hideForks && r.fork));
    renderStats(profile, allRepos);
    render();
  } catch (err) {
    statusEl.className = "status error";
    statusEl.textContent = errorMessage(err);
    reposEl.innerHTML = "";
  }
}

async function fetchProfile() {
  const res = await fetch(`https://api.github.com/users/${CONFIG.username}`);
  if (!res.ok) throw res;
  return res.json();
}

async function fetchRepos() {
  // Paginate to support more than 100 repos.
  let page = 1, out = [];
  while (true) {
    const res = await fetch(
      `https://api.github.com/users/${CONFIG.username}/repos?per_page=100&page=${page}&sort=updated`
    );
    if (!res.ok) throw res;
    const batch = await res.json();
    out = out.concat(batch);
    if (batch.length < 100) break;
    page++;
  }
  return out;
}

function errorMessage(err) {
  if (err && err.status === 403) {
    return "GitHub's API rate limit was hit (60 requests/hour for anonymous visitors). Please try again in a little while.";
  }
  if (err && err.status === 404) {
    return `No GitHub account found for "${CONFIG.username}". Check the username in app.js.`;
  }
  return "Couldn't reach GitHub right now. Please refresh and try again.";
}

/* =========================================================================
   Rendering
   ========================================================================= */
function renderProfile(p) {
  $("avatar").src = p.avatar_url;
  $("avatar").alt = `${p.name || p.login} avatar`;
  $("name").textContent = p.name || p.login;
  $("footerName").textContent = `© ${new Date().getFullYear()} ${p.name || p.login}`;
  document.title = `${p.name || p.login} — Project Portfolio`;

  const bits = [];
  if (p.location) bits.push(`📍 ${p.location}`);
  if (p.bio) bits.push(p.bio);
  $("meta").textContent = bits.join("  ·  ");

  $("ghLink").href = p.html_url;
}

function renderStats(p, repos) {
  const stars = repos.reduce((s, r) => s + r.stargazers_count, 0);
  const langs = new Set(repos.map((r) => r.language).filter(Boolean));
  const stats = [
    { num: repos.length, label: "Projects" },
    { num: langs.size, label: "Languages" },
    { num: stars, label: "Stars" },
    { num: p.followers, label: "Followers" },
  ];
  $("stats").innerHTML = stats
    .map((s) => `<div class="stat"><div class="num">${s.num}</div><div class="label">${s.label}</div></div>`)
    .join("");
}

function render() {
  const q = $("search").value.trim().toLowerCase();
  const sort = $("sort").value;

  let list = allRepos.filter((r) => {
    if (!q) return true;
    return (
      r.name.toLowerCase().includes(q) ||
      (r.description || "").toLowerCase().includes(q) ||
      (r.language || "").toLowerCase().includes(q) ||
      (r.topics || []).some((t) => t.includes(q))
    );
  });

  list.sort((a, b) => {
    switch (sort) {
      case "stars": return b.stargazers_count - a.stargazers_count;
      case "name": return a.name.localeCompare(b.name);
      case "created": return new Date(b.created_at) - new Date(a.created_at);
      default: return new Date(b.pushed_at) - new Date(a.pushed_at);
    }
  });

  statusEl.className = "status";
  statusEl.textContent = list.length
    ? `Showing ${list.length} project${list.length === 1 ? "" : "s"}`
    : "No projects match your search.";

  reposEl.innerHTML = list.map(card).join("");
}

function card(r) {
  const title = prettify(r.name);
  const desc = r.description
    ? `<p class="repo-desc">${escapeHtml(r.description)}</p>`
    : `<p class="repo-desc empty">No description added yet.</p>`;

  const topics = (r.topics || [])
    .slice(0, 4)
    .map((t) => `<span class="topic">${escapeHtml(t)}</span>`)
    .join("");

  const langColor = LANG_COLORS[r.language] || "var(--text-muted)";
  const lang = r.language
    ? `<span class="lang"><span class="lang-dot" style="background:${langColor}"></span>${escapeHtml(r.language)}</span>`
    : "";

  const stars = r.stargazers_count ? `<span title="Stars">★ ${r.stargazers_count}</span>` : "";
  const forks = r.forks_count ? `<span title="Forks">⑂ ${r.forks_count}</span>` : "";
  const updated = `<span title="Last updated">↻ ${timeAgo(r.pushed_at)}</span>`;

  const demo = r.homepage
    ? `<a class="btn btn-primary" href="${escapeAttr(r.homepage)}" target="_blank" rel="noopener">Live Demo</a>`
    : "";

  return `
    <article class="repo-card">
      <h3><a href="${r.html_url}" target="_blank" rel="noopener">${escapeHtml(title)}</a></h3>
      ${desc}
      ${topics ? `<div class="topics">${topics}</div>` : ""}
      <div class="repo-meta">${lang}${stars}${forks}${updated}</div>
      <div class="repo-actions">
        <a class="btn btn-ghost" href="${r.html_url}" target="_blank" rel="noopener">View Code</a>
        ${demo}
      </div>
    </article>`;
}

/* =========================================================================
   Utilities
   ========================================================================= */
function showSkeletons() {
  statusEl.textContent = "Loading projects from GitHub…";
  reposEl.innerHTML = Array.from({ length: 6 }, () => `<div class="skeleton"></div>`).join("");
}

function prettify(name) {
  // Turn "INDUSTRIAL-MACHINE-HEALTH" into "Industrial Machine Health"
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}
function escapeAttr(s) { return escapeHtml(s); }
