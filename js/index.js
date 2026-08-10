// ─── SKILLS GRID ─────────────────────────────────────────────────────────────

const skills = [
  {name:"Python",     url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
  {name:"JavaScript", url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
  {name:"TypeScript", url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
  {name:"Java",       url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
  {name:"C#",         url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"},
  {name:"PostgreSQL", url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
  {name:"React",      url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
  {name:"Git",        url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
];

const grid = document.getElementById('skills-grid');
if (grid) {
  grid.innerHTML = skills.map(s => `
    <div class="skill-item">
      <img src="${s.url}" alt="${s.name}" loading="lazy">
      <span>${s.name}</span>
    </div>`).join('');
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