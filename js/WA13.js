const numbers = {
    1: 'uno',
    2: 'dos',
    3: 'tres',
    4: 'cuatro',
    5: 'cinco',
    6: 'seis',
    7: 'siete',
    8: 'ocho',
    9: 'nueve',
    10: 'diez',
    11: 'once',
    12: 'doce',
    13: 'trece',
    14: 'catorce',
    15: 'quince',
    16: 'dieciséis',
    17: 'diecisiete',
    18: 'dieciocho',
    19: 'diecinueve',
    20: 'veinte',
    30: 'treinta',
    40: 'cuarenta',
    50: 'cincuenta',
    60: 'sesenta',
    70: 'setenta',
    80: 'ochenta',
    90: 'noventa',
    100: 'cien'
  };
  
  const slider = document.getElementById('slider');
  const answerInput = document.getElementById('answer');
  const submitButton = document.getElementById('submit');
  const feedback = document.getElementById('feedback');
  
  function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  function checkAnswer() {
    const num = parseInt(slider.value);
    const answer = answerInput.value.trim().toLowerCase();
  
    if (answer === numbers[num]) {
      feedback.textContent = `Correct! ${num} is ${numbers[num]} in Spanish. Your volume is now set to ${num}`;
      feedback.style.color = 'green';
    } else {
      feedback.textContent = `Incorrect. ${num} is ${numbers[num]} in Spanish. Your volume remains the same.`;
      feedback.style.color = 'red';
    }
  
    slider.value = generateNumber();
    answerInput.value = '';
  }
  
  slider.addEventListener('input', function() {
    feedback.textContent = '';
  });
  
  submitButton.addEventListener('click', checkAnswer);