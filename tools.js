document.addEventListener("DOMContentLoaded", function () {
  const getinfoBtn = document.getElementById("get-info");
  const popupForm = document.getElementById("popup-form");
  const closeBtn = document.getElementById("close-btn");

  // Popup open
  if (getinfoBtn && popupForm) {
    getinfoBtn.addEventListener("click", function () {
      popupForm.style.display = "block";
    });
  }

  // Popup close (button)
  if (closeBtn && popupForm) {
    closeBtn.addEventListener("click", function () {
      popupForm.style.display = "none";
    });
  }

  // Popup close (click outside popup container)
  if (popupForm) {
    window.addEventListener("click", function (event) {
      if (event.target === popupForm) {
        popupForm.style.display = "none";
      }
    });
  }

  // Gallery hover flip (supports .webp and .jpg)
  const galleryImgs = document.querySelectorAll("#gallery img");

  galleryImgs.forEach(function (img) {
    img.addEventListener("mouseover", function () {
      if (this.src.includes(".webp")) {
        this.src = this.src.replace(".webp", "-flipped.webp");
      } else if (this.src.includes(".jpg")) {
        this.src = this.src.replace(".jpg", "-flipped.jpg");
      }
    });

    img.addEventListener("mouseout", function () {
      if (this.src.includes("-flipped.webp")) {
        this.src = this.src.replace("-flipped.webp", ".webp");
      } else if (this.src.includes("-flipped.jpg")) {
        this.src = this.src.replace("-flipped.jpg", ".jpg");
      }
    });
  });

  // Active page highlighting
  const page = document.body.dataset.page;
  if (page) {
    const link = document.querySelector(`header nav a[data-page="${page}"]`);
    if (link) link.classList.add("active");
  }

  // Hamburger menu (scoped to header nav)
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("header nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});