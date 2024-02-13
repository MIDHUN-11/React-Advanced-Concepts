import { useEffect, useRef, useState } from "react";

const useCustomHook2=()=>{
    // const [count,setCount]=useState(0);
    const myref=useRef(0);
    // useEffect(()=>{
        // setCount(count+1);
        // const curVal=myref.current;
        // console.log(curVal+1);
        // myref.current=curVal+1;
        console.log(myref.current++);
    // });
}
export default useCustomHook2;