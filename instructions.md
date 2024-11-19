## Overview
In this milestone, we will be completing simple counter app built using React and Chakra UI. The app allows the user to:

1. Toggle the visibility of the counter.
2. Set a custom value for the counter using an input field.
3. Reset the counter to zero.
4. Increment the counter by one.

- Your task is to complete the implementation of the app by following the step-by-step tasks provided in the code.


You will be completing the following tasks to finish the functionality of the app:

**Task 1:**Declare the count state variable
- Use the useState hook to create a count variable with an initial value of 0.
- The count variable will store the current value of the counter.

**Task 2:**Declare the isVisible state variable
- Use useState to create a isVisible variable with an initial value of true.
- This variable will be used to control whether the counter is shown or hidden.

**Task 3:** Declare the inputValue state variable
- Use useState to create a inputValue variable with an initial value of an empty string.
- This variable will store the value entered in the input field by the user.

**Task 4:** Create the handleInputChange function
- This function will be triggered when the user types into the input field.
- It should update the inputValue state with the current value from the input.

**Task 5:** Create the applyInputValue function
- This function will set the count to the value entered in the input field.
- Make sure to use parseInt() to convert the string to a number and handle invalid input properly (e.g., use 0 as a default value).


**Task 6:** Create the "Toggle Counter Visibility" button
- When clicked, this button should toggle the isVisible state between true and false.
- If isVisible is true, the counter will be displayed; otherwise, it will be hidden.

**Task 7:** Create the input field
- Bind the input field's value to the inputValue state.
- Use the handleInputChange function to update the state whenever the input changes.

**Task 8:** Create the "Set Counter" button
- When clicked, this button should call the applyInputValue function to update the count with the value from the input field.

**Task 9:** Create the "Reset Counter" button
- When clicked, this button should reset the count to 0.

**Task 10:** Conditionally render the counter
- Only display the counter button and value if the isVisible state is true.

**Task 11:** Create the "Increment Counter" button
When clicked, this button should increment the count by 1.



## Test Cases
- should correctly increment counter when button is clicked
- should set counter value from input field
- should reset counter to zero
- should toggle visibility of the counter button

Use `npm run test:serve` to visualise the test cases.


## Expected Ouput
![](https://www.loom.com/share/2dcd8a1099904948af6e8237ded4bd50?sid=2ceb65c4-a478-4d8e-b102-9983c5db8362)
