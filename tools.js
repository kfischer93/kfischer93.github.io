document.addEventListener("DOMContentLoaded", function() {

  var getinfoBtn = document.getElementById("get-info");
  
  var popupForm = document.getElementById("popup-form");
  
  var closeBtn = document.getElementById("close-btn");
  
  // Add null checks for elements that might not exist on every page
  if (getinfoBtn) {
      getinfoBtn.addEventListener("click", function() {
        popupForm.style.display = "block";
      });
  }
  
  if (closeBtn) {
      closeBtn.addEventListener("click", function() {
        popupForm.style.display = "none";
      });
  }
  
  
  window.addEventListener("click", function(event) {
    if (event.target == popupForm) {
      popupForm.style.display = "none";
    }
  });
  
  var galleryImgs = document.querySelectorAll("#gallery img");
  
  galleryImgs.forEach(function(img) {
      img.addEventListener("mouseover", function() {
          this.src = this.src.replace(".jpg", "-flipped.jpg");
      });
  
      img.addEventListener("mouseout", function() {
          this.src = this.src.replace("-flipped.jpg", ".jpg");
      });
  });
  
  // Active page highlighting
  const page = document.body.dataset.page;
  if (page) {
      const link = document.querySelector(`nav a[data-page="${page}"]`);
      if (link) link.classList.add('active');
  }
  
});

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}