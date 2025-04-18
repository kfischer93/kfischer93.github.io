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
    21: 'veintiuno', 
    22: 'veintidós',
    23: 'veintitrés',
    24: 'veinticuatro',
    25: 'veinticinco',
    26: 'veintiséis',
    27: 'veintisiete',
    28: 'veintiocho',
    29: 'veintinueve',
    30: 'treinta',
    31: 'treinta y uno',
    32: 'treinta y dos',
    33: 'treinta y tres',
    34: 'treinta y cuatro',
    35: 'treinta y cinco',
    36: 'treinta y seis',
    37: 'treinta y siete',
    38: 'treinta y ocho',
    39: 'treinta y nueve',
    40: 'cuarenta',
    41: 'cuarenta y uno',
    42: 'cuarenta y dos',
    43: 'cuarenta y tres',
    44: 'cuarenta y cuatro',
    45: 'cuarenta y cinco',
    46: 'cuarenta y seis',
    47: 'cuarenta y siete',
    48: 'cuarenta y ocho',
    49: 'cuarenta y nueve',
    50: 'cincuenta',
    51: 'cincuenta y uno',
    52: 'cincuenta y dos',
    53: 'cincuenta y tres',
    54: 'cincuenta y cuatro',
    55: 'cincuenta y cinco',
    56: 'cincuenta y seis',
    57: 'cincuenta y siete',
    58: 'cincuenta y ocho',
    59: 'cincuenta y nueve',
    60: 'sesenta',
    61: 'sesenta y uno',
    62: 'sesenta y dos',
    63: 'sesenta y tres',
    64: 'sesenta y cuatro',
    65: 'sesenta y cinco',
    66: 'sesenta y seis',
    67: 'sesenta y siete',
    68: 'sesenta y ocho',
    69: 'sesenta y nueve',
    70: 'setenta',
    71: 'setenta y uno',
    72: 'setenta y dos',
    73: 'setenta y tres',
    74: 'setenta y cuatro',
    75: 'setenta y cinco',
    76: 'setenta y seis',
    77: 'setenta y siete',
    78: 'setenta y ocho',
    79: 'setenta y nueve', 
    80: 'ochenta',
    81: 'ochenta y uno',
    82: 'ochenta y dos',
    83: 'ochenta y tres',
    84: 'ochenta y cuatro',
    85: 'ochenta y cinco',
    86: 'ochenta y seis',
    87: 'ochenta y siete',
    88: 'ochenta y ocho',
    89: 'ochenta y nueve',
    90: 'noventa',
    91: 'noventa y uno',
    92: 'noventa y dos',
    93: 'noventa y tres',
    94: 'noventa y cuatro',
    95: 'noventa y cinco',
    96: 'noventa y seis',
    97: 'noventa y siete',
    98: 'noventa y ocho',
    99: 'noventa y nueve',
    100: 'cien',

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