<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>Yasser AIRobotics — موقع تجريبي مدمج</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    :root{
      --brand-red:#d40000;
      --brand-orange:#ff6600;
      --bg:#f9f9f9;
      --text:#333;
      --card:#fff;
      --muted:#666;
    }
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:var(--bg);color:var(--text);font-family: Arial, "Cairo", sans-serif;line-height:1.8;scroll-behavior:smooth}

    /* Header & Nav */
    header{
      background: linear-gradient(90deg, var(--brand-red), var(--brand-orange));
      color:#fff;padding:20px 16px;text-align:center;position:sticky;top:0;z-index:999;
      box-shadow:0 8px 20px rgba(0,0,0,0.15)
    }
    header h1{margin:0;font-size:28px}
    nav{margin-top:10px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
    nav a{
      color:#fff;text-decoration:none;font-weight:bold;padding:8px 12px;border-radius:999px;
      transition:transform .2s, background .2s
    }
    nav a:hover{transform:translateY(-2px);background:rgba(255,255,255,0.18)}

    /* Sections */
    section{
      width:min(1000px, 90%);margin:22px auto;background:var(--card);border-radius:16px;
      box-shadow:0 8px 24px rgba(0,0,0,0.08);padding:28px;text-align:center;position:relative;overflow:hidden
    }
    section h2{color:var(--brand-red);margin:0 0 12px;font-size:24px}
    p.lead{color:var(--muted);margin:6px 0 18px}

    /* Gallery */
    .gallery{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
    .gallery img{
      width:220px;height:140px;object-fit:cover;border-radius:12px;
      box-shadow:0 6px 14px rgba(0,0,0,0.18);transition:transform .25s, box-shadow .25s
    }
    .gallery img:hover{transform:scale(1.05);box-shadow:0 10px 22px rgba(0,0,0,0.25)}

    /* Cards list */
    .list{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;text-align:start}
    .card{
      background:#fff;border:1px solid #eee;border-radius:12px;padding:16px;
      transition:transform .2s, box-shadow .2s
    }
    .card:hover{transform:translateY(-3px);box-shadow:0 10px 24px rgba(0,0,0,0.12)}
    .card h3{margin:0 0 8px;color:#222;font-size:18px}
    .meta{color:#888;font-size:13px}

    /* CTA buttons */
    .btn{
      display:inline-flex;align-items:center;gap:8px;padding:12px 18px;border-radius:999px;border:none;
      cursor:pointer;font-weight:bold;color:#fff;background:var(--brand-orange);
      box-shadow:0 8px 18px rgba(255,102,0,0.35);transition:transform .15s, box-shadow .15s
    }
    .btn:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(255,102,0,0.45)}
    .btn.secondary{background:#222;box-shadow:0 8px 18px rgba(0,0,0,0.25)}

    /* WhatsApp pulse */
    .pulse{animation:pulse 2s infinite}
    @keyframes pulse{
      0%{transform:scale(1)}
      50%{transform:scale(1.06)}
      100%{transform:scale(1)}
    }

    /* Subscribe button fancy effects */
    .btn.subscribe{position:relative;overflow:hidden}
    .btn.subscribe::after{
      content:"";position:absolute;inset:auto -40% auto -40%;width:80%;height:80%;
      transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle, rgba(255,255,255,0.6), transparent 60%);
      opacity:0;animation:none;pointer-events:none
    }
    .btn.subscribe.flash{animation:flash .6s}
    @keyframes flash{
      0%{filter:brightness(1)}
      20%{filter:brightness(1.25)}
      100%{filter:brightness(1)}
    }

    /* Confetti stars */
    .star{position:absolute;width:10px;height:10px;background:gold;clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);opacity:0;pointer-events:none}

    /* Reveal on scroll */
    .reveal{opacity:0;transform:translateY(24px);transition:opacity .7s ease, transform .7s ease}
    .reveal.show{opacity:1;transform:translateY(0)}

    /* Progress bar */
    .progress-wrap{width:100%;background:#eee;border-radius:999px;overflow:hidden;height:12px;margin:10px 0}
    .progress{height:100%;background:linear-gradient(90deg, var(--brand-red), var(--brand-orange));width:0%;transition:width 1s ease}

    /* Footer */
    footer{background:#222;color:#fff;text-align:center;padding:14px;margin-top:26px}

    /* Small tip badge */
    .tip{position:absolute;top:10px;left:12px;background:#fff;border:1px dashed #ffc089;color:#a85f00;padding:6px 10px;border-radius:999px;font-size:12px}
  </style>
</head>
<body>

  <header>
    <h1>Yasser AIRobotics — مشاريع، باور سبلايز، وروبوتات ذكية 🚀</h1>
    <nav>
      <a href="#about">من نحن</a>
      <a href="#services">الخدمات</a>
      <a href="#projects">المشاريع</a>
      <a href="#gallery">المعرض</a>
      <a href="#stats">الإنجازات</a>
      <a href="#faq">الأسئلة</a>
      <a href="#contact">تواصل</a>
    </nav>
  </header>

  <section id="about" class="reveal">
    <div class="tip">نصيحة: امشي بالمحتوى خطوة خطوة</div>
    <h2>من نحن 🤝</h2>
    <p class="lead">علامة تقنية من إسكندرية — نصمم ونبيع حلول إلكترونية ذكية، روبوتات تفاعلية، وباور سبلايز مخصصة.</p>
    <div class="list">
      <div class="card">
        <h3>قصة البداية</h3>
        <p>بدأنا من ورشة صغيرة، وخلّينا كل مشروع حكاية مصورة؛ من اللحام للتجربة للعرض النهائي.</p>
        <div class="meta">براندينج وتصوير — Made in Alexandria</div>
      </div>
      <div class="card">
        <h3>قيمنا</h3>
        <p>الاعتمادية، البساطة، والقيمة المضافة. كل جهاز بيخرج متقدّم ومختبر كويس.</p>
        <div class="meta">ضمان اختبارات وتحمل</div>
      </div>
      <div class="card">
        <h3>رؤيتنا</h3>
        <p>نخلي الإلكترونيات مفهومة ومبهرة. العميل يشوف الشغل جمال ووظيفة في نفس الوقت.</p>
        <div class="meta">Hardware + Story</div>
      </div>
    </div>
  </section>

  <section id="services" class="reveal">
    <h2>الخدمات ⚙️</h2>
    <div class="list">
      <div class="card">
        <h3>تصميم دوائر إلكترونية 🔌</h3>
        <p>باور سبلايز، منظمات جهد، وحدات حماية، وPCBs مخصصة حسب الطلب.</p>
        <div class="progress-wrap"><div class="progress" data-target="85"></div></div>
        <div class="meta">جاهزية القوالب: 85%</div>
      </div>
      <div class="card">
        <h3>روبوتات ذكية 🤖</h3>
        <p>عربات حساسات، تتبع خط، عرض معلومات على شاشات OLED/TFT، وتفاعل صوتي.</p>
        <div class="progress-wrap"><div class="progress" data-target="70"></div></div>
        <div class="meta">نموذج العرض: 70%</div>
      </div>
      <div class="card">
        <h3>تطوير مواقع 🌐</h3>
        <p>مواقع عربية نظيفة، أسرع ومهيّأة للعرض، مع براندينج وقصص المشاريع.</p>
        <div class="progress-wrap"><div class="progress" data-target="90"></div></div>
        <div class="meta">إتمام الحزمة: 90%</div>
      </div>
    </div>
  </section>

  <section id="projects" class="reveal">
    <h2>نماذج مشاريع 🔬</h2>
    <div class="list">
      <div class="card">
        <h3>مزود طاقة 0–30V</h3>
        <p>ضبط دقيق، حماية ضد القصر، شاشة تعرض الجهد والتيار لحظيًا.</p>
      </div>
      <div class="card">
        <h3>عربة تتبع خط</h3>
        <p>مستشعرات IR، تحسينات على PID، عرض مباشر للمسار على شاشة صغيرة.</p>
      </div>
      <div class="card">
        <h3>لوحة تحكم ذكية</h3>
        <p>أزرار مخصصة، مؤشرات LED، وإدارة للطاقة بكفاءة عالية.</p>
      </div>
    </div>
  </section>

  <section id="gallery" class="reveal">
    <h2>المعرض 📸</h2>
    <p class="lead">عينات صور تجريبية — بدّلها بصورك لاحقًا.</p>
    <div class="gallery">
      <img src="https://via.placeholder.com/400x240?text=Power+Supply" alt="باور سبلاي">
      <img src="https://via.placeholder.com/400x240?text=Robot+Car" alt="عربة روبوت">
      <img src="https://via.placeholder.com/400x240?text=Control+Panel" alt="لوحة تحكم">
    </div>
  </section>

  <section id="stats" class="reveal">
    <h2>أرقام سريعة 📈</h2>
    <p class="lead">إنجازات بتكبر كل يوم.</p>
    <div class="list">
      <div class="card">
        <h3>مشاريع مكتملة</h3>
        <p><span id="count-projects">0</span> مشروع</p>
      </div>
      <div class="card">
        <h3>عملاء سعداء</h3>
        <p><span id="count-happy">0</span> عميل</p>
      </div>
      <div class="card">
        <h3>قطع مُجرّبة</h3>
        <p><span id="count-tested">0</span> قطعة</p>
      </div>
    </div>
  </section>

  <section id="faq" class="reveal">
    <h2>الأسئلة الشائعة ❓</h2>
    <details><summary>هل يمكن شراء المنتجات أونلاين؟ 🛒</summary><p>حاليًا الطلبات مباشرة، والمتجر الإلكتروني قريبًا.</p></details>
    <details><summary>هل يوجد شحن داخل مصر؟ 🚚</summary><p>نعم، مع تغطية موسّعة لإسكندرية والقاهرة والدلتا.</p></details>
    <details><summary>هل فيه تجارب قبل الشراء؟ 🤖</summary><p>عروض تجريبية في المعارض المحلية أو فيديوهات توضيحية.</p></details>
  </section>

  <section id="contact" class="reveal">
    <h2>تواصل معنا 📞</h2>
    <p>راسلنا على البريد: <a href="mailto:info@yasserairobotics.com">info@yasserairobotics.com</a></p>
    <p>واتساب سريع: <a class="btn pulse" href="https://wa.me/201040363927">📱 تواصل الآن</a></p>

    <h3 style="margin-top:18px">اشترك في النشرة 📧</h3>
    <form id="newsletter-form" style="margin-top:10px">
      <input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" required
             style="padding:12px;border-radius:8px;border:1px solid #ccc;width:min(380px,90%)">
      <button type="submit" class="btn subscribe" id="subscribe-btn">اشترك الآن 🚀</button>
      <div id="subscribe-msg" style="margin-top:10px;color:green;display:none">تم الاشتراك بنجاح ✅</div>
    </form>
  </section>

  <footer>
    <p>© 2025 Yasser AIRobotics — كل الحقوق محفوظة ⚡</p>
  </footer>

  <script>
    // Reveal on scroll
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('show'); }
      });
    },{threshold:0.15});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

    // Animate progress bars when their section appears
    const progresses = document.querySelectorAll('.progress');
    const progObserver = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          const el = e.target;
          const target = parseInt(el.dataset.target || "60", 10);
          el.style.width = target + "%";
          progObserver.unobserve(el);
        }
      });
    },{threshold:0.3});
    progresses.forEach(p=>progObserver.observe(p));

    // Counters animation
    function animateCount(id, to, duration=1200){
      const el = document.getElementById(id);
      let start = 0; const step = Math.max(1, Math.round(to / (duration/30)));
      const timer = setInterval(()=>{
        start += step; if(start >= to){ start = to; clearInterval(timer); }
        el.textContent = start;
      }, 30);
    }
    const statsObserver = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          animateCount('count-projects', 27);
          animateCount('count-happy', 142);
          animateCount('count-tested', 580);
          statsObserver.unobserve(e.target);
        }
      });
    });
    statsObserver.observe(document.getElementById('stats'));

    // Subscribe button fancy effects
    const form = document.getElementById('newsletter-form');
    const btn = document.getElementById('subscribe-btn');
    const msg = document.getElementById('subscribe-msg');

    // Create small confetti stars around the button
    function spawnStars(x, y, count=12){
      for(let i=0;i<count;i++){
        const s = document.createElement('div');
        s.className = 'star';
        const angle = Math.random() * Math.PI * 2;
        const dist = 40 + Math.random()*60;
        const dx = Math.cos(angle)*dist;
        const dy = Math.sin(angle)*dist;
        s.style.left = (x + dx) + 'px';
        s.style.top  = (y + dy) + 'px';
        s.style.opacity = 0;
        document.body.appendChild(s);
        // animate fade/float
        s.animate([
          {transform:'translate(0,0) scale(1)', opacity:0},
          {transform:'translate('+(-dx*0.2)+'px,'+(-dy*0.2)+'px) scale(1.2)', opacity:1},
          {transform:'translate('+(-dx*0.6)+'px,'+(-dy*0.6)+'px) scale(0.9)', opacity:0}
        ],{duration:900, easing:'ease-out'});
        setTimeout(()=>s.remove(), 920);
      }
    }

    btn.addEventListener('mouseenter', ()=>{
      btn.classList.add('flash');
      setTimeout(()=>btn.classList.remove('flash'), 600);
    });

    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      // simple email check
      const email = document.getElementById('email').value.trim();
      if(!email){
        msg.style.display = 'block';
        msg.style.color = 'crimson';
        msg.textContent = 'من فضلك أدخل بريدًا صالحًا ✍️';
        return;
      }
      // visual effects
      btn.classList.add('flash');
      const rect = btn.getBoundingClientRect();
      spawnStars(rect.left + rect.width/2, rect.top + window.scrollY + rect.height/2, 16);
      setTimeout(()=>btn.classList.remove('flash'), 600);

      // success message
      msg.style.display = 'block';
      msg.style.color = 'green';
      msg.textContent = 'تم الاشتراك بنجاح ✅';

      // reset form after a moment
      setTimeout(()=>{ form.reset(); }, 800);
    });

    // Header title click: greet
    document.querySelector('header h1').onclick = ()=>{
      alert('أهلاً بيك يا ياسر 👑🔥 — خلّينا نولّع الإبداع!');
    };
  </script>
</body>
</html>






