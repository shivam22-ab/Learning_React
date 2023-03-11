import {useState} from "react";
function LoginController()
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogInClick = ()=>{
        setIsLoggedIn(true);
    }
    const handleLogOutClick = ()=>{
        setIsLoggedIn(false);
        
    }
    let button;
    if(isLoggedIn){
        button = <LogOutButton onClick={handleLogOutClick}/>
    }
    else{
        button = <LogInButton onClick={handleLogInClick}/>
    } 
    return <div>{button}</div>;
}
 function LogInButton(props)
 {
    return <button onClick={props.onClick}>Login</button>
 }
 function LogOutButton(props)
 {
    return <button onClick={props.onClick}>Logout</button>
 }

export default LoginController;







































