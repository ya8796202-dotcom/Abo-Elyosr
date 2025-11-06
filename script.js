// دعم بسيط للـ IntersectionObserver
const supportsIO = 'IntersectionObserver' in window;

// إظهار الأقسام عند التمرير
(function setupReveal(){
  const els = document.querySelectorAll('.reveal');
  if(!supportsIO){ els.forEach(el=>el.classList.add('show')); return; }
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); } });
  },{threshold:0.15});
  els.forEach(el=>observer.observe(el));
})();

// تحريك عرض الـ progress عند ظهورها
(function setupProgress(){
  const bars = document.querySelectorAll('.progress');
  if(!supportsIO){ bars.forEach(b=>b.style.width = (b.dataset.target || 60) + '%'); return; }
  const o = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el = e.target;
        el.style.width = (el.dataset.target || 60) + '%';
        o.unobserve(el);
      }
    });
  },{threshold:0.3});
  bars.forEach(b=>o.observe(b));
})();

// مؤثر زر الاشتراك + رسالة
const form = document.getElementById('newsletter-form');
const btn = document.getElementById('subscribe-btn');
const msg = document.getElementById('subscribe-msg');

btn.addEventListener('mouseenter', ()=>{
  btn.classList.add('flash');
  setTimeout(()=>btn.classList.remove('flash'), 600);
});

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if(!email || !email.includes('@')){
    msg.style.display = 'block';
    msg.style.color = 'crimson';
    msg.textContent = 'من فضلك أدخل بريدًا صالحًا ✍️';
    return;
  }
  btn.classList.add('flash');
  setTimeout(()=>btn.classList.remove('flash'), 600);

  msg.style.display = 'block';
  msg.style.color = 'green';
  msg.textContent = 'تم الاشتراك بنجاح ✅';
  setTimeout(()=>form.reset(), 800);
});


