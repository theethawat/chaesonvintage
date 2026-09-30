document.addEventListener("DOMContentLoaded", function () {
  // Animation on scroll
  if (window.AOS) AOS.init({ duration: 700, once: true, offset: 80 });

  // Lightbox แกลเลอรี
  if (window.GLightbox) GLightbox({ selector: ".glightbox", loop: true });

  // Swiper รีวิว / ภาพบรรยากาศ
  if (window.Swiper && document.querySelector(".cs-swiper")) {
    new Swiper(".cs-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: { delay: 4500, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: { 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } },
    });
  }

  // ทำเมนูหน้าปัจจุบันให้ active อัตโนมัติ
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-cs .nav-link").forEach(function (a) {
    if (a.getAttribute("href") === here) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });
});
