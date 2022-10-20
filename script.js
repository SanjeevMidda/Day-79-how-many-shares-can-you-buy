let getinput = document.querySelector('.cashAmount');
let getShareCost = document.querySelector('.shareCost');
let getOutput = document.querySelector('.output');

getShareCost.addEventListener('change', calculateShares);

function calculateShares(){
    console.log('Hello');
    let availableCash = getinput.value;
    let shareCost = getShareCost.value;
    let result = availableCash / shareCost;

    getOutput.innerHTML = result;
}