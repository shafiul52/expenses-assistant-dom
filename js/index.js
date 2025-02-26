
// add event listener for calculate button
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener('click',function(){
//    getting all the value 
const income = parseFloat(document.getElementById("income").value);
const software = parseFloat(document.getElementById("software").value);
const courses = parseFloat(document.getElementById("courses").value);
const internet = parseFloat(document.getElementById("internet").value);

// console.log({income, software,courses, internet});

// console.table({income, software,courses, internet});
const totalExpenses = software + courses + internet;
const balance = income -totalExpenses;

// console.table({totalExpenses, balance});

const totalExpensesElement = document.getElementById("total-expenses");
// totalExpensesElement.innerText = totalExpenses;
totalExpensesElement.innerText = totalExpenses.toFixed(2);

const balanceElement = document.getElementById("balance");
balanceElement.innerText = balance.toFixed(2);

const result = document.getElementById("results");
result.classList.remove("hidden");

});

// add event listener for saving button
const calculateSavingButton = document.getElementById("calculate-savings");
calculateSavingButton.addEventListener("click",function () {

const savingPercentace = parseFloat(document.getElementById("savings").value);

const income = parseFloat(document.getElementById("income").value);
const software = parseFloat(document.getElementById("software").value);
const courses = parseFloat(document.getElementById("courses").value);
const internet = parseFloat(document.getElementById("internet").value);



const totalExpenses = software + courses + internet;
const balance = income - totalExpenses;

const savingAmout = (savingPercentace * balance ) /100;

// console.log(savingAmout);
const remainingBalance = balance - savingAmout

const savingElement = document.getElementById('savings-amount');
savingElement.innerText = savingAmout.toFixed(2);

const remainingElement = document.getElementById("remaining-balance");
remainingElement.innerText = remainingBalance.toFixed(2);


});