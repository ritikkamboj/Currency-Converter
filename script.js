// function calculate() {
//   fetch("api.json")
//     .then((res) => res.json())
//     .then((data) =>{document.body.innerHTML = data[0].text});
// }

// calculate();

//selected the HTML elements

const currencyOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");
const currencyTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");

const swap = document.getElementById("btn");
const rate = document.getElementById("rate");

console.log(currencyOne, currencyTwo, amountOne, amountTwo, swap);

function calculate() {
  let currOne = currencyOne.value;
  let currTwo = currencyTwo.value;
  let amouOne = amountOne.value;
  console.log(amouOne);
  //   let amoutwo;

  // console.log(currOne,currTwo);
  fetch(
    `https://v6.exchangerate-api.com/v6/5fbd79e693787b9ad6c8d8f9/latest/${currOne}`
  )
    .then((res) => res.json())
    .then((data) => {
      let exRate = data.conversion_rates[currTwo];
      rate.innerText = `1 ${currOne} = ${exRate} ${currTwo}`;
      amountTwo.value = amouOne * exRate;
    });
}

function swapFunc()
{
    let temp = currencyOne.value;
   currencyOne.value = currencyTwo.value;
   currencyTwo.value = temp ;

   calculate();

}

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
swap.addEventListener("click",swapFunc);
// console.log();
