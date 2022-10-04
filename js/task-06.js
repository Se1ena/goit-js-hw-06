const input = document.querySelector('#validation-input');

const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(){
    console.log('Инпут потерял фокус - событие blur');
}

