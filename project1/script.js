// Exercise 1 - Gues the number

// Write a javascript program to generate a random number and store it in a 
// variavle. The program then takes an inbut from the user to tell
// them whether the guess was Correct, greater or lesser than the original number
// 100 (no of guesses) is the score of the user the program is expected to terminate once the number
// is guassed number should be between 1-100

// let score = 100;
// let randomNumber = Math.floor(Math.random() * 100) + 1;

// let guess = prompt("Guess a number between 1 and 100");
// while (guess != randomNumber) {
//   if (guess > randomNumber) {
//     guess = prompt("Too high! Guess again");
//   } else {
//     guess = prompt("Too low! Guess again");
//   }
//   score--;
// }
// alert(`Congrats! You guessed the number in ${100 - score} attempts`);

//
let a =100;
let randomNumber = Math.floor(Math.random()* 100)+1;
let guss =prompt("gusee no between 1 to 100");
while(guss !=randomNumber){
    if(guss>randomNumber){
        guss =prompt("to high gusse no");

    }
    else{
        guss=prompt("to low gusse number");
    }
    score--;
}
alert(`congrats you gussed the numer in ${100 - score} attempts`);