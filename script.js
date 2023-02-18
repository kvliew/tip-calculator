var billAmount = document.getElementById("bill-amount");
var tableSize = document.getElementById("table-size");
var customPercentage = document.getElementById("custom-percentage"); 
var tipAmount = document.getElementById("tip-amount");
var totalAmount = document.getElementById("total-amount");
var tipPercentages = document.querySelectorAll("input[name='tip-percentage']");
var tipPercentage = 0;
var billDivider = 1;

billAmount.addEventListener('input', updateBillAmount);
tableSize.addEventListener('input', updateTableSize);

tipPercentages.forEach(tipPercentages => {
  tipPercentages.addEventListener('change', updateSelected);
});
customPercentage.addEventListener('input', updateCustom);

function updateBillAmount() {
  calculateTipAmount(tipPercentage);
}

function updateSelected() {
  let tipPercentage = document.querySelector("input[name='tip-percentage']:checked").value;
  customPercentage.value = 0;
  calculateTipAmount(tipPercentage);
}

function updateCustom() {
  tipPercentage = customPercentage.value;
  // document.querySelector("input[name='tip-percentage']:checked").checked = false;
  calculateTipAmount(tipPercentage);
}

function updateTableSize() {
  billDivider = tableSize.value || 1;
  calculateTipAmount(tipPercentage);
}

function calculateTipAmount(tipPercentage) {
  let tipAmount = (billAmount.value*tipPercentage/100)/billDivider;
  let bill = parseFloat(billAmount.value) || 0;
  let totalAmount = (bill + tipAmount*billDivider)/billDivider;
  document.getElementById("tip-amount").textContent = tipAmount;
  document.getElementById("total-amount").textContent = totalAmount;
}

function reset() {
  billAmount = 0.00;
};