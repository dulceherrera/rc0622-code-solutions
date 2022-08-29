const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubledNum = number => {
  return number * 2;
};

const doubled = numbers.map(doubledNum);
console.log('doubled:', doubled);

const price = number => {
  return `$${number.toFixed(2)}`;
};

const prices = numbers.map(price);
console.log('prices:', prices);

const upperCase = language => {
  return language.toUpperCase();
};

const upperCased = languages.map(upperCase);
console.log('upperCased:', upperCased);

const firstLetter = language => {
  return language[0];
};

const firstLetters = languages.map(firstLetter);
console.log('firstLetters:', firstLetters);
