const inputLow = prompt('Please provide your lowest number');

const inputHigh = prompt('Please provide your highest number');

const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);



if (lowNumber && highNumber) {
    const randomNumber = Math.floor(Math.random()*(highNumber - lowNumber +1) ) + lowNumber;

    console.log('${randomNumber} is a random number between ${lowNumber} and ${highNumber}.');
} 

else {
    console.log('Provide two figures; no words');
}