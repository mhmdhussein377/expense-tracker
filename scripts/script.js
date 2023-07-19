let totalAmount = 0;

$("form").submit(function (e) {
    e.preventDefault();
});

function expenseItemElement(name, amount) {
    return `<div>
                    <div>${name}</div>
                    <div>$${amount}
                        <i class="fa-solid fa-trash fa-lg remove"></i>
                    </div>
                </div>`;
}

function addExpense() {
    const expenses = $(".expenses-content");
    const expenseNameInput = $("#name");
    const expenseAmountInput = $("#amount");

    if (expenseAmountInput.val() === "" || expenseNameInput.val() === "") 
        return;
    
    const expenseItem = $(expenseItemElement(expenseNameInput.val(), expenseAmountInput.val()));

    expenseItem
        .find(".remove")
        .click(function () {
            expenseItem.remove();
        });

    expenses.append(expenseItem);
    totalAmount += + expenseAmountInput.val();
    $(".total-value").text("$" + totalAmount);
    expenseNameInput.val("");
    expenseAmountInput.val("");
}

$(document)
    .ready(function () {
        const addButton = $("button");
        addButton.click(addExpense);
        $(".total-value").text("$" + totalAmount);
    });
