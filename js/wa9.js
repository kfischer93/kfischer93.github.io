// Get references to the elements
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

// Set the random values for the story
var storyText = 'It was snowing mice and chickens, so :insertx: went for a jog. When they arrived at :inserty:, they did four spins and :insertz:. Dolly Parton saw the whole thing & started crying — :insertx: was actually my mom, and started doing backflips. ';
var insertX = ['my sweet father', 'Toby Keith', 'The General', 'my mom'];
var insertY = ['my mothers house', 'the last house on the left', 'Dolly World', 'the underworld, unfortunately'];
var insertZ = ['found a great low rate online', 'went to the general and saved some time', 'evaporated into thin air suddenly all at once', 'did some math'];
var name = 'Peanut Butter Sunshine';

// Replace the placeholders with the random values
function generateStory() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
  
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  
  if (customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replaceAll('my mom', name);
}

if (document.getElementById("uk").checked) {
    newStory = newStory.replaceAll('mice and chickens', 'piggies in blankies');
    newStory = newStory.replaceAll('Dolly Parton', 'Queen Dolores Parton II');
}

story.textContent = newStory; 
story.style.visibility = 'visible';
}
// Get a random value from the given array
function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

// Set the event listener for the button
randomize.addEventListener('click', generateStory);