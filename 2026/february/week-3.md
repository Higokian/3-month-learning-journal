## Daily Log Template

### [Thursday], [2/19/2026] - Day [15]

**Time Spent:** [~ 2 hours 30 minutes]

#### 🎯 Today's Focus:

- [x] [Start tip calculator app]
- [x] [Tip calculator page layout (at least)]

#### 📚 What I Learned:

- Not to forget to update variables throughout code when changing the assigning variable...
- Don't forget to use const when destructuring!
- Implicit vs. explicit return when using arrow function (Forgot including { } = explicit)
- 

#### 💻 What I Built/Coded:

- Reconstructed tip calculator app

#### 💡 Aha Moments:

My biggest aha moment was getting my validation to work correctly! I new I wanted it to be in it's own function, but struggled to figure out where to put it so it would properly validate. 

#### 🚧 Challenges/Blockers:

- **Challenge:**
Getting validation to work correctly
- **How I solved it (or plan to):**
Since I opted for having my calculate() return an array and I destructered it, my validation function had to return an iterable. At first I couldn't figure out what it should return, so I did some research and found that returning an empty array could work. However, instead of that, I discovered I could just save the array to a variable and validate via that variable. If the validation succeeds, then I can destructure the array and display the results! I mostly solved it via trial and error, but googling helped a bit as well.

#### 🔗 Resources Used:

- None today!

#### ✅ Wins of the Day:

- Figured out my validation issue mostly on my own
- Completed all of the javascript/logic without any referencing

#### 📝 Notes for Tomorrow:

- [ ] [Clean up tip calculator code and maybe add quick tip and reset buttons]
- [ ] [Get started on movie search reconstruction]

#### 💭 Reflection:

I'm actually feeling pretty good about my progress today! It went a lot smoother than I expected (also took less time because I decided not to worry about recreating the html/css and just copied and pasted it from the first version. I'm focused on the js, so I didn't feel it was necessary to worry about html/css for now). What I was not expecting, was to have problems with validation, as it typically seems pretty straight forward. I am, however, really happy that I managed to use destructuring without even having to reference MDN! Tomorrow, I think I will revisit this and try to refactor a little bit to include the spread operator. I already have at least 1 idea of where I can implement that. Until tomorrow!