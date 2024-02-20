import { useRef } from "react";

const usePrevCustomHook=(count)=>{
    let currentCount=count;
    const myref=useRef(0);
    // console.log("prev val ",myref.current);
    myref.current=currentCount;
    return myref.current;

}
export default usePrevCustomHook;