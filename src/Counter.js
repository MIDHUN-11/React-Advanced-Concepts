import { useRef, useState } from "react";
import usePrevCustomHook from './usePrevCustomHookk';

const Counter=()=>{
    const[count,setCount]=useState(0);
    const myref=useRef(0);
    usePrevCustomHook(count);
    console.log(usePrevCustomHook);
    return(
        <>
        <div><button onClick={()=>{
            setCount(count+1);
        }}>+</button>{count}<button onClick={()=>{
            setCount(count-1);
        }}>-</button></div></>
       
    )
}
export default Counter;