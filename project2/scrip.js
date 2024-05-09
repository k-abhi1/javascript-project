// use a javascript to creat a game of snake water & gun  the game should  ask you to cnter  s w or g the 
// the computer should be asked to randmnly gnarte  s w or g and decler win or loss using alert use confirm and 
//prompt where required 


document.addEventListener('DOMContentLoaded', function () {

    let userScore = 0;
    let computerScore = 0;

    const userScore_span = document.getElementById("user-score");
    const computerScore_span = document.getElementById("computer-score");
    const result_div = document.querySelector(".result");
    const rock_div = document.getElementById("r");
    const paper_div = document.getElementById("p");
    const scissors_div = document.getElementById("s");

    function getComputerChoice() {
        const choices = ['r', 'p', 's'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }
    // other functions...
    function main() {
        rock_div.addEventListener('click', function () {
            game("r");
        })
        paper_div.addEventListener('click', function () {
            game("p");
        })
        scissors_div.addEventListener('click', function () {
            game("s");
        })
    }
    main(); // Call main function after DOMContentLoaded
});
