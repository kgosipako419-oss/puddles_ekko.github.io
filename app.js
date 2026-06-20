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
   Inline SVG icons (GitHub Octicons) — no emojis
   ========================================================================= */
const ICONS = {
  star: '<svg class="ic" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/></svg>',
  fork: '<svg class="ic" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/></svg>',
  clock: '<svg class="ic" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z"/></svg>',
  location: '<svg class="ic" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"/></svg>',
  github: '<svg class="ic" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/></svg>',
  code: '<svg class="ic" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"/></svg>',
  external: '<svg class="ic" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"/></svg>',
  sun: '<svg class="ic" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.06-1.06a.75.75 0 0 1 1.06 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8Zm-8 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13Zm-3.536-2.464a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0Zm10.193 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 1.06-1.061l1.061 1.06Z"/></svg>',
  moon: '<svg class="ic" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M9.598 1.591a.749.749 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786Zm1.616 1.945a7 7 0 0 1-7.678 7.678 5.499 5.499 0 1 0 7.678-7.678Z"/></svg>',
};

/* =========================================================================
   DOM helpers
   ========================================================================= */
const $ = (id) => document.getElementById(id);
const statusEl = $("status");
const reposEl = $("repos");

let allRepos = [];
let firstPaint = true;

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
  $("themeToggle").innerHTML = theme === "dark" ? ICONS.sun : ICONS.moon;
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
  if (p.location) bits.push(`<span class="meta-item">${ICONS.location}${escapeHtml(p.location)}</span>`);
  if (p.bio) bits.push(`<span class="meta-item">${escapeHtml(p.bio)}</span>`);
  $("meta").innerHTML = bits.join("");

  $("ghLink").href = p.html_url;
  $("ghLink").innerHTML = `${ICONS.github}GitHub Profile`;
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

  // Only animate cards in on the first paint, not on every search keystroke.
  const animate = firstPaint;
  firstPaint = false;
  reposEl.innerHTML = list.map((r, i) => card(r, animate ? i : -1)).join("");
}

function card(r, idx) {
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
    ? `<span title="Primary language"><span class="lang-dot" style="background:${langColor}"></span>${escapeHtml(r.language)}</span>`
    : "";

  const stars = r.stargazers_count ? `<span title="Stars">${ICONS.star}${r.stargazers_count}</span>` : "";
  const forks = r.forks_count ? `<span title="Forks">${ICONS.fork}${r.forks_count}</span>` : "";
  const updated = `<span title="Last updated">${ICONS.clock}${timeAgo(r.pushed_at)}</span>`;

  const demo = r.homepage
    ? `<a class="btn btn-primary" href="${escapeAttr(r.homepage)}" target="_blank" rel="noopener">${ICONS.external}Live Demo</a>`
    : "";

  const cls = idx >= 0 ? "repo-card reveal" : "repo-card";
  const delay = idx >= 0 ? ` style="animation-delay:${Math.min(idx, 9) * 0.05}s"` : "";

  return `
    <article class="${cls}"${delay}>
      <h3><a href="${r.html_url}" target="_blank" rel="noopener">${escapeHtml(title)}</a></h3>
      ${desc}
      ${topics ? `<div class="topics">${topics}</div>` : ""}
      <div class="repo-meta">${lang}${stars}${forks}${updated}</div>
      <div class="repo-actions">
        <a class="btn btn-ghost" href="${r.html_url}" target="_blank" rel="noopener">${ICONS.code}View Code</a>
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
