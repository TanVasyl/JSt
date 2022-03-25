'use strict';
var number = [];
var buttonClear = document.querySelector(".clear-button");
var buttonAdd = document.querySelector(".b1");
document.addEventListener('keyup', function (event) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        var val = document.querySelector(".in1").value;
        number.push(+val);
        var sum = number.reduce(function (sum, current) { return sum + current; }, 0);
        var mul = number.reduce(function (mul, current) { return mul * current; }, 1);
        document.querySelector(".out").innerHTML = "\"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0441\u043B\u043E\u0436\u0435\u043D\u0438\u044F\" ".concat(sum, "</br> \"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0443\u043C\u043D\u043E\u0436\u0435\u043D\u0438\u044F\" ").concat(mul);
    }
});
document.addEventListener('keyup', function (event) {
    if (event.code === 'Delete') {
        return del();
    }
    function del() {
        number = [];
        document.querySelector(".out").innerHTML = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D!";
    }
});
