import { useState } from 'react';
import './App.css';
import { Button, Input, ChakraProvider } from '@chakra-ui/react';

function App() {
  // Task 1: Declare a state variable 'count' using useState (initial value: 0)


  // Task 2: Declare a state variable 'isVisible' using useState (initial value: true)


  // Task 3: Declare a state variable 'inputValue' using useState (initial value: empty string)


  // Task 4: Create a function to handle changes in the input field
  const handleInputChange = (event) => {
    // Update the 'inputValue' with the value entered in the input field
   
  };

  // Task 5: Create a function to apply the input value to the 'count' variable
  const applyInputValue = () => {
    // Use parseInt to update the 'count' if the input value is a valid number
   
  };

  return (
    <ChakraProvider>
      <div>
        {/* Task 6: Button to toggle counter visibility */}
        <Button onClick={() =>{/* Toggle the value of isVisible */}}>
          Toggle Counter Visibility
        </Button>

        {/* Task 7: Input field to allow users to set the counter value */}
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Set counter value"
        />

        {/* Task 8: Button to set the counter value to the input field value */}
        <Button onClick={applyInputValue} className="set-counter-button">Set Counter</Button>

        {/* Task 9: Button to reset the counter value to 0 */}
        <Button onClick={() => {/* Set count to 0 */}}>Reset Counter</Button>
      </div>
      
      {/* Task 10: Conditionally render the counter only if 'isVisible' is true */}
      {isVisible && (
        <div className="card">
          {/* Task 11: Button to increment the counter */}
          <Button 
            onClick={() => {/* Increment the count */}}
            className="chakra-button"
          >
            count is {count}
          </Button>
        </div>
      )}
    </ChakraProvider>
  );
}

export default App;
