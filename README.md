# Full Stack Development Learning Journal

> **Started:** 02/05/2026
> **Goal:** Land a full stack developer role within 3 months  
> **Current Week:** Week 1 of 12 (Week starts Thursdays)

---

## Quick Stats Tracker

| Metric                   | Count |
| ------------------------ | ----- |
| Total Days Coded         | 2     |
| GitHub Commits           | 15    |
| Projects Completed       | 1     |
| CodeWars Problems Solved | 4     |
| Job Applications Sent    | 0     |
| Interviews Scheduled     | 0     |

---

## Motivation & Mindset Section

### Quotes That Keep Me Going:

-
-
-

### Why I'm Doing This:

[Your personal reasons]

### When I Feel Stuck, I Remember:

-
-
-

### Wins to Celebrate (Big & Small):

-
-
- ***

## Resources Library

### Favorite Tutorials:

-

### Best Documentation:

-

### Helpful Communities:

-

### People to Follow:

-

### Tools I Love:

- ***

## Daily Entries Start Here ⬇️

---

<!-- Continue daily entries below -->

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
