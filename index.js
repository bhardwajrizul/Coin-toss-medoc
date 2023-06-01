const tossButton = document.getElementById('toss-button');
const coinHeads = document.getElementById('coin-heads');
const coinTails = document.getElementById('coin-tails');
const resultElement = document.getElementById('result');

let timing = 2500;
let delay = 300;

function tossCoin() {
    // HIDE TOSS COIN BUTTON WHEN CLICKED FOR 2.5s
    tossButton.style.disabled = true;
    tossButton.style.opacity = 0.5;
    tossButton.style.pointerEvents = 'none';
    resultElement.innerHTML = '';
    // MAKE TOSS COIN BUTTON VISIBLT
    setTimeout(() => {
        tossButton.style.disabled = false;
        tossButton.style.opacity = 1;
        tossButton.style.pointerEvents = 'auto';
    }, timing);

    // FIND RESULT OF COIN TOSS
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    

    // HAVE THE HEADS AND TAILS IMAGE ALTERNATE EVERY 300ms
    let i = 0;
    const interval = setInterval(() => {
        i++;
        if (i % 2 === 0) {
            coinHeads.style.display = 'block';
            coinTails.style.display = 'none';
        } else {
            coinHeads.style.display = 'none';
            coinTails.style.display = 'block';
        }
    }
    , delay);

    // CLEAR THE INTERVAL AFTER 2.5s
    setTimeout(() => {
        clearInterval(interval);
    }
    , timing);

    // SET THE IMAGE AFTER 2.5s
    setTimeout(() => {
        if (result === 'heads') {
            coinHeads.style.display = 'block';
            coinTails.style.display = 'none';
        } else {
            coinHeads.style.display = 'none';
            coinTails.style.display = 'block';
        }
    }
    , timing + delay);

    // ALSO DISPLAY THIS IN DIV AFTER 2.5s
    setTimeout(() => {
        resultElement.innerHTML = result;
    }
    , timing + (delay * 2) );

}

tossButton.addEventListener('click', tossCoin);
