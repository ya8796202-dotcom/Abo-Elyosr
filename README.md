<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>موقعي الجديد</title>
  <style>
    body {
      font-family: 'Cairo', sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      color: #333;
    }
    header {
      background: linear-gradient(90deg, #d40000, #ff6600);
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    section {
      padding: 40px;
      margin: 20px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <header>
    <h1>أهلاً بيك في موقعي الجديد 🚀</h1>
  </header>

  <section id="about">
    <h2>من نحن 🤝</h2>
    <p>هذا الموقع مخصص لعرض أعمالي ومشاريعي في الإلكترونيات والروبوتات ✨.</p>
  </section>

  <section id="contact">
    <h2>تواصل معنا 📞</h2>
    <p>راسلني على البريد: <a href="mailto:info@yasserairobotics.com">info@yasserairobotics.com</a></p>
    <p>أو عبر واتساب: <a href="https://wa.me/201040363927">📱 اضغط هنا</a></p>
  </section>

  <script>
    // مثال بسيط للجافاسكريبت
    document.querySelector("header h1").style.cursor = "pointer";
    document.querySelector("header h1").onclick = () => alert("مرحبا بيك يا ياسر 👑🔥");
  </script>
</body>
</html>
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>موقعي الجديد</title>
  <style>
    body {
      font-family: 'Cairo', sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      color: #333;
      line-height: 1.8;
    }

    /* الهيدر */
    header {
      background: linear-gradient(90deg, #d40000, #ff6600);
      color: #fff;
      padding: 20px;
      text-align: center;
    }

    header h1 {
      margin: 0;
      font-size: 28px;
    }

    nav a {
      color: #fff;
      margin: 0 10px;
      text-decoration: none;
      font-weight: bold;
    }

    nav a:hover {
      text-decoration: underline;
    }

    /* الأقسام */
    section {
      padding: 40px;
      text-align: center;
      background: #fff;
      margin: 20px auto;
      width: 80%;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    section h2 {
      color: #d40000;
      margin-bottom: 20px;
    }

    /* معرض الصور */
    .gallery {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }

    .gallery img {
      width: 200px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      transition: transform 0.3s;
    }

    .gallery img:hover {
      transform: scale(1.05);
    }

    /* آراء العملاء */
    .testimonial {
      background: #f1f1f1;
      padding: 15px;
      margin: 10px;
      border-radius: 8px;
      font-style: italic;
    }

    /* الفوتر */
    footer {
      background: #222;
      color: #fff;
      text-align: center;
      padding: 15px;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <header>
    <h1>أهلاً بيك في موقعي الجديد 🚀</h1>
    <nav>
      <a href="#about">من نحن</a>
      <a href="#services">الخدمات</a>
      <a href="#gallery">المعرض</a>
      <a href="#testimonials">آراء العملاء</a>
      <a href="#contact">تواصل معنا</a>
    </nav>
  </header>

  <section id="about">
    <h2>من نحن 🤝</h2>
    <p>هذا الموقع مخصص لعرض أعمالي ومشاريعي في الإلكترونيات والروبوتات ✨.</p>
  </section>

  <section id="services">
    <h2>الخدمات ⚙️</h2>
    <ul>
      <li>تصميم دوائر إلكترونية 🔌</li>
      <li>برمجة روبوتات ذكية 🤖</li>
      <li>تطوير مواقع ويب 🌐</li>
    </ul>
  </section>

  <section id="gallery">
    <h2>المعرض 📸</h2>
    <div class="gallery">
      <img src="https://via.placeholder.com/200" alt="مشروع 1">
      <img src="https://via.placeholder.com/200" alt="مشروع 2">
      <img src="https://via.placeholder.com/200" alt="مشروع 3">
    </div>
  </section>

  <section id="testimonials">
    <h2>آراء العملاء 💬</h2>
    <div class="testimonial">"أفضل تجربة مع روبوتات ياسر، فعلاً ذكية وسهلة الاستخدام!" 😍</div>
    <div class="testimonial">"باور سبلاي ممتاز، أنقذني في مشروعي الإلكتروني." ⚡</div>
    <div class="testimonial">"موقع احترافي وخدمة رائعة، أنصح الجميع بالتجربة." 👍</div>
  </section>

  <section id="contact">
    <h2>تواصل معنا 📞</h2>
    <p>راسلني على البريد: <a href="mailto:info@yasserairobotics.com">info@yasserairobotics.com</a></p>
    <p>أو عبر واتساب: <a href="https://wa.me/201040363927">📱 اضغط هنا</a></p>
  </section>

  <footer>
    <p>© 2025 Yasser AIRobotics - كل الحقوق محفوظة ⚡</p>
  </footer>

  <script>
    // حركة بسيطة: رسالة ترحيب عند الضغط على العنوان
    document.querySelector("header h1").onclick = () => {
      alert("أهلاً بيك يا ياسر 👑🔥 في موقعك الجديد!");
    };
  </script>
</body>
</html>



