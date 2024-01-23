const formEl = document.querySelector('form');
const resultEl = document.querySelector('#result');
const inputs = document.querySelectorAll('input');

formEl.addEventListener('submit',(ev)=>{
    ev.preventDefault();

    resultEl.innerHTML= inputs[0]?.valueAsNumber + inputs[1]?.valueAsNumber;
})
