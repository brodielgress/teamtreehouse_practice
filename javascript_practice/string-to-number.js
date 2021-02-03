var firstName = prompt("What is your first name?");

var lastName = prompt("What is your last name?")

var completeName = firstName.toUpperCase() + ' ' + lastName.toUpperCase();

var characterCount = completeName.length;

alert("The string \"" + completeName + "\" is " + characterCount + " characters long.");