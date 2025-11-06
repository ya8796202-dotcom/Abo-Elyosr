// لما الصفحة تتحمل
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");

  // تابع التمرير
  window.addEventListener("scroll", function() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  });
});
