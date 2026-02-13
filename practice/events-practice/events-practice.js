// ===== CLICK EVENTS =====

const clickBtn = document.getElementById('clickBtn');
const clickCount = document.getElementById('clickCount');
let clicks = 0;

clickBtn.addEventListener('click', () => {
    clicks++;
    clickCount.textContent = `Clicks: ${clicks}`;
});

// You can also use a named function
function handleClick() {
    console.log('Button clicked!');
}
// clickBtn.addEventListener('click', handleClick);


// ===== INPUT EVENTS =====

const textInput = document.getElementById('textInput');
const inputDisplay = document.getElementById('inputDisplay');

// 'input' event fires on every keystroke
textInput.addEventListener('input', (event) => {
    // event.target is the element that triggered the event
    const value = event.target.value;
    inputDisplay.textContent = `You typed: ${value}`;
});

// 'change' event fires when input loses focus
textInput.addEventListener('change', (event) => {
    console.log('Input changed to:', event.target.value);
});


// ===== KEYBOARD EVENTS =====

const keyInput = document.getElementById('keyInput');
const keyDisplay = document.getElementById('keyDisplay');

keyInput.addEventListener('keydown', (event) => {
    // event.key is the key that was pressed
    keyDisplay.textContent = `Last key: ${event.key}`;
    
    // Special keys
    if (event.key === 'Enter') {
        console.log('Enter was pressed!');
    }
    
    if (event.key === 'Escape') {
        keyInput.value = '';
        keyDisplay.textContent = 'Last key: (cleared)';
    }
});


// ===== MOUSE EVENTS =====

const mouseBox = document.getElementById('mouseBox');
const mouseStatus = document.getElementById('mouseStatus');

mouseBox.addEventListener('mouseenter', () => {
    mouseBox.style.background = '#764ba2';
    mouseStatus.textContent = 'Status: Mouse entered!';
});

mouseBox.addEventListener('mouseleave', () => {
    mouseBox.style.background = '#667eea';
    mouseStatus.textContent = 'Status: Mouse left!';
});

mouseBox.addEventListener('click', () => {
    mouseBox.textContent = 'Clicked!';
    setTimeout(() => {
        mouseBox.textContent = 'Hover over me!';
    }, 1000);
});


// ===== FORM EVENTS =====

const myForm = document.getElementById('myForm');
const nameInput = document.getElementById('nameInput');
const formResult = document.getElementById('formResult');

/*myForm.addEventListener('submit', (event) => {
    // IMPORTANT: Prevent page reload
    event.preventDefault();
    
    const name = nameInput.value;
    formResult.textContent = `Hello, ${name}!`;
    
    // Clear the form
    myForm.reset();
});*/


// ===== EVENT OBJECT PROPERTIES =====

document.addEventListener('click', (event) => {
    console.log('Click event object:', {
        target: event.target,        // Element that was clicked
        type: event.type,            // 'click'
        clientX: event.clientX,      // Mouse X position
        clientY: event.clientY,      // Mouse Y position
        timeStamp: event.timeStamp   // When it happened
    });
});


// ===== REMOVING EVENT LISTENERS =====

const tempBtn = document.createElement('button');
tempBtn.textContent = 'Remove me';
document.body.appendChild(tempBtn);

function tempHandler() {
    console.log('Temporary button clicked');
    // Remove this event listener after first click
    tempBtn.removeEventListener('click', tempHandler);
    tempBtn.textContent = 'Event removed!';
}

tempBtn.addEventListener('click', tempHandler);


// ===== YOUR TURN: PRACTICE =====

// Exercise 1: Add a double-click event to clickBtn that resets the counter
document.addEventListener("dblclick", () => {
    clicks = 0;
    clickCount.textContent = `Clicks: ${clicks}`;
});

// Exercise 2: Make textInput turn red when it's empty and green when it has text

textInput.addEventListener("input", (event) => {

    const value = event.target.value;

    if (value === '') {
        textInput.style.background = 'red';
    } else {
        textInput.style.background = 'green';
    }
})

// Exercise 3: Add a keypress event that shows an alert when 'h' is pressed
document.addEventListener('keypress', (event) => {
   
    if (event.key === 'h') {
        alert('h has been pressed!')
    }

})

// Exercise 4: Make mouseBox change color on every click (cycle through colors)
const colors = ['red', 'blue', 'yellow', 'green']
let i = 0;

console.log(i);
console.log(colors.length);

mouseBox.addEventListener('click', () => {
    
    // Must test for value of i BEFORE changing color
    if (i >= colors.length) {
        i = 0;
    }
    mouseBox.style.background = `${colors[i]}`
    i++;
})

// Exercise 5: Add validation to the form - name must be at least 3 characters
 myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value;
    if (name.length < 3) {
        formResult.textContent = "Name must be at least 3 characters."
    } else {
        formResult.textContent = `Hello, ${name}!`;
    }

    myForm.reset();
 })