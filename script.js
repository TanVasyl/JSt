'use strict';

   function start() {
       document.write('<button class="b1" >Ещё</button> <br />');
       document.write('<input type="number" class = "in1"><br />');
       document.write('<button class ="s1" >Cумма</button> <br />'); //функция сложения 
       document.write('<button class = "m1" >Произведение</button> <br />'); // функция умножения
       document.write(' <p style="border:4px green solid; background-color: #fdf4e3;;"class = "out">Результат сложения</p><hr>')
       document.write(' <p style="border:4px green solid; background-color: #fdf4e3;;"class = "out1">Результат умножения</p>')
      
       let number = [] //cоздаем массив
   document.querySelector(".b1").addEventListener('click', () => { 
      let val = document.querySelector(".in1").value
      number.push(+val)
    console.log (val);
   
   })
   document.querySelector(".s1").addEventListener('click', ()=> {
      let sum = number.reduce((sum, current) => sum + current, 0)
          document.querySelector(".out").innerHTML = (`Сумма ваших чисел равна: ${sum}`);
    });
    document.querySelector(".m1").addEventListener('click', ()=> {
        let mul = number.reduce((mul, current) => mul * current, 1)
        document.querySelector(".out1").innerHTML = (`Произведение ваших чисел равна: ${mul}`);
        });
    } 

