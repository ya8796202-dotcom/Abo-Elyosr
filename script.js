// كشف العناصر عند التمرير لزيادة الحيوية
const revealOpts = { threshold: 0.15 };
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, revealOpts);

// عناصر نكشفها
document.querySelectorAll('.card, .feature, .member, .plan, .gallery-grid img, .video-container, .btn')
  .forEach(el => revealObserver.observe(el));

// تحسين زرار الضغط
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('pressed');
    setTimeout(() => btn.classList.remove('pressed'), 220);
  });
});

// استجابة نموذج التواصل (عرض رسالة وهمية)
const form = document.getElementById('contactForm');
const statusEl = document.querySelector('.form-status');
if (form && statusEl) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    statusEl.textContent = 'تم إرسال رسالتك بنجاح. سنعود إليك قريباً.';
    statusEl.style.color = '#1f8f4b';
    form.reset();
  });
}

