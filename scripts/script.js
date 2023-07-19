let totalAmount = 0;

$("form").submit(function (e) {
    e.preventDefault();
});

function expenseItemElement(name, amount) {
    return `<div>
                    <div>${name}</div>
                    <div class="amount">$<span class="amount-value">${amount}</span>
                        <i class="fa-solid fa-trash fa-lg remove"></i>
                    </div>
                </div>`;
}

function addExpense() {
    const expenses = $(".expenses-content");
    const expenseNameInput = $("#name");
    const expenseAmountInput = $("#amount");

    if (expenseAmountInput.val() === "" || expenseNameInput.val() === "" || isNaN(expenseAmountInput.val())) 
        return;
    
    console.log(typeof(+ expenseAmountInput.val() === ""))

    const expenseItem = $(expenseItemElement(expenseNameInput.val(), expenseAmountInput.val()));

    expenseItem
        .find(".remove")
        .click(function () {
            totalAmount -= + expenseItem
                .find(".amount-value")
                .text()
            $(".total-value").text("$" + totalAmount);
            if (totalAmount > 0) {
                $(".total").show();
            } else {
                $(".total").hide();
            }
            expenseItem.remove();
        });

    expenses.append(expenseItem);
    totalAmount += + expenseAmountInput.val();
    $(".total-value").text("$" + totalAmount);
    if (totalAmount > 0) {
        $(".total").show();
    } else {
        $(".total").hide();
    }
    expenseNameInput.val("");
    expenseAmountInput.val("");
};

$(document).ready(function () {
    const addButton = $("button");
    addButton.click(addExpense);
    $(".total-value").text("$" + totalAmount);
    if (totalAmount > 0) {
        $(".total").show()
    } else {
        $(".total").hide()
    }
});
