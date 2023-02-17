var billAmount = document.getElementById("bill-amount");
var tableSize = document.getElementById("table-size");
var customPercentage = document.getElementById("custom-percentage"); 
var tipAmount = document.getElementById("tip-amount");
var totalAmount = document.getElementById("total-amount");
var selected;
var tipPercentages = document.querySelectorAll("input[name='tip-percentage']");
var tipPercentage = 5;

billAmount.addEventListener('input', updateBillAmount);
// tableSize.addEventListener('input', calculate);

tipPercentages.forEach(tipPercentages => {
  tipPercentages.addEventListener('change', updateSelected);
});
customPercentage.addEventListener('input', updateCustom);

function updateBillAmount() {
  calculateTipAmount(tipPercentage);
}

function updateSelected() {
  tipPercentage = document.querySelector("input[name='tip-percentage']:checked").value;
  customPercentage.value = 0;
  calculateTipAmount(tipPercentage);
}

function updateCustom() {
  tipPercentage = customPercentage.value;
  // document.querySelector("input[name='tip-percentage']:checked").checked = false;
  calculateTipAmount(tipPercentage);
}

function calculateTipAmount(tipPercentage) {
  let tipAmount = billAmount.value*tipPercentage/100;
  document.getElementById("tip-amount").innerHTML = tipAmount;
}

function reset() {
  billAmount = 0.00;
};