import { useEffect, useReducer, useRef } from "react";

const useCustomHook1=()=>{
    const myref=useRef(0);
    if(myref.current==0) console.log("i mounted using ref");
    myref.current++;
    useEffect(()=> console.log("i mounted"),[])
   
}
export default useCustomHook1;