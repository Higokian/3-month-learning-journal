### Wednesday, 2/5/2026 - Day 1 of 90

**Time Spent:** ~3 hours

#### 🎯 Today's Focus:

- [x] Set up dev environment
- [x] Review let/const, Arrow Functions, Template Strings
- [x] Light reading on Destructuring

#### 📚 What I Learned:

- Arrow function syntax - [Let arrow = num => console.log(`${num}) ]
- Arrow functions take away the need to bind 'this' to '\_this' when working with an object outside of a function's scope

#### 💻 What I Built/Coded:

- I only spent some time completed exercises to help solidify the focus topics for today

#### 💡 Aha Moments:

- Arrow functions take away the need to bind 'this' to '\_this' when working with an object outside of a function's scope. I never understood the whole "\_this = this" trick until now! It's definitely a very convoluted way to reference an object that's outside of a function's scope.

#### 🚧 Challenges/Blockers:

- **Challenge:**
- **How I solved it (or plan to):**
- I was struggling to understand why logging a template literal containing html elements was only logging array items within it. I had to has Claude for help on this one. Turns part of the issue was trying to assign the log to a variable, rather than logging the variable itself. I also learned that console.log can hide html elements, which is most likely why the html elements were not appearing in my console.log.

#### 🔗 Resources Used:

- [How I Setup and Customize VSCode - Web Dev Simplified](https://youtu.be/VknMxAIbJj4?si=jw9Xk6QshAZVMbyX)
- [What is Node.js and how it works (explained in 2 minutes) - Code ON](https://youtu.be/q-xS25lsN3I?si=GyHr9WFO3bk_ATkB)
- [Git and Github for Beginners - Crash Course - freeCodeCamp.org](https://www.youtube.com/watch?v=RGOj5yH7evk)
- [JavaScript ES6 Tutorial #9 - Arrow Functions - Net Ninja](https://youtu.be/nMApc_undbI?si=AJI6bc8-NCavXEZ_)

#### ✅ Wins of the Day:

- Overcame a logging issue

#### 📝 Notes for Tomorrow:

- [ ] Since I started a day early, spend some time going through CodeWars challenges

#### 💭 Reflection:

Overall, I'm feeling pretty good about all of the topics I went over today. Being that I was already familiar with all of them, it all clicked pretty quickly. Despite that though, I still learned some new things! I'm excited to continue on and get into things unfamiliar.

---

### Friday (Started Thursday), 2/6/2026 - Day 2 of 90

**Time Spent:** ~3 hours

#### 🎯 Today's Focus:

- [x] Practice ES6 arrow functions and template literals
- [x] Build temperature converter app
- [x] Solve 1-2 CodeWars problems

#### 📚 What I Learned:

- How to create an event listener for pressing the Enter key

#### 💻 What I Built/Coded:

- Temperature converter app

#### 💡 Aha Moments:

- I couldn't wrap my head around why when adding an event listener to trigger the conversion by pressing space, must be attached to the input instead of the button. Then I realized, you have to attach it to the element that's currently the focus. In the case of pressing enter, the input is focused when typing anything in.

#### 🚧 Challenges/Blockers:

- **Challenge:**
- **How I solved it (or plan to):**
- My biggest challenge is what I wrote about in my "Aha!" moment. It took me a few different resources to figure it out. Ultimately, Gemini (AI) made it clear for me.

#### 🔗 Resources Used:

- [MDN - addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

#### ✅ Wins of the Day:

- Managed to use the shorthand arrow function without using a reference!
  `let evenOrOdd = number => number % 2 === 0 ? 'Even' : 'Odd';`
- Successfully created a 'keydown' event listener

#### 📝 Notes for Tomorrow:

- [ ] Destructuring
- [ ] Add more features to temperature converter app (doesn't have to be tomorrow)

#### 💭 Reflection:

Today's project was more challenging than the codewars challenges and Thursday's (2/5/2026) learnings. Overall, I'm pretty happy with my temperature converter app. I will definitely be adding more do it in the near future, probably on one of my 8-10 days. This project was really fun to make and I'm excited to start more!

#### Journal Prompts

1. What was easier than expected when building this project?
   - Nothing, really. This was a great challenge!

2. What was harder than expected?
   - Definitely creating an event listener for pressing "Enter" on the keyboard. I had thought that I could essentially just copy and paste my code for the button click event listener. Boy, was I wrong!

3. How comfortable do I feel with arrow functions now (1-10)?
   - 9/10

4. What feature would I add next if I had time?
   - I'd like to add a F to C conversion feature and possible a kelvin conversion.

5. Did I use template literals? How did they make my code cleaner?
   - Yes! I love template literals. They are much easier to work with than just concatenating everything.

---

### Saturday, 2/7/2026 - Day 3 of 90

**Time Spent:** ~ 4 hours

#### 🎯 Today's Focus:

- [x] Destructuring basics
- [x] Refactor Temp app
- [ ] Plan weekend projects

#### 📚 What I Learned:

- Mostly a refresher day, but I did learn a little bit about using config. I need to take some more time to figure it out, though.
-
-

#### 💻 What I Built/Coded:

- Mostly just destructuring exercises
- Refactored my temp conversion app to include destructuring where applicable.

#### 💡 Aha Moments:

I didn't really have an "aha" moment today, unfortunately.

#### 🚧 Challenges/Blockers:

- **Challenge:**
- **How I solved it (or plan to):**
- While refactoring my temperature converter app to use destructuring, claude wanted me to completely change up my event listener. However, I feel that how I currently have it coded is the best solution. Claude's solution confuses me a bit, so I plan to dig a little deeper into it to help me understand.

#### 🔗 Resources Used:

- [JS Algorithms and Data Structures - freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#es6)

#### ✅ Wins of the Day:

- Successfully refactored my temp converter app
-

#### 📝 Notes for Tomorrow:

- [ ] Continue to use destructuring to cement it into my brain
- [ ] Brainstorm weekend projects (can be done at work)

#### 💭 Reflection:

I'm feeling mostly fine about today's progress. I was really tired after work, so I definitely wasn't as productive as I could have been. I did manage to finish everything aside from brainstorming some projects for the weekend. My confidence with destructuring still has some room to grow, so I will be focusing on that for now.

---

### Sunday, 2/8/2026 - Day 4 of 90

**Time Spent:** [3 hours, 30 minutes]

#### 🎯 Today's Focus:

- [x] Learn spread operator and rest parameters
- [ ] Build a tip calculator using ES6 features
- [x] Continue refining destructuring skills

#### 📚 What I Learned:

- Config objects are used to pass a single object into a function to handle multiple settings, rather than pass a long list of arguments.
-
-

#### 💻 What I Built/Coded:

- First half of tip calculator project
-

#### 💡 Aha Moments:

> [No aha moments today unfortunately]

#### 🚧 Challenges/Blockers:

- **Challenge:**
- **How I solved it (or plan to):**
- Still working to fully wrap my head around how to properly use config objects. I plan to further research and practice this.

#### 🔗 Resources Used:

- [Rest Parameters spread(https://javascript.info/rest-parameters-spread)]
- [Documentation link]

#### ✅ Wins of the Day:

- Completed the HTML and CSS of tip calculator project
- Completed first half of the tip calculator project javascript

#### 📝 Notes for Tomorrow:

- [ ] Finish last 2 parts before continuing onto Monday's schedule
- [ ] [Any carry-over tasks]

#### 💭 Reflection:

Today was a long day for me, so my energy level is a bit low. Confidence isn't as high as the first few days. I'm struggling to understand when to use spread/rest operator and config objects. While today was mostly productive, I'm hoping a fresh start tomorrow will do some good.

## Daily Log Template

### [Monday], [2/9/2026] - Day [5] of 90

**Time Spent:** [4 hours]

#### 🎯 Today's Focus:

- [x] [Review ES6 concepts learned so far]
- [x] [Continue/enhance tip calculator]
- [ ] [Practice CodeWars problems]
- [ ] [Prep for tomorrow's big Tuesday learning day]

#### 📚 What I Learned:

- A lot of destructuring and spread/rest operator concepts clicked
- Learned how to do real-time calculation

#### 💻 What I Built/Coded:

- Added new features to tip calculator: reset button, quick tip buttons, and real-time calculation
-

#### 💡 Aha Moments:

- Using destructuring to easily create easier access to elements.
  ``
  // Helper function to get DOM elements by ID
  const getElement = (id) => document.getElementById(id);

// Get references to DOM elements
Const elements = {
billAmount: getElement("billAmount),
tipPercentage: getElement("tipPercentage),
numPeople: getElement("numPeople)
}

// Destructure elements for easier access
const {
billAmount,
tipPercentage,
numPeople,
etc
} = elements;

``

#### 🚧 Challenges/Blockers:

- **Challenge:**
- Biggest challenge was trying to use the spread operator on objects without realizing it. Once I realized that I needed to use array destructuring in order to spread them, it finally made more sense.
- **How I solved it (or plan to):**
- I put the TypeError code I was getting, into Gemini. It explained the issue with my code in detail.

#### ✅ Wins of the Day:

- Successfully added new features
- Completed tip calculator app so I can dive into my movie search app

#### 📝 Notes for Tomorrow:

- [ ] [Make sure to start on time and take your time!!]

#### 💭 Reflection:

I'm feeling a bit more confident than yesterday after having successfully added new features that required a couple of concepts that I was unfamiliar with. I am still a little concerned about my ability to correctly use destructuring and spread/rest operators.
