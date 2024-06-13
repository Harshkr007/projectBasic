const main = document.querySelector(`main`);
const input = document.querySelector(`.guessSec_input`).querySelector(`input`);
const guess = [];
let guessRemain = 10;
const random = Math.floor(Math.random() * 100) + 1;

document.querySelector(`.guessSec_submit`).addEventListener(`click`, (e) => {
    if (guessRemain < 1) {
        alert(`No more guesses remaining`);
    } else {
        const value = parseInt(input.value, 10);

        // result section
        if (value >= 1 && value <= 100) {
            guess.push(value);
            guessRemain--;

            let result = "";
            guess.forEach(val => {
                result += " " + val;
            });

            if (value === random) {
                document.querySelector(`.guessSec_result`).innerHTML = `Yeh! you guessed it right`;
            } else {
                document.querySelector(`.guessSec_result`).innerHTML = `Oops! you guessed it wrong`;
                //hint
                const hint = document.querySelector(`.hint`);
                if (value < random) {
                    hint.innerHTML = `You are Too below`;
                } else {
                    hint.innerHTML = `You are Too high`;
                }
            }

            // previous guess Section
            document.querySelector(`.previousguess`).querySelector(`span`).innerHTML = result;

            // guess remain section
            document.querySelector(`.remainGuess`).querySelector('span').innerHTML = guessRemain;

            //clear the input feild
            input.value = '';
        } else {
            document.querySelector(`.guessSec_result`).innerHTML = `Please, provide a valid input`;
        }
    }
});


