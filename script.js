// ─── PROJECT DATA ────────────────────────────────────────────────────────────
// Edit the `details` and `image` fields for each project here.
// Set image to a path like "Content/xr-lacrosse.jpg" once you have photos.

const PROJECTS = [
  {
    num: "001",
    title: "XR Lacrosse Goalie Training",
    image: "Content/Lacrosse.png",
    tags: ["Python", "C#", "Unity", "MagicLeap", "VIVE Trackers"],
    shortDesc: "Extended-reality training system for lacrosse goalies.",
    details: `An extended-reality training system for lacrosse goalies built with Unity, MagicLeap, and VIVE Trackers. The system provides real-time spatial feedback during drills, overlaying virtual shot trajectories and scoring zones onto the physical crease.

The data pipeline (Python) streams tracker positions into the Unity scene at low latency, while C# scripts handle game-logic, scoring, and session recording. Built as a senior design project at Villanova.`,
    github: "https://github.com/xrlacrosse-nova/NovaXRLacrosse",
    netlify: null,
    live: null,
  },
  {
    num: "002",
    title: "HOA Macros",
    image: "Content/HOA.png",
    tags: ["Python", "HTML", "TypeScript"],
    shortDesc: "Automation tooling for HOA document processing.",
    details: `Automation tooling that drastically reduced the manual overhead of HOA document processing. Python scripts parse and extract structured data from PDFs and Word documents, feeding a lightweight TypeScript/HTML dashboard for review and export.

The workflow handles violation letters, dues statements, and meeting minutes — cutting processing time from hours to minutes per batch.`,
    github: "https://github.com/nguillet23/HOA",
    netlify: null,
    live: null,
  },
  {
    num: "003",
    title: "Frisbee Valuation",
    image: "Content/Frisbee.png",
    tags: ["Python", "Pandas", "Statistics"],
    shortDesc: "Statistical model for evaluating ultimate frisbee players.",
    details: `A statistical model for evaluating player and team performance in ultimate frisbee using play-by-play data. Inspired by WAR and other advanced sports metrics, the model assigns value to individual actions (completions, turnovers, goals, assists) weighted by field position and game context.

Built entirely in Python with Pandas and NumPy, with visualisation outputs for player comparison and season-over-season trend analysis.`,
    github: "https://github.com/nguillet23/Frisbee-Valuation",
    netlify: "http://frisbeeanalysis.netlify.app/",
    live: null,
  },
  {
    num: "004",
    title: "Baseball Analysis",
    image: "Content/Baseball.png",
    tags: ["Python", "HTML", "Statcast", "Data Viz"],
    shortDesc: "Data pipeline and visualisation toolkit for MLB Statcast data.",
    details: `A data pipeline and visualisation toolkit for aggregating and exploring MLB Statcast data. Pulls from the Baseball Savant API, normalises multi-season datasets, and surfaces trends — pitch mix evolution, exit velocity distributions, spray charts — through an HTML report layer.

The pipeline is modular by design, making it easy to swap in new seasons or focus on specific teams and players.`,
    github: "https://github.com/nguillet23/Guillet-Baseball-Analysis",
    netlify: "http://guilletbaseball.netlify.app/",
    live: null,
  },
];

// ─── PROJECT MODAL ────────────────────────────────────────────────────────────

const overlay   = document.getElementById('projectModal');
const modalBox  = document.getElementById('modalContent');
const closeBtn  = document.getElementById('modalClose');

function openModal(idx) {
  const p = PROJECTS[idx];

  // Build image element
  const imgHTML = p.image
    ? `<img src="${p.image}" alt="${p.title}" class="modal-img" />`
    : `<div class="modal-img-placeholder">No image yet</div>`;

  // Build tag pills
  const tagsHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');

  // Build link buttons
  let linksHTML = '';
  if (p.github) {
    linksHTML += `<a href="${p.github}" target="_blank" class="btn btn-primary" style="font-size:0.75rem;padding:0.6rem 1.25rem;border-radius:4px;">GitHub ↗</a>`;
  }
  if (p.netlify) {
    linksHTML += `<a href="${p.netlify}" target="_blank" class="btn btn-ghost" style="font-size:0.75rem;padding:0.6rem 1.25rem;border-radius:4px;">Netlify ↗</a>`;
  }
  if (p.live) {
    linksHTML += `<a href="${p.live}" target="_blank" class="btn btn-ghost" style="font-size:0.75rem;padding:0.6rem 1.25rem;border-radius:4px;">Live Demo ↗</a>`;
  }

  // Format details paragraphs
  const paragraphs = p.details
    .split('\n\n')
    .map(para => `<p class="modal-desc">${para.trim()}</p>`)
    .join('');

  modalBox.innerHTML = `
    <button class="modal-close" id="modalClose" aria-label="Close">✕</button>
    ${imgHTML}
    <div class="modal-body">
      <div class="modal-num">${p.num}</div>
      <div class="modal-title">${p.title}</div>
      <div class="modal-tags">${tagsHTML}</div>
      ${paragraphs}
      <div class="modal-links">${linksHTML}</div>
    </div>
  `;

  // Re-bind close button (since we replaced innerHTML)
  modalBox.querySelector('#modalClose').addEventListener('click', closeModal);

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Open via card click or "View Details" button
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', (e) => {
    // Don't open modal when clicking GitHub link
    if (e.target.closest('.project-link-gh')) return;
    const idx = parseInt(card.dataset.project);
    openModal(idx);
  });
});

// Close on overlay background click
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ─── CONTACT FORM ────────────────────────────────────────────────────────────

document.querySelector('.form-submit').addEventListener('click', function () {
  const name    = document.querySelector('input[type="text"]').value.trim();
  const email   = document.querySelector('input[type="email"]').value.trim();
  const message = document.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    showToast('Please fill out all fields.', true);
    return;
  }

  // Replace with Formspree / EmailJS when ready
  console.log('Form submitted:', { name, email, message });
  showToast("Message sent! I'll be in touch soon.");

  document.querySelector('input[type="text"]').value  = '';
  document.querySelector('input[type="email"]').value = '';
  document.querySelector('textarea').value            = '';
});

// ─── TOAST HELPER ────────────────────────────────────────────────────────────

function showToast(msg, isError = false) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.borderColor = isError ? '#ff6b6b' : 'var(--accent)';
  toast.style.color        = isError ? '#ff6b6b' : 'var(--accent)';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ─── ACTIVE NAV LINK ON SCROLL ───────────────────────────────────────────────

const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute('href') === '#' + entry.target.id
            ? 'var(--accent)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => observer.observe(s));

// ─── SCROLL-IN ANIMATIONS ────────────────────────────────────────────────────

const fadeEls = document.querySelectorAll(
  '.timeline-item, .project-card, .about-grid, .contact-wrap'
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeEls.forEach((el) => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});