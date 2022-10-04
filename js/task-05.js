const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};

//refs.input.addEventListener('focus', onInputFocus);
//refs.input.addEventListener('blur', onInputBlur);
//refs.input.addEventListener('change', onInputChange);
//refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener('input', onInputChange);

//function onInputFocus(){
    //console.log('Инпут получил фокус - событие focus');
//}

//function onInputBlur(){
    //console.log('Инпут потерял фокус - событие blur');
//}

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
}

input.addEventListener("input",()=> {
    if (input.value) {
        nameLabel.textContent = input.value;
    } else {
        nameLabel.textContent = "Anonymous";
    }
  });