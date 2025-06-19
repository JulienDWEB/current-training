const countdownDisplay = document.querySelector('#countdownDisplay');
const inputValue = document.querySelector('#choice');
const startButton = document.querySelector('#start');

let intervalId = null;

startButton.addEventListener('click', () => {
    let minutes = parseInt(inputValue.value, 10);
    let secondes = 0;

    if (isNaN(minutes) || minutes < 0) {
        countdownDisplay.textContent = '00:00';
        return;
    }

    // Affiche la valeur initiale
    countdownDisplay.textContent = `${String(minutes).padStart(2, '0')}:00`;

    clearInterval(intervalId); // Stoppe un ancien compte à rebours si besoin

    intervalId = setInterval(() => {
        if (secondes === 0) {
            if (minutes === 0) {
                clearInterval(intervalId);
                countdownDisplay.textContent = '00:00';
                return;
            }
            minutes--;
            secondes = 59;
        } else {
            secondes--;
        }
        countdownDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(secondes).padStart(2, '0')}`;
    }, 1000);
});

inputValue.addEventListener('input', () => {
    let input = inputValue.value;
    if (input && !isNaN(input) && input > 0) {
        countdownDisplay.textContent = `${String(input).padStart(2, '0')}:00`;
    } else {
        countdownDisplay.textContent = '00:00';
    }
});