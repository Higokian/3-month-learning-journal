// Get elements
const elements = {
    celsiusInput : document.getElementById('celsiusInput'),
    calculateBtn : document.getElementById('calculateBtn'),
    results : document.getElementById('results')
}

const {celsiusInput, calculateBtn, results} = elements

// Hide results
results.hidden = true;

// Conversion Calculation
const convert = (celsius) => {
    return (celsius * 9 / 5) + 32;
};

// Click submit
calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const converted = convert(celsiusInput.value); // Don't forget to use .value!!
    results.hidden = false;
    results.textContent = `${celsiusInput.value}C converts to ${converted}F`
});

// Display results
console.log(celsiusInput);