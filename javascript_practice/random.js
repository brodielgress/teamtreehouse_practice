const inputHigh = prompt('Please provide a number');

const highNumber = parseInt(inputHigh);



if (highNumber) {
    const randomNumber = Math.floor(Math.random()*highNumber)+1;

    console.log('${randomNumber} is a random number between 1 and ${highNumber}.');
} 

else {
    console.log('Provide a figure, not a word');
}