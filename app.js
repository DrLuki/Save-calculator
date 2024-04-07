const savingsInput = document.getElementById("savingsInput");
const osszsavings = document.getElementById("osszsavings");
const btn = document.querySelector('#btn');
const time = document.querySelector('#time')
const radioButtons  = document.querySelectorAll('input[name="savingsCel"]')
const vanElegPenz = document.getElementById('vanElegPenz');
let ossz;
btn.onclick = () => {

    if (savingsInput.value === "" || time.value === "none") {
        return alert("Missing information!");

    }

    if (time.value === 'half') {
        ossz = savingsInput.value * 26;
        osszsavings.innerHTML = `Total savings: ${ossz}`;
    } else if (time.value === 'one') {
        ossz = savingsInput.value * 52;
        osszsavings.innerHTML = `Total savings: ${ossz}`;
    } else if (time.value === 'three') {
        ossz = savingsInput.value * 156;
        osszsavings.innerHTML = `Total savings: ${ossz}`;
    } else if (time.value === 'five') {
        ossz = savingsInput.value * 260;
        osszsavings.innerHTML = `Total savings: ${ossz}`;
    }



    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }

    if(selectedSize <= ossz){
        vanElegPenz.innerHTML = "You have enough money for it";
    }else{
        vanElegPenz.innerHTML = "You don't have enough money for it";

    }

};

