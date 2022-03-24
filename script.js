'use strict';

let number = []

let buttonClear = document.querySelector(".clear-button");
let buttonAdd = document.querySelector(".b1")
document.addEventListener ('keyup', function(event) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'mouseup' )  {
            let val = document.querySelector(".in1").value;
                 number.push(+val);
                
            let sum = number.reduce((sum, current) => sum + current, 0)
            let mul = number.reduce((mul, current) => mul * current, 1)
            document.querySelector(".out").innerHTML = (`Сумма ваших чисел равна: ${sum} </br>
        Произведение ваших чисел равна: ${mul}`);
        }
});
document.addEventListener ('keyup', function(event) {
    if( event.code === 'Delete') {
    return del();
    }
    function del () {
        number = []
        document.querySelector(".out").innerHTML = (`Результат сброшен! `);
    }
})