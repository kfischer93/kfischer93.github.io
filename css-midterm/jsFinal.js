// gallery functionality
const gallery = document.getElementById("gallery");

gallery.addEventListener("click", function (event) {
    const target = event.target;

    if (target.tagName === "IMG") {
        const imgSrc = target.getAttribute("src");
        const imgAlt = target.getAttribute("alt");
        const imgDescription = imgAlt ? imgAlt : "Gallery image";

        target.setAttribute("src", imgSrc);
        target.setAttribute("alt", imgDescription);
    }
});

// get more info popup box
const popup = document.getElementById("popup");

function showPopup() {
    popup.classList.remove("popup-hidden");
}

function hidePopup() {
    popup.classList.add("popup-hidden");
}

gallery.addEventListener("click", showPopup);
popup.addEventListener("click", hidePopup);