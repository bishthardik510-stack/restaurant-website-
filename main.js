// ── Smooth scroll for nav links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── Add to cart button feedback ──
document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const original = this.textContent;
    this.textContent = '✓ Added';
    this.style.background = '#7A3B1E';
    this.style.color = '#fff';
    setTimeout(() => {
      this.textContent = original;
      this.style.background = 'none';
      this.style.color = '#7A3B1E';
    }, 1500);
  });
});

// ── Reservation form validation ──
const reserveBtn = document.querySelector('.reserve-form button');
if (reserveBtn) {
  reserveBtn.addEventListener('click', function () {
    const inputs = document.querySelectorAll('.reserve-form input');
    let allFilled = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        allFilled = false;
        input.style.borderColor = 'rgba(255,100,100,0.6)';
        setTimeout(() => {
          input.style.borderColor = 'rgba(255,255,255,0.2)';
        }, 2000);
      }
    });

    if (allFilled) {
      reserveBtn.textContent = '✓ Table Reserved!';
      reserveBtn.style.background = '#4CAF50';
      setTimeout(() => {
        reserveBtn.textContent = 'Reserve now';
        reserveBtn.style.background = '#F5C47A';
        inputs.forEach(input => input.value = '');
      }, 2500);
    }
  });
}

// ── Scroll reveal animation ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-card, .review-card, .about-feature').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
