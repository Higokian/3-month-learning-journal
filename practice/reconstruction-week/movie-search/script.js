// 1. Configuration
const API_KEY = '812feebc'; // Get from omdbapi.com
const API_URL = 'https://www.omdbapi.com/';

// 2. Select DOM elements
// TODO: Select searchInput, searchBtn, error, results
const element = (id) => document.getElementById(id);

const elements = {
    searchInput : element('searchInput'),
    searchBtn : element('searchBtn'),
    error : element('error'),
    results : element('results')
};

const {searchInput, searchBtn, error, results} = elements;

// 3. Fetch movies function
// TODO: Write async function that fetches from API

// 4. Display movies function
// TODO: Use map() to create HTML cards

// 5. Show error function
// TODO: Display error messages

// 6. Main search function
// TODO: Tie everything together

// 7. Event listeners
// TODO: Add click and Enter key support