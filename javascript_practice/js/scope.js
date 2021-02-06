// Global scope
const person = 'Lee';

function greeting() {
  // Function scope  
  const person = 'Meg';
    alert(`Hi, ${person}!`);
}

function greeting2() {
  // Function scope  
  const person = 'Robert';
    alert(`Guten Tag, ${person}!`);
}

greeting();
alert(`Hi, ${person}!`);
greeting2();