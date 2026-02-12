// ===== SELECTING ELEMENTS =====

// 1. getElementById - selects ONE element by id
const header = document.getElementById("main-header");
console.log(header);

// 2. getElementsByClassName - selects ALL elements with class (returns HTMLCollection)
const navLinks = document.getElementsByClassName("nav-link");
console.log(navLinks); // HTMLCollection of 3 links
console.log(navLinks[0]); // First link

// 3. getElementsByTagName - selects ALL elements by tag name
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // All <p> elements

// 4. querySelector - selects FIRST element matching CSS selector
const firstParagraph = document.querySelector(".text");
console.log(firstParagraph); // First element with class "text"

const highlightedPara = document.querySelector(".highlight");
console.log(highlightedPara); // Element with class "highlight"

// Complex selectors
const firstNavLink = document.querySelector(".navbar .nav-link");
console.log(firstNavLink);

// 5. querySelectorAll - selects ALL elements matching CSS selector (returns NodeList)
const allParagraphs = document.querySelectorAll(".text");
console.log(allParagraphs); // NodeList of 3 paragraphs

// NodeList can use forEach!
allParagraphs.forEach((p) => {
  console.log(p.textContent);
});

// ===== DOM TRAVERSAL (NAVIGATION) =====

const contentSection = document.getElementById("content");

// Parent
console.log(contentSection.parentElement); // <main>

// Children
console.log(contentSection.children); // HTMLCollection of child elements
console.log(contentSection.firstElementChild); // <h2>
console.log(contentSection.lastElementChild); // Last <p>

// Siblings
const h2 = document.querySelector("#content h2");
console.log(h2.nextElementSibling); // Next element (first <p>)
console.log(h2.previousElementSibling); // null (no previous sibling)

// ===== MODIFYING CONTENT =====

// textContent - just the text
const title = document.querySelector("h1");
console.log(title.textContent); // "DOM Selection Practice"
title.textContent = "Modified Title!";

// innerHTML - HTML content (can include tags)
const firstP = document.querySelector(".text");
console.log(firstP.innerHTML);
firstP.innerHTML = "This is <strong>modified</strong> text!";

// ===== MODIFYING STYLES =====

// Change CSS directly
title.style.color = "blue";
title.style.fontSize = "48px";

// Better practice: add/remove classes
highlightedPara.classList.add("new-class");
highlightedPara.classList.remove("highlight");
highlightedPara.classList.toggle("active"); // Adds if not there, removes if present

// Check if has class
console.log(highlightedPara.classList.contains("text")); // true

// ===== ATTRIBUTES =====

const firstLink = document.querySelector(".nav-link");

// Get attribute
console.log(firstLink.getAttribute("href")); // "#"

// Set attribute
firstLink.setAttribute("href", "https://google.com");

// Remove attribute
firstLink.removeAttribute("href");

// Data attributes
const firstItem = document.querySelector('[data-id="1"]');
console.log(firstItem.dataset.id); // "1"

// ===== YOUR TURN: PRACTICE EXERCISES =====

// Exercise 1: Select the element with id "list-section"
const listSection = document.getElementById("list-section");
console.log(listSection);

// Exercise 2: Select ALL list items (li elements)
const listItems = document.querySelectorAll("li");
console.log(listItems);

// Exercise 3: Change the text of the h2 in #content to "Updated Section"
const content = document.querySelector("#content h2");
console.log(content);
content.textContent = "Updated Section";

// Exercise 4: Add a class "completed" to the second list item
const secondItem = document.querySelector('[data-id="2"]');
secondItem.classList.add("completed");
console.log(secondItem);

// Exercise 5: Get the parent element of #my-list
const myList = document.getElementById("my-list");
console.log(myList.parentElement);

// Exercise 6: Select all paragraphs with class "text" and change their color to red
// Hint: Use querySelectorAll and forEach
allParagraphs.forEach((pColor) => {
  console.log("Updated element: ", pColor);
  pColor.style.color = "red";
});

// Exercise 7: Get the data-id attribute from the third list item
const thirdItem = document.querySelector('[data-id="3"]');
console.log(thirdItem);
