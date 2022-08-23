// calculations--->
let totalPlayerExpense = 0;
document
  .getElementById("calculate-player")
  .addEventListener("click", function () {
    //calculate button event listener added
    const budgetField = document.getElementById("input-budget"); //input field
    const budgetFieldString = budgetField.value;
    const playerTotalBudget = parseFloat(budgetFieldString);
    if (playerTotalBudget > 0) {
      const defaultExpenses = document.getElementById("player-expense"); //per player innertext
      defaultExpenses.innerText = 0;
      const newExpenseString = defaultExpenses.innerText;
      const newExpense = parseFloat(newExpenseString);

      budgetField.value = "";
      totalPlayerExpense = 0;
      totalPlayerExpense = (playerTotalBudget + newExpense) * playersCount;
      defaultExpenses.innerText = totalPlayerExpense;
    } else {
      budgetField.value = "";
      alert("please Insert a number"); //prompt for not a number
    }
  });

document.getElementById("total-bill").addEventListener("click", function () {
  const inputManagerFee = document.getElementById("manager-fee"); //manager amount input
  const managerFeeString = inputManagerFee.value;
  const managerFee = parseFloat(managerFeeString);

  const inputCoachFee = document.getElementById("coach-fee"); //coach amount input
  const coachFeeString = inputCoachFee.value;
  const coachFee = parseFloat(coachFeeString);
  const clicked = totalPlayerExpense + managerFee + coachFee; //total calculation
  inputManagerFee.value = "";
  inputCoachFee.value = "";
  const getDisplayTotalBill = document.getElementById("display-total-bill");
  getDisplayTotalBill.innerText = clicked;
});
