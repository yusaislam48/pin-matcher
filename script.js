// display generate pin 
const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', function(){
    document.getElementById('generatePin').value = getRandomNumber();
})

function getRandomNumber(){
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