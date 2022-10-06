//const inputRef = document.querySelector('#validation-input');
//const symbolLength = inputRef.getAttribute("data-length");
//console.log(inputRef);
//console.log(symbolLength);

//inputRef.addEventListener('blur', onInputBlur);

//const input = document.querySelector("#validation-input");

//input.addEventListener("blur", (event) =>{
    //console.log('Инпут потерял фокус - событие blur');
    //if (event.currentTarget.value.length == inputRef.symbolLength.length) {
        //inputRef.classList.add("valid");
        //inputRef.classList.remove("invalid");
    //} else {
        //inputRef.classList.add("valid");
        //inputRef.classList.remove("invalid");
    //}
//});

const input = document.querySelector("#validation-input");

  input.addEventListener("blur", (event) =>{
    if (event.currentTarget.value.length == input.dataset.length) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  } );