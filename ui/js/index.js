var wynik = document.getElementById("wynik");
var fNumber;
var sNumber;

function start() {
  wynik = document.getElementById("wynik");
  var plus = document.getElementById("div10");
  var minus = document.getElementById("div11");
  var mult = document.getElementById("div12");
  var divide = document.getElementById("div13");
  var equals = document.getElementById("div14");

  plus.onclick = function () {
    document.getElementById("operator").innerHTML = "+";
    if (wynik.value == '') {
        alert('The field is empty');
        return plus();
    }

    fNumber = Number(wynik.value);
    wynik.value = '';

    equals.onclick = function () {
        sNumber = Number(wynik.value);
        var suma = fNumber + sNumber;
        wynik.value = suma;
    }
  }

  minus.onclick = function () {
    document.getElementById("operator").innerHTML = "-";
    if (wynik.value == '') {
        alert('The field is empty');
        return minus();
    }

    fNumber = Number(wynik.value);
    wynik.value = '';

    equals.onclick = function () {
        sNumber = Number(wynik.value);
        var suma = fNumber - sNumber;
        wynik.value = suma;
    }
  }

  mult.onclick = function () {
    document.getElementById("operator").innerHTML = "×";
    if (wynik.value == '') {
        alert('The field is empty');
        return mult();
    }

    fNumber = Number(wynik.value);
    wynik.value = '';

    equals.onclick = function () {
        sNumber = Number(wynik.value);
        var suma = fNumber * sNumber;
        wynik.value = suma;
    }
  }

  divide.onclick = function () {
    document.getElementById("operator").innerHTML = "÷";
    if (wynik.value == '') {
        alert('The field is empty');
        return divide();
    }

    fNumber = Number(wynik.value);
    wynik.value = '';

    equals.onclick = function () {
        sNumber = Number(wynik.value);
        var suma = fNumber / sNumber;
        wynik.value = suma;
    }
  }

  equals.onclick = function () {
    document.getElementById("operator").innerHTML = "=";
    if (wynik.value == '') {
        alert('The field is empty');
        return equals();
    }
  }
}

function showMe(x) {
    wynik.value = wynik.value + x;

    if (wynik.value.length > 14) {
        alert('You can display up to ten numbers ;)');
        wynik.value = wynik.value.substring(0, wynik.value.length - 1);
    }
}

function whitePower() {
    wynik.value = "";
    document.getElementById("operator").innerHTML = "";
    start();
}

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
});