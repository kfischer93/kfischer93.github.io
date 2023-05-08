document.addEventListener("DOMContentLoaded", function() {
  // Your existing JavaScript code goes here

// Get the button that opens the popup form
var getinfoBtn = document.getElementById("get-info");

// Get the popup form
var popupForm = document.getElementById("popup-form");

// Get the button that closes the popup form
var closeBtn = document.getElementById("close-btn");

// When the user clicks the button, show the popup form
getinfoBtn.addEventListener("click", function() {
  popupForm.style.display = "block";
});

// When the user clicks the close button, hide the popup form
closeBtn.addEventListener("click", function() {
  popupForm.style.display = "none";
});

// When the user clicks anywhere outside of the popup form, hide it


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