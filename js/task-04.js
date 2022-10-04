const decrementBtn = document.querySelector("button")[0];
//console.log(decrementBtn);
const incrementBtn = document.querySelector("button")[1];
//console.log(incrementBtn);

let counterValue = 0;

decrementBtn.addEventListener(`click`, (button) => {
    counterValue = counterValue - 1;
    const valueRef = document.querySelector(`span`);
    valueRef.textContent = counterValue;
});

incrementBtn.addEventListener(`click`, (button) => {
    counterValue += 1;
    const valueRef = document.querySelector(`span`);
    valueRef.textContent = counterValue;
});