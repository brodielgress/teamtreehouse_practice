/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */



// Call the function and pass it different values

const randomExercise = (lower, upper = 100) => {
    if (isNaN(lower) || isNaN(upper) ) {
        throw Error('Both arguments must be numerals.');
    }

    return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

console.log( randomExercise(1, 6) );
console.log( `${randomExercise(10)} is a random number between 10 and 100` );
console.log( randomExercise(250, 'five hundred') );