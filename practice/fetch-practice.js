// ====== EXAMPLE 1: Basic Fetch =====

const btn1 = document.getElementById('btn1');
const result = document.getElementById('result');

btn1.addEventListener('click', async () => {
    // Step 1: Fetch the data (returns a "Response" object)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    // Step 2: Convert response to JSON (JavaScript object)
    const data = await response.json();

    // Step 3: Use the Data!
    console.log(data);
    result.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.body}</p>`
})