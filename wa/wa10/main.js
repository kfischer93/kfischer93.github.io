const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['AK copy.jpeg', 'alaska copy.jpg', 'alaska4 copy.jpg', 'bears copy.jpg', 'tofino2 copy.jpg']

/* Declaring the alternative text for each image file */
const alts = ['Plane view in Alaska', 'Before the sun rises in the bay, Alaska', 'Small lakefront hut in Alaska', 'Bears in Alaska', 'Sunset in Alaska']

/* Looping through images */
for  (var i=0; i<images.length; i++) {
    const newImage = document.createElement ('img');
    newImage.setAttribute ('src', 'images/' + images[i]);
    newImage.setAttribute ('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });