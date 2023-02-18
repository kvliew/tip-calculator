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

tipPercentages.forEach(tipPercentageCheckBox => {
  tipPercentageCheckBox.addEventListener('change', updateSelected);
});
customPercentage.addEventListener('input', updateCustom);

function updateBillAmount() {
  calculateTipAmount();
}

function updateSelected() {
  tipPercentage = document.querySelector("input[name='tip-percentage']:checked").value;
  customPercentage.value = 0;
  calculateTipAmount();
}

function updateCustom() {
  tipPercentage = customPercentage.value;
  // document.querySelector("input[name='tip-percentage']:checked").checked = false;
  calculateTipAmount();
}

function updateTableSize() {
  billDivider = tableSize.value || 1;
  calculateTipAmount();
}

function calculateTipAmount() {
  let tipAmount = (billAmount.value*tipPercentage/100)/billDivider;
  let bill = parseFloat(billAmount.value) || 0;
  let totalAmount = (bill + tipAmount*billDivider)/billDivider;
  document.getElementById("tip-amount").textContent = parseFloat(tipAmount).toFixed(2);
  document.getElementById("total-amount").textContent = parseFloat(totalAmount).toFixed(2);
}

function uncheck() {
  
}

function reset() {
  
};