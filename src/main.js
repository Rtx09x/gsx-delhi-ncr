import { events, paths } from "./programme.js";
const arrow =
  '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const art = {
  search:
    '<path d="M40 40h120v90H40zM60 65h70M60 80h45M60 95h55"/><circle cx="172" cy="115" r="32"/><path d="m194 138 28 28M160 114h24M172 102v24"/>',
  source:
    '<path d="m90 60-40 40 40 40M170 60l40 40-40 40M145 42l-30 116"/><circle cx="45" cy="100" r="4"/><circle cx="215" cy="100" r="4"/>',
  science:
    '<ellipse cx="130" cy="100" rx="86" ry="32"/><ellipse cx="130" cy="100" rx="86" ry="32" transform="rotate(60 130 100)"/><ellipse cx="130" cy="100" rx="86" ry="32" transform="rotate(120 130 100)"/><circle cx="130" cy="100" r="8"/>',
  community:
    '<circle cx="130" cy="100" r="30"/><circle cx="55" cy="60" r="15"/><circle cx="210" cy="60" r="15"/><circle cx="65" cy="155" r="15"/><circle cx="205" cy="155" r="15"/><path d="m69 67 36 20M156 86l40-20M88 141l24-20M153 120l37 24"/>',
};
const container = document.querySelector("#events");
const dialog = document.querySelector("dialog");
function renderEvents(filter = "All") {
  container.replaceChildren();
  events
    .filter((event) => filter === "All" || event.topic === filter)
    .forEach((event) => {
      const article = document.createElement("article");
      article.className = `programme-card topic-${event.visual}`;
      article.innerHTML = `<div class="programme-art" aria-hidden="true"><span>${event.topic}</span><svg viewBox="0 0 260 200">${art[event.visual]}</svg><span>Proposed / sample</span></div><div class="programme-content"><p class="card-format">${event.format}</p><h3>${event.title}</h3><p>${event.summary}</p><div class="outcome"><small>What you could leave with</small><span>${event.outcome}</span></div><button class="detail-button">Explore sample session ${arrow}</button></div>`;
      article
        .querySelector("button")
        .setAttribute("aria-label", `Explore sample session: ${event.title}`);
      article.querySelector("button").addEventListener("click", () => {
        document.querySelector("#dialog-title").textContent = event.title;
        document.querySelector("#dialog-description").textContent =
          event.description;
        document.querySelector("#dialog-details").innerHTML =
          `<dl><dt>Who it is for</dt><dd>${event.audience}</dd><dt>Before the session</dt><dd>${event.preparation}</dd><dt>Possible outcome</dt><dd>${event.outcome}</dd></dl><h3>A possible session outline</h3><ol>${event.steps.map((step) => `<li>${step}</li>`).join("")}</ol>`;
        dialog.showModal();
      });
      container.append(article);
    });
  document.querySelector("#programme-status").textContent =
    `${container.children.length} sample ${container.children.length === 1 ? "programme" : "programmes"} shown${filter === "All" ? "" : ` for ${filter}`}.`;
}
renderEvents();
document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-filter]")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
    renderEvents(button.dataset.filter);
  }),
);
document
  .querySelectorAll(".close")
  .forEach((button) => button.addEventListener("click", () => dialog.close()));
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top ||
      event.clientY > r.bottom
    )
      dialog.close();
  }
});
const menu = document.querySelector(".menu");
function closeMenu() {
  menu.setAttribute("aria-expanded", "false");
  document.querySelector("nav").classList.remove("open");
}
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  document.querySelector("nav").classList.toggle("open", open);
});
document
  .querySelectorAll("nav a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
const tabs = [...document.querySelectorAll("[data-path]")];
function selectPath(tab) {
  tabs.forEach((item) => {
    item.setAttribute("aria-selected", String(item === tab));
    item.tabIndex = item === tab ? 0 : -1;
  });
  const path = paths[tab.dataset.path];
  const panel = document.querySelector("#path-panel");
  panel.setAttribute("aria-labelledby", tab.id);
  panel.innerHTML = `<h3>${path.title}</h3><p>${path.description}</p><ol>${path.steps.map((step) => `<li>${step}</li>`).join("")}</ol><a class="button" href="${path.target}">${path.action} ${arrow}</a>`;
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectPath(tab));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (["ArrowRight", "ArrowDown"].includes(event.key))
      next = (index + 1) % tabs.length;
    if (["ArrowLeft", "ArrowUp"].includes(event.key))
      next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectPath(tabs[next]);
      tabs[next].focus();
    }
  });
});
selectPath(tabs[0]);
let sample = 1;
let scatter = [];
function makeScatter() {
  scatter = Array.from(
    { length: 28 },
    (_, i) => Math.sin((i + 1) * 12.9898 + sample * 78.233) * 43758.5453,
  ).map((n) => n - Math.floor(n) - 0.5);
}
function drawSignal() {
  const noise = Number(document.querySelector("#noise").value);
  document.querySelector("#noise-value").textContent = `${noise}%`;
  document.querySelector("#sample-label").textContent =
    `Sample ${String(sample).padStart(2, "0")}`;
  document.querySelector("#observations").innerHTML = scatter
    .map((offset, i) => {
      const x = 62 + i * 16.8;
      const y = Math.max(
        35,
        Math.min(285, 260 - ((x - 50) * 200) / 480 + offset * noise * 2.5),
      );
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.5"/>`;
    })
    .join("");
}
makeScatter();
drawSignal();
document.querySelector("#noise").addEventListener("input", drawSignal);
document.querySelector("#resample").addEventListener("click", () => {
  sample++;
  makeScatter();
  drawSignal();
});
// Keep the original branding untouched; arrows are decorative vectors.
document.querySelectorAll('span[aria-hidden="true"]').forEach((span) => {
  if (span.textContent.trim() === "\u2197") span.innerHTML = arrow;
});
