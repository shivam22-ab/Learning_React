import { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import { useEffect } from 'react';
import LoginController from './components/LoginController';

// function Test() {
//   const user = {
//     firstName:"Shivam",
//     lastName: "Ranabhat"
//   }
//   function userDetails(user){
//     return user.firstName+" "+user.lastName
//   }
//   //Conditional jsx
//   function getGreeting(user){
//     if(user){
//       return <h1>Hello, {userDetails(user)}</h1>
//     }
//     else{
//       return <h1>Hello, stranger</h1>
//     }
//   }
//   const text1= "Hello, World";
//   // const text2= "Creating react app";
//   return (
//     // <div>{userDetails(user)}</div>
//     <div>
//      {getGreeting(user)}
//     </div>
//   );
// }

//use of props inside component
// function App(){
//   const userInfo = {
//     firstName:"Shivam",
//     lastName: "Ranabhat"
//   }
//   return (
//     <>
//     <Welcome user="User A"/>
//     <Welcome user="User B"/>
//     <Welcome user="User C"/>
//     </>
  
//   );
// }

function App(){
  const [flag, setFlag] = useState(false);
  return(
    <>
    {/* <button onClick={()=>setFlag( !flag)}>Toggle</button><br></br>
    {flag ?<Clock />:"No component"} */}
    <LoginController />
  </>
  );
}
export default App;
