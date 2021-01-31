// display generate pin 
const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', function () {
    document.getElementById('generatePin').value = getRandomNumber();
})

// handle calculator button event 
const buttonContainer = document.getElementById('digit-continer');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        // handle backSpace
        // handle clear 
        if (digit === 'C') {
            const typedInput = document.getElementById("typed-pin");
            typedInput.value = '';
        }
    }
    else {
        const typedInput = document.getElementById("typed-pin");
        typedInput.value = typedInput.value + digit;
    }
})

// handle submit button
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function () {
    verifyPin();
})



function getRandomNumber() {
    const randomNumber = Math.random() * 10000;
    // way 1
    // const pin = (randomNumber + '').split('.')[0];
    // if (pin.length == 4) {
    //     return pin;
    // } else {
    //     return getRandomNumber();
    // }

    // way 2
    const randomRoundNumber = Math.round(randomNumber) + "";
    if (randomRoundNumber.length == 4) {
        return randomRoundNumber;
    }
    else {
        return getRandomNumber();
    }
}


function verifyPin() {
    const pin = document.getElementById('generatePin').value;
    const typedPin = document.getElementById("typed-pin").value;
    if (pin === typedPin) {
        const correct = document.getElementById('correctPin');
        correct.style.display = 'block';
        const inCorrect = document.getElementById('inCorrectPin');
        inCorrect.style.display = 'none';
    }
    else {
        const inCorrect = document.getElementById('inCorrectPin');
        inCorrect.style.display = 'block';
        const correct = document.getElementById('correctPin');
        correct.style.display = 'none';
    }
}