


// Utility Functions 
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Select HTML element by class, id and html element
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

const enterNumber = select('.enternumber');
const checked = select('.check');
const result = select('.result');
const output = select('.output p');
const clear = select('.clear')

onEvent('click', result, () => {

    let a = enterNumber.value;
    if(!isNaN(a)){

    } if (checked.checked) {
        let toC = (a - 32) * 5 / 9;
        output.innerText = `${a}F = ${toC.toFixed(2)}C`

    } else {
        let toF = a * 1.8 + 32; 
        output.innerText = `${a}C = ${toF.toFixed(2)}F`
    } 

});

onEvent('click', clear, () => {
    output.innerText = '';
})


function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }


