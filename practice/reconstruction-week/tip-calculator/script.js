// 1.) Get elements by id
const element = (id) => document.getElementById(id);

const elements = {
  billAmount: element("billAmount"),
  tipPercentage: element("tipPercentage"),
  numPeople: element("numPeople"),
  calculateBtn: element("calculateBtn"),
  results: element("results"),
  tipAmount: element("tipAmount"),
  totalBill: element("totalBill"),
  perPerson: element("perPerson"),
}

const {billAmount, tipPercentage, numPeople, calculateBtn, results, tipAmount, totalBill, perPerson} = elements;

// 2.) Func - calcTip
const calculate = (billAmount, tipPercentage, numPeople) => {
    
    if (!validate(billAmount, tipPercentage, numPeople)) {
        return [];
    }
    // Convert to floats
    billAmount = parseFloat(billAmount);
    tipPercentage = parseFloat(tipPercentage);
    numPeople = parseFloat(numPeople);

    // Calculations
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalBill = billAmount + tipAmount;
    const perPerson = totalBill / numPeople;

    // Return array
    return [tipAmount, totalBill, perPerson]
}

// 4.) Validation
const validate = (billAmount, tipPercentage, numPeople) => {

    if (billAmount === '' || tipPercentage === '' || numPeople === '') {
        alert('Please enter a number in all fields.');
        return false
    };

    if (billAmount === NaN || tipPercentage === NaN || numPeople === NaN) {
        alert('Please input numbers only.');
        return false;
    }

    if (billAmount <= 0 || tipPercentage <= 0 || tipPercentage > 100 || numPeople < 1) {
        alert('Please enter a valid number in all fields.')
        return false;
    }

    return true;
}

// 5.) Event listeners

    calculateBtn.addEventListener(('click'), () => {

        const calcResults = calculate(billAmount.value, tipPercentage.value, numPeople.value)

        if (calcResults != false) {

            const [tip, total, eachPerson] = calcResults;
            
            // Unhide results
            results.classList.remove('hidden');

            // Display results
            tipAmount.textContent = `$${tip.toFixed(2)}`
            totalBill.textContent = `$${total.toFixed(2)}`
            perPerson.textContent = `$${eachPerson.toFixed(2)}`

        }
    });
