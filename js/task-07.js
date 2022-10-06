const controlRef = document.querySelector('#font-size-control');
console.log(controlRef);


controlRef.addEventListener("input", () => {
    const rangeVarRef = controlRef.value;
    console.log(rangeVarRef);
});