let nums = document.querySelectorAll(".num");
let opts = document.querySelectorAll(".opt");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let cal_display = document.querySelector(".display0");



let currentValue = '';
let previousValue = null;
let operators = null;
let temporary = '';

// For Displaying Numbers---------------------------------
nums.forEach((num) => {
    num.addEventListener("click", () => {
        if(num.innerHTML==='.'&& temporary.includes('.')) return;
        if (currentValue.length < 14) {
            currentValue += num.innerHTML;
            temporary += num.innerHTML;
        }
        if (cal_display.textContent.length < 14) {
            cal_display.innerHTML = currentValue;
        }
    });
})

// For Calculating the arithmatic operations--------------
opts.forEach((opt) => {
    opt.addEventListener("click", () => {

        if (currentValue === '') return;
        
        // Number inserting inside the string---------------
        if (previousValue == null) {
            previousValue = temporary;
            temporary = '';
        }
        else if ((operators != null) && (previousValue != null)) {
            let a, b;
            a = parseFloat(previousValue);
            b = parseFloat(temporary);
            previousValue = operation(a, b, operators);
            operators = null;
            temporary = '';
            console.log(previousValue);
        }

        if (currentValue.length < 14) {
            currentValue += opt.innerHTML;
            operators = opt.innerHTML;
        }

        if (cal_display.textContent.length < 14) {
            cal_display.innerHTML = currentValue;
        } else {
            console.log("number overflows");
        }

    })
})

// Equal function here----------------------------

equal.addEventListener("click", () => {
    let a, b;
    a = parseFloat(previousValue);
    b = parseFloat(temporary);
    let result = operation(a, b, operators).toFixed(2);
    cal_display.innerHTML = result;
    let y = '';
    y += result;
    if (y.length < 14) {
        cal_display.innerHTML = result;
    }
    else {
        cal_display.innerHTML = "Error";
    }
    temporary='';
    previousValue=null;
    operators=null;
    currentValue='';
})



// For Clearing the Digits from display-------------------
clear.addEventListener("click", function () {
    cal_display.innerHTML = "";
    currentValue = '';
    temporary = '';
    previousValue = null;
    operators = null;

});

// console.log(previousValue);

const operation = (a, b, op) => {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '÷': return a / b;
        case '×': return a * b;

    }
}
// let a=operation(7,5,'×');
// console.log(a);