import React,{ useState, useEffect } from "react";
function Clock(){
    const [time, setTime] = useState(new Date().toString());
    
    useEffect(()=>{
        console.log("Component is affecting");
    },[time])
    function showDate(){
        // console.log(new Date().toString());
        return setTime(new Date().toString());
    }
    setInterval(showDate, 1000);
    return <div>{time}</div>;
}
export default Clock;