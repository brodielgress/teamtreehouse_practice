function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
      items += `<li>${arr[i]}</li>`;
    }
    return items;
  }

const questions = [
    ['What does two and two equal?', 'four'],
    ['What was the last name of the first U.S. president?', 'washington'],
    ['What planet is sixth from the sun in our solar system?', 'saturn'],
    ['What was the first name of the first woman to win a Nobel Prize?', 'marie']
];

const right = [];
const wrong = [];

let correctAnswers = 0;


for (let i = 0; i < questions.length; i++) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);

    if ( response.toLowerCase() === answer) {
        correctAnswers++;
        right.push(question);
    } else {
        wrong.push(question);
    }
}

if (correctAnswers === 4) {
let html = `
    <h1>You got all 4 questions right!</h1>
    <ol>${ createListItems(right) }</ol>
    `;

    document.querySelector('main').innerHTML = html;
} else if (correctAnswers === 1) {
let html = `
    <h1>You got ${correctAnswers} question right!</h1>
    <h1>You got this question right:</h1>
    <ol>${ createListItems(right) }</ol>

    <h1>You got these questions wrong:</h1>
    <ol>${ createListItems(wrong) }</ol>
    `;

    document.querySelector('main').innerHTML = html;
} else if (correctAnswers === 3) {
let html = `
    <h1>You got ${correctAnswers} questions right!</h1>
    <h1>You got these questions right:</h1>
    <ol>${ createListItems(right) }</ol>

    <h1>You got this question wrong:</h1>
    <ol>${ createListItems(wrong) }</ol>
    `;

document.querySelector('main').innerHTML = html;
} else if (correctAnswers > 1) {
let html = `
        <h1>You got ${correctAnswers} questions right!</h1>
        <h1>You got these questions right:</h1>
        <ol>${ createListItems(right) }</ol>
    
        <h1>You got these questions wrong:</h1>
        <ol>${ createListItems(wrong) }</ol>
        `;
    
    document.querySelector('main').innerHTML = html;
} else {
    let html = `
        <h1>Sorry! You got all the questions wrong:</h1>
        <ol>${ createListItems(wrong) }</ol>
        `;

    document.querySelector('main').innerHTML = html;
}


