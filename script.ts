'use strict';

let number: Array<number> = []

let buttonClear = document.querySelector(".clear-button");
let buttonAdd = document.querySelector(".b1")
document.addEventListener ('keyup', function(event):void {
    if (event.code === 'Enter' || event.code === 'NumpadEnter')  {
            let val:string =(<HTMLInputElement> document.querySelector(".in1")).value;
                 number.push(+val);
                
            let sum = number.reduce((sum, current) => sum + current, 0)
            let mul = number.reduce((mul, current) => mul * current, 1)
            document.querySelector(".out").innerHTML = `Результат сложения ${sum}</br> Результат умножения ${mul}` 
        }
});
document.addEventListener ('keyup', function(event):void {
    if( event.code === 'Delete') {
    return del();
    }
    function del () {
        number = []
        document.querySelector(".out").innerHTML = `Результат сброшен!`
     }
})