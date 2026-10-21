
import { events } from './programme.js';
const container = document.querySelector('#events');
events.forEach((event, index) => {
  const button = document.createElement('button');
  button.className = 'event';
  button.innerHTML = `<span class="event-number">0${index + 1}</span><span class="event-name"><small>${event.format} · Example</small><strong>${event.title}</strong></span><span class="event-summary">${event.summary}</span><span class="event-arrow" aria-hidden="true"><svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></span>`;
  button.addEventListener('click', () => {
    document.querySelector('#dialog-title').textContent = event.title;
    document.querySelector('#dialog-description').textContent = event.description;
    document.querySelector('dialog').showModal();
  });
  container.append(button);
});
const dialog = document.querySelector('dialog');
document.querySelectorAll('.close').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); }});
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); document.querySelector('nav').classList.toggle('open', open); });
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); document.querySelector('nav').classList.remove('open'); }));
document.addEventListener('keydown', event => { if(event.key === 'Escape') { menu.setAttribute('aria-expanded', 'false'); document.querySelector('nav').classList.remove('open'); }});
