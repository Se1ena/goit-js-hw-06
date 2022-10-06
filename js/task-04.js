const decrementBtn = document.querySelector('[data-action="decrement"]');
//console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
//console.log(incrementBtn);

let counterValue = 0;

decrementBtn.addEventListener(`click`, (event) => {
    counterValue = counterValue - 1;
    const valueRef = document.querySelector(`span`);
    valueRef.textContent = counterValue;
});

incrementBtn.addEventListener(`click`, (event) => {
    counterValue += 1;
    const valueRef = document.querySelector(`span`);
    valueRef.textContent = counterValue;
});

console.log(counterValue);