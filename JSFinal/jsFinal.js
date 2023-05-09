document.addEventListener("DOMContentLoaded", function() {

var getinfoBtn = document.getElementById("get-info");

var popupForm = document.getElementById("popup-form");

var closeBtn = document.getElementById("close-btn");

getinfoBtn.addEventListener("click", function() {
  popupForm.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  popupForm.style.display = "none";
});


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


});

var modal = document.getElementById("modal");

var modalImage = document.getElementById("modal-image");

var designImages = document.querySelectorAll("#design-gallery img");

designImages.forEach(function (img) {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImage.src = this.src;
    });
});

var closeButton = document.querySelector(".close");

closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


