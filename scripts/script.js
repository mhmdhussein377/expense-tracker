$("form")
    .click(function (e) {
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