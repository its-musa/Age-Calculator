let form = document.querySelector("#form");
let formGroup = document.querySelectorAll(".form-group");
let inputs = document.querySelectorAll(".form-control");
let labels = document.querySelectorAll("label");
let errors = document.querySelectorAll(".error");
let daysText = document.querySelector("#days");
let monthsText = document.querySelector("#months");
let yearsText = document.querySelector("#years");

const currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

form.addEventListener("submit", submit);

function submit(e) {
    validate();
    calculate();
    e.preventDefault();
}

function validate() {
    let validation = true;
    let empty = false;
    for (let i = 0; i < formGroup.length; i++) {
        if (inputs[i].value == "") {
            labels[i].style = "color: hsl(0, 100%, 67%);"
            inputs[i].style = "border-color: hsl(0, 100%, 67%);"
            errors[i].textContent = "This field is required";
            validation = false;
            empty = true;
        }
        else {
            labels[i].style = "color: hsl(0, 1%, 44%));"
            inputs[i].style = "border-color: hsl(0, 0%, 86%);"
            errors[i].textContent = "";
            empty = false;
        }
    }

    for (let i = 0; i < formGroup.length; i++) {
        if (inputs[0].value > 31 || inputs[0].value <= 0 || inputs[1].value > 12 || inputs[1].value <= 0 || inputs[2].value > currentYear || inputs[2].value <= 1900) {
            if (empty == false) {
                labels[i].style = "color: hsl(0, 100%, 67%);"
                inputs[i].style = "border-color: hsl(0, 100%, 67%);"
                errors[0].textContent = "Must be a valid date";
                validation = false; 
            }
            
        }

        else {
            labels[i].style = "color: hsl(0, 1%, 44%));"
            inputs[i].style = "border-color: hsl(0, 0%, 86%);"
            errors[i].textContent = "";
            validation = true;
        }
    }
    
    return validation;
}

function calculate() {
    if (validate() === true ) {
        let day = parseInt(inputs[0].value);
        let month = parseInt(inputs[1].value);
        let year = parseInt(inputs[2].value);

        year = currentYear - year;
        month = currentMonth - month;
        day = currentDay - day;

        if (month < 0 || (month === 0 && day < 0)) {
            year--;
            month += 12;
            if (day < 0) {
                month--;
            }
        }

        if (day < 0) {
            day += 30;
        }

        daysText.textContent = day;
        monthsText.textContent = month;
        yearsText.textContent = year;
    }

    else {
        daysText.textContent = "- -";
        monthsText.textContent = "- -";
        yearsText.textContent = "- -";
    }
}
