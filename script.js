// ─── CONTACT FORM ───────────────────────────────────────────────────────────

document.querySelector('.form-submit').addEventListener('click', function () {
  const name    = document.querySelector('input[type="text"]').value.trim();
  const email   = document.querySelector('input[type="email"]').value.trim();
  const message = document.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    showToast('Please fill out all fields.', true);
    return;
  }

  // Replace this block with a real form service (e.g. Formspree, EmailJS)
  // when you're ready to receive real messages.
  console.log('Form submitted:', { name, email, message });
  showToast('Message sent! I\'ll be in touch soon.');

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