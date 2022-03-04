'use strict';

let number = []
let buttonAdd = document.querySelector(".b1");
let buttonClear = document.querySelector(".clear-button");
    function sumAndMul () {
          let val = document.querySelector(".in1").value
        number.push(+val)
      console.log (val);
          let sum = number.reduce((sum, current) => sum + current, 0)
      document.querySelector(".out").innerHTML = (`Сумма ваших чисел равна: ${sum}`);
          let mul = number.reduce((mul, current) => mul * current, 1)
      document.querySelector(".out1").innerHTML = (`Произведение ваших чисел равна: ${mul}`);
    }
    function del () {
        number = []
        document.querySelector(".out").innerHTML = (`Сумма ваших чисел равна: `);
        document.querySelector(".out1").innerHTML = (`Произведение ваших чисел равна: `);
    }
document.addEventListener ('keyup', function(event) {
    if (event.code === 'Enter') {
        return sumAndMul();
    } else {
   (event.code === 'NumpadEnter') 
        return sumAndMul();
    }
});
document.addEventListener ('keyup', function(event) {
    if( event.code === 'Delete') {
    return del();
    }
})