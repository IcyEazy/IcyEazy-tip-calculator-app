var amountInput = document.getElementById("amount"),
    peopleInput = document.getElementById("people"),
    tipAmountPerPerson = document.getElementById("result-num-person"),
    totalAmountPerPerson = document.getElementById("result-num-total"),
    fivePercentBtn = document.querySelectorAll(".five"),
    tenPercentBtn = document.querySelectorAll(".ten"),
    fifteenPercentBtn = document.querySelectorAll(".fifteen"),
    twentyPercentBtn = document.querySelectorAll(".twenty"),
    twentyFivePercentBtn = document.querySelectorAll(".twenty-five"),
    CustomPercentInput = document.getElementById("custom"),
    mobileCustomPercentInput = document.getElementById("mobile-custom"),
    resetBtn = document.querySelector(".btn-reset"),
    inputPeople = document.getElementById("input-people"),
    errorMsg = document.querySelector(".error"),
    inputAmount = document.getElementById("input-amount"),
    errorMsgAmount = document.querySelector(".error-bill");


fivePercentBtn.forEach((click, i) => {
    fivePercentBtn[i].addEventListener('click', function(){
        if(amountInput.value > "0"){
            errorMsgAmount.style.display = "none";
            inputAmount.classList.remove("error-border");
            if(peopleInput.value > "0"){
                errorMsg.style.display = "none";
                inputPeople.classList.remove("error-border");
                var tip = ((5 * parseFloat(amountInput.value))/(100 * parseFloat(peopleInput.value))).toFixed(2);
                var amount = (parseFloat(amountInput.value)/parseFloat(peopleInput.value)).toFixed(2);
                var total = (parseFloat(tip) + parseFloat(amount)).toFixed(2);
                tipAmountPerPerson.innerText = tip;
                totalAmountPerPerson.innerText = total;
            }
            else{
                errorMsg.style.display = "inline";
                inputPeople.classList.add("error-border");
            }
        }
        else{
            errorMsgAmount.style.display = "inline";
            inputAmount.classList.add("error-border");
        }
    });
});

tenPercentBtn.forEach((click, i) => {
    tenPercentBtn[i].addEventListener('click', function(){
        if(amountInput.value > "0"){
            errorMsgAmount.style.display = "none";
            inputAmount.classList.remove("error-border");
            if(peopleInput.value > "0"){
                errorMsg.style.display = "none";
                inputPeople.classList.remove("error-border");
                var tip = ((10 * parseFloat(amountInput.value))/(100 * parseFloat(peopleInput.value))).toFixed(2);
                var amount = (parseFloat(amountInput.value)/parseFloat(peopleInput.value)).toFixed(2);
                var total = (parseFloat(tip) + parseFloat(amount)).toFixed(2);
                tipAmountPerPerson.innerText = tip;
                totalAmountPerPerson.innerText = total;
            }
            else{
                errorMsg.style.display = "inline";
                inputPeople.classList.add("error-border");
            }
        }
        else{
            errorMsgAmount.style.display = "inline";
            inputAmount.classList.add("error-border");
        }
    });
});

fifteenPercentBtn.forEach((click, i) => {
    fifteenPercentBtn[i].addEventListener('click', function(){
        if(amountInput.value > "0"){
            errorMsgAmount.style.display = "none";
            inputAmount.classList.remove("error-border");
            if(peopleInput.value > "0"){
                errorMsg.style.display = "none";
                inputPeople.classList.remove("error-border");
                var tip = ((15 * parseFloat(amountInput.value))/(100 * parseFloat(peopleInput.value))).toFixed(2);
                var amount = (parseFloat(amountInput.value)/parseFloat(peopleInput.value)).toFixed(2);
                var total = (parseFloat(tip) + parseFloat(amount)).toFixed(2);
                tipAmountPerPerson.innerText = tip;
                totalAmountPerPerson.innerText = total;
            }
            else{
                errorMsg.style.display = "inline";
                inputPeople.classList.add("error-border");
            }
        }
        else{
            errorMsgAmount.style.display = "inline";
            inputAmount.classList.add("error-border");
        }
    });
});

twentyPercentBtn.forEach((click, i) => {
    twentyPercentBtn[i].addEventListener('click', function(){
        if(amountInput.value > "0"){
            errorMsgAmount.style.display = "none";
            inputAmount.classList.remove("error-border");
            if(peopleInput.value > "0"){
                errorMsg.style.display = "none";
                inputPeople.classList.remove("error-border");
                var tip = ((20 * parseFloat(amountInput.value))/(100 * parseFloat(peopleInput.value))).toFixed(2);
                var amount = (parseFloat(amountInput.value)/parseFloat(peopleInput.value)).toFixed(2);
                var total = (parseFloat(tip) + parseFloat(amount)).toFixed(2);
                tipAmountPerPerson.innerText = tip;
                totalAmountPerPerson.innerText = total;
            }
            else{
                errorMsg.style.display = "inline";
                inputPeople.classList.add("error-border");
            }
        }
        else{
            errorMsgAmount.style.display = "inline";
            inputAmount.classList.add("error-border");
        }
    });
});

twentyFivePercentBtn.forEach((click, i) => {
    twentyFivePercentBtn[i].addEventListener('click', function(){
        if(amountInput.value > "0"){
            errorMsgAmount.style.display = "none";
            inputAmount.classList.remove("error-border");
            if(peopleInput.value > "0"){
                errorMsg.style.display = "none";
                inputPeople.classList.remove("error-border");
                var tip = ((25 * parseFloat(amountInput.value))/(100 * parseFloat(peopleInput.value))).toFixed(2);
                var amount = (parseFloat(amountInput.value)/parseFloat(peopleInput.value)).toFixed(2);
                var total = (parseFloat(tip) + parseFloat(amount)).toFixed(2);
                tipAmountPerPerson.innerText = tip;
                totalAmountPerPerson.innerText = total;
            }
            else{
                errorMsg.style.display = "inline";
                inputPeople.classList.add("error-border");
            }
        }
        else{
            errorMsgAmount.style.display = "inline";
            inputAmount.classList.add("error-border");
        }
    });
});

mobileCustomPercentInput.addEventListener("keyup", function(e){
    if(e.key === 'Enter'){
        if(amountInput.value > "0"){
            errorMsgAmount.style.display = "none";
            inputAmount.classList.remove("error-border");
            if(peopleInput.value > "0"){
                errorMsg.style.display = "none";
                inputPeople.classList.remove("error-border");
                var tip = ((parseFloat(mobileCustomPercentInput.value) * parseFloat(amountInput.value))/(100 * parseFloat(peopleInput.value))).toFixed(2);
                var amount = (parseFloat(amountInput.value)/parseFloat(peopleInput.value)).toFixed(2);
                var total = (parseFloat(tip) + parseFloat(amount)).toFixed(2);
                tipAmountPerPerson.innerText = tip;
                totalAmountPerPerson.innerText = total;
            }
            else{
                errorMsg.style.display = "inline";
                inputPeople.classList.add("error-border");
            }
        }
        else{
            errorMsgAmount.style.display = "inline";
            inputAmount.classList.add("error-border");
        }
    }
});

CustomPercentInput.addEventListener("keyup", function(e){
    if(e.key === 'Enter'){
        if(amountInput.value > "0"){
            errorMsgAmount.style.display = "none";
            inputAmount.classList.remove("error-border");
            if(peopleInput.value > "0"){
                errorMsg.style.display = "none";
                inputPeople.classList.remove("error-border");
                var tip = ((parseFloat(CustomPercentInput.value) * parseFloat(amountInput.value))/(100 * parseFloat(peopleInput.value))).toFixed(2);
                var amount = (parseFloat(amountInput.value)/parseFloat(peopleInput.value)).toFixed(2);
                var total = (parseFloat(tip) + parseFloat(amount)).toFixed(2);
                tipAmountPerPerson.innerText = tip;
                totalAmountPerPerson.innerText = total;
            }
            else{
                errorMsg.style.display = "inline";
                inputPeople.classList.add("error-border");
            }
        }
        else{
            errorMsgAmount.style.display = "inline";
            inputAmount.classList.add("error-border");
        }
    }
});

resetBtn.addEventListener("click", function(){
    amountInput.value = "";
    peopleInput.value = "";
    tipAmountPerPerson.innerText = "0.00";
    totalAmountPerPerson.innerText = "0.00";
    CustomPercentInput.value = "";
    mobileCustomPercentInput.value = "";
    errorMsg.style.display = "none";
    errorMsgAmount.style.display = "none";
    inputAmount.classList.remove("error-border");
    inputPeople.classList.remove("error-border");
});