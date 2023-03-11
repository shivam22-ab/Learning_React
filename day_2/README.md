<!-- use of state  -->
1. Why do we use useState?
=> We use "useState" to change the state of a component. The useState re-renders the components to show the final result of the component. Like if in a component there is initial state with no any data  but later if the components get data from the API, useState() will help to rerender the component to show it with the data from the API.
Syntax: 
const [variable, function to set that variable] = useState(Initial value);
EG: const [value, setValue] = useState(0);