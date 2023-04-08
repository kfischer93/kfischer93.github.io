const apiUrl = 'https://type.fit/api/quotes';
const imageUrl = 'https://picsum.photos/200';

const generateButton = document.getElementById('generate-button');
const affirmation = document.getElementById('affirmation');
const image = document.getElementById('image');

generateButton.addEventListener('click', async () => {
  // Get a random quote from the API
  const response = await fetch(apiUrl);
  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomQuote = data[randomIndex].text;
  
  // Get a random image from the API
  const randomImage = `${imageUrl}?random=${Date.now()}`;
  
  // Update the web page with the new quote and image
  affirmation.textContent = randomQuote;
  image.src = randomImage;
});