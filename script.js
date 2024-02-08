var unit1 = document.querySelector(".unit-1");
var unit2 = document.querySelector(".unit-2");
var unit3 = document.querySelector(".unit-3");
var total = document.querySelector(".total-price");
var price1 = document.querySelector("#unit-1-price");
var price2 = document.querySelector("#unit-2-price");
var price3 = document.querySelector("#unit-3-price");
var totalAmount = document.querySelector("#total-amount");

console.log(
  total,
  price1.innerText,
  price2.innerText,
  price3.innerText,
  totalAmount
);

function toggleUnit1() {
  unit1.classList.toggle("expanded");
  totalAmount.innerText = price1.innerText;
}

function toggleUnit2() {
  unit2.classList.toggle("expanded");
  totalAmount.innerText = price2.innerText;
}

function toggleUnit3() {
  unit3.classList.toggle("expanded");
  totalAmount.innerText = price3.innerText;
}
